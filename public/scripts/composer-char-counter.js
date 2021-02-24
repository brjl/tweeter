$(document).ready(function () {
  $("#tweet-text").keyup(onKeyUp);
});

const onKeyUp = function (event) {
  const parent = $(this).parent();
  const output = parent.find("output");
  const button = parent.find("button");
  let charactersTyped = $(this).val().length;
  let charactersLeft = 140 - charactersTyped;
  console.log(button);

  //$(".counter").html(charactersLeft) //direct way to access
  output.html(charactersLeft);
  button.prop("disabled", false);

  if (charactersLeft < 0) {
    parent.find("output").addClass("counter-red");
    button.prop("disabled", true);
    button.fadeTo(0, 0.25);
  }

  if (charactersLeft >= 0) {
    output.removeClass("counter-red");
    button.fadeTo(0, 1);
  }
};
