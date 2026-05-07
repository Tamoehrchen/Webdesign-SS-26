
const btn = document.getElementById("button");
//Mouse Over triggert Zusammenziehen und wegspringen.
btn.addEventListener("mouseover", function () {


    btn.style.transition = "transform 0.15s ease";
    btn.style.transform = "scale(0.7)";

    setTimeout(function () {

        const x = (Math.random() - 0.5) * 800;
        const y = (Math.random() - 0.5) * 500;

        btn.style.transition = "transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275)";

        btn.style.transform = "translate(" + x + "px, " + y + "px) scale(1)";

        btn.style.backgroundColor = "rgb(243, 105, 105)";
        btn.style.borderColor = "rgb(245, 177, 177)";

    }, 130);
});

//Beim Klicken kommt ein Alert.
btn.addEventListener("click", function () {
    alert('Du hast den Hasen erschossen!:(');
});