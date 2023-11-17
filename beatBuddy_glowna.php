<!DOCTYPE html>
<html lang="pl">
<head>
	<meta charset = "UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Beat Buddy</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
<div class ="background">
  <div class ="srodek">
  <div class= "logo"> BeatBuddy </div>
  <div class ="opis1"> Wybierz ilość piosenek, którą chcesz żeby była na twojej playliście:</div>
   <p class="suwak1">20<input type="range" id ="suwak" name="slider" min="20" max="50" step="1" value="35">50<p>Wartość suwaka: <span id="sliderValue">50</span></p></p>
	<p class ="napis_do_suwaka">Ilość piosenek: <span id="sliderValue"></span></p>
</div>
  </div>
 


</body>
<script>
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
		
		</script>
</html>
