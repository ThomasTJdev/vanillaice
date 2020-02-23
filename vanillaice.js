var echomode = "dev";

/* Polyfill */
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;
    do {
      if (el.matches(s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}

// Dev echo messages
var err1 = "Does not exist: "
function echodebug(text) {
  console.groupCollapsed("DEV: " + text);
  console.trace();
  console.groupEnd();
}
function echo(text) {
  if (echomode == "override") {
    echodebug(text)
  } else {
    console.log(text);
  }
};
function echodev(text) {
  if (echomode == "dev" || echomode == "override") {
    echodebug(text)
  } else {
    console.log(text);
  }
};


function isArr(a) {
  return Array.isArray(a);
}



// Selectors
function elit(it) {
  if (it == undefined) {
    echodev(err1 + it);
    return null;
  }
  if ((typeof it != 'string' && it != null) || Array.isArray(it)) {
    return it;
  }
  var o;
  if (/\s/.test(it) || (!it.includes("#") && !it.includes("."))) {
    o = [...document.querySelectorAll(it)];
    //o = [...document.querySelectorAll(it.replace(/\./g, "").replace(/#/g, ""))];
  } else if (it[0] == "#") {
    return document.getElementById(it.replace(/#/g, ""));
  } else if (it[0] == ".") {
    o = [...document.getElementsByClassName(it.replace(/\./g, ""))];
  } else if (it[0] != "#" && it[0] != ".") {
    o = [...document.getElementsByTagName(it)];
  }
  if (o.length == 0) {
    echodev(err1 + it);
    return null
  } else {
    return o
  }
}


// Values
function jsSetValue(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.value = v;
    });
  } else if (e) {
    e.value = v;
  }
}
function jsAppendValue(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.value += v;
    });
  } else if (e) {
    e.value += v;
  }
}
function jsGetValue(it) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].value;
    /*var arr = [];
    e.forEach(function (i) {
      arr.push(i);
    });
    return arr;*/
  } else if (e) {
    return e.value;
  }
}

// Text
function jsSetText(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    if (e == null) { return undefined; }
    e.forEach(function (i) {
      i.textContent = v;
    });
  } else if (e) {
    e.textContent = v;
  }
}
function jsAppendText(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    if (e == null) { return undefined; }
    e.forEach(function (i) {
      i.textContent += v;
    });
  } else if (e) {
    e.textContent += v;
  }
}
function jsGetText(it) {
  var e = elit(it);
  if (isArr(e)) {
    if (e == null) { return undefined; }
    return e[0].textContent;
    /*var arr = [];
    e.forEach(function (i) {
      arr.push(i);
    });
    return arr;*/
  } else if (e) {
    return e.textContent;
  }
}

// Class
function jsHasClass(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    if (e == null) { return undefined; }
    return e[0].classList.contains(v);
    /*var arr = [];
    e.forEach(function (i) {
      arr.push(i);
    });
    return arr;*/
  } else if (e) {
    return e.classList.contains(v);
  }
}
function jsAddClass(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.classList.add(v);
    });
  } else if (e) {
    e.classList.add(v);
  }
}
function jsRemoveClass(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.classList.remove(v);
    });
  } else if (e) {
    e.classList.remove(v);
  }
}
function jsToggleClass(it, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.classList.toggle(v);
    });
  } else if (e) {
    e.classList.toggle(v);
  }
}

// Exists
function jsExists(it) {
  var e = elit(it);
  if (isArr(e)) {
    if (e.length > 0) {
      return true;
    }
  } else if (e) {
    return true;
  }
  return false;
}

// Styles
function jsSetStyle(it, t, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.style.cssText += (t + ": " + v + ";")
    });
  } else if (e) {
    e.style.cssText += (t + ": " + v + ";")
  }
}
function getStyleFind(it, t) {
  var s = it.style.cssText.split("; ");
  s.forEach(function (i) {
    var ss = i.split(": ");
    if (ss[0] == t) {
      return ss[1].replace(";", "");
    }
  })
}
function jsGetStyle(it, t) {
  var e = elit(it);
  if (isArr(e)) {
    return getStyleFind(e[0], t);
    /*var arr = [];
    e.forEach(function (i) {
      arr.push(getStyleFind());
    });
    return arr;*/
  } else if (e) {
    var aa = getStyleFind(e, t);
    return aa
  }
}

// Attributes
function jsSetAttr(it, t, v) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.setAttribute(t, v);
    });
  } else if (e) {
    e.setAttribute(t, v);
  }
}
function jsGetAttr(it, t) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].getAttribute(t);
  } else if (e) {
    return e.getAttribute(t);
  }
}
function jsDelAttr(it, t) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.removeAttribute(t);
    });
  } else if (e) {
    e.removeAttribute(t);
  }
}

// Parent
function jsParent(it) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].parentElement;
  } else if (e) {
    return e.parentElement;
  }
}

// Children
function jsChildren(it, t) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].childNodes;
  } else if (e) {
    return e.childNodes;
  }
}
function jsChild(it) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].firstElementChild;
  } else if (e) {
    return e.firstElementChild;
  }
}

// Next, Prev
function jsNext(it) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].nextElementSibling;
  } else if (e) {
    return e.nextElementSibling;
  }
}
function jsPrev(it) {
  var e = elit(it);
  if (isArr(e)) {
    return e[0].previousElementSibling;
  } else if (e) {
    return e.previousElementSibling;
  }
}

// Loops
function loopFunc(arr, func) {
  for (var i = 0; i < arr.length; i++) {
    func(arr[i]);
  }
}

// Cookies
function jsSetCookie(n, v, d) {
  var d = new Date;
  d.setTime(d.getTime() + 24 * 60 * 60 * 1000 * days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}
function jsGetCookie(n) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}
function jsDelCookie(n) {
  jsSetCookie(n, null, 0);
}

// Event
function jsEvent(it, a, f) {
  var e = elit(it);
  if (isArr(e)) {
    e.forEach(function (i) {
      i.addEventListener(a, f);
    });
  } else if (e) {
    e.addEventListener(a, f);
  }
}

// On event
function jsOnEvent(p, e, a, h) {
  p.addEventListener(a, function (event) {
    if (event.target.matches(e + ', ' + e + ' *')) {
      h.apply(event.target.closest(e), arguments);
    }
  }, false);
}

// Keycode
function handler(e, f) {
  var key = window.event ? e.keyCode : e.which;
  f(key, e.shiftKey, e.altKey, e.ctrlKey);
}
function keys(f) {
  if (document.attachEvent) {
    document.attachEvent('onkeydown', handler, f);
  } else {
    document.addEventListener('keydown', handler, f);
  }
}

// In array
function jsInArray(a, t) {
  var l = a.l;
  for (var i = 0; i < l; i++) {
    if (a[i] == t) {
      return i;
    }
  }
  return -1;
}

// In string
function jsInString(s, v) {
  return s.includes(v);
}

// Fade in and Fade out
function jsFadeOut(it, t) {
  var e = elit(it);
  var s = e.style, step = 25 / (t || 300);
  s.opacity = s.opacity || 1;
  (function fade() { (s.opacity -= step) < 0 ? s.display = "none" : setTimeout(fade, 25); })();
}
function jsFadeIn(it, t, d) {
  var e = elit(it);
  var s = e.style, step = 25 / (t || 300);
  s.opacity = s.opacity || 0;
  s.display = d || "block";
  (function fade() { (s.opacity = parseFloat(s.opacity) + step) > 1 ? s.opacity = 1 : setTimeout(fade, 25); })();
}

// Hide and show and toggle
function jsHide(it) {
  var e = elit(it);
  e.style.display = "none";
}
function jsShow(it, d) {
  var e = elit(it);
  var s = d || "block";
  e.style.display = s;
}
function jsToggle(it, d) {
  var e = elit(it);
  var v = e.style.display;
  if (v == "none") {
    var s = d || "block";
    e.style.display = s;
  } else {
    e.style.display = "none";
  }
}

// Fetch
function jsFetch(u, r, e) {
  fetch(u)
    .then(function(d) {
      r(d);
    }).catch(function(d) {
      e(d);
    });
}

// New elements
function jsNewElement(t) {
  return document.createElement(t);
}


var js = {
  el: function (v) {
    return elit(v);
  },
  parent: function (e) {
    return jsParent(e);
  },
  child: function (e, t) {
    return jsChild(e);
  },
  children: function (e, t) {
    return jsChildren(e, t);
  },
  next: function (e, t) {
    return jsNext(e, t);
  },
  prev: function (e, t) {
    return jsPrev(e, t);
  },
  setValue: function (e, v) {
    jsSetValue(e, v);
  },
  appendValue: function (e, v) {
    jsAppendValue(e, v);
  },
  getValue: function(e) {
    return jsGetValue(e);
  },
  setText: function(e, v) {
    jsSetText(e, v);
  },
  appendText: function (e, v) {
    jsAppendText(e, v);
  },
  getText: function (e) {
    return jsGetText(e);
  },
  hasClass: function (e, v) {
    return jsHasClass(e, v);
  },
  addClass: function(e, v) {
    jsAddClass(e, v);
  },
  removeClass: function(e, v) {
    jsRemoveClass(e, v);
  },
  toggleClass: function(e, v) {
    jsToggleClass(e, v);
  },
  exist: function(e) {
    return jsExists(e);
  },
  setStyle: function(e, t, v) {
    jsSetStyle(e, t, v);
  },
  getStyle: function(e, t) {
    return jsGetStyle(e, t);
  },
  setAttr: function (e, t, v) {
    jsSetAttr(e, t, v);
  },
  getAttr: function (e, t) {
    return jsGetAttr(e, t);
  },
  delAttr: function (e, t) {
    jsDelAttr(e, t);
  },
  setCookie: function (e, t) {
    jsSetCookie(n, v, d);
  },
  getCookie: function (e, t) {
    return jsGetCookie(n);
  },
  delCookie: function (e, t) {
    jsDelCookie(n);
  },
  loopFunc: function (e, f) {
    loopFunc(e, f);
  },
  event: function(e, a, f) {
    jsEvent(e, a, f);
  },
  onEvent: function (c, e, a, h) {
    /*
        a = "click"
        e = "#ID"
        h = function(e) {};
    */
    jsOnEvent(c, e, a, h);
  },
  json: function(d) {
    return JSON.parse(d);
  },
  inArray: function(a, t) {
    return jsInArray(a, t);
  },
  inString: function(s, v) {
    return jsInString(s, v);
  },
  fadeIn: function (e, t, d) {
    jsFadeIn(e, t, d);
  },
  fadeOut: function (e, t) {
    jsFadeOut(e, t);
  },
  show: function (e, d) {
    jsShow(e, d);
  },
  hide: function (e) {
    jsHide(e);
  },
  toggle: function (e) {
    jsToggle(e);
  },
  fetch: function(u, r, e) {
    jsFetch(u, r, e);
  },
  newElement: function(t) {
    return jsNewElement(t);
  }
}

var ready = function(callback) {
  if (document.readyState != "loading") {
    callback();
  } else {
    document.addEventListener("DOMContentLoaded", callback);
  }
}

ready(function() {
  console.log("DOM loaded");
});




















