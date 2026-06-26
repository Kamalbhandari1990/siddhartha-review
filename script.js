function rate(stars){

    document.getElementById("ratingBox").style.display="none";

    if(stars >= 4){

        document.getElementById("goodReview").style.display="block";

    }else{

        document.getElementById("badReview").style.display="block";

    }

}