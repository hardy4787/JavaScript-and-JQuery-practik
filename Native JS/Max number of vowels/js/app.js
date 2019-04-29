function maxWord(){
var str = (document.getElementById('myTextArea').value).replace(/[.,\/#!$%\^&\*;:{}=\_`~()]/g,"");
var finalString = str.replace(/\s+/g, ' ');
var words = finalString.split(' ');
var wordLength = [];
words.forEach(word => wordLength.push([countLetter(word), word]));
var maxWord = wordLength.sort((a, b) => b[0]-a[0]).slice(0, 1)[0][1];
var span = document.getElementById("crusial-word");
span.style.backgroundColor = '#fffdd0';
span.innerHTML = maxWord;
}

function countLetter(str){
	return str.split("").filter(c => "іїяаоуеюеєи".includes(c)).length;
}