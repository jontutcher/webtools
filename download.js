(function() {
	var source = document.documentElement.innerHTML;
	var re = new RegExp('mp3:"(.*?)"','g');
	while((result = re.exec(source)) !== null) {
		console.log(result[1]);
		window.open(result[1]);
	};
})()