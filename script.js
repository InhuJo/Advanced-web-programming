$(window).ready(function() {
    var typingBool = false;
    var typingIdx = 0;
    var typingTxt = $(".intro-text").text();

    typingTxt = typingTxt.split("");

    if (typingBool == false) {
      typingBool = true;
      var tyInt = setInterval(typing, 120); // 반복동작
    }
  
    function typing() {
      if (typingIdx < typingTxt.length) {
        $(".typing").append(typingTxt[typingIdx]);
        typingIdx++;
      } else {
        clearInterval(tyInt);
      }
    }
  });
  