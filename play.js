//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to binary when user inputs in the decimal field
decInp.addEventListener("input", () => {
    let decValue = parseInt(decInp.value);
    //converts the decimal value to binary
    binInp.value = decValue.toString(2);
});

//convert binary to decimal when user inputs in the binary field
binInp.addEventListener("input", () => {
    let binValue = binInp.value;
    //If the binary number is valid convert it to decimal
    if(binValidator(binVakue)){
        decInp.value = parseInt(binValue, 2);
        errorMsg.textContent = "";

    }
    //Else display an error message
    else {
        errorMsg.textContent = "Please Enter An Valid Binary Input";

    }
})
