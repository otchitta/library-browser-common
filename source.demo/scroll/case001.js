/* ================================================================ */
/* Example001 JavaScript Definations                                */
/* ================================================================ */
(function() {
	function adjust() {
		const inputW = document.getElementById('inputW');
		const inputH = document.getElementById('inputH');
		const frameH = document.getElementById('frameH');
		const frameB = document.getElementById('frameB');
		frameH.style.width  = inputW.value + 'px';
		frameB.style.width  = inputW.value + 'px';
		frameB.style.height = inputH.value + 'px';
		frameB.dispatchEvent(new Event('update', { bubbles: true }));
	}

	document.addEventListener('DOMContentLoaded', () => {
		const inputW = document.getElementById('inputW');
		const inputH = document.getElementById('inputH');
		inputW.addEventListener('change', adjust);
		inputH.addEventListener('change', adjust);
		adjust();
	});
})();
