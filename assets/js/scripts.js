var toggler = document.getElementsByClassName("carousel-button");
var toggler = document.getElementsByClassName("carousel-button-profile");
$(".sendButton").hide();
for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        document
            .querySelectorAll(".carousel-button")
            .forEach((e) => e.classList.remove("active-button-category"));
        this.classList.add("active-button-category");
    });
}

for (i = 0; i < toggler.length; i++) {
    toggler[i].addEventListener("click", function () {
        document
            .querySelectorAll(".carousel-button-profile")
            .forEach((e) => e.classList.remove("active-button-category"));
        this.classList.add("active-button-category");
    });
}

function showSendButton() {
    if ($("#text-comment").val().length > 0) {
        $(".sendButton").show();
        console.log($("#text-comment").val().length);
    } else {
        $(".sendButton").hide();
        console.log($("#text-comment").val().length);
    }
}
