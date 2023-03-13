function calculateBMI() {
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight)) {
        document.getElementById("result").innerHTML = "Vui lòng nhập đúng định dạng số!";
        return;
    }

    var bmi = weight / Math.pow(height, 2);
    var bmiClass = "";

    if (bmi < 18.5) {
        bmiClass = "Gầy";
    } else if (bmi < 25) {
        bmiClass = "Bình thường";
    } else if (bmi < 30) {
        bmiClass = "Hơi béo";
    } else {
        bmiClass = "Béo phì";
    }

    document.getElementById("result").innerHTML = "Chỉ số BMI của bạn là " + bmi.toFixed(2) + " - " + bmiClass;
}
