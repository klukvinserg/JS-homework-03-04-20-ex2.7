let str;

for (; true; ) {
  str = prompt("Enter string (example: 2+2)");

  if (str === null) {
    alert("Incorrect");
    continue;
  }

  if (
    str.includes("+") ||
    str.includes("-") ||
    str.includes("*") ||
    str.includes("/")
  ) {
    break;
  } else {
    alert("Incorrect");
    continue;
  }
}

function calc(str) {
  let arr;
  if (str.includes("+")) {
    arr = str.split("+");
    return Number(arr[0]) + Number(arr[1]);
  } else if (str.includes("-")) {
    arr = str.split("-");
    return Number(arr[0]) - Number(arr[1]);
  } else if (str.includes("*")) {
    arr = str.split("*");
    return Number(arr[0]) * Number(arr[1]);
  } else if (str.includes("/")) {
    arr = str.split("/");
    return Number(arr[0]) / Number(arr[1]);
  }
}

document.write(`String: ${str}<br>Result: ${calc(str)}`);
