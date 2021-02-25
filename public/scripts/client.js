$(document).ready(function () {
  loadTweets();

  $(".form-inline").click(function (event) {
    event.preventDefault();

    const data = $(this).serialize();
    const textInput = $("#tweet-text").val();
    console.log(textInput);

    if (textInput === '') {
      return alert("Form cannot be blank!");
    }
    else if (textInput.length > 140) {
      return alert("Too many characters!");
    }
    else{

    $.ajax({
      url: "/tweets",
      method: "POST",
      data,
    }).then((result) => {
      $("#tweet-container").prepend(renderTweets(result));
    });
  }
  });

});

const createTweetElement = function (tweet) {
  const $tweet = $(`<article>
        <header>
          <div class="left-side">
            <img src="${tweet.user.avatars}">
            <p>${tweet.user.name}</p>
          </div>
            <p class="user-name">${tweet.user.handle}</p>
        </header>
        <div class="tweet-main">
            <p>${tweet.content.text}</p>
        </div>
        <footer>
            <p>${tweet.created_at}</p>
            <p>icons go here</p>
        </footer>
    </article>`);
  return $tweet;
};

const renderTweets = function (tweets) {
  for (const tweet of tweets) {
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
};

// $(".form-inline").click(function (event) {
//   event.preventDefault();

//   const data = $(".form-inline").serialize();
//   // const textInput = $("#tweet-text").val();
//   // console.log(textInput);
//   // if (textInput === null) {
//   //   alert("Form cannot be blank!");
//   // }
//   // if (textInput.length > 140) {
//   //   alert("Too many characters!");
//   // }

//   $.ajax({
//     url: "/tweets",
//     method: "POST",
//     data,
//   }).then((result) => {
//     $("#tweet-container").prepend(renderTweets(result));
//   });
//   console.log("Hi");
// });

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
    renderTweets(tweets);
  });
};
