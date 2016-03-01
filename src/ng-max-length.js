//
// Directive: ngMaxlength
// ---
// This directive indicates the remaining amount of characters when an ng-maxlength attribute is present

(function() {
    'use strict';

    angular.module('fmNgMaxLength', [])
        .directive('ngMaxlength', function () {
            return {
                restrict: 'A',
                require: 'ngModel',
                link: function ($scope, element, attrs) {

                    var modelWatcher;

                    function init() {

                        if (!attrs.ngMaxlength) {
                            // No maxlength is set, abort execution.
                            return;
                        }

                        // Watch $scope.ngModel for changes
                        modelWatcher = $scope.$watch('ngModel', function (nv, ov) {
                            if (nv) {
                                $scope.remainingChars = parseInt(attrs.ngMaxlength) - nv.length;
                            } else {
                                if (ov && ov.length > 1) {
                                    $scope.remainingChars = 0;
                                } else {
                                    $scope.remainingChars = parseInt(attrs.ngMaxlength);
                                }
                            }
                        });
                    }

                    init();

                    // $scope events
                    $scope.$on('$destroy', function () {
                        if (Function.prototype.isPrototypeOf(modelWatcher)) {
                            modelWatcher();
                        }
                    });
                }
            };
        });
})();
