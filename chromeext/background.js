// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab) {
	if (changeInfo.status == "complete"){
		current_url = tab.url;
		all_urls = localStorage.keys();

		for (var i = 0; i < all_urls.length; i++){
			url = all_urls[i];

			if(current_url.indexOf(url)>=0){
				sendPost(url, localStorage[url]);
				console.log(chrome.windows.create({url : 'countdown.html', type : "detached_panel", height : 200, width : 270}));
			}
		}
	}
});

chrome.tabs.onCreated.addListener(function(tabID, changeInfo, tab) {
});

function sendPost(url, arr) {
	array = arr.split(',');
	console.log(arr);
	for (var i =0; i< array.length; i+=3){
		name = array[i];
		number = array[i+1];
		message = array[i+2];
		$.post('http://socialsavior.herokuapp.com/text', {name: name, number: number, message : message}, function(data){
			console.log(data);
		});
	}
}

Object.prototype.keys = function ()
{
  var keys = [];
  for(var i in this) if (this.hasOwnProperty(i))
  {
    keys.push(i);
  }
  return keys;
}