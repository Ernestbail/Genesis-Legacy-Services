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
       CLOSE MOBILE MENU ON LARGE SCREEN
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
        document.querySelectorAll(
            'a[href^="#"]:not(.faq-trigger)'
        );


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
       FAQ CHAT
    ===================================================== */

    const faqModal =
        document.getElementById("faqModal");

    const faqClose =
        document.getElementById("faqClose");

    const faqTriggers =
        document.querySelectorAll(".faq-trigger");

    const faqQuestions =
        document.querySelectorAll(".faq-question");

    const faqConversation =
        document.getElementById("faqConversation");

    const faqChatBody =
        document.getElementById("faqChatBody");

    let lastFaqTrigger = null;



    /* FAQ ANSWERS */

    const faqAnswers = {


        services: {

            question:
                "What services do you offer?",

            answer:
                "Genesis & Co. Legacy Services offers Health Insurance, Life Insurance, Real Estate Services, Tax Preparation, and Remote Notary Services."

        },


        virtual: {

            question:
                "Can your services be completed virtually?",

            answer:
                "Yes. Approximately 90% of our services can be completed virtually, allowing you to receive professional assistance from the comfort and privacy of your home."

        },


        started: {

            question:
                "How do I get started?",

            answer:
                "Select Get Started to complete our contact form. Tell us which service you're interested in and a member of Genesis & Co. Legacy Services can follow up with you.",

            link:
                "contact.html",

            linkText:
                "Get Started →"

        },


        consultation: {

            question:
                "How do I book a free consultation?",

            answer:
                "You can schedule your free consultation online by selecting an available date and time through our Calendly booking page.",

            link:
                "https://calendly.com/genesislegacyservices/initial-consultation",

            linkText:
                "Book Free Consultation →",

            external:
                true

        },


        health: {

            question:
                "Do you help with ACA or Medicare plans?",

            answer:
                "Yes. Genesis & Co. provides assistance with ACA and Medicare coverage options and can help you review available plans based on your needs and eligibility."

        },


        "health-cost": {

            question:
                "Can I qualify for low-cost health coverage?",

            answer:
                "Affordable ACA options may be available, including low-premium plans for eligible individuals and families. Eligibility, premiums, and benefits vary, so we can help you review the options available to you."

        },


        life: {

            question:
                "What types of life insurance do you offer?",

            answer:
                "Genesis & Co. offers guidance on Term Life, Whole Life, Final Expense, Children's Life Insurance, and Mortgage Protection solutions."

        },


        tax: {

            question:
                "What tax preparation services do you offer?",

            answer:
                "Our tax services include Personal Tax Returns, Small Business Taxes, Tax Planning, Electronic Filing, and Refund Assistance."

        },


        notary: {

            question:
                "How does Remote Notary work?",

            answer:
                "Remote Notary allows eligible documents to be notarized online through a secure virtual process, helping make notarization more convenient and flexible."

        },


        documents: {

            question:
                "What documents can be notarized?",

            answer:
                "Remote Notary services may include Real Estate Documents, Power of Attorney documents, Affidavits, and other eligible legal documents. Document eligibility can depend on applicable requirements."

        },


        realestate: {

            question:
                "Do you provide Real Estate services?",

            answer:
                "Yes. Genesis & Co. provides professional assistance and support for clients with real estate buying and selling needs.",

            link:
                "services.html#real-estate",

            linkText:
                "View Real Estate Services →"

        },


        licensed: {

            question:
                "Are your professionals licensed and insured?",

            answer:
                "Genesis & Co. is committed to providing professional service through licensed and insured professionals where licensing or insurance is required for the service being provided."

        },


        contact: {

            question:
                "How can I contact Genesis & Co.?",

            answer:
                "You can contact Genesis & Co. Legacy Services by phone at 910-445-1813, by email at kamaiesha618@gmail.com, or through the website contact form.",

            link:
                "contact.html",

            linkText:
                "Contact Us →"

        }


    };



    /* OPEN FAQ */

    function openFaq(event) {

        if (event) {

            event.preventDefault();

            lastFaqTrigger =
                event.currentTarget;

        }


        if (!faqModal) {
            return;
        }


        faqModal.classList.add("open");


        faqModal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "faq-open"
        );


        if (faqClose) {

            setTimeout(
                function () {

                    faqClose.focus();

                },
                50
            );

        }

    }



    /* CLOSE FAQ */

    function closeFaq() {

        if (!faqModal) {
            return;
        }


        faqModal.classList.remove("open");


        faqModal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "faq-open"
        );


        if (lastFaqTrigger) {

            lastFaqTrigger.focus();

        }

    }



    /* FAQ NAV LINKS */

    faqTriggers.forEach(
        function (trigger) {

            trigger.addEventListener(
                "click",
                openFaq
            );

        }
    );



    /* CLOSE BUTTON */

    if (faqClose) {

        faqClose.addEventListener(
            "click",
            closeFaq
        );

    }



    /* CLOSE OVERLAY */

    const faqCloseElements =
        document.querySelectorAll(
            "[data-faq-close]"
        );


    faqCloseElements.forEach(
        function (element) {

            element.addEventListener(
                "click",
                closeFaq
            );

        }
    );



    /* ESCAPE KEY */

    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape" &&
                faqModal &&
                faqModal.classList.contains("open")
            ) {

                closeFaq();

            }

        }
    );



    /* QUESTION RESPONSES */

    faqQuestions.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const faqKey =
                        this.dataset.faq;


                    const faq =
                        faqAnswers[faqKey];


                    if (
                        !faq ||
                        !faqConversation
                    ) {

                        return;

                    }


                    /* USER QUESTION */

                    const userMessage =
                        document.createElement("div");


                    userMessage.className =
                        "faq-user-message";


                    const userBubble =
                        document.createElement("div");


                    userBubble.className =
                        "faq-user-bubble";


                    userBubble.textContent =
                        faq.question;


                    userMessage.appendChild(
                        userBubble
                    );



                    /* ASSISTANT RESPONSE */

                    const assistantMessage =
                        document.createElement("div");


                    assistantMessage.className =
                        "faq-message assistant-message";


                    const avatar =
                        document.createElement("div");


                    avatar.className =
                        "faq-avatar";


                    avatar.textContent =
                        "G";


                    const answerBubble =
                        document.createElement("div");


                    answerBubble.className =
                        "faq-bubble";


                    const answerText =
                        document.createElement("p");


                    answerText.textContent =
                        faq.answer;


                    answerBubble.appendChild(
                        answerText
                    );



                    /* OPTIONAL ANSWER LINK */

                    if (
                        faq.link &&
                        faq.linkText
                    ) {

                        const answerLink =
                            document.createElement("a");


                        answerLink.href =
                            faq.link;


                        answerLink.textContent =
                            faq.linkText;


                        answerLink.className =
                            "faq-answer-link";


                        if (faq.external) {

                            answerLink.target =
                                "_blank";


                            answerLink.rel =
                                "noopener noreferrer";

                        }


                        answerBubble.appendChild(
                            answerLink
                        );

                    }



                    assistantMessage.appendChild(
                        avatar
                    );


                    assistantMessage.appendChild(
                        answerBubble
                    );


                    faqConversation.appendChild(
                        userMessage
                    );


                    faqConversation.appendChild(
                        assistantMessage
                    );



                    /* SCROLL TO NEW ANSWER */

                    if (faqChatBody) {

                        setTimeout(
                            function () {

                                faqChatBody.scrollTo({

                                    top:
                                        faqChatBody.scrollHeight,

                                    behavior:
                                        "smooth"

                                });

                            },
                            50
                        );

                    }

                }
            );

        }
    );



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
