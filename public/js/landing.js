// Random backround image function
function backgroundFunction(author = 'none') {
	console.log(author); 
	var newBgImg;
    
	if (author === 'Drake')
		newBgImg = 'https://media4.giphy.com/media/xTiTnxatmQVapUTMDC/giphy.gif';
	else if (author === 'Kanye West')
		newBgImg = 'https://media.giphy.com/media/WgZ0ptLocPiq4/giphy.gif';
	else if (author === 'Chris Brown')
		newBgImg = 'https://media.giphy.com/media/S2k94AE9N2Dza/giphy.gif';
	else if (author === 'Jay-Z')
		newBgImg = 'https://media.giphy.com/media/26BRFTI2otNMxbxFm/giphy.gif';
	else if (author === 'Post Malone')
		newBgImg = 'https://media.giphy.com/media/l1KulDCUYbZJLbrIQ/giphy.gif';	
	else
		newBgImg = 'https://media.giphy.com/media/l0MYz6wr2YZQ1fjuo/giphy.gif';

    document.getElementById("myImg").src = newBgImg;
}

// // on page load run the function background random
// window.onload = function () {
//     backgroundFunction();
// };
