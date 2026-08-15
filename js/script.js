/* =========================================================
   GENESIS & CO. LEGACY SERVICES
   MAIN JAVASCRIPT
========================================================= */

document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       MOBILE NAVIGATION
    ===================================================== */

    const menuToggle =
        document.getElementById("menuToggle");

    const mainNav =
        document.getElementById("mainNav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener(
            "click",
            function () {

                const isOpen =
                    mainNav.classList.toggle("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    isOpen ? "true" : "false"
                );

            }
        );


        const navLinks =
            mainNav.querySelectorAll("a");


        navLinks.forEach(function (link) {

            link.addEventListener(
                "click",
                function () {

                    mainNav.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }
            );

        });


        document.addEventListener(
            "click",
            function (event) {

                const clickedInsideMenu =
                    mainNav.contains(event.target);

                const clickedMenuButton =
                    menuToggle.contains(event.target);


                if (
                    !clickedInsideMenu &&
                    !clickedMenuButton &&
                    mainNav.classList.contains("active")
                ) {

                    mainNav.classList.remove("active");

                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                }

            }
        );

    }



    /* =====================================================
       CLOSE MENU ON LARGE SCREEN
    ===================================================== */

    window.addEventListener(
        "resize",
        function () {

            if (
                window.innerWidth > 800 &&
                mainNav &&
                menuToggle
            ) {

                mainNav.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );



    /* =====================================================
       SMOOTH SCROLL
    ===================================================== */

    const internalLinks =
        document.querySelectorAll('a[href^="#"]');


    internalLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                if (
                    targetId &&
                    targetId !== "#"
                ) {

                    const target =
                        document.querySelector(targetId);


                    if (target) {

                        event.preventDefault();

                        target.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }

            }
        );

    });



    /* =====================================================
       REVIEW FORM
       Formspree handles the actual submission.
    ===================================================== */

    const reviewForm =
        document.getElementById("reviewForm");


    if (reviewForm) {

        reviewForm.addEventListener(
            "submit",
            function () {

                const submitButton =
                    reviewForm.querySelector(
                        ".review-submit"
                    );


                if (submitButton) {

                    submitButton.textContent =
                        "Submitting Review...";

                    submitButton.disabled = true;

                }

            }
        );

    }



    /* =====================================================
       CURRENT YEAR
    ===================================================== */

    const yearElement =
        document.getElementById("currentYear");


    if (yearElement) {

        yearElement.textContent =
            new Date().getFullYear();

    }


});
