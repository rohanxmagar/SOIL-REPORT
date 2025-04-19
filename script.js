document.addEventListener("DOMContentLoaded", () => {
    const langSelect = document.getElementById("lang");
  
    langSelect.addEventListener("change", () => {
      const selectedLang = langSelect.value;
      updateLanguage(selectedLang);
    });
  
    // Set default language to EnglishA
    updateLanguage("en");
  });
  
  function updateLanguage(lang) {
    const t = translations[lang];
    if (!t) return;
  
    document.getElementById("langLabel").textContent = t.langLabel;
    document.getElementById("title").textContent = t.title;
    document.getElementById("subtitle").textContent = t.subtitle;
    document.getElementById("labelState").textContent = t.labelState;
    document.getElementById("labelPH").textContent = t.labelPH;
    document.getElementById("labelNitrogen").textContent = t.labelNitrogen;
    document.getElementById("labelPhosphorus").textContent = t.labelPhosphorus;
    document.getElementById("labelPotassium").textContent = t.labelPotassium;
    document.getElementById("labelOrganic").textContent = t.labelOrganic;
    document.getElementById("labelTexture").textContent = t.labelTexture;
    document.getElementById("submitBtn").textContent = t.submitBtn;
  
    // 🌍 Update soil texture dropdown options
    document.getElementById("optionSandy").textContent = t.textureOptions.sandy;
    document.getElementById("optionLoamy").textContent = t.textureOptions.loamy;
    document.getElementById("optionClay").textContent = t.textureOptions.clay;
  }
  
  const crops = [
{
        name: "Wheat",
        pH: { min: 6.0, max: 7.5 },
        nitrogen: { min: 30, max: 50 },
        phosphorus: { min: 20, max: 40 },
        potassium: { min: 30, max: 50 },
        organicMatter: { min: 1.5, max: 3 },
        texture: ["loamy", "clay"],
        states: ["Punjab", "Uttar Pradesh", "Madhya Pradesh"]
    },
    {
        name: "Rice",
        pH: { min: 5.0, max: 6.5 },
        nitrogen: { min: 40, max: 60 },
        phosphorus: { min: 10, max: 30 },
        potassium: { min: 20, max: 40 },
        organicMatter: { min: 2, max: 4 },
        texture: ["clay"],
        states: ["West Bengal", "Andhra Pradesh", "Tamil Nadu"]
    },
    {
        name: "Cotton",
        pH: { min: 5.5, max: 7.5 },
        nitrogen: { min: 20, max: 40 },
        phosphorus: { min: 15, max: 30 },
        potassium: { min: 25, max: 45 },
        organicMatter: { min: 1, max: 2.5 },
        texture: ["sandy", "loamy"],
        states: ["Gujarat", "Maharashtra", "Rajasthan"]
    },
    {
        name: "Sugarcane",
        pH: { min: 6.0, max: 7.5 },
        nitrogen: { min: 50, max: 70 },
        phosphorus: { min: 20, max: 40 },
        potassium: { min: 40, max: 60 },
        organicMatter: { min: 2, max: 4 },
        texture: ["loamy", "clay"],
        states: ["Uttar Pradesh", "Maharashtra", "Karnataka"]
    },
    {
        name: "Millets",
        pH: { min: 5.5, max: 7.0 },
        nitrogen: { min: 10, max: 30 },
        phosphorus: { min: 10, max: 25 },
        potassium: { min: 15, max: 35 },
        organicMatter: { min: 1, max: 2 },
        texture: ["sandy", "loamy"],
        states: ["Rajasthan", "Karnataka", "Tamil Nadu"]
    },
    {
        name: "Tea",
        pH: { min: 4.5, max: 6.0 },
        nitrogen: { min: 30, max: 50 },
        phosphorus: { min: 10, max: 20 },
        potassium: { min: 20, max: 40 },
        organicMatter: { min: 2, max: 5 },
        texture: ["loamy", "clay"],
        states: ["Assam", "West Bengal", "Kerala"]
    },
    {
        name: "Coffee",
        pH: { min: 5.0, max: 6.5 },
        nitrogen: { min: 20, max: 40 },
        phosphorus: { min: 10, max: 25 },
        potassium: { min: 20, max: 40 },
        organicMatter: { min: 2, max: 4 },
        texture: ["loamy", "clay"],
        states: ["Karnataka", "Kerala", "Tamil Nadu"]
    },
    {
        name: "Turmeric",
        pH: { min: 5.5, max: 7.5 },
        nitrogen: { min: 30, max: 50 },
        phosphorus: { min: 20, max: 40 },
        potassium: { min: 40, max: 60 },
        organicMatter: { min: 2, max: 4 },
        texture: ["loamy", "clay"],
        states: ["Tamil Nadu", "Andhra Pradesh", "Odisha"]
    },
    {
        name: "Soybean",
        pH: { min: 6.0, max: 7.5 },
        nitrogen: { min: 20, max: 40 },
        phosphorus: { min: 15, max: 30 },
        potassium: { min: 25, max: 45 },
        organicMatter: { min: 1.5, max: 3 },
        texture: ["loamy", "clay"],
        states: ["Madhya Pradesh", "Maharashtra", "Rajasthan"]
    },
    {
        name: "Groundnut",
        pH: { min: 5.5, max: 7.0 },
        nitrogen: { min: 20, max: 40 },
        phosphorus: { min: 15, max: 30 },
        potassium: { min: 25, max: 45 },
        organicMatter: { min: 1, max: 2.5 },
        texture: ["sandy", "loamy"],
        states: ["Gujarat", "Andhra Pradesh", "Tamil Nadu"]
    }
];

document.getElementById('soilForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const t = translations[language]; // Get translation based on current language

    const inputs = {
        state: document.getElementById('state').value,
        ph: parseFloat(document.getElementById('ph').value),
        nitrogen: parseInt(document.getElementById('nitrogen').value),
        phosphorus: parseInt(document.getElementById('phosphorus').value),
        potassium: parseInt(document.getElementById('potassium').value),
        organicMatter: parseFloat(document.getElementById('organicMatter').value),
        texture: document.getElementById('texture').value
    };

    // Validate inputs
    if (isNaN(inputs.ph) || inputs.ph < 0 || inputs.ph > 14) {
        const alertMessage = {
            en: "Please enter a valid pH value between 0 and 14",
            hi: "कृपया 0 और 14 के बीच मान्य pH मान दर्ज करें",
            bn: "অনুগ্রহ করে 0 থেকে 14 এর মধ্যে একটি সঠিক pH মান লিখুন"
        };
        alert(alertMessage[language]);
        return;
    }

    const recommendations = crops.filter(crop => 
        inputs.ph >= crop.pH.min && inputs.ph <= crop.pH.max &&
        inputs.nitrogen >= crop.nitrogen.min && inputs.nitrogen <= crop.nitrogen.max &&
        inputs.phosphorus >= crop.phosphorus.min && inputs.phosphorus <= crop.phosphorus.max &&
        inputs.potassium >= crop.potassium.min && inputs.potassium <= crop.potassium.max &&
        inputs.organicMatter >= crop.organicMatter.min && inputs.organicMatter <= crop.organicMatter.max &&
        crop.texture.includes(inputs.texture) &&
        crop.states.includes(inputs.state)
    );

    const resultsDiv = document.getElementById('results');
    resultsDiv.style.display = 'block';

    if (recommendations.length > 0) {
        const recommendedText = {
            en: `Recommended Crops for ${inputs.state}:`,
            hi: `${inputs.state} के लिए अनुशंसित फसलें:`,
            bn: `${inputs.state}-এর জন্য প্রস্তাবিত ফসলসমূহ:`
        };
        resultsDiv.innerHTML = `
            <h3>${recommendedText[language]}</h3>
            <ul>
                ${recommendations.map(crop => `<li>${crop.name}</li>`).join('')}
            </ul>
        `;
    } else {
        const noMatch = {
            en: `No suitable crops found for the current soil conditions in ${inputs.state}.`,
            hi: `${inputs.state} में वर्तमान मिट्टी की स्थिति के लिए कोई उपयुक्त फसल नहीं मिली।`,
            bn: `${inputs.state}-এ বর্তমান মাটির অবস্থার জন্য কোনও উপযুক্ত ফসল পাওয়া যায়নি।`
        };
        const suggestion = {
            en: `Try adjusting your soil parameters or consider soil amendments.`,
            hi: `अपने मिट्टी मापदंडों को समायोजित करें या मिट्टी संशोधन पर विचार करें।`,
            bn: `আপনার মাটির পরামিতি সামঞ্জস্য করার চেষ্টা করুন বা মাটির পরিবর্তন বিবেচনা করুন।`
        };
        resultsDiv.innerHTML = `
            <p class="warning">${noMatch[language]}</p>
            <p>${suggestion[language]}</p>
        `;
    }

    resultsDiv.scrollIntoView({ behavior: 'smooth' });
});