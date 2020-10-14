function clr() {
  document.getElementById("display").value = "";
}

function solve() {
  var value1 = document.getElementById("display").value;
  let res = eval(value1);
  document.getElementById("display").value = res;
}

const buttons = document.querySelectorAll(".btn");
var ans = document.getElementById("display");
buttons.forEach((btns) => {
  btns.addEventListener("click", function (e) {
    console.log(document.getElementById("display").value);
    let key = e.target.textContent;
    document.getElementById("display").value += key;
    console.log(document.getElementById("display").value);
  });
});

document.getElementById("clear").addEventListener("click", clr);
document.getElementById("solve").addEventListener("click", solve);
