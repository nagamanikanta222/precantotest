//  <!-- cookie based authentication starts here -->
$(document).ready(function(){
  checkCookie();
  function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    var user=getCookie("username");
    var password=getCookie("password");
    if (user != "" && user =='precanto' && password=='12345') {
      // alert("Welcome again " + user);
    } else {
      // window.location.href="C:/Users/PraveenKumarNayakudi/Desktop/PrecantoClone_Feb1/precantotest/login.html"
      // window.location.href="https://kalyanpre.github.io/precantotest/login.html"
      window.location.href="login.html"
    }
  }
  function deleteCookies(){
    setCookie('username','',0)
    setCookie('password','',0)
    window.location.href="login.html"
  }
})
   
    // <!-- cookie based authentication ends here -->