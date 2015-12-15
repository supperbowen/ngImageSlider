/*global angular, _*/
(function (angular) {
    "use strict";
    angular.module('platform').directive('platformImageSlider', [
        function () {
            return {
                restrict: 'A',
                scope: {
                    visualSize: '@',
                    maxSize: '@',
                    rows: '@',
                    enableView: '@',
                    enableSelect: '@',
                    enableDelete: '@',
                    onDeleted: '&',
                    onChecked: '&'
                },
                templateUrl: 'platform-image-slider-dir.html',
                require: 'ngModel',
                link: function (scope, element, attrs, ngModel) {
                    var checkedItems = [];
                    scope.imageList = [];

                    scope.visualSize = scope.visualSize || 1;
                    scope.maxSize = scope.maxSize || 1;
                    scope.rows = scope.rows || 1;
                    scope.enableView = scope.enableView || true;
                    scope.enableSelect = scope.enableSelect || 1;
                    scope.enableDelete = scope.enableDelete || 1;

                    scope.onDeleted = scope.onDeleted || angular.noop;
                    scope.onSelect = scope.onSelect || angular.noop;

                    ngModel.$render = function $render() {
                        scope.imageList = ngModel.$viewValue;
                    };
                    scope.deleteItem = function deleteItem(item) {
                        if (!scope.enableDelete) {
                            return;
                        }
                        _.remove(scope.imageList, {_id: item._id});
                        scope.onDeleted.apply(this, arguments);
                    };

                    scope.checkImage = function checkImage(image) {
                        if (!scope.enableSelect) {
                            return;
                        }

                        var isChecked = _.find(checkedItems, {_id: image._id});
                        if (isChecked) {
                            _.remove(checkedItems, {_id: image._id});
                        } else {
                            if (checkedItems.length === scope.maxSize) {

                            } else {
                                checkedItems.push(image);
                            }
                        }
                        isChecked = !isChecked;
                        scope.onChecked.call(this, image, isChecked);
                    };

                    scope.checkImageChecked = function checkImageChecked(image) {
                        return _.find(checkedItems, {_id: image._id});
                    };

                    var sliderOptions = {
                        vis: scope.maxSize,
                        autoPlay: false
                    };
                    //call slider jquery plugin
                    element.find('ul.image-list').slide(sliderOptions);
                }
            };
        }
    ]);
}(angular));