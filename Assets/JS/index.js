var a = true;

function Tikla() {
    if(a) {
        document.getElementById("button").style = "background-color: #000;";
        alert("Oha ne yaptın?!");
        a = false;
    }else {
        document.getElementById("button").style = "background-color: none;";
        alert("Ohhh... Düzeldi");
        a = true;
    }
}

function Animasyon() {
    lerp = function(a, b, u) {
        return (1-u) * a + u * b;
    };

    fade = function(element, property, start, end, duration) {
      var interval = 10;
      var steps = duration/interval;
      var step_u = 1.0/steps;
      var u = 0.0;
      var theInterval = setInterval(function(){
        if (u >= 1.0){ clearInterval(theInterval) }
        var r = parseInt(lerp(start.r, end.r, u));
        var g = parseInt(lerp(start.g, end.g, u));
        var b = parseInt(lerp(start.b, end.b, u));
        var colorname = 'rgb('+r+','+g+','+b+')';
        element.style.setProperty(property, colorname);
        u += step_u;
      }, interval);
    };

    // in action
    el = document.getElementById('dene'); // your element
    property = 'color';                   // fading property
    startColor = {r:255, g:  255, b:  255};   // red
    endColor   = {r:  0, g:128, b:128};   // dark turquoise
    fade(el,'color',startColor,endColor,1000);

    // fade back after 2 secs
    setTimeout(function(){
      fade(el,'color',endColor,startColor,1000);
    },2000);
}
