
document.getElementById("determination_no").addEventListener("click", function() {
    document.getElementById("inconvenient_block").removeAttribute("hidden");
    document.getElementById("determination_check_block").setAttribute("hidden", "hidden");
});

document.getElementById("determination_yes").addEventListener("click", function() {
    document.getElementById("review_sources_block").removeAttribute("hidden");
    document.getElementById("determination_check_block").setAttribute("hidden", "hidden");
});


function SendMail() {
   
    var params= {
        message: document.getElementById('review_text').value,
    }
    emailjs.send("Message","Thanks you!",params).then(function(res) {
   console.log("ok");
    })
}
