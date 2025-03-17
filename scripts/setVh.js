function setVh() {
	
	const vh = window.innerHeight * 0.01;
	console.log(`Setting height to ${vh * 100}. (useful for mobile)`);
	document.documentElement.style.setProperty("--vh", `${vh}px`);
}

setVh();
window.addEventListener("resize", setVh);
