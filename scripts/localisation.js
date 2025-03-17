function loadTranslations(language) {
	fetch(`text/${language}.json`)
		.then((response) => response.json())
		.then((translations) => {
			const elements = document.querySelectorAll("[data-localize]");
			elements.forEach((element) => {
				const key = element.getAttribute("data-localize");
				element.innerText = translations[key];
			});
		})
		.then(() => {})
		.catch((error) => console.error("Error loading translations:", error));
}

function handleClick(language) {
	if (language === "en") {
		document.getElementById("english-toggle").style.visibility = "hidden";
		document.getElementById("chinese-toggle").style.visibility = "visible";
	} else {
		document.getElementById("english-toggle").style.visibility = "visible";
		document.getElementById("chinese-toggle").style.visibility = "hidden";
	}
}

document.getElementById("english-toggle").addEventListener("click", () => {
	handleClick("en");
	loadTranslations("en");
});

document.getElementById("chinese-toggle").addEventListener("click", () => {
	handleClick("zh");
	loadTranslations("en");
});

// Load default language
// Default to English
loadTranslations("en");
document.getElementById("english-toggle").style.visibility = "visible";
document.getElementById("chinese-toggle").style.visibility = "hidden";
