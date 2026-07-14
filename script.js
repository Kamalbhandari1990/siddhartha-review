const translations = {
    en: {
        title: "Thank You For Visiting",
        restaurant: "Siddhartha Nepalese Restaurant",
        subtitle: "Your feedback means a lot to our family restaurant.",
        question: "How was your experience?",

        goodTitle: "🎉 Thank You!",
        goodText: "Please support us by leaving us a review.",

        badTitle: "❤️ We're Sorry",
        badText: "Your experience matters to us.<br><br>Please tell us what went wrong so we can make it right.",

        namePlaceholder: "Your Name (Optional)",
        emailPlaceholder: "Email Address (Optional)",
        feedbackPlaceholder: "Please share your experience...",

        sendButton: "Send Feedback ❤️",

        googleButton: "Google Review",
        tripButton: "TripAdvisor",
        facebookButton: "Facebook",

        successTitle: "❤️ Thank You!",
        successText: "Your feedback has been received successfully.<br><br>We sincerely appreciate you taking the time to share your experience."
    },

    fi: {
        title: "Kiitos käynnistäsi",
        restaurant: "Siddhartha Nepalilainen Ravintola",
        subtitle: "Palautteesi on meille perheravintolana erittäin tärkeää.",
        question: "Millainen kokemuksesi oli?",

        goodTitle: "🎉 Kiitos!",
        goodText: "Olisimme todella kiitollisia, jos jättäisit meille arvostelun.",

        badTitle: "❤️ Olemme pahoillamme",
        badText: "Kokemuksesi on meille tärkeä.<br><br>Kerro meille, mikä meni pieleen, jotta voimme palvella sinua paremmin.",

        namePlaceholder: "Nimesi (Valinnainen)",
        emailPlaceholder: "Sähköpostiosoite (Valinnainen)",
        feedbackPlaceholder: "Kerro meille kokemuksestasi...",

        sendButton: "Lähetä palaute ❤️",

        googleButton: "Google-arvostelu",
        tripButton: "TripAdvisor",
        facebookButton: "Facebook",

        successTitle: "❤️ Kiitos!",
        successText: "Palautteesi on vastaanotettu onnistuneesti.<br><br>Arvostamme suuresti, että käytit aikaa kokemuksesi jakamiseen."
    }
};

function setLanguage(lang) {

    document.getElementById("title").textContent = translations[lang].title;
    document.getElementById("restaurant").textContent = translations[lang].restaurant;
    document.getElementById("subtitle").textContent = translations[lang].subtitle;
    document.getElementById("question").textContent = translations[lang].question;

    document.getElementById("goodTitle").textContent = translations[lang].goodTitle;
    document.getElementById("goodText").textContent = translations[lang].goodText;

    document.getElementById("badTitle").textContent = translations[lang].badTitle;
    document.getElementById("badText").innerHTML = translations[lang].badText;

    document.getElementById("nameInput").placeholder = translations[lang].namePlaceholder;
    document.getElementById("emailInput").placeholder = translations[lang].emailPlaceholder;
    document.getElementById("feedbackInput").placeholder = translations[lang].feedbackPlaceholder;

    document.getElementById("sendButton").textContent = translations[lang].sendButton;

    document.getElementById("googleButton").textContent = translations[lang].googleButton;
    document.getElementById("tripButton").textContent = translations[lang].tripButton;
    document.getElementById("facebookButton").textContent = translations[lang].facebookButton;

    document.getElementById("lang-en").classList.remove("active");
    document.getElementById("lang-fi").classList.remove("active");

    document.getElementById("lang-" + lang).classList.add("active");
}

function rate(stars) {

    document.getElementById("ratingBox").style.display = "none";

    if (stars >= 4) {

        document.getElementById("goodReview").style.display = "block";
        history.pushState({ page: "good" }, "", "#good");

    } else {

        document.getElementById("badReview").style.display = "block";
        history.pushState({ page: "bad" }, "", "#bad");

    }

}

const feedbackForm = document.getElementById("feedbackForm");

feedbackForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const formData = new FormData(feedbackForm);

    try {

        const response = await fetch(feedbackForm.action, {
            method: "POST",
            body: formData,
            headers: {
                "Accept": "application/json"
            }
        });

        if (response.ok) {            const currentLang = document.getElementById("lang-fi").classList.contains("active")
                ? "fi"
                : "en";

            document.getElementById("badReview").innerHTML = `
                <h2>${translations[currentLang].successTitle}</h2>

                <p>
                    ${translations[currentLang].successText}
                </p>
            `;

        } else {

            alert("Sorry, something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Network error. Please try again.");

    }

});

window.addEventListener("popstate", function () {

    document.getElementById("ratingBox").style.display = "block";
    document.getElementById("goodReview").style.display = "none";
    document.getElementById("badReview").style.display = "none";

});