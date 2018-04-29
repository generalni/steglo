var head = '<div class="container">\
              <div class="logo">\
                <a href="/index.html">\
                  <span>Steglo</span>\
                  <span class="text-highlight">bogami</span>\
                </a>\
              </div>\
            </div>'

var right_side = '<!-- YOUTUBE -->\
					\
          <div class="box">\
            <a href="https://www.youtube.com/channel/UCsORJh7ogpaDdOSJgCVpEZQ">\
              <h2>Pogledajte moj Youtube kanal</h2>\
              <span>Slika govori više od 1000 reči. Video govori 25 slika u sekundi.</span>\
            </a>\
          </div>\
					\
          <!-- OLD POSTS -->\
					\
          <div class="box">\
            <h2>Stari tekstovi</h2>\
            <hr>\
            <a href="/articles/uknjizba-katastar/uknjizba-katastar.html">\
              <span>Uknjižba stana u katastru Savski venac</span>\
            </a>\
            <hr>\
            <a href="/articles/otvaranje-vrata-mobilnim/otvaranje-vrata-mobilnim.html">\
              <span>Otvaranje električne brave mobilnim telefonom</span>\
            </a>\
            <hr>\
            <a href="/articles/kako-popraviti-toster/kako-popraviti-toster.html">\
              <span>Popravka tostera, zamena termostata</span>\
            </a>\
          </div>'

  var foot = '<div class="container">\
                <span>\
                  Copyright 2018 | WWW.STEGLO.COM\
                  <a href="mailto:iooiiio@yahoo.com?Subject=Sa sajta">email: iooiiio@yahoo.com</a>\
                </span>\
              </div>'

function render() {
  $("header").html(head);
	$("aside").html(right_side);
  $("footer").html(foot);
}