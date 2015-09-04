/* global twttr */
/* global angular */
'use strict';

/**
 * @ngdoc directive
 * @name ngTweetCard:tweetCard
 * @description
 * # tweetCard
 */
angular.module('ngTweetCard')
  .directive('tweetCard',function () {
    return {
      transclude:true,
      template: '<ng-transclude></ng-transclude>',
      restrict: 'AEC',
      controller:function($scope, $element, $attrs){
       twttr.widgets.createTweet(
         ($attrs.tweetId?$attrs.tweetId:$attrs.tweetCard),
         $element[0],
         {theme:$attrs.theme?$attrs.theme:'light'})
         .then(function(){
          $element.find('ng-transclude').remove();
        });
      }
    };
  });
