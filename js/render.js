var head = '<div class="container">\
              <div class="logo">\
                <a href="/index.html">\
                  <span>KAKO \
                  <span class="text-highlight">POPRAVITI</span></span>\
                </a>\
              </div>\
              <div class="youtube">\
                <a href="https://www.youtube.com/channel/UCsORJh7ogpaDdOSJgCVpEZQ">\
                  <img src="../../img/youtube.png">\
                </a>\
              </div>\
            </div>'

  var foot = '<div class="container">\
                <span>\
                  Copyright 2018\
                  <a href="mailto:stojanovic@mts.rs?Subject=Sa sajta">stojanovic@mts.rs</a>\
                </span>\
              </div>'

function render() {
  $("header").html(head);
  $("footer").html(foot);
}