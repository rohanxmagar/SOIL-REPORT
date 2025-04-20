
const translations = {
    en: {
      title: "State-Wise Crop Recommender",
      subtitle: "Get personalized crop recommendations based on soil analysis and state",
      langLabel: "Choose Language:",
      labelState: "Select State",
      labelPH: "Soil pH",
      labelNitrogen: "Nitrogen (mg/kg)",
      labelPhosphorus: "Phosphorus (mg/kg)",
      labelPotassium: "Potassium (mg/kg)",
      labelOrganic: "Organic Matter (%)",
      labelTexture: "Soil Texture",
      submitBtn: "Get Recommendations",
      states: [
        "Punjab", "Maharashtra", "Karnataka", "Tamil Nadu", "Uttar Pradesh",
        "Gujarat", "Rajasthan", "West Bengal", "Andhra Pradesh", "Madhya Pradesh",
        "Kerala", "Assam", "Odisha"
      ],
      textureOptions: {
        sandy: "Sandy",
        loamy: "Loamy",
        clay: "Clay"
      }
    },
    hi: {
      title: "राज्य-वार फसल सिफारिशकर्ता",
      subtitle: "मिट्टी विश्लेषण और राज्य के आधार पर व्यक्तिगत फसल सिफारिशें प्राप्त करें",
      langLabel: "भाषा चुनें:",
      labelState: "राज्य चुनें",
      labelPH: "मिट्टी का पीएच",
      labelNitrogen: "नाइट्रोजन (मि.ग्रा./किग्रा.)",
      labelPhosphorus: "फास्फोरस (मि.ग्रा./किग्रा.)",
      labelPotassium: "पोटेशियम (मि.ग्रा./किग्रा.)",
      labelOrganic: "सेंद्रिय पदार्थ (%)",
      labelTexture: "मिट्टी की बनावट",
      submitBtn: "सिफारिशें प्राप्त करें",
      states: [
        "पंजाब", "महाराष्ट्र", "कर्नाटक", "तमिलनाडु", "उत्तर प्रदेश",
        "गुजरात", "राजस्थान", "पश्चिम बंगाल", "आंध्र प्रदेश", "मध्य प्रदेश",
        "केरल", "असम", "ओडिशा"
      ],
      textureOptions: {
        sandy: "रेतीली",
        loamy: "दोमट",
        clay: "चिकनी"
      }
    },
    bn: {
      title: "রাজ্যভিত্তিক ফসল সুপারিশকারী",
      subtitle: "মাটি বিশ্লেষণ এবং রাজ্যের উপর ভিত্তি করে ব্যক্তিগত ফসল সুপারিশ পান",
      langLabel: "ভাষা নির্বাচন করুন:",
      labelState: "রাজ্য নির্বাচন করুন",
      labelPH: "মাটির পিএইচ",
      labelNitrogen: "নাইট্রোজেন (মি.গ্রা./কেজি)",
      labelPhosphorus: "ফসফরাস (মি.গ্রা./কেজি)",
      labelPotassium: "পটাশিয়াম (মি.গ্রা./কেজি)",
      labelOrganic: "জৈব পদার্থ (%)",
      labelTexture: "মাটির গঠন",
      submitBtn: "সুপারিশ পান",
      states: [
        "পাঞ্জাব", "মহারাষ্ট্র", "কর্নাটক", "তামিলনাড়ু", "উত্তরপ্রদেশ",
        "গুজরাট", "রাজস্থান", "পশ্চিমবঙ্গ", "অন্ধ্রপ্রদেশ", "মধ্যপ্রদেশ",
        "কেরালা", "আসাম", "ওড়িশা"
      ],
      textureOptions: {
        sandy: "বেলে",
        loamy: "দোঁআশ",
        clay: "মাটি"
      }
    }
  };
  document.getElementById("lang").addEventListener("change", (e) => {
    const lang = e.target.value;
    const t = translations[lang];
    const stateSelect = document.getElementById("state");
    const originalValues = translations["en"].states;
  
    const setText = (id, text) => {
      const el = document.getElementById(id);
      if (el) el.innerText = text;
    };
  
    // Update static texts
    setText("title", t.title);
    setText("subtitle", t.subtitle);
    setText("langLabel", t.langLabel);
    setText("labelState", t.labelState);
    setText("labelPH", t.labelPH);
    setText("labelNitrogen", t.labelNitrogen);
    setText("labelPhosphorus", t.labelPhosphorus);
    setText("labelPotassium", t.labelPotassium);
    setText("labelOrganic", t.labelOrganic);
    setText("labelTexture", t.labelTexture);
    setText("submitBtn", t.submitBtn);
  
    // Save current selection before clearing
    const savedState = localStorage.getItem("selectedState");
  
    // Update dropdown options
    if (stateSelect) {
      stateSelect.innerHTML = "";
      t.states.forEach((name, index) => {
        const option = document.createElement("option");
        option.value = originalValues[index]; // Always use English value for consistency
        option.innerText = name;
        stateSelect.appendChild(option);
      });
  
      // Re-select saved state
      if (savedState) stateSelect.value = savedState;
    }
  });
  