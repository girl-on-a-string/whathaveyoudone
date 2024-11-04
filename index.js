(() => {
    for (let count; count <= 1000; count++) {
        let span = document.createElement("span");
        span.innerText = "What have you done?";

        document.appendChild(span);
    }

    console.log("working...");
})();