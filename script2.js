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
const cropTranslations = {
    en: {
      Wheat: "Wheat",
      Rice: "Rice",
      Cotton: "Cotton",
      Sugarcane: "Sugarcane",
      Millets: "Millets",
      Tea: "Tea",
      Coffee: "Coffee",
      Turmeric: "Turmeric",
      Soybean: "Soybean",
      Groundnut: "Groundnut"
    },
    hi: {
      Wheat: "गेहूं",
      Rice: "धान",
      Cotton: "कपास",
      Sugarcane: "गन्ना",
      Millets: "बाजरा",
      Tea: "चाय",
      Coffee: "कॉफी",
      Turmeric: "हल्दी",
      Soybean: "सोयाबीन",
      Groundnut: "मूंगफली"
    },
    bn: {
      Wheat: "গম",
      Rice: "ধান",
      Cotton: "সূতী",
      Sugarcane: "আখ",
      Millets: "শস্য",
      Tea: "চা",
      Coffee: "কফি",
      Turmeric: "হলুদ",
      Soybean: "সয়াবিন",
      Groundnut: "চিনা বাদাম"
    }
  };
  
  const stateTranslations = {
    en: {
      "Punjab": "Punjab",
      "Uttar Pradesh": "Uttar Pradesh",
      "Madhya Pradesh": "Madhya Pradesh",
      "West Bengal": "West Bengal",
      "Andhra Pradesh": "Andhra Pradesh",
      "Tamil Nadu": "Tamil Nadu",
      "Gujarat": "Gujarat",
      "Maharashtra": "Maharashtra",
      "Rajasthan": "Rajasthan",
      "Karnataka": "Karnataka",
      "Assam": "Assam",
      "Kerala": "Kerala",
      "Odisha": "Odisha"
    },
    hi: {
      "Punjab": "पंजाब",
      "Uttar Pradesh": "उत्तर प्रदेश",
      "Madhya Pradesh": "मध्य प्रदेश",
      "West Bengal": "पश्चिम बंगाल",
      "Andhra Pradesh": "आंध्र प्रदेश",
      "Tamil Nadu": "तमिलनाडु",
      "Gujarat": "गुजरात",
      "Maharashtra": "महाराष्ट्र",
      "Rajasthan": "राजस्थान",
      "Karnataka": "कर्नाटक",
      "Assam": "असम",
      "Kerala": "केरल",
      "Odisha": "ओडिशा"
    },
    bn: {
      "Punjab": "পাঞ্জাব",
      "Uttar Pradesh": "উত্তর প্রদেশ",
      "Madhya Pradesh": "মধ্য প্রদেশ",
      "West Bengal": "পশ্চিমবঙ্গ",
      "Andhra Pradesh": "আন্ধ্র প্রদেশ",
      "Tamil Nadu": "তামিলনাড়ু",
      "Gujarat": "গুজরাট",
      "Maharashtra": "মহারাষ্ট্র",
      "Rajasthan": "রাজস্থান",
      "Karnataka": "কর্ণাটক",
      "Assam": "আসাম",
      "Kerala": "কেরল",
      "Odisha": "ওড়িশা"
    }
  };
document.addEventListener("DOMContentLoaded", function () {
    const stateSelect = document.getElementById("state");
    const savedState = localStorage.getItem("selectedState");
    if (savedState) stateSelect.value = savedState;
  
    stateSelect.addEventListener("change", function () {
      localStorage.setItem("selectedState", stateSelect.value);
    });
  });
  
  // Handle form submit
 document.getElementById('soilForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const lang = document.getElementById('lang').value;

  const translations = {
    en: {
      alert: 'Please enter a valid pH value between 0 and 14',
      title: 'Recommended Crops for',
      noResult: 'No suitable crops found for the current soil conditions in',
      suggestion: 'Try adjusting your soil parameters or consider soil amendments.',
      fertilizerSuggestion: 'Recommended soil amendment: ',
      organicSuggestion: 'Consider using organic methods such as composting or mulching.'
    },
    hi: {
      alert: 'कृपया 0 और 14 के बीच एक मान्य pH मान दर्ज करें',
      title: 'के लिए अनुशंसित फसलें:',
      noResult: 'वर्तमान मिट्टी की स्थिति के लिए कोई उपयुक्त फसल नहीं मिली',
      suggestion: 'मिट्टी के मापदंडों को समायोजित करें या मिट्टी में सुधार पर विचार करें।',
      fertilizerSuggestion: 'अनुशंसित उर्वरक: ',
      organicSuggestion: 'कंपोस्टिंग या मल्चिंग जैसे जैविक तरीकों का उपयोग करने पर विचार करें।'
    },
    bn: {
      alert: 'অনুগ্রহ করে 0 থেকে 14 এর মধ্যে একটি বৈধ pH মান দিন',
      title: 'এর জন্য প্রস্তাবিত ফসল:',
      noResult: 'বর্তমান মাটির অবস্থার জন্য কোনও উপযুক্ত ফসল পাওয়া যায়নি',
      suggestion: 'আপনার মাটির পরামিতিগুলি সামঞ্জস্য করুন বা মাটির উন্নয়ন বিবেচনা করুন।',
      fertilizerSuggestion: 'প্রস্তাবিত সার: ',
      organicSuggestion: 'কম্পোস্টিং বা মালচিং মতো জৈব পদ্ধতি ব্যবহার করার কথা বিবেচনা করুন।'
    }
  };

  const t = translations[lang];

  const inputs = {
    state: document.getElementById('state').value,
    ph: parseFloat(document.getElementById('ph').value),
    nitrogen: parseInt(document.getElementById('nitrogen').value),
    phosphorus: parseInt(document.getElementById('phosphorus').value),
    potassium: parseInt(document.getElementById('potassium').value),
    organicMatter: parseFloat(document.getElementById('organicMatter').value),
    texture: document.getElementById('texture').value
  };

  if (isNaN(inputs.ph) || inputs.ph < 0 || inputs.ph > 14) {
    alert(t.alert);
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
    resultsDiv.innerHTML = `
      <h3>${t.title} ${stateTranslations[lang][inputs.state] || "State not found"}:</h3>
      <ul>${recommendations.map(crop => {
          // If the language is not found, fall back to English
          const cropName = cropTranslations[lang] && cropTranslations[lang][crop.name] || crop.name;
          return `<li>${cropName}</li>`;
      }).join('')}</ul>
    `;
  } else {
    let fertilizerAdvice = '';
    let reasonList = '';
  
    // pH Suggestions
    if (inputs.ph < 6.0) {
        fertilizerAdvice += `<br>${t.fertilizerSuggestion} ${
          lang === 'hi' ? 'चूना (जैसे: Indofil Lime) या डोलोमाइट (जैसे: Coromandel Dolomite) लागू करें - प्रति एकड़ 100-150 किलोग्राम।' :
          lang === 'bn' ? 'চুন (যেমন: Indofil Lime) বা ডোলোমাইট (যেমন: Coromandel Dolomite) প্রয়োগ করুন - প্রতি একর 100-150 কেজি।' :
          'Apply Lime (e.g., Indofil Lime) or Dolomite (e.g., Coromandel Dolomite) - 100-150 kg per acre.'
        } <br><em>${
          lang === 'hi' ? 'pH लगभग 0.5-1.0 तक बढ़ सकता है।' :
          lang === 'bn' ? 'pH প্রায় 0.5-1.0 পর্যন্ত বাড়তে পারে।' :
          'Can raise pH by approximately 0.5–1.0 units.'
        }</em>`;
        reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : 'Reason:'}</strong> ${lang === 'hi' ? 'कम pH पौधों के लिए फास्फोरस जैसे पोषक तत्वों को अनुपलब्ध बना देता है।' : lang === 'bn' ? 'কম pH গাছগুলির জন্য ফসফরাসের মতো পুষ্টি উপাদানগুলিকে অপ্রাপ্য করে তোলে।' : 'Low pH makes nutrients like phosphorus unavailable to plants.'}`;
      }
      
      else if (inputs.ph > 7.5) {
        fertilizerAdvice += `<br>${t.fertilizerSuggestion} ${
          lang === 'hi' ? 'सल्फर (जैसे: Mahadhan Sulphur) या एल्युमिनियम सल्फेट - प्रति एकड़ 25-50 किग्रा।' :
          lang === 'bn' ? 'সালফার (যেমন: Mahadhan Sulphur) বা অ্যালুমিনিয়াম সালফেট প্রয়োগ করুন - প্রতি একর 25-50 কেজি।' :
          'Apply Sulfur (e.g., Mahadhan Sulphur) or Aluminum sulfate - 25–50 kg per acre.'
        } <br><em>${
          lang === 'hi' ? 'pH लगभग 0.5 तक कम हो सकता है।' :
          lang === 'bn' ? 'pH প্রায় 0.5 পর্যন্ত কমতে পারে।' :
          'Can reduce pH by approximately 0.5 units.'
        }</em>`;
        reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : 'Reason:'}</strong> ${lang === 'hi' ? 'उच्च pH लौह, जिंक, और मैंगनीज की उपलब्धता को कम कर सकता है।' : lang === 'bn' ? 'উচ্চ pH লোহা, জিংক, এবং ম্যাঙ্গানিজের প্রাপ্যতা কমিয়ে দিতে পারে।' : 'High pH can reduce iron, zinc, and manganese availability.'}`;
      }
      
      // Nitrogen
      if (inputs.nitrogen < 30) {
        fertilizerAdvice += `<br>${t.fertilizerSuggestion} ${
          lang === 'hi' ? 'यूरिया (IFFCO Urea), अमोनियम नाइट्रेट - 40-50 किग्रा/एकड़।' :
          lang === 'bn' ? 'ইউরিয়া (IFFCO Urea), অ্যামোনিয়াম নাইট্রেট - প্রতি একর 40-50 কেজি।' :
          'Add Urea (e.g., IFFCO Urea) or Ammonium nitrate - 40–50 kg/acre.'
        } <br><em>${
          lang === 'hi' ? 'नाइट्रोजन स्तर में 20-30% वृद्धि हो सकती है।' :
          lang === 'bn' ? 'নাইট্রোজেন স্তরে ২০-৩০% বৃদ্ধি হতে পারে।' :
          'Can increase nitrogen level by 20–30%.'
        }</em>`;
        reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : 'Reason:'}</strong> ${lang === 'hi' ? 'नाइट्रोजन की कमी से विकास रुक जाता है और पत्तियाँ पीली हो जाती हैं।' : lang === 'bn' ? 'নাইট্রোজেনের অভাব গাছের বৃদ্ধির প্রতিবন্ধকতা এবং পাতা হলুদ হয়ে যায়।' : 'Nitrogen deficiency causes stunted growth and yellow leaves.'}`;
      }
      
      // Phosphorus
      if (inputs.phosphorus < 20) {
        fertilizerAdvice += `<br>${t.fertilizerSuggestion} ${
          lang === 'hi' ? 'सिंगल सुपर फॉस्फेट (SSP) या बोन मील - 60-80 किग्रा/एकड़।' :
          lang === 'bn' ? 'সিঙ্গেল সুপার ফসফেট (SSP) বা বোন মিল - প্রতি একর 60-80 কেজি।' :
          'Apply Single Super Phosphate (SSP) or Bone Meal - 60–80 kg/acre.'
        } <br><em>${
          lang === 'hi' ? 'फास्फोरस स्तर में 15-25% सुधार हो सकता है।' :
          lang === 'bn' ? 'ফসফরাস স্তরে ১৫-২৫% উন্নতি হতে পারে।' :
          'Can improve phosphorus level by 15–25%.'
        }</em>`;
        reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : 'Reason:'}</strong> ${lang === 'hi' ? 'कम फास्फोरस से जड़ विकास और फूलने में देरी होती है।' : lang === 'bn' ? 'কম ফসফরাস শিকড়ের বিকাশ এবং ফুলের ক্ষেত্রে দেরি করে।' : 'Low phosphorus delays root development and flowering.'}`;
      }
      
      // Potassium
      if (inputs.potassium < 30) {
        fertilizerAdvice += `<br>${t.fertilizerSuggestion} ${
          lang === 'hi' ? 'म्यूरिएट ऑफ पोटाश (MOP) - 40-50 किग्रा/एकड़।' :
          lang === 'bn' ? 'মিউরিয়েট অফ পটাশ (MOP) - প্রতি একর 40-50 কেজি।' :
          'Use Muriate of Potash (MOP) - 40–50 kg/acre.'
        } <br><em>${
          lang === 'hi' ? 'पोटैशियम स्तर में 20-30% वृद्धि हो सकती है।' :
          lang === 'bn' ? 'পটাসিয়াম স্তরে ২০-৩০% বৃদ্ধি হতে পারে।' :
          'Can improve potassium level by 20–30%.'
        }</em>`;
        reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : 'Reason:'}</strong> ${lang === 'hi' ? 'कम पोटैशियम से पौधों की रोगों और सूखा के प्रति प्रतिरोधक क्षमता कम हो जाती है।' : lang === 'bn' ? 'কম পটাসিয়ামের কারণে গাছের রোগ এবং খরা প্রতিরোধ ক্ষমতা কমে যায়।' : 'Low potassium weakens plant resistance to disease and drought.'}`;
      }
      
  
    // Organic Matter Suggestions
    let organicAdvice = '';
    if (inputs.organicMatter < 2) {
      organicAdvice = `${t.organicSuggestion} ${lang === 'hi' ? 'कंपोस्ट, वर्मीकंपोस्ट, या अच्छे से सड़ा हुआ खाद डालें' : lang === 'bn' ? 'কম্পোস্ট, ভার্মিকম্পোস্ট, বা ভালোভাবে পচে যাওয়া গোবর সার দিন' : lang === 'en' ? 'Add compost, vermicompost, or well-rotted manure.' : ''}`;
      reasonList += `<br><strong>${lang === 'hi' ? 'कारण:' : lang === 'bn' ? 'কারণ:' : lang === 'en' ? 'Reason:' : ''}</strong> ${lang === 'hi' ? 'कम जैविक पदार्थ से मिट्टी की उर्वरता, संरचना, और सूक्ष्मजीव जीवन कम हो जाता है।' : lang === 'bn' ? 'কম জৈব পদার্থ মাটির উর্বরতা, গঠন, এবং মাইক্রোবিয়াল জীবন কমিয়ে দেয়।' : lang === 'en' ? 'Low organic matter reduces soil fertility, structure, and microbial life.' : ''}`;
    }
  
    // Texture-specific suggestions
    let textureAdvice = '';
    if (inputs.texture === 'sandy') {
      textureAdvice = `<br>${t.textureTip} ${lang === 'hi' ? 'रेतदार मिट्टी बहुत जल्दी पानी सोख लेती है। नमी और पोषक तत्वों को बनाए रखने के लिए कंपोस्ट और बायोचार डालें।' : lang === 'bn' ? 'বালুকাময় মাটি দ্রুত পানি শোষণ করে। আর্দ্রতা এবং পুষ্টি ধরে রাখার জন্য কম্পোস্ট এবং বায়োচার যোগ করুন।' : lang === 'en' ? 'Sandy soil drains too fast. Add compost and biochar to retain moisture and nutrients.' : ''}`;
    } else if (inputs.texture === 'clay') {
      textureAdvice = `<br>${t.textureTip} ${lang === 'hi' ? 'कीली मिट्टी घनी होती है। वायु और जल निकासी सुधारने के लिए रेत, कंपोस्ट, या जिप्सम डालें।' : lang === 'bn' ? 'ক্লে মাটি ঘন হয়। বায়ু এবং নিষ্কাশন উন্নত করতে বালি, কম্পোস্ট বা জিপসাম যোগ করুন।' : lang === 'en' ? 'Clay soil is dense. Add sand, compost, or gypsum to improve aeration and drainage.' : ''}`;
    }
  
    // Multilingual output for Hindi and Bengali
    const additionalAdvice = lang === 'hi' ? `
      <p><strong>क्यों ये सिफारिशें महत्वपूर्ण हैं:</strong> ${reasonList}</p>
      <h4>🔧 अतिरिक्त मिट्टी स्वास्थ्य सुझाव:</h4>
      <ul>
        <li>🌱 पोषक तत्वों की कमी रोकने के लिए फसल चक्र अपनाएं।</li>
        <li>🧪 सटीक जानकारी के लिए अपनी मिट्टी की नियमित जांच करवाएं।</li>
        <li>🌾 नाइट्रोजन सुधारने और मिट्टी की संरचना बेहतर करने के लिए हरी खाद या कवर फसलें लगाएं।</li>
        <li>🐛 फायदेमंद सूक्ष्मजीवों और केंचुओं की सुरक्षा के लिए रसायनों का अधिक उपयोग न करें।</li>
      </ul>
    ` : lang === 'bn' ? `
      <p><strong>কেন এই সুপারিশগুলি গুরুত্বপূর্ণ:</strong> ${reasonList}</p>
      <h4>🔧 অতিরিক্ত মাটি স্বাস্থ্য পরামর্শ:</h4>
      <ul>
        <li>🌱 পুষ্টির অভাব রোধ করতে ফসলের চক্র অনুসরণ করুন।</li>
        <li>🧪 সঠিক ইনপুটের জন্য আপনার মাটির নিয়মিত পরীক্ষা করুন।</li>
        <li>🌾 নাইট্রোজেন উন্নত করতে এবং মাটির গঠন উন্নত করতে সবুজ সার বা কভার ক্রপ ব্যবহার করুন।</li>
        <li>🐛 উপকারী মাইক্রোবস এবং কৃমির সুরক্ষার জন্য রাসায়নিক অতিরিক্ত ব্যবহার এড়িয়ে চলুন।</li>
      </ul>
    ` : `
      <p><strong>Why these recommendations matter:</strong> ${reasonList}</p>
      <h4>🔧 Additional Soil Health Tips:</h4>
      <ul>
        <li>🌱 Practice crop rotation to prevent nutrient depletion.</li>
        <li>🧪 Test your soil regularly for accurate inputs.</li>
        <li>🌾 Use green manures or cover crops to fix nitrogen and improve structure.</li>
        <li>🐛 Avoid chemical overuse to protect beneficial microbes and earthworms.</li>
      </ul>
    `;
  
    resultsDiv.innerHTML = `
      <p class="warning">${t.noResult} ${stateTranslations[lang][inputs.state] || "State not found"}.</p>
      <p>${t.suggestion}</p>
      <p>${fertilizerAdvice}</p>
      <p>${organicAdvice}</p>
      <p>${textureAdvice}</p>
      ${additionalAdvice}
    `;
  }
  
  resultsDiv.scrollIntoView({ behavior: 'smooth' });
  
});
