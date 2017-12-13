
var menuVisible = false;
var playVisible = false;
handleMenuVisibility(menuVisible);
function showMenu(){
	menuVisible =! menuVisible;
	handleMenuVisibility(menuVisible);
}

document.body.addEventListener('click', function(e) {
		 if ( (" " + e.target.className + " ").replace(/[\n\t]/g, " ").indexOf(" C00-nav-item ") > -1 ) {
			 menuVisible =! menuVisible;
			 handleMenuVisibility(menuVisible);
			 console.log('you clicked',e.target.href);
			 menuNavigation(e.target.href);
		 }
});
function menuNavigation(arg){
		window.location.href = arg;
}
function handleMenuVisibility(arg){
	if(menuVisible){
		document.getElementById('C00-nav-responsive-options').style.display = "block";
	}else{
		document.getElementById('C00-nav-responsive-options').style.display = "none";
	}
}
function playHover(obj){
	playVisible = ! playVisible;
	console.log('play hover ....');

	if(playVisible)
	{
		obj.style.color="#444";
	}else{
		obj.style.color="#ddd";
	}
}
