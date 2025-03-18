const button = document.getElementById("toggle");
const text = document.getElementById("langSelector");

function loadTranslations(language) {
	const spoilerContent = document.getElementById("spoilerContent");
	const spoilerLink = document.getElementById("spoiler-container-a");
	const lang = text.innerText;

	const lunch = document.getElementById("lunch");
	const dinner = document.getElementById("dinner");

	if (lunch && dinner) {
		if (language === "zh") {
			lunch.src = "images/menu_lunch_zh.png";
			dinner.src = "images/menu_dinner_zh.png";
		} else {
			lunch.src = "images/Menu Picanha Lunch.png";
			dinner.src = "images/Menu Picanha dinner.png";
		}
	}

	// Uncomment and fix this if needed
	// if (spoilerContent.classList.contains("active")) {
	//     spoilerLink.innerText = lang === "EN" ? "少" : "LESS ..."; // Change link text
	// } else {
	//     spoilerLink.innerText = lang === "EN" ? "更多" : "MORE ..."; // Change link text
	// }

	fetch(`text/${language}.json`)
		.then((response) => response.json())
		.then((translations) => {
			console.log(translations);
			const elements = document.querySelectorAll("[data-localize]");
			elements.forEach((element) => {
				const key = element.getAttribute("data-localize");
				element.innerText = translations[key];
			});
		})
		.catch((error) => console.error("Error loading translations:", error));
}

function handleClick(language) {
	if (language === "en") {
		text.innerText = "中文";
	} else {
		text.innerText = "EN";
	}
	localStorage.setItem("selectedLanguage", language); // Store
}

text.addEventListener("click", () => {
	if (text.innerText === "EN") {
		handleClick("en");
		loadTranslations("en");
	} else {
		handleClick("zh");
		loadTranslations("zh");
	}
});

// Load default language
window.onload = function () {
	let selectedLanguage = localStorage.getItem("selectedLanguage") || "en"; // Default to English
	console.log(selectedLanguage);
	text.innerText = selectedLanguage === "en" ? "中文" : "EN"; // Update toggle button text
	loadTranslations(selectedLanguage);
};
