/**
 * # Infinite Scroll
 *
 * This directive enables infinite scrolling.
 *
 * ```html
 * <script type="text/javascript">
 * //some where in a controller
 * $scope.infiniteScroll = function() {
 *   //add some more visible data
 * }
 * ```
 *
 * @todo: need to test and think about performance will large data sets
 *
 * @module nag.infiniteScroll
 * @ngdirective nagInfiniteScroll
 *
 * @nghtmlattribute {function} nag-infinite-scroll Function to call when the element in near the bottom of scrolling
 */
angular.module('nag.infiniteScroll', [])
.directive('nagInfiniteScroll', [function() {
  return function(scope, element, attr) {
    var rawElement = element[0];
    
    element.bind('scroll', function() {
      if (rawElement.scrollTop + rawElement.offsetHeight >= rawElement.scrollHeight) {
        scope.$apply(attr.nagInfiniteScroll);
      }
    });
  };
}]);
