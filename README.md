# vanillaice
JS library structuring some JS based on vanilla to avoid jQuery.

# Main

Import vanillaice.js and then access the functions with:
```js
js.[func-name](params)
```

# Examples

Some of the functions are shown below. For all the main functions, it is possible to pass an object, array of objects, an #ID, a .class or a query like:

```js
var el = js.el("#aa")
js.setStyle(el, "color", "blue");
js.setStyle("#aa", "color", "blue");
js.setStyle(".container .textfield", "color", "blue");
```

## Echo function

### echo()
An echo-function is available, use `echo()` for general `console.log()` output. It is possible to override the `echo()` when setting `echomode = "override"`.

```js
echo(js.el("#aa"));

// vanillaice.js:31 <input class=​"testdata inputSpecialClass" id=​"aa" value=​"This is aa">​
```

```js
echomode = "override"
echo(js.el("#aa"));

// vanillaice.js:23 DEV: [object HTMLInputElement]
//   vanillaice.js:24 console.trace
//   echodebug	@	vanillaice.js:24
//   echo	@	vanillaice.js:29
//   (anonymous)	@	VM969:2
```

### echodev()
For debug use `echodev()`. When setting `echomode = "release"`, `echodev()` will use `echo()`.

```js
echodev(js.el("#aa"));

// vanillaice.js:23 DEV: [object HTMLInputElement]
//   vanillaice.js:24 console.trace
//   echodebug	@	vanillaice.js:24
//   (anonymous)	@	VM988:2
```

```js
echomode = "release"
echodev(js.el("#aa"));

// vanillaice.js:31 <input class=​"testdata inputSpecialClass" id=​"aa" value=​"This is aa">​
```

## Main

### Objects
```js
var tEl1 = js.el("#aa")
var tEl2 = js.el(".inputSpecialClass")
var tEl3 = js.el(".containerp .isp")
```

### Parent, child, children, prev, next
```js
var tP1 = js.parent("#ID")
var tC1 = js.child(".container")
var tC2 = js.children(".container") // array of objects
var tN1 = js.next("#ID");
var tN2 = js.prev("#ID");
```

### Values
```js
js.setValue("#ID", "New text");
js.appendValue("#ID", "appendValue");
var tV1 = js.getValue("#ID");
```

### Text
```js
js.setText("#ID", "setText");
js.appendText("#ID", "appendText");
var tV1 = js.getValue("#ID");
```

### Exist
```js
js.exist("#ID") // true / false
```

### Style
```js
js.setStyle("#container", "color", "yellow")
var tS1 = js.getStyle("#container", "color");
```

### Attributes
```js
js.setAttr("#container", "data-new", "newAttr");
var tA1 = js.getAttr("#container", "data-new"); // newAttr
js.delAttr("#container", "data-new");
var tA2 = js.getAttr("#container", "data-new"); // null
```

### Loops
```js
var looparr = js.el(".textfield");
var loopd = "";
js.loopFunc(looparr, function(e) {
  loopd += js.getText(e) + " | ";
  js.setText(e, "loop OK");
})
echodev(loopd);
```

### Events
```js
js.event("#thirdp", "click", function() {
  alert("thirp click");
})
js.onEvent(document, "#fourp", "click", function () {
  alert("fourp click");
})
```
