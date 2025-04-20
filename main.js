import { GoogleGenerativeAI, HarmBlockThreshold, HarmCategory } from '@google/generative-ai';
import Base64 from 'base64-js';

const API_KEY = 'AIzaSyAyS98DfW-NJE0tnFPO1X7FTYqFg6_pRag'; // ← Replace with your actual Gemini API key

const uploadForm = document.querySelector('#uploadForm');
const fileInput = uploadForm.querySelector('input[type="file"]');
const output = document.querySelector('.output');
const preview = document.querySelector('.preview');
const processDataBtn = document.querySelector('#processDataBtn');
const soilForm = document.querySelector('#soilForm');

uploadForm.onsubmit = async (e) => {
  e.preventDefault();
  output.textContent = 'Analyzing image...';

  const file = fileInput.files[0];
  if (!file) {
    output.textContent = 'Please select an image.';
    return;
  }

  preview.src = URL.createObjectURL(file);

  const arrayBuffer = await file.arrayBuffer();
  const imageBase64 = Base64.fromByteArray(new Uint8Array(arrayBuffer));

  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({
    model: 'gemini-2.0-flash',
    safetySettings: [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
      },
    ],
  });

  const prompt = `Extract all structured data from the given Soil Health Card image and organize it into a clean, machine-readable JSON object.

Important:
- Output only the JSON object.
- Do not include triple backticks.
- Do not wrap the JSON in a string.
- Do not include markdown formatting like \`\`\`json ... \`\`\`.
AND ONLY PROVIDE THE STATE NAME NOT THE DISTICT NAME FROM "DistrictAgricultureOffice AND NAME IN PROPER GRAMMER LIKE THIS "Himachal Pradesh"
PROVIDE ALL THE VALUES IN ONLY UPTO 1 DECIMAL PLACE 

Just return a valid raw JSON object using this JSON schema:

{
  "SoilHealthCardNumber": "string",
  "SoilTestResults": {
    "DistrictAgricultureOffice": "string",
    "SoilType": "string",
    "tests": [
      {
        "SrNo": "number",
        "Parameter": "string",
        "TestValue": "number",
        "Unit": "string | null",
        "Rating": "string",
        "NormalLevel": "string"
      }
    ]
  },
  "FarmerDetails": {
    "FarmerName": "string | null",
    "FathersOrHusbandsName": "string | null",
    "Address": "string | null",
    "MobileNo": "string | null",
    "Gender": "string | null",
    "Category": "string | null"
  },
  "SoilSampleDetails": {
    "DateOfSampleCollection": "string",
    "SurveyOrKhasraNo": "string",
    "FarmSize": "string",
    "Irrigated": "string",
    "GeoPosition": {
      "Latitude": "string",
      "Longitude": "string"
    }
  },
  "FertilizerRecommendations": {
    "Option1": {
      "Crop": "string",
      "FertilizerCombination1_kgPerHa": {
        "Urea": "number",
        "SingleSuperphosphate": "number",
        "MuriateOfPotash": "number"
      },
      "OrganicFertilizerAndQuantity": {
        "FYM": "string"
      }
    },
    "Option2": {
      "Crop": "string",
      "FertilizerCombination2_kgPerHa": {
        "NPK_12_32_16": "number",
        "Urea_46N": "number",
        "SingleSuperphosphate": "number"
      },
      "OrganicFertilizerAndQuantity": {
        "FYM": "string"
      },
      "ReferenceYield": "string"
    }
  },
  "KisanCallCenter": "string",
  "Website": "string"
}`;

  const contents = [
    {
      role: 'user',
      parts: [
        { inline_data: { mime_type: file.type, data: imageBase64 } },
        { text: prompt },
      ],
    },
  ];

  try {
    const result = await model.generateContentStream({ contents });
    let text = '';

    for await (let chunk of result.stream) {
      text += chunk.text();
    }

    const cleaned = text.trim()
      .replace(/^```json/, '')
      .replace(/^```/, '')
      .replace(/```$/, '')
      .trim();

    try {
      const json = JSON.parse(cleaned);
      
      output.textContent = ''; // Hides JSON from user
  console.log('Parsed JSON:', json); // Debug: View JSON in console// Pretty print

      processDataBtn.style.display = 'block';
      processDataBtn.onclick = () => populateForm(json);
    } catch (parseErr) {
      output.textContent = '⚠️ Failed to parse JSON:\n' + parseErr.message + '\n\nRaw output:\n' + cleaned;
    }
  } catch (err) {
    output.textContent = 'Error: ' + err;
  }
};

// Function to populate the form with JSON data
function populateForm(json) {
  const soilData = json.SoilTestResults.tests;

  // Map JSON data to form fields (convert units where necessary)
  soilData.forEach(test => {
    switch (test.Parameter) {
      case 'pH':
        document.getElementById('ph').value = test.TestValue.toFixed(1);
        break;
      case 'Available Nitrogen (N)':
        document.getElementById('nitrogen').value = (test.TestValue * 0.1).toFixed(1); // kg/ha to mg/kg (approx)
        break;
      case 'Available Phosphorus (P)':
        document.getElementById('phosphorus').value = (test.TestValue * 0.1).toFixed(1); // kg/ha to mg/kg (approx)
        break;
      case 'Available Potassium (K)':
        document.getElementById('potassium').value = (test.TestValue * 0.1).toFixed(1); // kg/ha to mg/kg (approx)
        break;
      case 'Organic Carbon (OC)':
        document.getElementById('organicMatter').value = test.TestValue.toFixed(1);
        break;
    }
  });

  // Set state based on DistrictAgricultureOffice
  const state = json.SoilTestResults.DistrictAgricultureOffice.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Set state based on the cleaned-up value
  document.getElementById('state').value = state;
  

  // Set texture based on SoilType
  document.getElementById('texture').value = json.SoilTestResults.SoilType.toLowerCase();

  // Dynamically recommend a crop based on soil parameters
  const recommendedCrop = getRecommendedCrop({
    pH: parseFloat(document.getElementById('ph').value),
    nitrogen: parseFloat(document.getElementById('nitrogen').value),
    phosphorus: parseFloat(document.getElementById('phosphorus').value),
    potassium: parseFloat(document.getElementById('potassium').value),
    organicMatter: parseFloat(document.getElementById('organicMatter').value),
    texture: document.getElementById('texture').value
  });

  document.getElementById('recommendedCrop').value = recommendedCrop;
}

// Function to determine the recommended crop based on soil data
// Function to determine the recommended crops based on soil data
function getRecommendedCrop(soilData) {
  const cropRecommendations = [
    {
      name: "Wheat",
      pH: { min: 7.0, max: 7.5 },
      nitrogen: { min: 400, max: 500 },
      phosphorus: { min: 0, max: 10 },
      potassium: { min: 200, max: 250 },
      organicMatter: { min: 0, max: 0.2 },
      texture: ["acidic hill soil", "loamy"],
      states: ["Himachal Pradesh", "Uttar Pradesh", "Madhya Pradesh"]
    },
    {
      name: "Cotton",
      pH: { min: 7.0, max: 7.5 },
      nitrogen: { min: 40.0, max: 50.0 },
      phosphorus: { min: 0, max: 10 },
      potassium: { min: 20.0, max: 25.0 },
      organicMatter: { min: 0, max: 3 },
      texture: ["acidic hill soil", "sandy"],
      states: ["Himachal Pradesh", "Maharashtra", "Rajasthan"]
    },
    {
      name: "Tomato",
      pH: { min: 7.0, max: 7.5 },
      nitrogen: { min: 40.0, max: 50.0 },
      phosphorus: { min: 0, max: 10 },
      potassium: { min: 200, max: 250 },
      organicMatter: { min: 0, max: 0.2 },
      texture: ["acidic hill soil"],
      states: ["Himachal Pradesh", "Madhya Pradesh", "Maharashtra"]
    },
    {
      name: "Potatoes",
      pH: { min: 7.0, max: 8.5 },
      nitrogen: { min: 40.0, max: 50.0 },
      phosphorus: { min: 0, max: 10 },
      potassium: { min: 20.0, max: 25.0 },
      organicMatter: { min: 0, max: 2 },
      texture: ["acidic hill soil", "loamy", "clay"],
      states: ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir"]
    }
  ];

  const matchedCrops = [];

  for (let crop of cropRecommendations) {
    if (
      soilData.pH >= crop.pH.min && soilData.pH <= crop.pH.max &&
      soilData.nitrogen >= crop.nitrogen.min && soilData.nitrogen <= crop.nitrogen.max &&
      soilData.phosphorus >= crop.phosphorus.min && soilData.phosphorus <= crop.phosphorus.max &&
      soilData.potassium >= crop.potassium.min && soilData.potassium <= crop.potassium.max &&
      soilData.organicMatter >= crop.organicMatter.min && soilData.organicMatter <= crop.organicMatter.max &&
      crop.texture.includes(soilData.texture)
    ) {
      matchedCrops.push(crop.name);
    }
  }

  return matchedCrops.length ? matchedCrops.join(', ') : 'No crop recommendation available';
}
