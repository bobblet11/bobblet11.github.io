const dropdown = document.getElementById("dropdown");
const dropdownContent = document.getElementById("dropdown-content");
const dropwdownTitle = document.getElementById("dropdown-title");

dropdown.addEventListener("click", () => {
        dropdown.classList.toggle("active");
        dropdownContent.classList.toggle("active");
        dropwdownTitle.classList.toggle("active")
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

document.addEventListener("DOMContentLoaded", function () {
        const dropdownContent = document.getElementById("dropdown-content");

        // Function to check if the content is overflowing
        function checkOverflow() {
                console.log("checking overflow");
                if (
                        dropdownContent.scrollHeight >
                        dropdownContent.clientHeight
                ) {
                        dropdownContent.classList.add("show-scrollbar");
                        console.log("show bar");
                } else {
                        dropdownContent.classList.remove("show-scrollbar");
                        console.log("dont show bar");
                }
        }

        // Initial check
        checkOverflow();

        // Optional: Check on window resize if the dropdown is responsive
        window.addEventListener("resize", checkOverflow);
});
