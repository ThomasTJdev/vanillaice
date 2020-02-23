
var test = 0;
function out(type, text) {
  test += 1;
  js.appendValue("#out", test + " " + type + ": " + text + "\n")
}


ready(function () {

  // el()
  var tEl1 = js.el("#aa")
  var tEl2 = js.el(".inputSpecialClass")
  var tEl3 = js.el(".containerp .inputSpecialClass")
  var tEl4 = js.el(".containerp .isp")

  out("el(id) true", tEl1)
  out("el(class) true", tEl2)
  out("el(query) fail", tEl3)
  out("el(query) true", tEl4)

  // parent()
  var tP1 = js.parent("#firstp")
  js.setStyle(tP1, "color", "blue")
  out("parent() true", tP1)
  var tP2 = js.parent(".containerp")
  js.setStyle(tP2, "color", "yellow")
  out("parent() true", tP2)

  // Child and Children
  var tC1 = js.child(".containerp")
  out("child() true", tC1)
  var tC2 = js.children(".containerp")
  out("children() true", tC2)

  // Next Prev
  var tN1 = js.next("#secondp");
  js.setText(tN1, "next");
  out("next(next) true", tN1)
  var tP1 = js.prev("#secondp");
  js.setText(tP1, "prev");
  out("prev(prev) true", tP2)

  // Value
  js.setValue("#cc", '{"1": "ok", "2": "fejl"}');
  out("setValue() true", "{1: 'ok', 2: 'fejl'}")
  js.appendValue("#dd", "appendValue");
  out("appendValue() true", "appendValue")
  var tV1 = js.getValue("#aa");
  out("getValue() true", tV1)

  // Text
  js.setText("#thirdp", "setText");
  out("setText() true", "setText")

  js.appendText("#fourp", "appendText");
  out("appendText() true", "appendText")



  // Exists
  out("exist(#cc) true", js.exist("#cc"))
  out("exist(#gg) false", js.exist("#gg"))
  out("exist(.isp) true", js.exist(".isp"))

  // Style
  var tS1 = js.getStyle("#container", "color");
  out("getStyle(#container) true", tS1)

  // Attr
  js.setAttr("#container", "data-new", "newAttr");
  out("setAttr(#container, data-new) true", "newAttr")
  var tA1 = js.getAttr("#container", "data-new");
  out("getAttr(#container, data-new) true", tA1)
  js.delAttr("#container", "data-new");
  out("delAttr(#container, data-new) false", "")
  var tA2 = js.getAttr("#container", "data-new");
  out("getAttr(#container, data-new) false", tA2)

  // Loop
  var looparr = js.el(".isp");
  var loopd = "";
  js.loopFunc(looparr, function(e) {
    loopd += js.getText(e) + " | ";
    js.setText(e, "loop OK");
  })
  out("looFunc(.isp) true", loopd)


  // Event
  js.event("#thirdp", "click", function() {
    alert("thirp click");
  })
  js.onEvent(document, "#fourp", "click", function () {
    alert("fourp click");
  })

  // Data
  var jsond = js.json(js.getValue("#cc"))
  echodev(jsond[1])
  out("json(1 + 2) true", jsond[1] + " - " + jsond[2])

  var arrayd = js.el(".isp");
  echodev(arrayd);
  out("array(.isp) true", arrayd.length)

  var isStr = "Yo man, hey, how are you"
  var isSub = "hey"
  out("inString() true", js.inString(isStr, isSub));
  out("inString() false", js.inString(isStr, "bro"));


});