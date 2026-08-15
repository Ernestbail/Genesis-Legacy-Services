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

const faqConversation =
    document.getElementById("faqConversation");

const faqChatBody =
    document.getElementById("faqChatBody");

const faqCategoryList =
    document.getElementById("faqCategoryList");

const faqQuestionList =
    document.getElementById("faqQuestionList");

const faqCategories =
    document.querySelectorAll(".faq-category");

let lastFaqTrigger = null;



/* =====================================================
   FAQ DATA
===================================================== */

const faqData = {


    /* =================================================
       LIFE INSURANCE
    ================================================= */

    life: [

        {
            question:
                "What is the difference between term life and permanent life insurance?",

            answer:
                "Term life insurance provides coverage for a specified period of time and generally does not build cash value. Permanent life insurance is designed to provide coverage for life, as long as the policy remains in force, and certain types may accumulate cash value."
        },

        {
            question:
                "What is whole life insurance?",

            answer:
                "Whole life insurance is a type of permanent life insurance that generally provides lifetime coverage and may build cash value over time. Whole life policies typically have scheduled premiums and contractual guarantees outlined in the policy."
        },

        {
            question:
                "What is an IUL policy?",

            answer:
                "Indexed Universal Life is a type of permanent life insurance that combines a death benefit with a cash-value component. Interest crediting is linked to the performance of a selected market index and is subject to the policy's terms, including caps, floors, participation rates, fees, and other provisions. An IUL is not the same as directly investing in the underlying index."
        },

        {
            question:
                "What is final expense insurance?",

            answer:
                "Final expense insurance is generally designed to provide a smaller amount of life insurance coverage intended to help beneficiaries with expenses that may arise after the insured's death, such as funeral and burial costs, outstanding bills, or other final expenses."
        },

        {
            question:
                "Can I get life insurance if I have health conditions?",

            answer:
                "Yes. Eligibility and pricing depend on the insurance company, type of policy, medical history, and underwriting guidelines. Having a health condition does not automatically mean you cannot obtain coverage."
        },

        {
            question:
                "Do I have to take a medical exam?",

            answer:
                "Not all policies require a medical exam. Some policies may require an exam or other medical information, while others may use simplified underwriting."
        },

        {
            question:
                "Will medications affect my ability to qualify?",

            answer:
                "They may. Insurance companies may consider prescription medications and the medical conditions for which they are prescribed as part of the underwriting process."
        },

        {
            question:
                "Does my age affect my life insurance rate?",

            answer:
                "Yes. Age is one of the factors insurance companies commonly consider when determining premiums. Rates may also depend on health, coverage amount, policy type, and underwriting."
        },

        {
            question:
                "Can I get life insurance if I am a smoker?",

            answer:
                "Possibly. Many insurance companies offer coverage to smokers, although tobacco use can affect eligibility and premiums."
        },

        {
            question:
                "Can I have more than one life insurance policy?",

            answer:
                "Yes. It is possible to own multiple life insurance policies provided you meet applicable underwriting and financial requirements."
        },

        {
            question:
                "How long does approval take?",

            answer:
                "The timeframe varies. Some applications may be approved quickly through accelerated or simplified underwriting, while others may require medical records, exams, or additional review."
        },

        {
            question:
                "Can I borrow money from my life insurance policy?",

            answer:
                "Certain permanent life insurance policies that accumulate cash value may allow policy loans. Loans can reduce the policy's cash value and death benefit and may accrue interest."
        },

        {
            question:
                "What is cash value?",

            answer:
                "Cash value is a feature of certain permanent life insurance policies. It is an amount that may accumulate within the policy according to its terms and may potentially be accessed through withdrawals or loans."
        },

        {
            question:
                "Does every life insurance policy build cash value?",

            answer:
                "No. Term life insurance generally does not build cash value. Cash-value policies may include products such as whole life and universal life."
        },

        {
            question:
                "Can life insurance help protect my mortgage?",

            answer:
                "Yes. Life insurance can be part of a financial strategy intended to provide funds to beneficiaries that could be used toward mortgage obligations after the insured's death."
        },

        {
            question:
                "How much does life insurance cost?",

            answer:
                "There is no single price. Premiums can depend on age, health, tobacco use, coverage amount, policy type, underwriting, and the insurance company's pricing."
        },

        {
            question:
                "Which life insurance policy is right for me?",

            answer:
                "The appropriate policy depends on your financial needs, budget, coverage goals, health, age, dependents, and how long you need coverage. Genesis & Co. can help you compare available options."
        }

    ],



    /* =================================================
       HEALTH INSURANCE
    ================================================= */

    health: [

        {
            question:
                "What is a premium?",

            answer:
                "A premium is the amount you pay for health insurance coverage, usually monthly, whether or not you receive medical services."
        },

        {
            question:
                "What is a deductible?",

            answer:
                "A deductible is the amount you generally pay for covered healthcare services before your health plan begins paying according to the plan's coverage rules."
        },

        {
            question:
                "What is a copay?",

            answer:
                "A copay is a fixed amount you pay for a covered healthcare service, such as a doctor's visit or prescription, depending on the plan."
        },

        {
            question:
                "What is coinsurance?",

            answer:
                "Coinsurance is the percentage of the cost of a covered service that you are responsible for after applicable deductibles have been met."
        },

        {
            question:
                "What is an out-of-pocket maximum?",

            answer:
                "An out-of-pocket maximum is the most you generally pay during a plan year for covered, in-network services before the plan pays 100% of covered benefits, subject to the plan's rules."
        },

        {
            question:
                "How do I know which health insurance plan is right for me?",

            answer:
                "The right plan depends on your healthcare needs, budget, preferred doctors and hospitals, prescriptions, expected medical expenses, and how you prefer to balance monthly premiums with out-of-pocket costs."
        },

        {
            question:
                "Can I get health insurance with a pre-existing condition?",

            answer:
                "For ACA Marketplace plans, yes. Marketplace plans must cover pre-existing medical conditions and cannot reject you or charge you more because of a pre-existing condition."
        }

    ],



    /* =================================================
       MEDICARE
    ================================================= */

    medicare: [

        {
            question:
                "What is Medicare?",

            answer:
                "Medicare is a federal health insurance program primarily for people age 65 and older and certain younger people who qualify because of disability or specific medical conditions."
        },

        {
            question:
                "Who is eligible for Medicare?",

            answer:
                "Eligibility generally depends on age, disability status, and certain medical conditions. Most people become eligible at age 65, while some people may qualify earlier."
        },

        {
            question:
                "When can I enroll in Medicare?",

            answer:
                "People approaching age 65 generally have an Initial Enrollment Period surrounding their 65th birthday. Other enrollment opportunities may apply depending on your circumstances."
        },

        {
            question:
                "What are Medicare Parts A, B, C, and D?",

            answer:
                "Part A generally helps cover inpatient hospital care. Part B generally helps cover physician and outpatient services. Part C, also called Medicare Advantage, is an alternative way to receive Medicare benefits through approved private plans. Part D provides prescription drug coverage through approved private plans."
        },

        {
            question:
                "What is Medigap?",

            answer:
                "Medigap is private supplemental insurance designed to help pay certain costs that Original Medicare does not fully cover, such as certain copayments, coinsurance, and deductibles."
        },

        {
            question:
                "What is the difference between Medicare Advantage and Medigap?",

            answer:
                "Medicare Advantage is an alternative way to receive Medicare Part A and Part B benefits through a private Medicare-approved plan. Medigap works alongside Original Medicare to help pay certain out-of-pocket costs."
        },

        {
            question:
                "What happens if I miss my Medicare enrollment period?",

            answer:
                "Depending on your circumstances, you may have to wait for another enrollment period and could face late enrollment penalties. Some people may qualify for a Special Enrollment Period."
        },

        {
            question:
                "When can I change my Medicare plan?",

            answer:
                "Medicare Advantage and prescription drug plans have specific enrollment periods. The Annual Enrollment Period generally runs from October 15 through December 7 each year."
        },

        {
            question:
                "Does Medicare cover prescription drugs?",

            answer:
                "Original Medicare does not generally include prescription drug coverage. Part D coverage can be obtained separately or through a Medicare Advantage plan that includes drug coverage."
        },

        {
            question:
                "Does Medicare cover dental, vision, or hearing?",

            answer:
                "Original Medicare generally does not cover most routine dental care, routine eye exams for glasses, or hearing aids. Some Medicare Advantage plans may offer additional benefits."
        },

        {
            question:
                "What happens if I am turning 65 soon?",

            answer:
                "You should begin reviewing your Medicare eligibility and enrollment options before your 65th birthday. Your Initial Enrollment Period generally begins three months before the month you turn 65."
        }

    ],



    /* =================================================
       ACA / MARKETPLACE
    ================================================= */

    aca: [

        {
            question:
                "What is ACA health insurance?",

            answer:
                "ACA health insurance refers to health coverage that complies with the Affordable Care Act. Marketplace plans are available through the federal Health Insurance Marketplace or certified enrollment partners."
        },

        {
            question:
                "What is the Health Insurance Marketplace?",

            answer:
                "The Health Insurance Marketplace is an online service where eligible individuals and families can compare and enroll in qualifying health insurance plans and determine whether they qualify for financial assistance."
        },

        {
            question:
                "Who can qualify for ACA Marketplace coverage?",

            answer:
                "Eligibility depends on factors such as residency, household circumstances, income, and access to other qualifying health coverage."
        },

        {
            question:
                "Can I get ACA coverage if I am self-employed?",

            answer:
                "Yes. Self-employed individuals may apply for Marketplace coverage. Eligibility for financial assistance depends on household information and estimated income."
        },

        {
            question:
                "How much does ACA insurance cost?",

            answer:
                "Cost varies based on factors including age, location, tobacco use, household enrollment, plan category, and whether you qualify for financial assistance."
        },

        {
            question:
                "What is a premium tax credit?",

            answer:
                "A premium tax credit is a tax credit that may lower the amount you pay each month for Marketplace health insurance."
        },

        {
            question:
                "What is a cost-sharing reduction?",

            answer:
                "Cost-sharing reductions are additional savings that may lower deductibles, copayments, and coinsurance for eligible individuals."
        },

        {
            question:
                "Can my children be covered under my ACA plan?",

            answer:
                "Yes. Marketplace plans can provide coverage for eligible dependents, subject to the plan and eligibility requirements."
        },

        {
            question:
                "When can I enroll in an ACA plan?",

            answer:
                "The federal Marketplace Open Enrollment Period generally runs from November 1 through January 15 each year. Outside Open Enrollment, you generally need a qualifying Special Enrollment Period."
        },

        {
            question:
                "What qualifies me for a Special Enrollment Period?",

            answer:
                "Qualifying events can include certain losses of health coverage, marriage, birth or adoption, household changes, and certain moves. The Marketplace determines whether your circumstances qualify."
        },

        {
            question:
                "What happens if my income changes?",

            answer:
                "You should update your Marketplace application when household income or circumstances change because the change can affect your eligibility for premium tax credits and other savings."
        }

    ],



    /* =================================================
       REAL ESTATE
    ================================================= */

    realestate: [

        {
            question:
                "Do you provide Real Estate services?",

            answer:
                "Yes. Genesis & Co. Legacy Services provides professional assistance and support for real estate buying and selling needs."
        },

        {
            question:
                "Do I need to be pre-approved before looking at homes?",

            answer:
                "You do not necessarily need to be pre-approved to begin looking at homes. However, obtaining a mortgage pre-approval before making an offer can help you understand your potential budget and demonstrate to sellers that you have taken steps toward securing financing."
        },

        {
            question:
                "How long does the home-buying process take?",

            answer:
                "The timeline varies based on financing, property availability, inspections, appraisal, title work, negotiations, and the agreed closing date. Once an offer is accepted, a financed purchase commonly takes several weeks to close."
        }

    ],



    /* =================================================
       TAX PREPARATION
    ================================================= */

    tax: [

        {
            question:
                "What tax services do you offer?",

            answer:
                "Genesis & Co. offers Personal Tax Returns, Small Business Taxes, Tax Planning, Electronic Filing, and Refund Assistance."
        },

        {
            question:
                "How early should I file my taxes?",

            answer:
                "You can generally file once you have received the necessary tax documents and the IRS has opened the filing season. It is important to make sure you have all relevant documents before filing."
        },

        {
            question:
                "Can you amend a previous tax return?",

            answer:
                "An amended return may be appropriate if certain information on a previously filed return needs to be corrected. Genesis & Co. can review the information you provide and help determine the appropriate next step."
        },

        {
            question:
                "Do you offer electronic filing?",

            answer:
                "Electronic filing availability depends on the tax preparation services and filing requirements applicable to your return. Contact Genesis & Co. to confirm current e-filing availability."
        }

    ],



    /* =================================================
       NOTARY
    ================================================= */

    notary: [

        {
            question:
                "How does Remote Notary work?",

            answer:
                "Remote Notary allows eligible documents to be notarized through a secure virtual process when applicable legal requirements are met."
        },

        {
            question:
                "What documents can you notarize?",

            answer:
                "Examples may include affidavits, acknowledgments, powers of attorney, certain real estate documents, and other documents requiring notarization when the requested act is permitted by law."
        },

        {
            question:
                "Can you notarize a document if the signer is not present?",

            answer:
                "No. The person whose signature is being notarized must personally appear before the notary and satisfy applicable identification and legal requirements, except where a specifically authorized remote procedure applies."
        }

    ],



    /* =================================================
       GENERAL
    ================================================= */

    general: [

        {
            question:
                "What services does Genesis & Co. offer?",

            answer:
                "Genesis & Co. Legacy Services provides Life Insurance, Health Insurance, Medicare and ACA Marketplace assistance, Real Estate services, Tax Preparation, and Notary Services."
        },

        {
            question:
                "What areas do you serve?",

            answer:
                "Service availability depends on the specific service and applicable licensing requirements. Please contact Genesis & Co. to confirm whether we currently serve your area."
        },

        {
            question:
                "How do I schedule an appointment?",

            answer:
                "Appointments can be scheduled through our online booking system or by contacting Genesis & Co. Legacy Services directly.",

            link:
                "https://calendly.com/genesislegacyservices/initial-consultation",

            linkText:
                "Book Free Consultation →",

            external:
                true
        },

        {
            question:
                "Do you require a deposit for consultations?",

            answer:
                "No. Genesis & Co. Legacy Services does not require a deposit for consultations. All consultations are free."
        },

        {
            question:
                "Are insurance services free to clients?",

            answer:
                "Life insurance and health insurance services are provided at no cost to the client. Fees may apply for other services including tax preparation, notary services, and real estate assistance depending on the service requested."
        },

        {
            question:
                "How do I get started?",

            answer:
                "Complete our contact form and tell us which service you're interested in. A member of Genesis & Co. Legacy Services can follow up with you.",

            link:
                "contact.html",

            linkText:
                "Get Started →"
        }

    ]

};



/* =====================================================
   CATEGORY LABELS
===================================================== */

const faqCategoryNames = {

    life:
        "Life Insurance",

    health:
        "Health Insurance",

    medicare:
        "Medicare",

    aca:
        "ACA / Marketplace",

    realestate:
        "Real Estate",

    tax:
        "Tax Preparation",

    notary:
        "Notary Services",

    general:
        "General Questions"

};



/* =====================================================
   OPEN FAQ
===================================================== */

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


    showFaqCategories();


    if (faqClose) {

        setTimeout(
            function () {

                faqClose.focus();

            },
            50
        );

    }

}



/* =====================================================
   CLOSE FAQ
===================================================== */

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


    if (faqConversation) {

        faqConversation.innerHTML = "";

    }


    showFaqCategories();


    if (lastFaqTrigger) {

        lastFaqTrigger.focus();

    }

}



/* =====================================================
   SHOW CATEGORIES
===================================================== */

function showFaqCategories() {

    if (faqCategoryList) {

        faqCategoryList.style.display =
            "grid";

    }


    if (faqQuestionList) {

        faqQuestionList.innerHTML = "";

        faqQuestionList.style.display =
            "none";

    }

}



/* =====================================================
   SHOW QUESTIONS
===================================================== */

function showFaqQuestions(category) {

    if (
        !faqQuestionList ||
        !faqData[category]
    ) {

        return;

    }


    faqCategoryList.style.display =
        "none";


    faqQuestionList.innerHTML = "";


    faqQuestionList.style.display =
        "flex";


    /* BACK BUTTON */

    const backButton =
        document.createElement("button");


    backButton.type =
        "button";


    backButton.className =
        "faq-back-button";


    backButton.textContent =
        "← Back to Categories";


    backButton.addEventListener(
        "click",
        showFaqCategories
    );


    faqQuestionList.appendChild(
        backButton
    );



    /* CATEGORY TITLE */

    const categoryTitle =
        document.createElement("div");


    categoryTitle.className =
        "faq-category-title";


    categoryTitle.textContent =
        faqCategoryNames[category];


    faqQuestionList.appendChild(
        categoryTitle
    );



    /* QUESTIONS */

    faqData[category].forEach(
        function (item) {

            const questionButton =
                document.createElement("button");


            questionButton.type =
                "button";


            questionButton.className =
                "faq-question";


            questionButton.textContent =
                item.question;


            questionButton.addEventListener(
                "click",
                function () {

                    showFaqAnswer(item);

                }
            );


            faqQuestionList.appendChild(
                questionButton
            );

        }
    );

}



/* =====================================================
   SHOW ANSWER
===================================================== */

function showFaqAnswer(item) {

    if (!faqConversation) {
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
        item.question;


    userMessage.appendChild(
        userBubble
    );



    /* ASSISTANT ANSWER */

    const assistantMessage =
        document.createElement("div");


    assistantMessage.className =
        "faq-message";


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
        item.answer;


    answerBubble.appendChild(
        answerText
    );



    /* OPTIONAL LINK */

    if (
        item.link &&
        item.linkText
    ) {

        const answerLink =
            document.createElement("a");


        answerLink.href =
            item.link;


        answerLink.textContent =
            item.linkText;


        answerLink.className =
            "faq-answer-link";


        if (item.external) {

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



    /* SCROLL TO ANSWER */

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



/* =====================================================
   CATEGORY CLICKS
===================================================== */

faqCategories.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                const category =
                    this.dataset.category;


                showFaqQuestions(
                    category
                );

            }
        );

    }
);



/* =====================================================
   FAQ TRIGGERS
===================================================== */

faqTriggers.forEach(
    function (trigger) {

        trigger.addEventListener(
            "click",
            openFaq
        );

    }
);



/* =====================================================
   CLOSE BUTTON
===================================================== */

if (faqClose) {

    faqClose.addEventListener(
        "click",
        closeFaq
    );

}



/* =====================================================
   CLOSE OVERLAY
===================================================== */

document
    .querySelectorAll(
        "[data-faq-close]"
    )
    .forEach(
        function (element) {

            element.addEventListener(
                "click",
                closeFaq
            );

        }
    );



/* =====================================================
   ESCAPE KEY
===================================================== */

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
