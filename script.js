/* RESUME DOWNLOAD */
function downloadResume() {
    window.open("./images/Mayuri_R.pdf", "_blank");
}


/* SKILL BAR ANIMATION */
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll(".skill-level");

    skillBars.forEach(bar => {
        const level = bar.getAttribute("data-level");
        bar.style.width = level + "%";
    });
});


/* SCROLL TO TOP BUTTON */
const topBtn = document.querySelector(".top-btn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "flex";
    } else {
        topBtn.style.display = "none";
    }
});


/* SMOOTH SCROLL FOR NAV LINKS */
document.querySelectorAll('a[href^="#hero"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});


/* ACTIVE NAVBAR LINK ON SCROLL */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .right a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (scrollY >= sectionTop) {
            current = section.getAttribute("#hero");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


/* CONTACT FORM VALIDATION */
const form = document.querySelector(".contact-form form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = form.querySelector("input[type='text']");
    const email = form.querySelector("input[type='email']");
    const message = form.querySelector("textarea");

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Please fill all required fields!");
        return;
    }

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address!");
        return;
    }

    alert("Message sent successfully! 🚀");
    form.reset();
});

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/* ===============================
   SCROLL REVEAL EFFECT
================================ */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const windowHeight = window.innerHeight;

    reveals.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // run on page load
