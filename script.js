//your JS code here. If required.
document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("runFizzBuzz");
    const output = document.getElementById("output");

    button.addEventListener("click", function () {
        output.innerHTML = ""; // Clear previous results

        for (let i = 1; i <= 100; i++) {
            let result = "";

            if (i % 3 === 0) {
                result += "Fizz";
            }
            if (i % 5 === 0) {
                result += "Buzz";
            }
            if (result === "") {
                result = i.toString();
            }

            const div = document.createElement("div");
            div.textContent = result;
            output.appendChild(div);
        }
    });
});
