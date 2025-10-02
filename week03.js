function calcRectangleArea(aWidth, aHeight) {
    let area = aWidth * aHeight;
    return area;
}

function doCalc() {
    let newWidth = document.getElementById("width").value;
    let newHeight = document.getElementById("height").value;
    let newArea = calcRectangleArea(newWidth, newHeight);
    document.getElementById("areaCalc").innerHTML = "The area is: " + newArea;
}

function doPeri() {
    let newWidth = Number(document.getElementById("width").value);
    let newHeight = Number(document.getElementById("height").value);
    let newPeri = 2 * (newWidth + newHeight);
    document.getElementById("periCalc").innerHTML = "The perimeter is: " + newPeri;
}

function doAvg() {
    let numList = document.getElementById("num3").value;
    let numArray = numList.split(",").map(Number);
    let sum = numArray.reduce((acc, curr) => acc + curr, 0);
    let newAvg = sum / numArray.length;
    document.getElementById("avgCalc").innerHTML = "The average is: " + newAvg;
}

function calcBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height2 = Number(document.getElementById("height2").value);
    let bmi = weight / (height2 * height2);
    document.getElementById("bmiCalc").innerHTML = "The BMI value is: " + bmi;
}

function calcMin() {
    let minute = Number(document.getElementById("minute").value);
    let hour = Number(document.getElementById("hour").value);
    let totalMin = (hour * 60) + minute;
    document.getElementById("minCalc").innerHTML = "The total minutes is: " + totalMin;
}

function findMax() {
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);
    let maxNum = Math.max(num1, num2);
    document.getElementById("maxCalc").innerHTML = "The maximum number is: " + maxNum;
}
