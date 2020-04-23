// replace text content for
/*
-- sun (click me to toggle nighttime)
-- moon (click me to toggle daytime)
-- trees (spruce)
-- crab (purple?)
-- salmon (coho)
-- rocks
-- sign (something about me)
onmouseover="replaceCloudText('')" onmouseleave="replaceCloudText('default')" 
 onmouseover="replaceCloudText('salmon')"
                        onmouseleave="replaceCloudText('default')"
function overlayOn() {
	document.getElementById('overlay1').style.display = 'block';
	document.getElementById('overlay1').style.zIndex = '5';
	console.log('overlay on running');
}

function overlayOff() {
	document.getElementById('overlay1').style.display = 'none';
	document.getElementById('overlay1').style.zIndex = '2';
	console.log('overlay off running');
}
*/

function expandCollapse(id) {
	let sectionToToggle = document.getElementById('project' + id);
	sectionToToggle.classList.toggle('hide');
	sectionToToggle.classList.toggle('show');

	let expandCollapseText = document.getElementById('showHide' + id);
	let topBorder = document.getElementById('h3border' + id);

	if (sectionToToggle.classList.contains('hide')) {
		expandCollapseText.style.borderTop = '3px solid #c8b488';
		expandCollapseText.style.marginBottom = '10%';
		expandCollapseText.textContent = 'click to expand';
	} else {
		expandCollapseText.style.marginBottom = '10%';
		expandCollapseText.textContent = 'click to collapse';
	}

	let paragraphsToToggle = document.querySelectorAll('.paragraph' + id);
	for (let x = 0; x < paragraphsToToggle.length; x++) {
		paragraphsToToggle[x].classList.toggle('hide');
		paragraphsToToggle[x].classList.toggle('show');
	}
	/*
	if 

	*/
}

function replaceCloudText(hoverItem) {
	let caption = document.getElementById('caption');
	if (hoverItem === 'sun') {
		caption.textContent = 'Click me to toggle night.';
	} else if (hoverItem === 'moon') {
		caption.textContent = 'Click me to toggle day.';
	} else if (hoverItem === 'trees') {
		caption.textContent = 'Sitka spruces near the ocean sometimes develop burls.';
	} else if (hoverItem === 'crab') {
		caption.textContent = 'Kalaloch’s 4 & Ruby Beaches have popular tidepools.';
	} else if (hoverItem === 'salmon') {
		caption.textContent = 'Between 5,000 and 18,000 coho return each year to Elwha.';
	} else if (hoverItem === 'rocks') {
		caption.textContent = 'The oldest rocks date back 50 to 60 million years.';
	} else if (hoverItem === 'sign') {
		caption.textContent = 'All facts from Wikipedia or official ONP website.';
	} else {
		caption.textContent = 'All images, flora, & fauna from Olympic National Park';
	}
}

function toggleDayNight() {
	let day = document.getElementById('day');
	let night = document.getElementById('night');
	let stars = document.getElementById('stars');
	let trees = document.getElementById('trees');
	let caption = document.getElementById('caption');
	day.classList.toggle('hide');
	day.classList.toggle('show');
	trees.classList.toggle('treesDay');
	trees.classList.toggle('treesNight');
	night.classList.toggle('show');
	night.classList.toggle('hide');
	caption.classList.toggle('captionNight');
	caption.classList.toggle('captionDay');
	if (day.classList.contains('show')) {
		document.getElementById('sky').style.backgroundColor = '#57c3ef';
	}
	if (night.classList.contains('show')) {
		document.getElementById('sky').style.backgroundColor = '#002244';
	}
}
