$(document).ready(function () {
  loadTweets()
});

const createTweetElement = function (tweet) {
  let $tweet = $(`<article>
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
    $("#tweet-container").append(createTweetElement(tweet));
  }
};

$("form-inline").submit(function (event) {
  event.preventDefault();
  const data = $("form-inline").serialize();
  $.ajax({
    url: "/tweets",
    method: "POST",
    data,
  }).then((result) => {
    $.ajax({
      url: "/tweets",
      method: "GET",
    }).then((result) => {
      renderTweets(result);
    });
  });
});

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
    //console.log("Success: ", renderTweets(tweets));
    renderTweets(tweets);
  });
};

