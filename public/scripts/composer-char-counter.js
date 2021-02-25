$(document).ready(function () {
  $("#tweet-text").keyup(onKeyUp);
});

/* TWEET CHARACTER COUNTER */

const onKeyUp = function (event) {
  const parent = $(this).parent();
  const output = parent.find("output");
  const button = parent.find("button");
  let charactersTyped = $(this).val().length;
  let charactersLeft = 140 - charactersTyped;

  output.html(charactersLeft);

  if (charactersLeft < 0) {
    parent.find("output").addClass("counter-red");
  }

  if (charactersLeft >= 0) {
    output.removeClass("counter-red");
  }
};
