//載入前的藍色旋轉圓圈
/* dream Talker - http://xox520.blogspot.com */
document.write("<style>");
document.write(".dt-loading{background:rgba(0,0,0,0.9);width:100%;height:100%;z-index:99999;text-align:center;position:fixed;top:0;bottom:0;left:0;right:0;padding:20% 0}");
document.write(".laying{background-color:rgba(0,0,0,0);border:5px solid rgba(97,225,255,0.9);opacity:.9;border-right:5px solid rgba(0,0,0,0);border-left:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 35px #187BD8;width:50px;height:50px;margin:0 auto;-moz-animation:spinPulse 1s infinite ease-in-out;-webkit-animation:spinPulse 1s infinite linear}");
document.write(".layout{background-color:rgba(0,0,0,0);border:5px solid rgba(97,145,255,0.9);opacity:.9;border-left:5px solid rgba(0,0,0,0);border-right:5px solid rgba(0,0,0,0);border-radius:50px;box-shadow:0 0 15px #187BD8;width:30px;height:30px;margin:0 auto;position:relative;top:-40px;-moz-animation:spinoffPulse 1s infinite linear;-webkit-animation:spinoffPulse 1s infinite linear}");
document.write("@-moz-keyframes spinPulse{0{-moz-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #187BD8}50%{-moz-transform:rotate(145deg);opacity:1}100%{-moz-transform:rotate(-320deg);opacity:0}}");
document.write("@-moz-keyframes spinoffPulse{0{-moz-transform:rotate(0)}100%{-moz-transform:rotate(360deg)}}");
document.write("@-webkit-keyframes spinPulse{0{-webkit-transform:rotate(160deg);opacity:0;box-shadow:0 0 1px #2187e7}50%{-webkit-transform:rotate(145deg);opacity:1}100%{-webkit-transform:rotate(-320deg);opacity:0}}");
document.write("@-webkit-keyframes spinoffPulse{0{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}");
document.write("<\/style>");
document.write("<div class=\"dt-loading\"><div class=\"laying\"><\/div><div class=\"layout\"><\/div><\/div>");
document.write("<script>setTimeout(function(){$(\".dt-loading\").fadeOut('slow');},5000);<\/script>");