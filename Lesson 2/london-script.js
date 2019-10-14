// used in london.html

function listDomElements() {
    var children = document.body.childNodes;
    var i;
  
    for (i = 0; i <  children.length; i = i + 1) {
      console.log(children[i]);
    }
  }
