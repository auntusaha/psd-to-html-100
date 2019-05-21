var tabButtons=document.querySelectorAll(".tab-container .button-continer button");
var tabPanles=document.querySelectorAll(".tab-container .tab-panel");

function showPanel(panelIndex,colorCode) {
	tabButtons.forEach(function (node) {
		node.style.backgroundColor="";
		node.style.color="";
	});
	tabButtons[panelIndex].style.backgroundColor=colorCode;
	tabButtons[panelIndex].style.color="white";
	tabPanles.forEach(function (node) {
		node.style.display="none";
	});
	tabPanles[panelIndex].style.display="block";
	tabPanles[panelIndex].style.backgroundColor=colorCode;

}
showPanel(3,"tomato");