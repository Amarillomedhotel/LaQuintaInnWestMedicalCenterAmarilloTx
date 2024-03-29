document.getElementById("determination_no").addEventListener("click", function() {
    document.getElementById("inconvenient_block").removeAttribute("hidden");
    document.getElementById("determination_check_block").setAttribute("hidden", "hidden");
});

document.getElementById("determination_yes").addEventListener("click", function() {
    document.getElementById("review_sources_block").removeAttribute("hidden");
    document.getElementById("determination_check_block").setAttribute("hidden", "hidden");
});
