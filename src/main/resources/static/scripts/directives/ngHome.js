/**
 *
 * @Author Rizki Mufrizal <mufrizalrizki@gmail.com>
 * @Since Jan 17, 2016
 * @Time 10:29:54 PM
 * @Encoding UTF-8
 * @Project Belajar-SpringDataRest-Hateos
 * @Package Expression package is undefined on line 8, column 15 in Templates/Other/javascript.js.
 *
 */

(function() {
  'use strict';
  angular.module('Belajar')
    .directive('ngHome', ngHome);

  function ngHome() {
    return {
      restrict: 'E',
      templateUrl: '../../templates/home.template.html'
    };
  }
})();
