/**
 * Created by Mok on 2019/4/27.
 */
!(function(){
	var menu_btn = document.getElementsByClassName('menu')[0];
	var class_list = document.getElementsByClassName('mobile-classify')[0];

	var catalog = document.getElementById('catalog');
	var catalogArea = document.getElementById('catalog-area');


	menu_btn.addEventListener('click',function () {
		// class_list.style.height = '3.6rem';
		// class_list.style.visibility = 'visible';
		// menu_btn.style.background = 'url("../images/close.png") no-repeat 0 0';
	})
	catalog.addEventListener('click', function(){
		if ( catalogArea.innerText !== '') {
			// catalogArea.classList.remove('show');
			return
		}

		xhr = new XMLHttpRequest();
		xhr.open('get', '/README.md');
		xhr.send('')
		xhr.onload = function(){
			typewriter(xhr.responseText)
			// catalogArea.innerText = xhr.responseText
			// console.log(xhr.responseText)
		}
	})

	/**
	 * 打字机效果
	 * */
	function typewriter(text){
		catalogArea.classList.add('show')
		for(var i=0;i<text.length;i++){
			setTimeout(function (index) {
				catalogArea.innerText += text[index]
			},50*i,i)
		}
	}
})();
