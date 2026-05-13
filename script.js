function calculateBMI() {
    const w = document.getElementById('weight').value;
    const h = document.getElementById('height').value;
    const score = document.getElementById('bmi-score');
    const text = document.getElementById('bmi-text');
    const res = document.getElementById('result-container');

    if (w > 0 && h > 0) {
        const bmi = (w / ((h/100) * (h/100))).toFixed(1);
        res.classList.remove('hidden');
        score.innerText = bmi;

        if (bmi < 18.5) { text.innerText = "Kekurangan Berat Badan"; score.style.color = "#ffeb3b"; }
        else if (bmi < 25) { text.innerText = "Normal (Ideal)"; score.style.color = "#4CAF50"; }
        else if (bmi < 30) { text.innerText = "Kelebihan Berat Badan"; score.style.color = "#ff9800"; }
        else { text.innerText = "Obesitas"; score.style.color = "#f44336"; }
    } else {
        alert("Harap isi angka dengan benar!");
    }
}