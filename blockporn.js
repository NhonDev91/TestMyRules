var PROXY_DIRECT = "DIRECT";
var BLACK = "PROXY 127.0.0.1:8021";

function d(h, r) {
    return dnsDomainIs(h, r);
} 

var pornUrl = [
  "fap18.net",
  "tnaflix.com",
  "redtube.com",
  "xfantazy.com",
  "tube188.com",
  "sparkbang.com",
  "video1tube.com",
  "tube2017.com",
  "tubesafari.com",
  "youjizz.com",
  "porzo.com",
  "anyxxx.me",
  "tiava.com",
  "tube3.com",
  "taxi69.com",
  "paradisehill.cc",
  "xmeat.com",
  "xozilla.com"
]

function FindProxyForURL(url, host) {
    var u = url.toLowerCase();
    var h = host.toLowerCase();
    
    if (h.includes("jav") && !h.includes("java")) return BLACK;
    if (h.includes("vlxx")) return BLACK;
    if (h.includes("sex")) return BLACK;
    if (h.includes("xvideos")) return BLACK;
    if (h.includes("xhamster")) return BLACK;
    if (h.includes("xnxx")) return BLACK;
    if (h.includes("porn")) return BLACK;
    if (h.includes("thiendia")) return BLACK;
    if (h.includes("thienvadia")) return BLACK;
    if (h.includes("lauxanh")) return BLACK;
    if (h.includes("thanhlau")) return BLACK;
    if (h.includes("checkerviet")) return BLACK;

    for (var uu of pornUrl) {
      if(d(h, uu)) return BLACK;
    }
    return PROXY_DIRECT;
}
