/**
 * Author:    servio@palacios.com
 * Created:   2020.06.03
 **/
function loadJSON(callback) {
        var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
        xobj.open('GET', 'js/data.json', true);
        xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
             callback(xobj.responseText);
          }
        };
        xobj.send(null);
}

loadJSON(function(response) {
    var data = JSON.parse(response);
    for(var i=0; i<data.length; i++) {
        var list = document.getElementById(data[i].anchor);
      	var _item = document.createElement('a');
      	_item.href = data[i].href;
      	_item.innerText = data[i].title ;
      	var entry = document.createElement('li');
      	entry.appendChild(_item);
      	entry.appendChild(document.createTextNode(", " + data[i].author + ", " + data[i].date + "."));
      	list.appendChild(entry);
    }
});

