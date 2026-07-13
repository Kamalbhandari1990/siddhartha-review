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

        if (response.ok) {

            document.getElementById("badReview").innerHTML = `
                <h2>❤️ Thank You!</h2>

                <p>
                    Your feedback has been received successfully.
                    <br><br>
                    We sincerely appreciate you taking the time to share your experience.
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