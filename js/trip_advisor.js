var url = "http://api.tripadvisor.com/api/partner/2.0/map//attractions?key=3762e2cd-0868-4cbe-b702-32d2dffcd449";
//
var x;
var y;
var pos;
var realurl;
 
function GetLatandLong(latitude, longitude) {
	pos = url.lastIndexOf("map/");
	pos+=4;
	realurl = url.slice(0,pos)+latitude+","+longitude+url.slice(pos);
	
	//xhr.open("POST",realurl, true);
	console.log(latitude);
	console.log(longitude);
	console.log(pos);
	console.log(realurl);
	//console.log(realurl.getJSON)
	//console.log(xhr);
	$.getJSON(realurl, function(data){
	console.log(data);

	});

	
}


<<<<<<< HEAD
function findAttractions(){
    xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
    }
=======




>>>>>>> c5b12293055f81f0ba752272c1b15481558863d4

    
   


