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
    //output.css({ color: "red" });
    output.addClass("counter-red"); //not working, but what I need to use
    button.prop("disabled", true);
    button.fadeTo(0, 0.25);
  }

  if (charactersLeft > 0) {
    //output.css({ color: #545149 });
    output.removeClass("counter-red"); //not working, but what I need to use
    button.fadeTo(0, 1);
  }
};
