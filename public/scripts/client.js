
$(document).ready(function () {
  /* LOAD DB TWEETS */
  loadTweets();

  /* FORM SUBMIT */

  $(".form-inline").submit(function (event) {
    event.preventDefault();
    const data = $(this).serialize();
    const textInput = $("#tweet-text").val();
    const parent = $(this).parent();
    const errorLong = parent.find("#error-long");
    const errorShort = parent.find("#error-short");

    if (!textInput) {
      $(errorShort).show(400);
    }
    if (textInput.length > 140) {
      $(errorLong).show(400);
    }
    if (textInput && textInput.length <= 140) {
      $(errorLong).hide(400);
      $(errorShort).hide(400);

      $.ajax({
        url: "/tweets",
        method: "POST",
        data,
      }).then((result) => {
        loadTweets();
      });
    }
  });
});

/* TWEET TEMPLATE */

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
            <p>${escape(tweet.content.text)}</p>
        </div>
        <footer>
            <p>${moment(tweet.created_at).fromNow()}</p>
            <p class="icons">&#x2691; &#8634; &#x2665;</p>
        </footer>
    </article>`);
  return $tweet;
};

/* LOOPS THROUGH AJAX TWEETS & ADDS TO TEMPLATE */

const renderTweets = function (tweets) {
  $("#tweet-container").empty();
  for (const tweet of tweets) {
    $("#tweet-container").prepend(createTweetElement(tweet));
  }
};

/* AJAX REQ FOR TWEETS */

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
    renderTweets(tweets);
  });
};

/* XSS ESCAPE */

const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};