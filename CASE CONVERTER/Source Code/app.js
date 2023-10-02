const lower = document.querySelector(".lower-Case");
const upper = document.querySelector(".UPPER-CASE")
const capital = document.querySelector(".Capitalized-Case")
const copybord = document.querySelector(".Copy-to-Clipboard")


const resultBox = document.querySelector(".reselt-Text")
const oregnalBox = document.querySelector(".original-Text")


lower.addEventListener("click", () => {

    let textValue = oregnalBox.value;
    textValue = textValue.toLowerCase();
    resultBox.innerHTML = textValue
    copyfunc();

});


upper.addEventListener("click", () => {

    let textValue = oregnalBox.value;
    textValue = textValue.toUpperCase();
    resultBox.innerHTML = textValue
    copyfunc();

});

capital.addEventListener("click", () => {

    let textValue = oregnalBox.value;
    textValue = textValue.toLowerCase();

    function title(str) {
        return str.replace(/(^|\s)\S/g, function (t) { return t.toUpperCase() });
    }

    textValue = title(textValue)
    resultBox.innerHTML = textValue
    copyfunc();

});

function copyfunc() {

    let range = document.createRange();
    range.selectNodeContents(resultBox);

    let selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);

    document.execCommand("copy");
}

copybord.addEventListener("click", copyfunc());