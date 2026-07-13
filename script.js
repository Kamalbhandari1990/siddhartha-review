function rate(stars){

    document.getElementById("ratingBox").style.display="none";

    if(stars >= 4){

        document.getElementById("goodReview").style.display="block";

    }else{

        document.getElementById("badReview").style.display="block";

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

    // Hide the entire "We're Sorry" section
    document.getElementById("badReview").innerHTML = `
        <h2>❤️ Thank You!</h2>

        <p>
            Your feedback has been sent successfully.
            <br><br>
            We truly appreciate you taking the time to help us improve.
            We hope to welcome you again soon.
        </p>
    `;

} else {

            alert("Sorry, something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Network error. Please try again.");

    }

});