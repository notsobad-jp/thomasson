$(function(){
  /*****************************************************************
  * Main Controller
  *****************************************************************/
  const SHEET_ID = '19KSE4Af90vf5VBYXrQPOgNR1t3CM6uNJw7Oa-UZNReY';

  Tabletop.init({
    key: SHEET_ID,
    prettyColumnNames: false,
    simpleSheet: true,
    orderby: 'tweetid',
    reverse: true,
    callback: function(data) {
      showCards(data);
    },
  });

  function showCards(data) {
    var html = '';
    $.each(data, function(index, tweet){
      if(!tweet.imageurl) { return; }

      html += `
        <div class="card">
          <a href="https://twitter.com/${tweet.userscreenname}/status/${tweet.tweetid}" style="background:#111;" class="image" target="_blank">
            <img style="max-width:100%;max-height:250px;width:auto;margin:auto;" src="${tweet.imageurl}">
          </a>
          <div class="content">
            <div class="meta">
              <img class="ui avatar image" src="${tweet.userprofileimage}">
              ${tweet.username}
            </div>
            <div class="description">
              ${tweet.text}
            </div>
          </div>
          <div class="extra content">
            <span class="right floated">
              <i class="icon wait"></i>
              ${tweet.postedat.substr(0,10)}
            </span>
          </div>
        </div>
      `;
    });

    $("#container").append(html);
    $('.dimmer').removeClass('active');
  }
});
