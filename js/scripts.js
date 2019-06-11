$(document).ready(function() {

  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "person2", "animal", "exclamation", "verb", "noun"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      console.log(userInput);
      $("." + blank).text(userInput).val();
    });

    $("#story").show();

    event.preventDefault();


  });
});

/*$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val()
    var person2Input = $("input#person2").val()
    var animalInput= $("input#animal").val()
    var exclamationInput = $("input#exclamation").val()
    var verbInput = $("input#verb").val()
    var nounInput = $("input#noun").val()

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);

    $("#story").show();

    event.preventDefault();
  });
});*/

$(document).ready(function() {
  $("button#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background");
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
});
