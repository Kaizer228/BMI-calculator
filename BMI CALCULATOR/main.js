function getValue() {
    const unit = document.getElementById('unit').value;
    const noneOp = document.getElementById('none').value;
    const MeterOp = document.getElementById('meter').value;
    const CentimeterOp = document.getElementById('centimeter').value;

    if (unit == MeterOp) {
        var Weight = document.getElementById("Weight").value;
        var Height = document.getElementById("Height").value;
        var BMI = Weight / (Height * Height);
        var Panel = document.getElementById("RESULT").value = BMI.toPrecision(3);

    } else if (unit == CentimeterOp) {
        var Weight = document.getElementById("Weight").value;
        var Height = document.getElementById("Height").value;
        var HeightInCM = Height / 100;
        var HeightInMeters = parseFloat(HeightInCM * HeightInCM);
        var BMI = Weight / HeightInMeters;
        var Panel = document.getElementById("RESULT").value = BMI.toPrecision(3);

    }
    else if (unit == noneOp){
        alert("Please Select Meters or Centimeters first");
    }

   

    if (Panel <= 18.5) {
        let limiter = "UNDER WEIGHT";
        var Ind = document.getElementById("INDICATOR").value = limiter;
    }

    if (Panel >= 18.6 && Panel <= 24.9) {
        let limiter = "NORMAL WEIGHT";
        var Ind = document.getElementById("INDICATOR").value = limiter;
    }

    if (Panel >= 25.0 && Panel <= 29.9) {
        let limiter = "OVER WEIGHT";
        var Ind = document.getElementById("INDICATOR").value = limiter;
    }

    if (Panel > 30) {
        let limiter = "OBESE";
        var Ind = document.getElementById("INDICATOR").value = limiter;
    }
}
