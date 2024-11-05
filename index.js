(() => {
    const container = document.getElementById("container");

    for (let count = 0; count <= 100; count++) {
        let p = document.createElement("p");
        p.innerText = "What have you done?";

        container.appendChild(p);
    }

    console.log("working...");
})();