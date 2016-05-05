var app = angular.module("MyApp", []);// создали переменную

app.controller('MyPlayer', function($scope){
	$scope.playing = false;
	$scope.player = document.createElement('audio');//для аудио
	//$scope.player = document.createElement('video');//для видео
	$scope.player.src = 'media/alekseev.mp3'//для аудио
	//$scope.player.src = 'media/Best UFO.mp4'//для видео
	document.body.appendChild($scope.player);
	$scope.play = function(){
		$scope.player.play();
		$scope.playing = true;
	};

	$scope.stop = function(){
		$scope.player.pause();
		$scope.playing = false;
	};

	$scope.player.addEventListener('ended',function(){
		$scope.$apply(function(){
			$scope.stop()
	});

});


});