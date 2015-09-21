"use strict";

var Statistics = function() {
  var publik = {};

  var sum = function(arr) {
    var s = 0;
    for (var i = 0, len = arr.length; i < len; i++) {
      s += arr[i];
    };
    return s;
  };

  var compareNumeric = function(a, b) {
    return a - b;
  };


  var checkArr = function(arr) {
    if (Object.prototype.toString.call(arr) !== "[object Array]" || arr.length == 0) {
      throw new Error();
    }
  };

  publik.mean = function(arr) {
    checkArr(arr);
    return sum(arr) / arr.length;
  };

  publik.median = function(arr) {
    checkArr(arr);
    var srtd = arr.concat().sort(compareNumeric); // 'concat()' creates a copy, so the original array is not mutated
    var lenHalf = Math.floor(srtd.length / 2);
    switch (srtd.length % 2) {
      case 1:
        return srtd[lenHalf];
      case 0:
        return (srtd[lenHalf - 1] + srtd[lenHalf]) / 2;
    }
  };

  publik.variance = function(arr) {
    checkArr(arr);
    var mn = publik.mean(arr);
    var sqr = function(x) {
      return x * x
    }
    var acc = 0;
    for (var i = arr.length - 1; i >= 0; i--) {
      acc += sqr(arr[i] - mn);
    };
    return acc / arr.length;
  };

  publik.deviation = function(arr) {
    return Math.sqrt(publik.variance(arr));
  };

  /*
   * Unfortunately Array.map is about 10 times slower than the for-loop.
   * One solution would be to implement your own map, but that involves
   * some extra effort and does not really improve readability.
   */
  // var map = function (arr, fn) {
  //   for (var i = 0, len = arr.length; i < len; i++) {
  //     arr[i] = fn(arr[i]);
  //   };
  //   return map;
  // };

  // publik.variance = function(arr) {
  //   checkArr(arr);
  //   var mn = publik.mean(arr);
  //   var sqr = function(x) {
  //     return x * x
  //   }
  //   var arrCopy = arr.concat();
  //   var fn = function(x) {
  //     return sqr(x - mn);
  //   };
  //   return sum(map(arrCopy, fn)) / arr.length;
  // };

  return publik;
};