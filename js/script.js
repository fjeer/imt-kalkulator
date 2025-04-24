const genderCards = document.querySelectorAll(".gender-card");
genderCards.forEach((card) => {
	card.addEventListener("click", () => {
		genderCards.forEach((c) => c.classList.remove("active"));
		card.classList.add("active");
		document.getElementById("gender").value = card.dataset.gender;
	});
});

document.getElementById("bmiForm").addEventListener("submit", function (e) {
	e.preventDefault();
	const berat = parseFloat(document.getElementById("berat").value);
	const tinggi = parseFloat(document.getElementById("tinggi").value) / 100;
	const gender = document.getElementById("gender").value;

	if (!gender) {
		alert("Silakan pilih jenis kelamin terlebih dahulu.");
		return;
	}

	if (berat > 0 && tinggi > 0) {
		const bmi = (berat / (tinggi * tinggi)).toFixed(1);
		let kategori = "";

		if (bmi < 18.5) {
			kategori = "Kurus";
		} else if (bmi < 24.9) {
			kategori = "Normal";
		} else if (bmi < 29.9) {
			kategori = "Gemuk";
		} else {
			kategori = "Obesitas";
		}

		document.getElementById("nilaiBMI").innerText = `${bmi}`;
		document.getElementById("kategoriBMI").innerText = `Kategori: ${kategori}`;
		document.getElementById("hasil").style.display = "block";
	}
});
