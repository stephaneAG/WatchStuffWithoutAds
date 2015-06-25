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
