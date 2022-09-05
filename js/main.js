function main() {
  console.clear();
  let name = document.querySelector("#inputName").value;
  let day = document.querySelector("#inputDay").value;
  let month = document.querySelector("#inputMonth").value;
  let year = document.querySelector("#inputYear").value;

  let resDay = getFinalValue(day);
  console.log(resDay);
  let resMonth = getFinalValue(month);
  console.log(resMonth);
  let resYear = getFinalValue(year);
  console.log(resYear);

  let finalSum = resDay + resMonth + resYear;

  if (finalSum <= 11) { //Normal case
    document.getElementById("yourNumber").innerHTML = getFinalValue(finalSum);
  } else {
    document.getElementById("yourNumber").innerHTML = getFinalValue(
      getFinalValue(finalSum)
    );
  }
  if (finalSum == 22) { //Special case = 22
    document.getElementById("yourNumber").innerHTML = finalSum;
  }
  if (finalSum == 33) { //Special case = 33
    document.getElementById("yourNumber").innerHTML = finalSum;
  }
}

//Process num to final sum
function getFinalValue(val) {
  const processValStr = Array.from(String(val));
  const processValNum = [];
  let sumVal = 0;

  for (i = 0; i < processValStr.length; i++) {
    let temp = parseInt(processValStr[i], 10);
    processValNum.push(temp);
    sumVal += temp;
  }
  return sumVal;
}

//22 33 <=11
