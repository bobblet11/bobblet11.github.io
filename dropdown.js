const dropdown = document.getElementById("dropdown");
const dropdownContent = document.getElementById("dropdown-content");
dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        dropdownContent.classList.toggle("active");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
        if (
                dropdown.classList.contains("active") &&
                !dropdown.contains(event.target)
        ) {
                dropdownContent.classList.remove("active");
                dropdown.classList.remove("active");
        }
};
