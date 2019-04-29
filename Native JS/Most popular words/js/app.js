function popularWord(){
	var countValue = 0;
	var ul = document.getElementById('list');
	var str = (document.getElementById('myTextArea').value).replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	var finalString = str.replace(/\s+/g, ' ');
	var newArr = finalString.split(' ');
	var arr = newArr.map(function(text) {
		return text.toLowerCase();
	});
	var arr2=[];
	for(i in arr){
		if (arr2[arr[i]]!=undefined) {
				(arr2[arr[i]]++);
				delete arr[i];
		}
		else {
				(arr2[arr[i]]=1);
		}
	}
	arr.sort(function(a, b) {
		return arr2[b] - arr2[a];
	});
	for(k in arr){
		if(countValue<15 && arr2[arr[k]]>1){
			var ol = document.createElement('ol');
			ol.innerHTML = arr2[arr[k]] + ' ' + arr[k];
			ul.appendChild(ol);
		}
		countValue++;
	}
}
