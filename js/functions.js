document.addEventListener('DOMContentLoaded', function () {
    // Etsitään div-elementti id:n perusteella
    var diceDiv = document.getElementById('dice');
  
    // Lisätään click-kuuntelija div-elementille
    diceDiv.addEventListener('click', function () {
      // Arvotaan satunnaisluku väliltä 1-6
      var randomNumber = Math.floor(Math.random() * 6) + 1;
  
      // Luodaan uusi img-elementti
      var newImage = document.createElement('img');
  
      // Asetetaan src-ominaisuus käyttäen arvottua lukua
      newImage.src = './img/' + randomNumber + '.png';
  
      // Haetaan ensimmäinen lapsielementti (nykyinen kuva) ja poistetaan se
      var currentImage = diceDiv.querySelector('img');
      if (currentImage) {
        diceDiv.removeChild(currentImage);
      }
  
      // Lisätään uusi img-elementti diviin
      diceDiv.appendChild(newImage);
    });
});