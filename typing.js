document.addEventListener("DOMContentLoaded", function () {
    const text = "愿星光照亮我们的前程";
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
