var countryS;
var cityS;
var results;
var file = 'world.php';
var country = "?country="
var city = "&context="


window.onload = function() {
    countryS = document.getElementById("cntry");
    countryS.addEventListener("click", BtnHandler);
	cityS = document.getElementById("city");
    cityS.addEventListener("click", cityHandler);
    bxSEARCH = document.getElementById("country");
    results = document.querySelector("#result");
}

function siteName(){
	let ctry = country+bxSEARCH.value.trim();
	let site = file+ctry
	return site;	
}

function BtnHandler(b){
    b.preventDefault();
	let site = siteName();
    fetch(site).then(response => response.text()).then(data => results.innerHTML = data);
}


function cityHandler(b){
	b.preventDefault();
	citySite = siteName()+city+"cities";
	fetch(citySite).then(response => response.text()).then(data => results.innerHTML = data);
	
}
