alert("JavaScript loaded");
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

            feedbackForm.style.display = "none";
            document.getElementById("successMessage").style.display = "block";

        } else {

            alert("Sorry, something went wrong. Please try again.");

        }

    } catch (error) {

        alert("Network error. Please try again.");

    }

});