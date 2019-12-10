window.onload = play();
document.getElementById('#logo').style.color = '#00FF00';
function play() {
	var l = Snap('#logo');
	var p = l.select('path');
    l.clear();
	l.append(p);
	p.attr();

	setTimeout( function() {
		// modify this one line below, and see the result !
		var logoTitle = 'M4CH1N4';
		var logoRandom = '';
		var logoTitleContainer = l.text(0, '98%', '');
		
		var possible = "-+*/|}{[]~\\\":;?/.><=+-_)(*&^%$#@!)}";
		
		
		logoTitleContainer.attr({
			fontSize: 180,
			fontFamily: 'arial',
			fontWeight: '500',
			fill:"white",
            
			
		});

		function generateRandomTitle(i, logoRandom) {
			setTimeout( function() {
				logoTitleContainer.attr({ text: logoRandom });
			}, i*70 );
		}

		for( var i=0; i < logoTitle.length+1; i++ ) {
			logoRandom = logoTitle.substr(0, i);
			for( var j=i; j < logoTitle.length; j++ ) { 
				logoRandom += possible.charAt(Math.floor(Math.random() * possible.length)); 
			}
			generateRandomTitle(i, logoRandom);
			logoRandom = '';
		}

	}, 450 );

}