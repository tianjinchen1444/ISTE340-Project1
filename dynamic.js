/*
Course: ISTE 340
Project I - JavaScript
Name: Tianjin Chen

*/

//declare the variable
var choose=[];
var selectDiv;
var selectOpt;
var arr;
var options=null;
var isNull;

		  
// get user name 
// store the name is the cookie
function init(){

//check username is null or not
if(getCookie('user_name')==null){
	var getMessage;
	var name;
	name=prompt("Hello! First time here? what is your name? press cancel if you don't want the enter",'');

//if name is null, enter the name		
	while(name==''){
		name=prompt("Please enter your name",'');
	}
	if(name==null){
		name="Customer";
	}
	SetCookie('user_name',name);	
//if the name is exist
}else{
	name=getCookie('user_name',name);		
}
	getMessage="Welcome ! "+name+".";
		
		
		
// to test if IE browser is lower or equal to IE8
// if so, it will redirect
if(navigator.appVersion.indexOf("MSIE 8.")!=-1){
	alert("This is not support");
	window.document.location.href="http://outdatedbrowser.com/en";
}

isNull=data[Object.keys(data)[0]][1];


// Get the local storage if it not null
// it work only for brower with support the localstorage.
if( typeof( window.localStorage) !== "undefined" ){
	if(localStorage.getItem("choose")){
		options = localStorage.getItem("choose");
		if(options!=null){
			arr = JSON.parse(options);
		}
	}
}


	
// to set the title of the page
// get titlt from data
selectDiv = document.getElementById("selectDiv");
var title=document.createElement('h1');
var titleText=document.createTextNode(getMessage);
title.appendChild(titleText);
selectDiv.appendChild(title);


// create start button
var startDiv = document.createElement('div');
var startBtn = document.createElement('button');
// onclick function 
startBtn.onclick = function(){
	startDiv.removeChild(startBtn);
	var selectTitle=document.createElement('h4');
	selectTitle.setAttribute('style','color:black');
	var selectTxt=document.createTextNode(data[phone1][0]);
	selectTitle.appendChild(selectTxt);
	selectDiv.appendChild(selectTitle);
	//Create first level select list.	
	selectOpt = document.createElement("select");
	selectOpt.setAttribute("id", "selectId");
	selectOpt.setAttribute("onchange","secondSelList(selectId.value)");
	selectDiv.appendChild(selectOpt);
	createOption(phone1);

	//Store first level select to local storage
	var firstSelect=true;
	if(options!=null && arr.length>0 && firstSelect==true){
		document.getElementById("selectId").value=arr[0];
		secondSelList(arr[0]);
		firstSelect=false;

	}
}
//set text of the button
var txt = document.createTextNode("Start Place Your Order");
startBtn.appendChild(txt);
startDiv.appendChild(startBtn);
selectDiv.appendChild(startDiv);


//Create a button for delete user storage.
var delStorageBtn=document.createElement('button');
delStorageBtn.setAttribute("id","clearlocal");
var clear=document.createTextNode("Clear local Storage");
delStorageBtn.appendChild(clear);
// set css for the delete storage button
delStorageBtn.style.borderRadius  = "12px";
delStorageBtn.style.padding = "5px 10px 5px 10px ";
delStorageBtn.style.outline = "0";	
delStorageBtn.style.backgroundColor = "lightblue";
//
delStorageBtn.setAttribute("onclick","clearIt()");
selectDiv.appendChild(delStorageBtn);

//Create a button for delete user cookie.
var delCookieBtn=document.createElement('button');
delCookieBtn.setAttribute("id","deleteCookie");
delCookieBtn.style.backgroundColor = "lightblue";
delCookieBtn.style.borderRadius  = "12px";
delCookieBtn.style.padding = "5px 10px 5px 10px ";
delCookieBtn.style.outline = "0";	
var deleteCookie=document.createTextNode("Clear Cookie");
delCookieBtn.appendChild(deleteCookie);
delCookieBtn.setAttribute("onclick","clearCookie()");
selectDiv.appendChild(delCookieBtn);
}



//Create a second select list
function secondSelList(opt){	
	removeOption(1);
	saveOption(selectId.value)
	console.log(opt);
	if(opt!=isNull){
		var selectTitle=document.createElement('h4');
		selectTitle.setAttribute('style','color:black');
		var selectTxt=document.createTextNode(data[opt][0]);
		selectTitle.appendChild(selectTxt);
		selectDiv.appendChild(selectTitle);	
		selectOpt = document.createElement("select");
		selectOpt.setAttribute("id", "selectId1");
		selectOpt.setAttribute("onchange","thirdSelList(selectId1.value)");
		selectDiv.appendChild(selectOpt);
		createOption(opt);

//Store second select from user to local storage
		var secondSelect=true;
		if(options!=null && arr.length>1 && secondSelect==true){
			document.getElementById("selectId1").value=arr[1];
			thirdSelList(arr[1]);
			secondSelect=false;
		}
	}
}

//Create third select list
function thirdSelList(opt){
	removeOption(2);
	saveOption(selectId1.value)
	console.log(opt);
	if(opt!=isNull){
		var selectTitle=document.createElement('h4');
		selectTitle.setAttribute('style','color:black');
		var selectTxt=document.createTextNode(data[opt][0]);
		selectTitle.appendChild(selectTxt);
		selectDiv.appendChild(selectTitle);	
		selectOpt = document.createElement("select");
		selectOpt.setAttribute("id", "selectId2");
		selectOpt.setAttribute("onchange","fourthSelList(selectId2.value)");
		selectDiv.appendChild(selectOpt);
		createOption(opt);
//Store third select from user to local storage
		var thirdSelect=true;
		if(options!=null && arr.length>2 && thirdSelect==true){
			document.getElementById("selectId2").value=arr[2];
			fourthSelList(arr[2]);
			thirdSelect=false;
		}
	}

}

function fourthSelList(opt){
	removeOption(3);
	saveOption(selectId2.value);
	console.log(opt);
	if(opt!=isNull){
		var selectTitle=document.createElement('h4');
		selectTitle.setAttribute('style','color:black');
		var selectTxt=document.createTextNode(data[opt][0]);
		selectTitle.appendChild(selectTxt);
		selectDiv.appendChild(selectTitle);	
		selectOpt = document.createElement("select");
		selectOpt.setAttribute("id", "selectId3");
		selectOpt.setAttribute("onchange","saveOption(selectId3.value)");
		selectDiv.appendChild(selectOpt);
		createOption(opt);
		var fourthSelect=true;
		if(options!=null && arr.length>3 && fourthSelect==true){
			document.getElementById("selectId3").value=arr[3];
			saveOption(arr[3]);
			fourthSelect=false;
		}
	}
}




//Create option list.
function createOption(opt){
	for (var i = 1; i < data[opt].length; i++) {
    var optionItem = document.createElement("option");
    optionItem.setAttribute("value", data[opt][i]);
    optionItem.text = data[opt][i]	;
    selectOpt.appendChild(optionItem);

	}	
}

// it will remove select list when user changing select.
function removeOption(item){
	var removeSel=document.getElementsByTagName('select');
	var removeTitle=document.getElementsByTagName('h4');
	var len=removeSel.length;	
	if(item<len){
		for(var i=len-1; i>=item; i--){
			selectDiv.removeChild(removeSel[i]);	
			selectDiv.removeChild(removeTitle[i]);
		}
	}
}



//Store user select to arr.
function saveOption(item){
var sel=document.getElementsByTagName('select');
var len=sel.length;
var arrLength=choose.length;	
var removeData=document.getElementById('choose');
var removeImg=document.getElementById('image');
console.log(choose);
console.log(len);
console.log(arrLength);
if(item!=isNull){
	choose.push(item);
}
if(len==1 && arrLength>0){
	choose.splice(0,arrLength);
}
if(len==2 && arrLength>1){
	choose.splice(1,arrLength-1);
}
if(len==3 && arrLength>2){
	choose.splice(2,arrLength-2);
}


if(len==4 && arrLength>3){
	choose.splice(3,2,1);
	if (removeData!=null){
	  selectDiv.removeChild(removeData);
	   selectDiv.removeChild(removeImg);
	}
}

if(choose.length ==4)
{
	getResult();
}
else
{
	if (removeData!=null &&len!=4){
	  selectDiv.removeChild(removeData);
	  selectDiv.removeChild(removeImg);
	}
}
if(window.localStorage){
localStorage.setItem("choose", JSON.stringify(choose));
}
}



//get the final result
function getResult(){
 var selectTitle=document.createElement('p');
	selectTitle.setAttribute('id','choose');
	var selectTxt=document.createTextNode("Thank you for ordering from "+choose[0]+". You order is "+choose[1]+"  with "+choose[2]+" color and "+choose[3]);
	selectTitle.appendChild(selectTxt);
	selectDiv.appendChild(selectTitle);
	var picture=document.createElement('img');
	picture.setAttribute('id','image');
	picture.setAttribute('src',''+choose[2]+'.jpg');
	selectDiv.appendChild(picture);
	move();
}



// move the picture and final result
function move(){
	var size = (window.innerWidth - 300)/2;
	var data = document.getElementById("choose");   
	var pic = document.getElementById("image");  

	var position = 0;
	var id = setInterval(frame, 10);
	function frame() {
		if (position == 800) {
		clearInterval(id);
		} else {
    
		 position++; 
      data.style.right= position + 'px'; 
      data.style.left = position + 'px'; 
	  
      pic.style.right= position + 'px'; 
      pic.style.left = position + 'px'; 
    }
  }
}

//clear local storage 
function clearIt(){
	localStorage.removeItem('choose');
	location.reload();
}

//clear cookie
function clearCookie(){
	
	delCookie('user_name');
	location.reload();
}


function getCookieValue (offset) {
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1) { endstr = document.cookie.length; }
	return unescape(document.cookie.substring(offset, endstr));
}


// get cookie by name 
function getCookie (name) {
	var arg = name + "=";
	var x = arg.length;
	var y = document.cookie.length;
	var i = 0;
	while (i < y) {
		var j = i + x;
		if (document.cookie.substring(i, j) == arg) {
			return getCookieValue (j);
			}
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) break; 
		}
	return null;
}


// delete the cookie
function delCookie (name,path,domain) 
{
	if (getCookie(name)) {
		document.cookie = name + "=" +
		((path) ? "; path=" + path : "") +
		((domain) ? "; domain=" + domain : "") +
		"; expires=Thu, 01-Jan-70 00:00:01 GMT";
		}
}

// set the cookie 
function SetCookie (name,value,expires,path,domain,secure) {
  document.cookie = name + "=" + escape (value) +
    ((expires) ? "; expires=" + expires.toGMTString() : "") +
    ((path) ? "; path=" + path : "") +
    ((domain) ? "; domain=" + domain : "") +
    ((secure) ? "; secure" : "");
}


