const inputValue = document.getElementById("user-input");
const number = document.querySelectorAll(".numbers").forEach((item) => {
    item.addEventListener("click", (e) => {
        if (inputValue.innerText === "NaN") {
            inputValue.innerText = "";
        }
        if (inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        console.log(e.target.innerhtml);
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

const operation = document.querySelectorAll(".operations").forEach((item) => {
    item.addEventListener("click", (e) => {
        let lastValue = inputValue.innerText.substring(
            inputValue.innerText.length,
            inputValue.innerText.length - 1
        );
        if(!isNaN(lastValue) && e.target.innerHTML==="="){
            inputValue.innerText=eval(inputValue.innerText);
        }
        else if (e.target.innerHTML === "AC") {
            inputValue.innerText = 0;
        } else if (e.target.innerHTML === "DEL") {
            inputValue.innerText = inputValue.innerText.substring(
                0,
                inputValue.innerText.length - 1
            );
            if (inputValue.innerText.length == 0) {
                inputValue.innerText = 0;
            }
        }
        else{
            if(!isNaN(lastValue))
            inputValue.innerText+=e.target.innerHTML.trim();
        }
    });
});
