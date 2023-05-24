document.getElementsByClassName = function(clsName){
    var retVal = new Array();
    var elements = document.getElementsByTagName("*");
    for(var i = 0;i < elements.length;i++){
        if(elements[i].className.indexOf(" ") >= 0){
            var classes = elements[i].className.split(" ");
            for(var j = 0;j < classes.length;j++){
                if(classes[j] == clsName)
                    retVal.push(elements[i]);
            }
        }
        else if(elements[i].className == clsName)
            retVal.push(elements[i]);
    }
    return retVal;
}

function addSmiley(){
  var postBodyClass = (postBodyClass) ? postBodyClass : 'post-body';
  var d = document.getElementsByClassName(postBodyClass);
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contento.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-S/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contrariado.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-P/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/lengua.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\[/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-D/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/risa.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\}\:\-\]/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/x\*/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\;\-D/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\|/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\}/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\*\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contento.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/\:\-\(/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/triste.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/\;\-\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/gi%C3%B1o.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/XD/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/carcajada.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }

var d = document.getElementsByClassName('comment-body');
  for(var i=0;i<d.length;i++){
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contento.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-S/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contrariado.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-P/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/lengua.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\[/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-D/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/risa.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\}\:\-\]/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/x\*/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\;\-D/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\|/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/indiferente.png" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\-\}/gi, ' <img src="" style="border:0; margin:0; padding:0;" id="new" /> ');
        d[i].innerHTML = d[i].innerHTML.replace(/\:\*\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/contento.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/\:\-\(/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/triste.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/\;\-\)/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/gi%C3%B1o.png" style="border:0; margin:0; padding:0;" id="new" /> ');
	  d[i].innerHTML = d[i].innerHTML.replace(/XD/gi, ' <img src="http://sites.google.com/site/moinelo/Home/blog-cual-es-la-realidad/carcajada.png" style="border:0; margin:0; padding:0;" id="new" /> ');
    }
}

function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      oldonload();
      func();
    }
  }
}

addLoadEvent(addSmiley);