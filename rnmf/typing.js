document.addEventListener("DOMContentLoaded", function () {
    const text = "发现、解析、复现、重构";
    const h2 = document.querySelector(".solgen h2");
    h2.textContent = "";
    h2.style.visibility = "visible";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            h2.textContent += text[index];
            index++;
            setTimeout(typeEffect, 50);
        }
    }

    typeEffect();
});
