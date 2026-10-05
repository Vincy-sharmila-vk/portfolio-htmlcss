/* =========================
   MOBILE MENU
========================= */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const navItems = document.querySelectorAll(".nav-link");


menuBtn.addEventListener("click", () => {

    const isOpen =
        navLinks.classList.toggle("open");

    menuBtn.classList.toggle("open");

    menuBtn.setAttribute(
        "aria-expanded",
        isOpen
    );

});


/* Close menu when clicking a link */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("open");

        menuBtn.classList.remove("open");

        menuBtn.setAttribute(
            "aria-expanded",
            "false"
        );

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section");


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    const currentId =
                        entry.target.getAttribute("id");


                    navItems.forEach(link => {

                        link.classList.remove(
                            "active"
                        );

                        if (
                            link.getAttribute("href")
                            === `#${currentId}`
                        ) {

                            link.classList.add(
                                "active"
                            );

                        }

                    });

                }

            });

        },
        {
            threshold: 0.45
        }
    );


sections.forEach(section => {

    sectionObserver.observe(section);

});


/* =========================
   CONTACT FORM - WHATSAPP
========================= */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    const whatsappNumber = "919524134289";

    const whatsappMessage =
        `Hello Vincy,

Name: ${name}
Email: ${email}
Phone: ${phone}

Message:
${message}`;

    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

    contactForm.reset();

});