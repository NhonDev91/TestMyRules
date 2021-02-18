var PROXY_DIRECT = "DIRECT";
var DIRECT = "DIRECT";
var BLACK = "PROXY 127.0.0.1:8021";
var WHITE = PROXY_DIRECT;

function s(u, r) {
    return shExpMatch(u, r);
}

function d(h, r) {
    return dnsDomainIs(h, r);
}

function n(h, r, m) {
    return isInNet(h, r, m);
}

function e(u) {
    var h;
    if (u.indexOf("://") > -1) {
        h = u.split('/')[2];
    } else {
        h = u.split('/')[0];
    }
    h = h.split(':')[0];
    var s = h.split('.').reverse();
    return s;
}

function FindProxyForURL(url, host) {
    var u = url.toLowerCase();
    var h = host.toLowerCase();
    var a = e(u);
    var b = a[0];
    var c = a[1];
    var f = c.length;
    var t = c[f - 1];
    var z = c[f - 2];
    if (d(h, "dtG7A1.configtest.wl.is")) {
        return "PROXY 5.9.40.99:80";
    }
    if (d(h, "wl.is") || d(h, "weblockapp.com") || n(h, "17.0.0.0", "255.0.0.0")) {
        return PROXY_DIRECT;
    }
    if (b == "com") {
        if (t == "3") {
            if (d(h, "admtpmp123.com") || d(h, "wafmedia3.com")) return BLACK;
        }
        if (t == "2") {
            if (d(h, "aimg.fc2.com") || d(h, "adshost2.com") || d(h, "affiliate.fc2.com")) return BLACK;
        }
        if (t == "4") {
            if (d(h, "admtpmp124.com") || d(h, "clk1004.com")) return BLACK;
        }
        if (t == "a") {
            if (z == "i") {
                if (d(h, "wigetmedia.com") || d(h, "engine.a.redditmedia.com") || d(h, "conversantmedia.com") || d(h, "lfstmedia.com") || d(h, "xtendmedia.com") || d(h, "vdopia.com") || d(h, "amazemobilemedia.com") || d(h, "tremormedia.com") || d(h, "cdn.millennialmedia.com") || d(h, "andomedia.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "kochava.com") || d(h, "mojiva.com") || d(h, "adelva.com")) return BLACK;
            } else if (d(h, "atemda.com") || d(h, "adtoma.com") || d(h, "bnmla.com") || d(h, "atwola.com") || d(h, "komoona.com") || d(h, "eclkmpsa.com") || d(h, "transpera.com") || d(h, "atedra.com") || d(h, "admeta.com") || d(h, "plista.com") || d(h, "de17a.com") || d(h, "videoplaza.com")) return BLACK;
        }
        if (t == "c") {
            if (z == "i") {
                if (d(h, "cxpublic.com") || d(h, "adsymptotic.com") || d(h, "pubmatic.com")) return BLACK;
            } else if (d(h, "contentabc.com") || d(h, "adztec.com")) return BLACK;
        }
        if (t == "b") {
            if (z == "a") {
                if (d(h, "crosspromo.zeptolab.com") || d(h, "bms.zeptolab.com") || d(h, "asp.animelab.com")) return BLACK;
            } else if (z == "e") {
                if (d(h, "ucweb.com") || d(h, "ox\u002Dd.advanceweb.com") || d(h, "sa.entireweb.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "admob.com") || d(h, "hot\u002Dmob.com") || d(h, "revmob.com")) return BLACK;
            } else if (d(h, "m2pub.com") || d(h, "tremorhub.com")) return BLACK;
        }
        if (t == "e") {
            if (z == "c") {
                if (d(h, "adnetworkperformance.com") || d(h, "widespace.com") || d(h, "startappservice.com") || d(h, "delivery.trafficforce.com") || d(h, "valuecommerce.com")) return BLACK;
            } else if (z == "g") {
                if (d(h, "bounceexchange.com") || s(u, "*admax*") && d(h, "nexage.com") || d(h, "startappexchange.com") || d(h, "tradeadexchange.com")) return BLACK;
            } else if (z == "n") {
                if (d(h, "admngronline.com") || d(h, "algovid.com") && s(u, "*watchcartoononline*") || d(h, "madsone.com")) return BLACK;
            } else if (z == "s") {
                if (d(h, "trafficposse.com") || d(h, "adinfuse.com") || d(h, "mobilefuse.com") || d(h, "adhese.com") || d(h, "postrelease.com") || d(h, "cxense.com") || d(h, "uauniverse.com") || d(h, "openxenterprise.com") || d(h, "clickfuse.com")) return BLACK;
            } else if (z == "v") {
                if (d(h, "redirectnative.com") || d(h, "swrve.com") || d(h, "pushnative.com") || d(h, "inner\u002Dactive.com") || d(h, "advertserve.com") || d(h, "adsnative.com")) return BLACK;
            } else if (d(h, "delivery.brokerbabe.com") || d(h, "adotube.com") || d(h, "amobee.com") || d(h, "adblade.com") || d(h, "ad4game.com") || d(h, "lockerdome.com") || d(h, "vungle.com") || d(h, "greystripe.com") || d(h, "omniture.com") || d(h, "awempire.com") || d(h, "pubdirecte.com")) return BLACK;
        }
        if (t == "d") {
            if (z == "a") {
                if (d(h, "opt.ximad.com") || d(h, "restartad.com") || d(h, "brucelead.com") || d(h, "bead\u002Dad.com") || d(h, "sbs\u002Dad.com") || d(h, "mediamixad.com") || d(h, "dotandad.com")) return BLACK;
            } else if (d(h, "adspeed.com") || d(h, "mgid.com") || d(h, "innovid.com") || d(h, "360yield.com") || d(h, "appflood.com") || d(h, "unityads.unity3d.com") || d(h, "untd.com")) return BLACK;
        }
        if (t == "g") {
            if (z == "n") {
                if (d(h, "bnserving.com") || d(h, "advertising.com") || d(h, "billytesting.com") || d(h, "integral\u002Dmarketing.com") || d(h, "flashtalking.com") || d(h, "cold\u002Dcold\u002Dfreezing.com")) return BLACK;
            } else if (d(h, "trafmag.com")) return BLACK;
        }
        if (t == "i") {
            if (z == "b") {
                if (d(h, "bebi.com") || d(h, "zumobi.com") || d(h, "inmobi.com")) return BLACK;
            } else if (d(h, "cdn.media.amp.avai.com") || d(h, "insightexpressai.com") || d(h, "upsight\u002Dapi.com") || d(h, "mobusi.com") || d(h, "dotomi.com")) return BLACK;
        }
        if (t == "h") {
            if (z == "s") {
                if (d(h, "airpush.com") || d(h, "adcash.com") || d(h, "europacash.com")) return BLACK;
            } else if (z == "c") {
                if (d(h, "aimatch.com") || d(h, "clmbtech.com") || d(h, "adnotch.com") || d(h, "adinch.com")) return BLACK;
            } else if (d(h, "sharethrough.com") || d(h, "adbooth.com")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "iconpeak.com") || d(h, "ackak.com") || d(h, "exoclick.com") || d(h, "openclick.com") || d(h, "adzerk.com") || d(h, "adapi.addealsnetwork.com") || s(u, "*get_ad.php*") && d(h, "tapatalk.com")) return BLACK;
        }
        if (t == "m") {
            if (z == "e") {
                if (d(h, "dra.amazon\u002Dadsystem.com") || d(h, "ir\u002Dna.amazon\u002Dadsystem.com") || d(h, "aax.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Deast.amazon\u002Dadsystem.com") || d(h, "s.amazon\u002Dadsystem.com") || d(h, "api.unthem.com") || d(h, "aax\u002Deu.amazon\u002Dadsystem.com") || d(h, "c.amazon\u002Dadsystem.com") || d(h, "aax\u002Dus\u002Dpdx.amazon\u002Dadsystem.com")) return BLACK;
            } else if (d(h, "redtram.com") || d(h, "epom.com") || d(h, "ad131m.com") || d(h, "ad120m.com") || d(h, "castplatform.com") || d(h, "adform.com") || d(h, "gumgum.com") || d(h, "adnium.com") || d(h, "mdotm.com") || d(h, "ad127m.com") || d(h, "adcel.vrvm.com") || d(h, "ad132m.com")) return BLACK;
        }
        if (t == "l") {
            if (z == "a") {
                if (d(h, "ad.prismamediadigital.com") || d(h, "exponential.com") || d(h, "adversal.com") || d(h, "appodeal.com")) return BLACK;
            } else if (z == "l") {
                if (d(h, "misterbell.com") || d(h, "brightroll.com") || d(h, "adroll.com") || d(h, "btrll.com")) return BLACK;
            } else if (d(h, "padsdel.com") || d(h, "liverail.com") || d(h, "adwhirl.com") || d(h, "projectwonderful.com")) return BLACK;
        }
        if (t == "o") {
            if (z == "e") {
                if (d(h, "criteo.com") || d(h, "wbdds.jeuxvideo.com") || d(h, "veeseo.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "gemini.yahoo.com") || d(h, "beap\u002Dbc.yahoo.com") || d(h, "m.yap.yahoo.com") || d(h, "soundwave.mobile.yahoo.com") || d(h, "ads.yahoo.com") || d(h, "adserver.yahoo.com")) return BLACK;
            } else if (d(h, "globaltraffico.com") || d(h, "zedo.com") || d(h, "sekindo.com") || d(h, "chango.com") || d(h, "yieldmo.com") || d(h, "smaato.com")) return BLACK;
        }
        if (t == "n") {
            if (z == "r") {
                if (d(h, "mtburn.com") || d(h, "turn.com") || d(h, "ziiporn.com")) return BLACK;
            } else if (z == "d") {
                if (d(h, "eacdn.com") || d(h, "inmobicdn.com") || d(h, "c.jsrdn.com") || d(h, "akncdn.com") || d(h, "cb\u002Dcdn.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "tribalfusion.com") || d(h, "nspmotion.com") || d(h, "clkmon.com") || d(h, "amazonaws.com") && s(u, "*/adversion*") || d(h, "adition.com") || d(h, "performancehorizon.com") || d(h, "mopub.com") && !s(u, "*filmon*") || d(h, "adfalcon.com")) return BLACK;
            } else if (d(h, "applovin.com") || d(h, "playhaven.com")) return BLACK;
        }
        if (t == "p") {
            if (z == "a") {
                if (d(h, "heyzap.com") || d(h, "a.jumptap.com") || d(h, "appserver\u002Dap.com")) return BLACK;
            } else if (d(h, "user\u002Dagent\u002Dtracker.herokuapp.com") || d(h, "startapp.com") || d(h, "rtbpop.com") || d(h, "adtop.com")) return BLACK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "onclkds.com") || d(h, "juicyads.com") || d(h, "bcfads.com") || d(h, "beaverads.com") || d(h, "exoticads.com") || d(h, "marsads.com") || d(h, "buysellads.com") || d(h, "moatads.com") || d(h, "appads.com") || d(h, "mads.com") || d(h, "mobile.aws.weather.com") && s(u, "*/ads.json") || d(h, "tapjoyads.com") || d(h, "carbonads.com") || d(h, "hotwords.com") || d(h, "mellowads.com") || d(h, "zestads.com") || d(h, "1phads.com") || d(h, "ketads.com") || d(h, "openvideoads.com") || d(h, "pflexads.com") || d(h, "mng\u002Dads.com") || d(h, "medyanetads.com") || d(h, "youtube.com") && s(u, "*/_get_ads*") || d(h, "propellerads.com")) return BLACK;
            } else if (z == "k") {
                if (d(h, "ecpmrocks.com") || d(h, "hkg1.aastocks.com") || d(h, "mobtrks.com") || d(h, "mobytrks.com") || d(h, "terraclicks.com") || d(h, "ox\u002Dd.majorgeeks.com") || d(h, "infolinks.com") || d(h, "yumenetworks.com") || d(h, "keywordblocks.com") || d(h, "adtaxinetworks.com")) return BLACK;
            } else if (z == "t") {
                if (d(h, "adacts.com") || d(h, "bbelements.com") || d(h, "medialets.com")) return BLACK;
            } else if (d(h, "medialytics.com") || d(h, "admeasures.com") || d(h, "addthis.com") && !d(h, "s7.addthis.com") || d(h, "clkdeals.com") || d(h, "otherlevels.com") || d(h, "propellerpops.com") || d(h, "traffpartners.com") || !s(u, "*.gif*") && d(h, "mpnrs.com") || d(h, "ligatus.com") || d(h, "traffichaus.com") || d(h, "serving\u002Dsys.com") || d(h, "ad\u002Dsys.com") || d(h, "adnxs.com") || d(h, "drnxs.com")) return BLACK;
        }
        if (t == "r") {
            if (z == "e") {
                if (d(h, "kixer.com") || d(h, "wwwpromoter.com") || d(h, "yieldmanager.com") || d(h, "eyewonder.com") || d(h, "adkeeper.com") || !s(u, "*/click*") && !s(u, "*itunesredir*") && d(h, "tradedoubler.com") || d(h, "liveadexchanger.com") || d(h, "fyber.com") || d(h, "bidvertiser.com") || d(h, "applifier.com") || d(h, "mob\u002Dserver.com") || d(h, "smartadserver.com") || d(h, "ad\u002Dcenter.com")) return BLACK;
            } else if (z == "o") {
                if (d(h, "image.click.livedoor.com") || d(h, "exelator.com") || d(h, "adtailor.com")) return BLACK;
            } else if (d(h, "ad\u002Dstir.com") || d(h, "cpmstar.com") || d(h, "adgear.com") || d(h, "clickmngr.com")) return BLACK;
        }
        if (t == "t") {
            if (z == "f") {
                if (d(h, "igpiphone.gameloft.com") || d(h, "cdn.applift.com") || d(h, "ingameads.gameloft.com") || d(h, "201205igp.gameloft.com") || d(h, "igp06.gameloft.com") || d(h, "578756.gameloft.com")) return BLACK;
            } else if (z == "n") {
                if (d(h, "adsinstant.com") || d(h, "liveintent.com") || d(h, "revcontent.com") || d(h, "quantcount.com")) return BLACK;
            } else if (d(h, "rubiconproject.com") || d(h, "questionmarket.com") || d(h, "adsmarket.com") || d(h, "appsdt.com") || d(h, "lijit.com") || d(h, "mobiright.com") || d(h, "atdmt.com") || !s(u, "*configure*") && d(h, "adtilt.com") || d(h, "leadbolt.com") || d(h, "avocarrot.com") || d(h, "apprupt.com") || d(h, "admost.com") || d(h, "chartboost.com") || d(h, "reklamport.com") || d(h, "adexprt.com") || d(h, "scanscout.com") || d(h, "intellitxt.com") || d(h, "appnext.com")) return BLACK;
        }
        if (t == "w") {
            if (d(h, "bannerflow.com") || d(h, "adnow.com")) return BLACK;
        }
        if (t == "v") {
            if (d(h, "n208adserv.com") || d(h, "onclasrv.com") || d(h, "directrev.com") || d(h, "clkrev.com") || d(h, "tom.itv.com")) return BLACK;
        }
        if (t == "y") {
            if (z == "l") {
                if (d(h, "adsupply.com") || d(h, "adtaily.com") || d(h, "4dsply.com")) return BLACK;
            } else if (d(h, "sponsorpay.com") || d(h, "doubleverify.com") || d(h, "trafficjunky.com") || d(h, "tapjoy.com") || d(h, "adcolony.com") || d(h, "ads.flurry.com") || d(h, "mobiletheory.com")) return BLACK;
        }
        if (t == "x") {
            if (d(h, "atlassbx.com") || d(h, "mediaplex.com") || d(h, "adpdx.com") || d(h, "mobclix.com") || d(h, "mobfox.com") || d(h, "servedbyopenx.com") || d(h, "openx.com") || d(h, "adk2x.com")) return BLACK;
        }
        if (t == "z") {
            if (d(h, "altrooz.com") || d(h, "adbuddiz.com") || d(h, "zestadz.com")) return BLACK;
        }
        if (d(h, "ximad.com") && s(u, "*/ad3/*") || d(h, "movi11.com") || d(h, "wafmedia5.com") || d(h, "admtpmp127.com") || d(h, "leadzu.com")) return BLACK;
    } else if (b == "net") {
        if (t == "a") {
            if (d(h, "adorika.net") || d(h, "clickterra.net") || d(h, "chitika.net")) return BLACK;
        }
        if (t == "e") {
            if (d(h, "redintelligence.net") || d(h, "accesstrade.net") || d(h, "mobilefuse.net") || d(h, "adglare.net") || d(h, "yen.appsfire.net") || d(h, "trafficgate.net") || d(h, "adverserve.net") || d(h, "api.pubnative.net")) return BLACK;
        }
        if (t == "d") {
            if (!d(h, "heise.nuggad.net") && d(h, "nuggad.net") || d(h, "rnmd.net") || d(h, "content\u002Dad.net")) return BLACK;
        }
        if (t == "k") {
            if (d(h, "fastclick.net") || d(h, "connect.decknetwork.net") || d(h, "adzerk.net")) return BLACK;
        }
        if (t == "m") {
            if (d(h, "adform.net") || d(h, "adverticum.net") || d(h, "alea.adam.daum.net")) return BLACK;
        }
        if (t == "o") {
            if (d(h, "reporo.net") || d(h, "criteo.net") || d(h, "adsmogo.net") || d(h, "smaato.net")) return BLACK;
        }
        if (t == "n") {
            if (d(h, "inmobicdn.net") || d(h, "s1.2mdn.net") || d(h, "popadscdn.net")) return BLACK;
        }
        if (t == "p") {
            if (d(h, "adformdsp.net") || d(h, "lduhtrp.net") || d(h, "smartclip.net")) return BLACK;
        }
        if (t == "s") {
            if (z == "d") {
                if (d(h, "everestads.net") || d(h, "onclickads.net") || d(h, "carbonads.net") || d(h, "popads.net") || d(h, "msads.net")) return BLACK;
            } else if (d(h, "playnomics.net") || d(h, "vaxadserver.azurewebsites.net") || d(h, "zucks.net") || d(h, "leadboltapps.net") || d(h, "intermarkets.net")) return BLACK;
        }
        if (t == "r") {
            if (z == "e") {
                if (d(h, "admaster.net") || d(h, "adjuggler.net") || d(h, "readserver.net") || d(h, "admixer.net")) return BLACK;
            } else if (d(h, "adadvisor.net") || d(h, "adsfactor.net")) return BLACK;
        }
        if (t == "t") {
            if (d(h, "adsrocket.net") || d(h, "leadbolt.net")) return BLACK;
        }
        if (t == "y") {
            if (d(h, "buzzcity.net") || d(h, "trafficjunky.net")) return BLACK;
        }
        if (d(h, "2o7.net") || d(h, "cubecdn.net") && s(u, "*/js/loader_*") || d(h, "adfonic.net") || d(h, "yieldlab.net") || d(h, "e\u002Dplanning.net") || d(h, "revsci.net") || d(h, "adbooth.net") || d(h, "crwdcntrl.net") || d(h, "uimserv.net") || d(h, "openx.net")) return BLACK;
    } else if (b == "kr") {
        if (t == "o") {
            if (z == "c") {
                if (d(h, "theprimead.co.kr") || d(h, "adapi.about.co.kr") || d(h, "cauly.co.kr") || d(h, "tpmn.co.kr") || d(h, "realssp.co.kr") || d(h, "ad.about.co.kr") || d(h, "imadrep.co.kr") || d(h, "ad4989.co.kr")) return BLACK;
            }
        }
    } else if (b == "org") {
        if (t == "s") {
            if (d(h, "4chan\u002Dads.org") || d(h, "openvideoads.org")) return BLACK;
        }
        if (t == "r") {
            if (d(h, "adsrvr.org") || d(h, "zwaar.org")) return BLACK;
        }
        if (d(h, "adtrace.org") || d(h, "ketchapp.org") || d(h, "info.a7.org") || d(h, "openx.org")) return BLACK;
    } else if (b == "de") {
        if (t == "l") {
            if (d(h, "damoh.spiegel.de") || d(h, "brightroll.de")) return BLACK;
        }
        if (d(h, "madvertise.de") || d(h, "movad.de") || d(h, "adtech.de") || d(h, "advolution.de") || d(h, "adspirit.de")) return BLACK;
    } else if (b == "mobi") {
        if (d(h, "yoc.mobi") || d(h, "inner\u002Dactive.mobi") || d(h, "adsmogo.mobi") || d(h, "mocean.mobi") || d(h, "mydas.mobi") || d(h, "adver.mobi") || d(h, "vserv.mobi")) return BLACK;
    } else if (b == "vn") {
        if (d(h, "vcmedia.vn") || d(h, "ad360.vn") || d(h, "eclick.vn") || d(h, "adtimaserver.vn") || d(h, "admicro.vn")) return BLACK;
    } else if (b == "info") {
        if (d(h, "print.theyeshivaworld.info") || d(h, "spotscenered.info") || d(h, "appshelf.ttpsdk.info") || d(h, "houseads.ttpsdk.info")) return BLACK;
    } else if (b == "jp") {
        if (d(h, "advg.jp") || d(h, "openxmarket.jp") || d(h, "openx.jp") || d(h, "zucks.co.jp")) return BLACK;
    } else if (b == "pl") {
        if (d(h, "i\u002Dstream.pl") || d(h, "adocean.pl") || d(h, "adtaily.pl")) return BLACK;
    } else if (b == "tv") {
        if (d(h, "teads.tv") || d(h, "adap.tv") || d(h, "videoplaza.tv")) return BLACK;
    } else if (b == "se") {
        if (d(h, "adrotator.se") || d(h, "fusion.dn.se") || d(h, "emediate.se")) return BLACK;
    } else if (b == "io") {
        if (d(h, "firstimpression.io") || d(h, "liftoff.io")) return BLACK;
    } else if (b == "asia") {
        if (d(h, "snapmobile.asia") || d(h, "pixels.asia")) return BLACK;
    } else if (b == "biz") {
        if (d(h, "trafficfactory.biz") || d(h, "rarenok.biz")) return BLACK;
    } else if (b == "cz") {
        if (d(h, "imedia.cz")) return BLACK;
    } else if (b == "il") {
        if (d(h, "fus.yad2.co.il")) return BLACK;
    } else if (b == "co") {
        if (d(h, "adk2.co")) return BLACK;
    } else if (b == "tw") {
        if (d(h, "adspending01.bwnet.com.tw")) return BLACK;
    } else if (b == "me") {
        if (d(h, "kiip.me")) return BLACK;
    } else if (b == "cn") {
        if (d(h, "admaster.com.cn")) return BLACK;
    } else if (b == "ru") {
        if (d(h, "admobi.ru")) return BLACK;
    } else if (b == "dk") {
        if (d(h, "emediate.dk")) return BLACK;
    } else if (b == "fr") {
        if (d(h, "ad2play.ftv\u002Dpublicite.fr")) return BLACK;
    } else if (b == "si") {
        if (d(h, "interseek.si")) return BLACK;
    } else if (b == "gr") {
        if (d(h, "adman.gr")) return BLACK;
    } else if (b == "li") {
        if (d(h, "kau.li")) return BLACK;
    } else if (b == "ua") {
        if (d(h, "holder.com.ua")) return BLACK;
    } else if (b == "ad") {
        if (d(h, "content.ad")) return BLACK;
    } else if (b == "at") {
        if (d(h, "ad.adworx.at")) return BLACK;
    } else if (b == "space") {
        if (d(h, "dlski.space")) return BLACK;
    } else if (b == "eu") {
        if (d(h, "emediate.eu")) return BLACK;
    } else if (b == "es") {
        if (d(h, "kimia.es")) return BLACK;
    }
    if (((!s(u, "*/aclk*") && !s(u, "*/pagead/conversion.js") && d(h, "googleadservices.com")) || (!s(u, "*/gpt_mobile.js") && d(h, "googletagservices.com") && !s(u, "*/gpt.js")) || (d(h, "pagead2.googlesyndication.com") || d(h, "pagead1.googlesyndication.com") || d(h, "pagead3.googlesyndication.com") || d(h, "pagead.googlesyndication.com"))) || s(h, "*.cj.com") || ((d(h, "connect.facebook.net") && s(u, "*/sdk/xfbml.ad.*")) || (s(u, "*/plugins/ad.*") && d(h, "facebook.com"))) || ((s(u, "*/*adname*") && d(h, "flipboard.com")) || (s(u, "*/flare/*") && d(h, "flipboard.com")) || (d(h, "flipboard.com") && s(u, "*/flipmag/admanager.js")) || (d(h, "flipboard.com") && s(u, "*/adcreative/*"))) || ((s(u, "*mobile.php*") && d(h, "pub.sapo.pt")) || (s(u, "*vast.php*") && d(h, "pub.sapo.pt"))) || (n(h, "89.207.18.1", "255.255.255.0")) || (s(h, "*.manage.com") || s(h, "manage.com")) || (d(h, "doubleciick.net") || d(h, "doubleclick.net") || d(h, "pubads.g.doubleclick.net") || d(h, "googleads.g.doubleclick.net") || (!s(u, "*ythome*") && !d(h, "stats.g.doubleclick.net") && d(h, "doubleclick.net") && !d(h, "static.doubleclick.net"))) || s(h, "inmobisdk*.akamaihd.net") || ((s(u, "*/delivery/*") && d(h, "supersonicads.com")) || (s(u, "*supersonicads*.akamaihd.net/*")) || (d(h, "ultraadserver.com") && s(u, "*/api*")) || (d(h, "ssacdn.com"))) || (d(h, "h2.msn.com") || d(h, "rad.msn.com") || (s(u, "*/adsadclient*") && d(h, "msn.com")) || d(h, "stjjp.msn.com") || d(h, "udc.msn.com")) || s(h, "media.net") || s(u, "*/interstitiel/interstitiel.xml*") || ((d(h, "graph.facebook.com") && s(u, "*/network_ads")) || (s(u, "*/network_ads*") && d(h, "graph.facebook.com")) || (s(u, "*advertise*") && d(h, "graph.facebook.com"))) || s(u, "*/openx/www/images/*") || s(h, "cj.com") || ((!s(u, "*goalmobileapp*") && d(h, "taboola.com")) || d(h, "taboolasyndication.com")) || (s(u, "*speednetwor*.com/*xbanner.*") || s(u, "*speednetwor*.com/*xpopup.*") || s(u, "*speednetwor*.com*smart.js") || s(u, "*speednetwor*.com*adclickurl*")) || ((d(h, "amazonaws.com") && s(u, "*admarvel*")) || d(h, "admarvel.com")) || s(u, "*/openx/www/api/v*/*.php*") || s(u, "*/openx/www/delivery/*.php*") || s(h, "*.media.net") || s(h, "m*.2mdn.net")) return BLACK;
    if (d(h,  "bserver.gp-guia.net") || d(h,  "tags.orquideassp.com") || d(h,  "widgets.informars.com") || d(h,  "richaudience.com") || d(h,  "afiliados.hostgator.com.br") || d(h,  "ymonetize.com") || d(h,  "cowcash.net") || d(h,  "nucleo.ml") || d(h,  "c9p7at3pctmprvb5ecq66vvd.ml") || d(h,  "xstronger.com") || d(h,  "premiumads.com.br") || d(h,  "subdo.torrentrapid.com") || d(h,  "subdo.tumejortorrent.com") || d(h,  "sunmedia.tv") || d(h,  "lzrikate.com") || d(h,  "redemw.com") || d(h,  "grupoemidia.com.br") || d(h,  "tckn-code.com") || d(h,  "m-aeti-bocieva.info") || d(h,  "s7kkpeo6e2.com") || d(h,  "zona1.at.ua") || d(h,  "go.traqueto.com") || d(h,  "qebodu.com") || d(h,  "hitopadxdo.xyz") || d(h,  "adw.sapo.pt") || d(h,  "dozcpc.com") || d(h,  "midan.io") || d(h,  "elcomercio.pe") || d(h,  "myownads.space") || d(h,  "lojapremio.com.br") || d(h,  "comandosfilmes.org") || d(h,  "adsnetworkbr.ml") || d(h,  "regiobuscador.com") || d(h,  "actualtrade.eu") || d(h,  "ad-pub.terra.com.br") || d(h,  "ad.batanga.com") || d(h,  "ad.correioweb.com.br") || d(h,  "ad.harrenmedianetwork.com") || d(h,  "ad.jamba.pt") || d(h,  "ad.pt.doubleclick.net") || d(h,  "ad.terra.com.mx") || d(h,  "ad.terra.com") || d(h,  "adcell.de") || d(h,  "adfueling.com") || d(h,  "adnetwork.com.br") || d(h,  "ads.adpv.com") || d(h,  "ads.celldorado.com") || d(h,  "ads.dgabcsolutions.com.br") || d(h,  "ads.elpais.com.uy") || d(h,  "ads.gamavirtual.com") || d(h,  "ads.gazetaesportiva.net") || d(h,  "ads.grupozeta.es") || d(h,  "ads.lomadee.com") || d(h,  "ads.mercadoclics.com") || d(h,  "ads.olx.com") || d(h,  "ads.periodistadigital.com") || d(h,  "ads.prisacom.com") || d(h,  "adserver.clix.pt") || d(h,  "adsmwt.com") || d(h,  "adsroute.com") || d(h,  "adultoafiliados.com.br") || d(h,  "affilired.com") || d(h,  "afilio.com.br") || d(h,  "analytics.teleclal.com") || d(h,  "antevenio.com") || d(h,  "astrolabio.net") || d(h,  "bn.imguol.com") || d(h,  "box.zap.com.br") || d(h,  "buscape.com.br") || d(h,  "buxim.com") || d(h,  "cliquemidia.com") || d(h,  "codigobarras.net") || d(h,  "contadorgratis.web-kit.org") || d(h,  "controlsgc.prisacom.com") || d(h,  "coolmobile.es") || d(h,  "detectca.easysol.net") || d(h,  "direcionando.baixedetudo.net") || d(h,  "diximedia.es") || d(h,  "epartner.es") || d(h,  "fgcash.com.br") || d(h,  "foneclick.com.br") || d(h,  "hotwords.es") || d(h,  "ieurop.net") || d(h,  "img.netaffiliation.com") || d(h,  "informtext.blogspot.com") || d(h,  "linkeasy.org") || d(h,  "logs.eresmas.com") || d(h,  "lomadee.com") || d(h,  "maik.ff-bt.net") || d(h,  "maispremium.com.br") || d(h,  "manuaisadultos.com.br") || d(h,  "metododinheiro.pt") || d(h,  "miarroba.info") || d(h,  "muyviajero.com") || d(h,  "new-down.com") || d(h,  "nuevaq.net") || d(h,  "offers.motime.com.br") || d(h,  "opromo.com") || d(h,  "pelicula20.com") || d(h,  "planetup.com") || d(h,  "pmssrv.mercadolibre.com.mx") || d(h,  "pmssrv.mercadolibre.com.ve") || d(h,  "pmssrv.mercadolivre.com.br") || d(h,  "probabilidades.net") || d(h,  "publipagos.com") || d(h,  "refblock.com") || d(h,  "say.ac") || d(h,  "seomaster.com.br") || d(h,  "softclick.com.br") || d(h,  "solution911.com") || d(h,  "spublicidad.net") || d(h,  "swi-adserver.com") || d(h,  "templates.buscape.com") || d(h,  "tiozao.net") || d(h,  "tracking.fsjmp.com") || d(h,  "tutonovip.com") || d(h,  "ver-pelis.net") || d(h,  "yestorrents.org") || d(h,  "click.zmctrack.net") || d(h,  "masddf.pro") || d(h,  "goodcode.me") || d(h,  "3mfm7jef91.ru") || d(h,  "mahidevrat.com") || d(h,  "denlorian.com") || d(h,  "nzixhx.com") || d(h,  "sravniali.ru") || d(h,  "ivnsssc.pro") || d(h,  "smiinformeri.online") || d(h,  "vir70n.news") || d(h,  "admitad-connect.com") || d(h,  "utimg.ru") || d(h,  "banners.adfox.net") || d(h,  "hdbcode.com") || d(h,  "hbhook.com") || d(h,  "torren.eu") || d(h,  "svekolasg.pro") || d(h,  "adtraf.pro") || d(h,  "wwclickserv.club") || d(h,  "wwopenclick.space") || d(h,  "sghmho.com") || d(h,  "epushclick.com") || d(h,  "pushebrod.com") || d(h,  "xg2o402yyy.ru") || d(h,  "nzafj0fqsy.rest") || d(h,  "oldrrb.bid") || d(h,  "yanabmw.ru") || d(h,  "welldanius.com") || d(h,  "nzhfk.com") || d(h,  "thevtk.com") || d(h,  "susfvjh.pro") || d(h,  "ngjzmt.com") || d(h,  "adversting.riamedia.com.ua") || d(h,  "cybugim4bdzqhwl.ru") || d(h,  "arcadianis.pro") || d(h,  "as62wl63346.rest") || d(h,  "janndfsc.pro") || d(h,  "wpnjrm.com") || d(h,  "jd01estvpr.club") || d(h,  "trafficdok.com") || d(h,  "wwsphj.com") || d(h,  "shpovaw8wu.ru.com") || d(h,  "abeets.ru") || d(h,  "viadata.store") || d(h,  "adwels.ru") || d(h,  "xshop3.ru") || d(h,  "gxxcbj.com") || d(h,  "codezp1.com") || d(h,  "ubar-pro4.ru") || d(h,  "offergate.pro") || d(h,  "vqd51a5.biz.ua") || d(h,  "bubblevard.com") || d(h,  "newmedia.live") || d(h,  "ucurtatus.com") || d(h,  "bmgo.life") || d(h,  "vornz.com") || d(h,  "gigbc.net") || d(h,  "fegortius.com") || d(h,  "igtdovf.pro") || d(h,  "ijdjvaa.pro") || d(h,  "ec2-44-233-143-239.us-west-2.compute.amazonaws.com") || d(h,  "meatthe.ru") || d(h,  "oc734yaw3w.rest") || d(h,  "reu5uut0.top") || d(h,  "ssdbkv4qtq.xyz") || d(h,  "jajnhd.com") || d(h,  "dcwacl.com") || d(h,  "clickbaza.com") || d(h,  "islandofadvert.com") || d(h,  "cematuran.com") || d(h,  "bergfi.com") || d(h,  "vhajaja.pro") || d(h,  "1tdscpamedia.xyz") || d(h,  "casualshark.com") || d(h,  "umwiba.com") || d(h,  "aagqrr.com") || d(h,  "bfbdfjjacgddcajcej.ru") || d(h,  "neyacpa.pro") || d(h,  "2am0yc33wt2e.ru") || d(h,  "tneduf.com") || d(h,  "foiozzs.pro") || d(h,  "soilebol.com") || d(h,  "dnoyrz.com") || d(h,  "bs.commontools.net") || d(h,  "refractionius.com") || d(h,  "bdbdqkxkdb.com") || d(h,  "1k3static.com") || d(h,  "sellaction.net") || d(h,  "uezbshzpdcbb.info") || d(h,  "listonnw.pro") || d(h,  "adtech-digital.ru") || d(h,  "fgsffil.pro") || d(h,  "oijkse.com") || d(h,  "pqrtd9hhtu9x.info") || d(h,  "mnogodiva.ru") || d(h,  "knkqjmjyxzev.info") || d(h,  "kvidcq.com") || d(h,  "wwgdwl.com") || d(h,  "bd05qvt.co.ua") || d(h,  "qirnz.com") || d(h,  "jin0cbonpi.ru") || d(h,  "xq5tf4nfccrb.info") || d(h,  "kbtzxl.com") || d(h,  "hdacode.com") || d(h,  "serconius.com") || d(h,  "rcvlink.com") || d(h,  "jmk16zzbpqt0.org") || d(h,  "trafficbc3.host") || d(h,  "otogkg.com") || d(h,  "platformbot.xyz") || d(h,  "zashtorkino.ru") || d(h,  "realbig.pro") || d(h,  "asing.ru") || d(h,  "bigoff.info") || d(h,  "bigpigcz.club") || d(h,  "oschgds.pro") || d(h,  "sfsudsf.pro") || d(h,  "vgjackpot5.com") || d(h,  "tirsmile.pro") || d(h,  "redarianman.com") || d(h,  "go.xl.ua") || d(h,  "go.ukrleads.com") || d(h,  "mdyhb.com") || d(h,  "adstime.org") || d(h,  "fqab5xq7qlgt.info") || d(h,  "ftd2q1g8id1z.ru") || d(h,  "you-cant-win.com") || d(h,  "kolest.pro") || d(h,  "quantumpers.com") || d(h,  "cloudfastads.ru") || d(h,  "2sfygwfxvsxv.info") || d(h,  "hgbn.rocks") || d(h,  "inti24.com") || d(h,  "glt1fogiank3.ru") || d(h,  "luckyads.tech") || d(h,  "hgofcd.com") || d(h,  "cxjrsb.com") || d(h,  "embraceable-venom.eu") || d(h,  "zrcir.com") || d(h,  "wvghl.com") || d(h,  "pthokfs.pro") || d(h,  "fitfatdeals.com") || d(h,  "waitor.info") || d(h,  "woazowup.net") || d(h,  "2vaxwkujrfwh.info") || d(h,  "qqqwes.com") || d(h,  "svekolka.com") || d(h,  "bchaser.info") || d(h,  "advgalaxy.com") || d(h,  "rvt2687sqo9o.ru") || d(h,  "bigunok.club") || d(h,  "bjrfnps4efhldfj.ru") || d(h,  "truenat.bid") || d(h,  "ezpush.me") || d(h,  "ezvbegy1wtxv.ru") || d(h,  "jvljpv.com") || d(h,  "parandeya.com") || d(h,  "mirnauk.ru") || d(h,  "aafdcq.com") || d(h,  "2tdsprofit.in") || d(h,  "idhvbfj.pro") || d(h,  "vai1hqegr2ou.ru") || d(h,  "pkqeg5z3xffs.info") || d(h,  "ifhei9zzyu2r.ru") || d(h,  "i6h1x9ss5wtv.ru") || d(h,  "ybcrwm.com") || d(h,  "edugrampromo.com") || d(h,  "c5dls1in4l1e.ru") || d(h,  "lovad.pro") || d(h,  "luuming.com") || d(h,  "dejionsite.pro") || d(h,  "tpjsqt.com") || d(h,  "bveyge.com") || d(h,  "fuojuw.com") || d(h,  "sphjtw.ru") || d(h,  "qmsdxo.ru") || d(h,  "flipflap.pro") || d(h,  "huffson-delivery.com") || d(h,  "infoblog.site") || d(h,  "hqrsuxsjqycv.info") || d(h,  "goontex.com") || d(h,  "srigbxxv.com") || d(h,  "frsuli.com") || d(h,  "info.invistionik.ru") || d(h,  "rgqxbf.com") || d(h,  "ogclick.com") || d(h,  "1klink.ru") || d(h,  "purpulium.com") || d(h,  "apucdt.com") || d(h,  "ortermodown.ru") || d(h,  "eadgxy.com") || d(h,  "haeechihhfajibdfaef.ru") || d(h,  "one-xjygn.world") || d(h,  "sunburgh.com") || d(h,  "igdgsfa.pro") || d(h,  "news-code.com") || d(h,  "escense.ru") || d(h,  "fe4r7k22y68p.info") || d(h,  "bict.pro") || d(h,  "gioorrs.pro") || d(h,  "zfsfkp.com") || d(h,  "meborangot.ru") || d(h,  "atavas.ru") || d(h,  "robcohatru.ru") || d(h,  "activepr.info") || d(h,  "obldomain.ru") || d(h,  "gqedxf.com") || d(h,  "v1-c73e.kxcdn.com") || d(h,  "zrlcr.com") || d(h,  "cdn*.swaxis.com") || d(h,  "43711cffd26816e.com") || d(h,  "azzpbn.com") || d(h,  "brekdok.com") || d(h,  "ad4xh85llhcbfis8.com") || d(h,  "11flexiblebig9.website") || d(h,  "login-megafon.ru") || d(h,  "cadimavume.com") || d(h,  "znu1ertrovgs.org") || d(h,  "thathersevengid.ru") || d(h,  "bzrpvk.com") || d(h,  "yandexbrowser2019.ru") || d(h,  "5vul2bdy.store") || d(h,  "zetrade.net") || d(h,  "ijacgw.com") || d(h,  "targetseek.ru") || d(h,  "7ix.ru") || d(h,  "travel2pic.xyz") || d(h,  "mm.n3w1d0ma1n") || d(h,  "rrf.fat1domain1") || d(h,  "as.gooodloooking.com") || d(h,  "zh.tiredduck.com") || d(h,  "shp.0n3dmn.com") || d(h,  "0u.fastdmn0.com") || d(h,  "da.realdmn.com") || d(h,  "kontik28.ru") || d(h,  "apprefaculty.pro") || d(h,  "qqbook.ru") || d(h,  "newsofworld.club") || d(h,  "vw.xxxmshel.org") || d(h,  "fzhxi.com") || d(h,  "ensurania.com") || d(h,  "sedretonhar.ru") || d(h,  "fabricmedia.ru") || d(h,  "glossingly.com") || d(h,  "aj1907.online") || d(h,  "octclck.xyz") || d(h,  "reg88.ru") || d(h,  "24productions.info") || d(h,  "armi.media") || d(h,  "wjgohz.com") || d(h,  "gecatikonstantin.ru") || d(h,  "pornogoogle.info") || d(h,  "v1rton.news") || d(h, "abc.com")) return BLACK;
    if (d(h, "fwmrm.net")) return "PROXY 216.58.209.78:80";
    return PROXY_DIRECT;
}
