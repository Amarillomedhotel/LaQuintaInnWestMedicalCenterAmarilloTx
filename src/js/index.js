
document.getElementById("determination_no").addEventListener("click", function () {
    document.getElementById("review_sources_block_1").style.display = "block";
    document.getElementById("determination_check_block ").style.display = "none";
});

document.getElementById("determination_1").addEventListener("click", function () {
    document.getElementById("review_sources_block_1").style.display = "none"; // Hide Section 1
    document.getElementById("inconvenient_block").style.display = "block";
    document.getElementById("determination_check_block ").style.display = "none";
});

document.getElementById("determination_yes").addEventListener("click", function () {
    document.getElementById("review_sources_block").style.display = "block";
    document.getElementById("determination_check_block ").style.display = "none";
});


function SendMail() {
    var inconvenientBoxDiv = document.getElementById("inconvenient_box");

    var thanksDiv = document.getElementById("thanksDiv");

    inconvenientBoxDiv.style.display = "none";

    thanksDiv.style.display = "block";
    var params = {
        message: document.getElementById('review_text').value,
    }
    emailjs.send("Message", "Thanks you!", params).then(function (res) {
        console.log("ok");
    })


}




// Sayfa yüklendiğinde bu fonksiyon çağrılır
window.onload = function() {
    // Sayaç değerini depolamak için bir değişken oluşturalım
    var count = localStorage.getItem('reviewCount');

    // Eğer count değeri yoksa veya değeri sayısal bir değilse, varsayılan değeri 2000 olarak atayalım
    if (!count || isNaN(count)) {
        count = 2000;
    }

    // Sayaç değerini gösteren span elementini bulalım
    var reviewCountSpan = document.getElementById("review_count");

    // Sayaç değerini span elementinin içeriğine yazalım
    reviewCountSpan.textContent = count + " reviews";

    // Her sayfa yüklendiğinde sayaç değerini artıralım ve local storage'a kaydedelim
    count++;
    localStorage.setItem('reviewCount', count);
};
