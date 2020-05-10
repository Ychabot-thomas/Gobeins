$(document).ready(function() {
  document.getElementById("transition").addEventListener("ended", function() {
    document.getElementById("transition").style.display = "none";
  });

  // ANIMATION N°3
  document.getElementById("animthree").addEventListener("click", function() {
    document.getElementById("videoanimthree").style.display = "block";
    document.getElementById("videoanimthree").load();
    // document.getElementById("videoanimthree").onplay();
  });

  document
    .getElementById("videoanimthree")
    .addEventListener("ended", function() {
      document.getElementById("videoanimthree").style.display = "none";
    });

  // ANIMATION N°2
  document.getElementById("animtwo").addEventListener("click", function() {
    document.getElementById("videoanimtwo").style.display = "block";
    document.getElementById("videoanimtwo").load();
    // document.getElementById("videoanimtwo").onplay();
  });
  document.getElementById("videoanimtwo").addEventListener("ended", function() {
    document.getElementById("videoanimtwo").style.display = "none";
  });

  // ANIMATION N°1
  document.getElementById("animone").addEventListener("click", function() {
    document.getElementById("videoanimone").style.display = "block";
    document.getElementById("videoanimone").load();
    // document.getElementById("videoanimone").onplay();
  });
  document.getElementById("videoanimone").addEventListener("ended", function() {
    document.getElementById("videoanimone").style.display = "none";
    document.getElementById("imgfonddebut").style.display = "none";
    document.getElementById("imgfondfin").style.display = "block";
  });
});
