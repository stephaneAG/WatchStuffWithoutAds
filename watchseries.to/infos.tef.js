/* R: activate the "CORS" extension for chrome || write an extension to be able to CORS stuff .. */

// replace the ( empty ? ) innerHTML of the current page by the content from the CORS request
var req = new XMLHttpRequest();
req.open('GET', 'http://watch-series-tv.to/serie/helix', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        document.write(req.responseText);
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

// or

var req = new XMLHttpRequest();
req.open('GET', 'http://watch-series-tv.to/serie/helix', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        iDiv.innerHTML = req.responseText;
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

// get the last part of the url when using CORS
episodesUrl[0].split("/")[ episodesUrl[0].split("/").length-1 ]
// prefixed: 
console.log( 'http://watch-series-tv.to/episode/' + episodesUrl[0].split("/")[ episodesUrl[0].split("/").length-1 ] )
// clean ( for a link text for example )
console.log( episodesUrl[0].split("/")[ episodesUrl[0].split("/").length-1 ].split('.')[0].split("_").join(" ").toUpperCase() )

// using a div instead of the whole document to do stuff ..
for( var episodeUrl in episodesUrl ){ console.log( episodesUrl[episodeUrl] ); episodesDiv.innerHTML += '<li><a href="' + episodesUrl[episodeUrl] + '"> ' + episodesUrl[episodeUrl] + '</a></li>'; };
// clean & prefixed:
for( var episodeUrl in episodesUrl ){ console.log( episodesUrl[episodeUrl] ); episodesDiv.innerHTML += '<li><a href="' + 'http://watch-series-tv.to/episode/' + episodesUrl[episodeUrl].split("/")[ episodesUrl[episodeUrl].split("/").length-1 ] + '"> ' + episodesUrl[episodeUrl].split("/")[ episodesUrl[episodeUrl].split("/").length-1 ].split('.')[0].split("_").join(" ").toUpperCase() + '</a></li>'; };

// add the for loop that uses "iDiv" as a container for each watchtv.to page holding gorillavids links
// ex using a hardcoded link url
var req = new XMLHttpRequest();
req.open('GET', 'http://watch-series-tv.to/episode/helix_s2_e13.html', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        iDiv.innerHTML = req.responseText;
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

// get the link out of it ( it's the "referrer" url in one of the hidden input of the form )
var gorillaLink = 'http://watch-series-tv.to/open/cale/' + iDiv.querySelector('tr[class="download_link_gorillavid.in "]').querySelector('a[title="gorillavid.in"]').href.split("/")[ iDiv.querySelector('tr[class="download_link_gorillavid.in "]').querySelector('a[title="gorillavid.in"]').href.split("/").length-1 ];

// use iDIv again to visit the above url
var req = new XMLHttpRequest();
req.open('GET', gorillaLink, true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        iDiv.innerHTML = req.responseText;
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

// get the ACTUAL gorilla Url out of it
var gorillaUrl = iDiv.querySelector("a.push_button").href

// use iDIv again to visit the above url ## WIP -> needs a few mods to go through the ads bull**it
var req = new XMLHttpRequest();
req.open('GET', gorillaUrl, true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        iDiv.innerHTML = req.responseText;
        // re-enable the button
        document.querySelector("#btn_download").disabled= false;
        // and correct it's look ? ( yup, it's still gonna be called programmatically, but why not ? ;p )
        document.querySelector("#btn_download_span").className = "btn-big"
        // override the fcn that countdown & ajax the video ( nb: jquery is NOT loaded, but just in case ;p )
        function countDown()
        {
            $$('btn_download_span').className = 'btn-big';
            $$('btn_download').disabled = false;
            $$('btn_download').value = 'Continue';
            $$('btn_download').click(); // click the link that ajaxes the video
        }
        // remove the ads overlaying the video ( without, video is playable but no gui controls )
        document.getElementById("wrad_container").remove();
        // start playing the flash video ( the "jwplayer" global ref is available thx to gorillavidz team ;p )
        jwplayer.api.selectPlayer().play()
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

/*  wip */

// quickly create & use iDIv again to visit the above url
var req = new XMLHttpRequest();
req.open('GET', 'http://gorillavid.in/t9wgl3cvqmo0', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        var iDiv = document.createElement('div');
        iDiv.id = "tefdiv";
        document.documentElement.appendChild( iDiv );
        iDiv.innerHTML = req.responseText;
        // re-enable the button
        document.querySelector("#btn_download").disabled= false;
        // and correct it's look ? ( yup, it's still gonna be called programmatically, but why not ? ;p )
        document.querySelector("#btn_download_span").className = "btn-big"
        document.querySelector("#btn_download").value = "Continue"
        // fix referrer value in one of the form inputs
        // its value should look like "http://watch-series-tv.to/open/cale/57001231.html" ( current file L65 )
        //document.querySelector('input[name="referer"]') = gorillaLink;
        document.querySelector('input[name="referer"]').value = "http://watch-series-tv.to/open/cale/57001231.html"
        // to get just it's id
        //var gorillaLinkId = gorillaLink.split('/')[ gorillaLink.split('/').length-1 ].split('.')[0];
        // also, check if we can rebuild the full video url using the "fname" input value ( & corresp. in flv )
        // override the fcn that countdown & ajax the video
        /*
        function countDown()
        {
            $$('btn_download_span').className = 'btn-big';
            $$('btn_download').disabled = false;
            $$('btn_download').value = 'Continue';
            $$('btn_download').click(); // click the link that ajaxes the video
        }
        */
        // TODO: add code for "POST" stuff to the gorillavids url ( with "id" from form ) & get stuff in return !
        // first, I'll dumbly try to just specify it's "action" param's value to the ""
        document.querySelectorAll('form')[1].action = "http://gorillavid.in/t9wgl3cvqmo0"
        // the following redirects us to the video page ;) ( nb: no ajax for the moment, so no ads removal yet )
        //document.querySelector("#btn_download").click();
        // get a ref to the form
        var theForm = document.querySelectorAll('form')[1];
        // get its data
        var data = new FormData(theForm);
        // new xhr
        var req2 = new XMLHttpRequest();
        req2.open('POST', 'http://gorillavid.in/t9wgl3cvqmo0', true);
        req2.onreadystatechange = function (aEvt) {
          if (req2.readyState == 4) {
             if(req2.status == 200){
                //document.write(req.responseText);
                document.write = req2.responseText;
                console.log("chargement ok\n");
                console.log("----------------------- Content -------------------- \n\n" + req2.responseText );
                // remove the ads overlaying the video ( without, video is playable but no gui controls )
                document.getElementById("wrad_container").remove();
                 
             }
              else
              console.log("Erreur pendant le chargement de la page.\n");
          }
        };
        req2.send( data );
        /*
        // remove the ads overlaying the video ( without, video is playable but no gui controls )
        document.getElementById("wrad_container").remove();
        // start playing the flash video ( the "jwplayer" global ref is available thx to gorillavidz team ;p )
        jwplayer.api.selectPlayer().play()
        */
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

// quickie just in case it's needed for the form to not go wrong :|
var tefdiv = document.querySelector('#tefdiv'); document.documentElement.innerHTML = tefdiv.innerHTML;

// R: in case I can't find it any other way /!\
// after doing the following, digging the js code on the original page reveals .. the right .mp4 link :D
// so YES, we can even view it or dl it without a flash player if the video is not flv ( & thus iOS-compatible )
/*} 
else {
	jwplayer("flvplayer").setup({
*/
// quickly create & use iDIv again to visit the above url
var req = new XMLHttpRequest();
req.open('GET', 'http://gorillavid.in/t9wgl3cvqmo0', true);
req.onreadystatechange = function (aEvt) {
  if (req.readyState == 4) {
     if(req.status == 200){
        //document.write(req.responseText);
        var iDiv = document.createElement('div');
        iDiv.id = "tefdiv";
        document.documentElement.appendChild( iDiv );
        iDiv.innerHTML = req.responseText;
        // re-enable the button
        document.querySelector("#btn_download").disabled= false;
        // and correct it's look ? ( yup, it's still gonna be called programmatically, but why not ? ;p )
        document.querySelector("#btn_download_span").className = "btn-big"
        document.querySelector("#btn_download").value = "Continue"
        // fix referrer value in one of the form inputs
        // its value should look like "http://watch-series-tv.to/open/cale/57001231.html" ( current file L65 )
        //document.querySelector('input[name="referer"]') = gorillaLink;
        document.querySelector('input[name="referer"]').value = "http://watch-series-tv.to/open/cale/57001231.html"
        // to get just it's id
        //var gorillaLinkId = gorillaLink.split('/')[ gorillaLink.split('/').length-1 ].split('.')[0];
        // also, check if we can rebuild the full video url using the "fname" input value ( & corresp. in flv )
        // override the fcn that countdown & ajax the video
        /*
        function countDown()
        {
            $$('btn_download_span').className = 'btn-big';
            $$('btn_download').disabled = false;
            $$('btn_download').value = 'Continue';
            $$('btn_download').click(); // click the link that ajaxes the video
        }
        */
        // TODO: add code for "POST" stuff to the gorillavids url ( with "id" from form ) & get stuff in return !
        // first, I'll dumbly try to just specify it's "action" param's value to the ""
        document.querySelectorAll('form')[1].action = "http://gorillavid.in/t9wgl3cvqmo0"
        // the following redirects us to the video page ;) ( nb: no ajax for the moment, so no ads removal yet )
        //document.querySelector("#btn_download").click();
        // get a ref to the form
        var theForm = document.querySelectorAll('form')[1];
        // get its data
        var data = new FormData(theForm);
        // new xhr
        var req2 = new XMLHttpRequest();
        req2.open('POST', 'http://gorillavid.in/t9wgl3cvqmo0', true);
        req2.onreadystatechange = function (aEvt) {
          if (req2.readyState == 4) {
             if(req2.status == 200){
                //document.write(req.responseText);
                document.write = req2.responseText;
                console.log("chargement ok\n");
                console.log("----------------------- Content -------------------- \n\n" + req2.responseText );
                // DEBUG: trying to access that "jwplayer.setup" code I'm interested in ..
                //window.GorillaJsonResponse = JSON.parse(req2.responseText);
                window.GorillaResponse = req2.response;
                window.GorillaResponseText = req2.responseText;
                //var myRegexp = /jwplayer\("flvplayer"\).setup\({(.*)wmode:"opaque",/;
                //var match = myRegexp.exec(req2.responseText);
                //console.log("match! : "+ match[1]);
                /*
                var phrase = "yesthisismyphrase=thisiswhatIwantmatchedEOF"; 
                var myRegexp = /phrase=(.*)EOF/;
                var match = myRegexp.exec(phrase);
                alert(match[1]);
                */
                // remove the ads overlaying the video ( without, video is playable but no gui controls )
                //document.getElementById("wrad_container").remove();
                 
             }
              else
              console.log("Erreur pendant le chargement de la page.\n");
          }
        };
        req2.send( data );
        /*
        // remove the ads overlaying the video ( without, video is playable but no gui controls )
        document.getElementById("wrad_container").remove();
        // start playing the flash video ( the "jwplayer" global ref is available thx to gorillavidz team ;p )
        jwplayer.api.selectPlayer().play()
        */
        console.log("chargement ok\n");
      }
      else
      console.log("Erreur pendant le chargement de la page.\n");
  }
};
req.send(null);

/* did someone say "hacky" ? ^^ */
// the following gets all the <script> tags present in the xhr response
var myRegexp = /<script\b[^>]*>([\s\S]*?)<\/script>/gm;
                //var match = myRegexp.exec( GorillaResponse );
                //console.log("match! : "+ match[1]);
i = 0;
while (match = myRegexp.exec(GorillaResponse)) {
  ++i;
  // full match is in match[0], whereas captured groups are in ...[1], ...[2], etc.
  console.log('%c'+ i, 'background: red; color: #bada55');
  console.log(match[1]);
  if( i == 23 ){ window.scriptHasStuff = match[1]; } // the 23th contains interesting stuff ..
}
// ok, that's a 2-step for now, but I guess we could easily use this one without the above
// R: the "[\s\S]*?" acts like "\W*" in perl regexp
var myRegexp = /.*jwplayer\(\"flvplayer\"\)\.setup\({[\s\S]*?(.*)[\s\S]*?}[\s\S]*?wmode.*/gm;
var match = myRegexp.exec( scriptHasStuff );
console.log("match! : "+ match[1]);
// getting the image and the video url :P
var myRegexp = /.*(jwplayer\(\"flvplayer\"\)\.setup\({)([\s\S]*?})([\s\S]*?wmode).*/gm;
var match = myRegexp.exec( scriptHasStuff );
console.log("match! : \n" + '{\n' + match[2] + '\n}\n}' );
//jsonHasStuff = JSON.parse('{' + match[2] + '} }');
jsonHasStuff = '{' + match[2] + '} }'; // R: NOT an actual json :/
var videoUrl = jsonHasStuff.split(':')[8].replace("'", '').replace(' ', '') + ':' + jsonHasStuff.split(':')[9] + ':' + jsonHasStuff.split(':')[10].split(',')[0].replace("'", '');
var imageUrl = jsonHasStuff.split(':')[6].replace("'", '') + ':' + jsonHasStuff.split(':')[7].split(',')[0].replace("'", '');                  

// and "just a quickie" for the current finish
var theVideo = document.createElement('video');
theVideo.src = videoUrl;
theVideo.poster = imageUrl;
theVideo.width = 640;
theVideo.height = 480;
theVideo.controls = true;
theVideo.style.top = window.outerHeight/2-240+'px';
theVideo.style.left = window.innerWidth/2-320+'px';
document.documentElement.appendChild(theVideo); // ---------------->> HACKED ! ^^
console.log('%c GorillaVid ? \\-------->> HACKED !! ^^ ', 'background: #222; color: #bada55'); // hihi ;)

// NOW: where's the will to contine, & encapsulates all that + the CORS stuff ( aka browser plugin/extension ? )

/* ********************************************************** */

// example 1
// 1: serie page
http://watch-series-tv.to/serie/helix
// we can get all episodes hrefs using the following
var i = undefined; for( var episode in episodes = document.querySelectorAll('li[itemprop="episode"]')){ var i = i+1 || 0; console.log( i + "__" + episodes.item(episode).querySelector("a").href ); }
// to get all their href in an array & discard the doublon
var episodesUrl = new Array(); for( var episode in episodes = document.querySelectorAll('li[itemprop="episode"]')){ episodesUrl.push( episodes.item(episode).querySelector("a").href ) }; episodesUrl.pop()


// 2: serie episode page
http://watch-series-tv.to/episode/helix_s1_e1.html
// to get all the gorilla links for a particular episode
for( var gorillaLink in gorillaLinks = document.querySelectorAll('tr[class="download_link_gorillavid.in "]')){ console.log( gorillaLinks.item(gorillaLink).querySelector('a[title="gorillavid.in"]').href ); }

// 3: 1st gorillavidz link page
http://watch-series-tv.to/open/cale/56780376.html
// in other words, the first one from the list of previous page
var gorillaLink = document.querySelector('tr[class="download_link_gorillavid.in "]').querySelector('a[title="gorillavid.in"]').href


// 4: actual link on page
document.querySelector("a.push_button").href
// so ?
//document.querySelector("a.push_button").click()
// find stg for the wait .. like overriding their own fcn ? ^^
function countDown()
{
    $$('btn_download_span').className = 'btn-big';
    $$('btn_download').disabled = false;
    $$('btn_download').value = 'Continue';
    $$('btn_download').click();
}


//document.getElementById("btn_download").click()
// final page -> remove the ads overlaying the flv player - nb: without, video is playable but no gui controls
document.getElementById("wrad_container").remove();
// play the video ( the same command 'll pause it if it's already running ) 
jwplayer.api.selectPlayer().play() // or jwplayer.api.selectPlayer().pause()
// a "stop()" call is also available, as well as many others (seek(), ..  )
jwplayer.api.selectPlayer().stop()
//document.getElementById("flvplayer_wrapper").childNodes[0] -> returned by "jwplayer.api.selectPlayer()"
