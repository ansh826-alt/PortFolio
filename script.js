document.addEventListener("mousemove", (e) => {
    const cursor = document.querySelector(".cursor");
    const background = document.querySelector(".background-animation");

    // Move the cursor with the mouse
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;

    // Change background color dynamically based on cursor position
    let red = Math.round((e.clientX / window.innerWidth) * 255);
    let yellow = Math.round((e.clientY / window.innerHeight) * 255);
    let blue = 255 - red;

    // Apply smooth background color transition
    cursor.style.background = `rgb(${red}, ${yellow}, ${blue})`;

    // Set up the background effect in relation to the cursor
    background.style.background = `radial-gradient(circle at ${e.clientX}px ${e.clientY}px, rgba(${red}, ${yellow}, ${blue}, 0.2), transparent)`;
});


document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio website loaded!");

    // Smooth scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Example: Change background color on scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            document.body.style.background = "#f0f0f0";
        } else {
            document.body.style.background = "linear-gradient(45deg, #6a11cb, #2575fc)";
        }
    });
});
