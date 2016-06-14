var elem=document.createElement("output");
elem.value= "Le jardinier marche vers le potager";
document.body.appendChild(elem);

if(window.Worker){
	var worker=new Worker("worker.js");
	worker.onmessage=function(event){
		elem.value=event.data;

	};
}else{
	alert("Désolé votre navigateur ne supporte pas les workers !");
}