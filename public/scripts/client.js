$(document).ready(function () {
  loadTweets();
  $(".form-inline").submit(function (event) {
    event.preventDefault();
    const button = $(this).find("button"); //useless I think
    //console.log(button);
    const data = $(this).serialize();
    const textInput = $("#tweet-text").val();
    if (!textInput) {
      return alert("Form cannot be blank!");
    } else if (textInput.length > 140) {
      return alert("Too many characters!");
    } else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data,
      }).then((result) => {
        loadTweets([0]); // is currently re-loading all tweets
        //$("#tweet-container").prepend(renderTweets(result));
      });
    }
  });
});

const createTweetElement = function (tweet) {
  const $tweet = $(`<article>
        <header>
          <div class="left-side">
            <img src="${escape(tweet.user.avatars)}">
            <p>${escape(tweet.user.name)}</p>
          </div>
            <p class="user-name">${escape(tweet.user.handle)}</p>
        </header>
        <div class="tweet-main">
            <p>${escape(tweet.content.text)}</p>
        </div>
        <footer>
            <p>${escape(tweet.created_at)}</p>
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

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
    renderTweets(tweets);
  });
};

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
