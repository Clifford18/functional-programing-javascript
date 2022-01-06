var me = 'John Clifford';

function greetMe() {
	console.log('Hello, ' + me + '!');
}

module.exports = {greetMe};

function sendRequest() {
	var requestID = '123';
	$.ajax({
		url: '/myUrl',
		success: function (response) {
			alert('Request ' + requestID + ' returned');
		}
	});
}

//resource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
