carousel.controller("frameController", function($scope) {

    $scope.currentFrame = 0;

    // Sets the iFrame to a given URL from the list
    $scope.setFrame = function(frameIndex) {
        document.getElementById("frame").src = $scope.frames[frameIndex];
    };

    // Changes the iFrame to the next URL in the list
    $scope.$on("nextFrame", function() {
        if ($scope.currentFrame != $scope.frames.length - 1) {
            $scope.currentFrame += 1;
        }
        else {
            $scope.currentFrame = 0;
        }
        $scope.setFrame($scope.currentFrame);
    });

    // Changes the iFrame to the previous URL in the list
    $scope.$on("previousFrame", function() {
        if ($scope.currentFrame !== 0) {
            $scope.currentFrame -= 1;
        }
        else {
            $scope.currentFrame = $scope.frames.length - 1;
        }
        $scope.setFrame($scope.currentFrame);
    });

    // Resets the iFrame to the first URL in the list
    $scope.$on("resetFrame", function() {
        $scope.currentFrame = 0;
        $scope.setFrame($scope.currentFrame);
    });

    // Set the first iframe on load
    $scope.setFrame($scope.currentFrame);

});