document.getElementById("determination_no").addEventListener("click", function() {
    document.getElementById("inconvenient_block").style.display = "block";
    document.getElementById("determination_check_block").style.display = "none";
});

document.getElementById("determination_yes").addEventListener("click", function() {
    document.getElementById("review_sources_block").style.display = "block";
    document.getElementById("determination_check_block").style.display = "none";
});

function SendMail() {
    var inconvenientBoxDiv = document.getElementById("inconvenient_box");
    var thanksDiv = document.getElementById("thanksDiv");

    inconvenientBoxDiv.style.display = "none";
    thanksDiv.style.display = "block";

    var params = {
        message: document.getElementById('review_text').value,
    }

    emailjs.send("Message", "Thanks you!", params).then(function(res) {
        console.log("ok");
    })
}
