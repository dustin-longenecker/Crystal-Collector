$(document).ready(function() {
  //variable declaration
  var wins = 0;
  var loss = 0;
  var targetNum = null;
  var playerScore = null;
  //array declaration
  var crystalImages = ["assets/images/crystal-1.jpeg", "assets/images/crystal-2.jpeg", "assets/images/crystal-3.jpeg", "assets/images/crystal-4.jpeg"];
  var crystalValues =[];
  var crystalIds = ["#crystal-1", "#crystal-2", "#crystal-3", "#crystal-4"]
  //reset function
  function initializeCrystalCollector(){
    //reset playerScore and targetNum
    playerScore = 0;
    targetNum = Math.floor(Math.random() * 120);
    //append html changes
    $("#target-number").text(targetNum);
    setCrystals();
  }
  initializeCrystalCollector();

  //loop through crystalImages / crystalValues and
  //add to img / dataValue to html
function setCrystals() {
  for (var i = 0; i < crystalIds.length; i++) {
    $(crystalIds[i]).html("");
  }

  for (var i = 0; i < crystalImages.length; i++) {
    //create crystal values
    crystalValues[i] = Math.floor(Math.random() * 12);
    $(this).attr("data-crystalvalue");
    //create img html element
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal");
    imageCrystal.attr("src", crystalImages[i]);
    imageCrystal.attr("data-crystalvalue", crystalValues[i]);
    //append crystal element
    $(crystalIds[i]).append(imageCrystal);
    console.log(crystalValues);
  }
}
// initializeCrystalCollector();

  //on click crystal image
  $(document).on("click", '.crystal', function(){
    //add crystalValue to playerScore
    var thisData = ($(this).attr("data-crystalvalue"));
    console.log(thisData);
    playerScore += parseInt(thisData);
    //display score
    $("#score").text(playerScore);
    //if player wins
    if (playerScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      initializeCrystalCollector();
    }
    //if player loses
    else if (playerScore >= targetNum) {
      loss++;
      $("#loss").text(loss);
      initializeCrystalCollector();
    }
  })
  //initialize game
  console.log(targetNum);
});
