
//Getting Focus while loading 
window.onload = function () {
    document.getElementById("myinput").focus();
};

//When click on button get value into input.
const input = document.getElementById("myinput");
document.getElementById("numbers").addEventListener("click", function (e) {
    if (e.target.classList.contains("num")) {
        input.value = input.value + e.target.innerText;
    }
})

function myname() {
    input.value = ""
}

//Function for sum the Values
function sum() {
    try {
        let b = eval(input.value)
        input.value = b;
        console.log(b);
    } catch (error) {
        alert("Wrong Input!")
        input.value = "";
    }
}
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        sum();
    } else if (e.key === "c") {
        e.preventDefault();
        myname();
    } else if ((e.key >= 'a' && e.key <= 'z') || (e.key >= 'A' && e.key <= 'Z')) {
        e.preventDefault();
    }
})


