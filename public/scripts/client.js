/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  $("#tweet-container").append($tweet);
});

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text:
        "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

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
  let $tweet = [];
  for (const tweet of tweets) {
    console.log(createTweetElement(tweet));
    $tweet.push($(createTweetElement(tweet)));
  }
  return $tweet;
};

const $tweet = renderTweets(data);
