document.addEventListener('DOMContentLoaded', function() {
    var slider = document.getElementById('suwak');
    var sliderValue = document.getElementById('sliderValue');
  
    // Funkcja aktualizująca wartość nad suwakiem
    function updateSliderValue() {
      var value = slider.value;
      sliderValue.textContent = value;
    }
  
    // Dodanie obsługi zdarzenia dla przesuwania suwaka
    slider.addEventListener('input', function() {
      updateSliderValue();
    });
  
    // Inicjalne ustawienie wartości
    updateSliderValue();
  });