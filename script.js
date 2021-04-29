$(window).ready(function() {
    var typingIdx = 0;
    var typingTxt = $(".intro-text").text();

    typingTxt = typingTxt.split("");

    var tyInt = setInterval(typing, 120);

    setTimeout(() => {
      $('.enter').fadeIn();
    }, 5000);
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
      } else {
        clearInterval(tyInt);
      }
    }
  });
  