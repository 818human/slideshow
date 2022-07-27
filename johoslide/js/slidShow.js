let count = 0;
const mainElement = document.querySelector("div.main>img");
const url = [
"https://kidfresino.com/wp-content/themes/kidfresino/img/prof2.jpg",
"https://pbs.twimg.com/profile_images/1313549773148835841/B1PY1IF5_400x400.jpg",
"https://archive.mensnonno.jp/news/wp-content/uploads/sites/2/2020/03/music-2004-2.jpg",
"https://myhatake.net/wp-content/uploads/2022/03/kaneko003.jpg",
"https://storage.spincoaster.com/media/2022/07/08051508/The-1975-official-photo-2022-MAIN_c_Samuel-Bradley.jpeg",
"https://www.jvcmusic.co.jp/img/artists/A020936.jpg?_c=5baaacbcfdbfcc20ae316207456e11a0",
"https://lastfm.freetls.fastly.net/i/u/770x0/9c4b5115ac81f0c65449f1d27d996569.jpg#9c4b5115ac81f0c65449f1d27d996569",
"https://rockinon.com/images/entry/width:750/162986/1",
"https://i.discogs.com/wRqWkYxhXDRE3aOozVSzXI58uquaOjncDMFBl4FFdMA/rs:fit/g:sm/q:90/h:414/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTY1MTYt/MTIyMzg0OTg2OC5q/cGVn.jpeg",
"https://m.media-amazon.com/images/I/61mMAybOqzL._AC_SL1000_.jpg"
];

function left() {
  // console.log(count);
  count--;
  if (count <= 0) {
    count = url.length-1;
  }
  mainElement.setAttribute('src', url[count]);
}
function right() {
  count++;
  if (count >= url.length) {
    count = 0;
  }
  mainElement.setAttribute('src', url[count]);
}

let timer;
let nowPlaying = false;

function autoPlay() {
  right();
  timer = setTimeout(function() {
    autoPlay();
  }, 200);
}

function play() {
  if (nowPlaying) {
    return;
  }
  nowPlaying = true;
  autoPlay();
}

function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}

function reset() {
  stop();
  mainElement.setAttribute('src', url[0]);
  count = 0;
}
