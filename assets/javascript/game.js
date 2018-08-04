$(document).ready(function() {

  var wins = 0;
  var loss = 0;
  var targetNum = null;
  var playerScore = null;

  var crystalImages = ["assets/images/crystal-1.jpeg", "assets/images/crystal-2.jpeg", "assets/images/crystal-3.jpeg", "assets/images/crystal-4.jpeg"];
  var crystalValues =[];
  var crystalIds = ["#crystal-1", "#crystal-2", "#crystal-3", "#crystal-4"]

  function initializeCrystalCollector(){
    playerScore = 0;
    targetNum = Math.floor(Math.random() * 120);
    $("#target-number").text(targetNum);
    $("#loss").text(loss);
    $("#wins").text(wins);
    $("#score").text(playerScore);
    
  }

  for (var i = 0; i < crystalImages.length; i++) {
    crystalValues[i] = Math.floor(Math.random() * 12);
    $(this).attr("data-crystalvalue");
    var imageCrystal = $("<img>");
    imageCrystal.addClass("crystal");
    imageCrystal.attr("src", crystalImages[i]);
    imageCrystal.attr("data-crystalvalue", crystalValues[i]);
    $(crystalIds[i]).append(imageCrystal);
  }





  $(".crystal").on("click", function(){
    var thisData = ($(this).attr("data-crystalvalue"));
    playerScore += parseInt(thisData);
    $("#score").text(playerScore);

    if (playerScore === targetNum) {
      wins++;
      $("#wins").text(wins);
      initializeCrystalCollector();
    }

    else if (playerScore >= targetNum) {
      loss++
      $("#loss").text(loss);
      initializeCrystalCollector();
    }


  })

  initializeCrystalCollector();

  console.log(targetNum);



});
