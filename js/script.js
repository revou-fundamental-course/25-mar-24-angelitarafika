document.getElementById("bmiForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Dapatkan nilai input
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var weight = parseFloat(document.getElementById("berat").value);
    var height = parseFloat(document.getElementById("tinggi").value);
    var age = parseFloat(document.getElementById("usia").value);

    // Konversi tinggi dari cm ke meter
    height = height / 100;

    // Hitung BMI
    var bmi = weight / (height * height);

    // Sesuaikan BMI berdasarkan usia
    if (age >= 18 && age <= 24) {
        bmi -= 0.5;
    } else if (age >= 25 && age <= 34) {
        bmi -= 1;
    } else if (age >= 35 && age <= 44) {
        bmi -= 1.5;
    } else if (age >= 45 && age <= 54) {
        bmi -= 2;
    } else if (age >= 55 && age <= 64) {
        bmi -= 2.5;
    } else if (age >= 65) {
        bmi -= 3;
    }

    // Interpretasi BMI
    var interpretation;
    if (bmi < 18.5) {
        interpretation = "Kurus";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        interpretation = "Berat badan normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        interpretation = "Kelebihan berat badan";
    } else {
        interpretation = "Obesitas";
    }

    // Rekomendasi tambahan berdasarkan BMI
    var recommendation;
    if (bmi < 18.5) {
        recommendation = "Anda mungkin perlu meningkatkan asupan kalori dan pertimbangkan latihan kekuatan untuk menambah berat badan.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        recommendation = "Pertahankan diet seimbang dan lakukan olahraga secara teratur untuk tetap sehat.";
    } else if (bmi >= 25 && bmi < 29.9) {
        recommendation = "Pertimbangkan untuk mengurangi asupan kalori dan meningkatkan aktivitas fisik untuk mengelola berat badan.";
    } else {
        recommendation = "Konsultasikan dengan profesional kesehatan untuk saran yang dipersonalisasi tentang pengelolaan berat badan.";
    }

    // Tampilkan hasil dengan rekomendasi dan gaya
    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<span style='font-weight: bold; font-size: 24px;'>BMI Anda </span>" + "<br/>" +
                          interpretation + "<br/>" +
                          "<span style='font-size: 30px; font-weight: bold;'>" + bmi.toFixed(2) + "</span>" + "<br/>" +
                          recommendation;

    
});
