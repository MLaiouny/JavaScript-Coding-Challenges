var button = document.querySelector('button');

var observer = {
	next: function(value) {
  	console.log(value);
  },
  error: function(error) {
  	console.log(error);
  },
  complete: function() {
  	console.log('completed');
  }
};

//RX.Observable.fromEvent(button, 'click')
var subscription = RX.Observable.create(function(obs){
	//obs.next('A Value);
  //obs.error('Error);
  //setTimeout(function() {
  // obs.complete();
  //obs.next('A second value);
  //}, 2000);
  button.onclick = function(event) {
  	obs.next(event);
  }
  })
  	.subscribe(observer);
   setTimeout(function() {
   	subscription.unsubscribe();
   }, 5000);
   