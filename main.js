document.addEventListener("WebComponentsReady", function() {
//web components ready waits until everything is available

var myList = [  "/carousel/images/9.png",
				"/carousel/images/1.jpg",
	            "/carousel/images/2.jpg",
	            "/carousel/images/3.jpg",
	            "/carousel/images/4.jpg",
	            "/carousel/images/5.jpg",
	            "/carousel/images/6.jpg",
	            "/carousel/images/7.jpg",
	            "/carousel/images/8.jpg",
	            "/carousel/images/9.png" ];

var carousel = document.getElementById('mycarousel');
//carousel.imglist is from polymer element
carousel.imgList = myList;

});
