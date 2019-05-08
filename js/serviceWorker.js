/**
 * Created by 15755 on 2019/5/8.
 */
!(function () {
	self.addEventListener('install', function(event) {
		/* 安装后... */
		// cache.addAll();
	});
	// cache.addAll：把缓存文件加进来，如a.css,b.js
	// });
	self.addEventListener('activate', function(event) {
		/* 激活后... */ // caches.delete ：更新缓存文件
	});
	self.addEventListener('fetch', function(event) {
		/* 请求资源后... */ // cache.put 拦截请求直接返回缓存数据
	});
})();