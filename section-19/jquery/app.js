const elHeading = $("h1");

$("html").keydown(function (e) { 
	elHeading.text(`Key ${e.key} pressed!`);
});