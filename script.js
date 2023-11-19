 const text_2 = document.getElementById('suwak');
        const output_2 = document.getElementById('suwak');
        text_2.addEventListener('input', function () {
            output_2.textContent = `Grubość Bordera : ${text_2.value}px`;
        });
		var slider = document.getElementById("suwak");
    var output = document.getElementById("sliderValue");

    // Zaktualizuj wartość przy każdej zmianie suwaka
    slider.addEventListener("input", function() {
      output.innerHTML = this.value;
       });