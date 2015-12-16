# ngImageSlider
for AngularJS
-------------

image slide for angular
encapsulate the opensoure slide controler of 'SuperSlide'

Usage
------
    js:
      var module = angular.module('demoApp', ['platform']);
      module.controller('demoController', ['$scope', function ($scope) {
            $scope.images = [
                {id: 1, path: './images/angular.jpg', description: 'picture 1'},
                {id: 1, path: 'images/baidu.jpg', description: 'picture 2'},
                {id: 1, path: 'images/barcode.jpg', description: 'picture 3'},
                {id: 1, path: 'images/chrome.jpg', description: 'picture 4'},
                {id: 1, path: 'images/cloud.jpg', description: 'picture 5'},
                {id: 1, path: 'images/fire.jpg', description: 'picture 6'},
                {id: 1, path: 'images/header-bar.png', description: 'picture 7'},
                {id: 1, path: 'images/loading.gif', description: 'picture 8'},
                {id: 1, path: 'images/supperbowen.jpg', description: 'picture 9'},
                {id: 1, path: 'images/twitter.jpg', description: 'picture 10'},
             ];
      }])
    html:
      <div data-ng-controller="demoController">
          <div data-platform-image-slider data-ng-model="images" max-size="5"></div>
      </div>   
        
 paramters:
 ------
 max-size : number of visiable images
 
 
 --------
 We will try to add more fecture on the directive later on, thank you!
 Bowen Liang
 2012-12-16                   
