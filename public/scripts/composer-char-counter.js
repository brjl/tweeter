$(document).ready(function () {
  // --- our code goes here ---
  $("#tweet-text").keyup(onKeyUp);
});

const onKeyUp = function (event) {
  //console.log(event.target)
  const parent = $(this).parent();
  //console.log(parent)
  const output = parent.find("output");
  const button = parent.find("button");
  let charactersTyped = $(this).val().length;
  let charactersLeft = 140 - charactersTyped;
  console.log(button);

  //$(".counter").html(charactersLeft)
  output.html(charactersLeft);
  button.prop("disabled", false);

  if (charactersLeft < 0) {
    //disable tweet button and turn charcount red

    output.css({ color: "red" });
    //button.disabled = true;
    button.prop("disabled", true);
    button.fadeTo(0, 0.25);
  }

  if (charactersLeft > 0) {
    button.fadeTo(0, 1);
  }
};
