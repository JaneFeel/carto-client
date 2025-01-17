/*!
 * CARTO.js https://carto.com/
 * Version: 4.2.2
 * 
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["carto"] = factory();
	else
		root["carto"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 150);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {}

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return _;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Backbone.js 1.2.3

//     (c) 2010-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Backbone may be freely distributed under the MIT license.
//     For all details and documentation:
//     http://backbonejs.org

(function(factory) {

  // Establish the root object, `window` (`self`) in the browser, or `global` on the server.
  // We use `self` instead of `window` for `WebWorker` support.
  var root = (typeof self == 'object' && self.self == self && self) ||
            (typeof global == 'object' && global.global == global && global);

  // Set up Backbone appropriately for the environment. Start with AMD.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(17), exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function(_, $, exports) {
      // Export global even in AMD case in case this script is loaded with
      // others that may still expect a global Backbone.
      root.Backbone = factory(root, exports, _, $);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));

  // Next for Node.js or CommonJS. jQuery may not be needed as a module.
  } else { var _, $; }

}(function(root, Backbone, _, $) {

  // Initial Setup
  // -------------

  // Save the previous value of the `Backbone` variable, so that it can be
  // restored later on, if `noConflict` is used.
  var previousBackbone = root.Backbone;

  // Create a local reference to a common array method we'll want to use later.
  var slice = Array.prototype.slice;

  // Current version of the library. Keep in sync with `package.json`.
  Backbone.VERSION = '1.2.3';

  // For Backbone's purposes, jQuery, Zepto, Ender, or My Library (kidding) owns
  // the `$` variable.
  Backbone.$ = $;

  // Runs Backbone.js in *noConflict* mode, returning the `Backbone` variable
  // to its previous owner. Returns a reference to this Backbone object.
  Backbone.noConflict = function() {
    root.Backbone = previousBackbone;
    return this;
  };

  // Turn on `emulateHTTP` to support legacy HTTP servers. Setting this option
  // will fake `"PATCH"`, `"PUT"` and `"DELETE"` requests via the `_method` parameter and
  // set a `X-Http-Method-Override` header.
  Backbone.emulateHTTP = false;

  // Turn on `emulateJSON` to support legacy servers that can't deal with direct
  // `application/json` requests ... this will encode the body as
  // `application/x-www-form-urlencoded` instead and will send the model in a
  // form param named `model`.
  Backbone.emulateJSON = false;

  // Proxy Backbone class methods to Underscore functions, wrapping the model's
  // `attributes` object or collection's `models` array behind the scenes.
  //
  // collection.filter(function(model) { return model.get('age') > 10 });
  // collection.each(this.addView);
  //
  // `Function#apply` can be slow so we use the method's arg count, if we know it.
  var addMethod = function(length, method, attribute) {
    switch (length) {
      case 1: return function() {
        return _[method](this[attribute]);
      };
      case 2: return function(value) {
        return _[method](this[attribute], value);
      };
      case 3: return function(iteratee, context) {
        return _[method](this[attribute], cb(iteratee, this), context);
      };
      case 4: return function(iteratee, defaultVal, context) {
        return _[method](this[attribute], cb(iteratee, this), defaultVal, context);
      };
      default: return function() {
        var args = slice.call(arguments);
        args.unshift(this[attribute]);
        return _[method].apply(_, args);
      };
    }
  };
  var addUnderscoreMethods = function(Class, methods, attribute) {
    _.each(methods, function(length, method) {
      if (_[method]) Class.prototype[method] = addMethod(length, method, attribute);
    });
  };

  // Support `collection.sortBy('attr')` and `collection.findWhere({id: 1})`.
  var cb = function(iteratee, instance) {
    if (_.isFunction(iteratee)) return iteratee;
    if (_.isObject(iteratee) && !instance._isModel(iteratee)) return modelMatcher(iteratee);
    if (_.isString(iteratee)) return function(model) { return model.get(iteratee); };
    return iteratee;
  };
  var modelMatcher = function(attrs) {
    var matcher = _.matches(attrs);
    return function(model) {
      return matcher(model.attributes);
    };
  };

  // Backbone.Events
  // ---------------

  // A module that can be mixed in to *any object* in order to provide it with
  // a custom event channel. You may bind a callback to an event with `on` or
  // remove with `off`; `trigger`-ing an event fires all callbacks in
  // succession.
  //
  //     var object = {};
  //     _.extend(object, Backbone.Events);
  //     object.on('expand', function(){ alert('expanded'); });
  //     object.trigger('expand');
  //
  var Events = Backbone.Events = {};

  // Regular expression used to split event strings.
  var eventSplitter = /\s+/;

  // Iterates over the standard `event, callback` (as well as the fancy multiple
  // space-separated events `"change blur", callback` and jQuery-style event
  // maps `{event: callback}`).
  var eventsApi = function(iteratee, events, name, callback, opts) {
    var i = 0, names;
    if (name && typeof name === 'object') {
      // Handle event maps.
      if (callback !== void 0 && 'context' in opts && opts.context === void 0) opts.context = callback;
      for (names = _.keys(name); i < names.length ; i++) {
        events = eventsApi(iteratee, events, names[i], name[names[i]], opts);
      }
    } else if (name && eventSplitter.test(name)) {
      // Handle space separated event names by delegating them individually.
      for (names = name.split(eventSplitter); i < names.length; i++) {
        events = iteratee(events, names[i], callback, opts);
      }
    } else {
      // Finally, standard events.
      events = iteratee(events, name, callback, opts);
    }
    return events;
  };

  // Bind an event to a `callback` function. Passing `"all"` will bind
  // the callback to all events fired.
  Events.on = function(name, callback, context) {
    return internalOn(this, name, callback, context);
  };

  // Guard the `listening` argument from the public API.
  var internalOn = function(obj, name, callback, context, listening) {
    obj._events = eventsApi(onApi, obj._events || {}, name, callback, {
        context: context,
        ctx: obj,
        listening: listening
    });

    if (listening) {
      var listeners = obj._listeners || (obj._listeners = {});
      listeners[listening.id] = listening;
    }

    return obj;
  };

  // Inversion-of-control versions of `on`. Tell *this* object to listen to
  // an event in another object... keeping track of what it's listening to
  // for easier unbinding later.
  Events.listenTo =  function(obj, name, callback) {
    if (!obj) return this;
    var id = obj._listenId || (obj._listenId = _.uniqueId('l'));
    var listeningTo = this._listeningTo || (this._listeningTo = {});
    var listening = listeningTo[id];

    // This object is not listening to any other events on `obj` yet.
    // Setup the necessary references to track the listening callbacks.
    if (!listening) {
      var thisId = this._listenId || (this._listenId = _.uniqueId('l'));
      listening = listeningTo[id] = {obj: obj, objId: id, id: thisId, listeningTo: listeningTo, count: 0};
    }

    // Bind callbacks on obj, and keep track of them on listening.
    internalOn(obj, name, callback, this, listening);
    return this;
  };

  // The reducing API that adds a callback to the `events` object.
  var onApi = function(events, name, callback, options) {
    if (callback) {
      var handlers = events[name] || (events[name] = []);
      var context = options.context, ctx = options.ctx, listening = options.listening;
      if (listening) listening.count++;

      handlers.push({ callback: callback, context: context, ctx: context || ctx, listening: listening });
    }
    return events;
  };

  // Remove one or many callbacks. If `context` is null, removes all
  // callbacks with that function. If `callback` is null, removes all
  // callbacks for the event. If `name` is null, removes all bound
  // callbacks for all events.
  Events.off =  function(name, callback, context) {
    if (!this._events) return this;
    this._events = eventsApi(offApi, this._events, name, callback, {
        context: context,
        listeners: this._listeners
    });
    return this;
  };

  // Tell this object to stop listening to either specific events ... or
  // to every object it's currently listening to.
  Events.stopListening =  function(obj, name, callback) {
    var listeningTo = this._listeningTo;
    if (!listeningTo) return this;

    var ids = obj ? [obj._listenId] : _.keys(listeningTo);

    for (var i = 0; i < ids.length; i++) {
      var listening = listeningTo[ids[i]];

      // If listening doesn't exist, this object is not currently
      // listening to obj. Break out early.
      if (!listening) break;

      listening.obj.off(name, callback, this);
    }
    if (_.isEmpty(listeningTo)) this._listeningTo = void 0;

    return this;
  };

  // The reducing API that removes a callback from the `events` object.
  var offApi = function(events, name, callback, options) {
    if (!events) return;

    var i = 0, listening;
    var context = options.context, listeners = options.listeners;

    // Delete all events listeners and "drop" events.
    if (!name && !callback && !context) {
      var ids = _.keys(listeners);
      for (; i < ids.length; i++) {
        listening = listeners[ids[i]];
        delete listeners[listening.id];
        delete listening.listeningTo[listening.objId];
      }
      return;
    }

    var names = name ? [name] : _.keys(events);
    for (; i < names.length; i++) {
      name = names[i];
      var handlers = events[name];

      // Bail out if there are no events stored.
      if (!handlers) break;

      // Replace events if there are any remaining.  Otherwise, clean up.
      var remaining = [];
      for (var j = 0; j < handlers.length; j++) {
        var handler = handlers[j];
        if (
          callback && callback !== handler.callback &&
            callback !== handler.callback._callback ||
              context && context !== handler.context
        ) {
          remaining.push(handler);
        } else {
          listening = handler.listening;
          if (listening && --listening.count === 0) {
            delete listeners[listening.id];
            delete listening.listeningTo[listening.objId];
          }
        }
      }

      // Update tail event if the list has any events.  Otherwise, clean up.
      if (remaining.length) {
        events[name] = remaining;
      } else {
        delete events[name];
      }
    }
    if (_.size(events)) return events;
  };

  // Bind an event to only be triggered a single time. After the first time
  // the callback is invoked, its listener will be removed. If multiple events
  // are passed in using the space-separated syntax, the handler will fire
  // once for each event, not once for a combination of all events.
  Events.once =  function(name, callback, context) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.off, this));
    return this.on(events, void 0, context);
  };

  // Inversion-of-control versions of `once`.
  Events.listenToOnce =  function(obj, name, callback) {
    // Map the event into a `{event: once}` object.
    var events = eventsApi(onceMap, {}, name, callback, _.bind(this.stopListening, this, obj));
    return this.listenTo(obj, events);
  };

  // Reduces the event callbacks into a map of `{event: onceWrapper}`.
  // `offer` unbinds the `onceWrapper` after it has been called.
  var onceMap = function(map, name, callback, offer) {
    if (callback) {
      var once = map[name] = _.once(function() {
        offer(name, once);
        callback.apply(this, arguments);
      });
      once._callback = callback;
    }
    return map;
  };

  // Trigger one or many events, firing all bound callbacks. Callbacks are
  // passed the same arguments as `trigger` is, apart from the event name
  // (unless you're listening on `"all"`, which will cause your callback to
  // receive the true name of the event as the first argument).
  Events.trigger =  function(name) {
    if (!this._events) return this;

    var length = Math.max(0, arguments.length - 1);
    var args = Array(length);
    for (var i = 0; i < length; i++) args[i] = arguments[i + 1];

    eventsApi(triggerApi, this._events, name, void 0, args);
    return this;
  };

  // Handles triggering the appropriate event callbacks.
  var triggerApi = function(objEvents, name, cb, args) {
    if (objEvents) {
      var events = objEvents[name];
      var allEvents = objEvents.all;
      if (events && allEvents) allEvents = allEvents.slice();
      if (events) triggerEvents(events, args);
      if (allEvents) triggerEvents(allEvents, [name].concat(args));
    }
    return objEvents;
  };

  // A difficult-to-believe, but optimized internal dispatch function for
  // triggering events. Tries to keep the usual cases speedy (most internal
  // Backbone events have 3 arguments).
  var triggerEvents = function(events, args) {
    var ev, i = -1, l = events.length, a1 = args[0], a2 = args[1], a3 = args[2];
    switch (args.length) {
      case 0: while (++i < l) (ev = events[i]).callback.call(ev.ctx); return;
      case 1: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1); return;
      case 2: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2); return;
      case 3: while (++i < l) (ev = events[i]).callback.call(ev.ctx, a1, a2, a3); return;
      default: while (++i < l) (ev = events[i]).callback.apply(ev.ctx, args); return;
    }
  };

  // Aliases for backwards compatibility.
  Events.bind   = Events.on;
  Events.unbind = Events.off;

  // Allow the `Backbone` object to serve as a global event bus, for folks who
  // want global "pubsub" in a convenient place.
  _.extend(Backbone, Events);

  // Backbone.Model
  // --------------

  // Backbone **Models** are the basic data object in the framework --
  // frequently representing a row in a table in a database on your server.
  // A discrete chunk of data and a bunch of useful, related methods for
  // performing computations and transformations on that data.

  // Create a new model with the specified attributes. A client id (`cid`)
  // is automatically generated and assigned for you.
  var Model = Backbone.Model = function(attributes, options) {
    var attrs = attributes || {};
    options || (options = {});
    this.cid = _.uniqueId(this.cidPrefix);
    this.attributes = {};
    if (options.collection) this.collection = options.collection;
    if (options.parse) attrs = this.parse(attrs, options) || {};
    attrs = _.defaults({}, attrs, _.result(this, 'defaults'));
    this.set(attrs, options);
    this.changed = {};
    this.initialize.apply(this, arguments);
  };

  // Attach all inheritable methods to the Model prototype.
  _.extend(Model.prototype, Events, {

    // A hash of attributes whose current and previous value differ.
    changed: null,

    // The value returned during the last failed validation.
    validationError: null,

    // The default name for the JSON `id` attribute is `"id"`. MongoDB and
    // CouchDB users may want to set this to `"_id"`.
    idAttribute: 'id',

    // The prefix is used to create the client id which is used to identify models locally.
    // You may want to override this if you're experiencing name clashes with model ids.
    cidPrefix: 'c',

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Return a copy of the model's `attributes` object.
    toJSON: function(options) {
      return _.clone(this.attributes);
    },

    // Proxy `Backbone.sync` by default -- but override this if you need
    // custom syncing semantics for *this* particular model.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Get the value of an attribute.
    get: function(attr) {
      return this.attributes[attr];
    },

    // Get the HTML-escaped value of an attribute.
    escape: function(attr) {
      return _.escape(this.get(attr));
    },

    // Returns `true` if the attribute contains a value that is not null
    // or undefined.
    has: function(attr) {
      return this.get(attr) != null;
    },

    // Special-cased proxy to underscore's `_.matches` method.
    matches: function(attrs) {
      return !!_.iteratee(attrs, this)(this.attributes);
    },

    // Set a hash of model attributes on the object, firing `"change"`. This is
    // the core primitive operation of a model, updating the data and notifying
    // anyone who needs to know about the change in state. The heart of the beast.
    set: function(key, val, options) {
      if (key == null) return this;

      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options || (options = {});

      // Run validation.
      if (!this._validate(attrs, options)) return false;

      // Extract attributes and options.
      var unset      = options.unset;
      var silent     = options.silent;
      var changes    = [];
      var changing   = this._changing;
      this._changing = true;

      if (!changing) {
        this._previousAttributes = _.clone(this.attributes);
        this.changed = {};
      }

      var current = this.attributes;
      var changed = this.changed;
      var prev    = this._previousAttributes;

      // For each `set` attribute, update or delete the current value.
      for (var attr in attrs) {
        val = attrs[attr];
        if (!_.isEqual(current[attr], val)) changes.push(attr);
        if (!_.isEqual(prev[attr], val)) {
          changed[attr] = val;
        } else {
          delete changed[attr];
        }
        unset ? delete current[attr] : current[attr] = val;
      }

      // Update the `id`.
      this.id = this.get(this.idAttribute);

      // Trigger all relevant attribute changes.
      if (!silent) {
        if (changes.length) this._pending = options;
        for (var i = 0; i < changes.length; i++) {
          this.trigger('change:' + changes[i], this, current[changes[i]], options);
        }
      }

      // You might be wondering why there's a `while` loop here. Changes can
      // be recursively nested within `"change"` events.
      if (changing) return this;
      if (!silent) {
        while (this._pending) {
          options = this._pending;
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },

    // Remove an attribute from the model, firing `"change"`. `unset` is a noop
    // if the attribute doesn't exist.
    unset: function(attr, options) {
      return this.set(attr, void 0, _.extend({}, options, {unset: true}));
    },

    // Clear all attributes on the model, firing `"change"`.
    clear: function(options) {
      var attrs = {};
      for (var key in this.attributes) attrs[key] = void 0;
      return this.set(attrs, _.extend({}, options, {unset: true}));
    },

    // Determine if the model has changed since the last `"change"` event.
    // If you specify an attribute name, determine if that attribute has changed.
    hasChanged: function(attr) {
      if (attr == null) return !_.isEmpty(this.changed);
      return _.has(this.changed, attr);
    },

    // Return an object containing all the attributes that have changed, or
    // false if there are no changed attributes. Useful for determining what
    // parts of a view need to be updated and/or what attributes need to be
    // persisted to the server. Unset attributes will be set to undefined.
    // You can also pass an attributes object to diff against the model,
    // determining if there *would be* a change.
    changedAttributes: function(diff) {
      if (!diff) return this.hasChanged() ? _.clone(this.changed) : false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var changed = {};
      for (var attr in diff) {
        var val = diff[attr];
        if (_.isEqual(old[attr], val)) continue;
        changed[attr] = val;
      }
      return _.size(changed) ? changed : false;
    },

    // Get the previous value of an attribute, recorded at the time the last
    // `"change"` event was fired.
    previous: function(attr) {
      if (attr == null || !this._previousAttributes) return null;
      return this._previousAttributes[attr];
    },

    // Get all of the attributes of the model at the time of the previous
    // `"change"` event.
    previousAttributes: function() {
      return _.clone(this._previousAttributes);
    },

    // Fetch the model from the server, merging the response with the model's
    // local attributes. Any changed attributes will trigger a "change" event.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var model = this;
      var success = options.success;
      options.success = function(resp) {
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (!model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Set a hash of model attributes, and sync the model to the server.
    // If the server returns an attributes hash that differs, the model's
    // state will be `set` again.
    save: function(key, val, options) {
      // Handle both `"key", value` and `{key: value}` -style arguments.
      var attrs;
      if (key == null || typeof key === 'object') {
        attrs = key;
        options = val;
      } else {
        (attrs = {})[key] = val;
      }

      options = _.extend({validate: true, parse: true}, options);
      var wait = options.wait;

      // If we're not waiting and attributes exist, save acts as
      // `set(attr).save(null, opts)` with validation. Otherwise, check if
      // the model will be valid when the attributes, if any, are set.
      if (attrs && !wait) {
        if (!this.set(attrs, options)) return false;
      } else {
        if (!this._validate(attrs, options)) return false;
      }

      // After a successful server-side save, the client is (optionally)
      // updated with the server-side state.
      var model = this;
      var success = options.success;
      var attributes = this.attributes;
      options.success = function(resp) {
        // Ensure attributes are restored during synchronous saves.
        model.attributes = attributes;
        var serverAttrs = options.parse ? model.parse(resp, options) : resp;
        if (wait) serverAttrs = _.extend({}, attrs, serverAttrs);
        if (serverAttrs && !model.set(serverAttrs, options)) return false;
        if (success) success.call(options.context, model, resp, options);
        model.trigger('sync', model, resp, options);
      };
      wrapError(this, options);

      // Set temporary attributes if `{wait: true}` to properly find new ids.
      if (attrs && wait) this.attributes = _.extend({}, attributes, attrs);

      var method = this.isNew() ? 'create' : (options.patch ? 'patch' : 'update');
      if (method === 'patch' && !options.attrs) options.attrs = attrs;
      var xhr = this.sync(method, this, options);

      // Restore attributes.
      this.attributes = attributes;

      return xhr;
    },

    // Destroy this model on the server if it was already persisted.
    // Optimistically removes the model from its collection, if it has one.
    // If `wait: true` is passed, waits for the server to respond before removal.
    destroy: function(options) {
      options = options ? _.clone(options) : {};
      var model = this;
      var success = options.success;
      var wait = options.wait;

      var destroy = function() {
        model.stopListening();
        model.trigger('destroy', model, model.collection, options);
      };

      options.success = function(resp) {
        if (wait) destroy();
        if (success) success.call(options.context, model, resp, options);
        if (!model.isNew()) model.trigger('sync', model, resp, options);
      };

      var xhr = false;
      if (this.isNew()) {
        _.defer(options.success);
      } else {
        wrapError(this, options);
        xhr = this.sync('delete', this, options);
      }
      if (!wait) destroy();
      return xhr;
    },

    // Default URL for the model's representation on the server -- if you're
    // using Backbone's restful methods, override this to change the endpoint
    // that will be called.
    url: function() {
      var base =
        _.result(this, 'urlRoot') ||
        _.result(this.collection, 'url') ||
        urlError();
      if (this.isNew()) return base;
      var id = this.get(this.idAttribute);
      return base.replace(/[^\/]$/, '$&/') + encodeURIComponent(id);
    },

    // **parse** converts a response into the hash of attributes to be `set` on
    // the model. The default implementation is just to pass the response along.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new model with identical attributes to this one.
    clone: function() {
      return new this.constructor(this.attributes);
    },

    // A model is new if it has never been saved to the server, and lacks an id.
    isNew: function() {
      return !this.has(this.idAttribute);
    },

    // Check if the model is currently in a valid state.
    isValid: function(options) {
      return this._validate({}, _.defaults({validate: true}, options));
    },

    // Run validation against the next complete set of model attributes,
    // returning `true` if all is well. Otherwise, fire an `"invalid"` event.
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate) return true;
      attrs = _.extend({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error) return true;
      this.trigger('invalid', this, error, _.extend(options, {validationError: error}));
      return false;
    }

  });

  // Underscore methods that we want to implement on the Model, mapped to the
  // number of arguments they take.
  var modelMethods = { keys: 1, values: 1, pairs: 1, invert: 1, pick: 0,
      omit: 0, chain: 1, isEmpty: 1 };

  // Mix in each Underscore method as a proxy to `Model#attributes`.
  addUnderscoreMethods(Model, modelMethods, 'attributes');

  // Backbone.Collection
  // -------------------

  // If models tend to represent a single row of data, a Backbone Collection is
  // more analogous to a table full of data ... or a small slice or page of that
  // table, or a collection of rows that belong together for a particular reason
  // -- all of the messages in this particular folder, all of the documents
  // belonging to this particular author, and so on. Collections maintain
  // indexes of their models, both in order, and for lookup by `id`.

  // Create a new **Collection**, perhaps to contain a specific type of `model`.
  // If a `comparator` is specified, the Collection will maintain
  // its models in sort order, as they're added and removed.
  var Collection = Backbone.Collection = function(models, options) {
    options || (options = {});
    if (options.model) this.model = options.model;
    if (options.comparator !== void 0) this.comparator = options.comparator;
    this._reset();
    this.initialize.apply(this, arguments);
    if (models) this.reset(models, _.extend({silent: true}, options));
  };

  // Default options for `Collection#set`.
  var setOptions = {add: true, remove: true, merge: true};
  var addOptions = {add: true, remove: false};

  // Splices `insert` into `array` at index `at`.
  var splice = function(array, insert, at) {
    at = Math.min(Math.max(at, 0), array.length);
    var tail = Array(array.length - at);
    var length = insert.length;
    for (var i = 0; i < tail.length; i++) tail[i] = array[i + at];
    for (i = 0; i < length; i++) array[i + at] = insert[i];
    for (i = 0; i < tail.length; i++) array[i + length + at] = tail[i];
  };

  // Define the Collection's inheritable methods.
  _.extend(Collection.prototype, Events, {

    // The default model for a collection is just a **Backbone.Model**.
    // This should be overridden in most cases.
    model: Model,

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // The JSON representation of a Collection is an array of the
    // models' attributes.
    toJSON: function(options) {
      return this.map(function(model) { return model.toJSON(options); });
    },

    // Proxy `Backbone.sync` by default.
    sync: function() {
      return Backbone.sync.apply(this, arguments);
    },

    // Add a model, or list of models to the set. `models` may be Backbone
    // Models or raw JavaScript objects to be converted to Models, or any
    // combination of the two.
    add: function(models, options) {
      return this.set(models, _.extend({merge: false}, options, addOptions));
    },

    // Remove a model, or a list of models from the set.
    remove: function(models, options) {
      options = _.extend({}, options);
      var singular = !_.isArray(models);
      models = singular ? [models] : _.clone(models);
      var removed = this._removeModels(models, options);
      if (!options.silent && removed) this.trigger('update', this, options);
      return singular ? removed[0] : removed;
    },

    // Update a collection by `set`-ing a new list of models, adding new ones,
    // removing models that are no longer present, and merging models that
    // already exist in the collection, as necessary. Similar to **Model#set**,
    // the core operation for updating the data contained by the collection.
    set: function(models, options) {
      if (models == null) return;

      options = _.defaults({}, options, setOptions);
      if (options.parse && !this._isModel(models)) models = this.parse(models, options);

      var singular = !_.isArray(models);
      models = singular ? [models] : models.slice();

      var at = options.at;
      if (at != null) at = +at;
      if (at < 0) at += this.length + 1;

      var set = [];
      var toAdd = [];
      var toRemove = [];
      var modelMap = {};

      var add = options.add;
      var merge = options.merge;
      var remove = options.remove;

      var sort = false;
      var sortable = this.comparator && (at == null) && options.sort !== false;
      var sortAttr = _.isString(this.comparator) ? this.comparator : null;

      // Turn bare objects into model references, and prevent invalid models
      // from being added.
      var model;
      for (var i = 0; i < models.length; i++) {
        model = models[i];

        // If a duplicate is found, prevent it from being added and
        // optionally merge it into the existing model.
        var existing = this.get(model);
        if (existing) {
          if (merge && model !== existing) {
            var attrs = this._isModel(model) ? model.attributes : model;
            if (options.parse) attrs = existing.parse(attrs, options);
            existing.set(attrs, options);
            if (sortable && !sort) sort = existing.hasChanged(sortAttr);
          }
          if (!modelMap[existing.cid]) {
            modelMap[existing.cid] = true;
            set.push(existing);
          }
          models[i] = existing;

        // If this is a new, valid model, push it to the `toAdd` list.
        } else if (add) {
          model = models[i] = this._prepareModel(model, options);
          if (model) {
            toAdd.push(model);
            this._addReference(model, options);
            modelMap[model.cid] = true;
            set.push(model);
          }
        }
      }

      // Remove stale models.
      if (remove) {
        for (i = 0; i < this.length; i++) {
          model = this.models[i];
          if (!modelMap[model.cid]) toRemove.push(model);
        }
        if (toRemove.length) this._removeModels(toRemove, options);
      }

      // See if sorting is needed, update `length` and splice in new models.
      var orderChanged = false;
      var replace = !sortable && add && remove;
      if (set.length && replace) {
        orderChanged = this.length != set.length || _.some(this.models, function(model, index) {
          return model !== set[index];
        });
        this.models.length = 0;
        splice(this.models, set, 0);
        this.length = this.models.length;
      } else if (toAdd.length) {
        if (sortable) sort = true;
        splice(this.models, toAdd, at == null ? this.length : at);
        this.length = this.models.length;
      }

      // Silently sort the collection if appropriate.
      if (sort) this.sort({silent: true});

      // Unless silenced, it's time to fire all appropriate add/sort events.
      if (!options.silent) {
        for (i = 0; i < toAdd.length; i++) {
          if (at != null) options.index = at + i;
          model = toAdd[i];
          model.trigger('add', model, this, options);
        }
        if (sort || orderChanged) this.trigger('sort', this, options);
        if (toAdd.length || toRemove.length) this.trigger('update', this, options);
      }

      // Return the added (or merged) model (or models).
      return singular ? models[0] : models;
    },

    // When you have more items than you want to add or remove individually,
    // you can reset the entire set with a new list of models, without firing
    // any granular `add` or `remove` events. Fires `reset` when finished.
    // Useful for bulk operations and optimizations.
    reset: function(models, options) {
      options = options ? _.clone(options) : {};
      for (var i = 0; i < this.models.length; i++) {
        this._removeReference(this.models[i], options);
      }
      options.previousModels = this.models;
      this._reset();
      models = this.add(models, _.extend({silent: true}, options));
      if (!options.silent) this.trigger('reset', this, options);
      return models;
    },

    // Add a model to the end of the collection.
    push: function(model, options) {
      return this.add(model, _.extend({at: this.length}, options));
    },

    // Remove a model from the end of the collection.
    pop: function(options) {
      var model = this.at(this.length - 1);
      return this.remove(model, options);
    },

    // Add a model to the beginning of the collection.
    unshift: function(model, options) {
      return this.add(model, _.extend({at: 0}, options));
    },

    // Remove a model from the beginning of the collection.
    shift: function(options) {
      var model = this.at(0);
      return this.remove(model, options);
    },

    // Slice out a sub-array of models from the collection.
    slice: function() {
      return slice.apply(this.models, arguments);
    },

    // Get a model from the set by id.
    get: function(obj) {
      if (obj == null) return void 0;
      var id = this.modelId(this._isModel(obj) ? obj.attributes : obj);
      return this._byId[obj] || this._byId[id] || this._byId[obj.cid];
    },

    // Get the model at the given index.
    at: function(index) {
      if (index < 0) index += this.length;
      return this.models[index];
    },

    // Return models with matching attributes. Useful for simple cases of
    // `filter`.
    where: function(attrs, first) {
      return this[first ? 'find' : 'filter'](attrs);
    },

    // Return the first model with matching attributes. Useful for simple cases
    // of `find`.
    findWhere: function(attrs) {
      return this.where(attrs, true);
    },

    // Force the collection to re-sort itself. You don't need to call this under
    // normal circumstances, as the set will maintain sort order as each item
    // is added.
    sort: function(options) {
      var comparator = this.comparator;
      if (!comparator) throw new Error('Cannot sort a set without a comparator');
      options || (options = {});

      var length = comparator.length;
      if (_.isFunction(comparator)) comparator = _.bind(comparator, this);

      // Run sort based on type of `comparator`.
      if (length === 1 || _.isString(comparator)) {
        this.models = this.sortBy(comparator);
      } else {
        this.models.sort(comparator);
      }
      if (!options.silent) this.trigger('sort', this, options);
      return this;
    },

    // Pluck an attribute from each model in the collection.
    pluck: function(attr) {
      return _.invoke(this.models, 'get', attr);
    },

    // Fetch the default set of models for this collection, resetting the
    // collection when they arrive. If `reset: true` is passed, the response
    // data will be passed through the `reset` method instead of `set`.
    fetch: function(options) {
      options = _.extend({parse: true}, options);
      var success = options.success;
      var collection = this;
      options.success = function(resp) {
        var method = options.reset ? 'reset' : 'set';
        collection[method](resp, options);
        if (success) success.call(options.context, collection, resp, options);
        collection.trigger('sync', collection, resp, options);
      };
      wrapError(this, options);
      return this.sync('read', this, options);
    },

    // Create a new instance of a model in this collection. Add the model to the
    // collection immediately, unless `wait: true` is passed, in which case we
    // wait for the server to agree.
    create: function(model, options) {
      options = options ? _.clone(options) : {};
      var wait = options.wait;
      model = this._prepareModel(model, options);
      if (!model) return false;
      if (!wait) this.add(model, options);
      var collection = this;
      var success = options.success;
      options.success = function(model, resp, callbackOpts) {
        if (wait) collection.add(model, callbackOpts);
        if (success) success.call(callbackOpts.context, model, resp, callbackOpts);
      };
      model.save(null, options);
      return model;
    },

    // **parse** converts a response into a list of models to be added to the
    // collection. The default implementation is just to pass it through.
    parse: function(resp, options) {
      return resp;
    },

    // Create a new collection with an identical list of models as this one.
    clone: function() {
      return new this.constructor(this.models, {
        model: this.model,
        comparator: this.comparator
      });
    },

    // Define how to uniquely identify models in the collection.
    modelId: function (attrs) {
      return attrs[this.model.prototype.idAttribute || 'id'];
    },

    // Private method to reset all internal state. Called when the collection
    // is first initialized or reset.
    _reset: function() {
      this.length = 0;
      this.models = [];
      this._byId  = {};
    },

    // Prepare a hash of attributes (or other model) to be added to this
    // collection.
    _prepareModel: function(attrs, options) {
      if (this._isModel(attrs)) {
        if (!attrs.collection) attrs.collection = this;
        return attrs;
      }
      options = options ? _.clone(options) : {};
      options.collection = this;
      var model = new this.model(attrs, options);
      if (!model.validationError) return model;
      this.trigger('invalid', this, model.validationError, options);
      return false;
    },

    // Internal method called by both remove and set.
    _removeModels: function(models, options) {
      var removed = [];
      for (var i = 0; i < models.length; i++) {
        var model = this.get(models[i]);
        if (!model) continue;

        var index = this.indexOf(model);
        this.models.splice(index, 1);
        this.length--;

        if (!options.silent) {
          options.index = index;
          model.trigger('remove', model, this, options);
        }

        removed.push(model);
        this._removeReference(model, options);
      }
      return removed.length ? removed : false;
    },

    // Method for checking whether an object should be considered a model for
    // the purposes of adding to the collection.
    _isModel: function (model) {
      return model instanceof Model;
    },

    // Internal method to create a model's ties to a collection.
    _addReference: function(model, options) {
      this._byId[model.cid] = model;
      var id = this.modelId(model.attributes);
      if (id != null) this._byId[id] = model;
      model.on('all', this._onModelEvent, this);
    },

    // Internal method to sever a model's ties to a collection.
    _removeReference: function(model, options) {
      delete this._byId[model.cid];
      var id = this.modelId(model.attributes);
      if (id != null) delete this._byId[id];
      if (this === model.collection) delete model.collection;
      model.off('all', this._onModelEvent, this);
    },

    // Internal method called every time a model in the set fires an event.
    // Sets need to update their indexes when models change ids. All other
    // events simply proxy through. "add" and "remove" events that originate
    // in other collections are ignored.
    _onModelEvent: function(event, model, collection, options) {
      if ((event === 'add' || event === 'remove') && collection !== this) return;
      if (event === 'destroy') this.remove(model, options);
      if (event === 'change') {
        var prevId = this.modelId(model.previousAttributes());
        var id = this.modelId(model.attributes);
        if (prevId !== id) {
          if (prevId != null) delete this._byId[prevId];
          if (id != null) this._byId[id] = model;
        }
      }
      this.trigger.apply(this, arguments);
    }

  });

  // Underscore methods that we want to implement on the Collection.
  // 90% of the core usefulness of Backbone Collections is actually implemented
  // right here:
  var collectionMethods = { forEach: 3, each: 3, map: 3, collect: 3, reduce: 4,
      foldl: 4, inject: 4, reduceRight: 4, foldr: 4, find: 3, detect: 3, filter: 3,
      select: 3, reject: 3, every: 3, all: 3, some: 3, any: 3, include: 3, includes: 3,
      contains: 3, invoke: 0, max: 3, min: 3, toArray: 1, size: 1, first: 3,
      head: 3, take: 3, initial: 3, rest: 3, tail: 3, drop: 3, last: 3,
      without: 0, difference: 0, indexOf: 3, shuffle: 1, lastIndexOf: 3,
      isEmpty: 1, chain: 1, sample: 3, partition: 3, groupBy: 3, countBy: 3,
      sortBy: 3, indexBy: 3};

  // Mix in each Underscore method as a proxy to `Collection#models`.
  addUnderscoreMethods(Collection, collectionMethods, 'models');

  // Backbone.View
  // -------------

  // Backbone Views are almost more convention than they are actual code. A View
  // is simply a JavaScript object that represents a logical chunk of UI in the
  // DOM. This might be a single item, an entire list, a sidebar or panel, or
  // even the surrounding frame which wraps your whole app. Defining a chunk of
  // UI as a **View** allows you to define your DOM events declaratively, without
  // having to worry about render order ... and makes it easy for the view to
  // react to specific changes in the state of your models.

  // Creating a Backbone.View creates its initial element outside of the DOM,
  // if an existing element is not provided...
  var View = Backbone.View = function(options) {
    this.cid = _.uniqueId('view');
    _.extend(this, _.pick(options, viewOptions));
    this._ensureElement();
    this.initialize.apply(this, arguments);
  };

  // Cached regex to split keys for `delegate`.
  var delegateEventSplitter = /^(\S+)\s*(.*)$/;

  // List of view options to be set as properties.
  var viewOptions = ['model', 'collection', 'el', 'id', 'attributes', 'className', 'tagName', 'events'];

  // Set up all inheritable **Backbone.View** properties and methods.
  _.extend(View.prototype, Events, {

    // The default `tagName` of a View's element is `"div"`.
    tagName: 'div',

    // jQuery delegate for element lookup, scoped to DOM elements within the
    // current view. This should be preferred to global lookups where possible.
    $: function(selector) {
      return this.$el.find(selector);
    },

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // **render** is the core function that your view should override, in order
    // to populate its element (`this.el`), with the appropriate HTML. The
    // convention is for **render** to always return `this`.
    render: function() {
      return this;
    },

    // Remove this view by taking the element out of the DOM, and removing any
    // applicable Backbone.Events listeners.
    remove: function() {
      this._removeElement();
      this.stopListening();
      return this;
    },

    // Remove this view's element from the document and all event listeners
    // attached to it. Exposed for subclasses using an alternative DOM
    // manipulation API.
    _removeElement: function() {
      this.$el.remove();
    },

    // Change the view's element (`this.el` property) and re-delegate the
    // view's events on the new element.
    setElement: function(element) {
      this.undelegateEvents();
      this._setElement(element);
      this.delegateEvents();
      return this;
    },

    // Creates the `this.el` and `this.$el` references for this view using the
    // given `el`. `el` can be a CSS selector or an HTML string, a jQuery
    // context or an element. Subclasses can override this to utilize an
    // alternative DOM manipulation API and are only required to set the
    // `this.el` property.
    _setElement: function(el) {
      this.$el = el instanceof Backbone.$ ? el : Backbone.$(el);
      this.el = this.$el[0];
    },

    // Set callbacks, where `this.events` is a hash of
    //
    // *{"event selector": "callback"}*
    //
    //     {
    //       'mousedown .title':  'edit',
    //       'click .button':     'save',
    //       'click .open':       function(e) { ... }
    //     }
    //
    // pairs. Callbacks will be bound to the view, with `this` set properly.
    // Uses event delegation for efficiency.
    // Omitting the selector binds the event to `this.el`.
    delegateEvents: function(events) {
      events || (events = _.result(this, 'events'));
      if (!events) return this;
      this.undelegateEvents();
      for (var key in events) {
        var method = events[key];
        if (!_.isFunction(method)) method = this[method];
        if (!method) continue;
        var match = key.match(delegateEventSplitter);
        this.delegate(match[1], match[2], _.bind(method, this));
      }
      return this;
    },

    // Add a single event listener to the view's element (or a child element
    // using `selector`). This only works for delegate-able events: not `focus`,
    // `blur`, and not `change`, `submit`, and `reset` in Internet Explorer.
    delegate: function(eventName, selector, listener) {
      this.$el.on(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Clears all callbacks previously bound to the view by `delegateEvents`.
    // You usually don't need to use this, but may wish to if you have multiple
    // Backbone views attached to the same DOM element.
    undelegateEvents: function() {
      if (this.$el) this.$el.off('.delegateEvents' + this.cid);
      return this;
    },

    // A finer-grained `undelegateEvents` for removing a single delegated event.
    // `selector` and `listener` are both optional.
    undelegate: function(eventName, selector, listener) {
      this.$el.off(eventName + '.delegateEvents' + this.cid, selector, listener);
      return this;
    },

    // Produces a DOM element to be assigned to your view. Exposed for
    // subclasses using an alternative DOM manipulation API.
    _createElement: function(tagName) {
      return document.createElement(tagName);
    },

    // Ensure that the View has a DOM element to render into.
    // If `this.el` is a string, pass it through `$()`, take the first
    // matching element, and re-assign it to `el`. Otherwise, create
    // an element from the `id`, `className` and `tagName` properties.
    _ensureElement: function() {
      if (!this.el) {
        var attrs = _.extend({}, _.result(this, 'attributes'));
        if (this.id) attrs.id = _.result(this, 'id');
        if (this.className) attrs['class'] = _.result(this, 'className');
        this.setElement(this._createElement(_.result(this, 'tagName')));
        this._setAttributes(attrs);
      } else {
        this.setElement(_.result(this, 'el'));
      }
    },

    // Set attributes from a hash on this view's element.  Exposed for
    // subclasses using an alternative DOM manipulation API.
    _setAttributes: function(attributes) {
      this.$el.attr(attributes);
    }

  });

  // Backbone.sync
  // -------------

  // Override this function to change the manner in which Backbone persists
  // models to the server. You will be passed the type of request, and the
  // model in question. By default, makes a RESTful Ajax request
  // to the model's `url()`. Some possible customizations could be:
  //
  // * Use `setTimeout` to batch rapid-fire updates into a single request.
  // * Send up the models as XML instead of JSON.
  // * Persist models via WebSockets instead of Ajax.
  //
  // Turn on `Backbone.emulateHTTP` in order to send `PUT` and `DELETE` requests
  // as `POST`, with a `_method` parameter containing the true HTTP method,
  // as well as all requests with the body as `application/x-www-form-urlencoded`
  // instead of `application/json` with the model in a param named `model`.
  // Useful when interfacing with server-side languages like **PHP** that make
  // it difficult to read the body of `PUT` requests.
  Backbone.sync = function(method, model, options) {
    var type = methodMap[method];

    // Default options, unless specified.
    _.defaults(options || (options = {}), {
      emulateHTTP: Backbone.emulateHTTP,
      emulateJSON: Backbone.emulateJSON
    });

    // Default JSON-request options.
    var params = {type: type, dataType: 'json'};

    // Ensure that we have a URL.
    if (!options.url) {
      params.url = _.result(model, 'url') || urlError();
    }

    // Ensure that we have the appropriate request data.
    if (options.data == null && model && (method === 'create' || method === 'update' || method === 'patch')) {
      params.contentType = 'application/json';
      params.data = JSON.stringify(options.attrs || model.toJSON(options));
    }

    // For older servers, emulate JSON by encoding the request into an HTML-form.
    if (options.emulateJSON) {
      params.contentType = 'application/x-www-form-urlencoded';
      params.data = params.data ? {model: params.data} : {};
    }

    // For older servers, emulate HTTP by mimicking the HTTP method with `_method`
    // And an `X-HTTP-Method-Override` header.
    if (options.emulateHTTP && (type === 'PUT' || type === 'DELETE' || type === 'PATCH')) {
      params.type = 'POST';
      if (options.emulateJSON) params.data._method = type;
      var beforeSend = options.beforeSend;
      options.beforeSend = function(xhr) {
        xhr.setRequestHeader('X-HTTP-Method-Override', type);
        if (beforeSend) return beforeSend.apply(this, arguments);
      };
    }

    // Don't process data on a non-GET request.
    if (params.type !== 'GET' && !options.emulateJSON) {
      params.processData = false;
    }

    // Pass along `textStatus` and `errorThrown` from jQuery.
    var error = options.error;
    options.error = function(xhr, textStatus, errorThrown) {
      options.textStatus = textStatus;
      options.errorThrown = errorThrown;
      if (error) error.call(options.context, xhr, textStatus, errorThrown);
    };

    // Make the request, allowing the user to override any Ajax options.
    var xhr = options.xhr = Backbone.ajax(_.extend(params, options));
    model.trigger('request', model, xhr, options);
    return xhr;
  };

  // Map from CRUD to HTTP for our default `Backbone.sync` implementation.
  var methodMap = {
    'create': 'POST',
    'update': 'PUT',
    'patch':  'PATCH',
    'delete': 'DELETE',
    'read':   'GET'
  };

  // Set the default implementation of `Backbone.ajax` to proxy through to `$`.
  // Override this if you'd like to use a different library.
  Backbone.ajax = function() {
    return Backbone.$.ajax.apply(Backbone.$, arguments);
  };

  // Backbone.Router
  // ---------------

  // Routers map faux-URLs to actions, and fire events when routes are
  // matched. Creating a new one sets its `routes` hash, if not set statically.
  var Router = Backbone.Router = function(options) {
    options || (options = {});
    if (options.routes) this.routes = options.routes;
    this._bindRoutes();
    this.initialize.apply(this, arguments);
  };

  // Cached regular expressions for matching named param parts and splatted
  // parts of route strings.
  var optionalParam = /\((.*?)\)/g;
  var namedParam    = /(\(\?)?:\w+/g;
  var splatParam    = /\*\w+/g;
  var escapeRegExp  = /[\-{}\[\]+?.,\\\^$|#\s]/g;

  // Set up all inheritable **Backbone.Router** properties and methods.
  _.extend(Router.prototype, Events, {

    // Initialize is an empty function by default. Override it with your own
    // initialization logic.
    initialize: function(){},

    // Manually bind a single named route to a callback. For example:
    //
    //     this.route('search/:query/p:num', 'search', function(query, num) {
    //       ...
    //     });
    //
    route: function(route, name, callback) {
      if (!_.isRegExp(route)) route = this._routeToRegExp(route);
      if (_.isFunction(name)) {
        callback = name;
        name = '';
      }
      if (!callback) callback = this[name];
      var router = this;
      Backbone.history.route(route, function(fragment) {
        var args = router._extractParameters(route, fragment);
        if (router.execute(callback, args, name) !== false) {
          router.trigger.apply(router, ['route:' + name].concat(args));
          router.trigger('route', name, args);
          Backbone.history.trigger('route', router, name, args);
        }
      });
      return this;
    },

    // Execute a route handler with the provided parameters.  This is an
    // excellent place to do pre-route setup or post-route cleanup.
    execute: function(callback, args, name) {
      if (callback) callback.apply(this, args);
    },

    // Simple proxy to `Backbone.history` to save a fragment into the history.
    navigate: function(fragment, options) {
      Backbone.history.navigate(fragment, options);
      return this;
    },

    // Bind all defined routes to `Backbone.history`. We have to reverse the
    // order of the routes here to support behavior where the most general
    // routes can be defined at the bottom of the route map.
    _bindRoutes: function() {
      if (!this.routes) return;
      this.routes = _.result(this, 'routes');
      var route, routes = _.keys(this.routes);
      while ((route = routes.pop()) != null) {
        this.route(route, this.routes[route]);
      }
    },

    // Convert a route string into a regular expression, suitable for matching
    // against the current location hash.
    _routeToRegExp: function(route) {
      route = route.replace(escapeRegExp, '\\$&')
                   .replace(optionalParam, '(?:$1)?')
                   .replace(namedParam, function(match, optional) {
                     return optional ? match : '([^/?]+)';
                   })
                   .replace(splatParam, '([^?]*?)');
      return new RegExp('^' + route + '(?:\\?([\\s\\S]*))?$');
    },

    // Given a route, and a URL fragment that it matches, return the array of
    // extracted decoded parameters. Empty or unmatched parameters will be
    // treated as `null` to normalize cross-browser behavior.
    _extractParameters: function(route, fragment) {
      var params = route.exec(fragment).slice(1);
      return _.map(params, function(param, i) {
        // Don't decode the search params.
        if (i === params.length - 1) return param || null;
        return param ? decodeURIComponent(param) : null;
      });
    }

  });

  // Backbone.History
  // ----------------

  // Handles cross-browser history management, based on either
  // [pushState](http://diveintohtml5.info/history.html) and real URLs, or
  // [onhashchange](https://developer.mozilla.org/en-US/docs/DOM/window.onhashchange)
  // and URL fragments. If the browser supports neither (old IE, natch),
  // falls back to polling.
  var History = Backbone.History = function() {
    this.handlers = [];
    this.checkUrl = _.bind(this.checkUrl, this);

    // Ensure that `History` can be used outside of the browser.
    if (typeof window !== 'undefined') {
      this.location = window.location;
      this.history = window.history;
    }
  };

  // Cached regex for stripping a leading hash/slash and trailing space.
  var routeStripper = /^[#\/]|\s+$/g;

  // Cached regex for stripping leading and trailing slashes.
  var rootStripper = /^\/+|\/+$/g;

  // Cached regex for stripping urls of hash.
  var pathStripper = /#.*$/;

  // Has the history handling already been started?
  History.started = false;

  // Set up all inheritable **Backbone.History** properties and methods.
  _.extend(History.prototype, Events, {

    // The default interval to poll for hash changes, if necessary, is
    // twenty times a second.
    interval: 50,

    // Are we at the app root?
    atRoot: function() {
      var path = this.location.pathname.replace(/[^\/]$/, '$&/');
      return path === this.root && !this.getSearch();
    },

    // Does the pathname match the root?
    matchRoot: function() {
      var path = this.decodeFragment(this.location.pathname);
      var root = path.slice(0, this.root.length - 1) + '/';
      return root === this.root;
    },

    // Unicode characters in `location.pathname` are percent encoded so they're
    // decoded for comparison. `%25` should not be decoded since it may be part
    // of an encoded parameter.
    decodeFragment: function(fragment) {
      return decodeURI(fragment.replace(/%25/g, '%2525'));
    },

    // In IE6, the hash fragment and search params are incorrect if the
    // fragment contains `?`.
    getSearch: function() {
      var match = this.location.href.replace(/#.*/, '').match(/\?.+/);
      return match ? match[0] : '';
    },

    // Gets the true hash value. Cannot use location.hash directly due to bug
    // in Firefox where location.hash will always be decoded.
    getHash: function(window) {
      var match = (window || this).location.href.match(/#(.*)$/);
      return match ? match[1] : '';
    },

    // Get the pathname and search params, without the root.
    getPath: function() {
      var path = this.decodeFragment(
        this.location.pathname + this.getSearch()
      ).slice(this.root.length - 1);
      return path.charAt(0) === '/' ? path.slice(1) : path;
    },

    // Get the cross-browser normalized URL fragment from the path or hash.
    getFragment: function(fragment) {
      if (fragment == null) {
        if (this._usePushState || !this._wantsHashChange) {
          fragment = this.getPath();
        } else {
          fragment = this.getHash();
        }
      }
      return fragment.replace(routeStripper, '');
    },

    // Start the hash change handling, returning `true` if the current URL matches
    // an existing route, and `false` otherwise.
    start: function(options) {
      if (History.started) throw new Error('Backbone.history has already been started');
      History.started = true;

      // Figure out the initial configuration. Do we need an iframe?
      // Is pushState desired ... is it available?
      this.options          = _.extend({root: '/'}, this.options, options);
      this.root             = this.options.root;
      this._wantsHashChange = this.options.hashChange !== false;
      this._hasHashChange   = 'onhashchange' in window && (document.documentMode === void 0 || document.documentMode > 7);
      this._useHashChange   = this._wantsHashChange && this._hasHashChange;
      this._wantsPushState  = !!this.options.pushState;
      this._hasPushState    = !!(this.history && this.history.pushState);
      this._usePushState    = this._wantsPushState && this._hasPushState;
      this.fragment         = this.getFragment();

      // Normalize root to always include a leading and trailing slash.
      this.root = ('/' + this.root + '/').replace(rootStripper, '/');

      // Transition from hashChange to pushState or vice versa if both are
      // requested.
      if (this._wantsHashChange && this._wantsPushState) {

        // If we've started off with a route from a `pushState`-enabled
        // browser, but we're currently in a browser that doesn't support it...
        if (!this._hasPushState && !this.atRoot()) {
          var root = this.root.slice(0, -1) || '/';
          this.location.replace(root + '#' + this.getPath());
          // Return immediately as browser will do redirect to new url
          return true;

        // Or if we've started out with a hash-based route, but we're currently
        // in a browser where it could be `pushState`-based instead...
        } else if (this._hasPushState && this.atRoot()) {
          this.navigate(this.getHash(), {replace: true});
        }

      }

      // Proxy an iframe to handle location events if the browser doesn't
      // support the `hashchange` event, HTML5 history, or the user wants
      // `hashChange` but not `pushState`.
      if (!this._hasHashChange && this._wantsHashChange && !this._usePushState) {
        this.iframe = document.createElement('iframe');
        this.iframe.src = 'javascript:0';
        this.iframe.style.display = 'none';
        this.iframe.tabIndex = -1;
        var body = document.body;
        // Using `appendChild` will throw on IE < 9 if the document is not ready.
        var iWindow = body.insertBefore(this.iframe, body.firstChild).contentWindow;
        iWindow.document.open();
        iWindow.document.close();
        iWindow.location.hash = '#' + this.fragment;
      }

      // Add a cross-platform `addEventListener` shim for older browsers.
      var addEventListener = window.addEventListener || function (eventName, listener) {
        return attachEvent('on' + eventName, listener);
      };

      // Depending on whether we're using pushState or hashes, and whether
      // 'onhashchange' is supported, determine how we check the URL state.
      if (this._usePushState) {
        addEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        addEventListener('hashchange', this.checkUrl, false);
      } else if (this._wantsHashChange) {
        this._checkUrlInterval = setInterval(this.checkUrl, this.interval);
      }

      if (!this.options.silent) return this.loadUrl();
    },

    // Disable Backbone.history, perhaps temporarily. Not useful in a real app,
    // but possibly useful for unit testing Routers.
    stop: function() {
      // Add a cross-platform `removeEventListener` shim for older browsers.
      var removeEventListener = window.removeEventListener || function (eventName, listener) {
        return detachEvent('on' + eventName, listener);
      };

      // Remove window listeners.
      if (this._usePushState) {
        removeEventListener('popstate', this.checkUrl, false);
      } else if (this._useHashChange && !this.iframe) {
        removeEventListener('hashchange', this.checkUrl, false);
      }

      // Clean up the iframe if necessary.
      if (this.iframe) {
        document.body.removeChild(this.iframe);
        this.iframe = null;
      }

      // Some environments will throw when clearing an undefined interval.
      if (this._checkUrlInterval) clearInterval(this._checkUrlInterval);
      History.started = false;
    },

    // Add a route to be tested when the fragment changes. Routes added later
    // may override previous routes.
    route: function(route, callback) {
      this.handlers.unshift({route: route, callback: callback});
    },

    // Checks the current URL to see if it has changed, and if it has,
    // calls `loadUrl`, normalizing across the hidden iframe.
    checkUrl: function(e) {
      var current = this.getFragment();

      // If the user pressed the back button, the iframe's hash will have
      // changed and we should use that for comparison.
      if (current === this.fragment && this.iframe) {
        current = this.getHash(this.iframe.contentWindow);
      }

      if (current === this.fragment) return false;
      if (this.iframe) this.navigate(current);
      this.loadUrl();
    },

    // Attempt to load the current URL fragment. If a route succeeds with a
    // match, returns `true`. If no defined routes matches the fragment,
    // returns `false`.
    loadUrl: function(fragment) {
      // If the root doesn't match, no routes can match either.
      if (!this.matchRoot()) return false;
      fragment = this.fragment = this.getFragment(fragment);
      return _.some(this.handlers, function(handler) {
        if (handler.route.test(fragment)) {
          handler.callback(fragment);
          return true;
        }
      });
    },

    // Save a fragment into the hash history, or replace the URL state if the
    // 'replace' option is passed. You are responsible for properly URL-encoding
    // the fragment in advance.
    //
    // The options object can contain `trigger: true` if you wish to have the
    // route callback be fired (not usually desirable), or `replace: true`, if
    // you wish to modify the current URL without adding an entry to the history.
    navigate: function(fragment, options) {
      if (!History.started) return false;
      if (!options || options === true) options = {trigger: !!options};

      // Normalize the fragment.
      fragment = this.getFragment(fragment || '');

      // Don't include a trailing slash on the root.
      var root = this.root;
      if (fragment === '' || fragment.charAt(0) === '?') {
        root = root.slice(0, -1) || '/';
      }
      var url = root + fragment;

      // Strip the hash and decode for matching.
      fragment = this.decodeFragment(fragment.replace(pathStripper, ''));

      if (this.fragment === fragment) return;
      this.fragment = fragment;

      // If pushState is available, we use it to set the fragment as a real URL.
      if (this._usePushState) {
        this.history[options.replace ? 'replaceState' : 'pushState']({}, document.title, url);

      // If hash changes haven't been explicitly disabled, update the hash
      // fragment to store history.
      } else if (this._wantsHashChange) {
        this._updateHash(this.location, fragment, options.replace);
        if (this.iframe && (fragment !== this.getHash(this.iframe.contentWindow))) {
          var iWindow = this.iframe.contentWindow;

          // Opening and closing the iframe tricks IE7 and earlier to push a
          // history entry on hash-tag change.  When replace is true, we don't
          // want this.
          if (!options.replace) {
            iWindow.document.open();
            iWindow.document.close();
          }

          this._updateHash(iWindow.location, fragment, options.replace);
        }

      // If you've told us that you explicitly don't want fallback hashchange-
      // based history, then `navigate` becomes a page refresh.
      } else {
        return this.location.assign(url);
      }
      if (options.trigger) return this.loadUrl(fragment);
    },

    // Update the hash location, either replacing the current entry, or adding
    // a new one to the browser history.
    _updateHash: function(location, fragment, replace) {
      if (replace) {
        var href = location.href.replace(/(javascript:|#).*$/, '');
        location.replace(href + '#' + fragment);
      } else {
        // Some browsers require that `hash` contains a leading #.
        location.hash = '#' + fragment;
      }
    }

  });

  // Create the default Backbone.history.
  Backbone.history = new History;

  // Helpers
  // -------

  // Helper function to correctly set up the prototype chain for subclasses.
  // Similar to `goog.inherits`, but uses a hash of prototype properties and
  // class properties to be extended.
  var extend = function(protoProps, staticProps) {
    var parent = this;
    var child;

    // The constructor function for the new subclass is either defined by you
    // (the "constructor" property in your `extend` definition), or defaulted
    // by us to simply call the parent constructor.
    if (protoProps && _.has(protoProps, 'constructor')) {
      child = protoProps.constructor;
    } else {
      child = function(){ return parent.apply(this, arguments); };
    }

    // Add static properties to the constructor function, if supplied.
    _.extend(child, parent, staticProps);

    // Set the prototype chain to inherit from `parent`, without calling
    // `parent` constructor function.
    var Surrogate = function(){ this.constructor = child; };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate;

    // Add prototype properties (instance properties) to the subclass,
    // if supplied.
    if (protoProps) _.extend(child.prototype, protoProps);

    // Set a convenience property in case the parent's prototype is needed
    // later.
    child.__super__ = parent.prototype;

    return child;
  };

  // Set up inheritance for the model, collection, router, view and history.
  Model.extend = Collection.extend = Router.extend = View.extend = History.extend = extend;

  // Throw an error when a URL is needed, and none is supplied.
  var urlError = function() {
    throw new Error('A "url" property or function must be specified');
  };

  // Wrap an optional error callback with a fallback error event.
  var wrapError = function(model, options) {
    var error = options.error;
    options.error = function(resp) {
      if (error) error.call(options.context, model, resp, options);
      model.trigger('error', model, resp, options);
    };
  };

  return Backbone;

}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(17);
var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

/**
 * Base Model for all CartoDB model.
 * DO NOT USE Backbone.Model directly
 */
var Model = Backbone.Model.extend({

  initialize: function initialize(options) {
    _.bindAll(this, 'fetch', 'save', 'retrigger');
    return Backbone.Model.prototype.initialize.call(this, options);
  },
  /**
  * We are redefining fetch to be able to trigger an event when the ajax call ends, no matter if there's
  * a change in the data or not. Why don't backbone does this by default? ahh, my friend, who knows.
  * @method fetch
  * @param args {Object}
  */
  fetch: function fetch(args) {
    var self = this;
    // var date = new Date();
    this.trigger('loadModelStarted');
    $.when(Backbone.Model.prototype.fetch.call(this, args)).done(function (ev) {
      self.trigger('loadModelCompleted', ev, self);
      // var dateComplete = new Date()
      // console.log('completed in '+(dateComplete - date));
    }).fail(function (ev) {
      self.trigger('loadModelFailed', ev, self);
    });
  },
  /**
  * Changes the attribute used as Id
  * @method setIdAttribute
  * @param attr {String}
  */
  setIdAttribute: function setIdAttribute(attr) {
    this.idAttribute = attr;
  },
  /**
  * Listen for an event on another object and triggers on itself, with the same name or a new one
  * @method retrigger
  * @param ev {String} event who triggers the action
  * @param obj {Object} object where the event happens
  * @param obj {Object} [optional] name of the retriggered event
  * @todo [xabel]: This method is repeated here and in the base view definition. There's should be a way to make it unique
  */
  retrigger: function retrigger(ev, obj, retrigEvent) {
    if (!retrigEvent) {
      retrigEvent = ev;
    }
    var self = this;
    obj.bind && obj.bind(ev, function () {
      self.trigger(retrigEvent);
    }, self);
  },

  /**
   * We need to override backbone save method to be able to introduce new kind of triggers that
   * for some reason are not present in the original library. Because you know, it would be nice
   * to be able to differenciate "a model has been updated" of "a model is being saved".
   * TODO: remove jquery from here
   * @param  {object} opt1
   * @param  {object} opt2
   * @return {$.Deferred}
   */
  save: function save(opt1, opt2) {
    var self = this;
    if (!opt2 || !opt2.silent) this.trigger('saving');
    var promise = Backbone.Model.prototype.save.apply(this, arguments);
    $.when(promise).done(function () {
      if (!opt2 || !opt2.silent) self.trigger('saved');
    }).fail(function () {
      if (!opt2 || !opt2.silent) self.trigger('errorSaving');
    });
    return promise;
  }
});

module.exports = Model;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CartoError = __webpack_require__(4);

/**
 * Utility to build a cartoError related to validation errors.
 * @constructor
 *
 * @return {CartoError} A well formed object representing the error.
 */
function CartoValidationError(type, message, opts) {
  return new CartoError({
    origin: 'validation',
    type: type,
    message: message
  }, opts);
}

module.exports = CartoValidationError;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var errorExtender = __webpack_require__(143);
var errorTracker = __webpack_require__(138);

var UNEXPECTED_ERROR = 'unexpected error';
var GENERIC_ORIGIN = 'generic';

/**
 * Build a cartoError from a generic error.
 * @constructor
 *
 * @return {CartoError} A well formed object representing the error.
 */
function CartoError(error, opts) {
  opts = opts || {};
  var cartoError = Object.create(Error.prototype);
  cartoError.message = error && error.message || UNEXPECTED_ERROR;
  cartoError.origin = error && error.origin || GENERIC_ORIGIN;
  cartoError.type = error && error.type || '';

  if (_isWindshaftError(error)) {
    cartoError = _transformWindshaftError(error, opts.layers, opts.analysis);
  }

  if (_isAjaxError(error)) {
    cartoError = _transformAjaxError(error);
  }

  // Add extra fields
  var extraFields = errorExtender.getExtraFields(cartoError);
  cartoError.message = extraFields.friendlyMessage;
  cartoError.errorCode = extraFields.errorCode;

  // Final properties
  cartoError.name = 'CartoError';
  cartoError.stack = new Error().stack;
  cartoError.originalError = error;

  errorTracker.track(cartoError);

  return cartoError;
}

// Windshaft should have been parsed already
function _isWindshaftError(error) {
  return error && error.origin === 'windshaft';
}

function _isAjaxError(error) {
  return error && error.responseText;
}

function _transformWindshaftError(error, layers, analysis) {
  var cartoError = Object.create(Error.prototype);
  cartoError.message = error.message;
  cartoError.origin = error.origin;
  cartoError.type = error.type;

  if (error.type === 'layer' && layers) {
    cartoError.layer = layers.findById(error.layerId);
  }
  if (error.type === 'analysis') {
    if (analysis) {
      cartoError.source = analysis;
      cartoError.sourceId = analysis.getId && analysis.getId();
    }
    if (error.analysisId) {
      cartoError.sourceId = error.analysisId;
    }
  }

  return cartoError;
}

function _transformAjaxError(error) {
  var cartoError = Object.create(Error.prototype);
  cartoError.message = _handleAjaxResponse(error);
  cartoError.origin = 'ajax';
  cartoError.type = error.statusText;

  return cartoError;
}

function _handleAjaxResponse(error) {
  var errorMessage = '';

  try {
    var parsedError = JSON.parse(error.responseText);
    errorMessage = parsedError.errors[0];
  } catch (exc) {
    // Swallow parse error
  }
  return errorMessage || UNEXPECTED_ERROR;
}

module.exports = CartoError;

/**
 * Represents an error in the carto library.
 *
 * Some actions like adding a layer to a map are asynchronous and require a server round trip.
 * If some error happens during this communnication with the server, an error with a `CartoError` object
 * will be fired.
 *
 * CartoErrors can be obtained by listening to the client 'error' `client.on('error', callback);`,
 * through any async action or by listening to 'error' events on particular objects (eg: dataviews).
 *
 * Promises are also rejected with a CartoError.
 * @example
 * // Listen when a layer has been added or there has been an error.
 * client.addLayer(layerWithErrors)
 *  .then(()=> console.log('Layer added succesfully'))
 *  .catch(cartoError => console.error(cartoError.message))
 * @example
 * // Events also will be registered here when the map changes.
 * client.on('success', function () {
 *  console.log('Client reloaded');
 * });
 *
 * client.on('error', function (clientError) {
 *  console.error(clientError.message);
 * });
 * @example
 * // Listen when there is an error in a dataview
 * dataview.on('error', function (error) {
 *   console.error(error.message);
 * });
 *
 * @typedef {object} CartoError
 * @property {string} message - A short error description
 * @property {string} name - The name of the error "CartoError"
 * @property {string} origin - Where the error was originated: 'windshaft' | 'ajax' | 'validation'
 * @property {object} originalError - An object containing the internal/original error
 * @property {object} stack - Error stack trace
 * @property {string} type - Error type
 * @property {string} sourceId - Available if the error is related to a source object. Indicates the ID of the source that has a problem.
 * @api
 */

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
/**
 * Constants module for dataviews
 */

/**
 * Enum for operation values.
 *
 * @enum {string} carto.operation
 * @readonly
 * @memberof carto
 * @api
 */
var operation = {
  /** Number of elements */
  COUNT: 'count',
  /** Sum */
  SUM: 'sum',
  /** Average */
  AVG: 'avg',
  /** Maximum */
  MAX: 'max',
  /** Minimum */
  MIN: 'min'
};

function isValidOperation(op) {
  return _.contains(operation, op);
}

/**
 * Enum for dataview status values.
 *
 * @enum {string} carto.dataview.status
 * @readonly
 * @memberof carto.dataview
 * @api
 */
var status = {
  /** Not fetched with the server */
  NOT_LOADED: 'notLoaded',
  /** Fetching with the server */
  LOADING: 'loading',
  /** Fetch completed */
  LOADED: 'loaded',
  /** Error in fetch */
  ERROR: 'error'
};

/**
 * Enum for dataview time aggregations.
 *
 * @enum {string} carto.dataview.timeAggregation
 * @readonly
 * @memberof carto.dataview
 * @api
 */
var timeAggregation = {
  /** Auto */
  AUTO: 'auto',
  /** Millennium */
  MILLENNIUM: 'millennium',
  /** Century */
  CENTURY: 'century',
  /** Decade */
  DECADE: 'decade',
  /** Year */
  YEAR: 'year',
  /** Quarter */
  QUARTER: 'quarter',
  /** Month */
  MONTH: 'month',
  /** Week */
  WEEK: 'week',
  /** Day */
  DAY: 'day',
  /** Hour */
  HOUR: 'hour',
  /** Minute */
  MINUTE: 'minute'
};

function isValidTimeAggregation(agg) {
  return _.contains(timeAggregation, agg);
}

/**
 * ATTRIBUTION constant
 *
 * &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/about-carto/">CARTO</a>
 *
 * @type {string}
 * @constant
 * @memberof carto
 * @api
 */
var ATTRIBUTION = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/about-carto/">CARTO</a>';

module.exports = {
  operation: operation,
  status: status,
  timeAggregation: timeAggregation,
  isValidOperation: isValidOperation,
  isValidTimeAggregation: isValidTimeAggregation,
  ATTRIBUTION: ATTRIBUTION
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var CartoValidationError = __webpack_require__(3);

/**
 * Base filter object
 *
 * @constructor
 * @abstract
 * @memberof carto.filter
 * @api
 */
function Base() {}

_.extend(Base.prototype, Backbone.Events);

Base.prototype._getValidationError = function (code) {
  return new CartoValidationError('filter', code);
};

module.exports = Base;

/**
 * Fired when bounds have changed. Handler gets a parameter with the new bounds.
 *
 * @event boundsChanged
 * @type {carto.filter.Bounds}
 * @api
 */

/**
 * Fired when circle filter has changed. Handler gets a parameter with the new circle.
 *
 * @event circleChanged
 * @type {carto.filter.CircleData}
 * @api
 */

/**
 * Fired when polygon filter has changed. Handler gets a parameter with the new polygon.
 *
 * @event polygonChanged
 * @type {carto.filter.PolygonData}
 * @api
 */

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var util = {};

util.isCORSSupported = function () {
  return 'withCredentials' in new XMLHttpRequest();
};

util.array2hex = function (byteArr) {
  var encoded = [];
  for (var i = 0; i < byteArr.length; ++i) {
    encoded.push(String.fromCharCode(byteArr[i] + 128));
  }
  return util.btoa(encoded.join(''));
};

util.btoa = function (data) {
  if (typeof window['btoa'] === 'function') {
    return util.encodeBase64Native(data);
  }

  return util.encodeBase64(data);
};

util.encodeBase64Native = function (input) {
  return btoa(input);
};

// ie7 btoa,
// from http://phpjs.org/functions/base64_encode/
util.encodeBase64 = function (data) {
  var b64 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
  var o1, o2, o3, h1, h2, h3, h4, bits;
  var i = 0;
  var ac = 0;
  var enc = '';
  var tmpArr = [];

  if (!data) {
    return data;
  }

  do {
    // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmpArr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmpArr.join('');

  var r = data.length % 3;
  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);
};

util.uniqueCallbackName = function (str) {
  util._callback_c = util._callback_c || 0;
  ++util._callback_c;
  return util.crc32(str) + '_' + util._callback_c;
};

util.crc32 = function (str) {
  var crcTable = util._crcTable || (util._crcTable = util._makeCRCTable());
  var crc = 0 ^ -1;

  for (var i = 0, l = str.length; i < l; ++i) {
    crc = crc >>> 8 ^ crcTable[(crc ^ str.charCodeAt(i)) & 0xff];
  }

  return (crc ^ -1) >>> 0;
};

util._makeCRCTable = function () {
  var c;
  var crcTable = [];
  for (var n = 0; n < 256; ++n) {
    c = n;
    for (var k = 0; k < 8; ++k) {
      c = c & 1 ? 0xedb88320 ^ c >>> 1 : c >>> 1;
    }
    crcTable[n] = c;
  }
  return crcTable;
};

util._inferBrowser = function (ua) {
  var browser = {};
  ua = ua || typeof window !== 'undefined' && window.navigator.userAgent || '';
  function detectIE() {
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');
    if (msie > -1 || trident > -1) return true;
    return false;
  }

  function getIEVersion() {
    if (!document.compatMode) return 5;
    if (!window.XMLHttpRequest) return 6;
    if (!document.querySelector) return 7;
    if (!document.addEventListener) return 8;
    if (!window.atob) return 9;
    if (document.all) return 10;else return 11;
  }

  if (detectIE()) {
    browser.ie = { version: getIEVersion() };
  } else if (ua.indexOf('Edge/') > -1) browser.edge = ua;else if (ua.indexOf('Chrome') > -1) browser.chrome = ua;else if (ua.indexOf('Firefox') > -1) browser.firefox = ua;else if (ua.indexOf('Opera') > -1) browser.opera = ua;else if (ua.indexOf('Safari') > -1) browser.safari = ua;
  return browser;
};

util.browser = util._inferBrowser();

util.isMobileDevice = function () {
  return (/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  );
};

util.supportsTouch = function () {
  return 'ontouchstart' in window || navigator.msMaxTouchPoints;
};

var webGLSupportedAndEnabled = null;
util.isWebGLSupported = function () {
  if (webGLSupportedAndEnabled === null) {
    var canvas = document.createElement('canvas');
    webGLSupportedAndEnabled = !!window.WebGLRenderingContext && !!(canvas.getContext('webgl') || canvas.getContext('experimental-webgl'));
  }
  return webGLSupportedAndEnabled;
};

/**
 * Returns true if the string ends with provided suffix
 */
util.endsWith = function (str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
};

util.checkRequiredOpts = function (actualOpts, requiredOpts, from) {
  _.each(requiredOpts, function (item) {
    if (_.isUndefined(actualOpts[item])) {
      throw new Error(item + ' is required' + (from ? ' to initialize ' + from : ''));
    }
  });
};

/**
 * Checks that the correct Leaflet version is loaded
 */
util.isLeafletLoaded = function () {
  if (!window.L) {
    throw new Error('Leaflet is required');
  }
  if (window.L.version < '1.0.0') {
    throw new Error('Leaflet +1.0 is required');
  }
};

/**
 * Checks that the correct Google Maps version is loaded
 */
util.isGoogleMapsLoaded = function () {
  if (!window.google) {
    throw new Error('Google Maps is required');
  }
  if (!window.google.maps) {
    throw new Error('Google Maps is required');
  }
  if (window.google.maps.version < '3.31.0') {
    throw new Error('Google Maps version should be >= 3.31');
  }
};

module.exports = util;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Types of spatial filters
 */
var types = {
  BBOX: 'bbox',
  CIRCLE: 'circle',
  POLYGON: 'polygon'
};

module.exports = types;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var Model = __webpack_require__(2);
var util = __webpack_require__(7);

var REQUIRED_OPTS = ['camshaftReference', 'engine'];

var STATUS = {
  PENDING: 'pending',
  WAITING: 'waiting',
  RUNNING: 'running',
  FAILED: 'failed',
  READY: 'ready'
};

var AnalysisModel = Model.extend({

  initialize: function initialize(attrs, opts) {
    opts = opts || {};
    util.checkRequiredOpts(opts, REQUIRED_OPTS, 'AnalysisModel');

    this._camshaftReference = opts.camshaftReference;
    this._engine = opts.engine;

    this._initBinds();

    // A hash that tracks which models (layers / dataviews) have
    // this analysis model as their "source"
    this._referencedBy = {};
  },

  url: function url() {
    var url = this.get('url');
    if (url) {
      if (this.get('apiKey')) {
        url += '?api_key=' + this.get('apiKey');
      } else if (this.get('authToken')) {
        var authToken = this.get('authToken');
        if (authToken instanceof Array) {
          var tokens = _.map(authToken, function (token) {
            return 'auth_token[]=' + token;
          });
          url += '?' + tokens.join('&');
        } else {
          url += '?auth_token=' + authToken;
        }
      }
      return url;
    }
  },

  setOk: function setOk() {
    this.unset('error');
  },

  setError: function setError(error) {
    this.set({
      error: error,
      status: STATUS.FAILED
    });
  },

  _initBinds: function _initBinds() {
    this.bind('change:type', function () {
      this.unbind(null, null, this);
      this._initBinds();
      this._reload();
    }, this);

    _.each(this.getParamNames(), function (paramName) {
      this.bind('change:' + paramName, this._reload, this);
    }, this);

    this.bind('change:status', function () {
      // If the status changed from any other status to "ready"
      // and this analysis is the "source" of any layer or dataview,
      // vis has to be reloaded.
      if (this._hadStatus() && this.isReady() && this.isSourceOfAnyModel()) {
        this._reload();
      }
    }, this);
  },

  _hadStatus: function _hadStatus() {
    return this.previous('status');
  },

  _reload: function _reload() {
    this._engine.reload({
      error: this._onMapReloadError.bind(this)
    });
  },

  _onMapReloadError: function _onMapReloadError() {
    this.set('status', STATUS.FAILED);
  },

  remove: function remove() {
    this.trigger('destroy', this);
    this.stopListening();
  },

  findAnalysisById: function findAnalysisById(analysisId) {
    if (this.get('id') === analysisId) {
      return this;
    }
    var sources = _.chain(this._getSourceNames()).map(function (sourceName) {
      var source = this.get(sourceName);
      if (source) {
        return source.findAnalysisById(analysisId);
      }
    }, this).compact().value();

    return sources[0];
  },

  _getSourceNames: function _getSourceNames() {
    return this._camshaftReference.getSourceNamesForAnalysisType(this.get('type'));
  },

  isDone: function isDone() {
    return this._hasStatus([STATUS.READY, STATUS.FAILED]);
  },

  isLoading: function isLoading() {
    return this._hasStatus([STATUS.PENDING, STATUS.WAITING, STATUS.RUNNING]);
  },

  isReady: function isReady() {
    return this._hasStatus(STATUS.READY);
  },

  isFailed: function isFailed() {
    return this._hasStatus(STATUS.FAILED);
  },

  _hasStatus: function _hasStatus(statuses) {
    if (!_.isArray(statuses)) {
      statuses = [statuses];
    }
    return _.contains(statuses, this._getStatus());
  },

  _getStatus: function _getStatus() {
    return this.get('status');
  },

  toJSON: function toJSON() {
    var json = _.pick(this.attributes, 'id', 'type');
    json.params = _.pick(this.attributes, this.getParamNames());
    var sourceNames = this._getSourceNames();
    _.each(sourceNames, function (sourceName) {
      var source = {};
      var sourceInfo = this.get(sourceName);
      if (sourceInfo) {
        source[sourceName] = sourceInfo.toJSON();
        _.extend(json.params, source);
      }
    }, this);

    return json;
  },

  getParamNames: function getParamNames() {
    return this._camshaftReference.getParamNamesForAnalysisType(this.get('type'));
  },

  /**
   * Return an Array with the complete node list for this analysis.
   */
  getNodes: function getNodes() {
    // Add current node to the list
    var nodes = [this];
    // Recursively iterate through the inputs ( source nodes have no inputs )
    if (this.get('type') !== 'source') {
      _.forEach(this._getSourceNames(), function (sourceName) {
        var source = this.get(sourceName);
        if (source) {
          nodes = nodes.concat(source.getNodes());
        }
      }, this);
    }
    return nodes;
  },

  /**
   * Return a Collection with the complete node list for this analysis.
   */
  getNodesCollection: function getNodesCollection() {
    return new Backbone.Collection(this.getNodes());
  },

  /**
   * Compare two analysisModels.
   */
  equals: function equals(analysisModel) {
    if (!(analysisModel instanceof AnalysisModel)) {
      return false;
    }
    // Since all analysis are created using the analysisFactory different ids ensure different nodes.
    return this.get('id') === analysisModel.get('id');
  },

  markAsSourceOf: function markAsSourceOf(model) {
    this._referencedBy[model.cid] = true;
  },

  isSourceOfAnyModel: function isSourceOfAnyModel() {
    return Object.keys(this._referencedBy).length > 0;
  },

  isSourceOf: function isSourceOf(model) {
    return !!this._referencedBy[model.cid];
  },

  unmarkAsSourceOf: function unmarkAsSourceOf(model) {
    delete this._referencedBy[model.cid];
  }
}, {
  STATUS: STATUS
});

module.exports = AnalysisModel;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var status = __webpack_require__(5).status;
var SourceBase = __webpack_require__(12);
var FilterBase = __webpack_require__(6);
var SQLFilterBase = __webpack_require__(11);
var SpatialFilterTypes = __webpack_require__(8);
var CartoError = __webpack_require__(4);
var CartoValidationError = __webpack_require__(3);

/**
 * Base class for dataview objects.
 *
 * Dataviews are a way to extract data from a CARTO account in predefined ways
 * (eg: a list of categories, the result of a formula operation, etc.).
 *
 * **This object should not be used directly**
 *
 * The data used in a dataviews cames from a {@link carto.source.Base|source} that might change
 * due to different reasons (eg: SQL query changed).
 *
 * When dataview data changes the dataview will trigger events to notify subscribers when new data is available.
 *
 * @example
 * // Keep your widget data sync. Remember each dataview has his own data format.
 * dataview.on('dataChanged', newData => {
 *  renderWidget(newData);
 * })
 *
 * @constructor
 * @abstract
 * @memberof carto.dataview
 * @fires dataChanged
 * @fires columnChanged
 * @fires statusChanged
 * @fires error
 * @api
 */
function Base() {}

_.extend(Base.prototype, Backbone.Events);

/**
 * Return the current dataview status.
 *
 * @return {carto.dataview.status} Current dataview status
 * @api
 */
Base.prototype.getStatus = function () {
  return this._status;
};

/**
 * Return true is the current status is loading.
 *
 * @return {boolean}
 * @api
 */
Base.prototype.isLoading = function () {
  return this._status === status.LOADING;
};

/**
 * Return true is the current status is loaded.
 *
 * @return {boolean}
 * @api
 */
Base.prototype.isLoaded = function () {
  return this._status === status.LOADED;
};

/**
 * Return true is the current status is error.
 *
 * @return {boolean}
 * @api
 */
Base.prototype.hasError = function () {
  return this._status === status.ERROR;
};

/**
 * Enable the dataview. When enabled, a dataview fetches new data
 * when the map changes (changing map configuration or changing map
 * bounding box).
 *
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.enable = function () {
  return this._setEnabled(true);
};

/**
 * Disable the dataview. This stops the dataview from fetching new
 * data when there is a map change (like changing map configuration or changing map
 * bounding box).
 *
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.disable = function () {
  return this._setEnabled(false);
};

/**
 * Return true if the dataview is enabled.
 *
 * @return {boolean}
 * @api
 */
Base.prototype.isEnabled = function () {
  return this._enabled;
};

/**
 * Return the current source where the dataview gets the data from.
 *
 * @return {carto.source.Base} Current source object
 * @api
 */
Base.prototype.getSource = function () {
  return this._source;
};

/**
 * Set the dataview column.
 *
 * @param  {string} column
 * @fires columnChanged
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.setColumn = function (column) {
  this._checkColumn(column);
  this._column = column;
  if (this._internalModel) {
    this._internalModel.set('column', this._column);
  }
  return this;
};

/**
 * Return the current dataview column where the dataview is applied.
 *
 * @return {string} Current dataview column
 * @api
 */
Base.prototype.getColumn = function () {
  return this._column;
};

/**
 * Add a {@link carto.filter.Base|filter}.
 *
 * @param  {carto.filter.Base} filter
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.addFilter = function (filter) {
  this._checkFilter(filter);
  this._addSpatialFilter(filter);
  return this;
};

/**
 * Remove a {@link carto.filter.Base|filter}.
 *
 * @param  {carto.filter.Base} filter
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.removeFilter = function (filter) {
  this._checkFilter(filter);
  this._removeSpatialFilter(filter);
  return this;
};

/**
 * Check if a {@link carto.filter.Base|filter} exists in the dataview.
 *
 * @param  {carto.filter.Base} filter
 * @return {carto.dataview.Base} this
 * @api
 */
Base.prototype.hasFilter = function (filter) {
  this._checkFilter(filter);
  var hasBBoxFilter = filter === this._boundingBoxFilter && this._internalModel && this._internalModel.get('sync_on_bbox_change');

  var hasCircleFilter = filter === this._circleFilter && this._internalModel && this._internalModel.get('sync_on_circle_change');

  var hasPolygonFilter = filter === this._polygonFilter && this._internalModel && this._internalModel.get('sync_on_polygon_change');

  return hasBBoxFilter || hasCircleFilter || hasPolygonFilter;
};

Base.prototype.getData = function () {
  throw new Error('getData must be implemented by the particular dataview.');
};

// Protected methods

Base.prototype.DEFAULTS = {};

/**
 * Initialize dataview.
 *
 * @param {carto.source.Base} source - The source where the dataview will fetch the data
 * @param {string} column - The column name to get the data
 * @param  {object} options - It depends on the instance
 */
Base.prototype._initialize = function (source, column, options) {
  options = _.defaults(options || {}, this.DEFAULTS);

  this._checkSource(source);
  this._checkColumn(column);
  this._checkOptions(options);

  this._source = source;
  this._column = column;
  this._options = options;

  this._status = status.NOT_LOADED;
  this._enabled = true;
  this._boundingBoxFilter = null;
};

Base.prototype._checkSource = function (source) {
  if (!(source instanceof SourceBase)) {
    throw this._getValidationError('sourceRequired');
  }
};

Base.prototype._checkColumn = function (column) {
  if (_.isUndefined(column)) {
    throw this._getValidationError('columnRequired');
  }
  if (!_.isString(column)) {
    throw this._getValidationError('columnString');
  }
  if (_.isEmpty(column)) {
    throw this._getValidationError('emptyColumn');
  }
};

Base.prototype._checkOptions = function (options) {
  throw new Error('_checkOptions must be implemented by the particular dataview.');
};

Base.prototype._checkFilter = function (filter) {
  if (!(filter instanceof FilterBase) || filter instanceof SQLFilterBase) {
    throw this._getValidationError('filterRequired');
  }
};

Base.prototype._createInternalModel = function (engine) {
  throw new Error('_createInternalModel must be implemented by the particular dataview.');
};

Base.prototype._setEnabled = function (enabled) {
  this._enabled = enabled;
  if (this._internalModel) {
    this._internalModel.set('enabled', enabled);
  }
  return this;
};

Base.prototype._listenToInternalModelSharedEvents = function () {
  if (this._internalModel) {
    this.listenTo(this._internalModel, 'change:data', this._onDataChanged);
    this.listenTo(this._internalModel, 'change:column', this._onColumnChanged);
    this.listenTo(this._internalModel, 'loading', this._onStatusLoading);
    this.listenTo(this._internalModel, 'loaded', this._onStatusLoaded);
    this.listenTo(this._internalModel, 'statusError', this._onStatusError);
  }
};

Base.prototype._onDataChanged = function () {
  this.trigger('dataChanged', this.getData());
};

Base.prototype._onColumnChanged = function () {
  if (this._internalModel) {
    this._column = this._internalModel.get('column');
  }
  this.trigger('columnChanged', this._column);
};

Base.prototype._onStatusLoading = function () {
  this._status = status.LOADING;
  this.trigger('statusChanged', this._status);
};

Base.prototype._onStatusLoaded = function () {
  this._status = status.LOADED;
  this.trigger('statusChanged', this._status);
};

Base.prototype._onStatusError = function (model, error) {
  this._status = status.ERROR;
  this.trigger('statusChanged', this._status, error);
  this._triggerError(this, error);
};

Base.prototype._changeProperty = function (key, value, internalKey) {
  var prevValue = this['_' + key];
  this['_' + key] = value;
  if (prevValue === value) {
    return;
  }
  this._triggerChange(key, value);
  if (this._internalModel) {
    this._internalModel.set(internalKey || key, value);
  }
};

Base.prototype._changeProperties = function (properties) {
  var _this = this;

  _.each(properties, function (value, key) {
    var prevValue = _this['_' + key];

    if (prevValue !== value) {
      _this['_' + key] = value;
      _this._triggerChange(key, value);
    }
  });

  if (this._internalModel) {
    this._internalModel.set(properties);
  }
};

Base.prototype._triggerChange = function (key, value) {
  this.trigger(key + 'Changed', value);
};

/**
 * Fire a CartoError event from a internalDataviewError.
 */
Base.prototype._triggerError = function (model, internalDataviewError) {
  this.trigger('error', new CartoError(internalDataviewError));
};

Base.prototype._addSpatialFilter = function (spatialFilter) {
  switch (spatialFilter.type) {
    case SpatialFilterTypes.BBOX:
      this._addBoundingBoxFilter(spatialFilter);
      break;
    case SpatialFilterTypes.CIRCLE:
      this._addCircleFilter(spatialFilter);
      break;
    case SpatialFilterTypes.POLYGON:
      this._addPolygonFilter(spatialFilter);
      break;
    default:
      throw new Error('The filter is not a valid spatial filter.');
  }
};

Base.prototype._removeSpatialFilter = function (spatialFilter) {
  switch (spatialFilter.type) {
    case SpatialFilterTypes.BBOX:
      if (spatialFilter === this._boundingBoxFilter) {
        this._removeBoundingBoxFilter();
      }
      break;
    case SpatialFilterTypes.CIRCLE:
      if (spatialFilter === this._circleFilter) {
        this._removeCircleFilter();
      }
      break;
    case SpatialFilterTypes.POLYGON:
      if (spatialFilter === this._polygonFilter) {
        this._removePolygonFilter();
      }
      break;
    default:
      throw new Error('The filter is not a valid spatial filter.');
  }
};

Base.prototype._addBoundingBoxFilter = function (bboxFilter) {
  if (bboxFilter === this._boundingBoxFilter) {
    return;
  }

  this._boundingBoxFilter = bboxFilter;
  if (this._internalModel) {
    this._internalModel.addBBoxFilter(this._boundingBoxFilter.$getInternalModel());
    this._internalModel.set('sync_on_bbox_change', true);
  }
};

Base.prototype._removeBoundingBoxFilter = function () {
  this._boundingBoxFilter = null;
  if (this._internalModel) {
    this._internalModel.removeBBoxFilter();
    this._internalModel.set('sync_on_bbox_change', false);
  }
};

Base.prototype._addCircleFilter = function (circleFilter) {
  if (circleFilter === this._circleFilter) {
    return;
  }

  this._circleFilter = circleFilter;
  if (this._internalModel) {
    this._internalModel.addCircleFilter(this._circleFilter.$getInternalModel());
    this._internalModel.set('sync_on_circle_change', true);
  }
};

Base.prototype._removeCircleFilter = function () {
  this._circleFilter = null;
  if (this._internalModel) {
    this._internalModel.removeCircleFilter();
    this._internalModel.set('sync_on_circle_change', false);
  }
};

Base.prototype._addPolygonFilter = function (polygonFilter) {
  if (polygonFilter === this._polygonFilter) {
    return;
  }

  this._polygonFilter = polygonFilter;
  if (this._internalModel) {
    this._internalModel.addPolygonFilter(this._polygonFilter.$getInternalModel());
    this._internalModel.set('sync_on_polygon_change', true);
  }
};

Base.prototype._removePolygonFilter = function () {
  this._polygonFilter = null;
  if (this._internalModel) {
    this._internalModel.removePolygonFilter();
    this._internalModel.set('sync_on_polygon_change', false);
  }
};

Base.prototype._getValidationError = function (code) {
  return new CartoValidationError('dataview', code);
};

// Internal public methods

Base.prototype.$setEngine = function (engine) {
  this._source.$setEngine(engine);
  if (!this._internalModel) {
    this._createInternalModel(engine);
    this._listenToInternalModelSharedEvents();
  }
};

Base.prototype.$getInternalModel = function () {
  return this._internalModel;
};

module.exports = Base;

/**
 * Fired when the column name has changed. Handler gets a parameter with the new column name.
 *
 * @event columnChanged
 * @type {string}
 * @api
 */

/**
 * Fired when the status has changed. Handler gets a parameter with the new status.
 *
 * Contains a single argument with the new status.
 *
 * @event statusChanged
 * @type {carto.dataview.status}
 * @api
 */

/**
 * Fired when the data has changed. Handler gets an object with specific data for the type
 * of dataview that triggered the event.
 *
 * @event dataChanged
 * @type {carto.dataview.CategoryData|carto.dataview.FormulaData|carto.dataview.HistogramData|carto.dataview.TimeSeriesData}
 * @api
 */

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = __webpack_require__(0);
var Base = __webpack_require__(6);
var getObjectValue = __webpack_require__(95);

var ALLOWED_OPTIONS = ['includeNull'];
var DEFAULT_JOIN_OPERATOR = 'AND';

/**
 * SQL Filter
 *
 * A SQL filter is the base for all the SQL filters such as the Category Filter or the Range filter
 *
 * @param {string} column - The filtering will be performed against this column
 * @param {object} [options={}]
 * @param {boolean} [options.includeNull] - Include null rows when returning data
 *
 * @class SQLBase
 * @extends carto.filter.Base
 * @memberof carto.filter
 */

var SQLBase = function (_Base) {
  _inherits(SQLBase, _Base);

  function SQLBase(column) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, SQLBase);

    var _this = _possibleConstructorReturn(this, (SQLBase.__proto__ || Object.getPrototypeOf(SQLBase)).call(this));

    _this._checkColumn(column);
    _this._checkOptions(options);

    _this._column = column;
    _this._filters = {};
    _this._options = options;
    return _this;
  }

  /**
   * Set any of the filter conditions, overwriting the previous one.
   * @param {string} filterType - The filter type that you want to set
   * @param {string} filterValue - The value of the filter
   */


  _createClass(SQLBase, [{
    key: 'set',
    value: function set(filterType, filterValue) {
      if (!filterType || !filterValue || !_.isString(filterType)) {
        return;
      }

      var newFilter = _defineProperty({}, filterType, filterValue);

      this._checkFilters(newFilter);
      this._filters[filterType] = filterValue;

      this.trigger('change:filters', newFilter);
    }

    /**
     * Set the filter conditions, overriding all the previous ones.
     * @param {object} filters - The object containing all the new filters to apply.
     */

  }, {
    key: 'setFilters',
    value: function setFilters(filters) {
      if (!filters || !_.isObject(filters)) {
        return;
      }

      this._checkFilters(filters);
      this._filters = filters;

      this.trigger('change:filters', filters);
    }

    /**
     * Remove all conditions from current filter
     */

  }, {
    key: 'resetFilters',
    value: function resetFilters() {
      this.setFilters({});
    }
  }, {
    key: '$getSQL',
    value: function $getSQL() {
      var _this2 = this;

      var filters = Object.keys(this._filters);
      var sql = filters.map(function (filterType) {
        return _this2._interpolateFilter(filterType, _this2._filters[filterType]);
      }).filter(function (filter) {
        return Boolean(filter);
      }).join(' ' + DEFAULT_JOIN_OPERATOR + ' ');

      if (this._options.includeNull) {
        this._includeNullInQuery(sql);
      }

      if (filters.length > 1) {
        return '(' + sql + ')';
      }

      return sql;
    }
  }, {
    key: '_checkColumn',
    value: function _checkColumn(column) {
      if (_.isUndefined(column)) {
        throw this._getValidationError('columnRequired');
      }

      if (!_.isString(column)) {
        throw this._getValidationError('columnString');
      }

      if (_.isEmpty(column)) {
        throw this._getValidationError('emptyColumn');
      }
    }
  }, {
    key: '_checkFilters',
    value: function _checkFilters(filters) {
      var _this3 = this;

      Object.keys(filters).forEach(function (filter) {
        var isFilterValid = _.contains(_this3.ALLOWED_FILTERS, filter);

        if (!isFilterValid) {
          throw _this3._getValidationError('invalidFilter' + filter);
        }

        var parameters = _this3.PARAMETER_SPECIFICATION[filter].parameters;
        var haveCorrectType = parameters.every(function (parameter) {
          var parameterValue = getObjectValue(filters, parameter.name);
          return parameter.allowedTypes.some(function (type) {
            return parameterIsOfType(type, parameterValue);
          });
        });

        if (!haveCorrectType) {
          throw _this3._getValidationError('invalidParameterType' + filter);
        }
      });
    }
  }, {
    key: '_checkOptions',
    value: function _checkOptions(options) {
      var _this4 = this;

      Object.keys(options).forEach(function (option) {
        var isOptionValid = _.contains(ALLOWED_OPTIONS, option);

        if (!isOptionValid) {
          throw _this4._getValidationError('invalidOption' + option);
        }
      });
    }
  }, {
    key: '_convertValueToSQLString',
    value: function _convertValueToSQLString(filterValue) {
      var _this5 = this;

      if (_.isDate(filterValue)) {
        return '\'' + filterValue.toISOString() + '\'';
      }

      if (_.isArray(filterValue)) {
        return filterValue.map(function (value) {
          return _this5._convertValueToSQLString(value);
        }).join(',');
      }

      if (_.isObject(filterValue)) {
        Object.keys(filterValue).forEach(function (key) {
          if (key === 'query') {
            return;
          }

          filterValue[key] = _this5._convertValueToSQLString(filterValue[key]);
        });

        return filterValue;
      }

      if (_.isNumber(filterValue)) {
        return filterValue;
      }

      return '\'' + normalizeString(filterValue.toString()) + '\'';
    }
  }, {
    key: '_interpolateFilter',
    value: function _interpolateFilter(filterType, filterValues) {
      var sqlString = _.template(this.SQL_TEMPLATES[filterType]);
      var value = this._convertValueToSQLString(filterValues);

      return sqlString({ column: this._column, value: value });
    }
  }, {
    key: '_includeNullInQuery',
    value: function _includeNullInQuery(sql) {
      var filters = Object.keys(this._filters);

      if (filters.length > 1) {
        sql = '(' + sql + ')';
      }

      return '(' + sql + ' OR ' + this._column + ' IS NULL)';
    }
  }]);

  return SQLBase;
}(Base);

var parameterIsOfType = function parameterIsOfType(parameterType, parameterValue) {
  return _['is' + parameterType](parameterValue);
};

var normalizeString = function normalizeString(value) {
  return value.replace(/\n/g, '\\n').replace(/\"/g, '\\"').replace(/'/g, "''");
};

module.exports = SQLBase;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var CartoError = __webpack_require__(4);
var FiltersCollection = __webpack_require__(21);
var EVENTS = __webpack_require__(14);

/**
 * Base data source object.
 *
 * The methods listed in the {@link carto.source.Base|source.Base} object are available in all source objects.
 *
 * Use a source to reference the data used in a {@link carto.dataview.Base|dataview} or a {@link carto.layer.Base|layer}.
 *
 * {@link carto.source.Base} should not be used directly use {@link carto.source.Dataset} or {@link carto.source.SQL} instead.
 *
 * @constructor
 * @fires error
 * @abstract
 * @memberof carto.source
 * @api
 */
function Base() {
  this._id = Base.$generateId();
  this._hasFiltersApplied = false;
  this._appliedFilters = new FiltersCollection();
}

_.extend(Base.prototype, Backbone.Events);

/**
 * The instance id will be autogenerated by incrementing this variable.
 */
Base.$nextId = 0;

/**
 * Static funciton used internally to autogenerate source ids.
 */
Base.$generateId = function () {
  return 'S' + ++Base.$nextId;
};

/**
 * Return a unique autogenerated id.
 *
 * @return {string} Unique autogenerated id
 */
Base.prototype.getId = function () {
  return this._id;
};

Base.prototype._createInternalModel = function (engine) {
  throw new Error('_createInternalModel must be implemented by the particular source');
};

/**
 * Fire a CartoError event from a internalError
 */
Base.prototype._triggerError = function (model, internalError) {
  this.trigger(EVENTS.ERROR, new CartoError(internalError, { analysis: this }));
};

Base.prototype.$setEngine = function (engine) {
  if (!this._internalModel) {
    this._internalModel = this._createInternalModel(engine);
    this._internalModel.on('change:error', this._triggerError, this);
  }
};

/**
 * Return the engine form the source internal model
 */
Base.prototype.$getEngine = function (engine) {
  if (this._internalModel) {
    return this._internalModel._engine;
  }
};

/**
 * Return the real CARTO.js model used by the source.
 */
Base.prototype.$getInternalModel = function () {
  return this._internalModel;
};

/**
 * Get added filters
 *
 * @returns {Array} Added filters
 * @api
 */
Base.prototype.getFilters = function () {
  return this._appliedFilters.getFilters();
};

/**
 * Add new filter to the source
 *
 * @param {(carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR)} filter
 * @api
 */
Base.prototype.addFilter = function (filter) {
  this._hasFiltersApplied = true;
  this._appliedFilters.addFilter(filter);
};

/**
 * Add new filters to the source
 *
 * @param {Array<carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR>} filters
 * @api
 */
Base.prototype.addFilters = function (filters) {
  var _this = this;

  filters.forEach(function (filter) {
    return _this.addFilter(filter);
  });
};

/**
 * Remove an existing filter from source
 *
 * @param {(carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR)} filter
 * @api
 */
Base.prototype.removeFilter = function (filter) {
  this._appliedFilters.removeFilter(filter);
  this._hasFiltersApplied = Boolean(this._appliedFilters.count());
};

/**
 * Remove existing filters from source
 *
 * @param {Array<carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR>} filters
 * @api
 */
Base.prototype.removeFilters = function (filters) {
  var _this2 = this;

  filters.forEach(function (filter) {
    return _this2.removeFilter(filter);
  });
};

module.exports = Base;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var Engine = __webpack_require__(44);

var NON_RESETEABLE_DEFAULT_ATTRS = ['state', 'visible'];

var LegendModelBase = Backbone.Model.extend({
  defaults: function defaults() {
    return {
      visible: false,
      title: '',
      preHTMLSnippet: '',
      postHTMLSnippet: '',
      state: this.constructor.STATE_LOADING
    };
  },

  initialize: function initialize(attrs, deps) {
    if (!deps.engine) throw new Error('engine is required');

    deps.engine.on(Engine.Events.RELOAD_STARTED, this._onEngineReloadStarted, this);
  },

  _onEngineReloadStarted: function _onEngineReloadStarted() {
    this.set('state', this.constructor.STATE_LOADING);
  },

  isLoading: function isLoading() {
    return this.get('state') === this.constructor.STATE_LOADING;
  },

  isError: function isError() {
    return this.get('state') === this.constructor.STATE_ERROR;
  },

  isSuccess: function isSuccess() {
    return this.get('state') === this.constructor.STATE_SUCCESS;
  },

  show: function show() {
    this.set('visible', true);
  },

  hide: function hide() {
    this.set('visible', false);
  },

  isVisible: function isVisible() {
    return this.get('visible');
  },

  update: function update(attrs) {
    this.set(attrs);
  },

  getNonResettableAttrs: function getNonResettableAttrs() {
    return NON_RESETEABLE_DEFAULT_ATTRS;
  },

  reset: function reset() {
    var defaults = _.omit(this.defaults(), this.getNonResettableAttrs());
    this.set(defaults);
  },

  isAvailable: function isAvailable() {
    return false;
  }
}, {
  STATE_LOADING: 'loading',
  STATE_SUCCESS: 'success',
  STATE_ERROR: 'error'
});

module.exports = LegendModelBase;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Fired when something went wrong on the server side.
 *
 * @event error
 * @type {CartoError}
 * @api
 */

/**
 * Fired when a request to the server completed successfully.
 *
 * @event success
 * @api
 */

module.exports = {
  SUCCESS: 'success',
  ERROR: 'error'
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var PROPERTY_KEY = 'prop';
var MAPPING_KEY = 'mapping';

var RANGE_FILTER_TYPE = 'range';
var CATEGORY_FILTER_TYPE = 'category';
var DEFAULT_FILTER_TYPE = 'default';

var Rule = function Rule(rule) {
  this._rule = rule;
};

Rule.prototype.matchesAnyProperty = function (props) {
  return this._matches(this._rule[PROPERTY_KEY], props);
};

Rule.prototype.matchesAnyMapping = function (mappings) {
  return this._matches(this._rule[MAPPING_KEY], mappings);
};

Rule.prototype._matches = function (value, acceptedValues) {
  if (_.isString(acceptedValues)) {
    acceptedValues = [acceptedValues];
  }
  return _.contains(acceptedValues, value);
};

Rule.prototype.getBucketsWithRangeFilter = function () {
  return this._getBucketsByFilterType(RANGE_FILTER_TYPE);
};

Rule.prototype.getBucketsWithCategoryFilter = function () {
  return this._getBucketsByFilterType(CATEGORY_FILTER_TYPE);
};

Rule.prototype.getBucketsWithDefaultFilter = function () {
  return this._getBucketsByFilterType(DEFAULT_FILTER_TYPE);
};

Rule.prototype._getBucketsByFilterType = function (filterType) {
  if (this._rule) {
    return _.select(this._rule.buckets, function (bucket) {
      return bucket.filter.type === filterType;
    });
  }
  return [];
};

Rule.prototype.getColumn = function () {
  return this._rule.column;
};

Rule.prototype.getMapping = function () {
  return this._rule.mapping;
};

Rule.prototype.getProperty = function () {
  return this._rule.prop;
};

Rule.prototype.getFilterAvg = function () {
  return this._rule.stats.filter_avg;
};

module.exports = Rule;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var TILED_LAYER_TYPE = 'Tiled';
var PLAIN_LAYER_TYPE = 'Plain';
var WMS_LAYER_TYPE = 'WMS';
var GMAPS_BASE_LAYER_TYPE = 'GMapsBase';
var CARTODB_LAYER_TYPE = 'CartoDB';
var TORQUE_LAYER_TYPE = 'torque';

var isLayerOfType = function isLayerOfType(layerModel, layerType) {
  return layerModel.get('type').toLowerCase() === layerType.toLowerCase();
};

module.exports = {
  isTiledLayer: function isTiledLayer(layerModel) {
    return isLayerOfType(layerModel, TILED_LAYER_TYPE);
  },

  isPlainLayer: function isPlainLayer(layerModel) {
    return isLayerOfType(layerModel, PLAIN_LAYER_TYPE);
  },

  isWMSLayer: function isWMSLayer(layerModel) {
    return isLayerOfType(layerModel, WMS_LAYER_TYPE);
  },

  isGoogleMapsBaseLayer: function isGoogleMapsBaseLayer(layerModel) {
    return isLayerOfType(layerModel, GMAPS_BASE_LAYER_TYPE);
  },

  isCartoDBLayer: function isCartoDBLayer(layerModel) {
    return isLayerOfType(layerModel, CARTODB_LAYER_TYPE);
  },

  isTorqueLayer: function isTorqueLayer(layerModel) {
    return isLayerOfType(layerModel, TORQUE_LAYER_TYPE);
  }
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function( global, factory ) {

	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//

var arr = [];

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,

	version = "2.1.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {
	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	// (You can seed the arguments with an array of args, but this is
	// only used internally.)
	each: function( callback, args ) {
		return jQuery.each( this, callback, args );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map(this, function( elem, i ) {
			return callback.call( elem, i, elem );
		}));
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[j] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor(null);
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[0] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction(target) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {
		// Only deal with non-null/undefined values
		if ( (options = arguments[ i ]) != null ) {
			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)) ) ) {
					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray(src) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject(src) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend({
	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isFunction: function( obj ) {
		return jQuery.type(obj) === "function";
	},

	isArray: Array.isArray,

	isWindow: function( obj ) {
		return obj != null && obj === obj.window;
	},

	isNumeric: function( obj ) {
		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		return !jQuery.isArray( obj ) && (obj - parseFloat( obj ) + 1) >= 0;
	},

	isPlainObject: function( obj ) {
		// Not plain objects:
		// - Any object or value whose internal [[Class]] property is not "[object Object]"
		// - DOM nodes
		// - window
		if ( jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		if ( obj.constructor &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
			return false;
		}

		// If the function hasn't returned already, we're confident that
		// |obj| is a plain object, created by {} or constructed with new Object
		return true;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		// Support: Android<4.0, iOS<6 (functionish RegExp)
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call(obj) ] || "object" :
			typeof obj;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		var script,
			indirect = eval;

		code = jQuery.trim( code );

		if ( code ) {
			// If the code includes a valid, prologue position
			// strict mode pragma, execute code by injecting a
			// script tag into the document.
			if ( code.indexOf("use strict") === 1 ) {
				script = document.createElement("script");
				script.text = code;
				document.head.appendChild( script ).parentNode.removeChild( script );
			} else {
			// Otherwise, avoid the DOM node creation, insertion
			// and removal by using an indirect global eval
				indirect( code );
			}
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Support: IE9-11+
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	// args is for internal usage only
	each: function( obj, callback, args ) {
		var value,
			i = 0,
			length = obj.length,
			isArray = isArraylike( obj );

		if ( args ) {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.apply( obj[ i ], args );

					if ( value === false ) {
						break;
					}
				}
			}

		// A special, fast, case for the most common use of each
		} else {
			if ( isArray ) {
				for ( ; i < length; i++ ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					value = callback.call( obj[ i ], i, obj[ i ] );

					if ( value === false ) {
						break;
					}
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArraylike( Object(arr) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var value,
			i = 0,
			length = elems.length,
			isArray = isArraylike( elems ),
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArray ) {
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var tmp, args, proxy;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: Date.now,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
});

// Populate the class2type map
jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
});

function isArraylike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	if ( obj.nodeType === 1 && length ) {
		return true;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",
	// http://www.w3.org/TR/css3-syntax/#characters
	characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Loosely modeled on CSS identifier characters
	// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
	// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = characterEncoding.replace( "w", "w#" ),

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + characterEncoding + ")" ),
		"CLASS": new RegExp( "^\\.(" + characterEncoding + ")" ),
		"TAG": new RegExp( "^(" + characterEncoding.replace( "w", "w*" ) + ")" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var match, elem, m, nodeType,
		// QSA vars
		i, groups, old, nid, newContext, newSelector;

	if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
		setDocument( context );
	}

	context = context || document;
	results = results || [];
	nodeType = context.nodeType;

	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	if ( !seed && documentIsHTML ) {

		// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
		if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
			// Speed-up: Sizzle("#ID")
			if ( (m = match[1]) ) {
				if ( nodeType === 9 ) {
					elem = context.getElementById( m );
					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document (jQuery #6963)
					if ( elem && elem.parentNode ) {
						// Handle the case where IE, Opera, and Webkit return items
						// by name instead of ID
						if ( elem.id === m ) {
							results.push( elem );
							return results;
						}
					} else {
						return results;
					}
				} else {
					// Context is not a document
					if ( context.ownerDocument && (elem = context.ownerDocument.getElementById( m )) &&
						contains( context, elem ) && elem.id === m ) {
						results.push( elem );
						return results;
					}
				}

			// Speed-up: Sizzle("TAG")
			} else if ( match[2] ) {
				push.apply( results, context.getElementsByTagName( selector ) );
				return results;

			// Speed-up: Sizzle(".CLASS")
			} else if ( (m = match[3]) && support.getElementsByClassName ) {
				push.apply( results, context.getElementsByClassName( m ) );
				return results;
			}
		}

		// QSA path
		if ( support.qsa && (!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
			nid = old = expando;
			newContext = context;
			newSelector = nodeType !== 1 && selector;

			// qSA works strangely on Element-rooted queries
			// We can work around this by specifying an extra ID on the root
			// and working up from there (Thanks to Andrew Dupont for the technique)
			// IE 8 doesn't work on object elements
			if ( nodeType === 1 && context.nodeName.toLowerCase() !== "object" ) {
				groups = tokenize( selector );

				if ( (old = context.getAttribute("id")) ) {
					nid = old.replace( rescape, "\\$&" );
				} else {
					context.setAttribute( "id", nid );
				}
				nid = "[id='" + nid + "'] ";

				i = groups.length;
				while ( i-- ) {
					groups[i] = nid + toSelector( groups[i] );
				}
				newContext = rsibling.test( selector ) && testContext( context.parentNode ) || context;
				newSelector = groups.join(",");
			}

			if ( newSelector ) {
				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch(qsaError) {
				} finally {
					if ( !old ) {
						context.removeAttribute("id");
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = attrs.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// If no document and documentElement is available, return
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Set our document
	document = doc;
	docElem = doc.documentElement;
	parent = doc.defaultView;

	// Support: IE>8
	// If iframe document is assigned to "document" variable and if iframe has been reloaded,
	// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
	// IE6-8 do not support the defaultView property so parent will be undefined
	if ( parent && parent !== parent.top ) {
		// IE11 does not have attachEvent, so all must suffer
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Support tests
	---------------------------------------------------------------------- */
	documentIsHTML = !isXML( doc );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( doc.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( doc.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !doc.getElementsByName || !doc.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				// Check parentNode to catch when Blackberry 4.6 returns
				// nodes that are no longer in the document #6963
				return m && m.parentNode ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( doc.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\f]' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = doc.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully does not implement inclusive descendent
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === doc ? -1 :
				b === doc ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return doc;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, outerCache, node, diff, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) {
										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {
							// Seek `elem` from a previously-cached index
							outerCache = parent[ expando ] || (parent[ expando ] = {});
							cache = outerCache[ type ] || [];
							nodeIndex = cache[0] === dirruns && cache[1];
							diff = cache[0] === dirruns && cache[2];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									outerCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						// Use previously-cached element index if available
						} else if ( useCache && (cache = (elem[ expando ] || (elem[ expando ] = {}))[ type ]) && cache[0] === dirruns ) {
							diff = cache[1];

						// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
						} else {
							// Use the same loop as above to seek `elem` from the start
							while ( (node = ++nodeIndex && node && node[ dir ] ||
								(diff = nodeIndex = 0) || start.pop()) ) {

								if ( ( ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1 ) && ++diff ) {
									// Cache the index of each encountered element
									if ( useCache ) {
										(node[ expando ] || (node[ expando ] = {}))[ type ] = [ dirruns, diff ];
									}

									if ( node === elem ) {
										break;
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});
						if ( (oldCache = outerCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							outerCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context !== document && context;
			}

			// Add elements passing elementMatchers directly to results
			// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// Apply set filters to unmatched elements
			matchedCount += i;
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is no seed and only one group
	if ( match.length === 1 ) {

		// Take a shortcut and set the context if the root selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[":"] = jQuery.expr.pseudos;
jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = (/^<(\w+)\s*\/?>(?:<\/\1>|)$/);



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		});

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		});

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( indexOf.call( qualifier, elem ) >= 0 ) !== not;
	});
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		}));
};

jQuery.fn.extend({
	find: function( selector ) {
		var i,
			len = this.length,
			ret = [],
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter(function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			}) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow(this, selector || [], false) );
	},
	not: function( selector ) {
		return this.pushStack( winnow(this, selector || [], true) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
});


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[0] === "<" && selector[ selector.length - 1 ] === ">" && selector.length >= 3 ) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && (match[1] || !context) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[1] ) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[1],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[1] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {
							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[2] );

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if ( elem && elem.parentNode ) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || rootjQuery ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof rootjQuery.ready !== "undefined" ?
				rootjQuery.ready( selector ) :
				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.extend({
	dir: function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( (elem = elem[ dir ]) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	},

	sibling: function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	}
});

jQuery.fn.extend({
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter(function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[i] ) ) {
					return true;
				}
			}
		});
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[i]; cur && cur !== context; cur = cur.parentNode ) {
				// Always skip document fragments
				if ( cur.nodeType < 11 && (pos ?
					pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector(cur, selectors)) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.unique( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.unique(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter(selector)
		);
	}
});

function sibling( cur, dir ) {
	while ( (cur = cur[dir]) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each({
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return jQuery.dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return jQuery.dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return jQuery.dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return jQuery.dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return jQuery.sibling( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return jQuery.sibling( elem.firstChild );
	},
	contents: function( elem ) {
		return elem.contentDocument || jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {
			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.unique( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
});
var rnotwhite = (/\S+/g);



// String to Object options format cache
var optionsCache = {};

// Convert String-formatted options into Object-formatted ones and store in cache
function createOptions( options ) {
	var object = optionsCache[ options ] = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	});
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		( optionsCache[ options ] || createOptions( options ) ) :
		jQuery.extend( {}, options );

	var // Last fire value (for non-forgettable lists)
		memory,
		// Flag to know if list was already fired
		fired,
		// Flag to know if list is currently firing
		firing,
		// First callback to fire (used internally by add and fireWith)
		firingStart,
		// End of the loop when firing
		firingLength,
		// Index of currently firing callback (modified by remove if needed)
		firingIndex,
		// Actual callback list
		list = [],
		// Stack of fire calls for repeatable lists
		stack = !options.once && [],
		// Fire callbacks
		fire = function( data ) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for ( ; list && firingIndex < firingLength; firingIndex++ ) {
				if ( list[ firingIndex ].apply( data[ 0 ], data[ 1 ] ) === false && options.stopOnFalse ) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if ( list ) {
				if ( stack ) {
					if ( stack.length ) {
						fire( stack.shift() );
					}
				} else if ( memory ) {
					list = [];
				} else {
					self.disable();
				}
			}
		},
		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {
					// First, we save the current length
					var start = list.length;
					(function add( args ) {
						jQuery.each( args, function( _, arg ) {
							var type = jQuery.type( arg );
							if ( type === "function" ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && type !== "string" ) {
								// Inspect recursively
								add( arg );
							}
						});
					})( arguments );
					// Do we need to add the callbacks to the
					// current firing batch?
					if ( firing ) {
						firingLength = list.length;
					// With memory, if we're not firing then
					// we should call right away
					} else if ( memory ) {
						firingStart = start;
						fire( memory );
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function() {
				if ( list ) {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
							// Handle firing indexes
							if ( firing ) {
								if ( index <= firingLength ) {
									firingLength--;
								}
								if ( index <= firingIndex ) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ? jQuery.inArray( fn, list ) > -1 : !!( list && list.length );
			},
			// Remove all callbacks from the list
			empty: function() {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function() {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function() {
				return !list;
			},
			// Lock the list in its current state
			lock: function() {
				stack = undefined;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function() {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( list && ( !fired || stack ) ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					if ( firing ) {
						stack.push( args );
					} else {
						fire( args );
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend({

	Deferred: function( func ) {
		var tuples = [
				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks("once memory"), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks("once memory"), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks("memory") ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred(function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[1] ](function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.done( newDefer.resolve )
										.fail( newDefer.reject )
										.progress( newDefer.notify );
								} else {
									newDefer[ tuple[ 0 ] + "With" ]( this === promise ? newDefer.promise() : this, fn ? [ returned ] : arguments );
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[1] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(function() {
					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[0] ] = function() {
				deferred[ tuple[0] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[0] + "With" ] = list.fireWith;
		});

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 || ( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );
					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// Add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject )
						.progress( updateFunc( i, progressContexts, progressValues ) );
				} else {
					--remaining;
				}
			}
		}

		// If we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
});


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {
	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend({
	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
});

/**
 * The ready event handler and self cleanup method
 */
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed, false );
	window.removeEventListener( "load", completed, false );
	jQuery.ready();
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called after the browser event has already occurred.
		// We once tried to use readyState "interactive" here, but it caused issues like the one
		// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
		if ( document.readyState === "complete" ) {
			// Handle it asynchronously to allow scripts the opportunity to delay ready
			setTimeout( jQuery.ready );

		} else {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed, false );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed, false );
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = jQuery.access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			jQuery.access( elems, fn, i, key[i], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {
			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn( elems[i], key, raw ? value : value.call( elems[i], i, fn( elems[i], key ) ) );
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			len ? fn( elems[0], key ) : emptyGet;
};


/**
 * Determines whether an object can have data
 */
jQuery.acceptData = function( owner ) {
	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	/* jshint -W018 */
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};


function Data() {
	// Support: Android<4,
	// Old WebKit does not have Object.preventExtensions/freeze method,
	// return new empty object instead with no [[set]] accessor
	Object.defineProperty( this.cache = {}, 0, {
		get: function() {
			return {};
		}
	});

	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;
Data.accepts = jQuery.acceptData;

Data.prototype = {
	key: function( owner ) {
		// We can accept data for non-element nodes in modern browsers,
		// but we should not, see #8335.
		// Always return the key for a frozen object.
		if ( !Data.accepts( owner ) ) {
			return 0;
		}

		var descriptor = {},
			// Check if the owner object already has a cache key
			unlock = owner[ this.expando ];

		// If not, create one
		if ( !unlock ) {
			unlock = Data.uid++;

			// Secure it in a non-enumerable, non-writable property
			try {
				descriptor[ this.expando ] = { value: unlock };
				Object.defineProperties( owner, descriptor );

			// Support: Android<4
			// Fallback to a less secure definition
			} catch ( e ) {
				descriptor[ this.expando ] = unlock;
				jQuery.extend( owner, descriptor );
			}
		}

		// Ensure the cache object
		if ( !this.cache[ unlock ] ) {
			this.cache[ unlock ] = {};
		}

		return unlock;
	},
	set: function( owner, data, value ) {
		var prop,
			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		// Handle: [ owner, key, value ] args
		if ( typeof data === "string" ) {
			cache[ data ] = value;

		// Handle: [ owner, { properties } ] args
		} else {
			// Fresh assignments by object are shallow copied
			if ( jQuery.isEmptyObject( cache ) ) {
				jQuery.extend( this.cache[ unlock ], data );
			// Otherwise, copy the properties one-by-one to the cache object
			} else {
				for ( prop in data ) {
					cache[ prop ] = data[ prop ];
				}
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		// Either a valid cache is found, or will be created.
		// New caches will be created and the unlock returned,
		// allowing direct access to the newly created
		// empty data object. A valid owner object must be provided.
		var cache = this.cache[ this.key( owner ) ];

		return key === undefined ?
			cache : cache[ key ];
	},
	access: function( owner, key, value ) {
		var stored;
		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				((key && typeof key === "string") && value === undefined) ) {

			stored = this.get( owner, key );

			return stored !== undefined ?
				stored : this.get( owner, jQuery.camelCase(key) );
		}

		// [*]When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i, name, camel,
			unlock = this.key( owner ),
			cache = this.cache[ unlock ];

		if ( key === undefined ) {
			this.cache[ unlock ] = {};

		} else {
			// Support array or space separated string of keys
			if ( jQuery.isArray( key ) ) {
				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = key.concat( key.map( jQuery.camelCase ) );
			} else {
				camel = jQuery.camelCase( key );
				// Try the string as a key before any manipulation
				if ( key in cache ) {
					name = [ key, camel ];
				} else {
					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					name = camel;
					name = name in cache ?
						[ name ] : ( name.match( rnotwhite ) || [] );
				}
			}

			i = name.length;
			while ( i-- ) {
				delete cache[ name[ i ] ];
			}
		}
	},
	hasData: function( owner ) {
		return !jQuery.isEmptyObject(
			this.cache[ owner[ this.expando ] ] || {}
		);
	},
	discard: function( owner ) {
		if ( owner[ this.expando ] ) {
			delete this.cache[ owner[ this.expando ] ];
		}
	}
};
var data_priv = new Data();

var data_user = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch( e ) {}

			// Make sure we set the data so it isn't changed later
			data_user.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend({
	hasData: function( elem ) {
		return data_user.hasData( elem ) || data_priv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return data_user.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		data_user.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to data_priv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return data_priv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		data_priv.remove( elem, name );
	}
});

jQuery.fn.extend({
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = data_user.get( elem );

				if ( elem.nodeType === 1 && !data_priv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice(5) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					data_priv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each(function() {
				data_user.set( this, key );
			});
		}

		return access( this, function( value ) {
			var data,
				camelKey = jQuery.camelCase( key );

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {
				// Attempt to get data from the cache
				// with the key as-is
				data = data_user.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to get data from the cache
				// with the key camelized
				data = data_user.get( elem, camelKey );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, camelKey, undefined );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each(function() {
				// First, attempt to store a copy or reference of any
				// data that might've been store with a camelCased key.
				var data = data_user.get( this, camelKey );

				// For HTML5 data-* attribute interop, we have to
				// store property names with dashes in a camelCase form.
				// This might not apply to all properties...*
				data_user.set( this, camelKey, value );

				// *... In the case of properties that might _actually_
				// have dashes, we need to also store a copy of that
				// unchanged property.
				if ( key.indexOf("-") !== -1 && data !== undefined ) {
					data_user.set( this, key, value );
				}
			});
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each(function() {
			data_user.remove( this, key );
		});
	}
});


jQuery.extend({
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = data_priv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = data_priv.access( elem, type, jQuery.makeArray(data) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return data_priv.get( elem, key ) || data_priv.access( elem, key, {
			empty: jQuery.Callbacks("once memory").add(function() {
				data_priv.remove( elem, [ type + "queue", key ] );
			})
		});
	}
});

jQuery.fn.extend({
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[0], type );
		}

		return data === undefined ?
			this :
			this.each(function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[0] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			});
	},
	dequeue: function( type ) {
		return this.each(function() {
			jQuery.dequeue( this, type );
		});
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},
	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = data_priv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
});
var pnum = (/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;

var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" || !jQuery.contains( elem.ownerDocument, elem );
	};

var rcheckableType = (/^(?:checkbox|radio)$/i);



(function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Safari<=5.1
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari<=5.1, Android<4.2
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<=11+
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
})();
var strundefined = typeof undefined;



support.focusinBubbles = "onfocusin" in window;


var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !(events = elemData.events) ) {
			events = elemData.events = {};
		}
		if ( !(eventHandle = elemData.handle) ) {
			eventHandle = elemData.handle = function( e ) {
				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend({
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join(".")
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !(handlers = events[ type ]) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup || special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = data_priv.hasData( elem ) && data_priv.get( elem );

		if ( !elemData || !(events = elemData.events) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[t] ) || [];
			type = origType = tmp[1];
			namespaces = ( tmp[2] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[2] && new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector || selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown || special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;
			data_priv.remove( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split(".") : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf(".") >= 0 ) {
			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split(".");
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf(":") < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join(".");
		event.namespace_re = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === (elem.ownerDocument || document) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( (cur = eventPath[i++]) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( data_priv.get( cur, "events" ) || {} )[ event.type ] && data_priv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && jQuery.acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( (!special._default || special._default.apply( eventPath.pop(), data ) === false) &&
				jQuery.acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					elem[ type ]();
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( data_priv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[0] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( (matched = handlerQueue[ i++ ]) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( (handleObj = matched.handlers[ j++ ]) && !event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.namespace_re || event.namespace_re.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( (jQuery.event.special[ handleObj.origType ] || {}).handle || handleObj.handler )
							.apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( (event.result = ret) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		// Avoid non-left-click bubbling in Firefox (#3861)
		if ( delegateCount && cur.nodeType && (!event.button || event.type !== "click") ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.disabled !== true || event.type !== "click" ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) >= 0 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push({ elem: cur, handlers: matches });
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push({ elem: this, handlers: handlers.slice( delegateCount ) });
		}

		return handlerQueue;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split(" "),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
		filter: function( event, original ) {
			var eventDoc, doc, body,
				button = original.button;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX + ( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) - ( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY + ( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) - ( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: Cordova 2.5 (WebKit) (#13255)
		// All events should have a target; Cordova deviceready doesn't
		if ( !event.target ) {
			event.target = document;
		}

		// Support: Safari 6.0+, Chrome<28
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	special: {
		load: {
			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {
			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {
			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	simulate: function( type, elem, event, bubble ) {
		// Piggyback on a donor event to simulate a different one.
		// Fake originalEvent to avoid donor's stopPropagation, but if the
		// simulated event prevents default then we do the same on the donor.
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true,
				originalEvent: {}
			}
		);
		if ( bubble ) {
			jQuery.event.trigger( e, null, elem );
		} else {
			jQuery.event.dispatch.call( elem, e );
		}
		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle, false );
	}
};

jQuery.Event = function( src, props ) {
	// Allow instantiation without the 'new' keyword
	if ( !(this instanceof jQuery.Event) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&
				// Support: Android<4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && e.preventDefault ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && e.stopPropagation ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// Support: Chrome 15+
jQuery.each({
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mousenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || (related !== target && !jQuery.contains( target, related )) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
});

// Support: Firefox, Chrome, Safari
// Create "bubbling" focus and blur events
if ( !support.focusinBubbles ) {
	jQuery.each({ focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ), true );
			};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				data_priv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = data_priv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					data_priv.remove( doc, fix );

				} else {
					data_priv.access( doc, fix, attaches );
				}
			}
		};
	});
}

jQuery.fn.extend({

	on: function( types, selector, data, fn, /*INTERNAL*/ one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				this.on( type, selector, data, types[ type ], one );
			}
			return this;
		}

		if ( data == null && fn == null ) {
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return this;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return this.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		});
	},
	one: function( types, selector, data, fn ) {
		return this.on( types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {
			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {
			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {
			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each(function() {
			jQuery.event.remove( this, types, fn, selector );
		});
	},

	trigger: function( type, data ) {
		return this.each(function() {
			jQuery.event.trigger( type, data, this );
		});
	},
	triggerHandler: function( type, data ) {
		var elem = this[0];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
});


var
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	rtagName = /<([\w:]+)/,
	rhtml = /<|&#?\w+;/,
	rnoInnerhtml = /<(?:script|style|link)/i,
	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptType = /^$|\/(?:java|ecma)script/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,

	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

// Support: IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: 1.x compatibility
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName("tbody")[0] ||
			elem.appendChild( elem.ownerDocument.createElement("tbody") ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );

	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute("type");
	}

	return elem;
}

// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		data_priv.set(
			elems[ i ], "globalEval", !refElements || data_priv.get( refElements[ i ], "globalEval" )
		);
	}
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( data_priv.hasData( src ) ) {
		pdataOld = data_priv.access( src );
		pdataCur = data_priv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( data_user.hasData( src ) ) {
		udataOld = data_user.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		data_user.set( dest, udataCur );
	}
}

function getAll( context, tag ) {
	var ret = context.getElementsByTagName ? context.getElementsByTagName( tag || "*" ) :
			context.querySelectorAll ? context.querySelectorAll( tag || "*" ) :
			[];

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], ret ) :
		ret;
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

jQuery.extend({
	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	buildFragment: function( elems, context, scripts, selection ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement("div") );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + elem.replace( rxhtmlTag, "<$1></$2>" ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: QtWebKit, PhantomJS
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( (elem = nodes[ i++ ]) ) {

			// #4087 - If origin and destination elements are the same, and this is
			// that element, do not do anything
			if ( selection && jQuery.inArray( elem, selection ) !== -1 ) {
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( (elem = tmp[ j++ ]) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	},

	cleanData: function( elems ) {
		var data, elem, type, key,
			special = jQuery.event.special,
			i = 0;

		for ( ; (elem = elems[ i ]) !== undefined; i++ ) {
			if ( jQuery.acceptData( elem ) ) {
				key = elem[ data_priv.expando ];

				if ( key && (data = data_priv.cache[ key ]) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}
					if ( data_priv.cache[ key ] ) {
						// Discard any remaining `private` data
						delete data_priv.cache[ key ];
					}
				}
			}
			// Discard any remaining `user` data
			delete data_user.cache[ elem[ data_user.expando ] ];
		}
	}
});

jQuery.fn.extend({
	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each(function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				});
		}, null, value, arguments.length );
	},

	append: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		});
	},

	prepend: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		});
	},

	before: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		});
	},

	after: function() {
		return this.domManip( arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		});
	},

	remove: function( selector, keepData /* Internal Use Only */ ) {
		var elem,
			elems = selector ? jQuery.filter( selector, this ) : this,
			i = 0;

		for ( ; (elem = elems[i]) != null; i++ ) {
			if ( !keepData && elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem ) );
			}

			if ( elem.parentNode ) {
				if ( keepData && jQuery.contains( elem.ownerDocument, elem ) ) {
					setGlobalEval( getAll( elem, "script" ) );
				}
				elem.parentNode.removeChild( elem );
			}
		}

		return this;
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; (elem = this[i]) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map(function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		});
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = value.replace( rxhtmlTag, "<$1></$2>" );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var arg = arguments[ 0 ];

		// Make the changes, replacing each context element with the new content
		this.domManip( arguments, function( elem ) {
			arg = this.parentNode;

			jQuery.cleanData( getAll( this ) );

			if ( arg ) {
				arg.replaceChild( elem, this );
			}
		});

		// Force removal if there was no new content (e.g., from empty arguments)
		return arg && (arg.length || arg.nodeType) ? this : this.remove();
	},

	detach: function( selector ) {
		return this.remove( selector, true );
	},

	domManip: function( args, callback ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = this.length,
			set = this,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return this.each(function( index ) {
				var self = set.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				self.domManip( args, callback );
			});
		}

		if ( l ) {
			fragment = jQuery.buildFragment( args, this[ 0 ].ownerDocument, false, this );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			if ( first ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
							// Support: QtWebKit
							// jQuery.merge because push.apply(_, arraylike) throws
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( this[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!data_priv.access( node, "globalEval" ) && jQuery.contains( doc, node ) ) {

							if ( node.src ) {
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval( node.textContent.replace( rcleanScript, "" ) );
							}
						}
					}
				}
			}
		}

		return this;
	}
});

jQuery.each({
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: QtWebKit
			// .get() because push.apply(_, arraylike) throws
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
});


var iframe,
	elemdisplay = {};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */
// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var style,
		elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && ( style = window.getDefaultComputedStyle( elem[ 0 ] ) ) ?

			// Use of this method is a temporary fix (more like optimization) until something better comes along,
			// since it was removed from specification and supported only in FF
			style.display : jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = (iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" )).appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = iframe[ 0 ].contentDocument;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = (/^margin/);

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if ( elem.ownerDocument.defaultView.opener ) {
			return elem.ownerDocument.defaultView.getComputedStyle( elem, null );
		}

		return window.getComputedStyle( elem, null );
	};



function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,
		style = elem.style;

	computed = computed || getStyles( elem );

	// Support: IE9
	// getPropertyValue is only needed for .css('filter') (#12537)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];
	}

	if ( computed ) {

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// Support: iOS < 6
		// A tribute to the "awesome hack by Dean Edwards"
		// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
		// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
		if ( rnumnonpx.test( ret ) && rmargin.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {
	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {
				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return (this.get = hookFn).apply( this, arguments );
		}
	};
}


(function() {
	var pixelPositionVal, boxSizingReliableVal,
		docElem = document.documentElement,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	if ( !div.style ) {
		return;
	}

	// Support: IE9-11+
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" +
		"position:absolute";
	container.appendChild( div );

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computePixelPositionAndBoxSizingReliable() {
		div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" +
			"box-sizing:border-box;display:block;margin-top:1%;top:1%;" +
			"border:1px;padding:1px;width:4px;position:absolute";
		div.innerHTML = "";
		docElem.appendChild( container );

		var divStyle = window.getComputedStyle( div, null );
		pixelPositionVal = divStyle.top !== "1%";
		boxSizingReliableVal = divStyle.width === "4px";

		docElem.removeChild( container );
	}

	// Support: node.js jsdom
	// Don't assume that getComputedStyle is a property of the global object
	if ( window.getComputedStyle ) {
		jQuery.extend( support, {
			pixelPosition: function() {

				// This test is executed only once but we still do memoizing
				// since we can use the boxSizingReliable pre-computing.
				// No need to check if the test was already performed, though.
				computePixelPositionAndBoxSizingReliable();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				if ( boxSizingReliableVal == null ) {
					computePixelPositionAndBoxSizingReliable();
				}
				return boxSizingReliableVal;
			},
			reliableMarginRight: function() {

				// Support: Android 2.3
				// Check if div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container. (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				// This support function is only executed once so no memoizing is needed.
				var ret,
					marginDiv = div.appendChild( document.createElement( "div" ) );

				// Reset CSS: box-sizing; display; margin; border; padding
				marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				marginDiv.style.marginRight = marginDiv.style.width = "0";
				div.style.width = "1px";
				docElem.appendChild( container );

				ret = !parseFloat( window.getComputedStyle( marginDiv, null ).marginRight );

				docElem.removeChild( container );
				div.removeChild( marginDiv );

				return ret;
			}
		});
	}
})();


// A method for quickly swapping in/out CSS properties to get correct calculations.
jQuery.swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	rrelNum = new RegExp( "^([+-])=(" + pnum + ")", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ];

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( style, name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in style ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[0].toUpperCase() + name.slice(1),
		origName = name,
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in style ) {
			return name;
		}
	}

	return origName;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {
		// Both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {
			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// At this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {
			// At this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// At this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// Some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {
		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test(val) ) {
			return val;
		}

		// Check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// Use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = data_priv.get( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {
			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] = data_priv.access( elem, "olddisplay", defaultDisplay(elem.nodeName) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display !== "none" || !hidden ) {
				data_priv.set( elem, "olddisplay", hidden ? display : jQuery.css( elem, "display" ) );
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

jQuery.extend({

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {
		"float": "cssFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( style, origName ) );

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && (ret = rrelNum.exec( value )) ) {
				value = ( ret[1] + 1 ) * ret[2] + parseFloat( jQuery.css( elem, name ) );
				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number, add 'px' to the (except for certain CSS properties)
			if ( type === "number" && !jQuery.cssNumber[ origName ] ) {
				value += "px";
			}

			// Support: IE9-11+
			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !("set" in hooks) || (value = hooks.set( elem, value, extra )) !== undefined ) {
				style[ name ] = value;
			}

		} else {
			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks && (ret = hooks.get( elem, false, extra )) !== undefined ) {
				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] || ( jQuery.cssProps[ origName ] = vendorPropName( elem.style, origName ) );

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || jQuery.isNumeric( num ) ? num || 0 : val;
		}
		return val;
	}
});

jQuery.each([ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) && elem.offsetWidth === 0 ?
					jQuery.swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, name, extra );
					}) :
					getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
});

// Support: Android 2.3
jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return jQuery.swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each({
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
});

jQuery.fn.extend({
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each(function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		});
	}
});


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || "swing";
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			if ( tween.elem[ tween.prop ] != null &&
				(!tween.elem.style || tween.elem.style[ tween.prop ] == null) ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );
			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {
			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.style && ( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null || jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE9
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	}
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rfxnum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" ),
	rrun = /queueHooks$/,
	animationPrefilters = [ defaultPrefilter ],
	tweeners = {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value ),
				target = tween.cur(),
				parts = rfxnum.exec( value ),
				unit = parts && parts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

				// Starting value computation is required for potential unit mismatches
				start = ( jQuery.cssNumber[ prop ] || unit !== "px" && +target ) &&
					rfxnum.exec( jQuery.css( tween.elem, prop ) ),
				scale = 1,
				maxIterations = 20;

			if ( start && start[ 3 ] !== unit ) {
				// Trust units reported by jQuery.css
				unit = unit || start[ 3 ];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style( tween.elem, prop, start + unit );

				// Update scale, tolerating zero or NaN from tween.cur(),
				// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while ( scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations );
			}

			// Update tween properties
			if ( parts ) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[ 1 ] ?
					start + ( parts[ 1 ] + 1 ) * parts[ 2 ] :
					+parts[ 2 ];
			}

			return tween;
		} ]
	};

// Animations created synchronously will run synchronously
function createFxNow() {
	setTimeout(function() {
		fxNow = undefined;
	});
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( tweeners[ prop ] || [] ).concat( tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( (tween = collection[ index ].call( animation, prop, value )) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = data_priv.get( elem, "fxshow" );

	// Handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always(function() {
			// Ensure the complete handler is called before this completes
			anim.always(function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			});
		});
	}

	// Height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE9-10 do not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			data_priv.get( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
			style.display = "inline-block";
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always(function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		});
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = data_priv.access( elem, "fxshow", {} );
		}

		// Store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done(function() {
				jQuery( elem ).hide();
			});
		}
		anim.done(function() {
			var prop;

			data_priv.remove( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		});
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( (display === "none" ? defaultDisplay( elem.nodeName ) : display) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = animationPrefilters.length,
		deferred = jQuery.Deferred().always( function() {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ]);

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise({
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, { specialEasing: {} }, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,
					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		}),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = animationPrefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		})
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.split(" ");
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			tweeners[ prop ] = tweeners[ prop ] || [];
			tweeners[ prop ].unshift( callback );
		}
	},

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			animationPrefilters.unshift( callback );
		} else {
			animationPrefilters.push( callback );
		}
	}
});

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend({
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || data_priv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each(function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = data_priv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && (type == null || timers[ index ].queue === type) ) {
					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		});
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each(function() {
			var index,
				data = data_priv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		});
	}
});

jQuery.each([ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
});

// Generate shortcuts for custom animations
jQuery.each({
	slideDown: genFx("show"),
	slideUp: genFx("hide"),
	slideToggle: genFx("toggle"),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
});

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];
		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,
	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = setTimeout( next, time );
		hooks.stop = function() {
			clearTimeout( timeout );
		};
	});
};


(function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: iOS<=5.1, Android<=4.2+
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE<=11+
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: Android<=2.3
	// Options inside disabled selects are incorrectly marked as disabled
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE<=11+
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
})();


var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend({
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each(function() {
			jQuery.removeAttr( this, name );
		});
	}
});

jQuery.extend({
	attr: function( elem, name, value ) {
		var hooks, ret,
			nType = elem.nodeType;

		// don't get/set attributes on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === strundefined ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {

			if ( value === null ) {
				jQuery.removeAttr( elem, name );

			} else if ( hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ) {
				return ret;

			} else {
				elem.setAttribute( name, value + "" );
				return value;
			}

		} else if ( hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ) {
			return ret;

		} else {
			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ?
				undefined :
				ret;
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( (name = attrNames[i++]) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {
					// Set corresponding property to false
					elem[ propName ] = false;
				}

				elem.removeAttribute( name );
			}
		}
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	}
});

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {
			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};
jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle;
		if ( !isXML ) {
			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ name ];
			attrHandle[ name ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				name.toLowerCase() :
				null;
			attrHandle[ name ] = handle;
		}
		return ret;
	};
});




var rfocusable = /^(?:input|select|textarea|button)$/i;

jQuery.fn.extend({
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each(function() {
			delete this[ jQuery.propFix[ name ] || name ];
		});
	}
});

jQuery.extend({
	propFix: {
		"for": "htmlFor",
		"class": "className"
	},

	prop: function( elem, name, value ) {
		var ret, hooks, notxml,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( !elem || nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		notxml = nType !== 1 || !jQuery.isXMLDoc( elem );

		if ( notxml ) {
			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			return hooks && "set" in hooks && (ret = hooks.set( elem, value, name )) !== undefined ?
				ret :
				( elem[ name ] = value );

		} else {
			return hooks && "get" in hooks && (ret = hooks.get( elem, name )) !== null ?
				ret :
				elem[ name ];
		}
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {
				return elem.hasAttribute( "tabindex" ) || rfocusable.test( elem.nodeName ) || elem.href ?
					elem.tabIndex :
					-1;
			}
		}
	}
});

if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		}
	};
}

jQuery.each([
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
});




var rclass = /[\t\r\n\f]/g;

jQuery.fn.extend({
	addClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).addClass( value.call( this, j, this.className ) );
			});
		}

		if ( proceed ) {
			// The disjunction here is for better compressibility (see removeClass)
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					" "
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, clazz, j, finalValue,
			proceed = arguments.length === 0 || typeof value === "string" && value,
			i = 0,
			len = this.length;

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( j ) {
				jQuery( this ).removeClass( value.call( this, j, this.className ) );
			});
		}
		if ( proceed ) {
			classes = ( value || "" ).match( rnotwhite ) || [];

			for ( ; i < len; i++ ) {
				elem = this[ i ];
				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( elem.className ?
					( " " + elem.className + " " ).replace( rclass, " " ) :
					""
				);

				if ( cur ) {
					j = 0;
					while ( (clazz = classes[j++]) ) {
						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) >= 0 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = value ? jQuery.trim( cur ) : "";
					if ( elem.className !== finalValue ) {
						elem.className = finalValue;
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each(function( i ) {
				jQuery( this ).toggleClass( value.call(this, i, this.className, stateVal), stateVal );
			});
		}

		return this.each(function() {
			if ( type === "string" ) {
				// Toggle individual class names
				var className,
					i = 0,
					self = jQuery( this ),
					classNames = value.match( rnotwhite ) || [];

				while ( (className = classNames[ i++ ]) ) {
					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( type === strundefined || type === "boolean" ) {
				if ( this.className ) {
					// store className if set
					data_priv.set( this, "__className__", this.className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				this.className = this.className || value === false ? "" : data_priv.get( this, "__className__" ) || "";
			}
		});
	},

	hasClass: function( selector ) {
		var className = " " + selector + " ",
			i = 0,
			l = this.length;
		for ( ; i < l; i++ ) {
			if ( this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf( className ) >= 0 ) {
				return true;
			}
		}

		return false;
	}
});




var rreturn = /\r/g;

jQuery.fn.extend({
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[0];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] || jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks && "get" in hooks && (ret = hooks.get( elem, "value" )) !== undefined ) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each(function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				});
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !("set" in hooks) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		});
	}
});

jQuery.extend({
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// IE6-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&
							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ? !option.disabled : option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled || !jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];
					if ( (option.selected = jQuery.inArray( option.value, values ) >= 0) ) {
						optionSet = true;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
});

// Radios and checkboxes getter/setter
jQuery.each([ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery(elem).val(), value ) >= 0 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute("value") === null ? "on" : elem.value;
		};
	}
});




// Return jQuery for attributes-only inclusion


jQuery.each( ("blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu").split(" "), function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
});

jQuery.fn.extend({
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	},

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {
		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ? this.off( selector, "**" ) : this.off( types, selector || "**", fn );
	}
});


var nonce = jQuery.now();

var rquery = (/\?/);



// Support: Android 2.3
// Workaround failure to string-cast null input
jQuery.parseJSON = function( data ) {
	return JSON.parse( data + "" );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE9
	try {
		tmp = new DOMParser();
		xml = tmp.parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,
	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = window.location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {
			// For each dataType in the dataTypeExpression
			while ( (dataType = dataTypes[i++]) ) {
				// Prepend if requested
				if ( dataType[0] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					(structure[ dataType ] = structure[ dataType ] || []).unshift( func );

				// Otherwise append
				} else {
					(structure[ dataType ] = structure[ dataType ] || []).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[ dataTypeOrTransport ] ) {
				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		});
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || (deep = {}) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {
		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[0] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}
		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},
		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

		// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {
								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend({

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /xml/,
			html: /html/,
			json: /json/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,
			// URL without anti-cache param
			cacheURL,
			// Response headers
			responseHeadersString,
			responseHeaders,
			// timeout handle
			timeoutTimer,
			// Cross-domain detection vars
			parts,
			// To know if global events are to be dispatched
			fireGlobals,
			// Loop variable
			i,
			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),
			// Callbacks context
			callbackContext = s.context || s,
			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && ( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,
			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks("once memory"),
			// Status-dependent callbacks
			statusCode = s.statusCode || {},
			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},
			// The jqXHR state
			state = 0,
			// Default abort message
			strAbort = "canceled",
			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( (match = rheaders.exec( responseHeadersString )) ) {
								responseHeaders[ match[1].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" ).replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger("ajaxStart");
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[0] ] ?
				s.accepts[ s.dataTypes[0] ] + ( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend && ( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}
			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = setTimeout(function() {
					jqXHR.abort("timeout");
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {
				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );
				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader("Last-Modified");
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader("etag");
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {
				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger("ajaxStop");
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
});

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {
		// Shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		return jQuery.ajax({
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		});
	};
});


jQuery._evalUrl = function( url ) {
	return jQuery.ajax({
		url: url,
		type: "GET",
		dataType: "script",
		async: false,
		global: false,
		"throws": true
	});
};


jQuery.fn.extend({
	wrapAll: function( html ) {
		var wrap;

		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapAll( html.call(this, i) );
			});
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map(function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			}).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each(function( i ) {
				jQuery( this ).wrapInner( html.call(this, i) );
			});
		}

		return this.each(function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		});
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each(function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call(this, i) : html );
		});
	},

	unwrap: function() {
		return this.parent().each(function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		}).end();
	}
});


jQuery.expr.filters.hidden = function( elem ) {
	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
};
jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {
		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {
				// Treat each array item as a scalar.
				add( prefix, v );

			} else {
				// Item is non-scalar (array or object), encode its numeric index.
				buildParams( prefix + "[" + ( typeof v === "object" ? i : "" ) + "]", v, traditional, add );
			}
		});

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {
		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {
		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		});

	} else {
		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend({
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map(function() {
			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		})
		.filter(function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		})
		.map(function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					}) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		}).get();
	}
});


jQuery.ajaxSettings.xhr = function() {
	try {
		return new XMLHttpRequest();
	} catch( e ) {}
};

var xhrId = 0,
	xhrCallbacks = {},
	xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE9
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]();
		}
	});
}

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport(function( options ) {
	var callback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr(),
					id = ++xhrId;

				xhr.open( options.type, options.url, options.async, options.username, options.password );

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers["X-Requested-With"] ) {
					headers["X-Requested-With"] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							delete xhrCallbacks[ id ];
							callback = xhr.onload = xhr.onerror = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {
								complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status,
									xhr.statusText
								);
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined,
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				xhr.onerror = callback("error");

				// Create the abort callback
				callback = xhrCallbacks[ id ] = callback("abort");

				try {
					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {
					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




// Install script dataType
jQuery.ajaxSetup({
	accepts: {
		script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /(?:java|ecma)script/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
});

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
});

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {
	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery("<script>").prop({
					async: true,
					charset: s.scriptCharset,
					src: s.url
				}).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
});




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup({
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
});

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" && !( s.contentType || "" ).indexOf("application/x-www-form-urlencoded") && rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters["script json"] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always(function() {
			// Restore preexisting value
			window[ callbackName ] = overwritten;

			// Save back as free
			if ( s[ callbackName ] ) {
				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		});

		// Delegate to script
		return "script";
	}
});




// data: string of html
// context (optional): If specified, the fragment will be created in this context, defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[1] ) ];
	}

	parsed = jQuery.buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf(" ");

	if ( off >= 0 ) {
		selector = jQuery.trim( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax({
			url: url,

			// if "type" variable is undefined, then "GET" method will be used
			type: type,
			dataType: "html",
			data: params
		}).done(function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		}).complete( callback && function( jqXHR, status ) {
			self.each( callback, response || [ jqXHR.responseText, status, jqXHR ] );
		});
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [ "ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend" ], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
});




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep(jQuery.timers, function( fn ) {
		return elem === fn.elem;
	}).length;
};




var docElem = window.document.documentElement;

/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf("auto") > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {
			options = options.call( elem, i, curOffset );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend({
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each(function( i ) {
					jQuery.offset.setOffset( this, options, i );
				});
		}

		var docElem, win,
			elem = this[ 0 ],
			box = { top: 0, left: 0 },
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// Support: BlackBerry 5, iOS 3 (original iPhone)
		// If we don't have gBCR, just use 0,0 rather than error
		if ( typeof elem.getBoundingClientRect !== strundefined ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top + win.pageYOffset - docElem.clientTop,
			left: box.left + win.pageXOffset - docElem.clientLeft
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {
			// Assume getBoundingClientRect is there when computed position is fixed
			offset = elem.getBoundingClientRect();

		} else {
			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map(function() {
			var offsetParent = this.offsetParent || docElem;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) && jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || docElem;
		});
	}
});

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : window.pageXOffset,
					top ? val : window.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
});

// Support: Safari<7+, Chrome<37+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
});


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name }, function( defaultExtra, funcName ) {
		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {
					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	});
});


// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === strundefined ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;

}));


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Model = __webpack_require__(2);
var BOUNDING_BOX_FILTER_WAIT = 350;

module.exports = Model.extend({
  initialize: function initialize(mapAdapter) {
    this._bounds = {};

    if (mapAdapter) {
      this._mapAdapter = mapAdapter;
      this.setBounds(this._mapAdapter.getBounds());
      this._initBinds();
    }
  },

  _initBinds: function _initBinds() {
    this.listenTo(this._mapAdapter, 'boundsChanged', _.debounce(this._boundsChanged, BOUNDING_BOX_FILTER_WAIT));
  },

  _stopBinds: function _stopBinds() {
    if (this._mapAdapter) {
      this.stopListening(this._mapAdapter, 'boundsChanged');
    }
  },

  _boundsChanged: function _boundsChanged(bounds) {
    this.setBounds(bounds);
  },

  setBounds: function setBounds(bounds) {
    this._bounds = bounds;
    this.trigger('boundsChanged', bounds);
  },

  getBounds: function getBounds() {
    return this._bounds;
  },

  areBoundsAvailable: function areBoundsAvailable() {
    return _.isFinite(this._bounds.west);
  },

  serialize: function serialize() {
    return [this._bounds.west, this._bounds.south, this._bounds.east, this._bounds.north].join(',');
  },

  clean: function clean() {
    this._stopBinds();
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(1);

/**
 * Abort ongoing request if it exists
 */
module.exports = function (method, model, options) {
  var self = arguments[1];

  if (this._xhr) {
    this._xhr.abort();
  }
  this._xhr = Backbone.sync.apply(this, arguments);
  this._xhr.always(function () {
    self._xhr = null;
  });
  return this._xhr;
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Model = __webpack_require__(2);
var BackboneAbortSync = __webpack_require__(19);
var AnalysisModel = __webpack_require__(9);
var util = __webpack_require__(7);
var parseWindshaftErrors = __webpack_require__(25);

var UNFETCHED_STATUS = 'unfetched';
var FETCHING_STATUS = 'fetching';
var FETCHED_STATUS = 'fetched';
var FETCH_ERROR_STATUS = 'error';

var REQUEST_GET_MAX_URL_LENGTH = 2083; // IE11

var REQUIRED_OPTS = ['engine'];

/**
 * Default dataview model
 */
module.exports = Model.extend({
  defaults: {
    url: '',
    data: [],
    sync_on_bbox_change: true,
    sync_on_circle_change: true,
    sync_on_polygon_change: true,
    enabled: true,
    status: UNFETCHED_STATUS
  },

  url: function url() {
    var params = _.union([this._getSpatialFilterParam()], this._getDataviewSpecificURLParams());

    this._addAuthTo(params);

    var urlWithParams = this.get('url') + '?' + params.join('&');

    if (urlWithParams.length > REQUEST_GET_MAX_URL_LENGTH) {
      throw new Error('URL length is longer than allowed (' + REQUEST_GET_MAX_URL_LENGTH + ' chars). ' + 'Check your filters (eg. if using a Polygon filter, reduce the number of vertices).');
    }
    return urlWithParams;
  },

  _addAuthTo: function _addAuthTo(params) {
    if (this._engine.getApiKey()) {
      params.push('api_key=' + this._engine.getApiKey());
    } else if (this._engine.getAuthToken()) {
      var authToken = this._engine.getAuthToken();
      if (authToken instanceof Array) {
        _.each(authToken, function (token) {
          params.push('auth_token[]=' + token);
        });
      } else {
        params.push('auth_token=' + authToken);
      }
    }
  },

  _getSpatialFilterParam: function _getSpatialFilterParam() {
    if (this._bboxFilter) {
      return this._getBoundingBoxFilterParam();
    }

    if (this._circleFilter) {
      return this._getCircleFilterParam();
    }

    if (this._polygonFilter) {
      return this._getPolygonFilterParam();
    }
  },

  _getBoundingBoxFilterParam: function _getBoundingBoxFilterParam() {
    var result = '';

    this._checkBBoxFilter();
    if (this.syncsOnBoundingBoxChanges()) {
      result = 'bbox=' + this._bboxFilter.serialize();
    }

    return result;
  },

  _getCircleFilterParam: function _getCircleFilterParam() {
    var result = '';

    this._checkCircleFilter();
    if (this.syncsOnCircleChanges()) {
      result = 'circle=' + this._circleFilter.serialize();
    }

    return result;
  },

  _getPolygonFilterParam: function _getPolygonFilterParam() {
    var result = '';

    this._checkPolygonFilter();
    if (this.syncsOnPolygonChanges()) {
      result = 'polygon=' + this._polygonFilter.serialize();
    }

    return result;
  },

  /**
   * Subclasses might override this method to define extra params that will be appended
   * to the dataview's URL.
   * @return {Array} An array of strings in the form of "key=value".
   */
  _getDataviewSpecificURLParams: function _getDataviewSpecificURLParams() {
    return [];
  },

  initialize: function initialize(attrs, opts) {
    attrs = attrs || {};
    opts = opts || {};
    util.checkRequiredOpts(opts, REQUIRED_OPTS, 'DataviewModelBase');

    this._hasBinds = false;

    this._engine = opts.engine;

    if (!attrs.source) throw new Error('source is a required attr');
    this._checkSourceAttribute(this.getSource());
    this.getSource().markAsSourceOf(this);

    if (!attrs.id) {
      this.set('id', this.defaults.type + '-' + this.cid);
    }

    this.sync = BackboneAbortSync.bind(this);

    // filter is optional, so have to guard before using it
    this.filter = opts.filter;
    if (this.filter) {
      this.filter.set('dataviewId', this.id);
    }

    this._addSpatialFilterFrom(opts);

    this._initBinds();
  },

  _addSpatialFilterFrom: function _addSpatialFilterFrom(opts) {
    if (opts.bboxFilter) {
      this.addBBoxFilter(opts.bboxFilter);
    }

    if (opts.circleFilter) {
      this.addCircleFilter(opts.circleFilter);
    }

    if (opts.polygonFilter) {
      this.addPolygonFilter(opts.polygonFilter);
    }
  },


  _initBinds: function _initBinds() {
    this.listenToOnce(this, 'change:url', function () {
      this._checkBBoxFilter();
      if (this.syncsOnBoundingBoxChanges() && !this._bboxFilter.areBoundsAvailable()) {
        // wait until map gets bounds from view
        this.listenTo(this._bboxFilter, 'boundsChanged', this._fetch);
      } else {
        this._fetch();
      }
    });

    if (this.filter) {
      this.listenTo(this.filter, 'change', this._onFilterChanged);
    }

    this.getSource().on('change:status', this._onAnalysisStatusChange, this);
  },

  _onChangeBinds: function _onChangeBinds() {
    this.on('change:sync_on_bbox_change', function () {
      this.refresh();
    }, this);

    this.on('change:url', function (model, value, opts) {
      this._newDataAvailable = true;
      if (this._shouldFetchOnURLChange(opts && _.pick(opts, ['forceFetch', 'sourceId']))) {
        this.refresh();
      }
    }, this);

    this.on('change:enabled', function (mdl, isEnabled) {
      if (isEnabled && this._newDataAvailable) {
        this.refresh();
        this._newDataAvailable = false;
      }
    }, this);
  },

  _onMapBoundsChanged: function _onMapBoundsChanged() {
    if (this._shouldFetchOnBoundingBoxChange()) {
      // If the widget is the first one created it changes the map bounds
      // and cancels the first ._fetch request so we have to call ._fetch here
      // instead of .refresh to set the binds if they're not set up yet
      this._fetch();
    }

    if (this.syncsOnBoundingBoxChanges()) {
      this._newDataAvailable = true;
    }
  },

  _onCircleChanged: function _onCircleChanged() {
    if (this._shouldFetchOnCircleChange()) {
      this._fetch();
    }

    if (this.syncsOnCircleChanges()) {
      this._newDataAvailable = true;
    }
  },

  _onPolygonChanged: function _onPolygonChanged() {
    if (this._shouldFetchOnPolygonChange()) {
      this._fetch();
    }

    if (this.syncsOnPolygonChanges()) {
      this._newDataAvailable = true;
    }
  },

  _fetch: function _fetch() {
    this.fetch({
      success: function () {
        if (!this._hasBinds) {
          this._hasBinds = true;
          this._onChangeBinds();
        }
      }.bind(this)
    });
  },

  _onAnalysisStatusChange: function _onAnalysisStatusChange(analysis, status) {
    if (analysis.isLoading()) {
      this._triggerLoading();
    } else if (analysis.isFailed()) {
      this._triggerStatusError(analysis.get('error'));
    }
    // loaded will be triggered through the default behavior, so not necessary to react on that status here
  },

  _triggerLoading: function _triggerLoading() {
    this.trigger('loading', this);
  },

  _triggerStatusError: function _triggerStatusError(error) {
    this.trigger('statusError', this, error); // Backbone already emits an event `error` in failed requests. Avoiding name collision.
  },

  /**
   * @protected
   */
  _onFilterChanged: function _onFilterChanged(filter) {
    this._reload({
      sourceId: this.getSourceId()
    });
  },

  _reloadAndForceFetch: function _reloadAndForceFetch() {
    this._reload({
      sourceId: this.getSourceId(),
      forceFetch: true
    });
  },

  _reload: function _reload(opts) {
    opts = opts || {};
    this._engine.reload(opts);
  },

  _shouldFetchOnURLChange: function _shouldFetchOnURLChange(options) {
    options = options || {};
    var sourceId = options.sourceId;
    var forceFetch = options.forceFetch;

    if (forceFetch) {
      return true;
    }

    return this.isEnabled() && this._sourceAffectsMyOwnSource(sourceId);
  },

  _sourceAffectsMyOwnSource: function _sourceAffectsMyOwnSource(sourceId) {
    if (!sourceId) {
      return true;
    }
    var sourceAnalysis = this.getSource();
    return sourceAnalysis && sourceAnalysis.findAnalysisById(sourceId);
  },

  _shouldFetchOnBoundingBoxChange: function _shouldFetchOnBoundingBoxChange() {
    return this.isEnabled() && this.syncsOnBoundingBoxChanges();
  },

  _shouldFetchOnCircleChange: function _shouldFetchOnCircleChange() {
    return this.isEnabled() && this.syncsOnCircleChanges();
  },

  _shouldFetchOnPolygonChange: function _shouldFetchOnPolygonChange() {
    return this.isEnabled() && this.syncsOnPolygonChanges();
  },

  refresh: function refresh() {
    this.fetch();
  },

  addBBoxFilter: function addBBoxFilter(bboxFilter) {
    if (!bboxFilter) {
      return;
    }
    this._stopListeningBBoxChanges();
    this._bboxFilter = bboxFilter;
    this._listenToBBoxChanges();
  },

  removeBBoxFilter: function removeBBoxFilter() {
    this._stopListeningBBoxChanges();
    this._bboxFilter = null;
  },

  addCircleFilter: function addCircleFilter(circleFilter) {
    if (!circleFilter) {
      return;
    }
    this._stopListeningCircleChanges();
    this._circleFilter = circleFilter;
    this._listenToCircleChanges();
  },

  removeCircleFilter: function removeCircleFilter() {
    this._stopListeningCircleChanges();
    this._circleFilter = null;
  },

  addPolygonFilter: function addPolygonFilter(polygonFilter) {
    if (!polygonFilter) {
      return;
    }
    this._stopListeningPolygonChanges();
    this._polygonFilter = polygonFilter;
    this._listenToPolygonChanges();
  },

  removePolygonFilter: function removePolygonFilter() {
    this._stopListeningPolygonChanges();
    this._polygonFilter = null;
  },

  update: function update(attrs) {
    if (_.has(attrs, 'source')) {
      throw new Error('Source of dataviews cannot be updated');
    }
    attrs = _.pick(attrs, this.constructor.ATTRS_NAMES);

    this.set(attrs);
  },

  getData: function getData() {
    return this.get('data');
  },

  getPreviousData: function getPreviousData() {
    return this.previous('data');
  },

  fetch: function fetch(opts) {
    opts = opts || {};
    this.set('status', FETCHING_STATUS);

    this._triggerLoading();

    if (opts.success) {
      var successCallback = opts && opts.success;
    }

    return Model.prototype.fetch.call(this, _.extend(opts, {
      success: function () {
        this.set('status', FETCHED_STATUS);
        successCallback && successCallback(arguments);
        this.trigger('loaded', this);
      }.bind(this),
      error: function (_model, response) {
        if (!response || response && response.statusText !== 'abort') {
          this.set('status', FETCH_ERROR_STATUS);
          if (this._errorWithBigPolygonFilter(_model)) {
            response.statusText = 'error in the dataview request. ' + 'Check the Polygon filter size (reduce the number of vertices and retry).';
          }
          var error = this._parseError(response);
          this._triggerStatusError(error);
        }
      }.bind(this)
    }));
  },

  _errorWithBigPolygonFilter: function _errorWithBigPolygonFilter(model) {
    var usingPolygonFilter = model && model.attributes && model.attributes.sync_on_polygon_change;
    if (usingPolygonFilter && this.url().length > REQUEST_GET_MAX_URL_LENGTH) {
      return true;
    }
    return false;
  },

  toJSON: function toJSON() {
    throw new Error('toJSON should be defined for each dataview');
  },

  getSourceType: function getSourceType() {
    return this.getSource().get('type');
  },

  getSourceId: function getSourceId() {
    var source = this.getSource();
    return source && source.id;
  },

  getSource: function getSource() {
    return this.get('source');
  },

  isSourceType: function isSourceType() {
    return this.getSourceType() === 'source';
  },

  isFiltered: function isFiltered() {
    var isFiltered = false;
    if (this.filter) {
      isFiltered = !this.filter.isEmpty();
    }
    return isFiltered;
  },

  remove: function remove() {
    this._removeExistingAnalysisBindings();
    this.getSource().unmarkAsSourceOf(this);
    this.trigger('destroy', this);
    this.stopListening();
  },

  _removeExistingAnalysisBindings: function _removeExistingAnalysisBindings() {
    this.getSource().off('change:status', this._onAnalysisStatusChange, this);
  },

  isFetched: function isFetched() {
    return this.get('status') === FETCHED_STATUS;
  },

  isUnavailable: function isUnavailable() {
    return this.get('status') === FETCH_ERROR_STATUS;
  },

  isEnabled: function isEnabled() {
    return this.get('enabled');
  },

  setUnavailable: function setUnavailable() {
    return this.set('status', FETCH_ERROR_STATUS);
  },

  syncsOnBoundingBoxChanges: function syncsOnBoundingBoxChanges() {
    return this.get('sync_on_bbox_change');
  },

  syncsOnCircleChanges: function syncsOnCircleChanges() {
    return this.get('sync_on_circle_change');
  },

  syncsOnPolygonChanges: function syncsOnPolygonChanges() {
    return this.get('sync_on_polygon_change');
  },

  _checkSourceAttribute: function _checkSourceAttribute(source) {
    if (!(source instanceof AnalysisModel)) {
      throw new Error('Source must be an instance of AnalysisModel');
    }
  },

  _checkBBoxFilter: function _checkBBoxFilter() {
    if (this.syncsOnBoundingBoxChanges() && !this._bboxFilter) {
      throw new Error('Cannot sync on bounding box changes. There is no bounding box filter.');
    }
  },

  _checkCircleFilter: function _checkCircleFilter() {
    if (this.syncsOnCircleChanges() && !this._circleFilter) {
      throw new Error('Cannot sync on circle filter changes. There is no circle filter.');
    }
  },

  _checkPolygonFilter: function _checkPolygonFilter() {
    if (this.syncsOnPolygonChanges() && !this._polygonFilter) {
      throw new Error('Cannot sync on polygon filter changes. There is no polygon filter.');
    }
  },

  _listenToBBoxChanges: function _listenToBBoxChanges() {
    if (this._bboxFilter) {
      this.listenTo(this._bboxFilter, 'boundsChanged', this._onMapBoundsChanged);
    }
  },

  _stopListeningBBoxChanges: function _stopListeningBBoxChanges() {
    if (this._bboxFilter) {
      this.stopListening(this._bboxFilter, 'boundsChanged');
    }
  },

  _listenToCircleChanges: function _listenToCircleChanges() {
    if (this._circleFilter) {
      this.listenTo(this._circleFilter, 'circleChanged', this._onCircleChanged);
    }
  },

  _stopListeningCircleChanges: function _stopListeningCircleChanges() {
    if (this._circleFilter) {
      this.stopListening(this._circleFilter, 'circleChanged');
    }
  },

  _listenToPolygonChanges: function _listenToPolygonChanges() {
    if (this._polygonFilter) {
      this.listenTo(this._polygonFilter, 'polygonChanged', this._onPolygonChanged);
    }
  },

  _stopListeningPolygonChanges: function _stopListeningPolygonChanges() {
    if (this._polygonFilter) {
      this.stopListening(this._polygonFilter, 'polygonChanged');
    }
  },

  _parseError: function _parseError(response) {
    var error = {};
    var errors = parseWindshaftErrors(response, 'dataview');
    if (errors.length > 0) {
      error = errors[0];
    }
    return error;
  }
},

// Class props
{
  ATTRS_NAMES: ['id', 'sync_on_bbox_change', 'sync_on_circle_change', 'sync_on_polygon_change', 'enabled', 'source']
});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = __webpack_require__(0);
var Base = __webpack_require__(6);
var SQLBase = __webpack_require__(11);

var DEFAULT_JOIN_OPERATOR = 'AND';

/**
 * Base class for AND and OR filters.
 *
 * Filters Collection is a way to group a set of filters in order to create composed filters, allowing the user to change the operator that joins the filters.
 *
 * **This object should not be used directly.**
 *
 * @class FiltersCollection
 * @abstract
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 */

var FiltersCollection = function (_Base) {
  _inherits(FiltersCollection, _Base);

  function FiltersCollection(filters) {
    _classCallCheck(this, FiltersCollection);

    var _this = _possibleConstructorReturn(this, (FiltersCollection.__proto__ || Object.getPrototypeOf(FiltersCollection)).call(this));

    _this._initialize(filters);
    return _this;
  }

  _createClass(FiltersCollection, [{
    key: '_initialize',
    value: function _initialize(filters) {
      var _this2 = this;

      this._filters = [];

      if (filters && filters.length) {
        filters.map(function (filter) {
          return _this2.addFilter(filter);
        });
      }
    }

    /**
     * Add a new filter to collection
     *
     * @param {(carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR)} filter
     * @memberof FiltersCollection
     * @api
     */

  }, {
    key: 'addFilter',
    value: function addFilter(filter) {
      var _this3 = this;

      if (!(filter instanceof SQLBase) && !(filter instanceof FiltersCollection)) {
        throw this._getValidationError('wrongFilterType');
      }

      if (_.contains(this._filters, filter)) return;

      this.listenTo(filter, 'change:filters', function (filters) {
        return _this3._triggerFilterChange(filters);
      });
      this._filters.push(filter);
      this._triggerFilterChange();
    }

    /**
     * Remove an existing filter from collection
     *
     * @param {(carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR)} filter
     * @returns {(carto.filter.Range|carto.filter.Category|carto.filter.AND|carto.filter.OR)} The removed element
     * @memberof FiltersCollection
     * @api
     */

  }, {
    key: 'removeFilter',
    value: function removeFilter(filter) {
      var filterIndex = _.indexOf(this._filters, filter);
      if (filterIndex === -1) return;

      var removedElement = this._filters.splice(filterIndex, 1)[0];
      removedElement.off('change:filters', null, this);

      this._triggerFilterChange();
      return removedElement;
    }

    /**
     * Get the number of added filters
     *
     * @returns {number} Number of contained filters
     * @memberof FiltersCollection
     * @api
     */

  }, {
    key: 'count',
    value: function count() {
      return this._filters.length;
    }

    /**
     * Get added filters
     *
     * @returns {Array} Added filters
     * @memberof FiltersCollection
     * @api
     */

  }, {
    key: 'getFilters',
    value: function getFilters() {
      return this._filters;
    }
  }, {
    key: '$getSQL',
    value: function $getSQL() {
      var sqlFilters = this._filters.map(function (filter) {
        return filter.$getSQL();
      }).filter(function (sqlString) {
        return Boolean(sqlString);
      });

      var joinedFilters = sqlFilters.join(' ' + (this.JOIN_OPERATOR || DEFAULT_JOIN_OPERATOR) + ' ');

      if (sqlFilters.length > 1) {
        return '(' + joinedFilters + ')';
      }

      return joinedFilters;
    }
  }, {
    key: '_triggerFilterChange',
    value: function _triggerFilterChange(filters) {
      this.trigger('change:filters', filters);
    }
  }]);

  return FiltersCollection;
}(Base);

module.exports = FiltersCollection;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LegendModelBase = __webpack_require__(13);

var StaticLegendModelBase = LegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(LegendModelBase.prototype.defaults.apply(this), {
      state: LegendModelBase.STATE_SUCCESS
    });
  },

  _onEngineReloadStarted: function _onEngineReloadStarted() {},

  isAvailable: function isAvailable() {
    return true;
  }
});

module.exports = StaticLegendModelBase;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Layer = __webpack_require__(109);
var EventTypes = __webpack_require__(91);
var Aggregation = __webpack_require__(90);

/**
 *  @namespace carto.layer
 *  @api
 */
module.exports = {
  Aggregation: Aggregation,
  Layer: Layer,
  events: EventTypes
};

/**
 *  @namespace carto.layer.metadata
 *  @api
 */

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  OVERLAY_TYPES: {
    ATTRIBUTION: 'attribution',
    HEADER: 'header',
    LIMITS: 'limits',
    TILES: 'tiles',
    LOADER: 'loader',
    LOGO: 'logo',
    SEARCH: 'search',
    ZOOM: 'zoom'
  },

  MAP_PROVIDER_TYPES: {
    GMAPS: 'googlemaps',
    LEAFLET: 'leaflet'
  },

  GMAPS_BASE_LAYER_TYPES: ['roadmap', 'gray_roadmap', 'dark_roadmap', 'hybrid', 'satellite', 'terrain'],

  WINDSHAFT_ERRORS: {
    ANALYSIS: 'analysis',
    LAYER: 'layer',
    LIMIT: 'limit',
    TILE: 'tile', // Generic error for tiles
    GENERIC: 'generic',
    UNKNOWN: 'unknown'
  }
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var WindshaftError = __webpack_require__(41);

var parseWindshaftErrors = function parseWindshaftErrors(response, type) {
  response = response || {};
  if (response.responseJSON) {
    response = response.responseJSON;
  }
  if (response.errors_with_context) {
    return _.map(response.errors_with_context, function (error) {
      return new WindshaftError(error, type);
    });
  }
  if (response.errors) {
    var content = typeof response.errors[0] === 'string' ? { message: response.errors[0] } : response.errors[0];

    return [new WindshaftError(content, type)];
  }
  if (response.statusText) {
    return [new WindshaftError({ message: response.statusText }, type, 'ajax')];
  }
  return [];
};

module.exports = parseWindshaftErrors;

/***/ }),
/* 26 */
/***/ (function(module) {

module.exports = {"name":"internal-carto.js","version":"4.2.2","description":"CARTO javascript library","repository":{"type":"git","url":"https://github.com/CartoDB/carto.js.git"},"author":{"name":"CARTO","url":"https://carto.com/"},"contributors":["Javier Álvarez <jmedina@carto.com>","Javier Álvarez <xabel@vizzuality.com>","Javier Arce <javierarce@carto.com>","Javier Santana <jsantana@carto.com>","Raul Ochoa <rochoa@carto.com>","Carlos Matallín <matallo@carto.com>","Jaime Chapinal <jaime.chapinal@carto.com>","Nicklas Gummesson <nicklas@carto.com>","Francisco Dans <francisco@carto.com>","Emilio García <emilio@carto.com>","Ivan Malagon <ivan@carto.com>","Ruben Moya <ruben@carto.com>","Jesus Arroyo Torrens <jarroyo@carto.com>","Iago Lastra <iago@carto.com>","Elena Torró <elena@carto.com>","Jesús Botella <jbotella@carto.com>","Víctor Velarde <victor.velarde@gmail.com","Alejandra Arri <alejandraarri@carto.com>"],"private":true,"license":"BSD-3-Clause","dependencies":{"backbone":"1.2.3","backbone-poller":"^1.1.3","camshaft-reference":"0.34.0","carto":"cartodb/carto#master","@carto/zera":"1.0.7","clip-path-polygon":"0.1.12","d3-array":"1.2.1","d3-format":"1.2.0","d3-time-format":"2.1.0","jquery":"2.1.4","mustache":"1.1.0","perfect-scrollbar":"https://github.com/CartoDB/perfect-scrollbar.git#master","postcss":"5.0.19","promise-polyfill":"^6.1.0","torque.js":"CartoDB/torque#master","underscore":"1.8.3","whatwg-fetch":"^2.0.3"},"devDependencies":{"babel-core":"^6.26.3","babel-loader":"^7.1.4","babel-plugin-transform-object-rest-spread":"^6.26.0","babel-preset-env":"^1.7.0","babel-preset-es2015":"~6.24.1","babelify":"^7.3.0","browserify":"13.0.0","browserify-shim":"3.8.12","cartoassets":"CartoDB/CartoAssets#master","eslint":"~4.18.2","eslint-config-semistandard":"~11.0.0","eslint-config-standard":"~10.2.1","eslint-plugin-import":"~2.7.0","eslint-plugin-node":"~5.2.0","eslint-plugin-promise":"~3.5.0","eslint-plugin-standard":"~3.0.1","findup-sync":"0.1.3","grunt":"0.4.5","grunt-aws":"^0.4.0","grunt-banner":"^0.6.0","grunt-browserify":"5.0.0","grunt-contrib-clean":"~0.5.0","grunt-contrib-concat":"~0.3.0","grunt-contrib-connect":"~0.11.2","grunt-contrib-copy":"~0.7.0","grunt-contrib-cssmin":"~0.7.0","grunt-contrib-imagemin":"~1.0.0","grunt-contrib-jasmine":"1.1.0","grunt-contrib-watch":"https://github.com/gruntjs/grunt-contrib-watch.git#b884948805940c663b1cbb91a3c28ba8afdebf78","grunt-eslint":"~20.1.0","grunt-exorcise":"2.1.0","grunt-fastly":"~0.1.3","grunt-gitinfo":"~0.1.7","grunt-prompt":"~1.3.0","grunt-replace":"0.6.2","grunt-sass":"2.0.0","grunt-terser":"^1.0.0","gulp":"3.8.10","gulp-iconfont":"1.0.0","gulp-iconfont-css":"0.0.9","gulp-install":"0.2.0","gulp-sketch":"0.0.7","jasmine-ajax":"https://github.com/nobuti/jasmine-ajax.git#master","jsdoc":"~3.5.5","jstify":"0.12.0","leaflet":"1.3.1","load-grunt-tasks":"~0.6.0","npm-watch":"^0.3.0","semver":"~5.4.0","source-map-support":"CartoDB/node-source-map-support#0.4.6-cdb1","time-grunt":"~0.3.1","uglifyjs-webpack-plugin":"^1.1.2","watchify":"3.4.0","webpack":"4.12.1","webpack-cli":"^3.0.4"},"browserify":{"transform":["browserify-shim","jstify"]},"browser":{"cdb":"./src/cdb.js","cdb.config":"./src/cdb.config.js","cdb.core.util":"./src/core/util.js","cdb.core.Profiler":"./src/core/profiler.js","cdb.log":"./src/cdb.log.js","cdb.errors":"./src/cdb.errors.js","cdb.templates":"./src/cdb.templates.js","geojson":"./vendor/GeoJSON.js","html-css-sanitizer":"./vendor/html-css-sanitizer-bundle.js","mousewheel":"./vendor/mousewheel.js","mwheelIntent":"./vendor/mwheelIntent.js"},"browserify-shim":{"geojson":"GeoJSON","html-css-sanitizer":"html","mousewheel":{"depends":["jquery:jQuery"]},"mwheelIntent":{"depends":["jquery:jQuery"]}},"files":["dist","node_modules/cdb","src","themes","vendor"],"main":"src/index.js","config":{"root":"."},"scripts":{"test":"grunt test","test:browser":"grunt dev","lint":"eslint .","lint:fix":"eslint . --fix","build":"rm -rf dist/public; NODE_ENV=production webpack --progress --config webpack/webpack.config.js && NODE_ENV=production webpack --progress --config webpack/webpack.min.config.js","build:watch":"NODE_ENV=development webpack --progress -w --config webpack/webpack.config.js","build:internal":"grunt build","docs":"rm -rf docs/public; jsdoc --configure config/jsdoc/public-conf.json","docs:internal":"rm -rf docs/internal; jsdoc --configure config/jsdoc/internal-conf.json","bump":"npm version prerelease","bump:patch":"npm version patch","bump:minor":"npm version minor","postversion":"git push origin HEAD --follow-tags","release":"./scripts/release.sh"},"watch":{"docs":"src/**/*.js"}};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var cdb = __webpack_require__(122);

module.exports = {
  error: function error() {
    console.error.apply(console, arguments);
  },

  log: function log() {
    console.log.apply(console, arguments);
  },

  info: function info() {
    console.log.apply(console, arguments);
  },

  debug: function debug() {
    if (cdb.DEBUG) console.log.apply(console, arguments);
  }
};

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var camshaftReference = __webpack_require__(133).getVersion('latest');
var PARAM_TYPES = {
  NODE: 'node',
  NUMBER: 'number',
  STRING: 'string',
  ENUM: 'enum'
};

var SOURCE_ANALYSIS_TYPE = 'source';
var ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP = {};
ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP[SOURCE_ANALYSIS_TYPE] = [];
var ANALYSIS_TYPE_TO_PARAM_NAMES_MAP = {};

var analysesReference = camshaftReference.analyses;
if (!analysesReference) {
  throw new Error('Error loading the reference for Camshaft analyses');
}

// Populate the analysis source and param names maps.
for (var analysisType in analysesReference) {
  var analysisParams = analysesReference[analysisType].params;
  for (var paramName in analysisParams) {
    ANALYSIS_TYPE_TO_PARAM_NAMES_MAP[analysisType] = ANALYSIS_TYPE_TO_PARAM_NAMES_MAP[analysisType] || [];
    ANALYSIS_TYPE_TO_PARAM_NAMES_MAP[analysisType].push(paramName);
    ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP[analysisType] = ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP[analysisType] || [];
    var paramType = analysisParams[paramName].type;
    if (paramType === PARAM_TYPES.NODE) {
      ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP[analysisType].push(paramName);
    }
  }
}

module.exports = {
  getSourceNamesForAnalysisType: function getSourceNamesForAnalysisType(analysisType) {
    var sourceNames = ANALYSIS_TYPE_TO_SOURCE_PARAM_NAMES_MAP[analysisType];
    if (!sourceNames) {
      throw new Error('source names for analysis of type ' + analysisType + " couldn't be found");
    }

    return sourceNames;
  },

  getParamNamesForAnalysisType: function getParamNamesForAnalysisType(analysisType) {
    var paramNames = ANALYSIS_TYPE_TO_PARAM_NAMES_MAP[analysisType];
    if (!paramNames) {
      throw new Error('param names for analysis of type ' + analysisType + " couldn't be found");
    }

    return paramNames;
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var Analysis = __webpack_require__(9);
var camshaftReference = __webpack_require__(28);
var LayerTypes = __webpack_require__(16);

var AnalysisService = function AnalysisService(opts) {
  opts = opts || {};
  if (!opts.engine) {
    throw new Error('engine is required');
  }

  this._engine = opts.engine;
  this._apiKey = opts.apiKey;
  this._authToken = opts.authToken;
  this._camshaftReference = opts.camshaftReference || camshaftReference; // For testing purposes

  this._analysisNodes = new Backbone.Collection();
};

/**
  * Recursively generates a graph of analyses and returns the "root" node.
  * For each node definition in the analysisDefinition:
  *  - If a node had been already created this method updates the attributes of the existing node.
  *  - Otherwise create a new node and index it by id into the `_analysisNodes` object.
  */
AnalysisService.prototype.analyse = function (analysisDefinition) {
  analysisDefinition = _.clone(analysisDefinition);
  var analysis = this.findNodeById(analysisDefinition.id);
  var analysisAttrs = this._getAnalysisAttributesFromAnalysisDefinition(analysisDefinition);

  if (analysis) {
    analysis.set(analysisAttrs);
  } else {
    if (this._apiKey) {
      analysisAttrs.apiKey = this._apiKey;
    }
    if (this._authToken) {
      analysisAttrs.authToken = this._authToken;
    }
    analysis = new Analysis(analysisAttrs, {
      camshaftReference: this._camshaftReference,
      engine: this._engine
    });

    this._analysisNodes.add(analysis);
    analysis.bind('destroy', this._onAnalysisRemoved, this);
  }

  return analysis;
};

/**
 * This function is used to iterate over the analysis graph.
 * It uses the camshaft reference to extract those parameters which are analysis nodes. And call analyse on them.
 *
 * This function wont be needed if we split the analysis definition in `params` and `inputs`. Where all analysis
 * are garanted to be in the inputs object.
 */
AnalysisService.prototype._getAnalysisAttributesFromAnalysisDefinition = function (analysisDefinition) {
  var analysisNodes = {};
  var analysisType = analysisDefinition.type;
  var sourceNamesForAnalysisType = this._camshaftReference.getSourceNamesForAnalysisType(analysisType);
  _.each(sourceNamesForAnalysisType, function (sourceName) {
    var sourceParams = analysisDefinition.params[sourceName];
    if (sourceParams) {
      analysisNodes[sourceName] = this.analyse(sourceParams);
    }
  }, this);

  return _.omit(_.extend(analysisDefinition, analysisDefinition.params, analysisNodes), 'params');
};

/**
 * Create a source analysis
 * This function is used because some legacy viz.json files contains layers without `source` and have a `query` field instead.
 * This query is translated into a analysis of type `source`.
 */
AnalysisService.prototype.createAnalysisForLayer = function (layerId, layerQuery) {
  return this.analyse({
    id: layerId,
    type: 'source',
    params: {
      query: layerQuery
    }
  });
};

AnalysisService.prototype.findNodeById = function (id) {
  return this._analysisNodes.get(id);
};

AnalysisService.prototype._onAnalysisRemoved = function (analysis) {
  this._analysisNodes.remove(analysis);
  analysis.unbind('destroy', this._onAnalysisRemoved);
};

/**
 * Return all the analysis nodes without duplicates.
 * The analyses are obtained from the layers and dataviews collections.
 * @example
 * We have the following analyses:  (a0->a1->a2), (b0->a2)
 * This method will give us: (a0->a1->a2), (a1->a2), (a2), (b0->a2)
 */
AnalysisService.getUniqueAnalysisNodes = function (layersCollection, dataviewsCollection) {
  var uniqueAnalysisNodes = {};
  var analysisList = AnalysisService.getAnalysisList(layersCollection, dataviewsCollection);
  _.each(analysisList, function (analysis) {
    analysis.getNodesCollection().each(function (analysisNode) {
      uniqueAnalysisNodes[analysisNode.get('id')] = analysisNode;
    });
  });

  return _.map(uniqueAnalysisNodes, function (analisis) {
    return analisis;
  }, this);
};

/**
 * Return a list with all the analyses contained in the given collections.
 * @example
 * We have the following analyses:  (a0->a1->a2), (b0->a2)
 * This method will give us: (a0->a1->a2), (b0->a2)
 */
AnalysisService.getAnalysisList = function (layersCollection, dataviewsCollection) {
  var layerAnalyses = _getAnalysesFromLayers(layersCollection);
  var dataviewsAnalyses = _getAnalysesFromDataviews(dataviewsCollection);
  return layerAnalyses.concat(dataviewsAnalyses);
};

function _getAnalysesFromLayers(layersCollection) {
  var layers = _getCartoDBAndTorqueLayers(layersCollection);
  return _.chain(layers).map(function (layer) {
    return layer.getSource();
  }).compact().value();
}

function _getAnalysesFromDataviews(dataviewsCollection) {
  return dataviewsCollection.chain().map(function (dataview) {
    return dataview.getSource();
  }).compact().value();
}

function _getCartoDBAndTorqueLayers(layersCollection) {
  return layersCollection.filter(function (layer) {
    // Carto and torque layers are supposed to have a source
    return LayerTypes.isCartoDBLayer(layer) || LayerTypes.isTorqueLayer(layer);
  });
}

module.exports = AnalysisService;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

var AGGREGATION_DATA = {
  second: { unit: 'second', factor: 1 },
  minute: { unit: 'minute', factor: 1 },
  hour: { unit: 'hour', factor: 1 },
  day: { unit: 'day', factor: 1 },
  week: { unit: 'day', factor: 7 },
  month: { unit: 'month', factor: 1 },
  quarter: { unit: 'month', factor: 3 },
  year: { unit: 'month', factor: 12 },
  decade: { unit: 'month', factor: 120 },
  century: { unit: 'month', factor: 1200 },
  millennium: { unit: 'month', factor: 12000 }
};

var helper = {};

function trimBuckets(buckets, filledBuckets, totalBuckets) {
  var index = null;
  var keepGoing = true;
  for (var i = filledBuckets.length - 1; i >= 0 && keepGoing && (_.isFinite(totalBuckets) ? i >= totalBuckets : true); i--) {
    if (filledBuckets[i]) {
      keepGoing = false;
    } else {
      index = i;
    }
  }

  return index !== null ? buckets.slice(0, index) : buckets;
}

helper.fillTimestampBuckets = function (buckets, start, aggregation, numberOfBins, from, totalBuckets) {
  var filledBuckets = []; // To catch empty buckets
  var definedBucket = false;

  for (var i = 0; i < numberOfBins; i++) {
    definedBucket = buckets[i] !== undefined;
    filledBuckets.push(definedBucket);

    var bucketStart = this.add(start, i, aggregation);
    var nextBucketStart = this.add(start, i + 1, aggregation);

    buckets[i] = _.extend({
      bin: i,
      start: bucketStart,
      end: nextBucketStart - 1,
      next: nextBucketStart,
      freq: 0
    }, buckets[i]);
    delete buckets[i].timestamp;
  }

  return from === 'totals' ? buckets : trimBuckets(buckets, filledBuckets, totalBuckets);
};

helper.fillNumericBuckets = function (buckets, start, width, numberOfBins) {
  for (var i = 0; i < numberOfBins; i++) {
    var bucketStart = start + i * width;
    var commonBucketEnd = start + (i + 1) * width;
    var isLastBucket = i + 1 === numberOfBins;
    var bucketEnd = isLastBucket && buckets[i] ? buckets[i].max : commonBucketEnd;
    var filledBucket = _.extend({}, {
      bin: i,
      start: bucketStart,
      end: bucketEnd,
      freq: 0
    }, buckets[i]);
    buckets[i] = filledBucket;
  }
};

helper.hasChangedSomeOf = function (list, changed) {
  return _.some(_.keys(changed), function (key) {
    return _.contains(list, key);
  });
};

/**
 * Add a `number` of aggregations to the provided timestamp
 *
 * @param {number} timestamp - Starting timestamp
 * @param {number} number - Number of aggregations to add
 * @param {object} aggregation
 * @param {string} aggregation.unit - unit of the aggregation
 * @param {number} aggregation.factor - number of aggretagion units
 */
helper.add = function (timestamp, number, aggregation) {
  if (!AGGREGATION_DATA.hasOwnProperty(aggregation)) {
    throw Error('aggregation "' + aggregation + '" is not defined');
  }
  var date = new Date(timestamp * 1000);
  var unit = AGGREGATION_DATA[aggregation].unit;
  var factor = AGGREGATION_DATA[aggregation].factor;
  var value = number * factor;
  switch (unit) {
    case 'second':
      return date.setUTCSeconds(date.getUTCSeconds() + value) / 1000;
    case 'minute':
      return date.setUTCMinutes(date.getUTCMinutes() + value) / 1000;
    case 'hour':
      return date.setUTCHours(date.getUTCHours() + value) / 1000;
    case 'day':
      return date.setUTCDate(date.getUTCDate() + value) / 1000;
    case 'month':
      var n = date.getUTCDate();
      date.setUTCDate(1);
      date.setUTCMonth(date.getUTCMonth() + value);
      date.setUTCDate(Math.min(n, _getDaysInMonth(date.getUTCFullYear(), date.getUTCMonth())));
      return date.getTime() / 1000;
    default:
      return 0;
  }
};

/* Internal functions */

function _getDaysInMonth(year, month) {
  return [31, _isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month];
}

function _isLeapYear(year) {
  return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}

module.exports = helper;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var d3 = __webpack_require__(45);
var DataviewModelBase = __webpack_require__(20);
var HistogramDataModel = __webpack_require__(64);
var helper = __webpack_require__(31);
var dateUtils = __webpack_require__(63);

module.exports = DataviewModelBase.extend({

  defaults: _.extend({
    type: 'histogram',
    totalAmount: 0,
    filteredAmount: 0,
    hasNulls: false,
    localTimezone: false
  }, DataviewModelBase.prototype.defaults),

  _getDataviewSpecificURLParams: function _getDataviewSpecificURLParams() {
    var params = [];

    if (_.isNumber(this.get('own_filter'))) {
      params.push('own_filter=' + this.get('own_filter'));
      if (this.get('column_type') === 'number' && this.get('bins')) {
        params.push('bins=' + this.get('bins'));
      }
    } else {
      var offset = this.getCurrentOffset();

      if (this.get('column_type') === 'number' && this.get('bins')) {
        params.push('bins=' + this.get('bins'));
      } else if (this.get('column_type') === 'date') {
        params.push('aggregation=' + (this.get('aggregation') || 'auto'));
        if (_.isFinite(offset)) {
          params.push('offset=' + offset);
        }
      }

      // Start - End
      var start = this.get('start');
      var end = this.get('end');
      if (_.isFinite(start) && _.isFinite(end)) {
        params.push('start=' + start);
        params.push('end=' + end);
      }
    }
    return params;
  },

  initialize: function initialize(attrs, opts) {
    this._localOffset = dateUtils.getLocalOffset();

    // Internal model for calculating all the data in the histogram (without filters)
    this._totals = new HistogramDataModel({
      bins: this.get('bins'),
      aggregation: this.get('aggregation'),
      offset: this.get('offset'),
      column_type: this.get('column_type'),
      apiKey: opts && opts.engine && opts.engine.getApiKey(),
      authToken: opts && opts.engine && opts.engine.getAuthToken(),
      localTimezone: this.get('localTimezone'),
      localOffset: this._localOffset,
      start: this.get('start'),
      end: this.get('end')
    });

    DataviewModelBase.prototype.initialize.apply(this, arguments);
    this._data = new Backbone.Collection(this.get('data'));

    if (attrs && (attrs.min || attrs.max)) {
      this.filter && this.filter.setRange(this.get('min'), this.get('max'));
    }
  },

  _initBinds: function _initBinds() {
    DataviewModelBase.prototype._initBinds.apply(this);

    this._updateURLBinding();

    // When original data gets fetched
    this._totals.bind('loadModelCompleted', this._onTotalsDataFetched, this);
    this._totals.once('loadModelCompleted', this._updateBindings, this);
    this._totals.bind('error', this.setUnavailable, this);
    this._totals.bind('error', this._onTotalsError, this);

    this.on('change:column', this._onColumnChanged, this);
    this.on('change:localTimezone', this._onLocalTimezoneChanged, this);
    this.on('change', this._onFieldsChanged, this);
    this.on('change:column_type', this._onColumnTypeChanged, this);
  },

  _onLocalTimezoneChanged: function _onLocalTimezoneChanged() {
    this._totals.set('localTimezone', this.get('localTimezone'));
  },

  _updateURLBinding: function _updateURLBinding() {
    this.off('change:url');
    this.on('change:url', this._onUrlChanged, this);
  },

  _updateBindings: function _updateBindings() {
    this._onChangeBinds();
    this._updateURLBinding();
  },

  enableFilter: function enableFilter() {
    this.set('own_filter', 1);
  },

  disableFilter: function disableFilter() {
    this.unset('own_filter');
  },

  getData: function getData() {
    return this._data.toJSON();
  },

  getUnfilteredData: function getUnfilteredData() {
    return this._totals.get('data');
  },

  getUnfilteredDataModel: function getUnfilteredDataModel() {
    return this._totals;
  },

  getSize: function getSize() {
    return this._data.size();
  },

  getColumnType: function getColumnType() {
    return this.get('column_type');
  },

  hasNulls: function hasNulls() {
    return this.get('hasNulls');
  },

  parse: function parse(data) {
    var aggregation = data.aggregation || this._totals && this._totals.get('aggregation');
    var numberOfBins = _.isFinite(data.bins_count) ? data.bins_count : this.get('bins');
    var width = data.bin_width;
    var start = this.get('column_type') === 'date' ? data.timestamp_start : data.bins_start;

    var parsedData = {
      data: [],
      filteredAmount: 0,
      nulls: 0,
      totalAmount: 0
    };

    if (this.has('error')) {
      return parsedData;
    }

    parsedData.data = new Array(numberOfBins);

    _.each(data.bins, function (bin) {
      parsedData.data[bin.bin] = bin;
    });

    this.set({
      aggregation: aggregation
    }, { silent: true });

    if (this.get('column_type') === 'date') {
      parsedData.data = helper.fillTimestampBuckets(parsedData.data, start, aggregation, numberOfBins, 'filtered', this._totals.get('data').length);
      numberOfBins = parsedData.data.length;
    } else {
      helper.fillNumericBuckets(parsedData.data, start, width, numberOfBins);
    }

    // if parse option is passed in the constructor, this._data is not created yet at this point
    this._data && this._data.reset(parsedData.data);

    // Calculate totals
    parsedData.totalAmount = this._calculateTotalAmount(parsedData.data);
    parsedData.filteredAmount = this._calculateFilteredAmount(this.filter, this._data);
    parsedData.nulls = data.nulls;
    parsedData.bins = numberOfBins;

    if (data.nulls != null) {
      parsedData = _.extend({}, parsedData, {
        nulls: data.nulls,
        hasNulls: true
      });
    }

    return parsedData;
  },

  _onFilterChanged: function _onFilterChanged(filter) {
    this.set('filteredAmount', this._calculateFilteredAmount(filter, this._data));

    DataviewModelBase.prototype._onFilterChanged.apply(this, arguments);
  },

  _onColumnChanged: function _onColumnChanged() {
    this._totals.set({
      column_type: this.get('column_type'),
      column: this.get('column'),
      start: null,
      end: null
    });
    this.set('aggregation', undefined, { silent: true });

    this._reloadAndForceFetch();
  },

  _calculateTotalAmount: function _calculateTotalAmount(buckets) {
    return _.reduce(buckets, function (memo, bucket) {
      var add = bucket && bucket.freq ? bucket.freq : 0;
      return memo + add;
    }, 0);
  },

  _calculateFilteredAmount: function _calculateFilteredAmount(filter, data) {
    var filteredAmount = 0;
    if (filter && filter.get('min') !== void 0 && filter.get('max') !== void 0) {
      var indexes = this._findBinsIndexes(data, filter.get('min'), filter.get('max'));
      filteredAmount = this._sumBinsFreq(data, indexes.start, indexes.end);
    }

    return filteredAmount;
  },

  _findBinsIndexes: function _findBinsIndexes(data, start, end) {
    var startBin = data.findWhere({ start: Math.min(start, end) });
    var endBin = data.findWhere({ end: Math.max(start, end) });

    return {
      start: startBin && startBin.get('bin'),
      end: endBin && endBin.get('bin')
    };
  },

  _sumBinsFreq: function _sumBinsFreq(data, start, end) {
    return _.reduce(data.slice(start, end + 1), function (acum, d) {
      return (d.get('freq') || 0) + acum;
    }, 0);
  },

  /*
  Ported from cartodb-postgresql
  https://github.com/CartoDB/cartodb-postgresql/blob/master/scripts-available/CDB_DistType.sql
  */
  getDistributionType: function getDistributionType(data) {
    var histogram = data || this.get('data');
    var freqAccessor = function freqAccessor(a) {
      return a.freq;
    };
    var osc = d3.max(histogram, freqAccessor) - d3.min(histogram, freqAccessor);
    var mean = d3.mean(histogram, freqAccessor);
    // When the difference between the max and the min values is less than
    // 10 percent of the mean, it's a flat histogram (F)
    if (osc < mean * 0.1) return 'F';
    var sumFreqs = d3.sum(histogram, freqAccessor);
    var freqs = histogram.map(function (bin) {
      return 100 * bin.freq / sumFreqs;
    });

    // The ajus array represents relative growths
    var ajus = freqs.map(function (freq, index) {
      var next = freqs[index + 1];
      if (freq > next) return -1;
      if (Math.abs(freq - next) <= 0.05) return 0;
      return 1;
    });
    ajus.pop();
    var maxAjus = d3.max(ajus);
    var minAjus = d3.min(ajus);
    // If it never grows or shrinks, it returns flat
    if (minAjus === 0 && maxAjus === 0) return 'F';else if (maxAjus < 1) return 'L';else if (minAjus > -1) return 'J';else {
      var uniques = _.uniq(ajus);
      var A_TYPES = [[1, -1], [1, 0, -1], [1, -1, 0], [0, 1, -1]];
      var U_TYPES = [[-1, 1], [-1, 0, 1], [-1, 1, 0], [0, -1, 1]];
      if (A_TYPES.some(function (e) {
        return _.isEqual(e, uniques);
      })) return 'A';else if (U_TYPES.some(function (e) {
        return _.isEqual(e, uniques);
      })) return 'U';else return 'S';
    }
  },

  toJSON: function toJSON(d) {
    var columnType = this.get('column_type');
    var offset = this.get('offset');

    var options = {
      column: this.get('column')
    };

    if (columnType === 'number' && this.get('bins')) {
      options.bins = this.get('bins');
    } else if (columnType === 'date') {
      options.aggregation = this.get('aggregation') || 'auto';

      if (_.isFinite(offset)) {
        options.offset = offset;
      }
    }

    return {
      type: 'histogram',
      source: { id: this.getSourceId() },
      options: options
    };
  },

  _onColumnTypeChanged: function _onColumnTypeChanged() {
    this.filter && this.filter.set('column_type', this.get('column_type'));
  },

  _onChangeBinds: function _onChangeBinds() {
    DataviewModelBase.prototype._onChangeBinds.call(this);
  },

  _onUrlChanged: function _onUrlChanged() {
    this._totals.set({
      offset: this.get('offset'),
      bins: this.get('bins')
    }, { silent: true });

    this._totals.setUrl(this.get('url'));
  },

  _onTotalsDataFetched: function _onTotalsDataFetched(data, model) {
    var start = model.get('start');
    var end = model.get('end');

    if (_.isFinite(start) && _.isFinite(end)) {
      this.set({
        start: start,
        end: end
      });
    }

    this.set({
      aggregation: model.get('aggregation') || 'auto',
      offset: model.get('offset') || 0,
      bins: model.get('bins'),
      error: model.get('error')
    }, { silent: true });

    var resetFilter = false;

    if (this.get('column_type') === 'date' && (_.has(this.changed, 'aggregation') || _.has(this.changed, 'offset'))) {
      resetFilter = true;
    } else if (this.get('column_type') === 'number' && _.has(this.changed, 'bins')) {
      resetFilter = true;
    }

    resetFilter ? this._resetFilterAndFetch() : this.fetch();
  },

  _onFieldsChanged: function _onFieldsChanged() {
    this._setTotalsStartEnd();

    if (!helper.hasChangedSomeOf(['bins', 'aggregation', 'offset'], this.changed)) {
      return;
    }

    var aggregationChangedToUndefined = _.has(this.changed, 'aggregation') && _.isUndefined(this.changed.aggregation);

    // We should avoid fetching totals when bins has changed and aggregation has
    // changed to undefined. That means a change in column. If we set the bins
    // we trigger a fetch while a map instantiation is ongoing. The API returns bad data in that case.
    if (this.get('column_type') === 'number' && !aggregationChangedToUndefined) {
      this._totals.set('bins', this.get('bins'));
    }
    if (this.get('column_type') === 'date') {
      if (this.hasChanged('aggregation')) {
        this._resetFilter();
      }
      this._totals.set({
        offset: this.get('offset'),
        aggregation: this.get('aggregation')
      });
    }
  },

  _setTotalsStartEnd: function _setTotalsStartEnd() {
    var start = this.get('start');
    var end = this.get('end');

    var startEndChanged = helper.hasChangedSomeOf(['start', 'end'], this.changed);
    var startEndValid = _.isFinite(start) && _.isFinite(end);
    var hasDifferentValues = this._totals.get('start') !== start || this._totals.get('end') !== end;

    if (startEndChanged && startEndValid && hasDifferentValues) {
      this._totals.set({ start: start, end: end });
      this._totals.refresh();
    }
  },

  _resetFilterAndFetch: function _resetFilterAndFetch() {
    this._resetFilter();
    this.fetch();
  },

  _resetFilter: function _resetFilter() {
    this.disableFilter();
    this.filter && this.filter.unsetRange();
  },

  _onTotalsError: function _onTotalsError(model, error) {
    var parsedError = error && this._parseError(error);

    if (parsedError && parsedError.message !== 'abort') {
      this._triggerStatusError(parsedError);
    }
  },

  getCurrentOffset: function getCurrentOffset() {
    return this.get('localTimezone') ? this._localOffset : this.get('offset');
  }
},

// Class props
{
  ATTRS_NAMES: DataviewModelBase.ATTRS_NAMES.concat(['column', 'column_type', 'bins', 'min', 'max', 'aggregation', 'offset'])
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(1);
var _ = __webpack_require__(0);
var CategoryItemModel = __webpack_require__(73);
var COUNT_AGGREGATION_TYPE = 'count';

/**
 *  Data categories collection
 *
 *  - It basically sorts by (value, selected and "Other").
 */

module.exports = Backbone.Collection.extend({
  model: CategoryItemModel,

  initialize: function initialize(models, options) {
    this.aggregationModel = options.aggregationModel;
    this.aggregation = options.aggregationModel.get('aggregation');
  },

  reset: function reset(models, options) {
    if (this.aggregationModel.get('aggregation') !== COUNT_AGGREGATION_TYPE) {
      models = _.filter(models, function (category) {
        var isModel = category instanceof Backbone.Model;
        var value = isModel ? category.get('value') : category.value;
        return value != null;
      });
    }
    Backbone.Collection.prototype.reset.call(this, models, options);
  },

  comparator: function comparator(a, b) {
    if (a.get('name') === 'Other') {
      return 1;
    } else if (b.get('name') === 'Other') {
      return -1;
    } else if (a.get('value') === b.get('value')) {
      return a.get('selected') < b.get('selected') ? 1 : -1;
    } else {
      return a.get('value') < b.get('value') ? 1 : -1;
    }
  },

  isOtherAvailable: function isOtherAvailable() {
    return this.where({
      agg: true,
      name: 'Other'
    }).length > 0;
  }

});

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Map = __webpack_require__(1);
var EventEmitter = __webpack_require__(4);
var TileLoader = __webpack_require__(5);

/**
 *
 */

var Interactive = function () {
  function Interactive(map, gridUrl) {
    _classCallCheck(this, Interactive);

    // Map element
    if (map) {
      this._bindMap(map);
    }
    this._tileLoader = new TileLoader(gridUrl);
    // We asume 256x256px tiles
    this._tileSize = 256;
    // At the moment only one callback is supported so a custom event emitter is used.
    this._eventEmitter = new EventEmitter();
  }

  /**
   * Add the grid url from a tilejson file
   * @deprecated
   * Method added for backwards compatibility with wax
   */


  _createClass(Interactive, [{
    key: 'tilejson',
    value: function tilejson(_tilejson) {
      this._tileLoader.setUrl(_tilejson.grids[0]);
      return this;
    }

    /**
     * Add the native map
     * @deprecated
     * Method added for backwards compatibility with wax
     */

  }, {
    key: 'map',
    value: function map(_map) {
      this._bindMap(_map);
      return this;
    }

    /**
     * Attach a native map to the interactivity object.
     * @param {*} map
     */

  }, {
    key: '_bindMap',
    value: function _bindMap(map) {
      this._map = new Map(map);
      this._map.on('click', this._onMapClick.bind(this));
      this._map.on('mousemove', this._onMapMouseMove.bind(this));
    }

    /**
     * Attach event listeners to map events.
     * @param {on|off|error} event - The name of the event
     * @param {function} callback - The callback to be executed when the event is fired
     */

  }, {
    key: 'on',
    value: function on(event, callback) {
      switch (event) {
        case 'on':
          this._eventEmitter.addEventListener('mousemove', callback);
          this._eventEmitter.addEventListener('click', callback);
          break;
        case 'off':
          this._eventEmitter.addEventListener('featureout', callback);
          break;
        case 'error':
          this._eventEmitter.addEventListener('error', callback);
          break;
      }
      return this;
    }

    /**
     * Callback executed when the native map click event is fired
     * @param {object} e
     */

  }, {
    key: '_onMapClick',
    value: function _onMapClick(e) {
      var _this = this;

      var eventClone = this._map.cloneEvent(e);
      var coords = this._getTileCoordsFromMouseEvent(eventClone);
      this._tileLoader.loadTile(coords.z, coords.x, coords.y).then(function (tile) {
        if (tile !== 'fetching') {
          return _this._objectForEvent(tile, eventClone, 'click');
        }
      }).catch(function (err) {
        _this._eventEmitter.dispatchEvent('error', err);
      });
    }

    /**
     * Callback executed when the native map "mousemove" event is fired.
     * @param {object} e
     */

  }, {
    key: '_onMapMouseMove',
    value: function _onMapMouseMove(e) {
      var _this2 = this;

      var eventClone = this._map.cloneEvent(e);
      var coords = this._getTileCoordsFromMouseEvent(eventClone);
      this._tileLoader.loadTile(coords.z, coords.x, coords.y).then(function (tile) {
        if (tile !== 'fetching') {
          return _this2._objectForEvent(tile, eventClone, 'mousemove');
        }
      }).catch(function (err) {
        _this2._eventEmitter.dispatchEvent('error', err);
      });
    }

    /**
     * Return the tile coordinates from a mouseEvent
     * @param {*} mouseEvent
     */

  }, {
    key: '_getTileCoordsFromMouseEvent',
    value: function _getTileCoordsFromMouseEvent(event) {
      var pixelPoint = this._map.project(event);
      var coords = this._unscale(pixelPoint, this._tileSize);
      coords.z = Math.round(this._map.getZoom());
      return coords;
    }

    /**
     * Divide each point coord by the tilesize
     */

  }, {
    key: '_unscale',
    value: function _unscale(pixelPoint, tileSize) {
      return {
        x: Math.floor(pixelPoint.x / tileSize),
        y: Math.floor(pixelPoint.y / tileSize)
      };
    }

    /**
     * Get the data from a map event.
     * Using the event coords and the grid.json tile.
     *
     * This method fires an event with a `data` property.
     *
     * Warning: This method mutates the event object!
     */

  }, {
    key: '_objectForEvent',
    value: function _objectForEvent(tile, event, eventType) {
      var point = this._map.project(event);
      // 4 pixels asigned to each grid in the utfGrid.
      var resolution = 4;
      // get the tile coords to which the pixel belongs

      var _unscale2 = this._unscale(point, this._tileSize),
          x = _unscale2.x,
          y = _unscale2.y;

      var max = Math.pow(2, this._map.getZoom());
      x = (x + max) % max;
      y = (y + max) % max;

      if (tile && tile.grid) {
        var gridX = Math.floor((point.x - x * this._tileSize) / resolution);
        var gridY = Math.floor((point.y - y * this._tileSize) / resolution);
        var idx = this._utfDecode(tile.grid[gridY].charCodeAt(gridX));
        var key = tile.keys[idx];
        if (tile.data.hasOwnProperty(key)) {
          // Extend the event with the data from the grid json
          event.data = tile.data[key];
        }
      }

      // Add "e" property for backwards compatibility with wax.
      event.e = event.originalEvent || { type: eventType };

      this._triggerEvent(eventType, event);
    }

    /**
     * Trigger a wax event.
     */

  }, {
    key: '_triggerEvent',
    value: function _triggerEvent(eventType, extendedEvent) {
      // If there is no data dont do anything!
      if (!extendedEvent.data) {
        this._eventEmitter.dispatchEvent('featureout', {});
        return;
      }
      if (eventType === 'mousemove') {
        this._eventEmitter.dispatchEvent('mousemove', extendedEvent);
        return;
      }
      if (eventType === 'click') {
        this._eventEmitter.dispatchEvent('featureout', {});
        this._eventEmitter.dispatchEvent('click', extendedEvent);
      }
    }

    /**
     * Remove interactivity
     */

  }, {
    key: 'remove',
    value: function remove() {
      this._eventEmitter.clear();
      // Remove native map listeners
      this._map.off('click');
      this._map.off('mousemove');
    }

    /**
     * Decode an utf gridjson cell
     * @see https://github.com/mapbox/utfgrid-spec/blob/master/1.3/utfgrid.md
     * @param {string} char
     */

  }, {
    key: '_utfDecode',
    value: function _utfDecode(char) {
      if (char >= 93) {
        char--;
      }
      if (char >= 35) {
        char--;
      }
      return char - 32;
    }
  }]);

  return Interactive;
}();

module.exports = { Interactive: Interactive };

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var GoogleMap = __webpack_require__(2);
var LeafletMap = __webpack_require__(3);

function Map(nativeMap) {
  if (nativeMap.__gm) {
    return new GoogleMap(nativeMap);
  } else {
    return new LeafletMap(nativeMap);
  }
}

module.exports = Map;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GoogleMap = function () {
  function GoogleMap(nativeMap) {
    _classCallCheck(this, GoogleMap);

    this._map = nativeMap;
    this._listeners = {};
  }

  /**
   * Return the pixel coordinates of an event at a certain zoom level.
   */


  _createClass(GoogleMap, [{
    key: "project",
    value: function project(event) {
      var latLng = event.latLng;
      var point = this._map.getProjection().fromLatLngToPoint(latLng);
      var scale = Math.pow(2, this.getZoom());
      return {
        x: Math.floor(scale * point.x),
        y: Math.floor(scale * point.y)
      };
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this._map.getZoom();
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this._listeners[event] = this._map.addListener(event, callback);
    }
  }, {
    key: "off",
    value: function off(event) {
      this._listeners[event] && this._listeners[event].remove();
    }

    // We need to clone events to avoid mutations causing buggy behaviour

  }, {
    key: "cloneEvent",
    value: function cloneEvent(event) {
      return {
        da: event.da,
        latLng: event.latLng,
        pixel: event.pixel
      };
    }
  }]);

  return GoogleMap;
}();

module.exports = GoogleMap;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LeafletMap = function () {
  function LeafletMap(nativeMap) {
    _classCallCheck(this, LeafletMap);

    this._map = nativeMap;
    this._listeners = {};
  }

  // LatLong to pixel coords


  _createClass(LeafletMap, [{
    key: "project",
    value: function project(event) {
      var latlng = event.latlng.wrap();
      return this._map.project(latlng, this._map.getZoom()).floor();
    }
  }, {
    key: "getZoom",
    value: function getZoom() {
      return this._map.getZoom();
    }
  }, {
    key: "on",
    value: function on(event, callback) {
      this._listeners[event] = callback;
      return this._map.on(event, callback);
    }
  }, {
    key: "off",
    value: function off(event) {
      return this._map.off(event, this._listeners[event]);
    }

    // We need to clone events to avoid mutations causing buggy behaviour

  }, {
    key: "cloneEvent",
    value: function cloneEvent(event) {
      return {
        containerPoint: event.containerPoint,
        latlng: event.latlng,
        layerPoint: event.layerPoint,
        originalEvent: event.originalEvent,
        target: event.target,
        type: event.type
      };
    }
  }]);

  return LeafletMap;
}();

module.exports = LeafletMap;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Simple event emmiter with one listener per event.
 */
var EventEmitter = function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);

    // Callbacks for every event
    this._listeners = {
      click: undefined,
      move: undefined,
      out: undefined,
      error: undefined
    };
  }

  _createClass(EventEmitter, [{
    key: 'dispatchEvent',
    value: function dispatchEvent(event, data) {
      switch (event) {
        case 'mousemove':
          this._listeners.move && this._listeners.move(data);
          break;
        case 'click':
          this._listeners.click && this._listeners.click(data);
          break;
        case 'featureout':
          this._listeners.out && this._listeners.out();
          break;
        case 'error':
          this._listeners.error && this._listeners.error(data);
      }
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(event, callback) {
      switch (event) {
        case 'mousemove':
          this._listeners.move = callback;
          break;
        case 'click':
          this._listeners.click = callback;
          break;
        case 'featureout':
          this._listeners.out = callback;
          break;
        case 'error':
          this._listeners.error = callback;
      }
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(event) {
      switch (event) {
        case 'mousemove':
          delete this._listeners.move;
          break;
        case 'click':
          delete this._listeners.click;
          break;
        case 'featureout':
          delete this._listeners.out;
          break;
        case 'error':
          delete this._listeners.error;
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this._listeners = {
        click: undefined,
        move: undefined,
        out: undefined,
        error: undefined
      };
    }
  }]);

  return EventEmitter;
}();

module.exports = EventEmitter;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Load grid.json tiles from a server.
 */
var TileLoader = function () {
  function TileLoader(gridUrl) {
    _classCallCheck(this, TileLoader);

    this._url = gridUrl;
    this._cache = {};
  }

  _createClass(TileLoader, [{
    key: 'setUrl',
    value: function setUrl(newValue) {
      this._url = newValue;
    }

    /**
     * Load a grid.json tile from the coords using a cache system to improve performance.
     * @param {number} z
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: 'loadTile',
    value: function loadTile(z, x, y) {
      var _this = this;

      // If already cached the request is ignored.
      if (this._cache[z + '_' + x + '_' + y]) {
        return Promise.resolve(this._cache[z + '_' + x + '_' + y]);
      }
      // Mark the tile as "fetching" to prevent duplicated requests. The value will be async obtained.
      this._cache[z + '_' + x + '_' + y] = 'fetching';

      return fetch(this._buildTileUrl(z, x, y))
      // On server limit errors reject throw a featureError
      .then(this._handleLimitErrors).then(function (data) {
        _this._cache[z + '_' + x + '_' + y] = data;
        return data;
      });
    }

    /**
     * Builds the tile url from the coords.
     * @param {number} z
     * @param {number} x
     * @param {number} y
     */

  }, {
    key: '_buildTileUrl',
    value: function _buildTileUrl(z, x, y) {
      var url = this._url;
      url = url.replace(/{z}/, z);
      url = url.replace(/{x}/, x);
      url = url.replace(/{y}/, y);
      return url;
    }

    /**
     * When the server returns a 429 we want to throw an especific error.
     */

  }, {
    key: '_handleLimitErrors',
    value: function _handleLimitErrors(response) {
      if (response.status === 429) {
        return response.json().then(function (data) {
          return Promise.reject(data);
        });
      }
      return response.json();
    }
  }]);

  return TileLoader;
}();

module.exports = TileLoader;

/***/ })
/******/ ]);
});
//# sourceMappingURL=zera.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseWindshaftErrors = __webpack_require__(25);

function CartoDBLayerGroupViewBase(layerGroupModel, opts) {
  opts = opts || {};
  this.interaction = [];
  this.nativeMap = opts.nativeMap;
  this._mapModel = opts.mapModel;

  layerGroupModel.on('change:urls', this._reload, this);
  layerGroupModel.onLayerVisibilityChanged(this._reload.bind(this));

  this._reload();
}

CartoDBLayerGroupViewBase.prototype = {
  _reload: function _reload() {
    throw new Error('_reload must be implemented');
  },

  _reloadInteraction: function _reloadInteraction() {
    this._clearInteraction();

    this.model.forEachGroupedLayer(function (layerModel, layerIndex) {
      if (layerModel.isVisible() && (layerModel.isInteractive() || this._mapModel && this._mapModel.isFeatureInteractivityEnabled())) {
        this._enableInteraction(layerIndex);
      }
    }, this);
  },

  _clearInteraction: function _clearInteraction() {
    for (var layerIndex in this.interaction) {
      if (this.interaction.hasOwnProperty(layerIndex) && this.interaction[layerIndex]) {
        this.interaction[layerIndex].remove();
        this.interaction[layerIndex] = null;
      }
    }
  },

  _enableInteraction: function _enableInteraction(layerIndexInLayerGroup) {
    var self = this;
    var tilejson = this._generateTileJSON(layerIndexInLayerGroup);
    if (tilejson) {
      var previousLayerInteraction = this.interaction[layerIndexInLayerGroup];
      if (previousLayerInteraction) {
        previousLayerInteraction.remove();
      }

      // eslint-disable-next-line
      this.interaction[layerIndexInLayerGroup] = new this.interactionClass().map(this.nativeMap).tilejson(tilejson).on('on', function (zeraEvent) {
        if (self._interactionDisabled) return;
        zeraEvent.layer = layerIndexInLayerGroup;
        self._manageOnEvents(self.nativeMap, zeraEvent);
      }).on('off', function (zeraEvent) {
        if (self._interactionDisabled) return;
        zeraEvent = zeraEvent || {};
        // TODO: zera has an .on('error', () => { }) callback that should be used here
        if (zeraEvent.errors != null) {
          self._manageInteractivityErrors(zeraEvent);
        }
        zeraEvent.layer = layerIndexInLayerGroup;
        self._manageOffEvents(self.nativeMap, zeraEvent);
      });
    }
  },

  _manageInteractivityErrors: function _manageInteractivityErrors(payload) {
    var errors = parseWindshaftErrors(payload);
    if (errors.length > 0) {
      this.trigger('featureError', errors[0]);
    }
  },

  _generateTileJSON: function _generateTileJSON(layerIndexInLayerGroup) {
    if (this.model.hasURLs()) {
      return {
        tilejson: '2.0.0',
        scheme: 'xyz',
        grids: this.model.getGridURLTemplatesWithSubdomains(layerIndexInLayerGroup),
        tiles: this.model.getTileURLTemplatesWithSubdomains(),
        formatter: function formatter(options, data) {
          return data;
        }
      };
    }
  },

  error: function error(e) {},

  tilesOk: function tilesOk() {}
};

module.exports = CartoDBLayerGroupViewBase;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (eventName, internalEvent, layer) {
  if (layer) {
    var event = {
      data: undefined,
      latLng: undefined
    };
    if (internalEvent.feature) {
      event.data = internalEvent.feature;
    }
    if (internalEvent.latlng) {
      event.latLng = {
        lat: internalEvent.latlng[0],
        lng: internalEvent.latlng[1]
      };
    }
    if (internalEvent.position) {
      event.position = {
        x: internalEvent.position.x,
        y: internalEvent.position.y
      };
    }

    /**
     * Event object for feature events triggered by {@link carto.layer.Layer}.
     *
     * @typedef {object} carto.layer.FeatureEvent
     * @property {LatLng} latLng - Object with coordinates where interaction took place
     * @property {object} data - Object with feature data (one attribute for each specified column)
     * @api
     */

    /**
     * Fired when user clicks on a feature.
     *
     * @event featureClicked
     * @type {carto.layer.FeatureEvent}
     * @api
     */

    /**
     * Fired when user moves the mouse over a feature.
     *
     * @event featureOver
     * @type {carto.layer.FeatureEvent}
     * @api
     */

    /**
     * Fired when user moves the mouse out of a feature.
     *
     * @event featureOut
     * @type {carto.layer.FeatureEvent}
     * @api
     */
    layer.trigger(eventName, event);
  }
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Base metadata object
 *
 * @constructor
 * @abstract
 * @memberof carto.layer.metadata
 * @api
 */
function Base(type, rule) {
  this._type = type || '';
  this._column = rule.getColumn();
  this._mapping = rule.getMapping();
  this._property = rule.getProperty();
}

/**
 * Return the type of the metadata
 *
 * @return {string}
 * @api
 */
Base.prototype.getType = function () {
  return this._type;
};

/**
 * Return the column of the metadata
 *
 * @return {string}
 * @api
 */
Base.prototype.getColumn = function () {
  return this._column;
};

/**
 * Return the property of the metadata
 *
 * @return {string}
 * @api
 */
Base.prototype.getMapping = function () {
  return this._mapping;
};

/**
 * Return the property of the metadata
 *
 * @return {string}
 * @api
 */
Base.prototype.getProperty = function () {
  return this._property;
};

module.exports = Base;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

/**
 * Base style object.
 *
 * @fires error
 * @constructor
 * @abstract
 * @memberof carto.style
 * @api
 */
function Base() {}

_.extend(Base.prototype, Backbone.Events);

Base.prototype.$setError = function (cartoError) {
  this._error = cartoError;
  this.trigger('error', cartoError);
};

Base.prototype.$setEngine = function (newEngine) {
  if (this._engine && this._engine !== newEngine) {
    throw new Error('CartoCSS engine cannot be changed');
  }
  this._engine = newEngine;
};

Base.prototype.$getEngine = function () {
  return this._engine;
};

module.exports = Base;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

var getFieldNames = function getFieldNames(fields) {
  return _.map(fields, function (field) {
    var o = {};
    o[field.name] = field.title;
    return o;
  });
};

var PopupFields = Backbone.Collection.extend({
  equals: function equals(otherFields) {
    var myFields = this.toJSON();
    return _.isEqual(getFieldNames(myFields), getFieldNames(otherFields));
  }
});

module.exports = PopupFields;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

/**
 * Base layer object.
 *
 * This object should not be used directly! use {@link carto.layer.Layer} instead.
 *
 * @constructor
 * @abstract
 * @fires error
 * @memberof carto.layer
 * @api
 */
function Base(source, layer, options) {
  options = options || {};
  this._id = options.id || Base.$generateId();
}

_.extend(Base.prototype, Backbone.Events);

/**
 * Get the unique autogenerated id.
 *
 * @return {string} Unique autogenerated id
 *
 */
Base.prototype.getId = function () {
  return this._id;
};

/**
 * The instance id will be autogenerated by incrementing this variable.
 */
Base.$nextId = 0;

/**
 * Static funciton used internally to autogenerate source ids.
 */
Base.$generateId = function () {
  return 'L' + ++Base.$nextId;
};

/**
 * Return the real CARTO.js model used by the layer.
 */
Base.prototype.$getInternalModel = function () {
  return this._internalModel;
};

module.exports = Base;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var WINDSHAFT_ERRORS = __webpack_require__(24).WINDSHAFT_ERRORS;

var WindshaftError = function WindshaftError(error, type, origin) {
  this._error = error;

  this.origin = origin || 'windshaft';
  this.type = getType(error.type, type, WINDSHAFT_ERRORS.GENERIC);
  this.subtype = error.subtype;
  this.message = truncateMessage(error.message);
  this.context = error.context;

  if (this.isLayerError(error.type)) {
    this.context = error.layer && error.layer.context;
    this.layerId = error.layer && error.layer.id;
  }

  if (this.isAnalysisError(error.type) && error.analysis) {
    this.context = error.analysis.context;
    this.analysisId = error.analysis.node_id || error.analysis.id;
  }
};

WindshaftError.prototype.isGlobalError = function (errorType) {
  return !this.isLayerError(errorType) && !this.isAnalysisError(errorType);
};

WindshaftError.prototype.isLayerError = function (errorType) {
  errorType = errorType || this._error.type;
  return errorType === WINDSHAFT_ERRORS.LAYER;
};

WindshaftError.prototype.isAnalysisError = function (errorType) {
  errorType = errorType || this._error.type;
  return errorType === WINDSHAFT_ERRORS.ANALYSIS;
};

// Helper functions

function truncateMessage(message) {
  var MAX_SIZE = 256;

  return message && message.length > MAX_SIZE ? message.substring(0, MAX_SIZE) : message;
}

function getType(originalType, forcedType, genericType) {
  if (!originalType || originalType === WINDSHAFT_ERRORS.UNKNOWN) {
    if (forcedType) {
      return forcedType;
    } else if (originalType !== WINDSHAFT_ERRORS.UNKNOWN) {
      return genericType;
    } else {
      return WINDSHAFT_ERRORS.UNKNOWN;
    }
  } else {
    return originalType;
  }
}

module.exports = WindshaftError;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  MAPS_API_BASE_URL: 'api/v1/map'
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var v = __webpack_require__(132);

module.exports.getVersion = function (version) {
    if (version === 'latest') {
        version = v.target;
    }
    else if (!v.versions.includes(version)) {
        throw new Error(
                'Invalid camshaft-reference version: "' + version + '". ' +
                'Valid versions are: ' + v.versions.join(', ') + '.'
        );
    }

    return __webpack_require__(131)("./" + version + '/reference.json');
};

module.exports.versions = v.versions;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var AnalysisPoller = __webpack_require__(137);
var AnonymousMapSerializer = __webpack_require__(135);
var Backbone = __webpack_require__(1);
var CartoDBLayerGroup = __webpack_require__(126);
var DataviewsCollection = __webpack_require__(125);
var LayersCollection = __webpack_require__(124);
var ModelUpdater = __webpack_require__(123);
var NamedMapSerializer = __webpack_require__(117);
var Request = __webpack_require__(116);
var Response = __webpack_require__(115);
var WindshaftClient = __webpack_require__(114);
var AnalysisService = __webpack_require__(29);
var WindshaftError = __webpack_require__(41);

var RELOAD_DEBOUNCE_TIME_IN_MILIS = 100;

/**
 *
 * Creates a new Engine.
 * An engine is the core of a carto app.
 *
 * With the help of external services the engine will:
 *
 *  - Keep the state of the layers and dataviews.
 *  - Serialize the state and send requests to the server.
 *  - Parse the server response and update the internal models.
 *  - Notify errors or successful operations.
 *
 * @param {Object} params - The parameters to initialize the engine.
 * @param {string} params.apiKey - Api key used to be autenticate in the windshaft server.
 * @param {string} params.authToken - Token used to be autenticate in the windshaft server.
 * @param {string} params.username - Name of the user registered in the windshaft server.
 * @param {string} params.serverUrl - Url of the windshaft server.
 * @param {boolean} params.templateName - While we dont remove named maps we must explicitly say when the map is named. Defaults to false.
 * @param {boolean} params.client - Token used to get map view statistics.
 * @constructor
 */
function Engine(params) {
  if (!params) throw new Error('new Engine() called with no parameters');
  this._isNamedMap = params.templateName !== undefined;

  // Variables for the reload debounce
  this._timeout = null;
  this._stackCalls = [];
  this._batchOptions = {};

  this._windshaftSettings = {
    urlTemplate: params.serverUrl,
    userName: params.username,
    client: params.client,
    apiKey: params.apiKey,
    authToken: params.authToken,
    templateName: params.templateName
  };

  this._windshaftClient = new WindshaftClient(this._windshaftSettings);

  // This object will be responsible of triggering the engine events.
  this._eventEmmitter = _.extend({}, Backbone.Events);

  this._analysisPoller = new AnalysisPoller();
  this._layersCollection = new LayersCollection();
  this._dataviewsCollection = new DataviewsCollection();

  this._cartoLayerGroup = new CartoDBLayerGroup({ apiKey: params.apiKey, authToken: params.authToken }, { layersCollection: this._layersCollection });
  this._bindCartoLayerGroupError();

  this._modelUpdater = new ModelUpdater({
    dataviewsCollection: this._dataviewsCollection,
    layerGroupModel: this._cartoLayerGroup,
    layersCollection: this._layersCollection
  });
}

/**
 * Return the cartoLayergroup attached to the engine
 */
Engine.prototype.getLayerGroup = function () {
  return this._cartoLayerGroup;
};

/**
 * Returns the API key attached to the engine
 */
Engine.prototype.getApiKey = function () {
  return this._windshaftSettings && this._windshaftSettings.apiKey;
};

/**
 * Returns the Auth token attached to the engine
 */
Engine.prototype.getAuthToken = function () {
  return this._windshaftSettings && this._windshaftSettings.authToken;
};

/**
 * Bind a callback function to an event. The callback will be invoked whenever the event is fired.
 *
 * @param {string} event - The name of the event that triggers the callback execution.
 * @param {function} callback - A function to be executed when the event is fired.
 * @param {function} [context] - The context value for this when the callback is invoked.
 * @example
 * // Define a callback to be executed once the map is reloaded.
 * function onReload(event) {
 *  console.log(event); // "reload-success"
 * }
 * // Attach the callback to the RELOAD_SUCCESS event.
 * engine.on(Engine.Events.RELOAD_SUCCESS, onReload);
 * // Call the reload method and wait.
 * engine.reload();
 *
 */
Engine.prototype.on = function (event, callback, context) {
  this._eventEmmitter.on(event, callback, context);
};

/**
 * Remove a previously-bound callback function from an event.
 *
 * @param {string} event - The name of the event that triggers the callback execution.
 * @param {function} callback - A function callback to be removed when the event is fired.
 * @param {function} [context] - The context value for this when the callback is invoked.
 * @example
 * // Remove the the `displayMap` listener function so it wont be executed anymore when the engine fires the `load` event.
 * engine.off(Engine.Events.RELOAD_SUCCESS, onReload);
 *
 */
Engine.prototype.off = function (event, callback, context) {
  this._eventEmmitter.off(event, callback, context);
};

/**
 * This is the most important function of the engine.
 * Generate a payload from the current state, send it to the windshaft server
 * and update the internal models with the server response.
 *
 * Once the response has arrived trigger a 'reload-succes' or 'reload-error' event.
 *
 * @param {string} options.sourceId - The sourceId triggering the reload event. This is usefull to prevent uneeded requests and save data.
 * @param {boolean} options.forceFetch - Forces dataviews to fetch data from server after a reload
 * @param {boolean} options.includeFilters - Boolean flag to control if the filters need to be added in the payload.
 *
 * @fires Engine#Engine:RELOAD_STARTED
 * @fires Engine#Engine:RELOAD_SUCCESS
 * @fires Engine#Engine:RELOAD_ERROR
 *
 */
Engine.prototype.reload = function (options) {
  options = options || {};
  // Using a debouncer to optimize consecutive calls to reload the map.
  // This allows to change multiple map parameters reloading the map only once,
  // and therefore avoid the "You are over platform's limits" Windshaft error.
  return new Promise(function (resolve, reject) {
    this._batchOptions = _.pick({
      sourceId: options.sourceId,
      forceFetch: this._batchOptions.forceFetch || options.forceFetch,
      includeFilters: options.includeFilters
    }, _.negate(_.isUndefined));
    this._stackCalls.push({
      success: options.success,
      error: options.error,
      resolve: resolve,
      reject: reject
    });
    var later = function () {
      this._timeout = null;
      this._performReload(this._batchOptions).then(function () {
        // Resolve stacked callbacks and promises
        this._stackCalls.forEach(function (call) {
          call.success && call.success();
          call.resolve();
        });
        // Reset stack
        this._stackCalls = [];
        this._batchOptions = {};
      }.bind(this)).catch(function (windshaftError) {
        // Reject stacked callbacks and promises
        this._stackCalls.forEach(function (call) {
          call.error && call.error(windshaftError);
          call.reject(windshaftError);
        });
        // Reset stack
        this._stackCalls = [];
        this._batchOptions = {};
      }.bind(this));
    }.bind(this);
    clearTimeout(this._timeout);
    this._timeout = setTimeout(later, RELOAD_DEBOUNCE_TIME_IN_MILIS);
  }.bind(this));
};

Engine.prototype._performReload = function (options) {
  return new Promise(function (resolve, reject) {
    // Build Windshaft options callbacks
    var windshaftOptions = this._buildWindshaftOptions(options,
    // Windshaft success callback
    function (serverResponse) {
      this._onReloadSuccess(serverResponse, options.sourceId, options.forceFetch);
      resolve();
    }.bind(this),
    // Windshaft error callback
    function (errors) {
      var windshaftError = this._onReloadError(errors);
      reject(windshaftError);
    }.bind(this));
    try {
      var params = this._buildParams(windshaftOptions.includeFilters);
      var payload = this._getSerializer().serialize(this._layersCollection, this._dataviewsCollection);
      var request = new Request(payload, params, windshaftOptions);

      // Trigger STARTED event
      this._eventEmmitter.trigger(Engine.Events.RELOAD_STARTED);
      // Perform the request
      this._windshaftClient.instantiateMap(request);
    } catch (error) {
      // Convert error in a windshaftError
      var windshaftError = new WindshaftError({ message: error.message });
      this._manageClientError(windshaftError, windshaftOptions);
    }
  }.bind(this));
};

/**
 *
 * Add a layer to the engine layersCollection
 *
 * @param {layer} layer - A new layer to be added to the engine.
 *
 * @public
 */
Engine.prototype.addLayer = function (layer) {
  this._layersCollection.add(layer);
};

/**
 *
 * Remove a layer from the engine layersCollection
 *
 * @param {layer} layer - A new layer to be removed from the engine.
 *
 * @public
 */
Engine.prototype.removeLayer = function (layer) {
  this._layersCollection.remove(layer);
};

/**
 *
 * Move a layer in the engine layersCollection
 *
 * @param {layer} layer - A new layer to be moved in the engine.
 * @param {number} toIndex - Final index for the layer.
 *
 * @public
 */
Engine.prototype.moveLayer = function (layer, toIndex) {
  var fromIndex = this._layersCollection.indexOf(layer);
  if (fromIndex >= 0 && fromIndex !== toIndex) {
    this._layersCollection.models.splice(toIndex, 0, this._layersCollection.models.splice(fromIndex, 1)[0]);
    // Equivalent to:
    // this._layersCollection.remove(layer, { silent: true });
    // this._layersCollection.add(layer, { at: toIndex });
  }
};

/**
 *
 * Add a dataview to the engine dataviewsCollection
 *
 * @param {Dataview} dataview - A new dataview to be added to the engine.
 *
 * @public
 */
Engine.prototype.addDataview = function (dataview) {
  this._dataviewsCollection.add(dataview);
};

/**
 *
 * Remove a dataview from the engine dataviewsCollection
 *
 * @param {Dataview} dataview - The Dataview to be removed to the engine.
 *
 * @public
 */
Engine.prototype.removeDataview = function (dataview) {
  this._dataviewsCollection.remove(dataview);
};

/**
 * Callback executed when the windhsaft client returns a successful response.
 * Update internal models and trigger a RELOAD_SUCCESS event.
 * @private
 */
Engine.prototype._onReloadSuccess = function (serverResponse, sourceId, forceFetch) {
  var responseWrapper = new Response(this._windshaftSettings, serverResponse);
  this._modelUpdater.updateModels(responseWrapper, sourceId, forceFetch);
  this._restartAnalysisPolling();
  // Trigger RELOAD_SUCCESS event
  this._eventEmmitter.trigger(Engine.Events.RELOAD_SUCCESS);
};

/**
 * Callback executed when the windhsaft client returns a failed response.
 * Update internal models setting errors and trigger a RELOAD_ERROR event.
 * @private
 */
Engine.prototype._onReloadError = function (errors) {
  var windshaftError = this._getSimpleWindshaftError(errors);
  this._modelUpdater.setErrors(errors);
  // Trigger RELOAD_ERROR event
  this._eventEmmitter.trigger(Engine.Events.RELOAD_ERROR, windshaftError);
  return windshaftError;
};

/**
 * Helper to get windhsaft request options.
 * @private
 */
Engine.prototype._buildWindshaftOptions = function (options, successCallback, errorCallback) {
  return _.extend({
    includeFilters: true,
    success: successCallback,
    error: errorCallback
  }, _.pick(options, 'sourceId', 'forceFetch', 'includeFilters'));
};

/**
 * Helper to get windhsaft request parameters.
 * @param {boolean} includeFilters - Boolean flag to control if the filters need to be added in the payload.
 * @private
 */
Engine.prototype._buildParams = function (includeFilters) {
  var params = {};

  if (true) {
    params.client = this._windshaftSettings.client;
  }

  if (includeFilters && !_.isEmpty(this._dataviewsCollection.getFilters())) {
    params.filters = this._dataviewsCollection.getFilters();
  }

  if (this._windshaftSettings.apiKey) {
    params.api_key = this._windshaftSettings.apiKey;
    return params;
  }

  if (this._windshaftSettings.authToken) {
    params.auth_token = this._windshaftSettings.authToken;
    return params;
  }

  console.warn('Engine initialized with no apiKeys neither authToken');
};

/**
 * Reset the analysis nodes in the poller
 * @private
 */
Engine.prototype._restartAnalysisPolling = function () {
  var analysisNodes = AnalysisService.getUniqueAnalysisNodes(this._layersCollection, this._dataviewsCollection);
  this._analysisPoller.resetAnalysisNodes(analysisNodes);
};

/**
 * Get the instance of the serializer service depending on is an anonymous or a named map.
 * @private
 */
Engine.prototype._getSerializer = function () {
  return this._isNamedMap ? NamedMapSerializer : AnonymousMapSerializer;
};

/**
 * Manage and propagate the client error
 * @private
 */
Engine.prototype._manageClientError = function (windshaftError, windshaftOptions) {
  this._modelUpdater.setErrors([windshaftError]);
  windshaftOptions.error && windshaftOptions.error([windshaftError]);
};

/**
 * Listen to errors in cartoLayerGroup
 */
Engine.prototype._bindCartoLayerGroupError = function () {
  this._cartoLayerGroup.on('all', function (change, error) {
    if (change.lastIndexOf('error:', 0) === 0) {
      error = new WindshaftError(error);
      this._eventEmmitter.trigger(Engine.Events.LAYER_ERROR, error);
    }
  }, this);
};

Engine.prototype._getSimpleWindshaftError = function (errors) {
  var error = _.find(errors, function (error) {
    return error.isGlobalError();
  });
  if (!error && errors && errors.length > 0) {
    error = errors[0];
  }
  return error;
};

/**
 * Events fired by the engine
 *
 * @readonly
 * @enum {string}
 */
Engine.Events = {
  /**
   * Reload started event, fired every time the reload process starts.
   */
  RELOAD_STARTED: 'reload-started',
  /**
   * Reload success event, fired every time the reload function succeed.
   */
  RELOAD_SUCCESS: 'reload-success',
  /**
   * Reload error event, fired every time the reload function fails.
   */
  RELOAD_ERROR: 'reload-error',
  /**
   * Error event, fired every time a tile or limit error happens.
   */
  LAYER_ERROR: 'layer-error'
};

module.exports = Engine;

/**
 * Reload started event, fired every time the reload process starts.
 *
 * @event Engine#Engine:RELOAD_STARTED
 * @type {string}
 */

/**
  * Reload success event, fired every time the reload function succeed.
  *
  * @event Engine#Engine:RELOAD_SUCCESS
  * @type {string}
  */

/**
  * Reload success event, fired every time the reload function fails.
  *
  * @event Engine#Engine:RELOAD_ERROR
  * @type {string}
  */

/**
  * Layer group error event, fired every time an error with layer group happends (tile or limit).
  *
  * @event Engine#Engine:LAYER_ERROR
  * @type {string}
  */

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/d3-array/src/ascending.js
/* harmony default export */ var ascending = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisector.js


/* harmony default export */ var bisector = (function(compare) {
  if (compare.length === 1) compare = ascendingComparator(compare);
  return {
    left: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) < 0) lo = mid + 1;
        else hi = mid;
      }
      return lo;
    },
    right: function(a, x, lo, hi) {
      if (lo == null) lo = 0;
      if (hi == null) hi = a.length;
      while (lo < hi) {
        var mid = lo + hi >>> 1;
        if (compare(a[mid], x) > 0) hi = mid;
        else lo = mid + 1;
      }
      return lo;
    }
  };
});

function ascendingComparator(f) {
  return function(d, x) {
    return ascending(f(d), x);
  };
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/bisect.js



var ascendingBisect = bisector(ascending);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ var bisect = (bisectRight);

// CONCATENATED MODULE: ./node_modules/d3-array/src/pairs.js
/* harmony default export */ var pairs = (function(array, f) {
  if (f == null) f = pair;
  var i = 0, n = array.length - 1, p = array[0], pairs = new Array(n < 0 ? 0 : n);
  while (i < n) pairs[i] = f(p, p = array[++i]);
  return pairs;
});

function pair(a, b) {
  return [a, b];
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/cross.js


/* harmony default export */ var cross = (function(values0, values1, reduce) {
  var n0 = values0.length,
      n1 = values1.length,
      values = new Array(n0 * n1),
      i0,
      i1,
      i,
      value0;

  if (reduce == null) reduce = pair;

  for (i0 = i = 0; i0 < n0; ++i0) {
    for (value0 = values0[i0], i1 = 0; i1 < n1; ++i1, ++i) {
      values[i] = reduce(value0, values1[i1]);
    }
  }

  return values;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/descending.js
/* harmony default export */ var descending = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/number.js
/* harmony default export */ var number = (function(x) {
  return x === null ? NaN : +x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/variance.js


/* harmony default export */ var variance = (function(values, valueof) {
  var n = values.length,
      m = 0,
      i = -1,
      mean = 0,
      value,
      delta,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        delta = value - mean;
        mean += delta / ++m;
        sum += delta * (value - mean);
      }
    }
  }

  if (m > 1) return sum / (m - 1);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/deviation.js


/* harmony default export */ var deviation = (function(array, f) {
  var v = variance(array, f);
  return v ? Math.sqrt(v) : v;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/extent.js
/* harmony default export */ var extent = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null) {
            if (min > value) min = value;
            if (max < value) max = value;
          }
        }
      }
    }
  }

  return [min, max];
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/array.js
var array_array = Array.prototype;

var slice = array_array.slice;
var map = array_array.map;

// CONCATENATED MODULE: ./node_modules/d3-array/src/constant.js
/* harmony default export */ var constant = (function(x) {
  return function() {
    return x;
  };
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/identity.js
/* harmony default export */ var identity = (function(x) {
  return x;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/range.js
/* harmony default export */ var range = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/ticks.js
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ var ticks = (function(start, stop, count) {
  var reverse,
      i = -1,
      n,
      ticks,
      step;

  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0) return [start];
  if (reverse = stop < start) n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step)) return [];

  if (step > 0) {
    start = Math.ceil(start / step);
    stop = Math.floor(stop / step);
    ticks = new Array(n = Math.ceil(stop - start + 1));
    while (++i < n) ticks[i] = (start + i) * step;
  } else {
    start = Math.floor(start * step);
    stop = Math.ceil(stop * step);
    ticks = new Array(n = Math.ceil(start - stop + 1));
    while (++i < n) ticks[i] = (start - i) / step;
  }

  if (reverse) ticks.reverse();

  return ticks;
});

function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count),
      power = Math.floor(Math.log(step) / Math.LN10),
      error = step / Math.pow(10, power);
  return power >= 0
      ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power)
      : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}

function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count),
      step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)),
      error = step0 / step1;
  if (error >= e10) step1 *= 10;
  else if (error >= e5) step1 *= 5;
  else if (error >= e2) step1 *= 2;
  return stop < start ? -step1 : step1;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/sturges.js
/* harmony default export */ var sturges = (function(values) {
  return Math.ceil(Math.log(values.length) / Math.LN2) + 1;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/histogram.js









/* harmony default export */ var src_histogram = (function() {
  var value = identity,
      domain = extent,
      threshold = sturges;

  function histogram(data) {
    var i,
        n = data.length,
        x,
        values = new Array(n);

    for (i = 0; i < n; ++i) {
      values[i] = value(data[i], i, data);
    }

    var xz = domain(values),
        x0 = xz[0],
        x1 = xz[1],
        tz = threshold(values, x0, x1);

    // Convert number of thresholds into uniform thresholds.
    if (!Array.isArray(tz)) {
      tz = tickStep(x0, x1, tz);
      tz = range(Math.ceil(x0 / tz) * tz, Math.floor(x1 / tz) * tz, tz); // exclusive
    }

    // Remove any thresholds outside the domain.
    var m = tz.length;
    while (tz[0] <= x0) tz.shift(), --m;
    while (tz[m - 1] > x1) tz.pop(), --m;

    var bins = new Array(m + 1),
        bin;

    // Initialize bins.
    for (i = 0; i <= m; ++i) {
      bin = bins[i] = [];
      bin.x0 = i > 0 ? tz[i - 1] : x0;
      bin.x1 = i < m ? tz[i] : x1;
    }

    // Assign data to bins by value, ignoring any outside the domain.
    for (i = 0; i < n; ++i) {
      x = values[i];
      if (x0 <= x && x <= x1) {
        bins[bisect(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
  };

  return histogram;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/quantile.js


/* harmony default export */ var quantile = (function(values, p, valueof) {
  if (valueof == null) valueof = number;
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/freedmanDiaconis.js





/* harmony default export */ var freedmanDiaconis = (function(values, min, max) {
  values = map.call(values, number).sort(ascending);
  return Math.ceil((max - min) / (2 * (quantile(values, 0.75) - quantile(values, 0.25)) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/threshold/scott.js


/* harmony default export */ var scott = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * deviation(values) * Math.pow(values.length, -1 / 3)));
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/max.js
/* harmony default export */ var src_max = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      max;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        max = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && value > max) {
            max = value;
          }
        }
      }
    }
  }

  return max;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/mean.js


/* harmony default export */ var src_mean = (function(values, valueof) {
  var n = values.length,
      m = n,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) sum += value;
      else --m;
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) sum += value;
      else --m;
    }
  }

  if (m) return sum / m;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/median.js




/* harmony default export */ var median = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      numbers = [];

  if (valueof == null) {
    while (++i < n) {
      if (!isNaN(value = number(values[i]))) {
        numbers.push(value);
      }
    }
  }

  else {
    while (++i < n) {
      if (!isNaN(value = number(valueof(values[i], i, values)))) {
        numbers.push(value);
      }
    }
  }

  return quantile(numbers.sort(ascending), 0.5);
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/merge.js
/* harmony default export */ var merge = (function(arrays) {
  var n = arrays.length,
      m,
      i = -1,
      j = 0,
      merged,
      array;

  while (++i < n) j += arrays[i].length;
  merged = new Array(j);

  while (--n >= 0) {
    array = arrays[n];
    m = array.length;
    while (--m >= 0) {
      merged[--j] = array[m];
    }
  }

  return merged;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/min.js
/* harmony default export */ var src_min = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      min;

  if (valueof == null) {
    while (++i < n) { // Find the first comparable value.
      if ((value = values[i]) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = values[i]) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  else {
    while (++i < n) { // Find the first comparable value.
      if ((value = valueof(values[i], i, values)) != null && value >= value) {
        min = value;
        while (++i < n) { // Compare the remaining values.
          if ((value = valueof(values[i], i, values)) != null && min > value) {
            min = value;
          }
        }
      }
    }
  }

  return min;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/permute.js
/* harmony default export */ var permute = (function(array, indexes) {
  var i = indexes.length, permutes = new Array(i);
  while (i--) permutes[i] = array[indexes[i]];
  return permutes;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/scan.js


/* harmony default export */ var scan = (function(values, compare) {
  if (!(n = values.length)) return;
  var n,
      i = 0,
      j = 0,
      xi,
      xj = values[j];

  if (compare == null) compare = ascending;

  while (++i < n) {
    if (compare(xi = values[i], xj) < 0 || compare(xj, xj) !== 0) {
      xj = xi, j = i;
    }
  }

  if (compare(xj, xj) === 0) return j;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/shuffle.js
/* harmony default export */ var shuffle = (function(array, i0, i1) {
  var m = (i1 == null ? array.length : i1) - (i0 = i0 == null ? 0 : +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/sum.js
/* harmony default export */ var src_sum = (function(values, valueof) {
  var n = values.length,
      i = -1,
      value,
      sum = 0;

  if (valueof == null) {
    while (++i < n) {
      if (value = +values[i]) sum += value; // Note: zero and null are equivalent.
    }
  }

  else {
    while (++i < n) {
      if (value = +valueof(values[i], i, values)) sum += value;
    }
  }

  return sum;
});

// CONCATENATED MODULE: ./node_modules/d3-array/src/transpose.js


/* harmony default export */ var src_transpose = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = src_min(matrix, transpose_length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function transpose_length(d) {
  return d.length;
}

// CONCATENATED MODULE: ./node_modules/d3-array/src/zip.js


/* harmony default export */ var zip = (function() {
  return src_transpose(arguments);
});

// CONCATENATED MODULE: ./node_modules/d3-array/index.js
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisect", function() { return bisect; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ascending", function() { return ascending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "bisector", function() { return bisector; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "cross", function() { return cross; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "descending", function() { return descending; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "deviation", function() { return deviation; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "extent", function() { return extent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "histogram", function() { return src_histogram; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return freedmanDiaconis; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return scott; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return sturges; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "max", function() { return src_max; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "mean", function() { return src_mean; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "median", function() { return median; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "merge", function() { return merge; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "min", function() { return src_min; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "pairs", function() { return pairs; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "permute", function() { return permute; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "quantile", function() { return quantile; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "range", function() { return range; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "scan", function() { return scan; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "shuffle", function() { return shuffle; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "sum", function() { return src_sum; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ticks", function() { return ticks; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "transpose", function() { return src_transpose; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "variance", function() { return variance; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "zip", function() { return zip; });





























/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FiltersCollection = __webpack_require__(21);

/**
 * When including this filter into a {@link carto.source.SQL} or a {@link carto.source.Dataset}, the rows will be filtered by the conditions included within filters.
 *
 * This filter will group as many filters as you want and it will add them to the query returning the rows that match ANY of the filters to render the visualization.
 *
 * You can add or remove filters by invoking `.addFilter()` and `.removeFilter()`.
 *
 * @example
 * // Create a filter by room type, showing only private rooms
 * const roomTypeFilter = new carto.filter.Category('room_type', { eq: 'Private room' });
 * // Create a filter by price, showing only listings lower than or equal to 50€
 * const priceFilter = new carto.filter.Range('price', { lte: 50 });
 *
 * // Combine the filters with an OR operator, returning rows that match one or the other filter
 * const filterByRoomTypeOrPrice = new carto.filter.OR([ roomTypeFilter, priceFilter ]);
 *
 * // Add filters to the existing source
 * source.addFilter(filterByRoomTypeOrPrice);
 *
 * @class OR
 * @extends carto.filter.FiltersCollection
 * @memberof carto.filter
 * @api
 */

var OR = function (_FiltersCollection) {
  _inherits(OR, _FiltersCollection);

  /**
   * Create a OR group filter
   * @param {Array} filters - The filters to apply in the query
   */
  function OR(filters) {
    _classCallCheck(this, OR);

    var _this = _possibleConstructorReturn(this, (OR.__proto__ || Object.getPrototypeOf(OR)).call(this, filters));

    _this.JOIN_OPERATOR = 'OR';
    return _this;
  }

  return OR;
}(FiltersCollection);

module.exports = OR;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FiltersCollection = __webpack_require__(21);

/**
 * When including this filter into a {@link carto.source.SQL} or a {@link carto.source.Dataset}, the rows will be filtered by the conditions included within filters.
 *
 * This filter will group as many filters as you want and it will add them to the query returning the rows that match ALL the filters to render the visualization.
 *
 * You can add or remove filters by invoking `.addFilter()` and `.removeFilter()`.
 *
 * @example
 * // Create a filter by room type, showing only private rooms
 * const roomTypeFilter = new carto.filter.Category('room_type', { eq: 'Private room' });
 * // Create a filter by price, showing only listings lower than or equal to 50€
 * const priceFilter = new carto.filter.Range('price', { lte: 50 });
 *
 * // Combine the filters with an AND condition, returning rows that match both filters
 * const filterByRoomTypeAndPrice = new carto.filter.AND([ roomTypeFilter, priceFilter ]);
 *
 * // Add filters to the existing source
 * source.addFilter(filterByRoomTypeAndPrice);
 *
 * @class AND
 * @extends carto.filter.FiltersCollection
 * @memberof carto.filter
 * @api
 */

var AND = function (_FiltersCollection) {
  _inherits(AND, _FiltersCollection);

  function AND(filters) {
    _classCallCheck(this, AND);

    var _this = _possibleConstructorReturn(this, (AND.__proto__ || Object.getPrototypeOf(AND)).call(this, filters));

    _this.JOIN_OPERATOR = 'AND';
    return _this;
  }

  return AND;
}(FiltersCollection);

module.exports = AND;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SQLBase = __webpack_require__(11);

var RANGE_COMPARISON_OPERATORS = {
  lt: { parameters: [{ name: 'lt', allowedTypes: ['Number', 'Date', 'Object'] }] },
  lte: { parameters: [{ name: 'lte', allowedTypes: ['Number', 'Date', 'Object'] }] },
  gt: { parameters: [{ name: 'gt', allowedTypes: ['Number', 'Date', 'Object'] }] },
  gte: { parameters: [{ name: 'gte', allowedTypes: ['Number', 'Date', 'Object'] }] },
  between: {
    parameters: [{ name: 'between.min', allowedTypes: ['Number', 'Date'] }, { name: 'between.max', allowedTypes: ['Number', 'Date'] }]
  },
  notBetween: {
    parameters: [{ name: 'notBetween.min', allowedTypes: ['Number', 'Date'] }, { name: 'notBetween.max', allowedTypes: ['Number', 'Date'] }]
  },
  betweenSymmetric: {
    parameters: [{ name: 'betweenSymmetric.min', allowedTypes: ['Number', 'Date'] }, { name: 'betweenSymmetric.max', allowedTypes: ['Number', 'Date'] }]
  },
  notBetweenSymmetric: {
    parameters: [{ name: 'notBetweenSymmetric.min', allowedTypes: ['Number', 'Date'] }, { name: 'notBetweenSymmetric.max', allowedTypes: ['Number', 'Date'] }]
  }
};

var ALLOWED_FILTERS = Object.freeze(Object.keys(RANGE_COMPARISON_OPERATORS));

/**
 * When including this filter into a {@link carto.source.SQL} or a {@link carto.source.Dataset}, the rows will be filtered by the conditions included within the filter.
 *
 * You can filter columns with `in`, `notIn`, `eq`, `notEq`, `like`, `similarTo` filters, and update the conditions with `.set()` or `.setFilters()` method. It will refresh the visualization automatically when any filter is added or modified.
 *
 * This filter won't include null values within returned rows by default but you can include them by setting `includeNull` option.
 *
 * @param {string} column - The column to filter rows
 * @param {object} filters - The filters you want to apply to the column
 * @param {(number|Date|object)} filters.lt - Return rows whose column value is less than the provided value
 * @param {string} filters.lt.query - Return rows whose column value is less than the value returned by query
 * @param {(number|Date|object)} filters.lte - Return rows whose column value is less than or equal to the provided value
 * @param {string} filters.lte.query - Return rows whose column value is less than or equal to the value returned by query
 * @param {(number|Date|object)} filters.gt - Return rows whose column value is greater than the provided value
 * @param {string} filters.gt.query - Return rows whose column value is greater than the value returned by query
 * @param {(number|Date|object)} filters.gte - Return rows whose column value is greater than or equal to the provided value
 * @param {string} filters.gte.query - Return rows whose column value is greater than or equal to the value returned by query
 * @param {(number|Date)} filters.between - Return rows whose column value is between the provided values
 * @param {(number|Date)} filters.between.min - Lower value of the comparison range
 * @param {(number|Date)} filters.between.max - Upper value of the comparison range
 * @param {(number|Date)} filters.notBetween - Return rows whose column value is not between the provided values
 * @param {(number|Date)} filters.notBetween.min - Lower value of the comparison range
 * @param {(number|Date)} filters.notBetween.max - Upper value of the comparison range
 * @param {(number|Date)} filters.betweenSymmetric - Return rows whose column value is between the provided values after sorting them
 * @param {(number|Date)} filters.betweenSymmetric.min - Lower value of the comparison range
 * @param {(number|Date)} filters.betweenSymmetric.max - Upper value of the comparison range
 * @param {(number|Date)} filters.notBetweenSymmetric - Return rows whose column value is not between the provided values after sorting them
 * @param {(number|Date)} filters.notBetweenSymmetric.min - Lower value of the comparison range
 * @param {(number|Date)} filters.notBetweenSymmetric.max - Upper value of the comparison range
 * @param {object} [options]
 * @param {boolean} [options.includeNull] - Include null rows when returning data
 *
 * @example
 * // Create a filter by price, showing only listings lower than or equal to 50€, and higher than 100€
 * const priceFilter = new carto.filter.Range('price', { lte: 50, gt: 100 });
 *
 * // Add filter to the existing source
 * airbnbDataset.addFilter(priceFilter);
 *
 * @example
 * // Create a filter by price, showing only listings greater than or equal to the average price
 * const priceFilter = new carto.filter.Range('price', { gte: { query: 'SELECT avg(price) FROM listings' } });
 *
 * // Add filter to the existing source
 * airbnbDataset.addFilter(priceFilter);
 *
 * @class Range
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 */

var Range = function (_SQLBase) {
  _inherits(Range, _SQLBase);

  function Range(column) {
    var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments[2];

    _classCallCheck(this, Range);

    var _this = _possibleConstructorReturn(this, (Range.__proto__ || Object.getPrototypeOf(Range)).call(this, column, options));

    _this.SQL_TEMPLATES = _this._getSQLTemplates();
    _this.ALLOWED_FILTERS = ALLOWED_FILTERS;
    _this.PARAMETER_SPECIFICATION = RANGE_COMPARISON_OPERATORS;

    _this._checkFilters(filters);
    _this._filters = filters;
    return _this;
  }

  _createClass(Range, [{
    key: '_getSQLTemplates',
    value: function _getSQLTemplates() {
      return {
        lt: '<%= column %> < <%= value.query ? "(" + value.query + ")" : value %>',
        lte: '<%= column %> <= <%= value.query ? "(" + value.query + ")" : value %>',
        gt: '<%= column %> > <%= value.query ? "(" + value.query + ")" : value %>',
        gte: '<%= column %> >= <%= value.query ? "(" + value.query + ")" : value %>',
        between: '<%= column %> BETWEEN <%= value.min %> AND <%= value.max %>',
        notBetween: '<%= column %> NOT BETWEEN <%= value.min %> AND <%= value.max %>',
        betweenSymmetric: '<%= column %> BETWEEN SYMMETRIC <%= value.min %> AND <%= value.max %>',
        notBetweenSymmetric: '<%= column %> NOT BETWEEN SYMMETRIC <%= value.min %> AND <%= value.max %>'
      };
    }

    /**
     * Set any of the filter conditions, overwriting the previous one.
     * @param {string} filterType - The filter type that you want to set. `lt`, `lte`, `gt`, `gte`, `between`, `notBetween`, `betweenSymmetric`, `notBetweenSymmetric`.
     * @param {string} filterValue - The value of the filter. Check types in {@link carto.filter.Range}
     *
     * @memberof Range
     * @method set
     * @api
     */

    /**
     * Set filter conditions, overriding all the previous ones.
     * @param {object} filters - Object containing all the new filters to apply. Check filter options in {@link carto.filter.Range}.
     *
     * @memberof Range
     * @method setFilters
     * @api
     */

    /**
     * Remove all conditions from current filter
     *
     * @memberof Range
     * @method resetFilters
     * @api
     */

  }]);

  return Range;
}(SQLBase);

module.exports = Range;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SQLBase = __webpack_require__(11);

var CATEGORY_COMPARISON_OPERATORS = {
  in: { parameters: [{ name: 'in', allowedTypes: ['Array', 'String', 'Object'] }] },
  notIn: { parameters: [{ name: 'notIn', allowedTypes: ['Array', 'String', 'Object'] }] },
  eq: { parameters: [{ name: 'eq', allowedTypes: ['String', 'Number', 'Date', 'Object'] }] },
  notEq: { parameters: [{ name: 'notEq', allowedTypes: ['String', 'Number', 'Date', 'Object'] }] },
  like: { parameters: [{ name: 'like', allowedTypes: ['String'] }] },
  similarTo: { parameters: [{ name: 'similarTo', allowedTypes: ['String'] }] }
};

var ALLOWED_FILTERS = Object.freeze(Object.keys(CATEGORY_COMPARISON_OPERATORS));

/**
 * When including this filter into a {@link carto.source.SQL} or a {@link carto.source.Dataset}, the rows will be filtered by the conditions included within the filter.
 *
 * You can filter columns with `in`, `notIn`, `eq`, `notEq`, `like`, `similarTo` filters, and update the conditions with `.set()` or `.setFilters()` method. It will refresh the visualization automatically when any filter is added or modified.
 *
 * This filter won't include null values within returned rows by default but you can include them by setting `includeNull` option.
 *
 * @param {string} column - The column which the filter will be performed against
 * @param {object} filters - The filters you want to apply to the table rows
 * @param {(string[]|object)} filters.in - Return rows whose column value is included within the provided values
 * @param {string} filters.in.query - Return rows whose column value is included within query results
 * @param {(string[]|object)} filters.notIn - Return rows whose column value is included within the provided values
 * @param {string} filters.notIn.query - Return rows whose column value is not included within query results
 * @param {(string|number|Date|object)} filters.eq - Return rows whose column value is equal to the provided value
 * @param {string} filters.eq.query - Return rows whose column value is equal to the value returned by query
 * @param {(string|number|Date|object)} filters.notEq - Return rows whose column value is not equal to the provided value
 * @param {string} filters.notEq.query - Return rows whose column value is not equal to the value returned by query
 * @param {string} filters.like - Return rows whose column value is like the provided value
 * @param {string} filters.similarTo - Return rows whose column value is similar to the provided values
 * @param {object} [options]
 * @param {boolean} [options.includeNull] - Include null rows when returning data
 *
 * @example
 * // Create a filter by room type, showing only private rooms
 * const roomTypeFilter = new carto.filter.Category('room_type', { eq: 'Private Room' });
 * airbnbDataset.addFilter(roomTypeFilter);
 *
 * @example
 * // Create a filter by room type, showing only private rooms and entire apartments
 * const roomTypeFilter = new carto.filter.Category('room_type', { in: ['Private Room', 'Entire home/apt'] });
 * airbnbDataset.addFilter(roomTypeFilter);
 *
 * @example
 * // Create a filter by room type, showing results included in subquery
 * const roomTypeFilter = new carto.filter.Category('room_type', { in: { query: 'SELECT distinct(type) FROM rooms' } });
 * airbnbDataset.addFilter(roomTypeFilter);
 *
 * @class Category
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 */

var Category = function (_SQLBase) {
  _inherits(Category, _SQLBase);

  function Category(column) {
    var filters = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var options = arguments[2];

    _classCallCheck(this, Category);

    var _this = _possibleConstructorReturn(this, (Category.__proto__ || Object.getPrototypeOf(Category)).call(this, column, options));

    _this.SQL_TEMPLATES = _this._getSQLTemplates();
    _this.ALLOWED_FILTERS = ALLOWED_FILTERS;
    _this.PARAMETER_SPECIFICATION = CATEGORY_COMPARISON_OPERATORS;

    _this._checkFilters(filters);
    _this._filters = filters;
    return _this;
  }

  _createClass(Category, [{
    key: '_getSQLTemplates',
    value: function _getSQLTemplates() {
      return {
        in: '<% if (value) { %><%= column %> IN (<%= value.query || value %>)<% } else { %>true = false<% } %>',
        notIn: '<% if (value) { %><%= column %> NOT IN (<%= value.query || value %>)<% } %>',
        eq: '<%= column %> = <%= value.query ? "(" + value.query + ")" : value %>',
        notEq: '<%= column %> != <%= value.query ? "(" + value.query + ")" : value %>',
        like: '<%= column %> LIKE <%= value %>',
        similarTo: '<%= column %> SIMILAR TO <%= value %>'
      };
    }

    /**
     * Set any of the filter conditions, overwriting the previous one.
     * @param {string} filterType - The filter type that you want to set. `in`, `notIn`, `eq`, `notEq`, `like`, `similarTo`.
     * @param {string} filterValue - The value of the filter. Check types in {@link carto.filter.Category}
     *
     * @memberof Category
     * @method set
     * @api
     */

    /**
     * Set filter conditions, overriding all the previous ones.
     * @param {object} filters - Object containing all the new filters to apply. Check filter options in {@link carto.filter.Category}.
     *
     * @memberof Category
     * @method setFilters
     * @api
     */

    /**
     * Remove all conditions from current filter
     *
     * @memberof Category
     * @method resetFilters
     * @api
     */

  }]);

  return Category;
}(SQLBase);

module.exports = Category;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

module.exports = Model.extend({
  initialize: function initialize() {
    this._polygon = {};
  },

  setPolygon: function setPolygon(polygon) {
    this._polygon = polygon;
    this.trigger('polygonChanged', polygon);
  },

  getPolygon: function getPolygon() {
    return this._polygon;
  },

  serialize: function serialize() {
    return encodeURIComponent(JSON.stringify(this.getPolygon()));
  }
});

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(6);
var PolygonFilterModel = __webpack_require__(50);
var CartoValidationError = __webpack_require__(3);
var SpatialFilterTypes = __webpack_require__(8);

/**
 * Generic polygon filter.
 *
 * When this filter is included into a dataview only the data inside a custom polygon will be taken into account.
 *
 * You can manually set the polygon with the `setPolygon()`.
 *
 * This filter could be useful if you want give the users the ability to select a custom area in the map and update the dataviews accordingly.
 *
 *
 * @constructor
 * @fires polygonChanged
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 *
 */
function Polygon() {
  this._internalModel = new PolygonFilterModel();
  this.type = SpatialFilterTypes.POLYGON;
}

Polygon.prototype = Object.create(Base.prototype);

/**
 * Set the polygon.
 *
 * @param {carto.filter.PolygonData} polygon
 * @fires polygonChanged
 * @return {carto.filter.Polygon} this
 * @api
 */
Polygon.prototype.setPolygon = function (polygon) {
  this._checkPolygon(polygon);
  this._internalModel.setPolygon(polygon);
  this.trigger('polygonChanged', polygon);
  return this;
};

/**
 * Reset the polygon.
 *
 * @fires polygonChanged
 * @return {carto.filter.Polygon} this
 * @api
 */
Polygon.prototype.resetPolygon = function () {
  return this.setPolygon({
    type: 'Polygon',
    coordinates: []
  });
};

/**
 * Return the current polygon data
 *
 * @return {carto.filter.PolygonData} Current polygon data, expressed as a GeoJSON geometry fragment
 * @api
 */
Polygon.prototype.getPolygon = function () {
  /**
   * @typedef {object} carto.filter.PolygonData
   * @property {string} type - Geometry type, Just 'Polygon' is valid
   * @property {Array.<number[]>} coordinates - Array of coordinates [lng, lat] as defined in GeoJSON geometries
   * @api
   */
  return this._internalModel.getPolygon();
};

Polygon.prototype._checkPolygon = function (polygon) {
  if (_.isUndefined(polygon) || _.isUndefined(polygon.type) || _.isUndefined(polygon.coordinates) || !_.isString(polygon.type) || !_.isArray(polygon.coordinates) || polygon.type !== 'Polygon') {
    throw new CartoValidationError('filter', 'invalidPolygonObject');
  }
};

Polygon.prototype.$getInternalModel = function () {
  return this._internalModel;
};

module.exports = Polygon;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

module.exports = Model.extend({
  initialize: function initialize() {
    this._circle = {};
  },

  setCircle: function setCircle(circle) {
    this._circle = circle;
    this.trigger('circleChanged', circle);
  },

  getCircle: function getCircle() {
    return this._circle;
  },

  serialize: function serialize() {
    return encodeURIComponent(JSON.stringify(this.getCircle()));
  }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(6);
var CircleFilterModel = __webpack_require__(52);
var CartoValidationError = __webpack_require__(3);
var SpatialFilterTypes = __webpack_require__(8);

/**
 * Generic circle filter.
 *
 * When this filter is included into a dataview only the data inside a custom circle will be taken into account.
 *
 * You can manually set the circle properties with the `setCircle()`.
 *
 * This filter could be useful if you want give the users the ability to select a buffer around a point of interest in the map and update the dataviews accordingly.
 *
 *
 * @constructor
 * @fires circleChanged
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 *
 */
function Circle() {
  this._internalModel = new CircleFilterModel();
  this.type = SpatialFilterTypes.CIRCLE;
}

Circle.prototype = Object.create(Base.prototype);

/**
 * Set the circle.
 *
 * @param {carto.filter.CircleData} circle
 * @fires circleChanged
 * @return {carto.filter.Circle} this
 * @api
 */
Circle.prototype.setCircle = function (circle) {
  this._checkCircle(circle);
  this._internalModel.setCircle(circle);
  this.trigger('circleChanged', circle);
  return this;
};

/**
 * Reset the circle.
 *
 * @fires circleChanged
 * @return {carto.filter.Circle} this
 * @api
 */
Circle.prototype.resetCircle = function () {
  return this.setCircle({ lat: 0, lng: 0, radius: 0 });
};

/**
 * Return the current circle data
 *
 * @return {carto.filter.CircleData} Current circle data
 * @api
 */
Circle.prototype.getCircle = function () {
  /**
   * @typedef {object} carto.filter.CircleData
   * @property {number} lat - Center Latitude WGS84
   * @property {number} lng - Center Longitude WGS84
   * @property {number} radius - Radius in meters
   * @api
   */
  return this._internalModel.getCircle();
};

Circle.prototype._checkCircle = function (circle) {
  if (_.isUndefined(circle) || _.isUndefined(circle.lat) || _.isUndefined(circle.lng) || _.isUndefined(circle.radius) || !_.isNumber(circle.lat) || !_.isNumber(circle.lng) || !_.isNumber(circle.radius)) {
    throw new CartoValidationError('filter', 'invalidCircleObject');
  }
};

Circle.prototype.$getInternalModel = function () {
  return this._internalModel;
};

module.exports = Circle;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global google */
var _ = __webpack_require__(0);
var Model = __webpack_require__(2);

/**
 * Adapt the Google Maps map to offer unique:
 * - getBounds() function
 * - 'boundsChanged' event
 */
module.exports = Model.extend({

  initialize: function initialize(map) {
    this._isReady = false;
    this._map = map;
    this._debouncedTriggerBoundsChanged = _.debounce(this._triggerBoundsChanged, 200);

    google.maps.event.addListener(this._map, 'bounds_changed', this._debouncedTriggerBoundsChanged.bind(this));
  },

  getBounds: function getBounds() {
    if (this._isReady) {
      var mapBounds = this._map.getBounds();
      var sw = mapBounds.getSouthWest();
      var ne = mapBounds.getNorthEast();
      return {
        west: sw.lng(),
        south: sw.lat(),
        east: ne.lng(),
        north: ne.lat()
      };
    }
    return {
      west: 0,
      south: 0,
      east: 0,
      north: 0
    };
  },

  clean: function clean() {
    google.maps.event.clearListeners(this._map, 'bounds_changed');
  },

  _triggerBoundsChanged: function _triggerBoundsChanged() {
    this._isReady = true;
    this.trigger('boundsChanged', this.getBounds());
  }
});

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global google */

var Base = __webpack_require__(6);
var GoogleMapsBoundingBoxAdapter = __webpack_require__(54);
var BoundingBoxFilterModel = __webpack_require__(18);
var utils = __webpack_require__(7);
var SpatialFilterTypes = __webpack_require__(8);

/**
 * Bounding box filter for Google Maps maps.
 *
 * When this filter is included into a dataview only the data inside the {@link https://developers.google.com/maps/documentation/javascript/3.exp/reference#Map|googleMap}
 * bounds will be taken into account.
 *
 * @param {google.maps.map} map - The google map to track the bounds
 *
 * @fires boundsChanged
 *
 * @constructor
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 *
 * @example
 * // Create a bonding box attached to a google map.
 * const bboxFilter = new carto.filter.BoundingBoxGoogleMaps(googleMap);
 * // Add the filter to a dataview. Generating new data when the map bounds are changed.
 * dataview.addFilter(bboxFilter);
 */
function BoundingBoxGoogleMaps(map) {
  if (!_isGoogleMap(map)) {
    throw new Error('Bounding box requires a Google Maps map but got: ' + map);
  }
  this.type = SpatialFilterTypes.BBOX;

  // Adapt the Google Maps map to offer unique:
  // - getBounds() function
  // - 'boundsChanged' event
  var mapAdapter = new GoogleMapsBoundingBoxAdapter(map);
  // Use the adapter for the internal BoundingBoxFilter model
  this._internalModel = new BoundingBoxFilterModel(mapAdapter);
  this.listenTo(this._internalModel, 'boundsChanged', this._onBoundsChanged);
}

BoundingBoxGoogleMaps.prototype = Object.create(Base.prototype);

/**
 * Return the current bounds.
 *
 * @return {carto.filter.Bounds} Current bounds
 * @api
 */
BoundingBoxGoogleMaps.prototype.getBounds = function () {
  return this._internalModel.getBounds();
};

BoundingBoxGoogleMaps.prototype._onBoundsChanged = function (bounds) {
  this.trigger('boundsChanged', bounds);
};

BoundingBoxGoogleMaps.prototype.$getInternalModel = function () {
  return this._internalModel;
};

// Helper to check if an element is a leafletmap object
function _isGoogleMap(element) {
  // Check if Google Maps is loaded
  utils.isGoogleMapsLoaded();
  return element instanceof google.maps.Map;
}

module.exports = BoundingBoxGoogleMaps;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Model = __webpack_require__(2);

/**
 * Adapt the Leaflet map to offer unique:
 * - getBounds() function
 * - 'boundsChanged' event
 */
module.exports = Model.extend({

  initialize: function initialize(map) {
    this._map = map;
    this._debouncedTriggerBoundsChanged = _.debounce(this._triggerBoundsChanged, 200);
    this._map.on('move zoom', this._debouncedTriggerBoundsChanged, this);
  },

  getBounds: function getBounds() {
    var mapBounds = this._map.getBounds();
    var sw = mapBounds.getSouthWest();
    var ne = mapBounds.getNorthEast();
    return {
      west: sw.lng,
      south: sw.lat,
      east: ne.lng,
      north: ne.lat
    };
  },

  clean: function clean() {
    this._map.off('move zoom');
  },

  _triggerBoundsChanged: function _triggerBoundsChanged() {
    this.trigger('boundsChanged', this.getBounds());
  }
});

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global L */
var Base = __webpack_require__(6);
var LeafletBoundingBoxAdapter = __webpack_require__(56);
var BoundingBoxFilterModel = __webpack_require__(18);
var utils = __webpack_require__(7);
var SpatialFilterTypes = __webpack_require__(8);

/**
 * Bounding box filter for Leaflet maps.
 *
 * When this filter is included into a dataview only the data inside the {@link http://leafletjs.com/reference-1.3.1.html#map|leafletMap}
 * bounds will be taken into account.
 *
 * @param {L.Map} map - The leaflet map view
 *
 * @fires boundsChanged
 *
 * @constructor
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 *
 * @example
 * // Create a bonding box attached to a leaflet map.
 * const bboxFilter = new carto.filter.BoundingBoxLeaflet(leafletMap);
 * // Add the filter to a dataview. Generating new data when the map bounds are changed.
 * dataview.addFilter(bboxFilter);
 */
function BoundingBoxLeaflet(map) {
  if (!_isLeafletMap(map)) {
    throw new Error('Bounding box requires a Leaflet map but got: ' + map);
  }
  this.type = SpatialFilterTypes.BBOX;

  // Adapt the Leaflet map to offer unique:
  // - getBounds() function
  // - 'boundsChanged' event
  var mapAdapter = new LeafletBoundingBoxAdapter(map);
  // Use the adapter for the internal BoundingBoxFilter model
  this._internalModel = new BoundingBoxFilterModel(mapAdapter);
  this.listenTo(this._internalModel, 'boundsChanged', this._onBoundsChanged);
}

BoundingBoxLeaflet.prototype = Object.create(Base.prototype);

/**
 * Return the current bounds.
 *
 * @return {carto.filter.Bounds} Current bounds
 * @api
 */
BoundingBoxLeaflet.prototype.getBounds = function () {
  return this._internalModel.getBounds();
};

BoundingBoxLeaflet.prototype._onBoundsChanged = function (bounds) {
  this.trigger('boundsChanged', bounds);
};

BoundingBoxLeaflet.prototype.$getInternalModel = function () {
  return this._internalModel;
};

// Helper to check if an element is a Leaflet map object
function _isLeafletMap(element) {
  // Check if Leaflet is loaded
  utils.isLeafletLoaded();
  return element instanceof L.Map;
}

module.exports = BoundingBoxLeaflet;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(6);
var BoundingBoxFilterModel = __webpack_require__(18);
var CartoValidationError = __webpack_require__(3);
var SpatialFilterTypes = __webpack_require__(8);

/**
 * Generic bounding box filter.
 *
 * When this filter is included into a dataview only the data inside a custom bounding box will be taken into account.
 *
 * You can manually set the bounds via the `.setBounds()` method.
 *
 * This filter could be useful if you want give the users to ability to select a portion of the map and update the dataviews accordingly.
 *
 *
 * @constructor
 * @fires boundsChanged
 * @extends carto.filter.Base
 * @memberof carto.filter
 * @api
 *
 */
function BoundingBox() {
  this._internalModel = new BoundingBoxFilterModel();
  this.type = SpatialFilterTypes.BBOX;
}

BoundingBox.prototype = Object.create(Base.prototype);

/**
 * Set the bounds.
 *
 * @param  {carto.filter.Bounds} bounds
 * @fires boundsChanged
 * @return {carto.filter.BoundingBox} this
 * @api
 */
BoundingBox.prototype.setBounds = function (bounds) {
  this._checkBounds(bounds);
  this._internalModel.setBounds(bounds);
  this.trigger('boundsChanged', bounds);
  return this;
};

/**
 * Reset the bounds.
 *
 * @fires boundsChanged
 * @return {carto.filter.BoundingBox} this
 * @api
 */
BoundingBox.prototype.resetBounds = function () {
  return this.setBounds({ west: 0, south: 0, east: 0, north: 0 });
};

/**
 * Return the current bounds.
 *
 * @return {carto.filter.Bounds} Current bounds
 * @api
 */
BoundingBox.prototype.getBounds = function () {
  /**
   * @typedef {object} carto.filter.Bounds
   * @property {number} west - West coordinate
   * @property {number} south - South coordinate
   * @property {number} east - East coordinate
   * @property {number} north - North coordinate
   * @api
   */
  return this._internalModel.getBounds();
};

BoundingBox.prototype._checkBounds = function (bounds) {
  if (_.isUndefined(bounds) || _.isUndefined(bounds.west) || _.isUndefined(bounds.south) || _.isUndefined(bounds.east) || _.isUndefined(bounds.north) || !_.isNumber(bounds.west) || !_.isNumber(bounds.south) || !_.isNumber(bounds.east) || !_.isNumber(bounds.north)) {
    throw new CartoValidationError('filter', 'invalidBoundsObject');
  }
};

BoundingBox.prototype.$getInternalModel = function () {
  return this._internalModel;
};

module.exports = BoundingBox;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BoundingBox = __webpack_require__(58);
var BoundingBoxLeaflet = __webpack_require__(57);
var BoundingBoxGoogleMaps = __webpack_require__(55);
var Circle = __webpack_require__(53);
var Polygon = __webpack_require__(51);
var Category = __webpack_require__(49);
var Range = __webpack_require__(48);
var AND = __webpack_require__(47);
var OR = __webpack_require__(46);

/**
 *  @namespace carto.filter
 *  @api
 */
module.exports = {
  BoundingBox: BoundingBox,
  BoundingBoxLeaflet: BoundingBoxLeaflet,
  BoundingBoxGoogleMaps: BoundingBoxGoogleMaps,
  Circle: Circle,
  Polygon: Polygon,
  Category: Category,
  Range: Range,
  AND: AND,
  OR: OR
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

function secondsToHours(seconds) {
  return seconds / 3600;
}

/**
 * Transform the data obtained from an internal timeseries dataview into a  public object.
 *
 * @param {object[]} data - The raw time series data
 * @param {number} nulls - Number of data with a null
 * @param {number} totalAmount - Total number of data in the histogram
 *
 * @return {TimeSeriesData} - The parsed and formatted data for the given parameters
 */
function parseTimeSeriesData(data, nulls, totalAmount, offset) {
  if (!data) {
    return null;
  }
  var compactData = _.compact(data);
  var maxBin = _.max(compactData, function (bin) {
    return bin.freq || 0;
  });
  var maxFreq = _.isFinite(maxBin.freq) && maxBin.freq !== 0 ? maxBin.freq : null;

  /**
   * @description
   * Object containing time series data.
   *
   * @typedef {object} carto.dataview.TimeSeriesData
   * @property {number} nulls - The number of items with null value
   * @property {number} totalAmount - The number of elements returned
   * @property {number} offset - The time offset in hours. Needed to format UTC timestamps into the proper timezone format
   * @property {carto.dataview.TimeSeriesBinItem[]} bins - Array containing the {@link carto.dataview.TimeSeriesBinItem|data bins} for the time series
   * @api
   */
  return {
    bins: _createBins(compactData, maxFreq),
    nulls: nulls || 0,
    offset: secondsToHours(offset),
    totalAmount: totalAmount
  };
}

/**
 * Transform the time series raw data into {@link carto.dataview.TimeSeriesBinItem}.
 */
function _createBins(data, maxFreq) {
  return data.map(function (bin) {
    /**
      * @typedef {object} carto.dataview.TimeSeriesBinItem
      * @property {number} index - Number indicating the bin order
      * @property {number} start - Starting UTC timestamp of the bin
      * @property {number} end - End UTC timestamp of the bin
      * @property {number} min - Minimum UTC timestamp present in the bin. Only appears if freq > 0
      * @property {number} max - Maximum UTC timestamp present in the bin. Only appears if freq > 0
      * @property {number} freq - Numbers of elements present in the bin
      * @property {number} normalized - Normalized frequency with respect to the whole dataset
      * @api
      */
    return {
      index: bin.bin,
      start: bin.start,
      end: bin.end,
      min: bin.min,
      max: bin.max,
      freq: bin.freq,
      normalized: _.isFinite(bin.freq) && maxFreq > 0 ? bin.freq / maxFreq : 0
    };
  });
}

module.exports = parseTimeSeriesData;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(10);
var HistogramDataviewModel = __webpack_require__(32);
var parseTimeSeriesData = __webpack_require__(60);
var timeAggregation = __webpack_require__(5).timeAggregation;
var isValidTimeAggregation = __webpack_require__(5).isValidTimeAggregation;

/**
 * A dataview to represent an histogram of temporal data allowing to specify the granularity of the {@link carto.dataview.timeAggregation|temporal bins.}
 *
 * @param {carto.source.Base} source - The source where the dataview will fetch the data
 * @param {string} column - The column name to get the data
 * @param {object} [options]
 * @param {carto.dataview.timeAggregation} [options.aggregation=auto] - Granularity of time aggregation
 * @param {number} [options.offset] - Number of hours to offset the aggregation from UTC
 * @param {boolean} [options.useLocalTimezone] - Indicates whether to use the local user timezone, or not
 *
 * @fires dataChanged
 * @fires columnChanged
 * @fires statusChanged
 * @fires error
 *
 * @fires binsChanged
 * @fires aggregationChanged
 * @fires offsetChanged
 * @fires localTimezoneChanged
 *
 * @constructor
 * @extends carto.dataview.Base
 * @memberof carto.dataview
 * @api
 * @example
 * // We have a tweets dataset and we want to show a "per hour histogram" with the data.
 * var timeSeries = new carto.dataview.TimeSeries(source0, 'last_review', {
 *  offset: 0,
 *  aggregation: 'hour'
 * });
 * @example
 * // You can listen to multiple events emmited by the time-series-dataview.
 * // Data and status are fired by all dataviews.
 * timeSeries.on('dataChanged', newData => { });
 * timeSeries.on('statusChanged', (newData, error) => { });
 * timeSeries.on('error', cartoError => { });
 */
function TimeSeries(source, column, options) {
  this._initialize(source, column, options);
  this._aggregation = this._options.aggregation;
  this._offset = _hoursToSeconds(this._options.offset);
  this._localTimezone = this._options.useLocalTimezone;
}

TimeSeries.prototype = Object.create(Base.prototype);

TimeSeries.prototype.DEFAULTS = {
  aggregation: timeAggregation.AUTO,
  offset: 0,
  useLocalTimezone: false
};

/**
 * Return the resulting data.
 *
 * @return {carto.dataview.TimeSeriesData}
 * @api
 */
TimeSeries.prototype.getData = function () {
  if (this._internalModel) {
    return parseTimeSeriesData(this._internalModel.get('data'), this._internalModel.get('nulls'), this._internalModel.get('totalAmount'), this._internalModel.getCurrentOffset());
  }
  return null;
};

/**
 * Set time aggregation.
 *
 * @param {carto.dataview.timeAggregation} aggregation
 * @fires aggregationChanged
 * @return {carto.dataview.TimeSeries} this
 * @api
 */
TimeSeries.prototype.setAggregation = function (aggregation) {
  this._validateAggregation(aggregation);
  this._changeProperty('aggregation', aggregation);
  return this;
};

/**
 * Return the current time aggregation.
 *
 * @return {carto.dataview.timeAggregation} Current time aggregation
 * @api
 */
TimeSeries.prototype.getAggregation = function () {
  return this._aggregation;
};

/**
 * Set time offset in hours.
 *
 * @param {number} offset
 * @fires offsetChanged
 * @return {carto.dataview.TimeSeries} this
 * @api
 */
TimeSeries.prototype.setOffset = function (offset) {
  this._validateOffset(offset);
  this._changeProperty('offset', _hoursToSeconds(offset));
  return this;
};

/**
 * Return the current time offset in hours.
 *
 * @return {number} Current time offset
 * @api
 */
TimeSeries.prototype.getOffset = function () {
  return _secondsToHours(this._offset);
};

/**
 * Set the local timezone flag. If enabled, the time offset is overriden by the user's local timezone.
 *
 * @param {boolean} localTimezone
 * @fires localTimezoneChanged
 * @return {carto.dataview.TimeSeries} this
 * @api
 */
TimeSeries.prototype.useLocalTimezone = function (enable) {
  this._validateLocalTimezone(enable);
  this._changeProperty('localTimezone', enable);
  return this;
};

/**
 * Return the current local timezone flag.
 *
 * @return {boolean} Current local timezone flag
 * @api
 */
TimeSeries.prototype.isUsingLocalTimezone = function () {
  return this._localTimezone;
};

TimeSeries.prototype._checkOptions = function (options) {
  if (_.isUndefined(options)) {
    throw this._getValidationError('timeSeriesOptionsRequired');
  }
  this._validateAggregation(options.aggregation);
  this._validateOffset(options.offset);
  this._validateLocalTimezone(options.useLocalTimezone);
};

TimeSeries.prototype._validateAggregation = function (aggregation) {
  if (!isValidTimeAggregation(aggregation)) {
    throw this._getValidationError('timeSeriesInvalidAggregation');
  }
};

TimeSeries.prototype._validateOffset = function (offset) {
  if (!_.isFinite(offset) || Math.floor(offset) !== offset || offset < -12 || offset > 14) {
    throw this._getValidationError('timeSeriesInvalidOffset');
  }
};

TimeSeries.prototype._validateLocalTimezone = function (localTimezone) {
  if (!_.isBoolean(localTimezone)) {
    throw this._getValidationError('timeSeriesInvalidUselocaltimezone');
  }
};

TimeSeries.prototype._createInternalModel = function (engine) {
  this._internalModel = new HistogramDataviewModel({
    source: this._source.$getInternalModel(),
    column: this._column,
    aggregation: this._aggregation,
    offset: this._offset,
    localTimezone: this._localTimezone,
    sync_on_bbox_change: !!this._boundingBoxFilter,
    sync_on_circle_change: !!this._circleFilter,
    sync_on_polygon_change: !!this._polygonFilter,
    enabled: this._enabled,
    column_type: 'date'
  }, {
    engine: engine,
    bboxFilter: this._boundingBoxFilter && this._boundingBoxFilter.$getInternalModel(),
    circleFilter: this._circleFilter && this._circleFilter.$getInternalModel(),
    polygonFilter: this._polygonFilter && this._polygonFilter.$getInternalModel()
  });
};

// Utility functions

function _hoursToSeconds(hours) {
  return hours * 3600;
}

function _secondsToHours(seconds) {
  return seconds / 3600;
}
module.exports = TimeSeries;

/**
 * Fired when aggregation has changed. Handler gets a parameter with the new aggregation.
 *
 * @event aggregationChanged
 * @type {string}
 * @api
 */

/**
 * Fired when localTimezone has changed. Handler gets a parameter with the new timezone.
 *
 * @event localTimezoneChanged
 * @type {boolean}
 * @api
 */

/**
 * Fired when offset has changed. Handler gets a parameter with the new offset.
 *
 * @event offsetChanged
 * @type {string}
 * @api
 */

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

/**
 * Transform the data obtained from an internal histogram dataview into a
 * public object.
 *
 * @param {object[]} data - The raw histogram data
 * @param {number} nulls - Number of data with a null
 * @param {number} totalAmount - Total number of data in the histogram
 *
 * @return {carto.dataview.HistogramData} - The parsed and formatted data for the given parameters
 */
function parseHistogramData(data, nulls, totalAmount) {
  if (!data) {
    return null;
  }
  var compactData = _.compact(data);
  var maxBin = _.max(compactData, function (bin) {
    return bin.freq || 0;
  });
  var maxFreq = _.isFinite(maxBin.freq) && maxBin.freq !== 0 ? maxBin.freq : null;

  /**
   * @description
   * Object containing histogram data.
   *
   * @typedef {object} carto.dataview.HistogramData
   * @property {number} nulls - The number of items with null value
   * @property {number} totalAmount - The number of elements returned
   * @property {carto.dataview.BinItem[]} bins - Array containing the {@link carto.dataview.BinItem|data bins} for the histogram
   * @property {string} type - String with value: **histogram**
   * @api
   */
  return {
    bins: _createBins(compactData, maxFreq),
    nulls: nulls || 0,
    totalAmount: totalAmount
  };
}

/**
 * Transform the histogram raw data into {@link carto.dataview.BinItem}
 */
function _createBins(data, maxFreq) {
  return data.map(function (bin) {
    /**
     *  @example
     *
     * // We created an histogram containing airBnb prices per night
     * const histogramDataview = new carto.dataview.Histogram(airbnbDataset, 'price', { bins: 7 });
     * // Listen to dataChanged events
     * histogramDataview.on('dataChanged', data => {
     *  // The first bin contains prices from 0 to 20€ per night, there are 3 rentals in this bin with a cost of 10 15 and 20€.
     *  const bin = console.log(data.bins[0]);
     *  // This is the bin index in the bins array
     *  bin.index; // 0
     *  // The first bin contains rentals from 0 to 20€ per night
     *  bin.start; // 0
     *  // The first bin contains rentals from 0 to 20€ per night
     *  bin.end; // 20
     *  // The lower rental in the bin is 10€ per night
     *  bin.min; // 10
     *  // The maximun rental in the bin is 20€ per night
     *  bin.max; // 20
     *  // The average price in this bin is 15€ per night
     *  bin.avg; // 15
     *  // The bin contains 3 prices
     *  bin.freq; // 3
     *  // Those 3 prices represent the 20% of the dataset.
     *  bin.normalized; // 0.2
     * });
     *
     *
     *
     *
     * @typedef {object} carto.dataview.BinItem
     * @property {number} index - Number indicating the bin order
     * @property {number} start - The lower limit of the bin
     * @property {number} end - The higher limit of the bin
     * @property {number} min - The minimal value appearing in the bin. Only appears if freq > 0
     * @property {number} max - The minimal value appearing in the bin. Only appears if freq > 0
     * @property {number} avg - The average value of the elements for this bin. Only appears if freq > 0
     * @property {number} freq - Number of elements in the bin
     * @property {number} normalized - Normalized frequency with respect to the whole data
     * @api
     */
    return _.extend(bin, { normalized: _.isFinite(bin.freq) && maxFreq > 0 ? bin.freq / maxFreq : 0 });
  });
}

module.exports = parseHistogramData;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dateUtils = {};

dateUtils.getLocalOffset = function () {
  var date = new Date();
  // Return local timezone offset in seconds
  return date.getTimezoneOffset() * -60;
};

module.exports = dateUtils;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var BackboneAbortSync = __webpack_require__(19);
var Model = __webpack_require__(2);
var helper = __webpack_require__(31);

/**
 *  This model is used for getting the total amount of data
 *  from the histogram widget (without any filter).
 */

module.exports = Model.extend({
  defaults: {
    url: '',
    data: [],
    localTimezone: false,
    localOffset: 0,
    hasBeenFetched: false
  },

  url: function url() {
    var params = [];
    var columnType = this.get('column_type');
    var offset = this._getCurrentOffset();
    var aggregation = this.get('aggregation') || 'auto';

    params.push('no_filters=1');

    if (columnType === 'number' && this.get('bins')) {
      params.push('bins=' + this.get('bins'));
    } else if (columnType === 'date') {
      params.push('aggregation=' + aggregation);
      if (_.isFinite(offset)) {
        params.push('offset=' + offset);
      }
    }

    if (this.get('apiKey')) {
      params.push('api_key=' + this.get('apiKey'));
    } else if (this.get('authToken')) {
      var authToken = this.get('authToken');
      if (authToken instanceof Array) {
        _.each(authToken, function (token) {
          params.push('auth_token[]=' + token);
        });
      } else {
        params.push('auth_token=' + authToken);
      }
    }

    // Start - End
    var start = this.get('start');
    var end = this.get('end');
    if (_.isFinite(start) && _.isFinite(end)) {
      params.push('start=' + start);
      params.push('end=' + end);
    }

    return this.get('url') + '?' + params.join('&');
  },

  initialize: function initialize() {
    this.sync = BackboneAbortSync.bind(this);
    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.on('change:url', function () {
      this.refresh();
    }, this);

    this.on('change:aggregation change:offset', function () {
      if (this.get('column_type') === 'date' && this.get('aggregation')) {
        this.refresh();
      }
    }, this);

    this.on('change:bins', function () {
      if (this.get('column_type') === 'number') {
        this.refresh();
      }
    }, this);

    this.on('change:localTimezone', function () {
      this.refresh();
    }, this);

    this.on('change:column', function () {
      this.set('aggregation', 'auto', { silent: true });
    });

    this.on('sync', function () {
      this.set('hasBeenFetched', true);
    });
  },

  setUrl: function setUrl(url) {
    if (!url) {
      throw new Error('url not specified');
    }
    this.set('url', url);
  },

  setBins: function setBins(bins) {
    this.set('bins', bins, { silent: bins === void 0 });
  },

  getData: function getData() {
    return this.get('data');
  },

  parse: function parse(data) {
    var aggregation = data.aggregation || this.get('aggregation');
    var numberOfBins = data.bins_count || 0;
    var width = data.bin_width;
    var start = this.get('column_type') === 'date' ? data.timestamp_start : data.bins_start;

    var parsedData = {};
    parsedData.data = new Array(numberOfBins);

    if (aggregation) {
      parsedData.aggregation = aggregation;
      this.set('aggregation', aggregation, { silent: true });
    }

    _.each(data.bins, function (bin) {
      parsedData.data[bin.bin] = bin;
    });

    if (this.get('column_type') === 'date') {
      parsedData.data = helper.fillTimestampBuckets(parsedData.data, start, aggregation, numberOfBins, 'totals');
      numberOfBins = parsedData.data.length;
    } else {
      helper.fillNumericBuckets(parsedData.data, start, width, numberOfBins);
    }

    if (parsedData.data.length > 0) {
      parsedData.start = parsedData.data[0].start;
      parsedData.end = parsedData.data[parsedData.data.length - 1].end;
    }

    parsedData.bins = numberOfBins;

    return parsedData;
  },

  refresh: function refresh() {
    this.fetch();
  },

  _getCurrentOffset: function _getCurrentOffset() {
    return this.get('localTimezone') ? this.get('localOffset') : this.get('offset');
  }
});

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(10);
var HistogramDataviewModel = __webpack_require__(32);
var parseHistogramData = __webpack_require__(62);

/**
 * A histogram is used to represent the distribution of numerical data.
 *
 * See {@link https://en.wikipedia.org/wiki/Histogram}.
 *
 * @param {carto.source.Base} source - The source where the dataview will fetch the data
 * @param {string} column - The column name to get the data
 * @param {object} [options]
 * @param {number} [options.bins=10] - Number of bins to aggregate the data range into
 * @param {number} [options.start] - Lower limit of the data range, if not present, the lower limit of the actual data will be used. Start and end values must be used together.
 * @param {number} [options.end] - Upper limit of the data range, if not present, the upper limit of the actual data will be used. Start and end values must be used together.
 *
 * @fires dataChanged
 * @fires columnChanged
 * @fires statusChanged
 * @fires error
 *
 * @fires binsChanged
 *
 * @constructor
 * @extends carto.dataview.Base
 * @memberof carto.dataview
 * @api
 * @example
 * // Create a cities population histogram.
 * var histogram = new carto.dataview.Histogram(citiesSource, 'population');
 * // Set up a callback to render the histogram data every time new data is obtained.
 *  histogram.on('dataChanged', renderData);
 * // Add the histogram to the client
 * client.addDataview(histogram);
 * @example
 * // Create a cities population histogram with only 4 bins
 * var histogram = new carto.dataview.Histogram(citiesSource, 'population', {bins: 4});
 * // Add a bounding box filter, so the data will change when the map is moved.
 * var bboxFilter = new carto.filter.BoundingBoxLeaflet(map);
 * // Set up a callback to render the histogram data every time new data is obtained.
 *  histogram.on('dataChanged', histogramData => {
 *    console.log(histogramData);
 *  });
 * // Add the histogram to the client
 * client.addDataview(histogram);
 * @example
 * // Create a cities population histogram with a range
 * var histogram = new carto.dataview.Histogram(citiesSource, 'population', { start: 100000, end: 5000000 });
 * // Set up a callback to render the histogram data every time new data is obtained.
 *  histogram.on('dataChanged', histogramData => {
 *    console.log(histogramData);
 *  });
 * // Add the histogram to the client
 * client.addDataview(histogram);
 * @example
 * // The histogram is an async object so it can be on different states: LOADING, ERROR...
 * // Listen to state events
 * histogram.on('statusChanged', (newStatus, error) => { });
 * // Listen to histogram errors
 * histogram.on('error', error => { });
 */
function Histogram(source, column, options) {
  this._initialize(source, column, options);
  this._bins = this._options.bins;
  this._start = this._options.start;
  this._end = this._options.end;
}

Histogram.prototype = Object.create(Base.prototype);

Histogram.prototype.DEFAULTS = {
  bins: 10
};

/**
 * Return the resulting data.
 *
 * @return {carto.dataview.HistogramData}
 * @api
 */
Histogram.prototype.getData = function () {
  if (this._internalModel) {
    return parseHistogramData(this._internalModel.get('data'), this._internalModel.get('nulls'), this._internalModel.get('totalAmount'));
  }
  return null;
};

Histogram.prototype.setColumn = function (column) {
  Base.prototype.setColumn.apply(this, arguments);
  this._start = null;
  this._end = null;
};

/**
 * Set the number of bins.
 *
 * @param {number} bins
 * @fires binsChanged
 * @return {carto.dataview.Histogram} this
 * @api
 */
Histogram.prototype.setBins = function (bins) {
  this._validateBins(bins);
  this._changeProperty('bins', bins);
  return this;
};

/**
 * Return the current number of bins.
 *
 * @return {number} Current number of bins
 * @api
 */
Histogram.prototype.getBins = function () {
  return this._bins;
};

/**
 * Set the lower and upper limit of the bins range
 *
 * @param {number} start
 * @param {number} end
 * @return {carto.dataview.Histogram} this
 * @api
 */
Histogram.prototype.setStartEnd = function (start, end) {
  this._validateStartEnd(start, end);

  this._changeProperties({ start: start, end: end });

  return this;
};

/**
 * Return the lower limit of the bins' range
 *
 * @return {number} Current value of start
 * @api
 */
Histogram.prototype.getStart = function () {
  return this._start || this._internalModel.get('start');
};

/**
 * Return the upper limit of the bins' range
 *
 * @return {number} Current value of end
 * @api
 */
Histogram.prototype.getEnd = function () {
  return this._end || this._internalModel.get('end');
};

/**
 * Return the distribution type of the current data according to [Galtung’s AJUS System]{@link https://en.wikipedia.org/wiki/Multimodal_distribution#Galtung.27s_classification}
 *
 * @return {string} Distribution type of current data
 * @api
 */
Histogram.prototype.getDistributionType = function () {
  if (this._internalModel) {
    var data = this._internalModel.getData();
    return this._internalModel.getDistributionType(data);
  }
  return null;
};

Histogram.prototype._validateBins = function (bins) {
  if (!_.isFinite(bins) || bins < 1 || Math.floor(bins) !== bins) {
    throw this._getValidationError('histogramInvalidBins');
  }
};

Histogram.prototype._validateStartEnd = function (start, end) {
  var values = [start, end];

  if (_.every(values, _.isUndefined)) return;

  var bothAreNumbers = _.every(values, function (number) {
    return _.isNumber(number) && !_.isNaN(number);
  });
  var bothAreNull = _.every(values, _.isNull);

  if (!bothAreNumbers && !bothAreNull) {
    throw this._getValidationError('histogramInvalidStartEnd');
  }
};

Histogram.prototype._checkOptions = function (options) {
  if (_.isUndefined(options)) {
    throw this._getValidationError('histogramOptionsRequired');
  }
  this._validateBins(options.bins);
  this._validateStartEnd(options.start, options.end);
};

Histogram.prototype._createInternalModel = function (engine) {
  this._internalModel = new HistogramDataviewModel({
    source: this._source.$getInternalModel(),
    column: this._column,
    bins: this._bins,
    start: this._start,
    end: this._end,
    sync_on_bbox_change: !!this._boundingBoxFilter,
    sync_on_circle_change: !!this._circleFilter,
    sync_on_polygon_change: !!this._polygonFilter,
    enabled: this._enabled,
    column_type: 'number'
  }, {
    engine: engine,
    bboxFilter: this._boundingBoxFilter && this._boundingBoxFilter.$getInternalModel(),
    circleFilter: this._circleFilter && this._circleFilter.$getInternalModel(),
    polygonFilter: this._polygonFilter && this._polygonFilter.$getInternalModel()
  });
};

module.exports = Histogram;

/**
 * Fired when bins have changed. Handler gets a parameter with the new bins.
 *
 * @event binsChanged
 * @type {number}
 * @api
 */

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Transform the data obtained from an internal formula dataview into a
 * public object.
 *
 * @param  {number} nulls
 * @param  {string} operation
 * @param  {number} result
 *
 * @return {carto.dataview.FormulaData} - The parsed and formatted data for the given parameters
 */
function parseFormulaData(nulls, operation, result) {
  /**
   * @description
   * Object containing formula data
   *
   * @typedef {object} carto.dataview.FormulaData
   * @property {number} nulls - Number of null values in the column
   * @property {string} operation - Operation used
   * @property {number} result - Result of the operation
   * @api
   */
  return {
    nulls: nulls,
    operation: operation,
    result: result
  };
}

module.exports = parseFormulaData;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var DataviewModelBase = __webpack_require__(20);

module.exports = DataviewModelBase.extend({
  defaults: _.extend({
    type: 'formula',
    data: ''
  }, DataviewModelBase.prototype.defaults),

  initialize: function initialize() {
    DataviewModelBase.prototype.initialize.apply(this, arguments);
    this.on('change:column change:operation', this._reloadAndForceFetch, this);
  },

  parse: function parse(r) {
    return {
      data: r.result,
      nulls: r.nulls
    };
  },

  toJSON: function toJSON() {
    return {
      type: 'formula',
      source: { id: this.getSourceId() },
      options: {
        column: this.get('column'),
        operation: this.get('operation')
      }
    };
  }
},

// Class props
{
  ATTRS_NAMES: DataviewModelBase.ATTRS_NAMES.concat(['column', 'operation'])
});

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(10);
var constants = __webpack_require__(5);
var FormulaDataviewModel = __webpack_require__(67);
var parseFormulaData = __webpack_require__(66);

/**
 * A formula is a simple numeric {@link carto.operation|operation} applied to the column of a {@link carto.source.Base|data source} (dataset or sql query).
 *
 * Like all dataviews, it is an async object so you must wait for the data to be available.
 *
 * @param {carto.source.Base} source - The source where the dataview will fetch the data from
 * @param {string} column - The operation will be performed using this column
 * @param {object} [options]
 * @param {carto.operation} [options.operation] - The operation to apply to the data
 *
 * @fires dataChanged
 * @fires columnChanged
 * @fires statusChanged
 * @fires error
 *
 * @fires operationChanged
 *
 * @constructor
 * @extends carto.dataview.Base
 * @memberof carto.dataview
 * @api
 * @example
 * // Given a cities dataset get the most populated city
 * var formulaDataview = new carto.dataview.Formula(citiesSource, 'population', {
 *  operation: carto.operation.MAX,
 * });
 * @example
 * // You can listen to multiple events emitted by a formula dataview.
 * // Data and status are fired by all dataviews.
 * formulaDataview.on('dataChanged', newData => { });
 * formulaDataview.on('statusChanged', (newData, error) => { });
 * formulaDataview.on('error', cartoError => { });
 *
 * // Listen to specific formula-dataview events
 * formulaDataview.on('columnChanged', newData => { });
 * formulaDataview.on('operationChanged', newData => { });
 */
function Formula(source, column, options) {
  this._initialize(source, column, options);
  this._operation = this._options.operation;
}

Formula.prototype = Object.create(Base.prototype);

/**
 * Set the dataview operation.
 *
 * @param  {carto.operation} operation
 * @fires operationChanged
 * @return {carto.dataview.Formula} this
 * @api
 */
Formula.prototype.setOperation = function (operation) {
  this._checkOperation(operation);
  this._changeProperty('operation', operation);
  return this;
};

/**
 * Return the current dataview operation.
 *
 * @return {carto.operation} Current dataview operation
 * @api
 */
Formula.prototype.getOperation = function () {
  return this._operation;
};

/**
 * Return the resulting data.
 *
 * @return {carto.dataview.FormulaData}
 * @api
 */
Formula.prototype.getData = function () {
  if (this._internalModel) {
    return parseFormulaData(this._internalModel.get('nulls'), this._operation, this._internalModel.get('data'));
  }
  return null;
};

Formula.prototype.DEFAULTS = {
  operation: constants.operation.COUNT
};

Formula.prototype._checkOptions = function (options) {
  if (_.isUndefined(options)) {
    throw this._getValidationError('formulaOptionsRequired');
  }
  this._checkOperation(options.operation);
};

Formula.prototype._checkOperation = function (operation) {
  if (_.isUndefined(operation) || !constants.isValidOperation(operation)) {
    throw this._getValidationError('formulaInvalidOperation');
  }
};

Formula.prototype._createInternalModel = function (engine) {
  this._internalModel = new FormulaDataviewModel({
    source: this._source.$getInternalModel(),
    column: this._column,
    operation: this._operation,
    sync_on_bbox_change: !!this._boundingBoxFilter,
    sync_on_circle_change: !!this._circleFilter,
    sync_on_polygon_change: !!this._polygonFilter,
    enabled: this._enabled
  }, {
    engine: engine,
    bboxFilter: this._boundingBoxFilter && this._boundingBoxFilter.$getInternalModel(),
    circleFilter: this._circleFilter && this._circleFilter.$getInternalModel(),
    polygonFilter: this._polygonFilter && this._polygonFilter.$getInternalModel()
  });
};

module.exports = Formula;

/**
 * Fired when the operation has changed. Handler gets a parameter with the new operation.
 *
 * @event operationChanged
 * @type {carto.operation}
 * @api
 */

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

/**
 * Transform the data obtained from an internal category dataview into a
 * public object.
 *
 * @param  {object[]} data
 * @param  {number} count
 * @param  {number} max
 * @param  {number} min
 * @param  {number} nulls
 * @param  {string} operation
 *
 * @return {carto.dataview.CategoryData} - The parsed and formatted data for the given parameters
 */
function parseCategoryData(data, count, max, min, nulls, operation) {
  if (!data) {
    return null;
  }
  /**
   * @typedef {object} carto.dataview.CategoryData
   * @property {number} count - The total number of categories
   * @property {number} max - Maximum category value
   * @property {number} min - Minimum category value
   * @property {number} nulls - Number of null categories
   * @property {string} operation - Operation used
   * @property {carto.dataview.CategoryItem[]} categories
   * @api
   */
  return {
    count: count,
    max: max,
    min: min,
    nulls: nulls,
    operation: operation,
    categories: _createCategories(data)
  };
}

/**
 * Transform the histogram raw data into {@link carto.dataview.CategoryItem}
 */
function _createCategories(data) {
  return _.map(data, function (item) {
    /**
     * @typedef {object} carto.dataview.CategoryItem
     * @property {boolean} group - Category is a group
     * @property {string} name - Category name
     * @property {number} value - Category value
     * @api
     */
    return {
      group: item.agg,
      name: item.name,
      value: item.value
    };
  });
}

module.exports = parseCategoryData;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

module.exports = Model.extend({

  isEmpty: function isEmpty() {
    throw new Error('Filters must implement the .isEmpty method');
  },

  toJSON: function toJSON() {
    throw new Error('Filters must implement the .toJSON method');
  },

  remove: function remove() {
    this.trigger('destroy', this);
    this.stopListening();
  }
});

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var WindshaftFilterBase = __webpack_require__(70);

/**
 * Filter used by the category dataview
 */
module.exports = WindshaftFilterBase.extend({

  defaults: {
    rejectAll: false
  },

  initialize: function initialize() {
    this.rejectedCategories = new Backbone.Collection();
    this.acceptedCategories = new Backbone.Collection();
    this._initBinds();
  },

  _initBinds: function _initBinds() {
    this.listenTo(this.rejectedCategories, 'add remove', function () {
      this.set('rejectAll', false);
    });
    this.listenTo(this.acceptedCategories, 'add remove', function () {
      this.set('rejectAll', false);
    });
  },

  isEmpty: function isEmpty() {
    return this.rejectedCategories.size() === 0 && this.acceptedCategories.size() === 0 && !this.get('rejectAll');
  },

  accept: function accept(values, applyFilter) {
    values = !_.isArray(values) ? [values] : values;

    _.each(values, function (value) {
      var d = { name: value };
      var rejectedMdls = this.rejectedCategories.where(d);
      var acceptedMdls = this.acceptedCategories.where(d);
      if (rejectedMdls.length > 0) {
        this.rejectedCategories.remove(rejectedMdls);
      } else if (!acceptedMdls.length) {
        this.acceptedCategories.add(d);
      }
    }, this);

    if (applyFilter !== false) {
      this.applyFilter();
    }
  },

  acceptAll: function acceptAll() {
    this.set('rejectAll', false);
    this.cleanFilter();
  },

  isAccepted: function isAccepted(name) {
    return this.acceptedCategories.where({ name: name }).length > 0;
  },

  reject: function reject(values, applyFilter) {
    values = !_.isArray(values) ? [values] : values;

    _.each(values, function (value) {
      var d = { name: value };
      var acceptedMdls = this.acceptedCategories.where(d);
      var rejectedMdls = this.rejectedCategories.where(d);
      if (acceptedMdls.length > 0) {
        this.acceptedCategories.remove(acceptedMdls);
      } else {
        if (!rejectedMdls.length) {
          this.rejectedCategories.add(d);
        }
      }
    }, this);

    if (applyFilter !== false) {
      this.applyFilter();
    }
  },

  isRejected: function isRejected(name) {
    var acceptCount = this.acceptedCategories.size();
    if (this.rejectedCategories.where({ name: name }).length > 0) {
      return true;
    } else if (acceptCount > 0 && this.acceptedCategories.where({ name: name }).length === 0) {
      return true;
    } else if (this.get('rejectAll')) {
      return true;
    } else {
      return false;
    }
  },

  rejectAll: function rejectAll() {
    this.set('rejectAll', true);
    this.cleanFilter();
  },

  cleanFilter: function cleanFilter(triggerChange) {
    this.acceptedCategories.reset();
    this.rejectedCategories.reset();
    if (triggerChange !== false) {
      this.applyFilter();
    }
  },

  applyFilter: function applyFilter() {
    this.trigger('change', this);
  },

  areAllRejected: function areAllRejected() {
    return this.get('rejectAll');
  },

  toJSON: function toJSON() {
    var filter = {};
    var rejectCount = this.rejectedCategories.size();
    var acceptCount = this.acceptedCategories.size();
    var acceptedCats = { accept: _.pluck(this.acceptedCategories.toJSON(), 'name') };
    var rejectedCats = { reject: _.pluck(this.rejectedCategories.toJSON(), 'name') };

    if (this.get('rejectAll')) {
      filter = { accept: [] };
    } else if (acceptCount > 0) {
      filter = acceptedCats;
    } else if (rejectCount > 0 && acceptCount === 0) {
      filter = rejectedCats;
    }

    var json = {};
    json[this.get('dataviewId')] = filter;

    return json;
  },

  getAcceptedCategoryNames: function getAcceptedCategoryNames() {
    return this.acceptedCategories.map(function (category) {
      return category.get('name');
    });
  },

  getRejectedCategoryNames: function getRejectedCategoryNames() {
    return this.rejectedCategories.map(function (category) {
      return category.get('name');
    });
  }
});

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Model = __webpack_require__(2);

/**
 *  This model is used for getting the total amount of values
 *  from the category.
 *
 */

module.exports = Model.extend({
  defaults: {
    url: '',
    totalCount: 0,
    categoriesCount: 0
  },

  url: function url() {
    var url = this.get('url');
    var queryOptions = [];
    if (this.get('apiKey')) {
      url += '?api_key=' + this.get('apiKey');
    } else if (this.get('authToken')) {
      var authToken = this.get('authToken');
      if (authToken instanceof Array) {
        _.each(authToken, function (token) {
          queryOptions.push('auth_token[]=' + token);
        });
      } else {
        queryOptions.push('auth_token=' + authToken);
      }
      url += '?' + queryOptions.join('&');
    }
    return url;
  },

  initialize: function initialize() {
    this.bind('change:url', function () {
      this.fetch();
    }, this);
  },

  setUrl: function setUrl(url) {
    this.set('url', url);
  },

  parse: function parse(d) {
    // Calculating the total amount of all categories with the sum of all
    // values from this model included the aggregated (Other)
    return {
      categoriesCount: d.categoriesCount,
      totalCount: _.reduce(_.pluck(d.categories, 'value'), function (memo, value) {
        return memo + value;
      }, 0)
    };
  }
});

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Model = __webpack_require__(2);

/**
 * Model for a category
 */
module.exports = Model.extend({

  defaults: {
    name: '',
    agg: false,
    value: 0
  }

});

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Model = __webpack_require__(2);
var BackboneAbortSync = __webpack_require__(19);
var CategoriesCollection = __webpack_require__(33);

/**
 * Category search model
 */
module.exports = Model.extend({
  defaults: {
    q: '',
    data: [],
    url: ''
  },

  url: function url() {
    var url = this.get('url') + '/search?q=' + encodeURIComponent(this.get('q'));
    if (this.get('apiKey')) {
      url += '&api_key=' + this.get('apiKey');
    } else if (this.get('authToken')) {
      var authToken = this.get('authToken');
      if (authToken instanceof Array) {
        _.each(authToken, function (token) {
          url += '&auth_token[]=' + token;
        });
      } else {
        url += '&auth_token=' + authToken;
      }
    }
    return url;
  },

  initialize: function initialize(attrs, opts) {
    this._data = new CategoriesCollection(null, {
      aggregationModel: opts.aggregationModel
    });
    this.sync = BackboneAbortSync.bind(this);
  },

  fetchIfSearchIsApplied: function fetchIfSearchIsApplied() {
    if (this.isSearchApplied()) {
      this.fetch();
    }
  },

  setData: function setData(data) {
    var categories = this._parseData(data);
    this._data.reset(categories);
    this.set('data', categories);
  },

  getData: function getData() {
    return this._data;
  },

  getSize: function getSize() {
    return this._data.size();
  },

  getCount: function getCount() {
    return this.getSize();
  },

  isValid: function isValid() {
    var str = this.get('q');
    return !!(str || '');
  },

  resetData: function resetData() {
    this.setData([]);
    this.set('q', '');
  },

  getSearchQuery: function getSearchQuery() {
    return this.get('q');
  },

  isSearchApplied: function isSearchApplied() {
    return this.isValid() && this.getSize() > 0;
  },

  _parseData: function _parseData(categories) {
    var newData = [];
    _.each(categories, function (d) {
      if (!d.agg) {
        newData.push({
          selected: false,
          name: (d.category || d.name).toString(),
          agg: d.agg,
          value: d.value
        });
      }
    }, this);

    return newData;
  },

  parse: function parse(r) {
    var categories = this._parseData(r.categories);
    this._data.reset(categories);
    return {
      data: categories
    };
  },

  fetch: function fetch(opts) {
    opts = opts || {};

    this.trigger('loading', this);

    if (opts.success) {
      var successCallback = opts && opts.success;
    }

    return Model.prototype.fetch.call(this, _.extend(opts, {
      success: function () {
        successCallback && successCallback(arguments);
        this.trigger('loaded', this);
      }.bind(this),
      error: function (mdl, err) {
        if (!err || err && err.statusText !== 'abort') {
          this.trigger('error', mdl, err);
        }
      }.bind(this)
    }));
  }
});

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var DataviewModelBase = __webpack_require__(20);
var SearchModel = __webpack_require__(74);
var CategoryModelRange = __webpack_require__(72);
var CategoriesCollection = __webpack_require__(33);

/**
 * Category dataview model
 *
 * - It has several internal models/collections
 *   - search model: it manages category search results.
 *   - filter model: it knows which items are accepted or rejected.
 */
module.exports = DataviewModelBase.extend({

  defaults: _.extend({
    type: 'category',
    filterEnabled: false,
    categories: 6,
    allCategoryNames: [] // all (new + previously accepted), updated on data fetch (see parse)
  }, DataviewModelBase.prototype.defaults),

  _getDataviewSpecificURLParams: function _getDataviewSpecificURLParams() {
    var params = ['own_filter=' + (this.get('filterEnabled') ? 1 : 0), 'categories=' + this.get('categories')];
    return params;
  },

  initialize: function initialize(attrs, opts) {
    DataviewModelBase.prototype.initialize.call(this, attrs, opts);

    // Internal model for calculating total amount of values in the category
    this._rangeModel = new CategoryModelRange({
      apiKey: this._engine.getApiKey(),
      authToken: this._engine.getAuthToken()
    });

    this._data = new CategoriesCollection(null, {
      aggregationModel: this
    });

    this._searchModel = new SearchModel({
      apiKey: this._engine.getApiKey(),
      authToken: this._engine.getAuthToken()
    }, {
      aggregationModel: this
    });

    this.on('change:column change:aggregation change:aggregation_column', this._reloadAndForceFetch, this);
    this.on('change:categories', this.refresh, this);

    this.bind('change:url', function () {
      this._searchModel.set({
        url: this.get('url')
      });
    }, this);

    this.once('change:url', function () {
      this._rangeModel.setUrl(this.get('url'));
    }, this);

    this._rangeModel.bind('change:totalCount change:categoriesCount', function () {
      this.set({
        totalCount: this._rangeModel.get('totalCount'),
        categoriesCount: this._rangeModel.get('categoriesCount')
      });
    }, this);

    this._bindSearchModelEvents();
    if (attrs && attrs.acceptedCategories) {
      this.filter.accept(attrs.acceptedCategories);
    }
  },

  _onMapBoundsChanged: function _onMapBoundsChanged() {
    DataviewModelBase.prototype._onMapBoundsChanged.apply(this, arguments);
    this._searchModel.fetchIfSearchIsApplied();
  },

  _onCircleChanged: function _onCircleChanged() {
    DataviewModelBase.prototype._onCircleChanged.apply(this, arguments);
    this._searchModel.fetchIfSearchIsApplied();
  },

  _onPolygonChanged: function _onPolygonChanged() {
    DataviewModelBase.prototype._onPolygonChanged.apply(this, arguments);
    this._searchModel.fetchIfSearchIsApplied();
  },

  _bindSearchModelEvents: function _bindSearchModelEvents() {
    this.listenTo(this._searchModel, 'loading', function () {
      this.trigger('loading', this);
    }, this);

    this.listenTo(this._searchModel, 'loaded', function () {
      this.trigger('loaded', this);
    }, this);

    this.listenTo(this._searchModel, 'error', function (model, response) {
      if (!response || response && response.statusText !== 'abort') {
        this.trigger('error', model, response);
      }
    }, this);

    this.listenTo(this._searchModel, 'change:data', this._onSearchDataChange, this);
  },

  _onSearchDataChange: function _onSearchDataChange() {
    this.getSearchResult().each(function (m) {
      var selected = this.filter.isAccepted(m.get('name'));
      m.set('selected', selected);
    }, this);
    this.trigger('change:searchData', this);
  },

  _shouldFetchOnBoundingBoxChange: function _shouldFetchOnBoundingBoxChange() {
    return DataviewModelBase.prototype._shouldFetchOnBoundingBoxChange.call(this) && !this.isSearchApplied();
  },

  _shouldFetchOnCircleChange: function _shouldFetchOnCircleChange() {
    return DataviewModelBase.prototype._shouldFetchOnCircleChange.call(this) && !this.isSearchApplied();
  },

  _shouldFetchOnPolygonChange: function _shouldFetchOnPolygonChange() {
    return DataviewModelBase.prototype._shouldFetchOnPolygonChange.call(this) && !this.isSearchApplied();
  },

  enableFilter: function enableFilter() {
    this.set('filterEnabled', true);
  },

  disableFilter: function disableFilter() {
    this.set('filterEnabled', false);
  },

  // Search model helper methods //

  getSearchQuery: function getSearchQuery() {
    return this._searchModel.getSearchQuery();
  },

  setSearchQuery: function setSearchQuery(q) {
    this._searchModel.set('q', q);
  },

  isSearchValid: function isSearchValid() {
    return this._searchModel.isValid();
  },

  getSearchResult: function getSearchResult() {
    return this._searchModel.getData();
  },

  getSearchCount: function getSearchCount() {
    return this._searchModel.getCount();
  },

  applySearch: function applySearch() {
    this._searchModel.fetch();
  },

  isSearchApplied: function isSearchApplied() {
    return this._searchModel.isSearchApplied();
  },

  cleanSearch: function cleanSearch() {
    this._searchModel.resetData();
  },

  setupSearch: function setupSearch() {
    if (!this.isSearchApplied()) {
      this._searchModel.setData(this._data.toJSON());
    }
  },

  getData: function getData() {
    return this._data;
  },

  getSize: function getSize() {
    return this._data.size();
  },

  getCount: function getCount() {
    return this.get('categoriesCount');
  },

  isOtherAvailable: function isOtherAvailable() {
    return this._data.isOtherAvailable();
  },

  numberOfAcceptedCategories: function numberOfAcceptedCategories() {
    var acceptedCategories = this.filter.acceptedCategories;
    var numberOfRejectedCategories = this.numberOfRejectedCategories();
    var data = this.getData();
    var totalCategories = data.size();
    var numberOfAcceptedCategories = data.reduce(function (memo, cat) {
      var isCategoryInData = acceptedCategories.where({ name: cat.get('name') }).length > 0;
      return memo + (isCategoryInData ? 1 : 0);
    }, 0);
    if (!numberOfRejectedCategories) {
      return numberOfAcceptedCategories;
    } else {
      return totalCategories - numberOfRejectedCategories;
    }
  },

  numberOfRejectedCategories: function numberOfRejectedCategories() {
    var rejectedCategories = this.filter.rejectedCategories;
    var data = this.getData();
    return data.reduce(function (memo, cat) {
      var isCategoryInData = rejectedCategories.where({ name: cat.get('name') }).length > 0;
      return memo + (isCategoryInData ? 1 : 0);
    }, 0);
  },

  refresh: function refresh() {
    if (this.isSearchApplied()) {
      this._searchModel.fetch();
    } else {
      this.fetch();
    }
  },

  parse: function parse(d) {
    var newData = [];
    var _tmpArray = {};
    var allNewCategories = d.categories;
    var allNewCategoryNames = [];
    var acceptedCategoryNames = [];

    _.each(allNewCategories, function (datum) {
      var category = datum.category;

      allNewCategoryNames.push(category);
      var isRejected = this.filter.isRejected(category);
      _tmpArray[category] = true;

      newData.push({
        selected: !isRejected,
        name: category,
        agg: datum.agg,
        value: datum.value
      });
    }, this);

    // Only accepted categories should appear when filterEnabled is true
    if (this.get('filterEnabled')) {
      // Add accepted items that are not present in the categories data
      this.filter.acceptedCategories.each(function (mdl) {
        var category = mdl.get('name');
        acceptedCategoryNames.push(category);
        if (!_tmpArray[category]) {
          newData.push({
            selected: true,
            name: category,
            agg: false,
            value: 0
          });
        }
      }, this);
    }

    this._data.reset(newData);

    return {
      allCategoryNames: _.chain(allNewCategoryNames).union(acceptedCategoryNames).unique().value(),
      data: newData,
      nulls: d.nulls,
      min: d.min,
      max: d.max,
      count: d.count
    };
  },

  // Backbone toJson function override
  // This function is used to serialize the server request
  toJSON: function toJSON() {
    return {
      type: 'aggregation',
      source: { id: this.getSourceId() },
      options: {
        column: this.get('column'),
        aggregation: this.get('aggregation'),

        // TODO server-side is using camelCased attr name, update once fixed
        aggregationColumn: this.get('aggregation_column')
      }
    };
  }
},

// Class props
{
  ATTRS_NAMES: DataviewModelBase.ATTRS_NAMES.concat(['column', 'aggregation', 'aggregation_column', 'acceptedCategories', 'categories'])
});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(10);
var constants = __webpack_require__(5);
var CategoryDataviewModel = __webpack_require__(75);
var CategoryFilter = __webpack_require__(71);
var parseCategoryData = __webpack_require__(69);

/**
 *
 * A category dataview is used to aggregate data performing a operation.
 *
 * This is similar to a group by SQL operation, for example:
 *
 * ```
 * SELECT country, AVG(population) GROUP BY country
 * ```
 * The following code is the CARTO.js equivalent:
 *
 * ```javascript
 * var categoryDataview = new carto.dataview.Category(citiesSource, 'country', {
 *     operation: carto.operation.AVG, // Compute the average
 *     operationColumn: 'population' // The name of the column where the operation will be applied.
 *  });
 * ```
 *
 * Like every other dataview, this is an async object and you must wait for the data to be available.
 *
 * The data format for the category-dataview is described in {@link carto.dataview.CategoryData}
 *
 * @param {carto.source.Base} source - The source where the dataview will fetch the data
 * @param {string} column - The name of the column used to create categories
 * @param {object} [options]
 * @param {number} [options.limit=6] - The maximum number of categories in the response
 * @param {carto.operation} [options.operation] - The operation to apply to the data
 * @param {string} [options.operationColumn] - The column where the operation will be applied
 *
 * @fires dataChanged
 * @fires columnChanged
 * @fires statusChanged
 * @fires error
 *
 * @fires limitChanged
 * @fires operationChanged
 * @fires operationColumnChanged
 *
 * @constructor
 * @extends carto.dataview.Base
 * @memberof carto.dataview
 * @api
 * @example
 * // From a cities dataset with name, country and population show the average city population per country:
 * var column = 'country'; // Aggregate the data by country.
 * var categoryDataview = new carto.dataview.Category(citiesSource, column, {
 *     operation: carto.operation.AVG, // Compute the average
 *     operationColumn: 'population' // The name of the column where the operation will be applied.
 *  });
 * @example
 * // Listen for data updates
 * categoryDataview.on('dataChanged', newData => {
 *  console.log(newData); // CategoryData object
 * });
 * @example
 * // You can listen to multiple events emmited by the category-dataview.
 * categoryDataview.on('statusChanged', (newData, error) => { });
 * categoryDataview.on('error', cartoError => { });
 *
 * // Listen to specific category-dataview events.
 * categoryDataview.on('columnChanged', newData => {
 *  console.log(newData); // 'population'
 * });
 * categoryDataview.on('limitChanged', newData => {
 *  console.log(newData); // 11
 * });
 * categoryDataview.on('operationChanged', newData => { });
 * categoryDataview.on('operationColumnChanged', newData => { });
 */
function Category(source, column, options) {
  this.DEFAULTS.operationColumn = column;

  this._initialize(source, column, options);
  this._limit = this._options.limit;
  this._operation = this._options.operation;
  this._operationColumn = this._options.operationColumn;
}

Category.prototype = Object.create(Base.prototype);

/**
 * Set the categories limit.
 *
 * @param  {number} limit
 * @fires limitChanged
 * @return {carto.dataview.Category} this
 * @api
 */
Category.prototype.setLimit = function (limit) {
  this._checkLimit(limit);
  this._changeProperty('limit', limit, 'categories');
  return this;
};

/**
 * Return the current categories limit.
 *
 * @return {number} Current dataview limit
 * @api
 */
Category.prototype.getLimit = function () {
  return this._limit;
};

/**
 * Set the dataview operation.
 *
 * @param  {carto.operation} operation
 * @fires operationChanged
 * @return {carto.dataview.Category} this
 * @api
 */
Category.prototype.setOperation = function (operation) {
  this._checkOperation(operation);
  this._changeProperty('operation', operation, 'aggregation');
  return this;
};

/**
 * Return the current dataview operation.
 *
 * @return {carto.operation} Current dataview operation
 * @api
 */
Category.prototype.getOperation = function () {
  return this._operation;
};

/**
 * Set the dataview operationColumn.
 *
 * @param  {string} operationColumn
 * @fires operationColumnChanged
 * @return {carto.dataview.Category} this
 * @api
 */
Category.prototype.setOperationColumn = function (operationColumn) {
  this._checkOperationColumn(operationColumn);
  this._changeProperty('operationColumn', operationColumn, 'aggregation_column');
  return this;
};

/**
 * Return the current dataview operationColumn.
 *
 * @return {string} Current dataview operationColumn
 * @api
 */
Category.prototype.getOperationColumn = function () {
  return this._operationColumn;
};

/**
 * Return the resulting data.
 *
 * @return {carto.dataview.CategoryData}
 * @api
 */
Category.prototype.getData = function () {
  if (this._internalModel) {
    return parseCategoryData(this._internalModel.get('data'), this._internalModel.get('count'), this._internalModel.get('max'), this._internalModel.get('min'), this._internalModel.get('nulls'), this._operation);
  }
  return null;
};

Category.prototype.DEFAULTS = {
  limit: 6,
  operation: constants.operation.COUNT
};

Category.prototype._checkOptions = function (options) {
  if (_.isUndefined(options)) {
    throw this._getValidationError('categoryOptionsRequired');
  }
  this._checkLimit(options.limit);
  this._checkOperation(options.operation);
  this._checkOperationColumn(options.operationColumn);
};

Category.prototype._checkLimit = function (limit) {
  if (_.isUndefined(limit)) {
    throw this._getValidationError('categoryLimitRequired');
  }
  if (!_.isNumber(limit)) {
    throw this._getValidationError('categoryLimitNumber');
  }
  if (limit <= 0) {
    throw this._getValidationError('categoryLimitPositive');
  }
};

Category.prototype._checkOperation = function (operation) {
  if (_.isUndefined(operation) || !constants.isValidOperation(operation)) {
    throw this._getValidationError('categoryInvalidOperation');
  }
};

Category.prototype._checkOperationColumn = function (operationColumn) {
  if (_.isUndefined(operationColumn)) {
    throw this._getValidationError('categoryOperationRequired');
  }
  if (!_.isString(operationColumn)) {
    throw this._getValidationError('categoryOperationString');
  }
  if (_.isEmpty(operationColumn)) {
    throw this._getValidationError('categoryOperationEmpty');
  }
};

Category.prototype._createInternalModel = function (engine) {
  this._internalModel = new CategoryDataviewModel({
    source: this._source.$getInternalModel(),
    column: this._column,
    aggregation: this._operation,
    aggregation_column: this._operationColumn,
    categories: this._limit,
    sync_on_bbox_change: !!this._boundingBoxFilter,
    sync_on_circle_change: !!this._circleFilter,
    sync_on_polygon_change: !!this._polygonFilter,
    enabled: this._enabled
  }, {
    engine: engine,
    filter: new CategoryFilter(),
    bboxFilter: this._boundingBoxFilter && this._boundingBoxFilter.$getInternalModel(),
    circleFilter: this._circleFilter && this._circleFilter.$getInternalModel(),
    polygonFilter: this._polygonFilter && this._polygonFilter.$getInternalModel()
  });
};

module.exports = Category;

/**
 * Fired when limit has changed. Handler gets a parameter with the new limit.
 *
 * @event limitChanged
 * @type {number}
 * @api
 */

/**
 * Fired when operation has changed. Handler gets a parameter with the new limit.
 *
 * @event operationChanged
 * @type {string}
 * @api
 */

/**
 * Fired when operationColumn has changed. Handler gets a parameter with the new operationColumn.
 *
 * @event operationColumnChanged
 * @type {string}
 * @api
 */

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Category = __webpack_require__(76);
var Formula = __webpack_require__(68);
var Histogram = __webpack_require__(65);
var TimeSeries = __webpack_require__(61);
var status = __webpack_require__(5).status;
var timeAggregation = __webpack_require__(5).timeAggregation;

/**
 * @namespace carto.dataview
 * @api
 */
module.exports = {
  Category: Category,
  Formula: Formula,
  Histogram: Histogram,
  TimeSeries: TimeSeries,
  status: status,
  timeAggregation: timeAggregation
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(38);
var CartoValidationError = __webpack_require__(3);
var CartoError = __webpack_require__(4);

// Event constants
var CONTENT_CHANGED = 'contentChanged';

/**
 * A CartoCSS/TurboCarto style that can be applied to a {@link carto.layer.Layer}.
 * @param {string} content - A CartoCSS string
 * @example
 * var style = new carto.style.CartoCSS(`
 *   #layer {
 *     marker-fill: #FABADA;
 *     marker-width: 10;
 *   }
 * `);
 * @constructor
 * @extends carto.style.Base
 * @memberof carto.style
 * @api
 */
function CartoCSS(content) {
  _checkContent(content);
  this._content = content;
}

CartoCSS.prototype = Object.create(Base.prototype);

/**
 * Get the current CartoCSS/TurboCarto style as a string.
 *
 * @return {string} - The TurboCarto style for this CartoCSS object
 * @api
 */
CartoCSS.prototype.getContent = function () {
  return this._content;
};

/**
 * Set the CartoCSS/Turbocarto as a string.
 *
 * @param {string} newContent - A string containing the new cartocss/turbocarto style
 * @return {Promise<string>} A promise that will be resolved once the cartocss/turbocarto is updated
 * @example
 * // Get the cartoCSS from an exiting layer
 * let cartoCSS = layer.getStyle();
 * // Update the cartoCSS content, remember this method is asynchronous!
 * cartoCSS.setContent(`
 *  #layer {
 *    marker-fill: blue;
 *  }`)
 *  .then(() => {
 *    console.log('cartoCSS was updated');
 *  })
 *  .catch(() => {
 *    console.error('Error updating the cartoCSS for the layer');
 *  });
 * @api
 */
CartoCSS.prototype.setContent = function (newContent) {
  _checkContent(newContent);
  this._content = newContent;
  // Notify layers that the style has been changed so they can update their internalModels.
  this.trigger('$changed', this);
  if (!this._engine) {
    return _onContentChanged.call(this, newContent);
  }

  return this._engine.reload().then(function () {
    return _onContentChanged.call(this, newContent);
  }.bind(this)).catch(function (windshaftError) {
    return Promise.reject(new CartoError(windshaftError));
  });
};

// Once the reload cycle is completed trigger a contentChanged event.
function _onContentChanged(newContent) {
  this.trigger(CONTENT_CHANGED, this._content);
  return Promise.resolve(this._content);
}

function _checkContent(content) {
  if (!content) {
    throw new CartoValidationError('style', 'requiredCSS');
  }

  if (!_.isString(content)) {
    throw new CartoValidationError('style', 'requiredCSSString');
  }
}

module.exports = CartoCSS;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var CartoCSS = __webpack_require__(78);

/**
 * @namespace carto.style
 * @api
 */
module.exports = {
  CartoCSS: CartoCSS
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(12);
var AnalysisModel = __webpack_require__(9);
var CamshaftReference = __webpack_require__(28);
var CartoValidationError = __webpack_require__(3);
var CartoError = __webpack_require__(4);

/**
 * A SQL Query that can be used as the data source for layers and dataviews.
 *
 * @param {string} query A SQL query containing a SELECT statement
 * @fires error
 * @example
 * new carto.source.SQL('SELECT * FROM european_cities');
 * @constructor
 * @extends carto.source.Base
 * @memberof carto.source
 * @fires queryChanged
 * @api
 */
function SQL(query) {
  var _this = this;

  _checkQuery(query);
  this._query = query;

  Base.apply(this, arguments);

  this._appliedFilters.on('change:filters', function () {
    return _this._updateInternalModelQuery(_this._getQueryToApply());
  });
}

SQL.prototype = Object.create(Base.prototype);

/**
 * Update the query. This method is asyncronous and returns a promise which is resolved when the style
 * is changed succesfully. It also fires a 'queryChanged' event.
 *
 * @param {string} query - The sql query that will be the source of the data
 * @fires queryChanged
 * @returns {Promise} - A promise that will be fulfilled when the reload cycle is completed
 * @api
 */
SQL.prototype.setQuery = function (query) {
  _checkQuery(query);
  this._query = query;

  var sqlString = this._getQueryToApply();

  if (!this._internalModel) {
    this._triggerQueryChanged(this, sqlString);
    return Promise.resolve();
  }

  return this._updateInternalModelQuery(sqlString);
};

/**
 * Get the query being used in this SQL source.
 *
 * @return {string} The query being used in this SQL object
 * @api
 */
SQL.prototype.getQuery = function () {
  return this._query;
};

/**
 * Creates a new internal model with the given engine and attributes initialized in the constructor.
 *
 * @param {Engine} engine - The engine object to be assigned to the internalModel
 */
SQL.prototype._createInternalModel = function (engine) {
  var internalModel = new AnalysisModel({
    id: this.getId(),
    type: 'source',
    query: this._getQueryToApply()
  }, {
    camshaftReference: CamshaftReference,
    engine: engine
  });

  internalModel.on('change:query', this._triggerQueryChanged, this);

  return internalModel;
};

SQL.prototype._updateInternalModelQuery = function (query) {
  var _this2 = this;

  if (!this._internalModel) return;

  this._internalModel.set('query', query, { silent: true });

  return this._internalModel._engine.reload().then(function () {
    return _this2._triggerQueryChanged(_this2, query);
  }).catch(function (windshaftError) {
    return Promise.reject(new CartoError(windshaftError));
  });
};

SQL.prototype._getQueryToApply = function () {
  var whereClause = this._appliedFilters.$getSQL();

  if (!this._hasFiltersApplied || _.isEmpty(whereClause)) {
    return this._query;
  }

  return 'SELECT * FROM (' + this._query + ') as originalQuery WHERE ' + whereClause;
};

SQL.prototype.addFilter = function (filter) {
  Base.prototype.addFilter.apply(this, arguments);
  this._updateInternalModelQuery(this._getQueryToApply());
};

SQL.prototype.removeFilter = function (filters) {
  Base.prototype.removeFilter.apply(this, arguments);
  this._updateInternalModelQuery(this._getQueryToApply());
};

SQL.prototype._triggerQueryChanged = function (model, value) {
  this.trigger('queryChanged', value);
};

function _checkQuery(query) {
  if (!query) {
    throw new CartoValidationError('source', 'requiredQuery');
  }

  if (!_.isString(query)) {
    throw new CartoValidationError('source', 'requiredString');
  }
}

module.exports = SQL;

/**
 * Fired when the query has changed. Handler gets a parameter with the new query.
 *
 * @event queryChanged
 * @type {string}
 * @api
 */

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(12);
var AnalysisModel = __webpack_require__(9);
var CamshaftReference = __webpack_require__(28);
var CartoValidationError = __webpack_require__(3);
var CartoError = __webpack_require__(4);

/**
 * A Dataset that can be used as the data source for layers and dataviews.
 *
 * @param {string} tableName The name of an existing table
 * @example
 * new carto.source.Dataset('european_cities');
 * @constructor
 * @fires error
 * @extends carto.source.Base
 * @memberof carto.source
 * @api
 */
function Dataset(tableName) {
  var _this = this;

  _checkTableName(tableName);
  this._tableName = tableName;

  Base.apply(this, arguments);

  this._appliedFilters.on('change:filters', function () {
    return _this._updateInternalModelQuery(_this._getQueryToApply());
  });
}

Dataset.prototype = Object.create(Base.prototype);

/**
 * Update the table name. This method is asyncronous and returns a promise which is resolved when the style
 * is changed succesfully. It also fires a 'tableNameChanged' event.
 *
 * @param {string} tableName The name of an existing table
 * @fires TableNameChanged
 * @returns {Promise} - A promise that will be fulfilled when the reload cycle is completed
 * @api
 */
Dataset.prototype.setTableName = function (tableName) {
  _checkTableName(tableName);

  this._tableName = tableName;

  if (!this._internalModel) {
    this._triggerTableNameChanged(this, tableName);
    return Promise.resolve();
  }

  return this._updateInternalModelQuery(this._getQueryToApply());
};

/**
 * Return the table name being used in  this Dataset object.
 *
 * @return {string} The table name being used in  this Dataset object
 * @api
 */
Dataset.prototype.getTableName = function () {
  return this._tableName;
};

/**
 * Creates a new internal model with the given engine and attributes initialized in the constructor.
 *
 * @param {Engine} engine - The engine object to be assigned to the internalModel
 */
Dataset.prototype._createInternalModel = function (engine) {
  var internalModel = new AnalysisModel({
    id: this.getId(),
    type: 'source',
    query: this._getQueryToApply()
  }, {
    camshaftReference: CamshaftReference,
    engine: engine
  });

  return internalModel;
};

Dataset.prototype._updateInternalModelQuery = function (query) {
  var _this2 = this;

  if (!this._internalModel) return;

  this._internalModel.set('query', query, { silent: true });

  return this._internalModel._engine.reload().then(function () {
    return _this2._triggerTableNameChanged(_this2, _this2._tableName);
  }).catch(function (windshaftError) {
    return Promise.reject(new CartoError(windshaftError));
  });
};

Dataset.prototype._getQueryToApply = function () {
  var whereClause = this._appliedFilters.$getSQL();
  var datasetQuery = 'SELECT * from ' + this._tableName;

  if (_.isEmpty(whereClause)) {
    return datasetQuery;
  }

  return 'SELECT * FROM (' + datasetQuery + ') as datasetQuery WHERE ' + whereClause;
};

Dataset.prototype.addFilter = function (filter) {
  Base.prototype.addFilter.apply(this, arguments);
  this._updateInternalModelQuery(this._getQueryToApply());
};

Dataset.prototype.removeFilter = function (filters) {
  Base.prototype.removeFilter.apply(this, arguments);
  this._updateInternalModelQuery(this._getQueryToApply());
};

Dataset.prototype._triggerTableNameChanged = function (model, value) {
  this.trigger('tableNameChanged', value);
};

function _checkTableName(tableName) {
  if (_.isUndefined(tableName)) {
    throw new CartoValidationError('source', 'noDatasetName');
  }
  if (!_.isString(tableName)) {
    throw new CartoValidationError('source', 'requiredDatasetString');
  }
  if (_.isEmpty(tableName)) {
    throw new CartoValidationError('source', 'requiredDataset');
  }
}

module.exports = Dataset;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Dataset = __webpack_require__(81);
var SQL = __webpack_require__(80);

/**
 *  @namespace carto.source
 *  @api
 */
module.exports = {
  Dataset: Dataset,
  SQL: SQL
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
# metrics profiler

## timing

```
 var timer = Profiler.metric('resource:load')
 time.start();
 ...
 time.end();
```

## counters

```
 var counter = Profiler.metric('requests')
 counter.inc();   // 1
 counter.inc(10); // 11
 counter.dec()    // 10
 counter.dec(10)  // 0
```

## Calls per second
```
  var fps = Profiler.metric('fps')
  function render() {
    fps.mark();
  }
```
*/
var MAX_HISTORY = 1024;
function Profiler() {}
Profiler.metrics = {};
Profiler._backend = null;

Profiler.get = function (name) {
  return Profiler.metrics[name] || {
    max: 0,
    min: Number.MAX_VALUE,
    avg: 0,
    total: 0,
    count: 0,
    last: 0,
    history: typeof Float32Array !== 'undefined' ? new Float32Array(MAX_HISTORY) : []
  };
};

Profiler.backend = function (_) {
  Profiler._backend = _;
};

Profiler.new_value = function (name, value, type, defer) {
  type = type || 'i';
  var t = Profiler.metrics[name] = Profiler.get(name);

  t.max = Math.max(t.max, value);
  t.min = Math.min(t.min, value);
  t.total += value;
  ++t.count;
  t.avg = t.total / t.count;
  t.history[t.count % MAX_HISTORY] = value;

  if (!defer) {
    Profiler._backend && Profiler._backend([type, name, value]);
  } else {
    var n = performance.now();
    // don't allow to send stats quick
    if (n - t.last > 1000) {
      Profiler._backend && Profiler._backend([type, name, t.avg]);
      t.last = n;
    }
  }
};

Profiler.print_stats = function () {
  for (var k in Profiler.metrics) {
    var t = Profiler.metrics[k];
    console.log(' === ' + k + ' === ');
    console.log(' max: ' + t.max);
    console.log(' min: ' + t.min);
    console.log(' avg: ' + t.avg);
    console.log(' count: ' + t.count);
    console.log(' total: ' + t.total);
  }
};

function Metric(name) {
  this.t0 = null;
  this.name = name;
  this.count = 0;
}

Metric.prototype = {

  //
  // start a time measurement
  //
  start: function start() {
    this.t0 = performance.now();
    return this;
  },

  // elapsed time since start was called
  _elapsed: function _elapsed() {
    return performance.now() - this.t0;
  },

  //
  // finish a time measurement and register it
  // ``start`` should be called first, if not this
  // function does not take effect
  //
  end: function end(defer) {
    if (this.t0 !== null) {
      Profiler.new_value(this.name, this._elapsed(), 't', defer);
      this.t0 = null;
    }
  },

  //
  // increments the value
  // qty: how many, default = 1
  //
  inc: function inc(qty) {
    qty = qty === undefined ? 1 : qty;
    Profiler.new_value(this.name, qty, 'i');
  },

  //
  // decrements the value
  // qty: how many, default = 1
  //
  dec: function dec(qty) {
    qty = qty === undefined ? 1 : qty;
    Profiler.new_value(this.name, qty, 'd');
  },

  //
  // measures how many times per second this function is called
  //
  mark: function mark() {
    ++this.count;
    if (this.t0 === null) {
      this.start();
      return;
    }
    var elapsed = this._elapsed();
    if (elapsed > 1) {
      Profiler.new_value(this.name, this.count);
      this.count = 0;
      this.start();
    }
  }
};

Profiler.metric = function (name) {
  return new Metric(name);
};

module.exports = Profiler;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global google */
// helper to get pixel position from latlon

function Projector(map) {
  this.setMap(map);
}
Projector.prototype = new google.maps.OverlayView();
Projector.prototype.draw = function () {};
Projector.prototype.latLngToPixel = function (latlng) {
  var projection = this.getProjection();
  if (projection) {
    return projection.fromLatLngToContainerPixel(latlng);
  }
  console.warn('Projector has no projection');
  return new google.maps.Point(0, 0);
};

Projector.prototype.pixelToLatLng = function (point) {
  var projection = this.getProjection();
  if (projection) {
    return projection.fromContainerPixelToLatLng(point);
  }
  console.warn('Projector has no projection');
  return new google.maps.LatLng(0, 0);
};

module.exports = Projector;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

/**
 * base layer for all google maps layers
 */
var GMapsLayerView = function GMapsLayerView(layerModel, opts) {
  opts = opts || {};
  this.model = layerModel;
  this.model.bind('change', this._onModelUpdated, this);
  this.mapModel = opts.mapModel;
  this.gmapsMap = opts.nativeMap;
  this.showLimitErrors = opts.showLimitErrors;
};

_.extend(GMapsLayerView.prototype, Backbone.Events);
_.extend(GMapsLayerView.prototype, {
  addToMap: function addToMap() {
    throw new Error('Subclasses of GMapsLayerView must implement addToMap');
  },

  remove: function remove() {
    throw new Error('Subclasses of GMapsLayerView must implement remove');
  },

  _onModelUpdated: function _onModelUpdated() {}
});

module.exports = GMapsLayerView;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global Image, google */
var _ = __webpack_require__(0);
var GMapsLayerView = __webpack_require__(85);
var zera = __webpack_require__(34);

var C = __webpack_require__(24);
var Projector = __webpack_require__(84);
var CartoDBLayerGroupViewBase = __webpack_require__(35);
var Profiler = __webpack_require__(83);

var OPACITY_FILTER = 'progid:DXImageTransform.Microsoft.gradient(startColorstr=#00FFFFFF,endColorstr=#00FFFFFF)';
var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

function setImageOpacityIE8(img, opacity) {
  var v = Math.round(opacity * 100);
  if (v >= 99) {
    img.style.filter = OPACITY_FILTER;
  } else {
    img.style.filter = 'alpha(opacity=' + opacity + ');';
  }
}

function generateId() {
  return ((1 + Math.random()) * 0x100000000 | 0).toString(16).substring(1);
}

var GMapsCartoDBLayerGroupView = function GMapsCartoDBLayerGroupView(layerModel, options) {
  var self = this;
  var hovers = [];
  var gmapsMap = options.nativeMap;

  _.bindAll(this, 'featureOut', 'featureOver', 'featureClick');

  var opts = _.clone(layerModel.attributes);

  opts.map = gmapsMap;

  var _featureOver = opts.featureOver;
  var _featureOut = opts.featureOut;
  var _featureClick = opts.featureClick;

  var previousEvent;
  var eventTimeout = -1;

  opts.featureOver = function (e, latlon, pxPos, data, layer) {
    if (!hovers[layer]) {
      self.trigger('layerenter', e, latlon, pxPos, data, layer);
    }
    hovers[layer] = 1;
    _featureOver && _featureOver.apply(this, arguments);
    self.featureOver && self.featureOver.apply(this, arguments);

    // if the event is the same than before just cancel the event
    // firing because there is a layer on top of it
    if (e.timeStamp === previousEvent) {
      clearTimeout(eventTimeout);
    }
    eventTimeout = setTimeout(function () {
      self.trigger('mouseover', e, latlon, pxPos, data, layer);
      self.trigger('layermouseover', e, latlon, pxPos, data, layer);
    }, 0);
    previousEvent = e.timeStamp;
  };

  opts.featureOut = function (m, layer) {
    if (hovers[layer]) {
      self.trigger('layermouseout', layer);
    }
    hovers[layer] = 0;
    if (!_.any(hovers)) {
      self.trigger('mouseout');
    }
    _featureOut && _featureOut.apply(this, arguments);
    self.featureOut && self.featureOut.apply(this, arguments);
  };

  opts.featureClick = _.debounce(function () {
    _featureClick && _featureClick.apply(this, arguments);
    self.featureClick && self.featureClick.apply(opts, arguments);
  }, 10);

  this.tiles = 0;

  this.options = {
    tiles: options.tiles,
    scheme: options.scheme || 'xyz',
    blankImage: options.blankImage || 'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs='
  };

  // internal id
  this._id = generateId();

  // non-configurable options
  this.interactive = true;
  this.tileSize = new google.maps.Size(256, 256);

  // DOM element cache
  this.cache = {};

  _.extend(this.options, opts);
  GMapsLayerView.apply(this, arguments);
  this.projector = new Projector(opts.map);
  CartoDBLayerGroupViewBase.apply(this, arguments);
};

GMapsCartoDBLayerGroupView.prototype.interactionClass = zera.Interactive;
_.extend(GMapsCartoDBLayerGroupView.prototype, CartoDBLayerGroupViewBase.prototype, GMapsLayerView.prototype, {
  addToMap: function addToMap() {
    this.gmapsMap.overlayMapTypes.setAt(0, this);
  },

  remove: function remove() {
    var overlayIndex = this._getOverlayIndex();

    if (overlayIndex >= 0) {
      this.gmapsMap.overlayMapTypes.removeAt(overlayIndex);
    }

    this._clearInteraction();
    this.finishLoading && this.finishLoading();
  },

  reload: function reload() {
    this.model.invalidate();
  },

  featureOver: function featureOver(e, latlon, pixelPos, data, layer) {
    var layerModel = this.model.getLayerInLayerGroupAt(layer);
    if (layerModel) {
      this.trigger('featureOver', {
        layer: layerModel,
        layerIndex: layer,
        latlng: [latlon.lat(), latlon.lng()],
        position: { x: pixelPos.x, y: pixelPos.y },
        feature: data
      });
    }
  },

  featureOut: function featureOut(e, layer) {
    var layerModel = this.model.getLayerInLayerGroupAt(layer);
    if (layerModel) {
      this.trigger('featureOut', {
        layer: layerModel,
        layerIndex: layer
      });
    }
  },

  featureClick: function featureClick(e, latlon, pixelPos, data, layer) {
    var layerModel = this.model.getLayerInLayerGroupAt(layer);
    if (layerModel) {
      this.trigger('featureClick', {
        layer: layerModel,
        layerIndex: layer,
        latlng: [latlon.lat(), latlon.lng()],
        position: { x: pixelPos.x, y: pixelPos.y },
        feature: data
      });
    }
  },

  error: function error(e) {
    if (this.model) {
      this.model.trigger('error', e ? e.errors : 'unknown error');
      this.model.trigger('tileError', e ? e.errors : 'unknown error');
    }
  },

  ok: function ok(e) {
    this.model.trigger('tileOk');
  },

  tilesOk: function tilesOk(e) {
    this.model.trigger('tileOk');
  },

  loading: function loading() {
    this.trigger('loading');
  },

  finishLoading: function finishLoading() {
    this.trigger('load');
  },

  setOpacity: function setOpacity(opacity) {
    if (isNaN(opacity) || opacity > 1 || opacity < 0) {
      throw new Error(opacity + ' is not a valid value, should be in [0, 1] range');
    }
    this.opacity = this.options.opacity = opacity;
    for (var key in this.cache) {
      var img = this.cache[key];
      img.style.opacity = opacity;
      setImageOpacityIE8(img, opacity);
    }
  },

  getTile: function getTile(coord, zoom, ownerDocument) {
    var self = this;
    var ie = 'ActiveXObject' in window;
    var ielt9 = ie && !document.addEventListener;

    this.options.added = true;
    if (!this.model.hasTileURLTemplates()) {
      var key = zoom + '/' + coord.x + '/' + coord.y;
      var image = this.cache[key] = new Image(256, 256);
      image.src = EMPTY_GIF;
      image.setAttribute('gTileKey', key);
      image.style.opacity = this.options.opacity;
      return image;
    }

    var tile = this._getTile(coord, zoom, ownerDocument);

    // in IE8 semi transparency does not work and needs filter
    if (ielt9) {
      setImageOpacityIE8(tile, this.options.opacity);
    }
    tile.style.opacity = this.options.opacity;
    if (this.tiles === 0) {
      this.loading && this.loading();
    }

    this.tiles++;

    var loadTime = Profiler.metric('cartodb-js.tile.png.load.time').start();

    var finished = function finished() {
      loadTime.end();
      self.tiles--;
      if (self.tiles === 0) {
        self.finishLoading && self.finishLoading();
      }
    };

    tile.onload = finished;

    tile.onerror = function () {
      Profiler.metric('cartodb-js.tile.png.error').inc();
      self.model.addError({ type: C.WINDSHAFT_ERRORS.TILE });
      finished();
    };

    return tile;
  },

  // Get a tile element from a coordinate, zoom level, and an ownerDocument.
  _getTile: function _getTile(coord, zoom, ownerDocument) {
    var key = zoom + '/' + coord.x + '/' + coord.y;
    if (!this.cache[key]) {
      var img = this.cache[key] = new Image(256, 256);
      this.cache[key].src = this._getTileUrl(coord, zoom);
      this.cache[key].setAttribute('gTileKey', key);
      this.cache[key].onerror = function () {
        img.style.display = 'none';
      };
    }
    return this.cache[key];
  },

  // Get a tile url, based on x, y coordinates and a z value.
  _getTileUrl: function _getTileUrl(coord, z) {
    // Y coordinate is flipped in Mapbox, compared to Google
    var mod = Math.pow(2, z);
    var y = this.options.scheme === 'tms' ? mod - 1 - coord.y : coord.y;
    var x = coord.x % mod;

    x = x < 0 ? coord.x % mod + mod : x;

    if (y < 0) return this.options.blankImage;

    return this.options.tiles[parseInt(x + y, 10) % this.options.tiles.length].replace(/\{z\}/g, z).replace(/\{x\}/g, x).replace(/\{y\}/g, y);
  },

  _reload: function _reload() {
    var tileURLTemplates;
    if (this.model.hasTileURLTemplates()) {
      tileURLTemplates = [this.model.getTileURLTemplatesWithSubdomains()[0]];
    } else {
      tileURLTemplates = [EMPTY_GIF];
    }

    this.options.tiles = tileURLTemplates;
    this.tiles = 0;
    this.cache = {};
    this._reloadInteraction();
    this._refreshView();
  },

  _refreshView: function _refreshView() {
    var overlays = this.gmapsMap.overlayMapTypes;
    var overlayIndex = this._getOverlayIndex();

    if (overlayIndex >= 0) {
      overlays.setAt(overlayIndex, overlays.getAt(overlayIndex));
    }
  },

  _checkLayer: function _checkLayer() {
    if (!this.options.added) {
      throw new Error('the layer is not still added to the map');
    }
  },

  _getOverlayIndex: function _getOverlayIndex() {
    var overlays = this.gmapsMap.overlayMapTypes.getArray();

    return _.findIndex(overlays, function (overlay) {
      return overlay && overlay._id === this._id;
    }, this);
  },

  /**
   * Creates an instance of a googleMaps Point
   */
  _newPoint: function _newPoint(x, y) {
    return new google.maps.Point(x, y);
  },

  _manageOffEvents: function _manageOffEvents(map, o) {
    if (this.options.featureOut) {
      return this.options.featureOut && this.options.featureOut(o.e, o.layer);
    }
  },

  _manageOnEvents: function _manageOnEvents(map, o) {
    var point = o.pixel;
    var latlng = this.projector.pixelToLatLng(point);
    var eventType = o.e.type.toLowerCase();

    switch (eventType) {
      case 'mousemove':
        if (this.options.featureOver) {
          return this.options.featureOver(o.e, latlng, point, o.data, o.layer);
        }
        break;

      case 'click':
      case 'touchend':
      case 'touchmove': // for some reason android browser does not send touchend
      case 'mspointerup':
      case 'pointerup':
      case 'pointermove':
        if (this.options.featureClick) {
          this.options.featureClick(o.e, latlng, point, o.data, o.layer);
        }
        break;
      default:
        break;
    }
  }
});

module.exports = GMapsCartoDBLayerGroupView;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global google */
var _ = __webpack_require__(0);
var Layer = __webpack_require__(23);
var triggerLayerFeatureEvent = __webpack_require__(36);
var GMapsCartoDBLayerGroupView = __webpack_require__(86);
var CartoError = __webpack_require__(4);

/**
 * This object is a custom Google Maps MapType to enable feature interactivity
 * using an internal GMapsCartoDBLayerGroupView instance.
 *
 * NOTE: It also contains the feature events handlers. That's why it requires the carto layers array.
 */
function GoogleMapsMapType(layers, engine, map) {
  this._layers = layers;
  this._engine = engine;
  this._map = map;

  this._hoveredLayers = [];

  this.tileSize = new google.maps.Size(256, 256);
  this._internalView = new GMapsCartoDBLayerGroupView(this._engine._cartoLayerGroup, {
    nativeMap: map
  });
  this._id = this._internalView._id;
  this._internalView.on('featureClick', this._onFeatureClick, this);
  this._internalView.on('featureOver', this._onFeatureOver, this);
  this._internalView.on('featureOut', this._onFeatureOut, this);
  this._internalView.on('featureError', this._onFeatureError, this);
}

GoogleMapsMapType.prototype.getTile = function (coord, zoom, ownerDocument) {
  return this._internalView.getTile(coord, zoom, ownerDocument);
};

GoogleMapsMapType.prototype._onFeatureClick = function (internalEvent) {
  var layer = this._layers.findById(internalEvent.layer.id);
  triggerLayerFeatureEvent(Layer.events.FEATURE_CLICKED, internalEvent, layer);
};

GoogleMapsMapType.prototype._onFeatureOver = function (internalEvent) {
  var layer = this._layers.findById(internalEvent.layer.id);
  if (layer.isInteractive()) {
    this._hoveredLayers[internalEvent.layerIndex] = true;
    this._map.setOptions({ draggableCursor: 'pointer' });
  }
  triggerLayerFeatureEvent(Layer.events.FEATURE_OVER, internalEvent, layer);
};

GoogleMapsMapType.prototype._onFeatureOut = function (internalEvent) {
  var layer = this._layers.findById(internalEvent.layer.id);
  this._hoveredLayers[internalEvent.layerIndex] = false;
  if (_.any(this._hoveredLayers)) {
    this._map.setOptions({ draggableCursor: 'pointer' });
  } else {
    this._map.setOptions({ draggableCursor: 'auto' });
  }
  triggerLayerFeatureEvent(Layer.events.FEATURE_OUT, internalEvent, layer);
};

GoogleMapsMapType.prototype._onFeatureError = function (error) {
  var cartoError = new CartoError(error);
  _.each(this._layers.toArray(), function (layer) {
    if (layer.isInteractive()) {
      layer.trigger(Layer.events.TILE_ERROR, cartoError);
    }
  });
};

module.exports = GoogleMapsMapType;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

var LeafletLayerView = function LeafletLayerView(layerModel, opts) {
  opts = opts || {};
  this.model = layerModel;
  this.mapModel = opts.mapModel;
  this.leafletMap = opts.nativeMap;
  this.leafletLayer = opts.nativeLayer || this._createLeafletLayer();
  this.showLimitErrors = opts.showLimitErrors;

  this.setModel(layerModel);

  var type = layerModel.get('type') || layerModel.get('kind');
  this.type = type && type.toLowerCase();
};

_.extend(LeafletLayerView.prototype, Backbone.Events);
_.extend(LeafletLayerView.prototype, {

  setZIndex: function setZIndex(index) {
    this.leafletLayer.setZIndex(index);
  },

  setModel: function setModel(model) {
    if (this.model) {
      this.model.unbind('change', this._modelUpdated, this);
    }
    this.model = model;
    this.model.bind('change', this._modelUpdated, this);
  },

  remove: function remove() {
    this.leafletMap.removeLayer(this.leafletLayer);
    this.notifyRemove();
  },

  notifyRemove: function notifyRemove() {
    this.trigger('remove', this);
    this.model.unbind(null, null, this);
    this.unbind();
  },

  reload: function reload() {
    this.leafletLayer.redraw();
  },

  _createLeafletLayer: function _createLeafletLayer() {
    throw new Error('subclasses of LeafletLayerView must implement _createLeafletLayer');
  }
});

module.exports = LeafletLayerView;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global L */
var _ = __webpack_require__(0);
var C = __webpack_require__(24);
var LeafletLayerView = __webpack_require__(88);
var CartoDBLayerGroupViewBase = __webpack_require__(35);
var zera = __webpack_require__(34);
var EMPTY_GIF = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';

var LeafletCartoDBLayerGroupView = function LeafletCartoDBLayerGroupView(layerModel, opts) {
  LeafletLayerView.apply(this, arguments);
  CartoDBLayerGroupViewBase.apply(this, arguments);

  this.leafletLayer.on('load', function () {
    this.trigger('load');
  }.bind(this));

  this.leafletLayer.on('loading', function () {
    this.trigger('loading');
  }.bind(this));

  this.leafletLayer.on('tileerror', function (layer) {
    this.model.addError({ type: C.WINDSHAFT_ERRORS.TILE });
  }.bind(this));
};

LeafletCartoDBLayerGroupView.prototype = _.extend({}, LeafletLayerView.prototype, CartoDBLayerGroupViewBase.prototype, {
  interactionClass: zera.Interactive,

  _createLeafletLayer: function _createLeafletLayer() {
    var tileLayer = new L.TileLayer(null, {
      opacity: 0.99,
      maxZoom: 30
    });
    tileLayer._setUrl = function (url, noDraw) {
      return L.TileLayer.prototype.setUrl.call(this, url, noDraw);
    };
    return tileLayer;
  },

  _reload: function _reload() {
    var tileURLTemplate = this.model.getTileURLTemplate();
    var subdomains = this.model.getSubdomains();

    if (!tileURLTemplate) {
      tileURLTemplate = EMPTY_GIF;
    }

    if (subdomains) {
      L.Util.setOptions(this.leafletLayer, { subdomains: subdomains });
    }

    this.leafletLayer._setUrl(tileURLTemplate);

    this._reloadInteraction();
  },

  _manageOffEvents: function _manageOffEvents(nativeMap, zeraEvent) {
    this._onFeatureOut(zeraEvent.layer);
  },

  _manageOnEvents: function _manageOnEvents(nativeMap, zeraEvent) {
    var containerPoint = nativeMap.layerPointToContainerPoint(zeraEvent.layerPoint);

    if (!containerPoint || isNaN(containerPoint.x) || isNaN(containerPoint.y)) {
      return false;
    }

    var latlng = nativeMap.containerPointToLatLng(containerPoint);

    var eventType = zeraEvent.e.type.toLowerCase();

    switch (eventType) {
      case 'mousemove':
        this._onFeatureOver(latlng, containerPoint, zeraEvent.data, zeraEvent.layer);
        break;
      case 'click':
        this._onFeatureClicked(latlng, containerPoint, zeraEvent.data, zeraEvent.layer);
        break;
    }
  },

  _onFeatureClicked: function _onFeatureClicked(latlon, containerPoint, data, layer) {
    var layerModel = this.model.getLayerInLayerGroupAt(layer);
    if (layerModel) {
      this.trigger('featureClick', {
        layer: layerModel,
        layerIndex: layer,
        latlng: [latlon.lat, latlon.lng],
        position: containerPoint,
        feature: data
      });
    }
  },

  _onFeatureOver: function _onFeatureOver(latlon, containerPoint, data, layer) {
    var layerModel = this.model.getLayerInLayerGroupAt(layer);
    if (layerModel) {
      this.trigger('featureOver', {
        layer: layerModel,
        layerIndex: layer,
        latlng: [latlon.lat, latlon.lng],
        position: containerPoint,
        feature: data
      });
    }
  },

  _onFeatureOut: function _onFeatureOut(layerIndex) {
    var layerModel = this.model.getLayerInLayerGroupAt(layerIndex);
    if (layerModel) {
      this.trigger('featureOut', {
        layer: layerModel,
        layerIndex: layerIndex
      });
    }
  }
});

LeafletCartoDBLayerGroupView.prototype.constructor = LeafletLayerView;

module.exports = LeafletCartoDBLayerGroupView;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var CartoValidationError = __webpack_require__(3);

/**
 * List of possible aggregation operations.
 * See {@link https://carto.com/developers/maps-api/tile-aggregation#columns } for more info.
 * @enum {string} carto.layer.Aggregation.operation
 * @memberof carto.layer.Aggregation
 * @api
 */
var OPERATIONS = {
  /** The new point will contain the average value of the or the aggregated ones */
  AVG: 'avg',
  /** The new point will contain the sum of the aggregated values */
  SUM: 'sum',
  /** The new point will contain the minimal value existing the aggregated features */
  MIN: 'min',
  /** The new point will contain the maximun value existing the aggregated features */
  MAX: 'max',
  /** The new point will contain the mode of the aggregated values */
  MODE: 'mode'
};

/**
 * List of possible aggregation feature placements.
 * See {@link https://carto.com/developers/maps-api/tile-aggregation#placement } for more info.
 * @enum {string} carto.layer.Aggregation.placement
 * @memberof carto.layer.Aggregation
 * @api
 */
var PLACEMENTS = {
  /** The new point will be placed at a random sample of the aggregated points */
  SAMPLE: 'point-sample',
  /** The new point will be placed at the center of the aggregation grid cells */
  GRID: 'point-grid',
  /** The new point will be placed at averaged coordinated of the grouped points */
  CENTROID: 'centroid'
};

var VALID_RESOLUTIONS = [0.5, 1, 2, 4, 8, 16, 32, 64, 128, 256];

/**
 * An aggregation can be passed to a {@link carto.layer.Layer} to reduce the number of visible points
 * increasing the performance.
 *
 * See {@link https://carto.com/developers/maps-api/guides/tile-aggregation/} for more info.
 *
 * @param {object} opts
 * @param {number} opts.threshold - The minimum number of rows in the dataset for aggregation to be applied
 * @param {number} opts.resolution - The cell-size of the spatial aggregation grid [more info]{@link https://carto.com/developers/maps-api/tile-aggregation#resolution}
 * @param {string} opts.placement - The kind of [aggregated geometry]{@link https://carto.com/developers/maps-api/tile-aggregation#placement} generated
 * @param {object} opts.columns - The new columns are computed by a applying an aggregate function to all the points in each group
 * @param {string} opts.columns.aggregatedFunction - The Function used to aggregate the points: avg (average), sum, min (minimum), max (maximum) and mode (the most frequent value in the group)
 * @param {string} opts.columns.aggregatedColumn - The name of the original column to be aggregated.
 *
 * @example
 * // Create a layer with aggregated data.
 * const aggregationOptions = {
 *   // CARTO applies aggregation if your dataset has more than threshold rows. In this case, more than 1 row.
 *   threshold: 1,
 *   // Defines the cell-size of the aggregation grid. In this case, 1x1 pixel.
 *   resolution: 1,
 *   // Where the new point will be placed. In this case, at the center of the grid.
 *   placement: carto.layer.Aggregation.placement.GRID,
 *   // Here we define the aggregated columns that we want to obtain.
 *   columns: {
 *     // Each property key is the name of the new generated column
 *     avg_population: {
 *       // The aggregated column will contain the average of the original data.
 *       aggregateFunction: carto.layer.Aggregation.operation.AVG,
 *       // The column to be aggregated
 *       aggregatedColumn: 'population'
 *     }, {
 *     min_population: {
 *       aggregateFunction: carto.layer.Aggregation.operation.MIN,
 *       aggregatedColumn: 'population'
 *   }
 * };
 * const aggregation = new Aggregation(options);
 * const layer = new carto.layer.Layer(source, style, { aggregation: aggregation });
 *
 * @constructor
 * @api
 * @memberof carto.layer
 */
function Aggregation(opts) {
  if (!_.isFinite(opts.threshold)) {
    throw _getValidationError('thresholdRequired');
  }

  if (!_.isFinite(opts.threshold) || opts.threshold < 1 || Math.floor(opts.threshold) !== opts.threshold) {
    throw _getValidationError('invalidThreshold');
  }

  if (!_.isFinite(opts.resolution)) {
    throw _getValidationError('resolutionRequired');
  }

  if (!_.contains(VALID_RESOLUTIONS, opts.resolution)) {
    throw _getValidationError('invalidResolution');
  }

  _checkValidPlacement(opts.placement);

  var columns = _checkAndTransformColumns(opts.columns);

  var aggregation = {
    threshold: opts.threshold,
    resolution: opts.resolution,
    placement: opts.placement,
    columns: columns
  };

  return _.pick(aggregation, _.identity); // Remove empty values
}

Aggregation.operation = OPERATIONS;

Aggregation.placement = PLACEMENTS;

function _checkColumns(columns) {
  Object.keys(columns).forEach(function (key) {
    _checkColumn(columns, key);
  });
}

function _checkColumn(columns, key) {
  if (!columns[key].aggregatedColumn) {
    throw _getValidationError('columnAggregatedColumnRequired' + key);
  }

  if (!_.isString(columns[key].aggregatedColumn)) {
    throw _getValidationError('invalidColumnAggregatedColumn' + key);
  }

  if (!columns[key].aggregateFunction) {
    throw _getValidationError('columnFunctionRequired' + key);
  }

  if (!_.contains(_.values(OPERATIONS), columns[key].aggregateFunction)) {
    throw _getValidationError('invalidColumnFunction' + key);
  }
}

function _getValidationError(code) {
  return new CartoValidationError('aggregation', code);
}

// Windshaft uses snake_case for column parameters
function _checkAndTransformColumns(columns) {
  var returnValue = null;

  if (columns) {
    _checkColumns(columns);

    returnValue = {};
    Object.keys(columns).forEach(function (key) {
      returnValue[key] = _columnToSnakeCase(columns[key]);
    });
  }
  return returnValue;
}

// Windshaft uses snake_case for column parameters
function _columnToSnakeCase(column) {
  return {
    aggregate_function: column.aggregateFunction,
    aggregated_column: column.aggregatedColumn
  };
}

function _checkValidPlacement(placement) {
  if (placement && !_.contains(_.values(PLACEMENTS), placement)) {
    throw _getValidationError('invalidPlacement');
  }
}

module.exports = Aggregation;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Events fired by a layer
 *
 * @enum {string}
 * @readonly
 * @memberof carto.layer
 */
var events = {
  /**
   * A feature has been clicked, fired every time the user clicks on a feature.
   */
  FEATURE_CLICKED: 'featureClicked',
  /**
   * The mouse is over a feature, fired every time the user moves over a feature.
   */
  FEATURE_OVER: 'featureOver',
  /**
   * The mouse exits a feature, fired every time the user moves out of a feature.
   */
  FEATURE_OUT: 'featureOut',
  /**
   * There has been an error related to tiles, fired every time the features are not rendered due to an error.
   */
  TILE_ERROR: 'featureError'
};

module.exports = events;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(37);

/**
 * Metadata type categories
 *
 * Adding a Turbocarto ramp (with categories) in the style generates a response
 * from the server with the resulting information after computing the ramp.
 * This information is wrapped in a metadata object of type 'categories', that
 * contains a list of categories with the name of the category and the value. And
 * also the default value if it has been defined in the ramp.
 *
 * For example, the following ramp will generate a metadata of type 'categories'
 * with string values (the color) in its categories. The #CCCCCC is the default
 * value in this case:
 *
 *   marker-fill: ramp([scalerank], (#F54690, #D16996, #CCCCCC), (1, 2), "=", category);
 *
 * @param {object} rule - Rule with the cartocss metadata
 * @constructor
 * @hideconstructor
 * @extends carto.layer.metadata.Base
 * @memberof carto.layer.metadata
 * @api
 */
function Categories(rule) {
  var categoryBuckets = rule.getBucketsWithCategoryFilter();
  var defaultBuckets = rule.getBucketsWithDefaultFilter();

  /**
   * @typedef {object} carto.layer.metadata.Category
   * @property {number|string} name - The name of the category
   * @property {string} value - The value of the category
   * @api
   */
  this._categories = categoryBuckets.map(function (bucket) {
    return {
      name: bucket.filter.name,
      value: bucket.value
    };
  });
  this._defaultValue = defaultBuckets.length > 0 ? defaultBuckets[0].value : undefined;

  Base.call(this, 'categories', rule);
}

Categories.prototype = Object.create(Base.prototype);

/**
 * Return the buckets
 *
 * @return {carto.layer.metadata.Category[]}
 * @api
 */
Categories.prototype.getCategories = function () {
  return this._categories;
};

/**
 * Return the default value
 *
 * @return {string}
 * @api
 */
Categories.prototype.getDefaultValue = function () {
  return this._defaultValue;
};

module.exports = Categories;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Base = __webpack_require__(37);

/**
 * Metadata type buckets
 *
 * Adding a Turbocarto ramp (with ranges) in the style generates a response
 * from the server with the resulting information, after computing the ramp.
 * This information is wrapped in a metadata object of type 'buckets', that
 * contains a list of buckets with the range (min, max) and the value. And
 * also the total min, max range and the average of the total values.
 *
 * For example, the following ramp will generate a metadata of type 'buckets'
 * with numeric values (the size) in its buckets:
 *
 *   marker-width: ramp([scalerank], range(5, 20), quantiles(5));
 *
 * In another example, this ramp will generate a metadata of type 'buckets'
 * with string values (the color) in its buckets:
 *
 *   marker-fill: ramp([scalerank], (#FFC6C4, #EE919B, #CC607D), quantiles);
 *
 * @param {object} rule - Rule with the cartocss metadata
 * @constructor
 * @hideconstructor
 * @extends carto.layer.metadata.Base
 * @memberof carto.layer.metadata
 * @api
 */
function Buckets(rule) {
  var rangeBuckets = rule.getBucketsWithRangeFilter();

  /**
   * @typedef {object} carto.layer.metadata.Bucket
   * @property {number} min - The minimum range value
   * @property {number} max - The maximum range value
   * @property {number|string} value - The value of the bucket
   * @api
   */
  this._buckets = rangeBuckets.map(function (bucket) {
    return {
      min: bucket.filter.start,
      max: bucket.filter.end,
      value: bucket.value
    };
  });
  this._avg = rule.getFilterAvg();
  this._min = rangeBuckets.length > 0 ? rangeBuckets[0].filter.start : undefined;
  this._max = rangeBuckets.length > 0 ? rangeBuckets[rangeBuckets.length - 1].filter.end : undefined;

  Base.call(this, 'buckets', rule);
}

Buckets.prototype = Object.create(Base.prototype);

/**
 * Return the buckets
 *
 * @return {carto.layer.metadata.Bucket[]}
 * @api
 */
Buckets.prototype.getBuckets = function () {
  return this._buckets;
};

/**
 * Return the average of the column
 *
 * @return {number}
 * @api
 */
Buckets.prototype.getAverage = function () {
  return this._avg;
};

/**
 * Return the minimum value in the ranges
 *
 * @return {number}
 * @api
 */
Buckets.prototype.getMin = function () {
  return this._min;
};

/**
 * Return the maximum value in the ranges
 *
 * @return {number}
 * @api
 */
Buckets.prototype.getMax = function () {
  return this._max;
};

module.exports = Buckets;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var BucketsMetadata = __webpack_require__(93);
var CategoriesMetadata = __webpack_require__(92);
var Rule = __webpack_require__(15);

/**
 * Generates a list of Metadata objects from the original cartocss_meta rules
 *
 * @param  {Rules} rulesData
 * @return {metadata.Base[]}
 */
function getMetadataFromRules(rulesData) {
  var metadata = [];

  rulesData.forEach(function (ruleData) {
    var rule = new Rule(ruleData);

    if (_isBucketsMetadata(rule)) {
      metadata.push(new BucketsMetadata(rule));
    } else if (_isCategoriesMetadata(rule)) {
      metadata.push(new CategoriesMetadata(rule));
    }
  });

  return metadata;
}

function _isBucketsMetadata(rule) {
  return rule.getBucketsWithRangeFilter().length > 0;
}

function _isCategoriesMetadata(rule) {
  return rule.getBucketsWithCategoryFilter().length > 0;
}

module.exports = {
  getMetadataFromRules: getMetadataFromRules
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

/**
  * Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.
  * @param {Object} object The object to query.
  * @param {String} path The path of the property to get.
  * @param {Any} defaultValue The value returned for undefined resolved values.
  * @return {Any} Returns the resolved value.
  */
module.exports = function (object, path, defaultValue) {
  var keys = path.split('.');
  var value = keys.reduce(function (a, b) {
    return (a || {})[b];
  }, object);

  return _.isUndefined(value) ? defaultValue : value;
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var StaticLegendModelBase = __webpack_require__(22);

var TorqueLegendModel = StaticLegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(StaticLegendModelBase.prototype.defaults.apply(this), {
      type: 'torque',
      items: [],
      html: ''
    });
  }
});

module.exports = TorqueLegendModel;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var StaticLegendModelBase = __webpack_require__(22);

var CustomChoroplethLegendModel = StaticLegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(StaticLegendModelBase.prototype.defaults.apply(this), {
      type: 'custom_choropleth',
      prefix: '',
      suffix: '',
      leftLabel: '',
      rightLabel: '',
      colors: []
    });
  }
});

module.exports = CustomChoroplethLegendModel;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var StaticLegendModelBase = __webpack_require__(22);

var CustomLegendModel = StaticLegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(StaticLegendModelBase.prototype.defaults.apply(this), {
      type: 'custom',
      items: [],
      html: ''
    });
  }
});

module.exports = CustomLegendModel;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LegendModelBase = __webpack_require__(13);

var ChoroplethLegendModel = LegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(LegendModelBase.prototype.defaults.apply(this), {
      type: 'choropleth',
      prefix: '',
      suffix: '',
      leftLabel: '',
      rightLabel: '',
      colors: []
    });
  },

  getNonResettableAttrs: function getNonResettableAttrs() {
    return _.union(LegendModelBase.prototype.getNonResettableAttrs.apply(this), ['colors']);
  },

  isAvailable: function isAvailable() {
    return this.get('colors') && this.get('colors').length > 0;
  }
});

module.exports = ChoroplethLegendModel;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LegendModelBase = __webpack_require__(13);

var BubbleLegendModel = LegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(LegendModelBase.prototype.defaults.apply(this), {
      type: 'bubble',
      fillColor: '',
      prefix: '',
      suffix: '',
      values: []
    });
  },

  getNonResettableAttrs: function getNonResettableAttrs() {
    return _.union(LegendModelBase.prototype.getNonResettableAttrs.apply(this), ['values']);
  },

  isAvailable: function isAvailable() {
    return this.get('values') && this.get('values').length > 0;
  }
});

module.exports = BubbleLegendModel;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LegendModelBase = __webpack_require__(13);

var CategoryLegendModel = LegendModelBase.extend({
  defaults: function defaults() {
    return _.extend(LegendModelBase.prototype.defaults.apply(this), {
      type: 'category',
      categories: []
    });
  },

  getNonResettableAttrs: function getNonResettableAttrs() {
    return _.union(LegendModelBase.prototype.getNonResettableAttrs.apply(this), ['categories']);
  },

  isAvailable: function isAvailable() {
    return this.get('categories') && this.get('categories').length > 0;
  }
});

module.exports = CategoryLegendModel;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var CategoryLegendModel = __webpack_require__(101);
var BubbleLegendModel = __webpack_require__(100);
var ChoroplethLegendModel = __webpack_require__(99);
var CustomLegendModel = __webpack_require__(98);
var CustomChoroplethLegendModel = __webpack_require__(97);
var TorqueLegendModel = __webpack_require__(96);

var LEGENDS_METADATA = {
  bubble: {
    modelClass: BubbleLegendModel,
    definitionAttrs: [{ 'fillColor': 'color' }, { 'topLabel': 'top_label' }, { 'bottomLabel': 'bottom_label' }],
    dynamic: true
  },
  category: {
    modelClass: CategoryLegendModel,
    definitionAttrs: ['prefix', 'suffix'],
    dynamic: true
  },
  choropleth: {
    modelClass: ChoroplethLegendModel,
    definitionAttrs: ['prefix', 'suffix', { 'leftLabel': 'left_label' }, { 'rightLabel': 'right_label' }],
    dynamic: true
  },
  custom: {
    modelClass: CustomLegendModel,
    definitionAttrs: [{ 'items': 'categories' }, 'html']
  },
  html: {
    modelClass: CustomLegendModel,
    definitionAttrs: [{ 'items': 'categories' }, 'html']
  },
  custom_choropleth: {
    modelClass: CustomChoroplethLegendModel,
    definitionAttrs: ['prefix', 'suffix', { 'leftLabel': 'left_label' }, { 'rightLabel': 'right_label' }, 'colors']
  },
  torque: {
    modelClass: TorqueLegendModel,
    definitionAttrs: [{ 'items': 'categories' }, 'html']
  }
};

var SHARED_ATTRS = ['title', { 'preHTMLSnippet': 'pre_html' }, { 'postHTMLSnippet': 'post_html' }];

var Legends = function Legends(legendsData, deps) {
  if (!deps.engine) throw new Error('engine is required');

  this._legendsData = legendsData || [];
  this._engine = deps.engine;

  _.each(LEGENDS_METADATA, function (legendMetadata, legendType) {
    this[legendType] = this._createLegendModel(legendType, legendMetadata);
  }, this);

  // HOTFIX: TO BE DELETED ONCE MIGRATED
  var data = this._findDataForLegend('html');
  if (data) {
    this['custom'] = this['html'];
  }

  delete this['html'];
};

Legends.prototype._createLegendModel = function (legendType, legendMetadata) {
  var ModelClass = legendMetadata.modelClass;
  var attrs = SHARED_ATTRS.concat(legendMetadata.definitionAttrs);
  var data = this._findDataForLegend(legendType);

  // Flatten data.definition
  data = data && _.extend({}, _.omit(data, 'definition'), data.definition);

  var modelAttrs = {};
  _.each(attrs, function (attr) {
    var attrNameInData = attr;
    var attrNameForModel = attr;
    if (_.isObject(attr)) {
      attrNameForModel = Object.keys(attr)[0];
      attrNameInData = attr[attrNameForModel];
    }

    modelAttrs[attrNameForModel] = data && data[attrNameInData];
  });

  var legendModel = new ModelClass(modelAttrs, {
    engine: this._engine
  });

  if (data) {
    legendModel.show();
  }
  return legendModel;
};

Legends.prototype._findDataForLegend = function (legendType) {
  return _.find(this._legendsData, { type: legendType });
};

Legends.prototype.hasAnyLegend = function () {
  var legendTypes = _.keys(LEGENDS_METADATA);
  return _.some(legendTypes, function (legendType) {
    var legend = this[legendType];
    return legend && legend.isVisible();
  }, this);
};

module.exports = Legends;

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var PopupFields = __webpack_require__(39);

var TooltipTemplate = Backbone.Model.extend({
  defaults: {
    vertical_offset: 0,
    horizontal_offset: 0,
    position: 'top|center',
    template: '',
    alternative_names: {}
  },

  initialize: function initialize(attrs) {
    attrs = attrs || {};
    this.fields = new PopupFields(attrs.fields || []);
    this.unset('fields');
  },

  update: function update(attrs) {
    attrs = _.clone(attrs);

    if (!this.fields.equals(attrs.fields)) {
      this.fields.reset(attrs.fields);
    }
    delete attrs.fields;

    if (attrs.alternative_names) {
      attrs.alternative_names = JSON.parse(JSON.stringify(attrs.alternative_names));
    }

    this.set(attrs);
  },

  getFieldNames: function getFieldNames() {
    return this.fields.pluck('name');
  },

  hasFields: function hasFields() {
    return !this.fields.isEmpty();
  },

  hasTemplate: function hasTemplate() {
    return !!this.get('template');
  }
});

module.exports = TooltipTemplate;

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var PopupFields = __webpack_require__(39);

var InfowindowTemplate = Backbone.Model.extend({
  defaults: {
    offset: [28, 0], // offset of the tip calculated from the bottom left corner
    maxHeight: 180, // max height of the content, not the whole infowindow
    alternative_names: {},
    template_type: 'mustache'
  },

  initialize: function initialize(attrs) {
    attrs = attrs || {};
    this.fields = new PopupFields(attrs.fields || []);
    this.unset('fields');
  },

  update: function update(attrs) {
    attrs = _.clone(attrs);

    if (!this.fields.equals(attrs.fields)) {
      this.fields.reset(attrs.fields);
    }
    delete attrs.fields;

    if (attrs.alternative_names) {
      attrs.alternative_names = JSON.parse(JSON.stringify(attrs.alternative_names));
    }

    this.set(attrs);
  },

  getFieldNames: function getFieldNames() {
    return this.fields.pluck('name');
  },

  hasFields: function hasFields() {
    return !this.fields.isEmpty();
  },

  hasTemplate: function hasTemplate() {
    return !!this.get('template');
  }
});

module.exports = InfowindowTemplate;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var log = __webpack_require__(27);
var Model = __webpack_require__(2);

// Map layer, could be tiled or whatever
var MapLayer = Model.extend({

  initialize: function initialize() {
    this.bind('change:type', function () {
      log.error('changing layer type is not allowed, remove it and add a new one instead');
    });
  },

  // PUBLIC API METHODS

  remove: function remove(opts) {
    opts = opts || {};
    this.trigger('destroy', this, this.collection, opts);
  },

  update: function update(attrs, options) {
    options = options || {};

    // TODO: Pick the attributes for the specific type of layer
    // Eg: this.set(_.pick(attrs, this.ATTR_NAMES))
    this.set(attrs, {
      silent: options.silent
    });
  },

  show: function show() {
    this.set('visible', true);
  },

  hide: function hide() {
    this.set('visible', false);
  },

  isVisible: function isVisible() {
    return !!this.get('visible');
  },

  isHidden: function isHidden() {
    return !this.isVisible();
  },

  toggle: function toggle() {
    this.set('visible', !this.get('visible'));
  },

  // INTERNAL CartoDB.js METHODS

  setOk: function setOk() {
    this.unset('error');
  },

  setError: function setError(error) {
    this.set('error', error);
  },

  /**
   * Only torque and cartodb layers have a source.
   * @abstract
   */
  getSourceId: function getSourceId() {
    throw new Error('.getSourceId called on a non torque/cartodb layer.');
  },

  /**
   * Check if an analysis node is the layer's source.
   * Only torque and cartodb layers have a source otherwise return false.
   */
  hasSource: function hasSource(analysisNode) {
    return false;
  }
});

module.exports = MapLayer;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Backbone = __webpack_require__(1);

/**
 * global configuration
 */
var Config = Backbone.Model.extend({
  VERSION: 4,

  initialize: function initialize() {},

  // error track
  REPORT_ERROR_URL: '/api/v0/error',
  ERROR_TRACK_ENABLED: false
});

module.exports = Config;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Config = __webpack_require__(106);

var config = new Config();
config.set({
  cartodb_attributions: '© <a href="https://carto.com/about-carto/" target="_blank">CARTO</a>',
  cartodb_logo_link: 'http://www.carto.com'
});

module.exports = config;

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var config = __webpack_require__(107);
var LayerModelBase = __webpack_require__(105);
var InfowindowTemplate = __webpack_require__(104);
var TooltipTemplate = __webpack_require__(103);
var Legends = __webpack_require__(102);
var AnalysisModel = __webpack_require__(9);

var ATTRIBUTES_THAT_TRIGGER_VIS_RELOAD = ['sql', 'source', 'sql_wrap', 'cartocss'];

var CartoDBLayer = LayerModelBase.extend({
  defaults: {
    type: 'CartoDB',
    attribution: config.get('cartodb_attributions'),
    visible: true
  },

  initialize: function initialize(attrs, options) {
    attrs = attrs || {};
    options = options || {};
    if (!options.engine) throw new Error('engine is required');

    this._engine = options.engine;
    if (attrs && attrs.cartocss) {
      this.set('initialStyle', attrs.cartocss);
    }

    if (attrs.source) {
      this.setSource(attrs.source);
    }

    // PUBLIC PROPERTIES
    this.infowindow = new InfowindowTemplate(attrs.infowindow);
    this.tooltip = new TooltipTemplate(attrs.tooltip);
    this.unset('infowindow');
    this.unset('tooltip');

    this.legends = new Legends(attrs.legends, { engine: this._engine });
    this.unset('legends');

    this.bind('change', this._onAttributeChanged, this);
    this.infowindow.fields.bind('reset add remove', this._reload, this);
    this.tooltip.fields.bind('reset add remove', this._reload, this);

    this.aggregation = options.aggregation;

    LayerModelBase.prototype.initialize.apply(this, arguments);
  },

  _onAttributeChanged: function _onAttributeChanged() {
    var reload = _.any(ATTRIBUTES_THAT_TRIGGER_VIS_RELOAD, function (attr) {
      if (this.hasChanged(attr)) {
        return true;
      }
    }, this);

    if (reload) {
      this._reload();
    }
  },

  _reload: function _reload() {
    this._engine.reload({
      sourceId: this.get('id')
    });
  },

  restoreCartoCSS: function restoreCartoCSS() {
    this.set('cartocss', this.get('initialStyle'));
  },

  isVisible: function isVisible() {
    return this.get('visible');
  },

  isInteractive: function isInteractive() {
    return this._hasInfowindowFields() || this._hasTooltipFields();
  },

  _hasInfowindowFields: function _hasInfowindowFields() {
    return this.infowindow.hasFields();
  },

  _hasTooltipFields: function _hasTooltipFields() {
    return this.tooltip.hasFields();
  },

  getInteractiveColumnNames: function getInteractiveColumnNames() {
    return _.chain(['cartodb_id']).union(this.infowindow.getFieldNames()).union(this.tooltip.getFieldNames()).uniq().value();
  },

  isInfowindowEnabled: function isInfowindowEnabled() {
    return this.infowindow.hasTemplate();
  },

  isTooltipEnabled: function isTooltipEnabled() {
    return this.tooltip.hasTemplate();
  },

  getName: function getName() {
    return this.get('layer_name');
  },

  getEstimatedFeatureCount: function getEstimatedFeatureCount() {
    var meta = this.get('meta');
    var stats = meta && meta.stats;
    return stats && stats.estimatedFeatureCount;
  },

  getSourceId: function getSourceId() {
    var source = this.getSource();
    return source && source.id;
  },

  getSource: function getSource() {
    return this.get('source');
  },

  setSource: function setSource(newSource, options) {
    if (this.getSource()) {
      this.getSource().unmarkAsSourceOf(this);
    }
    newSource.markAsSourceOf(this);
    this.set('source', newSource, options);
  },

  /**
   * Check if an analysis node is the layer's source.
   * Only torque and cartodb layers have a source otherwise return false.
   */
  hasSource: function hasSource(analysisModel) {
    return this.getSource().equals(analysisModel);
  },

  update: function update(attrs) {
    if (attrs.source) {
      throw new Error('Use ".setSource" to update a layer\'s source instead of the update method');
    }
    LayerModelBase.prototype.update.apply(this, arguments);
  },

  remove: function remove() {
    this.getSource().unmarkAsSourceOf(this);
    LayerModelBase.prototype.remove.apply(this, arguments);
  },

  getTableName: function getTableName() {
    if (this.get('source').has('options')) {
      return this.get('source').get('options').table_name;
    }
  },

  getApiKey: function getApiKey() {
    return this._engine.getApiKey();
  }
},
// Static methods and properties
{
  _checkSourceAttribute: function _checkSourceAttribute(source) {
    if (!(source instanceof AnalysisModel)) {
      throw new Error('Source must be an instance of AnalysisModel');
    }
  }
});

module.exports = CartoDBLayer;

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Base = __webpack_require__(40);
var CartoDBLayer = __webpack_require__(108);
var SourceBase = __webpack_require__(12);
var StyleBase = __webpack_require__(38);
var CartoError = __webpack_require__(4);
var CartoValidationError = __webpack_require__(3);
var EVENTS = __webpack_require__(14);
var metadataParser = __webpack_require__(94);

/**
 * Represents a layer Object.
 *
 * A layer is the primary way to visualize geospatial data.
 *
 * To create a layer a {@link carto.source.Base|source} and {@link carto.style.Base|styles}
 * are required:
 *
 * - The {@link carto.source.Base|source} is used to know **what** data will be displayed in the Layer.
 * - The {@link carto.style.Base|style} is used to know **how** to draw the data in the Layer.
 *
 * A layer alone won't do too much. In order to get data from the CARTO server you must add the Layer to a {@link carto.Client|client}.
 *
 * ```
 * // Create a layer. Remember this won't do anything unless the layer is added to a client.
 * const layer = new carto.layer.Layer(source, style);
 *```
 *
 * @param {carto.source.Base} source - The source where the layer will fetch the data
 * @param {carto.style.CartoCSS} style - A CartoCSS object with the layer styling
 * @param {object} [options]
 * @param {Array<string>} [options.featureClickColumns=[]] - Columns that will be available for `featureClick` events
 * @param {boolean} [options.visible=true] - A boolean value indicating the layer's visibility
 * @param {Array<string>} [options.featureOverColumns=[]] - Columns that will be available for `featureOver` events
 * @param {carto.layer.Aggregation} [options.aggregation={}] - Specify {@link carto.layer.Aggregation|aggregation } options
 * @param {string} [options.id] - An unique identifier for the layer
 * @fires metadataChanged
 * @fires featureClicked
 * @fires featureOut
 * @fires featureOver
 * @fires error
 * @example
 * const citiesSource = new carto.source.SQL('SELECT * FROM cities');
 * const citiesStyle = new carto.style.CartoCSS(`
 *   #layer {
 *     marker-fill: #FABADA;
 *     marker-width: 10;
 *   }
 * `);
 * // Create a layer with no options
 * new carto.layer.Layer(citiesSource, citiesStyle);
 * @example
 * const citiesSource = new carto.source.SQL('SELECT * FROM cities');
 * const citiesStyle = new carto.style.CartoCSS(`
 *   #layer {
 *     marker-fill: #FABADA;
 *     marker-width: 10;
 *   }
 * `);
 * // Create a layer indicating what columns will be included in the featureOver event.
 * new carto.layer.Layer(citiesSource, citiesStyle, {
 *   featureOverColumns: [ 'name' ]
 * });
 * @example
 * const citiesSource = new carto.source.SQL('SELECT * FROM cities');
 * const citiesStyle = new carto.style.CartoCSS(`
 *   #layer {
 *     marker-fill: #FABADA;
 *     marker-width: 10;
 *   }
 * `);
 * // Create a hidden layer
 * new carto.layer.Layer(citiesSource, citiesStyle, { visible: false });
 * @example
 * // Listen to the event thrown when the mouse is over a feature
 * layer.on('featureOver', featureEvent => {
 *   console.log(`Mouse over city with name: ${featureEvent.data.name}`);
 * });
 * @constructor
 * @extends carto.layer.Base
 * @memberof carto.layer
 * @api
 */
function Layer(source, style) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  Base.apply(this, arguments);

  _checkSource(source);
  _checkStyle(style);

  this._client = undefined;
  this._engine = undefined;
  this._internalModel = undefined;

  this._source = source;
  this._style = style;
  this._visible = _.isBoolean(options.visible) ? options.visible : true;
  this._featureClickColumns = options.featureClickColumns || [];
  this._featureOverColumns = options.featureOverColumns || [];
  this._minzoom = options.minzoom || 0;
  this._maxzoom = options.maxzoom || undefined;
  this._aggregation = options.aggregation || {};

  _validateAggregationColumnsAndInteractivity(this._aggregation.columns, this._featureClickColumns, this._featureOverColumns);
}

Layer.prototype = Object.create(Base.prototype);

/**
 * Set a new style for this layer.
 *
 * @param {carto.style.CartoCSS} style - New style
 * @fires styleChanged
 * @fires error
 * @return {Promise} A promise that will be fulfilled when the style is applied to the layer or rejected with a
 * {@link CartoError} if something goes bad
 */
Layer.prototype.setStyle = function (style, opts) {
  var prevStyle = this._style;
  _checkStyle(style);
  opts = opts || {};
  if (prevStyle === style) {
    return Promise.resolve();
  }
  if (!this._internalModel) {
    this._style = style;
    this.trigger('styleChanged', this);
    return Promise.resolve();
  }
  // If style has an engine and is different from the layer`s engine throw an error
  if (style.$getEngine() && style.$getEngine() !== this._internalModel._engine) {
    throw new CartoValidationError('layer', 'differentStyleClient');
  }
  // If style has no engine, set the layer engine in the style.
  if (!style.$getEngine()) {
    style.$setEngine(this._engine);
  }

  this._internalModel.set('cartocss', style.getContent(), { silent: true });
  return this._engine.reload().then(function () {
    this._style = style;
    this.trigger('styleChanged', this);
  }.bind(this)).catch(_rejectAndTriggerError.bind(this));
};

/**
 * Get the current style for this layer.
 *
 * @return {carto.style.CartoCSS} Current style
 * @api
 */
Layer.prototype.getStyle = function () {
  return this._style;
};

/**
 * Set a new source for this layer.
 *
 * A source and a layer must belong to the same client so you can't
 * add a source belonging to a different client.
 *
 * @param {carto.source.Base} source - New source
 * @fires sourceChanged
 * @fires error
 * @return {Promise} A promise that will be fulfilled when the style is applied to the layer or rejected with a
 * {@link CartoError} if something goes bad
 */
Layer.prototype.setSource = function (source) {
  var prevSource = this._source;
  _checkSource(source);
  if (prevSource === source) {
    return Promise.resolve();
  }
  // If layer is not instantiated just store the new status
  if (!this._internalModel) {
    this._source = source;
    this.trigger('sourceChanged', this);
    return Promise.resolve();
  }
  // If layer has been instantiated
  // If the source already has an engine and is different from the layer's engine throw an error.
  if (source.$getEngine() && source.$getEngine() !== this._internalModel._engine) {
    throw new CartoValidationError('layer', 'differentSourceClient');
  }
  // If source has no engine use the layer engine.
  if (!source.$getEngine()) {
    source.$setEngine(this._engine);
  }
  // Update the internalModel and return a promise
  this._internalModel.set('source', source.$getInternalModel(), { silent: true });
  return this._engine.reload().then(function () {
    this._source = source;
    this.trigger('sourceChanged', this);
  }.bind(this)).catch(_rejectAndTriggerError.bind(this));
};

/**
 * Get the current source for this layer.
 *
 * @return {carto.source.Base} Current source
 * @api
 */
Layer.prototype.getSource = function () {
  return this._source;
};

/**
 * Set new columns for featureClick events.
 *
 * @param {Array<string>} columns - An array containing column names
 * @fires error
 * @return {Promise}
 * @api
 */
Layer.prototype.setFeatureClickColumns = function (columns) {
  var prevColumns = this._featureClickColumns;
  _checkColumns(columns);
  if (_areColumnsTheSame(columns, prevColumns)) {
    return Promise.resolve();
  }
  // If layer is not instantiated just store the new status
  if (!this._internalModel) {
    this._featureClickColumns = columns;
    return Promise.resolve();
  }
  // Update the internalModel and return a promise
  this._internalModel.infowindow.fields.set(_getInteractivityFields(columns).fields, { silent: true });
  return this._engine.reload().then(function () {
    this._featureClickColumns = columns;
  }.bind(this)).catch(_rejectAndTriggerError.bind(this));
};

/**
 * Get the columns available in featureClicked events.
 *
 * @return  {Array<string>} Column names available in featureClicked events
 * @api
 */
Layer.prototype.getFeatureClickColumns = function () {
  return this._featureClickColumns;
};

/**
 * Set new columns for featureOver events.
 *
 * @param {Array<string>} columns - An array containing column names
 * @fires error
 * @return {Promise}
 * @api
 */
Layer.prototype.setFeatureOverColumns = function (columns) {
  var prevColumns = this._featureOverColumns;
  _checkColumns(columns);
  if (_areColumnsTheSame(columns, prevColumns)) {
    return Promise.resolve();
  }
  // If layer is not instantiated just store the new status
  if (!this._internalModel) {
    this._featureOverColumns = columns;
    return Promise.resolve();
  }
  // Update the internalModel and return a promise
  this._internalModel.tooltip.fields.set(_getInteractivityFields(columns).fields, { silent: true });
  return this._engine.reload().then(function () {
    this._featureOverColumns = columns;
  }.bind(this)).catch(_rejectAndTriggerError.bind(this));
};

/**
 * Get the columns available in featureOver events.
 *
 * @return  {Array<string>} Column names available in featureOver events
 * @api
 */
Layer.prototype.getFeatureOverColumns = function () {
  return this._featureOverColumns;
};

/**
 * Hides the layer.
 *
 * @fires visibilityChanged
 * @return {carto.layer.Layer} this
 * @api
 */
Layer.prototype.hide = function () {
  var prevStatus = this._visible;
  this._visible = false;
  if (this._internalModel) {
    this._internalModel.set('visible', false);
  }
  if (prevStatus) {
    this.trigger('visibilityChanged', false);
  }
  return this;
};

/**
 * Shows the layer.
 *
 * @fires visibilityChanged
 * @return {carto.layer.Layer} this
 * @api
 */
Layer.prototype.show = function () {
  var prevStatus = this._visible;
  this._visible = true;
  if (this._internalModel) {
    this._internalModel.set('visible', true);
  }
  if (!prevStatus) {
    this.trigger('visibilityChanged', false);
  }
  return this;
};

/**
 * Change the layer's visibility.
 *
 * @fires visibilityChanged
 * @return {carto.layer.Layer} this
 */
Layer.prototype.toggle = function () {
  return this.isVisible() ? this.hide() : this.show();
};

/**
 * Return true if the layer is visible and false when not visible.
 *
 * @return {boolean} - A boolean value indicating the layer's visibility
 * @api
 */
Layer.prototype.isVisible = function () {
  return this._visible;
};

/**
 * Return `true` if the layer is not visible and `false` when visible.
 *
 * @return {boolean} - A boolean value indicating the layer's visibility
 * @api
 */
Layer.prototype.isHidden = function () {
  return !this.isVisible();
};

/**
 * Return true if the layer has interactivity.
 *
 * @return {boolean} - A boolean value indicating the layer's interactivity
 * @api
 */
Layer.prototype.isInteractive = function () {
  return this.getFeatureClickColumns().length > 0 || this.getFeatureOverColumns().length > 0;
};

/**
 * Set the layer's order.
 *
 * @param {number} index - new order index for the layer.
 *
 * @return {Promise}
 * @api
 */
Layer.prototype.setOrder = function (index) {
  if (!this._client) {
    return Promise.resolve();
  }
  return this._client.moveLayer(this, index);
};

/**
 * Move the layer to the back.
 *
 * @return {Promise}
 * @api
 */
Layer.prototype.bringToBack = function () {
  return this.setOrder(0);
};

/**
 * Move the layer to the front.
 *
 * @return {Promise}
 * @api
 */
Layer.prototype.bringToFront = function () {
  return this.setOrder(this._client._layers.size() - 1);
};

// Private functions.

Layer.prototype._createInternalModel = function (engine) {
  var internalModel = new CartoDBLayer({
    id: this._id,
    source: this._source.$getInternalModel(),
    cartocss: this._style.getContent(),
    visible: this._visible,
    infowindow: _getInteractivityFields(this._featureClickColumns),
    tooltip: _getInteractivityFields(this._featureOverColumns),
    minzoom: this._minzoom,
    maxzoom: this._maxzoom
  }, {
    engine: engine,
    aggregation: this._aggregation
  });

  internalModel.on('change:meta', function (layer, data) {
    var rules = data.cartocss_meta.rules;
    var styleMetadataList = metadataParser.getMetadataFromRules(rules);

    /**
     * Event fired by {@link carto.layer.Layer} when the style contains any TurboCarto ramp.
     *
     * @typedef {object} carto.layer.MetadataEvent
     * @property {carto.layer.metadata.Base[]} styles - List of style metadata objects
     * @api
     */
    var metadata = { styles: styleMetadataList };

    this.trigger('metadataChanged', metadata);
  }, this);

  internalModel.on('change:error', function (model, value) {
    if (value && _isStyleError(value)) {
      this._style.$setError(new CartoError(value));
    } else if (value) {
      this.trigger(EVENTS.ERROR, new CartoError(value));
    }
  }, this);

  return internalModel;
};

// Internal functions.

Layer.prototype.$setClient = function (client) {
  // Exit if the client is already set or
  // it has a different engine than the layer
  if (this._client || this._engine && client._engine !== this._engine) {
    return;
  }
  this._client = client;
};

Layer.prototype.$setEngine = function (engine) {
  if (this._engine) {
    return;
  }
  this._engine = engine;
  this._source.$setEngine(engine);
  this._style.$setEngine(engine);
  if (!this._internalModel) {
    this._internalModel = this._createInternalModel(engine);
    this._style.on('$changed', function (style) {
      this._internalModel.set('cartocss', style.getContent(), { silent: true });
    }, this);
  }
};

// Scope functions

/**
 * Transform the columns array into the format expected by the CartoDBLayer.
 */
function _getInteractivityFields(columns) {
  var fields = columns.map(function (column, index) {
    return {
      name: column,
      title: true,
      position: index
    };
  });

  return {
    fields: fields
  };
}

function _checkStyle(style) {
  if (!(style instanceof StyleBase)) {
    throw new CartoValidationError('layer', 'nonValidStyle');
  }
}

function _checkSource(source) {
  if (!(source instanceof SourceBase)) {
    throw new CartoValidationError('layer', 'nonValidSource');
  }
}

function _checkColumns(columns) {
  if (_.any(columns, function (item) {
    return !_.isString(item);
  })) {
    throw new CartoValidationError('layer', 'nonValidColumns');
  }
}

/**
 * Return true when a windshaft error is because a styling error.
 */
function _isStyleError(windshaftError) {
  return windshaftError.message && windshaftError.message.indexOf('style') >= 0;
}

function _rejectAndTriggerError(err) {
  var error = new CartoError(err);
  this.trigger(EVENTS.ERROR, error);
  return Promise.reject(error);
}

function _areColumnsTheSame(newColumns, oldColumns) {
  return newColumns.length === oldColumns.length && _.isEmpty(_.difference(newColumns, oldColumns));
}

/**
 * When there are aggregated columns and interactivity columns they must agree
 */
function _validateAggregationColumnsAndInteractivity(aggregationColumns, clickColumns, overColumns) {
  var aggColumns = aggregationColumns && Object.keys(aggregationColumns) || [];

  _validateColumnsConcordance(aggColumns, clickColumns, 'featureClick');
  _validateColumnsConcordance(aggColumns, overColumns, 'featureOver');
}

function _validateColumnsConcordance(aggColumns, interactivityColumns, interactivity) {
  if (interactivityColumns.length > 0 && aggColumns.length > 0) {
    var notInAggregation = _.filter(interactivityColumns, function (clickColumn) {
      return !_.contains(aggColumns, clickColumn);
    });

    if (notInAggregation.length > 0) {
      throw new CartoValidationError('layer', 'wrongInteractivityColumns[' + notInAggregation.join(', ') + ']#' + interactivity);
    }
  }
}

/**
 * @typedef {object} LatLng
 * @property {number} lat - Latitude
 * @property {number} lng - Longitude
 * @api
 */

/**
 * Fired when the source has changed. Handler gets a parameter with the new source.
 *
 * @event sourceChanged
 * @type {carto.layer.Layer}
 * @api
 */

/**
 * Fired when the style has changed. Handler gets a parameter with the new style.
 *
 * @event styleChanged
 * @type {carto.layer.Layer}
 * @api
 */

/**
 * Fired when style metadata has changed.
 *
 * @event metadataChanged
 * @type {carto.layer.MetadataEvent}
 * @api
 */

module.exports = Layer;

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global L */
var _ = __webpack_require__(0);
var Layer = __webpack_require__(23);
var constants = __webpack_require__(5);
var triggerLayerFeatureEvent = __webpack_require__(36);
var LeafletCartoLayerGroupView = __webpack_require__(89);
var CartoError = __webpack_require__(4);

/**
 * This object is a custom Leaflet layer to enable feature interactivity
 * using an internal LeafletCartoLayerGroupView instance.
 *
 * There are two overwritten functions:
 * - addTo: when the layer is added to a map it also creates a LeafletCartoLayerGroupView
 *          object called `_internalView` in order to enable the feature events
 * - removeFrom: when the layer is removed from a map it also removes the feature events
 *               listeners, triggers a 'remove' event and removes the `_internalView`
 *
 * NOTE: It also contains the feature events handlers. That's why it requires the carto layers array.
 */
var LeafletLayer = L.TileLayer.extend({
  options: {
    opacity: 0.99,
    maxZoom: 30,
    attribution: constants.ATTRIBUTION
  },

  initialize: function initialize(layers, engine, options) {
    _.extend(this.options, options);

    this._layers = layers;
    this._engine = engine;
    this._internalView = null;

    this._hoveredLayers = [];
  },

  addTo: function addTo(map) {
    if (!this._internalView) {
      this._internalView = new LeafletCartoLayerGroupView(this._engine._cartoLayerGroup, {
        nativeMap: map,
        nativeLayer: this
      });
      this._internalView.on('featureClick', this._onFeatureClick, this);
      this._internalView.on('featureOver', this._onFeatureOver, this);
      this._internalView.on('featureOut', this._onFeatureOut, this);
      this._internalView.on('featureError', this._onFeatureError, this);
    }

    return L.TileLayer.prototype.addTo.call(this, map);
  },

  removeFrom: function removeFrom(map) {
    if (this._internalView) {
      this._internalView.off('featureClick');
      this._internalView.off('featureOver');
      this._internalView.off('featureOut');
      this._internalView.off('featureError');
      this._internalView.notifyRemove();
    }
    this._internalView = null;

    return L.TileLayer.prototype.removeFrom.call(this, map);
  },

  setUrl: undefined,

  _setUrl: function _setUrl(url, noDraw) {
    return L.TileLayer.prototype.setUrl.call(this, url, noDraw);
  },

  _onFeatureClick: function _onFeatureClick(internalEvent) {
    var layer = this._layers.findById(internalEvent.layer.id);
    triggerLayerFeatureEvent(Layer.events.FEATURE_CLICKED, internalEvent, layer);
  },

  _onFeatureOver: function _onFeatureOver(internalEvent) {
    var layer = this._layers.findById(internalEvent.layer.id);
    if (layer.isInteractive()) {
      this._hoveredLayers[internalEvent.layerIndex] = true;
      this._map.getContainer().style.cursor = 'pointer';
    }
    triggerLayerFeatureEvent(Layer.events.FEATURE_OVER, internalEvent, layer);
  },

  _onFeatureOut: function _onFeatureOut(internalEvent) {
    var layer = this._layers.findById(internalEvent.layer.id);
    this._hoveredLayers[internalEvent.layerIndex] = false;
    if (_.any(this._hoveredLayers)) {
      this._map.getContainer().style.cursor = 'pointer';
    } else {
      this._map.getContainer().style.cursor = 'auto';
    }
    triggerLayerFeatureEvent(Layer.events.FEATURE_OUT, internalEvent, layer);
  },

  _onFeatureError: function _onFeatureError(error) {
    var cartoError = new CartoError(error);
    _.each(this._layers.toArray(), function (layer) {
      if (layer.isInteractive()) {
        layer.trigger(Layer.events.TILE_ERROR, cartoError);
      }
    });
  }
});

module.exports = LeafletLayer;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

function Layers(layers) {
  this._layers = layers || [];
}

Layers.prototype.add = function (layer) {
  this._layers.push(layer);
  return layer;
};

Layers.prototype.remove = function (layer) {
  return this._layers.splice(this._layers.indexOf(layer), 1);
};

Layers.prototype.size = function () {
  return this._layers.length;
};

Layers.prototype.indexOf = function (layer) {
  return this._layers.indexOf(layer);
};

Layers.prototype.contains = function (layer) {
  return this._layers.indexOf(layer) >= 0;
};

Layers.prototype.findById = function (layerId) {
  return _.find(this._layers, function (layer) {
    return layer.getId() === layerId;
  }, this);
};

Layers.prototype.toArray = function () {
  return this._layers;
};

Layers.prototype.move = function (layer, toIndex) {
  var fromIndex = this._layers.indexOf(layer);
  if (fromIndex >= 0 && fromIndex !== toIndex) {
    this._layers.splice(toIndex, 0, this._layers.splice(fromIndex, 1)[0]);
  }
};

module.exports = Layers;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);

/**
 * Keeps track of subsequent equal requests to the Maps API
 * @param {number} maxNumberOfRequests Maximum number of subsequent requests allowed
 */
var RequestTracker = function RequestTracker(maxNumberOfRequests) {
  this._maxNumberOfRequests = maxNumberOfRequests || 3;
  this.reset();
};

RequestTracker.prototype.track = function (request, response) {
  if (!this.lastRequestEquals(request) || !this.lastResponseEquals(response)) {
    this.reset();
  }

  if (!this.maxNumberOfRequestsReached()) {
    this._lastRequest = request;
    this._lastResponse = response;
    this._numberOfRequests += 1;
  }
};

RequestTracker.prototype.reset = function () {
  this._lastRequest = undefined;
  this._lastResponse = undefined;
  this._numberOfRequests = 0;
};

RequestTracker.prototype.canRequestBePerformed = function (request) {
  return !this.maxNumberOfRequestsReached() || this.maxNumberOfRequestsReached() && !this.lastRequestEquals(request);
};

RequestTracker.prototype.maxNumberOfRequestsReached = function () {
  return this._numberOfRequests === this._maxNumberOfRequests;
};

RequestTracker.prototype.lastRequestEquals = function (request) {
  return this._lastRequest && this._lastRequest.equals(request);
};

RequestTracker.prototype.lastResponseEquals = function (response) {
  return _.isEqual(this._lastResponse, response);
};

module.exports = RequestTracker;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

var LZMA = (function () {
	var action_compress   = 1,
		action_decompress = 2,
		action_update	  = 3;

	function update_progress(percent, callback_num) {
		///TODO: Calculate ETA.
		postMessage({
			action: 3,
			callback_num: callback_num,
			result: percent
		});
	}

	var $moduleName, $moduleBase;

	var _,
		N8000000000000000_longLit = [0, -9223372036854775808],
		N1_longLit = [4294967295, -4294967296],
		P0_longLit = [0, 0],
		P1_longLit = [1, 0],
		P4_longLit = [4, 0],
		P1000_longLit = [4096, 0],
		Pffffff_longLit = [16777215, 0],
		P1000000_longLit = [16777216, 0],
		Pff000000_longLit = [4278190080, 0],
		Pffffffff_longLit = [4294967295, 0],
		P7fffffffffffffff_longLit = [4294967295, 9223372032559808512];

	function getClass_18() {
		return Ljava_lang_Object_2_classLit;
	}

	function Object_0() {
	}

	_ = Object_0.prototype = {};
	_.getClass$ = getClass_18;
	_.typeMarker$ = nullMethod;
	_.typeId$ = 1;
	function getClass_22() {
		return Ljava_lang_Throwable_2_classLit;
	}

	function Throwable() {
	}

	_ = Throwable.prototype = new Object_0();
	_.getClass$ = getClass_22;
	_.typeId$ = 3;
	_.detailMessage = null;
	function getClass_13() {
		return Ljava_lang_Exception_2_classLit;
	}

	function Exception() {
	}

	_ = Exception.prototype = new Throwable();
	_.getClass$ = getClass_13;
	_.typeId$ = 4;
	function $RuntimeException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}

	function getClass_19() {
		return Ljava_lang_RuntimeException_2_classLit;
	}

	function RuntimeException() {
	}

	_ = RuntimeException.prototype = new Exception();
	_.getClass$ = getClass_19;
	_.typeId$ = 5;
	function $JavaScriptException(this$static, e) {
		return this$static;
	}

	function getClass_0() {
		return Lcom_google_gwt_core_client_JavaScriptException_2_classLit;
	}

	function JavaScriptException() {
	}

	_ = JavaScriptException.prototype = new RuntimeException();
	_.getClass$ = getClass_0;
	_.typeId$ = 6;
	function $append(a, x) {
		a[a.explicitLength++] = x;
	}

	function $appendNonNull(a, x) {
		a[a.explicitLength++] = x;
	}

	function $toString(a) {
		var s_0, s;
		s_0 = (s = a.join('') , a.length = a.explicitLength = 0 , s);
		a[a.explicitLength++] = s_0;
		return s_0;
	}

	function createFromSeed(seedType, length_0) {
		var array = new Array(length_0);
		if (seedType > 0) {
			var value = [null, 0, false, [0, 0]][seedType];
			for (var i = 0; i < length_0; ++i) {
				array[i] = value;
			}
		}
		return array;
	}

	function getClass_2() {
		return this.arrayClass$;
	}

	function initDim(arrayClass, typeId, queryId, length_0, seedType) {
		var result;
		result = createFromSeed(seedType, length_0);
		$clinit_4();
		wrapArray(result, expandoNames_0, expandoValues_0);
		result.arrayClass$ = arrayClass;
		result.typeId$ = typeId;
		result.queryId$ = queryId;
		return result;
	}

	function initValues(arrayClass, typeId, queryId, array) {
		$clinit_4();
		wrapArray(array, expandoNames_0, expandoValues_0);
		array.arrayClass$ = arrayClass;
		array.typeId$ = typeId;
		array.queryId$ = queryId;
		return array;
	}

	function setCheck(array, index, value) {
		if (value != null) {
			if (array.queryId$ > 0 && !canCastUnsafe(value.typeId$, array.queryId$)) {
			throw new ArrayStoreException();
			}
			if (array.queryId$ < 0 && (value.typeMarker$ == nullMethod || value.typeId$ == 2)) {
			throw new ArrayStoreException();
			}
		}
		return array[index] = value;
	}

	function Array_0() {
	}

	_ = Array_0.prototype = new Object_0();
	_.getClass$ = getClass_2;
	_.typeId$ = 0;
	_.arrayClass$ = null;
	_.length = 0;
	_.queryId$ = 0;
	function $clinit_4() {
		$clinit_4 = nullMethod;
		expandoNames_0 = [];
		expandoValues_0 = [];
		initExpandos(new Array_0(), expandoNames_0, expandoValues_0);
	}

	function initExpandos(protoType, expandoNames, expandoValues) {
		var i = 0, value;
		for (var name_0 in protoType) {
			if (value = protoType[name_0]) {
			expandoNames[i] = name_0;
			expandoValues[i] = value;
			++i;
			}
		}
	}

	function wrapArray(array, expandoNames, expandoValues) {
		$clinit_4();
		for (var i = 0, c = expandoNames.length; i < c; ++i) {
			array[expandoNames[i]] = expandoValues[i];
		}
	}

	var expandoNames_0, expandoValues_0;
	function canCast(srcId, dstId) {
		return srcId && !!typeIdArray[srcId][dstId];
	}

	function canCastUnsafe(srcId, dstId) {
		return srcId && typeIdArray[srcId][dstId];
	}

	function dynamicCast(src, dstId) {
		if (src != null && !canCastUnsafe(src.typeId$, dstId)) {
			throw new ClassCastException();
		}
		return src;
	}

	function instanceOf(src, dstId) {
		return src != null && canCast(src.typeId$, dstId);
	}

	function round_int(x) {
		return ~~Math.max(Math.min(x, 2147483647), -2147483648);
	}

	var typeIdArray = [
			{},
			{},
			{1:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1, 10:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1},
			{2:1, 11:1},
			{2:1},
			{2:1},
			{2:1},
			{4:1},
			{5:1},
			{6:1},
			{7:1},
			{8:1},
			{9:1}
		];

	function caught(e) {
		if (e != null && canCast(e.typeId$, 2)) {
			return e;
		}
		return $JavaScriptException(new JavaScriptException(), e);
	}

	function add(a, b) {
		var newHigh, newLow;
		newHigh = a[1] + b[1];
		newLow = a[0] + b[0];
		return create(newLow, newHigh);
	}

	function addTimes(accum, a, b) {
		if (a == 0) {
			return accum;
		}
		if (b == 0) {
			return accum;
		}
		return add(accum, create(a * b, 0));
	}

	function and(a, b) {
		return makeFromBits(~~Math.max(Math.min(a[1] / 4294967296, 2147483647), -2147483648) & ~~Math.max(Math.min(b[1] / 4294967296, 2147483647), -2147483648), lowBits_0(a) & lowBits_0(b));
	}

	function compare(a, b) {
		var nega, negb;
		if (a[0] == b[0] && a[1] == b[1]) {
			return 0;
		}
		nega = a[1] < 0;
		negb = b[1] < 0;
		if (nega && !negb) {
			return -1;
		}
		if (!nega && negb) {
			return 1;
		}
		if (sub(a, b)[1] < 0) {
			return -1;
		}
		else {
			return 1;
		}
	}

	function create(valueLow, valueHigh) {
		var diffHigh, diffLow;
		valueHigh %= 1.8446744073709552E19;
		valueLow %= 1.8446744073709552E19;
		diffHigh = valueHigh % 4294967296;
		diffLow = Math.floor(valueLow / 4294967296) * 4294967296;
		valueHigh = valueHigh - diffHigh + diffLow;
		valueLow = valueLow - diffLow + diffHigh;
		while (valueLow < 0) {
			valueLow += 4294967296;
			valueHigh -= 4294967296;
		}
		while (valueLow > 4294967295) {
			valueLow -= 4294967296;
			valueHigh += 4294967296;
		}
		valueHigh = valueHigh % 1.8446744073709552E19;
		while (valueHigh > 9223372032559808512) {
			valueHigh -= 1.8446744073709552E19;
		}
		while (valueHigh < -9223372036854775808) {
			valueHigh += 1.8446744073709552E19;
		}
		return [valueLow, valueHigh];
	}

	function div(a, b) {
		var approx, deltaRem, deltaResult, halfa, rem, result;
		if (b[0] == 0 && b[1] == 0) {
			throw $ArithmeticException(new ArithmeticException(), '/ by zero');
		}
		if (a[0] == 0 && a[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			if (eq(b, ONE) || eq(b, NEG_ONE)) {
				return MIN_VALUE;
			}
			halfa = shr(a, 1);
			approx = shl(div(halfa, b), 1);
			rem = sub(a, mul(b, approx));
			return add(approx, div(rem, b));
		}
		if (eq(b, MIN_VALUE)) {
			return ZERO;
		}
		if (a[1] < 0) {
			if (b[1] < 0) {
				return div(neg(a), neg(b));
			} else {
				return neg(div(neg(a), b));
			}
		}
		if (b[1] < 0) {
			return neg(div(a, neg(b)));
		}
		result = ZERO;
		rem = a;
		while (compare(rem, b) >= 0) {
			deltaResult = fromDouble(Math.floor(toDoubleRoundDown(rem) / toDoubleRoundUp(b)));
			if (deltaResult[0] == 0 && deltaResult[1] == 0) {
				deltaResult = ONE;
			}
			deltaRem = mul(deltaResult, b);
			result = add(result, deltaResult);
			rem = sub(rem, deltaRem);
		}
		return result;
	}

	function eq(a, b) {
		return a[0] == b[0] && a[1] == b[1];
	}

	function fromDouble(value) {
		if (isNaN(value)) {
			return $clinit_10() , ZERO;
		}
		if (value < -9223372036854775808) {
			return $clinit_10() , MIN_VALUE;
		}
		if (value >= 9223372036854775807) {
			return $clinit_10() , MAX_VALUE;
		}
		if (value > 0) {
			return create(Math.floor(value), 0);
		} else {
			return create(Math.ceil(value), 0);
		}
	}

	function fromInt(value) {
		var rebase, result;
		if (value > -129 && value < 128) {
			rebase = value + 128;
			result = ($clinit_9() , boxedValues)[rebase];
			if (result == null) {
				result = boxedValues[rebase] = internalFromInt(value);
			}
			return result;
		}
		return internalFromInt(value);
	}

	function internalFromInt(value) {
		if (value >= 0) {
			return [value, 0];
		} else {
			return [value + 4294967296, -4294967296];
		}
	}

	function lowBits_0(a) {
		if (a[0] >= 2147483648) {
			return ~~Math.max(Math.min(a[0] - 4294967296, 2147483647), -2147483648);
		} else {
			return ~~Math.max(Math.min(a[0], 2147483647), -2147483648);
		}
	}

	function makeFromBits(highBits, lowBits) {
		var high, low;
		high = highBits * 4294967296;
		low = lowBits;
		if (lowBits < 0) {
			low += 4294967296;
		}
		return [low, high];
	}

	function mul(a, b) {
		var a1, a2, a3, a4, b1, b2, b3, b4, res;
		if (a[0] == 0 && a[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (b[0] == 0 && b[1] == 0) {
			return $clinit_10() , ZERO;
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return multByMinValue(b);
		}
		if (eq(b, MIN_VALUE)) {
			return multByMinValue(a);
		}
		if (a[1] < 0) {
			if (b[1] < 0) {
				return mul(neg(a), neg(b));
			} else {
				return neg(mul(neg(a), b));
			}
		}
		if (b[1] < 0) {
			return neg(mul(a, neg(b)));
		}
		if (compare(a, TWO_PWR_24) < 0 && compare(b, TWO_PWR_24) < 0) {
			return create((a[1] + a[0]) * (b[1] + b[0]), 0);
		}
		a3 = a[1] % 281474976710656;
		a4 = a[1] - a3;
		a1 = a[0] % 65536;
		a2 = a[0] - a1;
		b3 = b[1] % 281474976710656;
		b4 = b[1] - b3;
		b1 = b[0] % 65536;
		b2 = b[0] - b1;
		res = ZERO;
		res = addTimes(res, a4, b1);
		res = addTimes(res, a3, b2);
		res = addTimes(res, a3, b1);
		res = addTimes(res, a2, b3);
		res = addTimes(res, a2, b2);
		res = addTimes(res, a2, b1);
		res = addTimes(res, a1, b4);
		res = addTimes(res, a1, b3);
		res = addTimes(res, a1, b2);
		res = addTimes(res, a1, b1);
		return res;
	}

	function multByMinValue(a) {
		if ((lowBits_0(a) & 1) == 1) {
			return $clinit_10() , MIN_VALUE;
		} else {
			return $clinit_10() , ZERO;
		}
	}

	function neg(a) {
		var newHigh, newLow;
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return MIN_VALUE;
		}
		newHigh = -a[1];
		newLow = -a[0];
		if (newLow > 4294967295) {
			newLow -= 4294967296;
			newHigh += 4294967296;
		}
		if (newLow < 0) {
			newLow += 4294967296;
			newHigh -= 4294967296;
		}
		return [newLow, newHigh];
	}

	function pwrAsDouble(n) {
		if (n <= 30) {
			return 1 << n;
		} else {
			return pwrAsDouble(30) * pwrAsDouble(n - 30);
		}
	}

	function shl(a, n) {
		var diff, newHigh, newLow, twoToN;
		n &= 63;
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			if (n == 0) {
				return a;
			} else {
				return ZERO;
			}
		}
		if (a[1] < 0) {
			return neg(shl(neg(a), n));
		}
		twoToN = pwrAsDouble(n);
		newHigh = a[1] * twoToN % 1.8446744073709552E19;
		newLow = a[0] * twoToN;
		diff = newLow - newLow % 4294967296;
		newHigh += diff;
		newLow -= diff;
		if (newHigh >= 9223372036854775807) {
			newHigh -= 1.8446744073709552E19;
		}
		return [newLow, newHigh];
	}

	function shr(a, n) {
		var newHigh, newLow, shiftFact;
		n &= 63;
		shiftFact = pwrAsDouble(n);
		newHigh = a[1] / shiftFact;
		newLow = Math.floor(a[0] / shiftFact);
		return create(newLow, newHigh);
	}

	function shru(a, n) {
		var sr;
		n &= 63;
		sr = shr(a, n);
		if (a[1] < 0) {
			sr = add(sr, shl(($clinit_10() , TWO), 63 - n));
		}
		return sr;
	}

	function sub(a, b) {
		var newHigh, newLow;
		newHigh = a[1] - b[1];
		newLow = a[0] - b[0];
		return create(newLow, newHigh);
	}

	function toDoubleRoundDown(a) {
		var diff, magnitute, toSubtract;
		magnitute = round_int(Math.log(a[1]) / ($clinit_10() , LN_2));
		if (magnitute <= 48) {
			return a[1] + a[0];
		} else {
			diff = magnitute - 48;
			toSubtract = (1 << diff) - 1;
			return a[1] + (a[0] - toSubtract);
		}
	}

	function toDoubleRoundUp(a) {
		var diff, magnitute, toAdd;
		magnitute = round_int(Math.log(a[1]) / ($clinit_10() , LN_2));
		if (magnitute <= 48) {
			return a[1] + a[0];
		} else {
			diff = magnitute - 48;
			toAdd = (1 << diff) - 1;
			return a[1] + (a[0] + toAdd);
		}
	}

	function toString_0(a) {
		var digits, rem, remDivTenPower, res, tenPowerLong, zeroesNeeded;
		if (a[0] == 0 && a[1] == 0) {
			return '0';
		}
		if (eq(a, ($clinit_10() , MIN_VALUE))) {
			return '-9223372036854775808';
		}
		if (a[1] < 0) {
			return '-' + toString_0(neg(a));
		}
		rem = a;
		res = '';
		while (!(rem[0] == 0 && rem[1] == 0)) {
			tenPowerLong = fromInt(1000000000);
			remDivTenPower = div(rem, tenPowerLong);
			digits = '' + lowBits_0(sub(rem, mul(remDivTenPower, tenPowerLong)));
			rem = remDivTenPower;
			if (!(rem[0] == 0 && rem[1] == 0)) {
				zeroesNeeded = 9 - digits.length;
				for (; zeroesNeeded > 0; --zeroesNeeded) {
					digits = '0' + digits;
				}
			}
			res = digits + res;
		}
		return res;
	}

	function $clinit_9() {
		$clinit_9 = nullMethod;
		boxedValues = initDim(_3_3D_classLit, 0, 9, 256, 0);
	}

	var boxedValues;
	function $clinit_10() {
		$clinit_10 = nullMethod;
		LN_2 = Math.log(2);
		MAX_VALUE = P7fffffffffffffff_longLit;
		MIN_VALUE = N8000000000000000_longLit;
		NEG_ONE = fromInt(-1);
		ONE = fromInt(1);
		TWO = fromInt(2);
		TWO_PWR_24 = P1000000_longLit;
		ZERO = fromInt(0);
	}

	var LN_2, MAX_VALUE, MIN_VALUE, NEG_ONE, ONE, TWO, TWO_PWR_24, ZERO;
	function getClass_6() {
		return Ljava_io_InputStream_2_classLit;
	}

	function InputStream() {
	}

	_ = InputStream.prototype = new Object_0();
	_.getClass$ = getClass_6;
	_.typeId$ = 0;
	function $ByteArrayInputStream(this$static, buf) {
		$ByteArrayInputStream_0(this$static, buf, 0, buf.length);
		return this$static;
	}

	function $ByteArrayInputStream_0(this$static, buf, off, len) {
		this$static.buf = buf;
		this$static.pos = off;
		this$static.count = off + len;
		if (this$static.count > buf.length)
			this$static.count = buf.length;
		return this$static;
	}

	function $read(this$static) {
		if (this$static.pos >= this$static.count)
			return -1;
		return this$static.buf[this$static.pos++] & 255;
	}

	function $read_0(this$static, buf, off, len) {
		if (this$static.pos >= this$static.count)
			return -1;
		len = min(len, this$static.count - this$static.pos);
		arraycopy(this$static.buf, this$static.pos, buf, off, len);
		this$static.pos += len;
		return len;
	}

	function getClass_3() {
		return Ljava_io_ByteArrayInputStream_2_classLit;
	}

	function ByteArrayInputStream() {
	}

	_ = ByteArrayInputStream.prototype = new InputStream();
	_.getClass$ = getClass_3;
	_.typeId$ = 0;
	_.buf = null;
	_.count = 0;
	_.pos = 0;
	function getClass_7() {
		return Ljava_io_OutputStream_2_classLit;
	}

	function OutputStream() {
	}

	_ = OutputStream.prototype = new Object_0();
	_.getClass$ = getClass_7;
	_.typeId$ = 0;
	function $ByteArrayOutputStream(this$static) {
		this$static.buf = initDim(_3B_classLit, 0, -1, 32, 1);
		return this$static;
	}

	function $ensureCapacity(this$static, len) {
		var newbuf;
		if (len <= this$static.buf.length)
			return;
		len = max(len, this$static.buf.length * 2);
		newbuf = initDim(_3B_classLit, 0, -1, len, 1);
		arraycopy(this$static.buf, 0, newbuf, 0, this$static.buf.length);
		this$static.buf = newbuf;
	}

	function $toByteArray(this$static) {
		var data;
		data = initDim(_3B_classLit, 0, -1, this$static.count, 1);
		arraycopy(this$static.buf, 0, data, 0, this$static.count);
		return data;
	}

	function $write(this$static, b) {
		$ensureCapacity(this$static, this$static.count + 1);
		this$static.buf[this$static.count++] = b << 24 >> 24;
	}

	function $write_0(this$static, buf, off, len) {
		$ensureCapacity(this$static, this$static.count + len);
		arraycopy(buf, off, this$static.buf, this$static.count, len);
		this$static.count += len;
	}

	function getClass_4() {
		return Ljava_io_ByteArrayOutputStream_2_classLit;
	}

	function ByteArrayOutputStream() {
	}

	_ = ByteArrayOutputStream.prototype = new OutputStream();
	_.getClass$ = getClass_4;
	_.typeId$ = 0;
	_.buf = null;
	_.count = 0;
	function $IOException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}

	function getClass_5() {
		return Ljava_io_IOException_2_classLit;
	}

	function IOException() {
	}

	_ = IOException.prototype = new Exception();
	_.getClass$ = getClass_5;
	_.typeId$ = 7;
	function $ArithmeticException(this$static, explanation) {
		this$static.detailMessage = explanation;
		return this$static;
	}

	function getClass_8() {
		return Ljava_lang_ArithmeticException_2_classLit;
	}

	function ArithmeticException() {
	}

	_ = ArithmeticException.prototype = new RuntimeException();
	_.getClass$ = getClass_8;
	_.typeId$ = 8;
	function $ArrayStoreException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}

	function getClass_9() {
		return Ljava_lang_ArrayStoreException_2_classLit;
	}

	function ArrayStoreException() {
	}

	_ = ArrayStoreException.prototype = new RuntimeException();
	_.getClass$ = getClass_9;
	_.typeId$ = 9;
	function createForArray(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}

	function createForClass(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}

	function createForEnum(packageName, className) {
		var clazz;
		clazz = new Class();
		clazz.typeName = packageName + className;
		return clazz;
	}

	function getClass_11() {
		return Ljava_lang_Class_2_classLit;
	}

	function Class() {
	}

	_ = Class.prototype = new Object_0();
	_.getClass$ = getClass_11;
	_.typeId$ = 0;
	_.typeName = null;
	function getClass_10() {
		return Ljava_lang_ClassCastException_2_classLit;
	}

	function ClassCastException() {
	}

	_ = ClassCastException.prototype = new RuntimeException();
	_.getClass$ = getClass_10;
	_.typeId$ = 12;
	function getClass_12() {
		return Ljava_lang_Enum_2_classLit;
	}

	function Enum() {
	}

	_ = Enum.prototype = new Object_0();
	_.getClass$ = getClass_12;
	_.typeId$ = 0;
	function $IllegalArgumentException(this$static, message) {
		this$static.detailMessage = message;
		return this$static;
	}

	function getClass_14() {
		return Ljava_lang_IllegalArgumentException_2_classLit;
	}

	function IllegalArgumentException() {
	}

	_ = IllegalArgumentException.prototype = new RuntimeException();
	_.getClass$ = getClass_14;
	_.typeId$ = 13;
	function getClass_15() {
		return Ljava_lang_IllegalStateException_2_classLit;
	}

	function IllegalStateException() {
	}

	_ = IllegalStateException.prototype = new RuntimeException();
	_.getClass$ = getClass_15;
	_.typeId$ = 14;
	function getClass_16() {
		return Ljava_lang_IndexOutOfBoundsException_2_classLit;
	}

	function IndexOutOfBoundsException() {
	}

	_ = IndexOutOfBoundsException.prototype = new RuntimeException();
	_.getClass$ = getClass_16;
	_.typeId$ = 15;
	function max(x, y) {
		return x > y?x:y;
	}

	function min(x, y) {
		return x < y?x:y;
	}

	function getClass_17() {
		return Ljava_lang_NullPointerException_2_classLit;
	}

	function NullPointerException() {
	}

	_ = NullPointerException.prototype = new RuntimeException();
	_.getClass$ = getClass_17;
	_.typeId$ = 16;
	function $equals(this$static, other) {
		if (other == null) {
			return false;
		}
		return String(this$static) == other;
	}

	function $getChars(this$static, srcBegin, srcEnd, dst, dstBegin) {
		var srcIdx;
		for (srcIdx = srcBegin; srcIdx < srcEnd; ++srcIdx) {
			dst[dstBegin++] = this$static.charCodeAt(srcIdx);
		}
	}

	function getClass_21() {
		return Ljava_lang_String_2_classLit;
	}

	_ = String.prototype;
	_.getClass$ = getClass_21;
	_.typeId$ = 2;
	function $StringBuilder(this$static) {
		var array;
		this$static.data = (array = [] , array.explicitLength = 0 , array);
		return this$static;
	}

	function getClass_20() {
		return Ljava_lang_StringBuilder_2_classLit;
	}

	function StringBuilder() {
	}

	_ = StringBuilder.prototype = new Object_0();
	_.getClass$ = getClass_20;
	_.typeId$ = 0;
	function arraycopy(src, srcOfs, dest, destOfs, len) {
		var destArray, destEnd, destTypeName, destlen, i, srcArray, srcTypeName, srclen;

		if (src == null || dest == null) {
			throw new NullPointerException();
		}

		srcTypeName  = (src.typeMarker$  == nullMethod || src.typeId$  == 2 ? src.getClass$()  : Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;
		destTypeName = (dest.typeMarker$ == nullMethod || dest.typeId$ == 2 ? dest.getClass$() : Lcom_google_gwt_core_client_JavaScriptObject_2_classLit).typeName;

		if (srcTypeName.charCodeAt(0) != 91 || destTypeName.charCodeAt(0) != 91) {
			throw $ArrayStoreException(new ArrayStoreException(), 'Must be array types');
		}
		if (srcTypeName.charCodeAt(1) != destTypeName.charCodeAt(1)) {
			throw $ArrayStoreException(new ArrayStoreException(), 'Array types must match');
		}

		srclen  = src.length;
		destlen = dest.length;
		if (srcOfs < 0 || destOfs < 0 || len < 0 || srcOfs + len > srclen || destOfs + len > destlen) {
			throw new IndexOutOfBoundsException();
		}
		if ((srcTypeName.charCodeAt(1) == 76 || srcTypeName.charCodeAt(1) == 91) && !$equals(srcTypeName, destTypeName)) {
			srcArray  = dynamicCast(src, 3);
			destArray = dynamicCast(dest, 3);
			if ((src == null ? null : src) === (dest == null ? null : dest) && srcOfs < destOfs) {
				srcOfs += len;
				for (destEnd = destOfs + len; destEnd-- > destOfs;) {
					setCheck(destArray, destEnd, srcArray[--srcOfs]);
				}
			} else {
				for (destEnd = destOfs + len; destOfs < destEnd;) {
					setCheck(destArray, destOfs++, srcArray[srcOfs++]);
				}
			}
		} else {
			for (i = 0; i < len; ++i) {
				dest[destOfs + i] = src[srcOfs + i]
			}
		}
	}


	function $configure(this$static, encoder) {
	if (!$SetDictionarySize_0(encoder, 1 << this$static.dictionarySize))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetNumFastBytes(encoder, this$static.fb))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetMatchFinder(encoder, this$static.matchFinder))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	if (!$SetLcLpPb_0(encoder, this$static.lc, this$static.lp, this$static.pb))
		throw $RuntimeException(new RuntimeException(), 'unexpected failure');
	}

	function getClass_23() {
		return Lorg_dellroad_lzma_client_CompressionMode_2_classLit;
	}

	function CompressionMode() {
	}

	_ = CompressionMode.prototype = new Enum();
	_.getClass$ = getClass_23;
	_.typeId$ = 0;
	_.dictionarySize = 0;
	_.fb = 0;
	_.lc = 0;
	_.lp = 0;
	_.matchFinder = 0;
	_.pb = 0;

	function $execute(this$static) {
		var $e0;
		try {
			return $processChunk(this$static.chunker);
		}
		catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				return false;
			} else {
				throw $e0;
			}
		}
	}

	function $init(this$static, input, output, length_0, mode) {
		var encoder, i;
		if (!mode)
			throw $IllegalArgumentException(new IllegalArgumentException(), 'null mode');
		if (compare(length_0, N1_longLit) < 0)
			throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid length ' + toString_0(length_0));
		this$static.length_0 = length_0;
		encoder = $Encoder(new Encoder());
		$configure(mode, encoder);
		encoder._writeEndMark = true;
		$WriteCoderProperties(encoder, output);
		for (i = 0; i < 64; i += 8)
			$write(output, lowBits_0(shr(length_0, i)) & 255);
		this$static.chunker = (encoder._needReleaseMFStream = false , (encoder._inStream = input , encoder._finished = false , $Create_2(encoder) , encoder._rangeEncoder.Stream = output , $Init_4(encoder) , $FillDistancesPrices(encoder) , $FillAlignPrices(encoder) , encoder._lenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._lenEncoder, 1 << encoder._posStateBits) , encoder._repMatchLenEncoder._tableSize = encoder._numFastBytes + 1 - 2 , $UpdateTables(encoder._repMatchLenEncoder, 1 << encoder._posStateBits) , encoder.nowPos64 = P0_longLit , undefined) , $Chunker_0(new Chunker(), encoder));
	}

	function getClass_26() {
		return Lorg_dellroad_lzma_client_LZMACompressor_2_classLit;
	}

	function LZMACompressor() {
	}

	_ = LZMACompressor.prototype = new Object_0();
	_.getClass$ = getClass_26;
	_.typeId$ = 0;
	_.chunker = null;

	function $LZMAByteArrayCompressor(this$static, data, mode) {
		var $e0;
		this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
		try {
			$init(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output, fromInt(data.length), mode);
		} catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				throw $RuntimeException(new RuntimeException(), 'impossible exception');
			} else {
				throw $e0;
			}
		}
		return this$static;
	}

	function getClass_24() {
		return Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit;
	}

	function LZMAByteArrayCompressor() {
	}

	_ = LZMAByteArrayCompressor.prototype = new LZMACompressor();
	_.getClass$ = getClass_24;
	_.typeId$ = 0;
	_.output = null;
	function $execute_0(this$static) {
		var $e0, e;
		try {
			return $processChunk(this$static.chunker);
		}
		catch ($e0) {
			$e0 = caught($e0);
			if (instanceOf($e0, 10)) {
				e = $e0;
				this$static.exception = e;
				return false;
			} else {
				throw $e0;
			}
		}
	}

	function $init_0(this$static, input, output) {
		var decoder,
			hex_length = "",
			i,
			properties,
			r,
			tmp_length;

		properties = initDim(_3B_classLit, 0, -1, 5, 1);
		for (i = 0; i < properties.length; ++i) {
			r = $read(input);
			if (r == -1)
				throw $IOException(new IOException(), 'truncated input');
			properties[i] = r << 24 >> 24;
		}
		decoder = $Decoder(new Decoder());
		if (!$SetDecoderProperties(decoder, properties))
			throw $IOException(new IOException(), 'corrupted input');

		for (i = 0; i < 64; i += 8) {
			r = $read(input);
			if (r == -1)
				throw $IOException(new IOException(), 'truncated input');
			r = r.toString(16);
			if (r.length == 1) r = "0" + r;
			hex_length = r + "" + hex_length;
		}

		/// Was the length set in the header (if it was compressed from a stream, the length is all f's).
		if (hex_length.toLowerCase() == "ffffffffffffffffff" || hex_length == 0) {
			/// The length is unknown, so set to -1.
			this$static.length_0 = N1_longLit;
		} else {
			///NOTE: If there is a problem with the decoder because of the length, you can always set the length to -1 (N1_longLit) which means unknown.
			tmp_length = parseInt(hex_length, 16);
			/// If the length is too long to handle, just set it to unknown.
			if (tmp_length > 4294967295) {
				this$static.length_0 = N1_longLit;
			} else {
				this$static.length_0 = fromDouble(tmp_length);
			}
		}

		this$static.chunker = $CodeInChunks(decoder, input, output, this$static.length_0);
	}

	function getClass_27() {
		return Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit;
	}

	function LZMADecompressor() {
	}

	_ = LZMADecompressor.prototype = new Object_0();
	_.getClass$ = getClass_27;
	_.typeId$ = 0;
	_.chunker = null;
	_.exception = null;
	_.length_0 = P0_longLit;
	function $LZMAByteArrayDecompressor(this$static, data) {
		this$static.output = $ByteArrayOutputStream(new ByteArrayOutputStream());
		$init_0(this$static, $ByteArrayInputStream(new ByteArrayInputStream(), data), this$static.output);
		return this$static;
	}

	function getClass_25() {
		return Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit;
	}

	function LZMAByteArrayDecompressor() {
	}

	_ = LZMAByteArrayDecompressor.prototype = new LZMADecompressor();
	_.getClass$ = getClass_25;
	_.typeId$ = 0;
	_.output = null;
	function $Create_4(this$static, keepSizeBefore, keepSizeAfter, keepSizeReserv) {
		var blockSize;
		this$static._keepSizeBefore = keepSizeBefore;
		this$static._keepSizeAfter = keepSizeAfter;
		blockSize = keepSizeBefore + keepSizeAfter + keepSizeReserv;
		if (this$static._bufferBase == null || this$static._blockSize != blockSize) {
			this$static._bufferBase = null;
			this$static._blockSize = blockSize;
			this$static._bufferBase = initDim(_3B_classLit, 0, -1, this$static._blockSize, 1);
		}
		this$static._pointerToLastSafePosition = this$static._blockSize - keepSizeAfter;
	}

	function $GetIndexByte(this$static, index) {
		return this$static._bufferBase[this$static._bufferOffset + this$static._pos + index];
	}

	function $GetMatchLen(this$static, index, distance, limit) {
		var i, pby;
		if (this$static._streamEndWasReached) {
			if (this$static._pos + index + limit > this$static._streamPos) {
				limit = this$static._streamPos - (this$static._pos + index);
			}
		}
		++distance;
		pby = this$static._bufferOffset + this$static._pos + index;
		for (i = 0; i < limit && this$static._bufferBase[pby + i] == this$static._bufferBase[pby + i - distance]; ++i) {
		}
		return i;
	}

	function $GetNumAvailableBytes(this$static) {
		return this$static._streamPos - this$static._pos;
	}

	function $MoveBlock(this$static) {
		var i, numBytes, offset;
		offset = this$static._bufferOffset + this$static._pos - this$static._keepSizeBefore;
		if (offset > 0) {
			--offset;
		}
		numBytes = this$static._bufferOffset + this$static._streamPos - offset;
		for (i = 0; i < numBytes; ++i) {
			this$static._bufferBase[i] = this$static._bufferBase[offset + i];
		}
		this$static._bufferOffset -= offset;
	}

	function $MovePos_1(this$static) {
		var pointerToPostion;
		++this$static._pos;
		if (this$static._pos > this$static._posLimit) {
			pointerToPostion = this$static._bufferOffset + this$static._pos;
			if (pointerToPostion > this$static._pointerToLastSafePosition) {
				$MoveBlock(this$static);
			}
			$ReadBlock(this$static);
		}
	}

	function $ReadBlock(this$static) {
		var numReadBytes, pointerToPostion, size;
		if (this$static._streamEndWasReached)
			return;
		while (true) {
			size = -this$static._bufferOffset + this$static._blockSize - this$static._streamPos;
			if (size == 0)
				return;
			numReadBytes = $read_0(this$static._stream, this$static._bufferBase, this$static._bufferOffset + this$static._streamPos, size);
			if (numReadBytes == -1) {
				this$static._posLimit = this$static._streamPos;
				pointerToPostion = this$static._bufferOffset + this$static._posLimit;
				if (pointerToPostion > this$static._pointerToLastSafePosition) {
					this$static._posLimit = this$static._pointerToLastSafePosition - this$static._bufferOffset;
				}
				this$static._streamEndWasReached = true;
				return;
			}
			this$static._streamPos += numReadBytes;
			if (this$static._streamPos >= this$static._pos + this$static._keepSizeAfter) {
				this$static._posLimit = this$static._streamPos - this$static._keepSizeAfter;
			}
		}
	}

	function $ReduceOffsets(this$static, subValue) {
		this$static._bufferOffset += subValue;
		this$static._posLimit -= subValue;
		this$static._pos -= subValue;
		this$static._streamPos -= subValue;
	}

	function getClass_40() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit;
	}

	function InWindow() {
	}

	_ = InWindow.prototype = new Object_0();
	_.getClass$ = getClass_40;
	_.typeId$ = 0;
	_._blockSize = 0;
	_._bufferBase = null;
	_._bufferOffset = 0;
	_._keepSizeAfter = 0;
	_._keepSizeBefore = 0;
	_._pointerToLastSafePosition = 0;
	_._pos = 0;
	_._posLimit = 0;
	_._stream = null;
	_._streamEndWasReached = false;
	_._streamPos = 0;
	function $clinit_60() {
		$clinit_60 = nullMethod;
		var i, j, r;
		CrcTable = initDim(_3I_classLit, 0, -1, 256, 1);
		for (i = 0; i < 256; ++i) {
			r = i;
			for (j = 0; j < 8; ++j)
			if ((r & 1) != 0) {
				r = r >>> 1 ^ -306674912;
			} else {
				r >>>= 1;
			}
			CrcTable[i] = r;
		}
	}

	function $Create_3(this$static, historySize, keepAddBufferBefore, matchMaxLen, keepAddBufferAfter) {
		var cyclicBufferSize, hs, windowReservSize;
		if (historySize > 1073741567) {
			return false;
		}

		this$static._cutValue = 16 + (matchMaxLen >> 1);
		windowReservSize = ~~((historySize + keepAddBufferBefore + matchMaxLen + keepAddBufferAfter) / 2) + 256;
		$Create_4(this$static, historySize + keepAddBufferBefore, matchMaxLen + keepAddBufferAfter, windowReservSize);
		this$static._matchMaxLen = matchMaxLen;
		cyclicBufferSize = historySize + 1;
		if (this$static._cyclicBufferSize != cyclicBufferSize) {
			this$static._son = initDim(_3I_classLit, 0, -1, (this$static._cyclicBufferSize = cyclicBufferSize) * 2, 1);
		}

		hs = 65536;
		if (this$static.HASH_ARRAY) {
			hs = historySize - 1;
			hs |= hs >> 1;
			hs |= hs >> 2;
			hs |= hs >> 4;
			hs |= hs >> 8;
			hs >>= 1;
			hs |= 65535;
			if (hs > 16777216)
			hs >>= 1;
			this$static._hashMask = hs;
			++hs;
			hs += this$static.kFixHashSize;
		}

		if (hs != this$static._hashSizeSum) {
			this$static._hash = initDim(_3I_classLit, 0, -1, this$static._hashSizeSum = hs, 1);
		}
		return true;
	}

	function $GetMatches(this$static, distances) {
		var count, cur, curMatch, curMatch2, curMatch3, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, maxLen, offset, pby1, ptr0, ptr1, temp;
		if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos) {
			lenLimit = this$static._matchMaxLen;
		} else {
			lenLimit = this$static._streamPos - this$static._pos;
			if (lenLimit < this$static.kMinMatchCheck) {
				$MovePos_0(this$static);
				return 0;
			}
		}
		offset = 0;
		matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
		cur = this$static._bufferOffset + this$static._pos;
		maxLen = 1;
		hash2Value = 0;
		hash3Value = 0;
		if (this$static.HASH_ARRAY) {
			temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
			hash2Value = temp & 1023;
			temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
			hash3Value = temp & 65535;
			hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
		} else {
			hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
		}

		curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
		if (this$static.HASH_ARRAY) {
			curMatch2 = this$static._hash[hash2Value];
			curMatch3 = this$static._hash[1024 + hash3Value];
			this$static._hash[hash2Value] = this$static._pos;
			this$static._hash[1024 + hash3Value] = this$static._pos;
			if (curMatch2 > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch2] == this$static._bufferBase[cur]) {
					distances[offset++] = maxLen = 2;
					distances[offset++] = this$static._pos - curMatch2 - 1;
				}
			}
			if (curMatch3 > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch3] == this$static._bufferBase[cur]) {
					if (curMatch3 == curMatch2) {
						offset -= 2;
					}
					distances[offset++] = maxLen = 3;
					distances[offset++] = this$static._pos - curMatch3 - 1;
					curMatch2 = curMatch3;
				}
			}
			if (offset != 0 && curMatch2 == curMatch) {
				offset -= 2;
				maxLen = 1;
			}
		}
		this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
		ptr0 = (this$static._cyclicBufferPos << 1) + 1;
		ptr1 = this$static._cyclicBufferPos << 1;
		len0 = len1 = this$static.kNumHashDirectBytes;
		if (this$static.kNumHashDirectBytes != 0) {
			if (curMatch > matchMinPos) {
				if (this$static._bufferBase[this$static._bufferOffset + curMatch + this$static.kNumHashDirectBytes] != this$static._bufferBase[cur + this$static.kNumHashDirectBytes]) {
					distances[offset++] = maxLen = this$static.kNumHashDirectBytes;
					distances[offset++] = this$static._pos - curMatch - 1;
				}
			}
		}
		count = this$static._cutValue;
		while (true) {
			if (curMatch <= matchMinPos || count-- == 0) {
				this$static._son[ptr0] = this$static._son[ptr1] = 0;
				break;
			}
			delta = this$static._pos - curMatch;
			cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
			pby1 = this$static._bufferOffset + curMatch;
			len = len0 < len1?len0:len1;
			if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
				while (++len != lenLimit) {
					if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len]) {
						break;
					}
				}
				if (maxLen < len) {
					distances[offset++] = maxLen = len;
					distances[offset++] = delta - 1;
					if (len == lenLimit) {
					this$static._son[ptr1] = this$static._son[cyclicPos];
					this$static._son[ptr0] = this$static._son[cyclicPos + 1];
					break;
					}
				}
			}
			if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
				this$static._son[ptr1] = curMatch;
				ptr1 = cyclicPos + 1;
				curMatch = this$static._son[ptr1];
				len1 = len;
			} else {
				this$static._son[ptr0] = curMatch;
				ptr0 = cyclicPos;
				curMatch = this$static._son[ptr0];
				len0 = len;
			}
		}
		$MovePos_0(this$static);
		return offset;
	}

	function $Init_5(this$static) {
		var i;
		this$static._bufferOffset = 0;
		this$static._pos = 0;
		this$static._streamPos = 0;
		this$static._streamEndWasReached = false;
		$ReadBlock(this$static);
		for (i = 0; i < this$static._hashSizeSum; ++i) {
			this$static._hash[i] = 0;
		}
		this$static._cyclicBufferPos = 0;
		$ReduceOffsets(this$static, -1);
	}

	function $MovePos_0(this$static) {
		var subValue;
		if (++this$static._cyclicBufferPos >= this$static._cyclicBufferSize) {
			this$static._cyclicBufferPos = 0;
		}
		$MovePos_1(this$static);
		if (this$static._pos == 1073741823) {
			subValue = this$static._pos - this$static._cyclicBufferSize;
			$NormalizeLinks(this$static._son, this$static._cyclicBufferSize * 2, subValue);
			$NormalizeLinks(this$static._hash, this$static._hashSizeSum, subValue);
			$ReduceOffsets(this$static, subValue);
		}
	}

	function $NormalizeLinks(items, numItems, subValue) {
		var i, value;
		for (i = 0; i < numItems; ++i) {
			value = items[i];
			if (value <= subValue) {
				value = 0;
			} else {
				value -= subValue;
			}
			items[i] = value;
		}
	}

	function $SetType(this$static, numHashBytes) {
		this$static.HASH_ARRAY = numHashBytes > 2;
		if (this$static.HASH_ARRAY) {
			this$static.kNumHashDirectBytes = 0;
			this$static.kMinMatchCheck = 4;
			this$static.kFixHashSize = 66560;
		} else {
			this$static.kNumHashDirectBytes = 2;
			this$static.kMinMatchCheck = 3;
			this$static.kFixHashSize = 0;
		}
	}

	function $Skip(this$static, num) {
		var count, cur, curMatch, cyclicPos, delta, hash2Value, hash3Value, hashValue, len, len0, len1, lenLimit, matchMinPos, pby1, ptr0, ptr1, temp;
		do {
			if (this$static._pos + this$static._matchMaxLen <= this$static._streamPos) {
				lenLimit = this$static._matchMaxLen;
			} else {
				lenLimit = this$static._streamPos - this$static._pos;
				if (lenLimit < this$static.kMinMatchCheck) {
					$MovePos_0(this$static);
					continue;
				}
			}
			matchMinPos = this$static._pos > this$static._cyclicBufferSize?this$static._pos - this$static._cyclicBufferSize:0;
			cur = this$static._bufferOffset + this$static._pos;
			if (this$static.HASH_ARRAY) {
				temp = CrcTable[this$static._bufferBase[cur] & 255] ^ this$static._bufferBase[cur + 1] & 255;
				hash2Value = temp & 1023;
				this$static._hash[hash2Value] = this$static._pos;
				temp ^= (this$static._bufferBase[cur + 2] & 255) << 8;
				hash3Value = temp & 65535;
				this$static._hash[1024 + hash3Value] = this$static._pos;
				hashValue = (temp ^ CrcTable[this$static._bufferBase[cur + 3] & 255] << 5) & this$static._hashMask;
			} else {
				hashValue = this$static._bufferBase[cur] & 255 ^ (this$static._bufferBase[cur + 1] & 255) << 8;
			}
			curMatch = this$static._hash[this$static.kFixHashSize + hashValue];
			this$static._hash[this$static.kFixHashSize + hashValue] = this$static._pos;
			ptr0 = (this$static._cyclicBufferPos << 1) + 1;
			ptr1 = this$static._cyclicBufferPos << 1;
			len0 = len1 = this$static.kNumHashDirectBytes;
			count = this$static._cutValue;
			while (true) {
				if (curMatch <= matchMinPos || count-- == 0) {
					this$static._son[ptr0] = this$static._son[ptr1] = 0;
					break;
				}
				delta = this$static._pos - curMatch;
				cyclicPos = (delta <= this$static._cyclicBufferPos?this$static._cyclicBufferPos - delta:this$static._cyclicBufferPos - delta + this$static._cyclicBufferSize) << 1;
				pby1 = this$static._bufferOffset + curMatch;
				len = len0 < len1?len0:len1;
				if (this$static._bufferBase[pby1 + len] == this$static._bufferBase[cur + len]) {
					while (++len != lenLimit) {
						if (this$static._bufferBase[pby1 + len] != this$static._bufferBase[cur + len]) {
							break;
						}
					}
					if (len == lenLimit) {
						this$static._son[ptr1] = this$static._son[cyclicPos];
						this$static._son[ptr0] = this$static._son[cyclicPos + 1];
						break;
					}
				}
				if ((this$static._bufferBase[pby1 + len] & 255) < (this$static._bufferBase[cur + len] & 255)) {
					this$static._son[ptr1] = curMatch;
					ptr1 = cyclicPos + 1;
					curMatch = this$static._son[ptr1];
					len1 = len;
				} else {
					this$static._son[ptr0] = curMatch;
					ptr0 = cyclicPos;
					curMatch = this$static._son[ptr0];
					len0 = len;
				}
			}
			$MovePos_0(this$static);
		}
		while (--num != 0);
	}

	function getClass_39() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit;
	}

	function BinTree() {
	}

	_ = BinTree.prototype = new InWindow();
	_.getClass$ = getClass_39;
	_.typeId$ = 0;
	_.HASH_ARRAY = true;
	_._cutValue = 255;
	_._cyclicBufferPos = 0;
	_._cyclicBufferSize = 0;
	_._hash = null;
	_._hashMask = 0;
	_._hashSizeSum = 0;
	_._matchMaxLen = 0;
	_._son = null;
	_.kFixHashSize = 66560;
	_.kMinMatchCheck = 4;
	_.kNumHashDirectBytes = 0;
	var CrcTable;
	function $CopyBlock(this$static, distance, len) {
		var pos;
		pos = this$static._pos - distance - 1;
		if (pos < 0) {
			pos += this$static._windowSize;
		}
		for (; len != 0; --len) {
			if (pos >= this$static._windowSize) {
				pos = 0;
			}
			this$static._buffer[this$static._pos++] = this$static._buffer[pos++];
			if (this$static._pos >= this$static._windowSize) {
				$Flush_0(this$static);
			}
		}
	}

	function $Create_5(this$static, windowSize) {
		if (this$static._buffer == null || this$static._windowSize != windowSize) {
			this$static._buffer = initDim(_3B_classLit, 0, -1, windowSize, 1);
		}
		this$static._windowSize = windowSize;
		this$static._pos = 0;
		this$static._streamPos = 0;
	}

	function $Flush_0(this$static) {
		var size;
		size = this$static._pos - this$static._streamPos;
		if (size == 0) {
			return;
		}
		$write_0(this$static._stream, this$static._buffer, this$static._streamPos, size);
		if (this$static._pos >= this$static._windowSize) {
			this$static._pos = 0;
		}
		this$static._streamPos = this$static._pos;
	}

	function $GetByte(this$static, distance) {
		var pos;
		pos = this$static._pos - distance - 1;
		if (pos < 0) {
			pos += this$static._windowSize;
		}
		return this$static._buffer[pos];
	}

	function $Init_7(this$static, solid) {
		if (!solid) {
			this$static._streamPos = 0;
			this$static._pos = 0;
		}
	}

	function $PutByte(this$static, b) {
		this$static._buffer[this$static._pos++] = b;
		if (this$static._pos >= this$static._windowSize) {
			$Flush_0(this$static);
		}
	}

	function $ReleaseStream(this$static) {
		$Flush_0(this$static);
		this$static._stream = null;
	}

	function $SetStream_0(this$static, stream) {
		$Flush_0(this$static);
		this$static._stream = null;
		this$static._stream = stream;
	}

	function getClass_41() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit;
	}

	function OutWindow() {
	}

	_ = OutWindow.prototype = new Object_0();
	_.getClass$ = getClass_41;
	_.typeId$ = 0;
	_._buffer = null;
	_._pos = 0;
	_._stream = null;
	_._streamPos = 0;
	_._windowSize = 0;
	function GetLenToPosState(len) {
		len -= 2;
		if (len < 4) {
			return len;
		}
		return 3;
	}

	function StateUpdateChar(index) {
		if (index < 4) {
			return 0;
		}
		if (index < 10) {
			return index - 3;
		}
		return index - 6;
	}

	function $Chunker_0(this$static, encoder) {
		this$static.encoder = encoder;
		this$static.decoder = null;
		this$static.alive = true;
		return this$static;
	}

	function $Chunker(this$static, decoder) {
		this$static.decoder = decoder;
		this$static.encoder = null;
		this$static.alive = true;
		return this$static;
	}

	function $processChunk(this$static) {
		var exception;
		if (!this$static.alive) {
			throw new IllegalStateException();
		}
		exception = true;
		try {
			if (this$static.encoder) {
				$processEncoderChunk(this$static);
			} else {
				$processDecoderChunk(this$static);
			}
			exception = false;
			return this$static.alive;
		} finally {
			if (exception) {
				this$static.alive = false;
			}
		}
	}

	function $processDecoderChunk(this$static) {
		var result;
		result = $CodeOneChunk(this$static.decoder);
		if (result == -1) {
			throw $IOException(new IOException(), 'corrupted input');
		}
		this$static.inBytesProcessed = N1_longLit;
		this$static.outBytesProcessed = this$static.decoder.nowPos64;
		if (result == 1 || compare(this$static.decoder.outSize, P0_longLit) >= 0 && compare(this$static.decoder.nowPos64, this$static.decoder.outSize) >= 0) {
			$CodeFinish(this$static.decoder);
			this$static.alive = false;
		}
	}

	function $processEncoderChunk(this$static) {
		$CodeOneBlock(this$static.encoder, this$static.encoder.processedInSize, this$static.encoder.processedOutSize, this$static.encoder.finished);
		this$static.inBytesProcessed = this$static.encoder.processedInSize[0];
		if (this$static.encoder.finished[0]) {
			$ReleaseStreams(this$static.encoder);
			this$static.alive = false;
		}
	}

	function getClass_28() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit;
	}

	function Chunker() {
	}

	_ = Chunker.prototype = new Object_0();
	_.getClass$ = getClass_28;
	_.typeId$ = 0;
	_.alive = false;
	_.decoder = null;
	_.encoder = null;
	function $CodeFinish(this$static) {
		$Flush_0(this$static.m_OutWindow);
		$ReleaseStream(this$static.m_OutWindow);
		this$static.m_RangeDecoder.Stream = null;
	}

	function $CodeInChunks(this$static, inStream, outStream, outSize) {
		this$static.m_RangeDecoder.Stream = inStream;
		$SetStream_0(this$static.m_OutWindow, outStream);
		$Init_1(this$static);
		this$static.state = 0;
		this$static.rep0 = 0;
		this$static.rep1 = 0;
		this$static.rep2 = 0;
		this$static.rep3 = 0;
		this$static.outSize = outSize;
		this$static.nowPos64 = P0_longLit;
		this$static.prevByte = 0;
		return $Chunker(new Chunker(), this$static);
	}

	function $CodeOneChunk(this$static) {
	var decoder2, distance, len, numDirectBits, posSlot, posState;
	posState = lowBits_0(this$static.nowPos64) & this$static.m_PosStateMask;
	if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsMatchDecoders, (this$static.state << 4) + posState) == 0) {
		decoder2 = $GetDecoder(this$static.m_LiteralDecoder, lowBits_0(this$static.nowPos64), this$static.prevByte);
		if (this$static.state < 7) {
		this$static.prevByte = $DecodeNormal(decoder2, this$static.m_RangeDecoder);
		}
		else {
		this$static.prevByte = $DecodeWithMatchByte(decoder2, this$static.m_RangeDecoder, $GetByte(this$static.m_OutWindow, this$static.rep0));
		}
		$PutByte(this$static.m_OutWindow, this$static.prevByte);
		this$static.state = StateUpdateChar(this$static.state);
		this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
	} else {
		if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepDecoders, this$static.state) == 1) {
			len = 0;
			if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG0Decoders, this$static.state) == 0) {
				if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRep0LongDecoders, (this$static.state << 4) + posState) == 0) {
					this$static.state = this$static.state < 7?9:11;
					len = 1;
				}
			} else {
				if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG1Decoders, this$static.state) == 0) {
					distance = this$static.rep1;
				} else {
					if ($DecodeBit(this$static.m_RangeDecoder, this$static.m_IsRepG2Decoders, this$static.state) == 0) {
						distance = this$static.rep2;
					} else {
						distance = this$static.rep3;
						this$static.rep3 = this$static.rep2;
					}
					this$static.rep2 = this$static.rep1;
				}
				this$static.rep1 = this$static.rep0;
				this$static.rep0 = distance;
			}
			if (len == 0) {
				len = $Decode(this$static.m_RepLenDecoder, this$static.m_RangeDecoder, posState) + 2;
				this$static.state = this$static.state < 7?8:11;
			}
		} else {
			this$static.rep3 = this$static.rep2;
			this$static.rep2 = this$static.rep1;
			this$static.rep1 = this$static.rep0;
			len = 2 + $Decode(this$static.m_LenDecoder, this$static.m_RangeDecoder, posState);
			this$static.state = this$static.state < 7?7:10;
			posSlot = $Decode_0(this$static.m_PosSlotDecoder[GetLenToPosState(len)], this$static.m_RangeDecoder);
			if (posSlot >= 4) {
				numDirectBits = (posSlot >> 1) - 1;
				this$static.rep0 = (2 | posSlot & 1) << numDirectBits;
				if (posSlot < 14) {
					this$static.rep0 += ReverseDecode(this$static.m_PosDecoders, this$static.rep0 - posSlot - 1, this$static.m_RangeDecoder, numDirectBits);
				} else {
					this$static.rep0 += $DecodeDirectBits(this$static.m_RangeDecoder, numDirectBits - 4) << 4;
					this$static.rep0 += $ReverseDecode(this$static.m_PosAlignDecoder, this$static.m_RangeDecoder);
					if (this$static.rep0 < 0) {
						if (this$static.rep0 == -1) {
							return 1;
						}
						return -1;
					}
				}
			} else
				this$static.rep0 = posSlot;
			}
			if (compare(fromInt(this$static.rep0), this$static.nowPos64) >= 0 || this$static.rep0 >= this$static.m_DictionarySizeCheck) {
				return -1;
			}
			$CopyBlock(this$static.m_OutWindow, this$static.rep0, len);
			this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
			this$static.prevByte = $GetByte(this$static.m_OutWindow, 0);
		}
		return 0;
	}

	function $Decoder(this$static) {
		var i;
		this$static.m_OutWindow = new OutWindow();
		this$static.m_RangeDecoder = new Decoder_0();
		this$static.m_IsMatchDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static.m_IsRepDecoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG0Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG1Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRepG2Decoders = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static.m_IsRep0LongDecoders = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static.m_PosSlotDecoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 4, 0);
		this$static.m_PosDecoders = initDim(_3S_classLit, 0, -1, 114, 1);
		this$static.m_PosAlignDecoder = $BitTreeDecoder(new BitTreeDecoder(), 4);
		this$static.m_LenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
		this$static.m_RepLenDecoder = $Decoder$LenDecoder(new Decoder$LenDecoder());
		this$static.m_LiteralDecoder = new Decoder$LiteralDecoder();
		for (i = 0; i < 4; ++i) {
			this$static.m_PosSlotDecoder[i] = $BitTreeDecoder(new BitTreeDecoder(), 6);
		}
		return this$static;
	}

	function $Init_1(this$static) {
		var i;
		$Init_7(this$static.m_OutWindow, false);
		InitBitModels(this$static.m_IsMatchDecoders);
		InitBitModels(this$static.m_IsRep0LongDecoders);
		InitBitModels(this$static.m_IsRepDecoders);
		InitBitModels(this$static.m_IsRepG0Decoders);
		InitBitModels(this$static.m_IsRepG1Decoders);
		InitBitModels(this$static.m_IsRepG2Decoders);
		InitBitModels(this$static.m_PosDecoders);
		$Init_0(this$static.m_LiteralDecoder);
		for (i = 0; i < 4; ++i) {
			InitBitModels(this$static.m_PosSlotDecoder[i].Models);
		}
		$Init(this$static.m_LenDecoder);
		$Init(this$static.m_RepLenDecoder);
		InitBitModels(this$static.m_PosAlignDecoder.Models);
		$Init_8(this$static.m_RangeDecoder);
	}

	function $SetDecoderProperties(this$static, properties) {
		var dictionarySize, i, lc, lp, pb, remainder, val;
		if (properties.length < 5)
			return false;
		val = properties[0] & 255;
		lc = val % 9;
		remainder = ~~(val / 9);
		lp = remainder % 5;
		pb = ~~(remainder / 5);
		dictionarySize = 0;
		for (i = 0; i < 4; ++i) {
			dictionarySize += (properties[1 + i] & 255) << i * 8;
		}
		if (!$SetLcLpPb(this$static, lc, lp, pb)) {
			return false;
		}
		return $SetDictionarySize(this$static, dictionarySize);
	}

	function $SetDictionarySize(this$static, dictionarySize) {
		if (dictionarySize < 0) {
			return false;
		}
		if (this$static.m_DictionarySize != dictionarySize) {
			this$static.m_DictionarySize = dictionarySize;
			this$static.m_DictionarySizeCheck = max(this$static.m_DictionarySize, 1);
			$Create_5(this$static.m_OutWindow, max(this$static.m_DictionarySizeCheck, 4096));
		}
		return true;
	}

	function $SetLcLpPb(this$static, lc, lp, pb) {
		var numPosStates;
		if (lc > 8 || lp > 4 || pb > 4) {
			return false;
		}
		$Create_0(this$static.m_LiteralDecoder, lp, lc);
		numPosStates = 1 << pb;
		$Create(this$static.m_LenDecoder, numPosStates);
		$Create(this$static.m_RepLenDecoder, numPosStates);
		this$static.m_PosStateMask = numPosStates - 1;
		return true;
	}

	function getClass_32() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit;
	}

	function Decoder() {
	}

	_ = Decoder.prototype = new Object_0();
	_.getClass$ = getClass_32;
	_.typeId$ = 0;
	_.m_DictionarySize = -1;
	_.m_DictionarySizeCheck = -1;
	_.m_PosStateMask = 0;
	_.nowPos64 = P0_longLit;
	_.outSize = P0_longLit;
	_.prevByte = 0;
	_.rep0 = 0;
	_.rep1 = 0;
	_.rep2 = 0;
	_.rep3 = 0;
	_.state = 0;
	function $Create(this$static, numPosStates) {
		for (; this$static.m_NumPosStates < numPosStates; ++this$static.m_NumPosStates) {
			this$static.m_LowCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
			this$static.m_MidCoder[this$static.m_NumPosStates] = $BitTreeDecoder(new BitTreeDecoder(), 3);
		}
	}

	function $Decode(this$static, rangeDecoder, posState) {
		var symbol;
		if ($DecodeBit(rangeDecoder, this$static.m_Choice, 0) == 0) {
			return $Decode_0(this$static.m_LowCoder[posState], rangeDecoder);
		}
		symbol = 8;
		if ($DecodeBit(rangeDecoder, this$static.m_Choice, 1) == 0) {
			symbol += $Decode_0(this$static.m_MidCoder[posState], rangeDecoder);
		} else {
			symbol += 8 + $Decode_0(this$static.m_HighCoder, rangeDecoder);
		}
		return symbol;
	}

	function $Decoder$LenDecoder(this$static) {
		this$static.m_Choice = initDim(_3S_classLit, 0, -1, 2, 1);
		this$static.m_LowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
		this$static.m_MidCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit, 0, 7, 16, 0);
		this$static.m_HighCoder = $BitTreeDecoder(new BitTreeDecoder(), 8);
		return this$static;
	}

	function $Init(this$static) {
		var posState;
		InitBitModels(this$static.m_Choice);
		for (posState = 0; posState < this$static.m_NumPosStates; ++posState) {
			InitBitModels(this$static.m_LowCoder[posState].Models);
			InitBitModels(this$static.m_MidCoder[posState].Models);
		}
		InitBitModels(this$static.m_HighCoder.Models);
	}

	function getClass_29() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit;
	}

	function Decoder$LenDecoder() {
	}

	_ = Decoder$LenDecoder.prototype = new Object_0();
	_.getClass$ = getClass_29;
	_.typeId$ = 0;
	_.m_NumPosStates = 0;
	function $Create_0(this$static, numPosBits, numPrevBits) {
	var i, numStates;
	if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits)
		return;
	this$static.m_NumPosBits = numPosBits;
	this$static.m_PosMask = (1 << numPosBits) - 1;
	this$static.m_NumPrevBits = numPrevBits;
	numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
	this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit, 0, 4, numStates, 0);
	for (i = 0; i < numStates; ++i)
		this$static.m_Coders[i] = $Decoder$LiteralDecoder$Decoder2(new Decoder$LiteralDecoder$Decoder2());
	}

	function $GetDecoder(this$static, pos, prevByte) {
		return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
	}

	function $Init_0(this$static) {
		var i, numStates;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		for (i = 0; i < numStates; ++i) {
			InitBitModels(this$static.m_Coders[i].m_Decoders);
		}
	}

	function getClass_31() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit;
	}

	function Decoder$LiteralDecoder() {
	}

	_ = Decoder$LiteralDecoder.prototype = new Object_0();
	_.getClass$ = getClass_31;
	_.typeId$ = 0;
	_.m_Coders = null;
	_.m_NumPosBits = 0;
	_.m_NumPrevBits = 0;
	_.m_PosMask = 0;
	function $DecodeNormal(this$static, rangeDecoder) {
		var symbol;
		symbol = 1;
		do {
			symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
		} while (symbol < 256);
		return symbol << 24 >> 24;
	}

	function $DecodeWithMatchByte(this$static, rangeDecoder, matchByte) {
		var bit, matchBit, symbol;
		symbol = 1;
		do {
			matchBit = matchByte >> 7 & 1;
			matchByte <<= 1;
			bit = $DecodeBit(rangeDecoder, this$static.m_Decoders, (1 + matchBit << 8) + symbol);
			symbol = symbol << 1 | bit;
			if (matchBit != bit) {
				while (symbol < 256) {
					symbol = symbol << 1 | $DecodeBit(rangeDecoder, this$static.m_Decoders, symbol);
				}
			break;
			}
		} while (symbol < 256);
		return symbol << 24 >> 24;
	}

	function $Decoder$LiteralDecoder$Decoder2(this$static) {
		this$static.m_Decoders = initDim(_3S_classLit, 0, -1, 768, 1);
		return this$static;
	}

	function getClass_30() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit;
	}

	function Decoder$LiteralDecoder$Decoder2() {
	}

	_ = Decoder$LiteralDecoder$Decoder2.prototype = new Object_0();
	_.getClass$ = getClass_30;
	_.typeId$ = 17;
	function $clinit_59() {
		$clinit_59 = nullMethod;
		var c, j, k, slotFast;
		g_FastPos = initDim(_3B_classLit, 0, -1, 2048, 1);
		c = 2;
		g_FastPos[0] = 0;
		g_FastPos[1] = 1;
		for (slotFast = 2; slotFast < 22; ++slotFast) {
			k = 1 << (slotFast >> 1) - 1;
			for (j = 0; j < k; ++j , ++c)
			g_FastPos[c] = slotFast << 24 >> 24;
		}
	}

	function $Backward(this$static, cur) {
		var backCur, backMem, posMem, posPrev;
		this$static._optimumEndIndex = cur;
		posMem = this$static._optimum[cur].PosPrev;
		backMem = this$static._optimum[cur].BackPrev;
		do {
			if (this$static._optimum[cur].Prev1IsChar) {
				$MakeAsChar(this$static._optimum[posMem]);
				this$static._optimum[posMem].PosPrev = posMem - 1;
				if (this$static._optimum[cur].Prev2) {
					this$static._optimum[posMem - 1].Prev1IsChar = false;
					this$static._optimum[posMem - 1].PosPrev = this$static._optimum[cur].PosPrev2;
					this$static._optimum[posMem - 1].BackPrev = this$static._optimum[cur].BackPrev2;
				}
			}
			posPrev = posMem;
			backCur = backMem;
			backMem = this$static._optimum[posPrev].BackPrev;
			posMem = this$static._optimum[posPrev].PosPrev;
			this$static._optimum[posPrev].BackPrev = backCur;
			this$static._optimum[posPrev].PosPrev = cur;
			cur = posPrev;
		} while (cur > 0);
		this$static.backRes = this$static._optimum[0].BackPrev;
		this$static._optimumCurrentIndex = this$static._optimum[0].PosPrev;
		return this$static._optimumCurrentIndex;
	}

	function $BaseInit(this$static) {
		var i;
		this$static._state = 0;
		this$static._previousByte = 0;
		for (i = 0; i < 4; ++i) {
			this$static._repDistances[i] = 0;
		}
	}

	function $CodeOneBlock(this$static, inSize, outSize, finished) {
		var baseVal, complexState, curByte, distance, footerBits, i, len, lenToPosState, matchByte, pos, posReduced, posSlot, posState, progressPosValuePrev, subCoder;
		inSize[0] = P0_longLit;
		outSize[0] = P0_longLit;
		finished[0] = true;
		if (this$static._inStream) {
			this$static._matchFinder._stream = this$static._inStream;
			$Init_5(this$static._matchFinder);
			this$static._needReleaseMFStream = true;
			this$static._inStream = null;
		}
		if (this$static._finished) {
			return;
		}
		this$static._finished = true;
		progressPosValuePrev = this$static.nowPos64;
		if (eq(this$static.nowPos64, P0_longLit)) {
			if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
				$Flush(this$static, lowBits_0(this$static.nowPos64));
				return;
			}
			$ReadMatchDistances(this$static);
			posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
			$Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 0);
			this$static._state = StateUpdateChar(this$static._state);
			curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
			$Encode_1($GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte), this$static._rangeEncoder, curByte);
			this$static._previousByte = curByte;
			--this$static._additionalOffset;
			this$static.nowPos64 = add(this$static.nowPos64, P1_longLit);
		}
		if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
			$Flush(this$static, lowBits_0(this$static.nowPos64));
			return;
		}
		while (true) {
			len = $GetOptimum(this$static, lowBits_0(this$static.nowPos64));
			pos = this$static.backRes;
			posState = lowBits_0(this$static.nowPos64) & this$static._posStateMask;
			complexState = (this$static._state << 4) + posState;
			if (len == 1 && pos == -1) {
				$Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 0);
				curByte = $GetIndexByte(this$static._matchFinder, -this$static._additionalOffset);
				subCoder = $GetSubCoder(this$static._literalEncoder, lowBits_0(this$static.nowPos64), this$static._previousByte);
				if (this$static._state < 7) {
					$Encode_1(subCoder, this$static._rangeEncoder, curByte);
				} else {
					matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - this$static._additionalOffset);
					$EncodeMatched(subCoder, this$static._rangeEncoder, matchByte, curByte);
				}
				this$static._previousByte = curByte;
				this$static._state = StateUpdateChar(this$static._state);
			} else {
				$Encode_3(this$static._rangeEncoder, this$static._isMatch, complexState, 1);
				if (pos < 4) {
					$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 1);
					if (pos == 0) {
						$Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 0);
						if (len == 1) {
							$Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 0);
						} else {
							$Encode_3(this$static._rangeEncoder, this$static._isRep0Long, complexState, 1);
						}
					} else {
						$Encode_3(this$static._rangeEncoder, this$static._isRepG0, this$static._state, 1);
						if (pos == 1) {
							$Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 0);
						} else {
							$Encode_3(this$static._rangeEncoder, this$static._isRepG1, this$static._state, 1);
							$Encode_3(this$static._rangeEncoder, this$static._isRepG2, this$static._state, pos - 2);
						}
					}
					if (len == 1) {
						this$static._state = this$static._state < 7?9:11;
					} else {
						$Encode_0(this$static._repMatchLenEncoder, this$static._rangeEncoder, len - 2, posState);
						this$static._state = this$static._state < 7?8:11;
					}
					distance = this$static._repDistances[pos];
					if (pos != 0) {
						for (i = pos; i >= 1; --i) {
							this$static._repDistances[i] = this$static._repDistances[i - 1];
						}
						this$static._repDistances[0] = distance;
					}
				} else {
					$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
					this$static._state = this$static._state < 7?7:10;
					$Encode_0(this$static._lenEncoder, this$static._rangeEncoder, len - 2, posState);
					pos -= 4;
					posSlot = GetPosSlot(pos);
					lenToPosState = GetLenToPosState(len);
					$Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, posSlot);
					if (posSlot >= 4) {
						footerBits = (posSlot >> 1) - 1;
						baseVal = (2 | posSlot & 1) << footerBits;
						posReduced = pos - baseVal;
						if (posSlot < 14) {
							ReverseEncode(this$static._posEncoders, baseVal - posSlot - 1, this$static._rangeEncoder, footerBits, posReduced);
						} else {
							$EncodeDirectBits(this$static._rangeEncoder, posReduced >> 4, footerBits - 4);
							$ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, posReduced & 15);
							++this$static._alignPriceCount;
						}
					}
					distance = pos;
					for (i = 3; i >= 1; --i) {
						this$static._repDistances[i] = this$static._repDistances[i - 1];
					}
					this$static._repDistances[0] = distance;
					++this$static._matchPriceCount;
				}
				this$static._previousByte = $GetIndexByte(this$static._matchFinder, len - 1 - this$static._additionalOffset);
			}
			this$static._additionalOffset -= len;
			this$static.nowPos64 = add(this$static.nowPos64, fromInt(len));
			if (this$static._additionalOffset == 0) {
				if (this$static._matchPriceCount >= 128) {
					$FillDistancesPrices(this$static);
				}
				if (this$static._alignPriceCount >= 16) {
					$FillAlignPrices(this$static);
				}
				inSize[0] = this$static.nowPos64;
				outSize[0] = $GetProcessedSizeAdd(this$static._rangeEncoder);
				if ($GetNumAvailableBytes(this$static._matchFinder) == 0) {
					$Flush(this$static, lowBits_0(this$static.nowPos64));
					return;
				}
				if (compare(sub(this$static.nowPos64, progressPosValuePrev), P1000_longLit) >= 0) {
					this$static._finished = false;
					finished[0] = false;
					return;
				}
			}
		}
	}

	function $Create_2(this$static) {
		var bt, numHashBytes;
		if (!this$static._matchFinder) {
			bt = ($clinit_60() , new BinTree());
			numHashBytes = 4;
			if (this$static._matchFinderType == 0) {
				numHashBytes = 2;
			}
			$SetType(bt, numHashBytes);
			this$static._matchFinder = bt;
		}
		$Create_1(this$static._literalEncoder, this$static._numLiteralPosStateBits, this$static._numLiteralContextBits);
		if (this$static._dictionarySize == this$static._dictionarySizePrev && this$static._numFastBytesPrev == this$static._numFastBytes) {
			return;
		}
		$Create_3(this$static._matchFinder, this$static._dictionarySize, 4096, this$static._numFastBytes, 274);
		this$static._dictionarySizePrev = this$static._dictionarySize;
		this$static._numFastBytesPrev = this$static._numFastBytes;
	}

	function $Encoder(this$static) {
		var i;
		$clinit_59();
		this$static._repDistances = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static._optimum = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit, 0, 6, 4096, 0);
		this$static._rangeEncoder = ($clinit_66() , new Encoder_0());
		this$static._isMatch = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static._isRep = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG0 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG1 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRepG2 = initDim(_3S_classLit, 0, -1, 12, 1);
		this$static._isRep0Long = initDim(_3S_classLit, 0, -1, 192, 1);
		this$static._posSlotEncoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 4, 0);
		this$static._posEncoders = initDim(_3S_classLit, 0, -1, 114, 1);
		this$static._posAlignEncoder = $BitTreeEncoder(new BitTreeEncoder(), 4);
		this$static._lenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
		this$static._repMatchLenEncoder = $Encoder$LenPriceTableEncoder(new Encoder$LenPriceTableEncoder());
		this$static._literalEncoder = new Encoder$LiteralEncoder();
		this$static._matchDistances = initDim(_3I_classLit, 0, -1, 548, 1);
		this$static._posSlotPrices = initDim(_3I_classLit, 0, -1, 256, 1);
		this$static._distancesPrices = initDim(_3I_classLit, 0, -1, 512, 1);
		this$static._alignPrices = initDim(_3I_classLit, 0, -1, 16, 1);
		this$static.reps = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static.repLens = initDim(_3I_classLit, 0, -1, 4, 1);
		this$static.processedInSize = initDim(_3J_classLit, 0, -1, 1, 3);
		this$static.processedOutSize = initDim(_3J_classLit, 0, -1, 1, 3);
		this$static.finished = initDim(_3Z_classLit, 0, -1, 1, 2);
		this$static.properties = initDim(_3B_classLit, 0, -1, 5, 1);
		this$static.tempPrices = initDim(_3I_classLit, 0, -1, 128, 1);
		for (i = 0; i < 4096; ++i) {
			this$static._optimum[i] = new Encoder$Optimal();
		}
		for (i = 0; i < 4; ++i) {
			this$static._posSlotEncoder[i] = $BitTreeEncoder(new BitTreeEncoder(), 6);
		}
		return this$static;
	}

	function $FillAlignPrices(this$static) {
		var i;
		for (i = 0; i < 16; ++i) {
			this$static._alignPrices[i] = $ReverseGetPrice(this$static._posAlignEncoder, i);
		}
		this$static._alignPriceCount = 0;
	}

	function $FillDistancesPrices(this$static) {
		var baseVal, encoder, footerBits, i, lenToPosState, posSlot, st, st2;
		for (i = 4; i < 128; ++i) {
			posSlot = GetPosSlot(i);
			footerBits = (posSlot >> 1) - 1;
			baseVal = (2 | posSlot & 1) << footerBits;
			this$static.tempPrices[i] = ReverseGetPrice(this$static._posEncoders, baseVal - posSlot - 1, footerBits, i - baseVal);
		}
		for (lenToPosState = 0; lenToPosState < 4; ++lenToPosState) {
			encoder = this$static._posSlotEncoder[lenToPosState];
			st = lenToPosState << 6;
			for (posSlot = 0; posSlot < this$static._distTableSize; ++posSlot) {
				this$static._posSlotPrices[st + posSlot] = $GetPrice_1(encoder, posSlot);
			}
			for (posSlot = 14; posSlot < this$static._distTableSize; ++posSlot) {
				this$static._posSlotPrices[st + posSlot] += (posSlot >> 1) - 1 - 4 << 6;
			}
			st2 = lenToPosState * 128;
			for (i = 0; i < 4; ++i) {
				this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + i];
			}
			for (; i < 128; ++i) {
				this$static._distancesPrices[st2 + i] = this$static._posSlotPrices[st + GetPosSlot(i)] + this$static.tempPrices[i];
			}
		}
		this$static._matchPriceCount = 0;
	}

	function $Flush(this$static, nowPos) {
		$ReleaseMFStream(this$static);
		$WriteEndMarker(this$static, nowPos & this$static._posStateMask);
		$FlushData(this$static._rangeEncoder);
	}

	function $GetOptimum(this$static, position) {
		var cur, curAnd1Price, curAndLenCharPrice, curAndLenPrice, curBack, curPrice, currentByte, distance, i, len, lenEnd, lenMain, lenRes, lenTest, lenTest2, lenTestTemp, matchByte, matchPrice, newLen, nextIsChar, nextMatchPrice, nextOptimum, nextRepMatchPrice, normalMatchPrice, numAvailableBytes, numAvailableBytesFull, numDistancePairs, offs, offset, opt, optimum, pos, posPrev, posState, posStateNext, price_4, repIndex, repLen, repMatchPrice, repMaxIndex, shortRepPrice, startLen, state, state2, t, price, price_0, price_1, price_2, price_3;
		if (this$static._optimumEndIndex != this$static._optimumCurrentIndex) {
			lenRes = this$static._optimum[this$static._optimumCurrentIndex].PosPrev - this$static._optimumCurrentIndex;
			this$static.backRes = this$static._optimum[this$static._optimumCurrentIndex].BackPrev;
			this$static._optimumCurrentIndex = this$static._optimum[this$static._optimumCurrentIndex].PosPrev;
			return lenRes;
		}
		this$static._optimumCurrentIndex = this$static._optimumEndIndex = 0;
		if (this$static._longestMatchWasFound) {
			lenMain = this$static._longestMatchLength;
			this$static._longestMatchWasFound = false;
		} else {
			lenMain = $ReadMatchDistances(this$static);
		}
		numDistancePairs = this$static._numDistancePairs;
		numAvailableBytes = $GetNumAvailableBytes(this$static._matchFinder) + 1;
		if (numAvailableBytes < 2) {
			this$static.backRes = -1;
			return 1;
		}
		if (numAvailableBytes > 273) {
			numAvailableBytes = 273;
		}
		repMaxIndex = 0;
		for (i = 0; i < 4; ++i) {
			this$static.reps[i] = this$static._repDistances[i];
			this$static.repLens[i] = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[i], 273);
			if (this$static.repLens[i] > this$static.repLens[repMaxIndex]) {
				repMaxIndex = i;
			}
		}
		if (this$static.repLens[repMaxIndex] >= this$static._numFastBytes) {
			this$static.backRes = repMaxIndex;
			lenRes = this$static.repLens[repMaxIndex];
			$MovePos(this$static, lenRes - 1);
			return lenRes;
		}
		if (lenMain >= this$static._numFastBytes) {
			this$static.backRes = this$static._matchDistances[numDistancePairs - 1] + 4;
			$MovePos(this$static, lenMain - 1);
			return lenMain;
		}
		currentByte = $GetIndexByte(this$static._matchFinder, -1);
		matchByte = $GetIndexByte(this$static._matchFinder, -this$static._repDistances[0] - 1 - 1);
		if (lenMain < 2 && currentByte != matchByte && this$static.repLens[repMaxIndex] < 2) {
			this$static.backRes = -1;
			return 1;
		}
		this$static._optimum[0].State = this$static._state;
		posState = position & this$static._posStateMask;
		this$static._optimum[1].Price = ($clinit_66() , ProbPrices[this$static._isMatch[(this$static._state << 4) + posState] >>> 2]) + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, this$static._previousByte), this$static._state >= 7, matchByte, currentByte);
		$MakeAsChar(this$static._optimum[1]);
		matchPrice = ProbPrices[2048 - this$static._isMatch[(this$static._state << 4) + posState] >>> 2];
		repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[this$static._state] >>> 2];
		if (matchByte == currentByte) {
			shortRepPrice = repMatchPrice + $GetRepLen1Price(this$static, this$static._state, posState);
			if (shortRepPrice < this$static._optimum[1].Price) {
				this$static._optimum[1].Price = shortRepPrice;
				$MakeAsShortRep(this$static._optimum[1]);
			}
		}
		lenEnd = lenMain >= this$static.repLens[repMaxIndex]?lenMain:this$static.repLens[repMaxIndex];
		if (lenEnd < 2) {
			this$static.backRes = this$static._optimum[1].BackPrev;
			return 1;
		}
		this$static._optimum[1].PosPrev = 0;
		this$static._optimum[0].Backs0 = this$static.reps[0];
		this$static._optimum[0].Backs1 = this$static.reps[1];
		this$static._optimum[0].Backs2 = this$static.reps[2];
		this$static._optimum[0].Backs3 = this$static.reps[3];
		len = lenEnd;
		do {
			this$static._optimum[len--].Price = 268435455;
		} while (len >= 2);
		for (i = 0; i < 4; ++i) {
			repLen = this$static.repLens[i];
			if (repLen < 2) {
				continue;
			}
			price_4 = repMatchPrice + $GetPureRepPrice(this$static, i, this$static._state, posState);
			do {
				curAndLenPrice = price_4 + $GetPrice(this$static._repMatchLenEncoder, repLen - 2, posState);
				optimum = this$static._optimum[repLen];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = 0;
					optimum.BackPrev = i;
					optimum.Prev1IsChar = false;
				}
			} while (--repLen >= 2);
		}
		normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[this$static._state] >>> 2];
		len = this$static.repLens[0] >= 2?this$static.repLens[0] + 1:2;
		if (len <= lenMain) {
			offs = 0;
			while (len > this$static._matchDistances[offs]) {
				offs += 2;
			}
			for (;; ++len) {
				distance = this$static._matchDistances[offs + 1];
				curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, distance, len, posState);
				optimum = this$static._optimum[len];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = 0;
					optimum.BackPrev = distance + 4;
					optimum.Prev1IsChar = false;
				}
				if (len == this$static._matchDistances[offs]) {
					offs += 2;
					if (offs == numDistancePairs) {
						break;
					}
				}
			}
		}
		cur = 0;
		while (true) {
			++cur;
			if (cur == lenEnd) {
				return $Backward(this$static, cur);
			}
			newLen = $ReadMatchDistances(this$static);
			numDistancePairs = this$static._numDistancePairs;
			if (newLen >= this$static._numFastBytes) {
				this$static._longestMatchLength = newLen;
				this$static._longestMatchWasFound = true;
				return $Backward(this$static, cur);
			}
			++position;
			posPrev = this$static._optimum[cur].PosPrev;
			if (this$static._optimum[cur].Prev1IsChar) {
				--posPrev;
				if (this$static._optimum[cur].Prev2) {
					state = this$static._optimum[this$static._optimum[cur].PosPrev2].State;
					if (this$static._optimum[cur].BackPrev2 < 4) {
						state = (state < 7) ? 8 : 11;
					} else {
						state = (state < 7) ? 7 : 10;
					}
				} else {
					state = this$static._optimum[posPrev].State;
				}
				state = StateUpdateChar(state);
			} else {
				state = this$static._optimum[posPrev].State;
			}
			if (posPrev == cur - 1) {
				if (this$static._optimum[cur].BackPrev == 0) {
					state = state < 7?9:11;
				} else {
					state = StateUpdateChar(state);
				}
			} else {
				if (this$static._optimum[cur].Prev1IsChar && this$static._optimum[cur].Prev2) {
					posPrev = this$static._optimum[cur].PosPrev2;
					pos = this$static._optimum[cur].BackPrev2;
					state = state < 7?8:11;
				} else {
					pos = this$static._optimum[cur].BackPrev;
					if (pos < 4) {
						state = state < 7?8:11;
					} else {
						state = state < 7?7:10;
					}
				}
				opt = this$static._optimum[posPrev];
				if (pos < 4) {
					if (pos == 0) {
						this$static.reps[0] = opt.Backs0;
						this$static.reps[1] = opt.Backs1;
						this$static.reps[2] = opt.Backs2;
						this$static.reps[3] = opt.Backs3;
					} else if (pos == 1) {
						this$static.reps[0] = opt.Backs1;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs2;
						this$static.reps[3] = opt.Backs3;
					} else if (pos == 2) {
						this$static.reps[0] = opt.Backs2;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs1;
						this$static.reps[3] = opt.Backs3;
					} else {
						this$static.reps[0] = opt.Backs3;
						this$static.reps[1] = opt.Backs0;
						this$static.reps[2] = opt.Backs1;
						this$static.reps[3] = opt.Backs2;
					}
				} else {
					this$static.reps[0] = pos - 4;
					this$static.reps[1] = opt.Backs0;
					this$static.reps[2] = opt.Backs1;
					this$static.reps[3] = opt.Backs2;
				}
			}
			this$static._optimum[cur].State = state;
			this$static._optimum[cur].Backs0 = this$static.reps[0];
			this$static._optimum[cur].Backs1 = this$static.reps[1];
			this$static._optimum[cur].Backs2 = this$static.reps[2];
			this$static._optimum[cur].Backs3 = this$static.reps[3];
			curPrice = this$static._optimum[cur].Price;
			currentByte = $GetIndexByte(this$static._matchFinder, -1);
			matchByte = $GetIndexByte(this$static._matchFinder, -this$static.reps[0] - 1 - 1);
			posState = position & this$static._posStateMask;
			curAnd1Price = curPrice + ProbPrices[this$static._isMatch[(state << 4) + posState] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position, $GetIndexByte(this$static._matchFinder, -2)), state >= 7, matchByte, currentByte);
			nextOptimum = this$static._optimum[cur + 1];
			nextIsChar = false;
			if (curAnd1Price < nextOptimum.Price) {
				nextOptimum.Price = curAnd1Price;
				nextOptimum.PosPrev = cur;
				nextOptimum.BackPrev = -1;
				nextOptimum.Prev1IsChar = false;
				nextIsChar = true;
			}
			matchPrice = curPrice + ProbPrices[2048 - this$static._isMatch[(state << 4) + posState] >>> 2];
			repMatchPrice = matchPrice + ProbPrices[2048 - this$static._isRep[state] >>> 2];
			if (matchByte == currentByte && !(nextOptimum.PosPrev < cur && nextOptimum.BackPrev == 0)) {
				shortRepPrice = repMatchPrice + (ProbPrices[this$static._isRepG0[state] >>> 2] + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2]);
				if (shortRepPrice <= nextOptimum.Price) {
					nextOptimum.Price = shortRepPrice;
					nextOptimum.PosPrev = cur;
					nextOptimum.BackPrev = 0;
					nextOptimum.Prev1IsChar = false;
					nextIsChar = true;
				}
			}
			numAvailableBytesFull = $GetNumAvailableBytes(this$static._matchFinder) + 1;
			numAvailableBytesFull = 4095 - cur < numAvailableBytesFull?4095 - cur:numAvailableBytesFull;
			numAvailableBytes = numAvailableBytesFull;
			if (numAvailableBytes < 2) {
				continue;
			}
			if (numAvailableBytes > this$static._numFastBytes) {
				numAvailableBytes = this$static._numFastBytes;
			}
			if (!nextIsChar && matchByte != currentByte) {
				t = min(numAvailableBytesFull - 1, this$static._numFastBytes);
				lenTest2 = $GetMatchLen(this$static._matchFinder, 0, this$static.reps[0], t);
				if (lenTest2 >= 2) {
					state2 = StateUpdateChar(state);
					posStateNext = position + 1 & this$static._posStateMask;
					nextRepMatchPrice = curAnd1Price + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
					offset = cur + 1 + lenTest2;
					while (lenEnd < offset) {
						this$static._optimum[++lenEnd].Price = 268435455;
					}
					curAndLenPrice = nextRepMatchPrice + (price = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price + $GetPureRepPrice(this$static, 0, state2, posStateNext));
					optimum = this$static._optimum[offset];
					if (curAndLenPrice < optimum.Price) {
						optimum.Price = curAndLenPrice;
						optimum.PosPrev = cur + 1;
						optimum.BackPrev = 0;
						optimum.Prev1IsChar = true;
						optimum.Prev2 = false;
					}
				}
			}
			startLen = 2;
			for (repIndex = 0; repIndex < 4; ++repIndex) {
				lenTest = $GetMatchLen(this$static._matchFinder, -1, this$static.reps[repIndex], numAvailableBytes);
				if (lenTest < 2) {
					continue;
				}
				lenTestTemp = lenTest;
				do {
					while (lenEnd < cur + lenTest) {
						this$static._optimum[++lenEnd].Price = 268435455;
					}
					curAndLenPrice = repMatchPrice + (price_0 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_0 + $GetPureRepPrice(this$static, repIndex, state, posState));
					optimum = this$static._optimum[cur + lenTest];
					if (curAndLenPrice < optimum.Price) {
						optimum.Price = curAndLenPrice;
						optimum.PosPrev = cur;
						optimum.BackPrev = repIndex;
						optimum.Prev1IsChar = false;
					}
				} while (--lenTest >= 2);
				lenTest = lenTestTemp;
				if (repIndex == 0) {
					startLen = lenTest + 1;
				}
				if (lenTest < numAvailableBytesFull) {
					t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
					lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, this$static.reps[repIndex], t);
					if (lenTest2 >= 2) {
						state2 = state < 7?8:11;
						posStateNext = position + lenTest & this$static._posStateMask;
						curAndLenCharPrice = repMatchPrice + (price_1 = $GetPrice(this$static._repMatchLenEncoder, lenTest - 2, posState) , price_1 + $GetPureRepPrice(this$static, repIndex, state, posState)) + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - 1 - (this$static.reps[repIndex] + 1)), $GetIndexByte(this$static._matchFinder, lenTest - 1));
						state2 = StateUpdateChar(state2);
						posStateNext = position + lenTest + 1 & this$static._posStateMask;
						nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
						nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
						offset = lenTest + 1 + lenTest2;
						while (lenEnd < cur + offset) {
							this$static._optimum[++lenEnd].Price = 268435455;
						}
						curAndLenPrice = nextRepMatchPrice + (price_2 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_2 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
						optimum = this$static._optimum[cur + offset];
						if (curAndLenPrice < optimum.Price) {
							optimum.Price = curAndLenPrice;
							optimum.PosPrev = cur + lenTest + 1;
							optimum.BackPrev = 0;
							optimum.Prev1IsChar = true;
							optimum.Prev2 = true;
							optimum.PosPrev2 = cur;
							optimum.BackPrev2 = repIndex;
						}
					}
				}
			}
			if (newLen > numAvailableBytes) {
				newLen = numAvailableBytes;
				for (numDistancePairs = 0; newLen > this$static._matchDistances[numDistancePairs]; numDistancePairs += 2) {
				}
				this$static._matchDistances[numDistancePairs] = newLen;
				numDistancePairs += 2;
			}
			if (newLen >= startLen) {
			normalMatchPrice = matchPrice + ProbPrices[this$static._isRep[state] >>> 2];
			while (lenEnd < cur + newLen) {
				this$static._optimum[++lenEnd].Price = 268435455;
			}
			offs = 0;
			while (startLen > this$static._matchDistances[offs]) {
				offs += 2;
			}
			for (lenTest = startLen;; ++lenTest) {
				curBack = this$static._matchDistances[offs + 1];
				curAndLenPrice = normalMatchPrice + $GetPosLenPrice(this$static, curBack, lenTest, posState);
				optimum = this$static._optimum[cur + lenTest];
				if (curAndLenPrice < optimum.Price) {
					optimum.Price = curAndLenPrice;
					optimum.PosPrev = cur;
					optimum.BackPrev = curBack + 4;
					optimum.Prev1IsChar = false;
				}
				if (lenTest == this$static._matchDistances[offs]) {
					if (lenTest < numAvailableBytesFull) {
						t = min(numAvailableBytesFull - 1 - lenTest, this$static._numFastBytes);
						lenTest2 = $GetMatchLen(this$static._matchFinder, lenTest, curBack, t);
						if (lenTest2 >= 2) {
							state2 = state < 7?7:10;
							posStateNext = position + lenTest & this$static._posStateMask;
							curAndLenCharPrice = curAndLenPrice + ProbPrices[this$static._isMatch[(state2 << 4) + posStateNext] >>> 2] + $GetPrice_0($GetSubCoder(this$static._literalEncoder, position + lenTest, $GetIndexByte(this$static._matchFinder, lenTest - 1 - 1)), true, $GetIndexByte(this$static._matchFinder, lenTest - (curBack + 1) - 1), $GetIndexByte(this$static._matchFinder, lenTest - 1));
							state2 = StateUpdateChar(state2);
							posStateNext = position + lenTest + 1 & this$static._posStateMask;
							nextMatchPrice = curAndLenCharPrice + ProbPrices[2048 - this$static._isMatch[(state2 << 4) + posStateNext] >>> 2];
							nextRepMatchPrice = nextMatchPrice + ProbPrices[2048 - this$static._isRep[state2] >>> 2];
							offset = lenTest + 1 + lenTest2;
							while (lenEnd < cur + offset) {
								this$static._optimum[++lenEnd].Price = 268435455;
							}
							curAndLenPrice = nextRepMatchPrice + (price_3 = $GetPrice(this$static._repMatchLenEncoder, lenTest2 - 2, posStateNext) , price_3 + $GetPureRepPrice(this$static, 0, state2, posStateNext));
							optimum = this$static._optimum[cur + offset];
							if (curAndLenPrice < optimum.Price) {
								optimum.Price = curAndLenPrice;
								optimum.PosPrev = cur + lenTest + 1;
								optimum.BackPrev = 0;
								optimum.Prev1IsChar = true;
								optimum.Prev2 = true;
								optimum.PosPrev2 = cur;
								optimum.BackPrev2 = curBack + 4;
							}
						}
					}
					offs += 2;
					if (offs == numDistancePairs)
						break;
					}
				}
			}
		}
	}

	function $GetPosLenPrice(this$static, pos, len, posState) {
		var lenToPosState, price;
		lenToPosState = GetLenToPosState(len);
		if (pos < 128) {
			price = this$static._distancesPrices[lenToPosState * 128 + pos];
		} else {
			price = this$static._posSlotPrices[(lenToPosState << 6) + GetPosSlot2(pos)] + this$static._alignPrices[pos & 15];
		}
		return price + $GetPrice(this$static._lenEncoder, len - 2, posState);
	}

	function $GetPureRepPrice(this$static, repIndex, state, posState) {
		var price;
		if (repIndex == 0) {
			price = ($clinit_66() , ProbPrices[this$static._isRepG0[state] >>> 2]);
			price += ProbPrices[2048 - this$static._isRep0Long[(state << 4) + posState] >>> 2];
		} else {
			price = ($clinit_66() , ProbPrices[2048 - this$static._isRepG0[state] >>> 2]);
			if (repIndex == 1) {
				price += ProbPrices[this$static._isRepG1[state] >>> 2];
			} else {
				price += ProbPrices[2048 - this$static._isRepG1[state] >>> 2];
				price += GetPrice(this$static._isRepG2[state], repIndex - 2);
			}
		}
		return price;
	}

	function $GetRepLen1Price(this$static, state, posState) {
		return ($clinit_66() , ProbPrices[this$static._isRepG0[state] >>> 2]) + ProbPrices[this$static._isRep0Long[(state << 4) + posState] >>> 2];
	}

	function $Init_4(this$static) {
		var i;
		$BaseInit(this$static);
		$Init_9(this$static._rangeEncoder);
		InitBitModels_0(this$static._isMatch);
		InitBitModels_0(this$static._isRep0Long);
		InitBitModels_0(this$static._isRep);
		InitBitModels_0(this$static._isRepG0);
		InitBitModels_0(this$static._isRepG1);
		InitBitModels_0(this$static._isRepG2);
		InitBitModels_0(this$static._posEncoders);
		$Init_3(this$static._literalEncoder);
		for (i = 0; i < 4; ++i) {
			InitBitModels(this$static._posSlotEncoder[i].Models);
		}
		$Init_2(this$static._lenEncoder, 1 << this$static._posStateBits);
		$Init_2(this$static._repMatchLenEncoder, 1 << this$static._posStateBits);
		InitBitModels(this$static._posAlignEncoder.Models);
		this$static._longestMatchWasFound = false;
		this$static._optimumEndIndex = 0;
		this$static._optimumCurrentIndex = 0;
		this$static._additionalOffset = 0;
	}

	function $MovePos(this$static, num) {
		if (num > 0) {
			$Skip(this$static._matchFinder, num);
			this$static._additionalOffset += num;
		}
	}

	function $ReadMatchDistances(this$static) {
		var lenRes;
		lenRes = 0;
		this$static._numDistancePairs = $GetMatches(this$static._matchFinder, this$static._matchDistances);
		if (this$static._numDistancePairs > 0) {
			lenRes = this$static._matchDistances[this$static._numDistancePairs - 2];
			if (lenRes == this$static._numFastBytes)
			lenRes += $GetMatchLen(this$static._matchFinder, lenRes - 1, this$static._matchDistances[this$static._numDistancePairs - 1], 273 - lenRes);
		}
		++this$static._additionalOffset;
		return lenRes;
	}

	function $ReleaseMFStream(this$static) {
		if (!!this$static._matchFinder && this$static._needReleaseMFStream) {
			this$static._matchFinder._stream = null;
			this$static._needReleaseMFStream = false;
		}
	}

	function $ReleaseStreams(this$static) {
		$ReleaseMFStream(this$static);
		this$static._rangeEncoder.Stream = null;
	}

	function $SetDictionarySize_0(this$static, dictionarySize) {
		var dicLogSize;
		if (dictionarySize < 1 || dictionarySize > 536870912) {
			return false;
		}
		this$static._dictionarySize = dictionarySize;
		for (dicLogSize = 0; dictionarySize > 1 << dicLogSize; ++dicLogSize) {
		}
		this$static._distTableSize = dicLogSize * 2;
		return true;
	}

	function $SetLcLpPb_0(this$static, lc, lp, pb) {
		if (lp < 0 || lp > 4 || lc < 0 || lc > 8 || pb < 0 || pb > 4) {
			return false;
		}
		this$static._numLiteralPosStateBits = lp;
		this$static._numLiteralContextBits = lc;
		this$static._posStateBits = pb;
		this$static._posStateMask = (1 << this$static._posStateBits) - 1;
		return true;
	}

	function $SetMatchFinder(this$static, matchFinderIndex) {
		var matchFinderIndexPrev;
		if (matchFinderIndex < 0 || matchFinderIndex > 2) {
			return false;
		}
		matchFinderIndexPrev = this$static._matchFinderType;
		this$static._matchFinderType = matchFinderIndex;
		if (!!this$static._matchFinder && matchFinderIndexPrev != this$static._matchFinderType) {
			this$static._dictionarySizePrev = -1;
			this$static._matchFinder = null;
		}
		return true;
	}

	function $SetNumFastBytes(this$static, numFastBytes) {
		if (numFastBytes < 5 || numFastBytes > 273) {
			return false;
		}
		this$static._numFastBytes = numFastBytes;
		return true;
	}

	function $WriteCoderProperties(this$static, outStream) {
		var i;
		this$static.properties[0] = (this$static._posStateBits * 5 + this$static._numLiteralPosStateBits) * 9 + this$static._numLiteralContextBits << 24 >> 24;
		for (i = 0; i < 4; ++i) {
			this$static.properties[1 + i] = this$static._dictionarySize >> 8 * i << 24 >> 24;
		}
		$write_0(outStream, this$static.properties, 0, 5);
	}

	function $WriteEndMarker(this$static, posState) {
		var lenToPosState;
		if (!this$static._writeEndMark) {
			return;
		}
		$Encode_3(this$static._rangeEncoder, this$static._isMatch, (this$static._state << 4) + posState, 1);
		$Encode_3(this$static._rangeEncoder, this$static._isRep, this$static._state, 0);
		this$static._state = this$static._state < 7?7:10;
		$Encode_0(this$static._lenEncoder, this$static._rangeEncoder, 0, posState);
		lenToPosState = GetLenToPosState(2);
		$Encode_2(this$static._posSlotEncoder[lenToPosState], this$static._rangeEncoder, 63);
		$EncodeDirectBits(this$static._rangeEncoder, 67108863, 26);
		$ReverseEncode(this$static._posAlignEncoder, this$static._rangeEncoder, 15);
	}

	function GetPosSlot(pos) {
		if (pos < 2048) {
			return g_FastPos[pos];
		}
		if (pos < 2097152) {
			return g_FastPos[pos >> 10] + 20;
		}
		return g_FastPos[pos >> 20] + 40;
	}

	function GetPosSlot2(pos) {
		if (pos < 131072) {
			return g_FastPos[pos >> 6] + 12;
		}
		if (pos < 134217728) {
			return g_FastPos[pos >> 16] + 32;
		}
		return g_FastPos[pos >> 26] + 52;
	}

	function getClass_38() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit;
	}

	function Encoder() {
	}

	_ = Encoder.prototype = new Object_0();
	_.getClass$ = getClass_38;
	_.typeId$ = 0;
	_._additionalOffset = 0;
	_._alignPriceCount = 0;
	_._dictionarySize = 4194304;
	_._dictionarySizePrev = -1;
	_._distTableSize = 44;
	_._finished = false;
	_._inStream = null;
	_._longestMatchLength = 0;
	_._longestMatchWasFound = false;
	_._matchFinder = null;
	_._matchFinderType = 1;
	_._matchPriceCount = 0;
	_._needReleaseMFStream = false;
	_._numDistancePairs = 0;
	_._numFastBytes = 32;
	_._numFastBytesPrev = -1;
	_._numLiteralContextBits = 3;
	_._numLiteralPosStateBits = 0;
	_._optimumCurrentIndex = 0;
	_._optimumEndIndex = 0;
	_._posStateBits = 2;
	_._posStateMask = 3;
	_._previousByte = 0;
	_._state = 0;
	_._writeEndMark = false;
	_.backRes = 0;
	_.nowPos64 = P0_longLit;
	var g_FastPos;
	function $Encode(this$static, rangeEncoder, symbol, posState) {
		if (symbol < 8) {
			$Encode_3(rangeEncoder, this$static._choice, 0, 0);
			$Encode_2(this$static._lowCoder[posState], rangeEncoder, symbol);
		} else {
			symbol -= 8;
			$Encode_3(rangeEncoder, this$static._choice, 0, 1);
			if (symbol < 8) {
				$Encode_3(rangeEncoder, this$static._choice, 1, 0);
				$Encode_2(this$static._midCoder[posState], rangeEncoder, symbol);
			} else {
				$Encode_3(rangeEncoder, this$static._choice, 1, 1);
				$Encode_2(this$static._highCoder, rangeEncoder, symbol - 8);
			}
		}
	}

	function $Encoder$LenEncoder(this$static) {
		var posState;
		this$static._choice = initDim(_3S_classLit, 0, -1, 2, 1);
		this$static._lowCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
		this$static._midCoder = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit, 0, 8, 16, 0);
		this$static._highCoder = $BitTreeEncoder(new BitTreeEncoder(), 8);
		for (posState = 0; posState < 16; ++posState) {
			this$static._lowCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
			this$static._midCoder[posState] = $BitTreeEncoder(new BitTreeEncoder(), 3);
		}
		return this$static;
	}

	function $Init_2(this$static, numPosStates) {
		var posState;
		InitBitModels_0(this$static._choice);
		for (posState = 0; posState < numPosStates; ++posState) {
			InitBitModels(this$static._lowCoder[posState].Models);
			InitBitModels(this$static._midCoder[posState].Models);
		}
		InitBitModels(this$static._highCoder.Models);
	}

	function $SetPrices(this$static, posState, numSymbols, prices, st) {
		var a0, a1, b0, b1, i;
		a0 = ($clinit_66() , ProbPrices[this$static._choice[0] >>> 2]);
		a1 = ProbPrices[2048 - this$static._choice[0] >>> 2];
		b0 = a1 + ProbPrices[this$static._choice[1] >>> 2];
		b1 = a1 + ProbPrices[2048 - this$static._choice[1] >>> 2];
		i = 0;
		for (i = 0; i < 8; ++i) {
			if (i >= numSymbols)
			return;
			prices[st + i] = a0 + $GetPrice_1(this$static._lowCoder[posState], i);
		}
		for (; i < 16; ++i) {
			if (i >= numSymbols)
			return;
			prices[st + i] = b0 + $GetPrice_1(this$static._midCoder[posState], i - 8);
		}
		for (; i < numSymbols; ++i) {
			prices[st + i] = b1 + $GetPrice_1(this$static._highCoder, i - 8 - 8);
		}
	}

	function getClass_33() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit;
	}

	function Encoder$LenEncoder() {
	}

	_ = Encoder$LenEncoder.prototype = new Object_0();
	_.getClass$ = getClass_33;
	_.typeId$ = 0;
	function $Encode_0(this$static, rangeEncoder, symbol, posState) {
		$Encode(this$static, rangeEncoder, symbol, posState);
		if (--this$static._counters[posState] == 0) {
			$SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
			this$static._counters[posState] = this$static._tableSize;
		}
	}

	function $Encoder$LenPriceTableEncoder(this$static) {
		$Encoder$LenEncoder(this$static);
		this$static._prices = initDim(_3I_classLit, 0, -1, 4352, 1);
		this$static._counters = initDim(_3I_classLit, 0, -1, 16, 1);
		return this$static;
	}

	function $GetPrice(this$static, symbol, posState) {
		return this$static._prices[posState * 272 + symbol];
	}

	function $UpdateTables(this$static, numPosStates) {
		var posState;
		for (posState = 0; posState < numPosStates; ++posState) {
			$SetPrices(this$static, posState, this$static._tableSize, this$static._prices, posState * 272);
			this$static._counters[posState] = this$static._tableSize;
		}
	}

	function getClass_34() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit;
	}

	function Encoder$LenPriceTableEncoder() {
	}

	_ = Encoder$LenPriceTableEncoder.prototype = new Encoder$LenEncoder();
	_.getClass$ = getClass_34;
	_.typeId$ = 0;
	_._tableSize = 0;
	function $Create_1(this$static, numPosBits, numPrevBits) {
		var i, numStates;
		if (this$static.m_Coders != null && this$static.m_NumPrevBits == numPrevBits && this$static.m_NumPosBits == numPosBits) {
			return;
		}
		this$static.m_NumPosBits = numPosBits;
		this$static.m_PosMask = (1 << numPosBits) - 1;
		this$static.m_NumPrevBits = numPrevBits;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		this$static.m_Coders = initDim(_3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit, 0, 5, numStates, 0);
		for (i = 0; i < numStates; ++i) {
			this$static.m_Coders[i] = $Encoder$LiteralEncoder$Encoder2(new Encoder$LiteralEncoder$Encoder2());
		}
	}

	function $GetSubCoder(this$static, pos, prevByte) {
		return this$static.m_Coders[((pos & this$static.m_PosMask) << this$static.m_NumPrevBits) + ((prevByte & 255) >>> 8 - this$static.m_NumPrevBits)];
	}

	function $Init_3(this$static) {
		var i, numStates;
		numStates = 1 << this$static.m_NumPrevBits + this$static.m_NumPosBits;
		for (i = 0; i < numStates; ++i) {
			InitBitModels_0(this$static.m_Coders[i].m_Encoders);
		}
	}

	function getClass_36() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit;
	}

	function Encoder$LiteralEncoder() {
	}

	_ = Encoder$LiteralEncoder.prototype = new Object_0();
	_.getClass$ = getClass_36;
	_.typeId$ = 0;
	_.m_Coders = null;
	_.m_NumPosBits = 0;
	_.m_NumPrevBits = 0;
	_.m_PosMask = 0;
	function $Encode_1(this$static, rangeEncoder, symbol) {
		var bit, context, i;
		context = 1;
		for (i = 7; i >= 0; --i) {
			bit = symbol >> i & 1;
			$Encode_3(rangeEncoder, this$static.m_Encoders, context, bit);
			context = context << 1 | bit;
		}
	}

	function $EncodeMatched(this$static, rangeEncoder, matchByte, symbol) {
		var bit, context, i, matchBit, same, state;
		context = 1;
		same = true;
		for (i = 7; i >= 0; --i) {
			bit = symbol >> i & 1;
			state = context;
			if (same) {
				matchBit = matchByte >> i & 1;
				state += 1 + matchBit << 8;
				same = matchBit == bit;
			}
			$Encode_3(rangeEncoder, this$static.m_Encoders, state, bit);
			context = context << 1 | bit;
		}
	}

	function $Encoder$LiteralEncoder$Encoder2(this$static) {
		this$static.m_Encoders = initDim(_3S_classLit, 0, -1, 768, 1);
		return this$static;
	}

	function $GetPrice_0(this$static, matchMode, matchByte, symbol) {
		var bit, context, i, matchBit, price;
		price = 0;
		context = 1;
		i = 7;
		if (matchMode) {
			for (; i >= 0; --i) {
				matchBit = matchByte >> i & 1;
				bit = symbol >> i & 1;
				price += GetPrice(this$static.m_Encoders[(1 + matchBit << 8) + context], bit);
				context = context << 1 | bit;
				if (matchBit != bit) {
					--i;
					break;
				}
			}
		}
		for (; i >= 0; --i) {
			bit = symbol >> i & 1;
			price += GetPrice(this$static.m_Encoders[context], bit);
			context = context << 1 | bit;
		}
		return price;
	}

	function getClass_35() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit;
	}

	function Encoder$LiteralEncoder$Encoder2() {
	}

	_ = Encoder$LiteralEncoder$Encoder2.prototype = new Object_0();
	_.getClass$ = getClass_35;
	_.typeId$ = 18;
	function $MakeAsChar(this$static) {
		this$static.BackPrev = -1;
		this$static.Prev1IsChar = false;
	}

	function $MakeAsShortRep(this$static) {
		this$static.BackPrev = 0;
		this$static.Prev1IsChar = false;
	}

	function getClass_37() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit;
	}

	function Encoder$Optimal() {
	}

	_ = Encoder$Optimal.prototype = new Object_0();
	_.getClass$ = getClass_37;
	_.typeId$ = 19;
	_.BackPrev = 0;
	_.BackPrev2 = 0;
	_.Backs0 = 0;
	_.Backs1 = 0;
	_.Backs2 = 0;
	_.Backs3 = 0;
	_.PosPrev = 0;
	_.PosPrev2 = 0;
	_.Prev1IsChar = false;
	_.Prev2 = false;
	_.Price = 0;
	_.State = 0;
	function $BitTreeDecoder(this$static, numBitLevels) {
		this$static.NumBitLevels = numBitLevels;
		this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
		return this$static;
	}

	function $Decode_0(this$static, rangeDecoder) {
		var bitIndex, m;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0; --bitIndex) {
			m = (m << 1) + $DecodeBit(rangeDecoder, this$static.Models, m);
		}
		return m - (1 << this$static.NumBitLevels);
	}

	function $ReverseDecode(this$static, rangeDecoder) {
		var bit, bitIndex, m, symbol;
		m = 1;
		symbol = 0;
		for (bitIndex = 0; bitIndex < this$static.NumBitLevels; ++bitIndex) {
			bit = $DecodeBit(rangeDecoder, this$static.Models, m);
			m <<= 1;
			m += bit;
			symbol |= bit << bitIndex;
		}
		return symbol;
	}

	function ReverseDecode(Models, startIndex, rangeDecoder, NumBitLevels) {
		var bit, bitIndex, m, symbol;
		m = 1;
		symbol = 0;
		for (bitIndex = 0; bitIndex < NumBitLevels; ++bitIndex) {
			bit = $DecodeBit(rangeDecoder, Models, startIndex + m);
			m <<= 1;
			m += bit;
			symbol |= bit << bitIndex;
		}
		return symbol;
	}

	function getClass_42() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit;
	}

	function BitTreeDecoder() {
	}

	_ = BitTreeDecoder.prototype = new Object_0();
	_.getClass$ = getClass_42;
	_.typeId$ = 20;
	_.Models = null;
	_.NumBitLevels = 0;
	function $BitTreeEncoder(this$static, numBitLevels) {
		this$static.NumBitLevels = numBitLevels;
		this$static.Models = initDim(_3S_classLit, 0, -1, 1 << numBitLevels, 1);
		return this$static;
	}

	function $Encode_2(this$static, rangeEncoder, symbol) {
		var bit, bitIndex, m;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
			--bitIndex;
			bit = symbol >>> bitIndex & 1;
			$Encode_3(rangeEncoder, this$static.Models, m, bit);
			m = m << 1 | bit;
		}
	}

	function $GetPrice_1(this$static, symbol) {
		var bit, bitIndex, m, price;
		price = 0;
		m = 1;
		for (bitIndex = this$static.NumBitLevels; bitIndex != 0;) {
			--bitIndex;
			bit = symbol >>> bitIndex & 1;
			price += GetPrice(this$static.Models[m], bit);
			m = (m << 1) + bit;
		}
		return price;
	}

	function $ReverseEncode(this$static, rangeEncoder, symbol) {
		var bit, i, m;
		m = 1;
		for (i = 0; i < this$static.NumBitLevels; ++i) {
			bit = symbol & 1;
			$Encode_3(rangeEncoder, this$static.Models, m, bit);
			m = m << 1 | bit;
			symbol >>= 1;
		}
	}

	function $ReverseGetPrice(this$static, symbol) {
		var bit, i, m, price;
		price = 0;
		m = 1;
		for (i = this$static.NumBitLevels; i != 0; --i) {
			bit = symbol & 1;
			symbol >>>= 1;
			price += GetPrice(this$static.Models[m], bit);
			m = m << 1 | bit;
		}
		return price;
	}

	function ReverseEncode(Models, startIndex, rangeEncoder, NumBitLevels, symbol) {
		var bit, i, m;
		m = 1;
		for (i = 0; i < NumBitLevels; ++i) {
			bit = symbol & 1;
			$Encode_3(rangeEncoder, Models, startIndex + m, bit);
			m = m << 1 | bit;
			symbol >>= 1;
		}
	}

	function ReverseGetPrice(Models, startIndex, NumBitLevels, symbol) {
		var bit, i, m, price;
		price = 0;
		m = 1;
		for (i = NumBitLevels; i != 0; --i) {
			bit = symbol & 1;
			symbol >>>= 1;
			price += ($clinit_66() , ProbPrices[((Models[startIndex + m] - bit ^ -bit) & 2047) >>> 2]);
			m = m << 1 | bit;
		}
		return price;
	}

	function getClass_43() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit;
	}

	function BitTreeEncoder() {
	}

	_ = BitTreeEncoder.prototype = new Object_0();
	_.getClass$ = getClass_43;
	_.typeId$ = 21;
	_.Models = null;
	_.NumBitLevels = 0;
	function $DecodeBit(this$static, probs, index) {
		var newBound, prob;
		prob = probs[index];
		newBound = (this$static.Range >>> 11) * prob;
		if ((this$static.Code ^ -2147483648) < (newBound ^ -2147483648)) {
			this$static.Range = newBound;
			probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
			return 0;
		} else {
			this$static.Range -= newBound;
			this$static.Code -= newBound;
			probs[index] = prob - (prob >>> 5) << 16 >> 16;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
			return 1;
		}
	}

	function $DecodeDirectBits(this$static, numTotalBits) {
		var i, result, t;
		result = 0;
		for (i = numTotalBits; i != 0; --i) {
			this$static.Range >>>= 1;
			t = this$static.Code - this$static.Range >>> 31;
			this$static.Code -= this$static.Range & t - 1;
			result = result << 1 | 1 - t;
			if ((this$static.Range & -16777216) == 0) {
				this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
				this$static.Range <<= 8;
			}
		}
		return result;
	}

	function $Init_8(this$static) {
		var i;
		this$static.Code = 0;
		this$static.Range = -1;
		for (i = 0; i < 5; ++i) {
			this$static.Code = this$static.Code << 8 | $read(this$static.Stream);
		}
	}

	function InitBitModels(probs) {
		var i;
		for (i = 0; i < probs.length; ++i) {
			probs[i] = 1024;
		}
	}

	function getClass_44() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit;
	}

	function Decoder_0() {
	}

	_ = Decoder_0.prototype = new Object_0();
	_.getClass$ = getClass_44;
	_.typeId$ = 0;
	_.Code = 0;
	_.Range = 0;
	_.Stream = null;
	function $clinit_66() {
		$clinit_66 = nullMethod;
		var end, i, j, start;
		ProbPrices = initDim(_3I_classLit, 0, -1, 512, 1);
		for (i = 8; i >= 0; --i) {
			start = 1 << 9 - i - 1;
			end = 1 << 9 - i;
			for (j = start; j < end; ++j) {
				ProbPrices[j] = (i << 6) + (end - j << 6 >>> 9 - i - 1);
			}
		}
	}

	function $Encode_3(this$static, probs, index, symbol) {
		var newBound, prob;
		prob = probs[index];
		newBound = (this$static.Range >>> 11) * prob;
		if (symbol == 0) {
			this$static.Range = newBound;
			probs[index] = prob + (2048 - prob >>> 5) << 16 >> 16;
		} else {
			this$static.Low = add(this$static.Low, and(fromInt(newBound), Pffffffff_longLit));
			this$static.Range -= newBound;
			probs[index] = prob - (prob >>> 5) << 16 >> 16;
		}
		if ((this$static.Range & -16777216) == 0) {
			this$static.Range <<= 8;
			$ShiftLow(this$static);
		}
	}

	function $EncodeDirectBits(this$static, v, numTotalBits) {
		var i;
		for (i = numTotalBits - 1; i >= 0; --i) {
			this$static.Range >>>= 1;
			if ((v >>> i & 1) == 1) {
				this$static.Low = add(this$static.Low, fromInt(this$static.Range));
			}
			if ((this$static.Range & -16777216) == 0) {
				this$static.Range <<= 8;
				$ShiftLow(this$static);
			}
		}
	}

	function $FlushData(this$static) {
		var i;
		for (i = 0; i < 5; ++i) {
			$ShiftLow(this$static);
		}
	}

	function $GetProcessedSizeAdd(this$static) {
		return add(add(fromInt(this$static._cacheSize), this$static._position), P4_longLit);
	}

	function $Init_9(this$static) {
		this$static._position = P0_longLit;
		this$static.Low = P0_longLit;
		this$static.Range = -1;
		this$static._cacheSize = 1;
		this$static._cache = 0;
	}

	function $ShiftLow(this$static) {
		var LowHi, temp;
		LowHi = lowBits_0(shru(this$static.Low, 32));
		if (LowHi != 0 || compare(this$static.Low, Pff000000_longLit) < 0) {
			this$static._position = add(this$static._position, fromInt(this$static._cacheSize));
			temp = this$static._cache;
			do {
				$write(this$static.Stream, temp + LowHi);
				temp = 255;
			} while (--this$static._cacheSize != 0);
			this$static._cache = lowBits_0(this$static.Low) >>> 24;
		}
		++this$static._cacheSize;
		this$static.Low = shl(and(this$static.Low, Pffffff_longLit), 8);
	}

	function GetPrice(Prob, symbol) {
		$clinit_66();
		return ProbPrices[((Prob - symbol ^ -symbol) & 2047) >>> 2];
	}

	function InitBitModels_0(probs) {
		$clinit_66();
		var i;
		for (i = 0; i < probs.length; ++i) {
			probs[i] = 1024;
		}
	}

	function getClass_45() {
		return Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit;
	}

	function Encoder_0() {
	}

	_ = Encoder_0.prototype = new Object_0();
	_.getClass$ = getClass_45;
	_.typeId$ = 0;
	_.Low = P0_longLit;
	_.Range = 0;
	_.Stream = null;
	_._cache = 0;
	_._cacheSize = 0;
	_._position = P0_longLit;
	var ProbPrices;
	function decode(utf) {
		var buf, i, x, y, z;
		buf = $StringBuilder(new StringBuilder());
		for (i = 0; i < utf.length; ++i) {
			x = utf[i] & 255;
			if ((x & 128) == 0) {
				if (x == 0) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$appendNonNull(buf.data, String.fromCharCode(x & 65535));
			} else if ((x & 224) == 192) {
				if (i + 1 >= utf.length) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				y = utf[++i] & 255;
				if ((y & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$append(buf.data, String.fromCharCode((x & 31) << 6 & 65535 | y & 63));
			} else if ((x & 240) == 224) {
				if (i + 2 >= utf.length) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				y = utf[++i] & 255;
				if ((y & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				z = utf[++i] & 255;
				if ((z & 192) != 128) {
					throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
				}
				$appendNonNull(buf.data, String.fromCharCode(((x & 15) << 12 | (y & 63) << 6 | z & 63) & 65535));
			} else {
				throw $IllegalArgumentException(new IllegalArgumentException(), 'invalid UTF-8');
			}
		}
		return $toString(buf.data);
	}

	function encode(s) {
		var ch, chars, data, elen, i, charArr, n;
		chars = (n = s.length , charArr = initDim(_3C_classLit, 0, -1, n, 1) , $getChars(s, 0, n, charArr, 0) , charArr);
		elen = 0;
		for (i = 0; i < s.length; ++i) {
			ch = chars[i];
			if (ch >= 1 && ch <= 127) {
				++elen;
			} else if (ch == 0 || ch >= 128 && ch <= 2047) {
				elen += 2;
			} else {
				elen += 3;
			}
		}
		data = initDim(_3B_classLit, 0, -1, elen, 1);
		elen = 0;
		for (i = 0; i < s.length; ++i) {
			ch = chars[i];
			if (ch >= 1 && ch <= 127) {
				data[elen++] = ch << 24 >> 24;
			} else if (ch == 0 || ch >= 128 && ch <= 2047) {
				data[elen++] = (192 | ch >> 6 & 31) << 24 >> 24;
				data[elen++] = (128 | ch & 63) << 24 >> 24;
			} else {
				data[elen++] = (224 | ch >> 12 & 15) << 24 >> 24;
				data[elen++] = (128 | ch >> 6 & 63) << 24 >> 24;
				data[elen++] = (128 | ch & 63) << 24 >> 24;
			}
		}
		return data;
	}

	function $LZMADemo(this$static) {
		return this$static;
	}
	function toDouble(a) {
		return a[1] + a[0];
	}

	function compress() {
		var this$static = $LZMADemo(new LZMADemo()),
			percent,
			start,
			/// Arguments
			str = arguments[0],
			mode = arguments[1],
			callback_num,
			on_finish,
			on_progress;

		if (typeof arguments[2] === "function") {
			on_finish = arguments[2];
			if (typeof arguments[3] === "function") {
				on_progress = arguments[3];
			}
		} else {
			callback_num = arguments[2];
		}

		this$static.mode = get_mode_obj(mode);

		this$static.c = $LZMAByteArrayCompressor(new LZMAByteArrayCompressor(), encode(str), this$static.mode);

		if (on_progress) {
			on_progress(0);
		} else if (typeof callback_num !== "undefined") {
			update_progress(0, callback_num);
		}

		function do_action() {
			var res;
			start = (new Date).getTime();
			while ($execute(this$static.c)) {
				percent = toDouble(this$static.c.chunker.inBytesProcessed) / toDouble(this$static.c.length_0);
				/// If about 200 miliseconds have passed, update the progress.
				if ((new Date).getTime() - start > 200) {
					if (on_progress) {
						on_progress(percent);
					} else if (typeof callback_num !== "undefined") {
						update_progress(percent, callback_num);
					}
					setTimeout(do_action, 0);
					return false;
				}
			}

			if (on_progress) {
				on_progress(1);
			} else if (typeof callback_num !== "undefined") {
				update_progress(1, callback_num);
			}

			/// .slice(0) is required for Firefox 4.0 (because I think arrays are now passed by reference, which is not allowed when sending messages to or from web workers).
			/// .slice(0) simply returns the entire array by value.
			res = $toByteArray(this$static.c.output).slice(0);

			if (on_finish) {
				on_finish(res);
			} else if (typeof callback_num !== "undefined") {
				postMessage({
					action: action_compress,
					callback_num: callback_num,
					result: res
				});
			}
		}

		setTimeout(do_action, 1);
	}

	function decompress() {
		var this$static = $LZMADemo(new LZMADemo()),
			percent,
			data,
			start,
			text,
			/// Arguments
			byte_arr = arguments[0],
			callback_num,
			on_finish,
			on_progress;

		if (typeof arguments[1] === "function") {
			on_finish = arguments[1];
			if (typeof arguments[2] === "function") {
				on_progress = arguments[2];
			}
		} else {
			callback_num = arguments[1];
		}

		data = initValues(_3B_classLit, 0, -1, byte_arr);

		this$static.d = $LZMAByteArrayDecompressor(new LZMAByteArrayDecompressor(), data);

		if (on_progress) {
			on_progress(0);
		} else if (typeof callback_num !== "undefined") {
			update_progress(0, callback_num);
		}

		function do_action() {
			var res;
			start = (new Date).getTime();
			while ($execute_0(this$static.d)) {
				percent = toDouble(this$static.d.chunker.decoder.nowPos64) / toDouble(this$static.d.length_0);
				/// If about 200 miliseconds have passed, update the progress.
				if ((new Date).getTime() - start > 200) {
					if (on_progress) {
						on_progress(percent);
					} else if (typeof callback_num !== "undefined") {
						update_progress(percent, callback_num);
					}
					setTimeout(do_action, 0);
					return false;
				}
			}

			if (on_progress) {
				on_progress(1);
			} else if (typeof callback_num !== "undefined") {
				update_progress(1, callback_num);
			}

			res = decode($toByteArray(this$static.d.output));

			if (on_finish) {
				on_finish(res);
			} else if (typeof callback_num !== "undefined") {
				postMessage({
					action: action_decompress,
					callback_num: callback_num,
					result: res
				});
			}
		}

		setTimeout(do_action, 0);
	}

	function $onModuleLoad(this$static) {
		compress(this$static);
		decompress(this$static);
	}

	function getClass_46() {
		return Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit;
	}

	function LZMADemo () {}

	_ = LZMADemo.prototype = new Object_0();
	_.getClass$ = getClass_46;
	_.typeId$ = 0;
	_.c = null;
	_.d = null;
	var DEFAULT_COMPRESSION_MODE;
	function init() {
		!!$stats && $stats({moduleName:$moduleName, subSystem:'startup', evtGroup:'moduleStartup', millis:(new Date()).getTime(), type:'onModuleLoadStart', className:'org.dellroad.lzma.demo.client.LZMADemo'});
	}

	function gwtOnLoad(errFn, modName, modBase) {
		$moduleName = modName;
		$moduleBase = modBase;
		if (errFn) {
			try {
				init();
			}
			catch (e) {
				errFn(modName);
			}
		} else {
			init();
		}
	}

	function nullMethod() {
	}

	var Ljava_lang_Object_2_classLit = createForClass('java.lang.', 'Object'),
		Ljava_lang_Throwable_2_classLit = createForClass('java.lang.', 'Throwable'),
		Ljava_lang_Exception_2_classLit = createForClass('java.lang.', 'Exception'),
		Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang.', 'RuntimeException'),
		Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptException'),
		Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client.', 'JavaScriptObject$'), _3_3D_classLit = createForArray('', '[[D'),
		Ljava_io_InputStream_2_classLit = createForClass('java.io.', 'InputStream'),
		Ljava_io_ByteArrayInputStream_2_classLit = createForClass('java.io.', 'ByteArrayInputStream'), _3B_classLit = createForArray('', '[B'),
		Ljava_io_OutputStream_2_classLit = createForClass('java.io.', 'OutputStream'),
		Ljava_io_ByteArrayOutputStream_2_classLit = createForClass('java.io.', 'ByteArrayOutputStream'),
		Ljava_io_IOException_2_classLit = createForClass('java.io.', 'IOException'),
		Ljava_lang_Enum_2_classLit = createForClass('java.lang.', 'Enum'),
		Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang.', 'ArithmeticException'),
		Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang.', 'ArrayStoreException'), _3C_classLit = createForArray('', '[C'),
		Ljava_lang_Class_2_classLit = createForClass('java.lang.', 'Class'),
		Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang.', 'ClassCastException'),
		Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang.', 'IllegalArgumentException'),
		Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang.', 'IllegalStateException'),
		Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang.', 'IndexOutOfBoundsException'), _3I_classLit = createForArray('', '[I'),
		Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang.', 'NullPointerException'),
		Ljava_lang_String_2_classLit = createForClass('java.lang.', 'String'),
		Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang.', 'StringBuilder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_InWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'InWindow'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_BinTree_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'BinTree'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZ_OutWindow_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZ.', 'OutWindow'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Chunker_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Chunker'), _3S_classLit = createForArray('', '[S'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LenDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LenDecoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Decoder$LiteralDecoder$Decoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Decoder$LiteralDecoder$Decoder2'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal;'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder;'), _3J_classLit = createForArray('', '[J'), _3Z_classLit = createForArray('', '[Z'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder'), _3Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForArray('[Lorg.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2;'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LiteralEncoder$Encoder2_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LiteralEncoder$Encoder2'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$LenPriceTableEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$LenPriceTableEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_LZMA_Encoder$Optimal_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.LZMA.', 'Encoder$Optimal'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeDecoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeDecoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_BitTreeEncoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'BitTreeEncoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Decoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Decoder'),
		Lorg_dellroad_lzma_client_SevenZip_Compression_RangeCoder_Encoder_2_classLit = createForClass('org.dellroad.lzma.client.SevenZip.Compression.RangeCoder.', 'Encoder'),
		Lorg_dellroad_lzma_client_CompressionMode_2_classLit = createForEnum('org.dellroad.lzma.client.', 'CompressionMode'),
		Lorg_dellroad_lzma_client_LZMACompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMACompressor'),
		Lorg_dellroad_lzma_client_LZMAByteArrayCompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayCompressor'),
		Lorg_dellroad_lzma_client_LZMADecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMADecompressor'),
		Lorg_dellroad_lzma_client_LZMAByteArrayDecompressor_2_classLit = createForClass('org.dellroad.lzma.client.', 'LZMAByteArrayDecompressor'),
		Lorg_dellroad_lzma_demo_client_LZMADemo_2_classLit = createForClass('org.dellroad.lzma.demo.client.', 'LZMADemo');

	gwtOnLoad(function() {},'lzma_demo','');


	var get_mode_obj = (function () {
		var modes = [
						{dictionarySize: 16, fb: 64,  matchFinder: 0, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 20, fb: 64,  matchFinder: 0, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 19, fb: 64,  matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 20, fb: 64,  matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 21, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 22, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 23, fb: 128, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 24, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2},
						{dictionarySize: 25, fb: 255, matchFinder: 1, lc: 3, lp: 0, pb: 2}
					];

		function isNumber(n) {
			return !isNaN(parseFloat(n)) && isFinite(n);
		}

		return function (mode) {
			if (!isNumber(mode)) {
				mode = 1;
			} else {
				if (mode < 1) {
					mode = 1;
				} else if (mode > 9) {
					mode = 9;
				}
			}

			return modes[mode - 1];
		}
	}());

	return {
		compress:   compress,
		decompress: decompress
	};
}());

module.exports = LZMA;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $ = __webpack_require__(17);
var _ = __webpack_require__(0);
var LZMA = __webpack_require__(113);
var util = __webpack_require__(7);
var WindshaftConfig = __webpack_require__(42);
var RequestTracker = __webpack_require__(112);
var log = __webpack_require__(27);
var parseWindshaftErrors = __webpack_require__(25);

var validatePresenceOfOptions = function validatePresenceOfOptions(options, requiredOptions) {
  var missingOptions = _.filter(requiredOptions, function (option) {
    return !options[option];
  });
  if (missingOptions.length) {
    throw new Error('WindshaftClient could not be initialized. The following options are missing: ' + missingOptions.join(', '));
  }
};

var MAX_URL_LENGTH = 2033;
var COMPRESSION_LEVEL = 3;
/* The max number of times the same map can be instantiated */
var MAP_INSTANTIATION_LIMIT = 3;

/**
 * Windshaft client. It provides a method to create instances of maps in Windshaft.
 * @param {object} options Options to set up the client
 */
var WindshaftClient = function WindshaftClient(settings) {
  validatePresenceOfOptions(settings, ['urlTemplate', 'userName']);

  if (settings.templateName) {
    this.endpoints = {
      get: [WindshaftConfig.MAPS_API_BASE_URL, 'named', settings.templateName, 'jsonp'].join('/'),
      post: [WindshaftConfig.MAPS_API_BASE_URL, 'named', settings.templateName].join('/')
    };
  } else {
    this.endpoints = {
      get: WindshaftConfig.MAPS_API_BASE_URL,
      post: WindshaftConfig.MAPS_API_BASE_URL
    };
  }

  this.url = settings.urlTemplate.replace('{user}', settings.userName);
  this._requestTracker = new RequestTracker(MAP_INSTANTIATION_LIMIT);
};

WindshaftClient.prototype.instantiateMap = function (request) {
  // TODO: update options, use promises or explicit callbacks function (error, params).
  if (this._requestTracker.canRequestBePerformed(request)) {
    this._performRequest(request, {
      success: function (response) {
        this._requestTracker.track(request, response);
        if (response.errors) {
          var parsedErrors = parseWindshaftErrors(response);
          request.options.error && request.options.error(parsedErrors);
        } else {
          request.options.success && request.options.success(response);
        }
      }.bind(this),
      error: function (xhr, textStatus) {
        // Ignore error if request was explicitly aborted
        if (textStatus === 'abort') return;
        var errors = {};
        var parsedErrors = {};
        try {
          errors = JSON.parse(xhr.responseText);
          parsedErrors = parseWindshaftErrors(errors);
        } catch (e) {}
        this._requestTracker.track(request, errors);
        request.options.error && request.options.error(parsedErrors);
      }.bind(this)
    });
  } else {
    log.error('Maximum number of subsequent equal requests to the Maps API reached (' + MAP_INSTANTIATION_LIMIT + '):', request.payload, request.params);
    request.options.error && request.options.error({});
  }
};

WindshaftClient.prototype._performRequest = function (request, ajaxOptions) {
  var mapDefinition = request.payload;
  var params = request.params;

  var encodedURL = this._generateEncodedURL(mapDefinition, params);
  if (this._isURLValid(encodedURL)) {
    this._get(encodedURL, ajaxOptions);
  } else {
    this._generateCompressedURL(mapDefinition, params, function (compressedURL) {
      if (this._isURLValid(compressedURL)) {
        this._get(compressedURL, ajaxOptions);
      } else {
        var url = this._getURL(params, 'post');
        this._post(url, mapDefinition, ajaxOptions);
      }
    }.bind(this));
  }
};

WindshaftClient.prototype._generateEncodedURL = function (payload, params) {
  params = _.extend({
    config: JSON.stringify(payload)
  }, params);

  return this._getURL(params);
};

WindshaftClient.prototype._generateCompressedURL = function (payload, params, callback) {
  var data = JSON.stringify({
    config: JSON.stringify(payload)
  });

  LZMA.compress(data, COMPRESSION_LEVEL, function (compressedPayload) {
    params = _.extend({
      lzma: util.array2hex(compressedPayload)
    }, params);

    callback(this._getURL(params));
  }.bind(this));
};

WindshaftClient.prototype._isURLValid = function (url) {
  return url.length < MAX_URL_LENGTH;
};

WindshaftClient.prototype._post = function (url, payload, options) {
  this._abortPreviousRequest();
  this._previousRequest = $.ajax({
    url: url,
    crossOrigin: true,
    method: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    data: JSON.stringify(payload),
    success: options.success,
    error: options.error
  });
};

WindshaftClient.prototype._get = function (url, options) {
  this._abortPreviousRequest();
  this._previousRequest = $.ajax({
    url: url,
    method: 'GET',
    dataType: 'jsonp',
    jsonpCallback: this._jsonpCallbackName(url),
    cache: true,
    success: options.success,
    error: options.error
  });
};

WindshaftClient.prototype._abortPreviousRequest = function () {
  if (this._previousRequest) {
    this._previousRequest.abort();
  }
};

WindshaftClient.prototype._getURL = function (params, method) {
  method = method || 'get';
  var queryString = this._convertParamsToQueryString(params);
  var endpoint = this.endpoints[method];
  return [this.url, endpoint].join('/') + queryString;
};

WindshaftClient.prototype._convertParamsToQueryString = function (params) {
  var queryString = [];
  _.each(params, function (value, name) {
    if (value instanceof Array) {
      _.each(value, function (oneValue) {
        queryString.push(name + '[]=' + oneValue);
      });
    } else if (value instanceof Object) {
      queryString.push(name + '=' + encodeURIComponent(JSON.stringify(value)));
    } else {
      queryString.push(name + '=' + encodeURIComponent(value));
    }
  });
  return queryString.length > 0 ? '?' + queryString.join('&') : '';
};

WindshaftClient.prototype._jsonpCallbackName = function (payload) {
  return '_cdbc_' + util.uniqueCallbackName(payload);
};

module.exports = WindshaftClient;

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var WindshaftConfig = __webpack_require__(42);

/**
 * Wrapper over a server response to a map instantiation giving some utility methods.
 * @constructor
 * @param {object} windshaftSettings - Object containing the request options.
 * @param {string} serverResponse - The json string representing a windshaft response to a map instantiation.
 */
function Response(windshaftSettings, serverResponse) {
  this._windshaftSettings = windshaftSettings;
  this._layerGroupId = serverResponse.layergroupid;
  this._layers = serverResponse.metadata.layers;
  this._dataviews = serverResponse.metadata.dataviews;
  this._analyses = serverResponse.metadata.analyses;
  this._cdnUrl = serverResponse.cdn_url;
}

/**
 * Return the indexes of the layers for a certain type.
 * @example
 * // layers = [ carto, carto, tiled, plain, tiled, torque];
 * getLayerIndexesByType('mapnik') // [0, 1]
 * getLayerIndexesByType('tiled') // [2, 4]
 * getLayerIndexesByType('torque') // [5]
 * @param {string} Type - The type of the layers: mapnik, torque, plain, tiled.
 */
Response.prototype.getLayerIndexesByType = function getLayerIndexesByType(layerType) {
  return _.reduce(this._getLayers(), function (layerIndexes, layer, index) {
    if (layer.type === layerType) {
      layerIndexes.push(index);
    }
    return layerIndexes;
  }, []);
};

/**
 * Build the base url to build windshaft map requests.
 */
Response.prototype.getBaseURL = function getBaseURL() {
  return [this._getHost(), WindshaftConfig.MAPS_API_BASE_URL, this._layerGroupId].join('/');
};

/**
 * Build the base url for static maps.
 */
Response.prototype.getStaticBaseURL = function getStaticBaseURL() {
  return [this._getHost(), WindshaftConfig.MAPS_API_BASE_URL, 'static/center', this._layerGroupId].join('/');
};

Response.prototype._getHost = function _getHost() {
  var urlTemplate = this._windshaftSettings.urlTemplate;
  var userName = this._windshaftSettings.userName;
  var protocol = this.getProtocol();
  var cdnUrl = this._cdnUrl;
  var cdnHost = cdnUrl && cdnUrl[protocol];
  var templates = cdnUrl && cdnUrl.templates;

  if (templates && templates[protocol]) {
    var template = templates[protocol];
    return template.url + '/' + userName;
  }

  if (cdnHost) {
    return [protocol, '://', cdnHost, '/', userName].join('');
  }

  return urlTemplate.replace('{user}', userName);
};

Response.prototype.getProtocol = function getProtocol() {
  return this._isHttps() ? 'https' : 'http';
};

Response.prototype._isHttps = function isHttps() {
  return this._windshaftSettings.urlTemplate.indexOf('https') === 0;
};

Response.prototype.getSupportedSubdomains = function getSupportedSubdomains() {
  var templates = this._cdnUrl && this._cdnUrl.templates;
  var protocol = this.getProtocol();
  if (templates && templates[protocol]) {
    return templates[protocol].subdomains;
  }
  return [];
};

Response.prototype.getLayerMetadata = function getLayerMetadata(layerIndex) {
  var layerMeta = {};
  var layers = this._getLayers();
  if (layers && layers[layerIndex]) {
    layerMeta = layers[layerIndex].meta || {};
  }
  return layerMeta;
};

Response.prototype.getDataviewMetadata = function getDataviewMetadata(dataviewId) {
  var dataviews = this._getDataviews();
  if (dataviews && dataviews[dataviewId]) {
    return dataviews[dataviewId];
  }

  // Try to get dataview's metatadta from the 'widgets' dictionary inside the metadata of each of the layers
  dataviews = {};
  var layersDataviews = _.compact(_.map(this._getLayers(), function (layer) {
    return layer.widgets;
  }));
  _.each(layersDataviews, function (layerDataviews) {
    _.extend(dataviews, layerDataviews);
  });

  if (dataviews && dataviews[dataviewId]) {
    return dataviews[dataviewId];
  }
};

Response.prototype.getAnalysisNodeMetadata = function (analysisId) {
  var metadata = {};
  var nodes = _.map(this._getAnalyses(), function (analysis) {
    return analysis.nodes;
  });
  _.each(nodes, function (node) {
    _.extend(metadata, node);
  });

  return metadata[analysisId];
};

/**
 * Return the array with all the layers in the response
 */
Response.prototype._getLayers = function _getLayers() {
  return this._layers;
};

Response.prototype._getDataviews = function _getDataviews() {
  return this._dataviews;
};

Response.prototype._getAnalyses = function _getAnalyses() {
  return this._analyses;
};

module.exports = Response;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Simple value object that holds everything need to instantiate a map using the Maps API
 */
var Request = function Request(payload, params, options) {
  this.payload = payload;
  this.params = params;
  this.options = options;
};

Request.prototype.toHashCode = function () {
  return JSON.stringify(this.payload) + JSON.stringify(this.params) + JSON.stringify(this.options);
};

Request.prototype.equals = function (request) {
  return this.toHashCode() === request.toHashCode();
};

module.exports = Request;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LayerTypes = __webpack_require__(16);

/**
 * Transform a map visualization into a json payload compatible with the windshaft API.
 */
function serialize(layersCollection, dataviewsCollection) {
  // Named map templates include both http, cartodb and torque layers
  // so we need to iterate through all the layers in the collection to
  // get the indexes rights. Templates are not aware of Google Maps
  // base layers, so we have to ignore them to get indexes right.
  var layers = layersCollection.filter(function (layer) {
    return !LayerTypes.isGoogleMapsBaseLayer(layer);
  });

  return {
    buffersize: {
      mvt: 0
    },
    styles: _getStylesFromLayers(layers)
  };
}

function _getStylesFromLayers(layers) {
  return _.reduce(layers, function (styles, layer, index) {
    if (layer.get('cartocss')) {
      styles[index] = layer.get('cartocss');
    }
    return styles;
  }, {});
}

module.exports = {
  serialize: serialize
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Rule = __webpack_require__(15);

var VALID_PROPS = ['line-color', 'marker-fill', 'polygon-fill', 'marker-file'];
var VALID_MAPPINGS = ['='];

var isEveryBucketValid = function isEveryBucketValid(rule) {
  var buckets = rule.getBucketsWithCategoryFilter();
  return _.every(buckets, function (bucket) {
    return bucket.filter.name != null && bucket.value != null;
  });
};

var generateCategories = function generateCategories(bucketsColor, bucketsIcon) {
  return _.map(bucketsColor, function (bucketColor) {
    var bucketIcon = _.find(bucketsIcon, function (bucket) {
      return bucket.filter.name === bucketColor.filter.name;
    });
    return {
      title: bucketColor.filter.name,
      icon: bucketIcon && bucketIcon.value ? _extractURL(bucketIcon.value) : '',
      color: bucketColor.value
    };
  });
};

var _extractURL = function _extractURL(str) {
  var url = '';
  var pattern = /(http|https):\/\/\S+\.(?:gif|jpeg|jpg|png|webp|svg)/g;
  var match = str.match(pattern);
  if (match) {
    url = match[0];
  }
  return url;
};

module.exports = {
  canAdapt: function canAdapt(rule) {
    rule = new Rule(rule);
    return rule.matchesAnyProperty(VALID_PROPS) && rule.matchesAnyMapping(VALID_MAPPINGS) && isEveryBucketValid(rule);
  },

  adapt: function adapt(rules) {
    var ruleColor = new Rule(rules[0]);
    var ruleIcon = new Rule(rules[1]);

    var categoryBucketsColor = ruleColor.getBucketsWithCategoryFilter();
    var categoryBucketsIcon = ruleIcon.getBucketsWithCategoryFilter();
    var defaultBucketsColor = ruleColor.getBucketsWithDefaultFilter();
    var defaultBucketsIcon = ruleIcon.getBucketsWithDefaultFilter();

    return {
      categories: generateCategories(categoryBucketsColor, categoryBucketsIcon),
      default: {
        icon: _.isEmpty(defaultBucketsIcon) ? '' : _extractURL(defaultBucketsIcon[0].value),
        color: _.isEmpty(defaultBucketsColor) ? '' : defaultBucketsColor[0].value
      }
    };
  }
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Rule = __webpack_require__(15);

var VALID_PROPS = ['line-color', 'marker-fill', 'polygon-fill'];
var VALID_MAPPINGS = ['>', '>=', '<', '<='];

var isEveryBucketValid = function isEveryBucketValid(rule) {
  var buckets = rule.getBucketsWithRangeFilter();
  return _.every(buckets, function (bucket) {
    return bucket.filter.start != null && bucket.filter.end != null;
  });
};

var generateColors = function generateColors(buckets) {
  if (buckets.length === 1) {
    var bucket = buckets[0];
    var labelStart = bucket.filter.start;
    var labelEnd = bucket.filter.end;
    return [{ value: bucket.value, label: labelStart.toString() }, { value: bucket.value, label: labelEnd.toString() }];
  }
  return _.map(buckets, function (bucket, i) {
    var label = '';
    if (i === 0) {
      label = bucket.filter.start;
    } else if (i === buckets.length - 1) {
      label = bucket.filter.end;
    }
    return { value: bucket.value, label: label.toString() };
  });
};

module.exports = {
  canAdapt: function canAdapt(rule) {
    rule = new Rule(rule);
    return rule.matchesAnyProperty(VALID_PROPS) && rule.matchesAnyMapping(VALID_MAPPINGS) && isEveryBucketValid(rule);
  },

  adapt: function adapt(rules) {
    var rule = new Rule(rules[0]);

    var rangeBuckets = rule.getBucketsWithRangeFilter();
    var lastBucket = _.last(rangeBuckets);
    var firstBucket = _.first(rangeBuckets);

    return {
      colors: generateColors(rangeBuckets),
      avg: rule.getFilterAvg(),
      max: lastBucket.filter.end,
      min: firstBucket.filter.start
    };
  }
};

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Rule = __webpack_require__(15);

var VALID_PROPS = ['marker-width', 'line-width'];

var isEveryBucketValid = function isEveryBucketValid(rule) {
  var buckets = rule.getBucketsWithRangeFilter();
  return _.every(buckets, function (bucket) {
    return bucket.filter.start != null && bucket.filter.end != null;
  });
};

var calculateValues = function calculateValues(buckets) {
  var lastBucket = _.last(buckets);
  return _.chain(buckets).map('filter').map('start').concat(lastBucket.filter.end).value();
};

module.exports = {
  canAdapt: function canAdapt(rule) {
    rule = new Rule(rule);
    return rule.matchesAnyProperty(VALID_PROPS) && isEveryBucketValid(rule);
  },

  adapt: function adapt(rules) {
    var rule = new Rule(rules[0]);
    var buckets = rule.getBucketsWithRangeFilter();

    return {
      values: calculateValues(buckets),
      sizes: _.map(buckets, 'value'),
      avg: rule.getFilterAvg()
    };
  }
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ADAPTERS = {
  bubble: __webpack_require__(120),
  choropleth: __webpack_require__(119),
  category: __webpack_require__(118)
};

module.exports = {
  getAdapterForLegend: function getAdapterForLegend(legendModel) {
    return ADAPTERS[legendModel.get('type')];
  }
};

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Creates cdb object, mutated in the entry file cartodb.js
// Used to avoid circular dependencies
var cdb = {};

cdb.VERSION = __webpack_require__(26).version;
cdb.DEBUG = false;

cdb.helpers = {};

module.exports = cdb;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var log = __webpack_require__(27);
var util = __webpack_require__(7);
var RuleToLegendModelAdapters = __webpack_require__(121);
var AnalysisService = __webpack_require__(29);
var Backbone = __webpack_require__(1);

function getSubdomain(subdomains, resource) {
  var index = util.crc32(resource) % subdomains.length;
  return subdomains[index];
}

/**
 * This class exposes a method that knows how to set/update the metadata on internal
 * CartoDB.js models that are linked to a "resource" in the Maps API.
 */
var ModelUpdater = function ModelUpdater(deps) {
  if (!deps.layerGroupModel) throw new Error('layerGroupModel is required');
  if (!deps.layersCollection) throw new Error('layersCollection is required');
  if (!deps.dataviewsCollection) throw new Error('dataviewsCollection is required');

  this._layerGroupModel = deps.layerGroupModel;
  this._layersCollection = deps.layersCollection;
  this._dataviewsCollection = deps.dataviewsCollection;
};

ModelUpdater.prototype.updateModels = function (responseWrapper, sourceId, forceFetch) {
  this._updateLayerModels(responseWrapper);
  this._updateLayerGroupModel(responseWrapper);
  this._updateDataviewModels(responseWrapper, sourceId, forceFetch);
  this._updateAnalysisModels(responseWrapper);
};

ModelUpdater.prototype._updateLayerGroupModel = function (responseWrapper) {
  var urls = {
    tiles: this._generateTileURLTemplate(responseWrapper),
    subdomains: responseWrapper.getSupportedSubdomains(),
    grids: this._calculateGridURLTemplatesForCartoDBLayers(responseWrapper),
    attributes: this._calculateAttributesBaseURLsForCartoDBLayers(responseWrapper),
    image: this._calculateStaticMapURL(responseWrapper)
  };

  this._layerGroupModel.set({
    indexOfLayersInWindshaft: responseWrapper.getLayerIndexesByType('mapnik'),
    urls: urls
  });
};

ModelUpdater.prototype._calculateStaticMapURL = function (responseWrapper) {
  return [responseWrapper.getStaticBaseURL(), '{z}/{lat}/{lng}/{width}/{height}.{format}'].join('/');
};

ModelUpdater.prototype._generateTileURLTemplate = function (responseWrapper) {
  return responseWrapper.getBaseURL() + '/{layerIndexes}/{z}/{x}/{y}.{format}';
};

ModelUpdater.prototype._calculateGridURLTemplatesForCartoDBLayers = function (responseWrapper) {
  var urlTemplates = [];
  var indexesOfMapnikLayers = responseWrapper.getLayerIndexesByType('mapnik');
  if (indexesOfMapnikLayers.length > 0) {
    _.each(indexesOfMapnikLayers, function (index) {
      var layerUrlTemplates = [];
      var gridURLTemplate = this._generateGridURLTemplate(responseWrapper, index);
      var subdomains = responseWrapper.getSupportedSubdomains();
      if (subdomains.length) {
        _.each(subdomains, function (subdomain) {
          layerUrlTemplates.push(gridURLTemplate.replace('{s}', subdomain));
        });
      } else {
        layerUrlTemplates.push(gridURLTemplate);
      }

      urlTemplates.push(layerUrlTemplates);
    }, this);
  }
  return urlTemplates;
};

ModelUpdater.prototype._generateGridURLTemplate = function (responseWrapper, index) {
  return responseWrapper.getBaseURL() + '/' + index + '/{z}/{x}/{y}.grid.json';
};

ModelUpdater.prototype._calculateAttributesBaseURLsForCartoDBLayers = function (responseWrapper) {
  var urls = [];
  var indexesOfMapnikLayers = responseWrapper.getLayerIndexesByType('mapnik');
  if (indexesOfMapnikLayers.length > 0) {
    _.each(indexesOfMapnikLayers, function (index) {
      urls.push(this._generateAttributesBaseURL(responseWrapper, index));
    }, this);
  }
  return urls;
};

ModelUpdater.prototype._generateAttributesBaseURL = function (responseWrapper, index) {
  var baseURL = responseWrapper.getBaseURL() + '/' + index + '/attributes';
  if (baseURL.indexOf('{s}') >= 0) {
    var subdomain = getSubdomain(responseWrapper.getSupportedSubdomains(), baseURL);
    baseURL = baseURL.replace('{s}', subdomain);
  }
  return baseURL;
};

ModelUpdater.prototype._updateLayerModels = function (responseWrapper) {
  // CartoDB / mapnik layers
  var indexesOfMapnikLayers = responseWrapper.getLayerIndexesByType('mapnik');
  _.each(this._layersCollection.getCartoDBLayers(), function (layerModel, localLayerIndex) {
    var responseWrapperLayerIndex = indexesOfMapnikLayers[localLayerIndex];
    layerModel.set('meta', responseWrapper.getLayerMetadata(responseWrapperLayerIndex));
    this._updateLegendModels(layerModel, responseWrapperLayerIndex, responseWrapper);

    layerModel.setOk();
  }, this);

  // Torque / torque layers
  var indexesOfTorqueLayers = responseWrapper.getLayerIndexesByType('torque');
  _.each(this._layersCollection.getTorqueLayers(), function (layerModel, localLayerIndex) {
    var responseWrapperLayerIndex = indexesOfTorqueLayers[localLayerIndex];
    var meta = responseWrapper.getLayerMetadata(responseWrapperLayerIndex);
    layerModel.set('meta', meta);
    // deep-insight.js expects meta attributes as attributes for some reason
    layerModel.set(meta);
    layerModel.set('subdomains', responseWrapper.getSupportedSubdomains());
    layerModel.set('tileURLTemplates', this._calculateTileURLTemplatesForTorqueLayers(responseWrapper));
    this._updateLegendModels(layerModel, responseWrapperLayerIndex, responseWrapper);

    layerModel.setOk();
  }, this);
};

ModelUpdater.prototype._calculateTileURLTemplatesForTorqueLayers = function (responseWrapper) {
  var urlTemplates = [];
  var indexesOfTorqueLayers = responseWrapper.getLayerIndexesByType('torque');
  if (indexesOfTorqueLayers.length > 0) {
    urlTemplates.push(this._generateTorqueTileURLTemplate(responseWrapper, indexesOfTorqueLayers));
  }
  return urlTemplates;
};

ModelUpdater.prototype._generateTorqueTileURLTemplate = function (responseWrapper, layerIndexes) {
  return responseWrapper.getBaseURL() + '/' + layerIndexes.join(',') + '/{z}/{x}/{y}.json.torque';
};

ModelUpdater.prototype._updateLegendModels = function (layerModel, remoteLayerIndex, responseWrapper) {
  var layerMetadata = responseWrapper.getLayerMetadata(remoteLayerIndex);
  _.each(this._getLayerLegends(layerModel), function (legendModel) {
    this._updateLegendModel(legendModel, layerMetadata);
  }, this);
};

ModelUpdater.prototype._updateLegendModel = function (legendModel, layerMetadata) {
  var cartoCSSRules = layerMetadata && layerMetadata.cartocss_meta && layerMetadata.cartocss_meta.rules;
  try {
    var newLegendAttrs = {
      state: 'success'
    };
    if (cartoCSSRules) {
      var adapter = RuleToLegendModelAdapters.getAdapterForLegend(legendModel);
      var rulesForLegend = _.filter(cartoCSSRules, adapter.canAdapt);
      if (!_.isEmpty(rulesForLegend)) {
        newLegendAttrs = _.extend(newLegendAttrs, adapter.adapt(rulesForLegend));
      }
    }
    legendModel.set(newLegendAttrs);
  } catch (error) {
    legendModel.set({ state: 'error' });
    log.error("legend of type '" + legendModel.get('type') + "' couldn't be updated: " + error.message);
  }
};

ModelUpdater.prototype._updateDataviewModels = function (responseWrapper, sourceId, forceFetch) {
  this._dataviewsCollection.each(function (dataviewModel) {
    var dataviewMetadata = responseWrapper.getDataviewMetadata(dataviewModel.get('id'));
    if (dataviewMetadata) {
      dataviewModel.set({
        url: dataviewMetadata.url[this._getProtocol()]
      }, {
        sourceId: sourceId,
        forceFetch: forceFetch
      });
    }
  }, this);
};

ModelUpdater.prototype._updateAnalysisModels = function (responseWrapper) {
  var analysisNodesCollection = this._getUniqueAnalysisNodesCollection();
  analysisNodesCollection.each(function (analysisNode) {
    var analysisMetadata = responseWrapper.getAnalysisNodeMetadata(analysisNode.get('id'));
    var attrs;
    if (analysisMetadata) {
      attrs = {
        status: analysisMetadata.status,
        url: analysisMetadata.url[this._getProtocol()],
        query: analysisMetadata.query
      };

      attrs = _.omit(attrs, analysisNode.getParamNames());

      if (analysisMetadata.error_message) {
        attrs = _.extend(attrs, {
          error: {
            message: analysisMetadata.error_message
          }
        });
        analysisNode.set(attrs);
      } else {
        analysisNode.set(attrs);
        analysisNode.setOk();
      }
    }
  }, this);
};

ModelUpdater.prototype._getProtocol = function () {
  // When running tests window.locationn.protocol using the jasmine test runner,
  // window.location.protocol returns 'file:'. This is a little hack to make tests happy.
  if (window.location.protocol === 'file:') {
    return 'http';
  }
  return window.location.protocol.replace(':', '');
};

ModelUpdater.prototype.setErrors = function (errors) {
  _.each(errors, this._setError, this);
  this._setLegendErrors();
};

ModelUpdater.prototype._setError = function (error) {
  if (error.isLayerError()) {
    var layerModel = this._layersCollection.get(error.layerId);
    layerModel && layerModel.setError(error);
  } else if (error.isAnalysisError()) {
    var analysisNodesCollection = this._getUniqueAnalysisNodesCollection();
    var analysisModel = analysisNodesCollection.get(error.analysisId);
    analysisModel && analysisModel.setError(error);
  }
};

ModelUpdater.prototype._setLegendErrors = function () {
  var legendModels = this._layersCollection.chain().map(this._getLayerLegends).compact().flatten().value();

  _.each(legendModels, function (legendModel) {
    legendModel.set('state', 'error');
  });
};

ModelUpdater.prototype._getLayerLegends = function (layerModel) {
  return layerModel.legends && [layerModel.legends.bubble, layerModel.legends.category, layerModel.legends.choropleth];
};

ModelUpdater.prototype._getUniqueAnalysisNodesCollection = function () {
  var analysisNodes = AnalysisService.getUniqueAnalysisNodes(this._layersCollection, this._dataviewsCollection);
  return new Backbone.Collection(analysisNodes);
};

module.exports = ModelUpdater;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

var TILED_LAYER_TYPE = 'Tiled';
var CARTODB_LAYER_TYPE = 'CartoDB';
var TORQUE_LAYER_TYPE = 'torque';

var Layers = Backbone.Collection.extend({

  initialize: function initialize() {
    this.comparator = function (m) {
      return parseInt(m.get('order'), 10);
    };
    this.bind('add', this._assignIndexes);
    this.bind('remove', this._assignIndexes);
  },

  /**
   * each time a layer is added or removed
   * the index should be recalculated
   */
  _assignIndexes: function _assignIndexes(model, col, options) {
    if (this.size() > 0) {
      // Assign an order of 0 to the first layer
      this.at(0).set({ order: 0 });

      if (this.size() > 1) {
        var layersByType = this.reduce(function (layersByType, layerModel, index) {
          var type = layerModel.get('type');
          if (index === 0 && type === TILED_LAYER_TYPE) {
            return layersByType;
          }
          layersByType[type] = layersByType[type] || [];
          layersByType[type].push(layerModel);
          return layersByType;
        }, {});

        var lastOrder = 1;
        var sortedTypes = [CARTODB_LAYER_TYPE, TORQUE_LAYER_TYPE, TILED_LAYER_TYPE];
        _.each(sortedTypes, function (layerType) {
          var layers = layersByType[layerType] || [];
          _.each(layers, function (layerModel) {
            layerModel.set({
              order: lastOrder
            });
            lastOrder += 1;
          });
        });
      }
    }

    this.sort();
  },

  getCartoDBLayers: function getCartoDBLayers() {
    return this._getLayersByType(CARTODB_LAYER_TYPE);
  },

  getTiledLayers: function getTiledLayers() {
    return this._getLayersByType(TILED_LAYER_TYPE);
  },

  getTorqueLayers: function getTorqueLayers() {
    return this._getLayersByType(TORQUE_LAYER_TYPE);
  },

  _getLayersByType: function _getLayersByType(layerType) {
    return this.select(function (layerModel) {
      return layerModel.get('type') === layerType;
    });
  },

  getLayersWithLegends: function getLayersWithLegends() {
    return this.select(function (layerModel) {
      return !!layerModel.legends;
    });
  },

  moveCartoDBLayer: function moveCartoDBLayer(from, to) {
    if (from === to) {
      return false;
    }

    var movingLayer = this.at(from);

    if (!movingLayer || movingLayer.get('type') !== CARTODB_LAYER_TYPE) {
      return false;
    }

    this.remove(movingLayer, { silent: true });
    this.add(movingLayer, {
      at: to,
      silent: true
    });

    this.trigger('layerMoved', movingLayer);

    return movingLayer;
  }
});

module.exports = Layers;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);

var DataviewsCollection = Backbone.Collection.extend({
  isAnyDataviewFiltered: function isAnyDataviewFiltered() {
    return this.any(function (dataviewModel) {
      var filter = dataviewModel.filter;
      return filter && !filter.isEmpty();
    });
  },

  getFilters: function getFilters() {
    return this.reduce(function (filters, dataviewModel) {
      var filter = dataviewModel.filter;
      if (filter && !filter.isEmpty()) {
        filters['dataviews'] = filters['dataviews'] || {};
        _.extend(filters['dataviews'], filter.toJSON());
      }
      return filters;
    }, {});
  }
});

module.exports = DataviewsCollection;

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var $ = __webpack_require__(17);
var Backbone = __webpack_require__(1);
var LayerTypes = __webpack_require__(16);
var util = __webpack_require__(7);

var CartoDBLayerGroup = Backbone.Model.extend({
  defaults: {
    visible: true,
    type: 'layergroup'
  },

  initialize: function initialize(attributes, options) {
    options = options || {};

    if (!options.layersCollection) {
      throw new Error('layersCollection option is required');
    }
    this._layersCollection = options.layersCollection;
  },

  addError: function addError(error) {
    var type = error.type;

    if (!type) {
      throw new Error('Error must have a type property.');
    }

    this.trigger('error:' + type, error);
  },

  forEachGroupedLayer: function forEachGroupedLayer(iteratee, context) {
    _.each(this._getGroupedLayers(), iteratee.bind(context || this));
  },

  _getGroupedLayers: function _getGroupedLayers() {
    return this._layersCollection.getCartoDBLayers();
  },

  _getLayers: function _getLayers() {
    return this._layersCollection.reject(LayerTypes.isGoogleMapsBaseLayer);
  },

  getIndexOfLayerInLayerGroup: function getIndexOfLayerInLayerGroup(layerModel) {
    return this._getGroupedLayers().indexOf(layerModel);
  },

  getLayerInLayerGroupAt: function getLayerInLayerGroupAt(index) {
    return this._getGroupedLayers()[index];
  },

  getCartoLayerById: function getCartoLayerById(id) {
    return this._layersCollection.get(id);
  },

  isEqual: function isEqual() {
    return false;
  },

  hasURLs: function hasURLs() {
    return !!this.get('urls');
  },

  getSubdomains: function getSubdomains() {
    return this.get('urls') && this.get('urls').subdomains || [];
  },

  getTileURLTemplatesWithSubdomains: function getTileURLTemplatesWithSubdomains() {
    var urlTemplate = this.getTileURLTemplate();
    var subdomains = this.getSubdomains();

    if (subdomains && subdomains.length) {
      return _.map(subdomains, function (subdomain) {
        return urlTemplate.replace('{s}', subdomain);
      });
    }

    return [urlTemplate];
  },

  getTileURLTemplate: function getTileURLTemplate(type) {
    type = type || 'png';

    var tileURLTemplate = this.get('urls') && this.get('urls').tiles;

    if (!tileURLTemplate) return '';

    if (type === 'png') {
      if (this._areAllLayersHidden()) {
        return '';
      }
      return this._generatePNGTileURLTemplate(tileURLTemplate);
    } else if (type === 'mvt') {
      return this._generateMTVTileURLTemplate(tileURLTemplate);
    }
  },

  _generatePNGTileURLTemplate: function _generatePNGTileURLTemplate(urlTemplate) {
    var mapnikLayersIndexes = this._getIndexesOfVisibleMapnikLayers();

    if (mapnikLayersIndexes) {
      urlTemplate = urlTemplate.replace('{layerIndexes}', mapnikLayersIndexes).replace('{format}', 'png');

      return this._appendAuthParamsToURL(urlTemplate);
    }

    return '';
  },

  _generateMTVTileURLTemplate: function _generateMTVTileURLTemplate(urlTemplate) {
    urlTemplate = urlTemplate.replace('{layerIndexes}', 'mapnik').replace('{format}', 'mvt');
    return this._appendAuthParamsToURL(urlTemplate);
  },

  _areAllLayersHidden: function _areAllLayersHidden() {
    return _.all(this._getGroupedLayers(), function (layerModel) {
      return !layerModel.isVisible();
    });
  },

  _getIndexesOfVisibleMapnikLayers: function _getIndexesOfVisibleMapnikLayers(url) {
    var indexOfLayersInWindshaft = this.get('indexOfLayersInWindshaft');
    return _.reduce(this._getGroupedLayers(), function (indexes, layerModel, layerIndex) {
      if (layerModel.isVisible()) {
        indexes.push(indexOfLayersInWindshaft[layerIndex]);
      }
      return indexes;
    }, []).join(',');
  },

  _getIndexesOfVisibleLayers: function _getIndexesOfVisibleLayers(url) {
    return _.reduce(this._getLayers(), function (indexes, layerModel, layerIndex) {
      if (layerModel.isVisible()) {
        indexes.push(layerIndex);
      }
      return indexes;
    }, []).join(',');
  },

  hasTileURLTemplates: function hasTileURLTemplates() {
    return !!this.getTileURLTemplate();
  },

  getGridURLTemplatesWithSubdomains: function getGridURLTemplatesWithSubdomains(layerIndex) {
    var gridURLTemplates = this.get('urls') && this.get('urls').grids && this.get('urls').grids[layerIndex] || [];

    if (this.get('urls') && this.get('urls').subdomains) {
      var subdomains = this.get('urls').subdomains;
      gridURLTemplates = _.map(gridURLTemplates, function (url, i) {
        return url.replace('{s}', subdomains[i]);
      });
    }

    return _.map(gridURLTemplates, this._appendAuthParamsToURL, this);
  },

  getAttributesBaseURL: function getAttributesBaseURL(layerIndex) {
    return this.get('urls') && this.get('urls').attributes && this.get('urls').attributes[layerIndex];
  },

  getStaticImageURLTemplate: function getStaticImageURLTemplate() {
    var staticImageURLTemplate = this.get('urls') && this.get('urls').image;
    if (staticImageURLTemplate) {
      staticImageURLTemplate = this._appendParamsToURL(staticImageURLTemplate, ['layer=' + this._getIndexesOfVisibleLayers()]);
      staticImageURLTemplate = this._appendAuthParamsToURL(staticImageURLTemplate);
      staticImageURLTemplate = staticImageURLTemplate.replace('{s}', this.getSubdomains()[0]);
    }
    return staticImageURLTemplate;
  },

  fetchAttributes: function fetchAttributes(layerIndex, featureID, callback) {
    var attributeBaseURL = this.getAttributesBaseURL(layerIndex);
    if (!attributeBaseURL) {
      throw new Error('Attributes cannot be fetched until urls are set');
    }

    var url = this._appendAuthParamsToURL(attributeBaseURL + '/' + featureID);

    $.ajax({
      dataType: 'jsonp',
      url: url,
      jsonpCallback: '_cdbi_layer_attributes_' + util.uniqueCallbackName(this.toJSON()),
      cache: true,
      success: function success(data) {
        // loadingTime.end();
        callback(data);
      },
      error: function error(data) {
        // loadingTime.end();
        // cartodb.core.Profiler.metric('cartodb-js.named_map.attributes.error').inc();
        callback(null);
      }
    });
  },

  _appendAuthParamsToURL: function _appendAuthParamsToURL(url) {
    var params = [];
    if (this.get('apiKey')) {
      params.push('api_key=' + this.get('apiKey'));
    } else if (this.get('authToken')) {
      var authToken = this.get('authToken');
      if (authToken instanceof Array) {
        _.each(authToken, function (token) {
          params.push('auth_token[]=' + token);
        });
      } else {
        params.push('auth_token=' + authToken);
      }
    }

    return this._appendParamsToURL(url, params);
  },

  _appendParamsToURL: function _appendParamsToURL(url, params) {
    if (params.length) {
      var separator = '?';
      if (url.indexOf('?') !== -1) {
        separator = '&';
      }
      return url + separator + params.join('&');
    }
    return url;
  },

  onLayerVisibilityChanged: function onLayerVisibilityChanged(callback) {
    this._layersCollection.on('change:visible', function (layerModel) {
      if (this._isLayerGrouped(layerModel)) {
        callback(layerModel);
      }
    }, this);
  },

  onLayerAdded: function onLayerAdded(callback) {
    this._layersCollection.on('add', function (layerModel) {
      if (this._isLayerGrouped(layerModel)) {
        callback(layerModel, this.getLayerInLayerGroupAt(layerModel));
      }
    }, this);
  },

  _isLayerGrouped: function _isLayerGrouped(layerModel) {
    return this._getGroupedLayers().indexOf(layerModel) >= 0;
  }
});

module.exports = CartoDBLayerGroup;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var LayerTypes = __webpack_require__(16);

var DEFAULT_CARTOCSS_VERSION = '2.1.0';

// This types are the understood by the Maps API.
var HTTP_LAYER_TYPE = 'http';
var PLAIN_LAYER_TYPE = 'plain';
var MAPNIK_LAYER_TYPE = 'mapnik';
var TORQUE_LAYER_TYPE = 'torque';

/**
 * Generate a json payload from a layer collection of a map
 */
function serialize(layersCollection) {
  return layersCollection.chain().map(_calculateLayerJSON).compact().value();
}

function _calculateLayerJSON(layerModel) {
  if (LayerTypes.isTiledLayer(layerModel)) {
    return optionsForHTTPLayer(layerModel);
  } else if (LayerTypes.isPlainLayer(layerModel)) {
    return optionsForPlainLayer(layerModel);
  } else if (LayerTypes.isWMSLayer(layerModel)) {
    return optionsForWMSLayer(layerModel);
  } else if (LayerTypes.isCartoDBLayer(layerModel)) {
    return optionsForMapnikLayer(layerModel);
  } else if (LayerTypes.isTorqueLayer(layerModel)) {
    return optionsForTorqueLayer(layerModel);
  }
}

function optionsForHTTPLayer(layerModel) {
  return {
    id: layerModel.get('id'),
    type: HTTP_LAYER_TYPE,
    options: {
      urlTemplate: layerModel.get('urlTemplate'),
      subdomains: layerModel.get('subdomains'),
      tms: layerModel.get('tms')
    }
  };
}

function optionsForWMSLayer(layerModel) {
  return {
    id: layerModel.get('id'),
    type: HTTP_LAYER_TYPE,
    options: {
      urlTemplate: layerModel.get('urlTemplate'),
      tms: true
    }
  };
}

function optionsForPlainLayer(layerModel) {
  return {
    id: layerModel.get('id'),
    type: PLAIN_LAYER_TYPE,
    options: {
      color: layerModel.get('color'),
      imageUrl: layerModel.get('image')
    }
  };
}

function optionsForMapnikLayer(layerModel) {
  var options = sharedOptionsForMapnikAndTorqueLayers(layerModel);
  options.interactivity = layerModel.getInteractiveColumnNames();

  if (layerModel.infowindow && layerModel.infowindow.hasFields()) {
    options.attributes = {
      id: 'cartodb_id',
      columns: layerModel.infowindow.getFieldNames()
    };
  }

  if (isFinite(layerModel.get('minzoom'))) {
    options.minzoom = layerModel.get('minzoom');
  }

  if (isFinite(layerModel.get('maxzoom'))) {
    options.maxzoom = layerModel.get('maxzoom');
  }

  if (!_.isEmpty(layerModel.aggregation)) {
    _.extend(options, {
      aggregation: layerModel.aggregation
    });
  }

  return {
    id: layerModel.get('id'),
    type: MAPNIK_LAYER_TYPE,
    options: options
  };
}

function optionsForTorqueLayer(layerModel) {
  var options = sharedOptionsForMapnikAndTorqueLayers(layerModel);
  return {
    id: layerModel.get('id'),
    type: TORQUE_LAYER_TYPE,
    options: options
  };
}

function sharedOptionsForMapnikAndTorqueLayers(layerModel) {
  var options = {
    cartocss: layerModel.get('cartocss'),
    cartocss_version: layerModel.get('cartocss_version') || DEFAULT_CARTOCSS_VERSION
  };

  options.source = { id: layerModel.getSourceId() };

  if (layerModel.get('sql_wrap')) {
    options.sql_wrap = layerModel.get('sql_wrap');
  }

  return options;
}
module.exports = { serialize: serialize };

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function serialize(dataviewsCollection) {
  return dataviewsCollection.reduce(function (dataviews, dataviewModel) {
    dataviews[dataviewModel.get('id')] = dataviewModel.toJSON();
    return dataviews;
  }, {});
}

module.exports = {
  serialize: serialize
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var version = __webpack_require__(43);

function AnalysisGraph(definition, wantedVersion) {
    wantedVersion = wantedVersion || 'latest';

    this.definition = definition;
    this.reference = version.getVersion(wantedVersion);
}

module.exports = AnalysisGraph;

AnalysisGraph.prototype.getNodesWithId = function() {
    return reduceById({}, this.definition, this.reference);
};

AnalysisGraph.prototype.getChildNodesNames = function() {
    return childNodes(this.definition.type, this.reference);
};

AnalysisGraph.prototype.getNodesList = function() {
    return appendAllNodes([], this.definition, this.reference);
};

AnalysisGraph.prototype.getDefinitionWith = function(nodeId, extendedWithParams) {
    return extendDefinition(this.definition, this.reference, nodeId, extendedWithParams);
};

function extendDefinition(definition, reference, nodeId, extendedWithParams) {
    if (definition.id && definition.id === nodeId) {
        Object.keys(extendedWithParams).forEach(function(extendWithParamsKey) {
            if (!definition.params.hasOwnProperty(extendWithParamsKey)) {
                definition.params[extendWithParamsKey] = {};
            }
            var obj = extendedWithParams[extendWithParamsKey];
            Object.keys(obj).forEach(function(objK) {
                definition.params[extendWithParamsKey][objK] = obj[objK];
            });
        });
    }

    childNodes(definition.type, reference)
        .filter(filterMissingOptionalNodes(definition, reference))
        .forEach(function(childNodeParamName) {
            extendDefinition(definition.params[childNodeParamName], reference, nodeId, extendedWithParams);
        });

    return definition;
}

function appendAllNodes(allNodes, definition, reference) {
    allNodes.push(definition);

    childNodes(definition.type, reference)
        .filter(filterMissingOptionalNodes(definition, reference))
        .forEach(function(childNodeParamName) {
            appendAllNodes(allNodes, definition.params[childNodeParamName], reference);
        });
    return allNodes;
}

function reduceById(nodesMap, definition, reference) {
    if (definition.id) {
        nodesMap[definition.id] = definition;
    }
    childNodes(definition.type, reference)
        .filter(filterMissingOptionalNodes(definition, reference))
        .forEach(function(childNodeParamName) {
            reduceById(nodesMap, definition.params[childNodeParamName], reference);
        });
    return nodesMap;
}

function childNodes(nodeType, reference) {
    var nodeRef = reference.analyses[nodeType];

    return Object.keys(nodeRef.params).reduce(function(childNodesNames, paramName) {
        if (nodeRef.params[paramName].type === 'node') {
            childNodesNames.push(paramName);
        }
        return childNodesNames;
    }, []);
}

function filterMissingOptionalNodes(definition, reference) {
    return function(childNodeParamName) {
        return !isOptionalParam(definition.type, childNodeParamName, reference) ||
            !!definition.params[childNodeParamName];
    };
}

function isOptionalParam(nodeType, paramName, reference) {
    var nodeRef = reference.analyses[nodeType];
    return nodeRef.params[paramName].optional;
}


/***/ }),
/* 130 */
/***/ (function(module) {

module.exports = {"version":"0.59.4","analyses":{"aggregate-intersection":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"aggregate_function":{"type":"enum","values":["avg","count","max","min","sum"]},"aggregate_column":{"type":"string","optional":true}}},"bounding-box":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"bounding-circle":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"buffer":{"params":{"source":{"type":"node","geometry":["*"]},"radius":{"type":"number"},"isolines":{"type":"number","optional":true},"dissolved":{"type":"boolean","optional":true}}},"centroid":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"closest":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"responses":{"type":"number","optional":true,"default-value":1},"category":{"type":"string","optional":true}}},"concave-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"target_percent":{"type":"number","optional":true,"default-value":0.7},"allow_holes":{"type":"boolean","optional":true,"default-value":false},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"contour":{"params":{"source":{"type":"node","geometry":["point"]},"column":{"type":"string"},"buffer":{"type":"number","optional":true,"default-value":0.2},"method":{"type":"enum","values":["nearest_neighbor","barymetric","IDW"],"optional":true,"default-value":"barymetric"},"class_method":{"type":"enum","values":["equals","headstails","jenks","quantiles"],"optional":true,"default-value":"quantiles"},"steps":{"type":"number","optional":true,"default-value":7},"resolution":{"type":"number","optional":true,"default-value":-90}}},"convex-hull":{"params":{"source":{"type":"node","geometry":["*"]},"category_column":{"type":"string","optional":true},"aggregation":{"type":"enum","values":["avg","count","max","min","sum"],"optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}},"data-observatory-measure":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"final_column":{"type":"string"},"segment_name":{"type":"string"},"percent":{"type":"boolean","optional":true}}},"data-observatory-multiple-measures":{"params":{"source":{"type":"node","geometry":["point","polygon"]},"numerators":{"type":"array"},"normalizations":{"type":"array"},"denominators":{"type":"array"},"geom_ids":{"type":"array"},"numerator_timespans":{"type":"array"},"column_names":{"type":"array"}}},"deprecated-sql-function":{"params":{"function_name":{"type":"string"},"primary_source":{"type":"node","geometry":["*"]},"secondary_source":{"type":"node","geometry":["*"],"optional":true},"function_args":{"type":"array","optional":true}}},"filter-by-node-column":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"filter_source":{"type":"node","geometry":["*"]},"filter_column":{"type":"string"}}},"filter-category":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"accept":{"type":"array","optional":true},"reject":{"type":"array","optional":true}}},"filter-grouped-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"group":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true}}},"filter-range":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"min":{"type":"number","optional":true},"max":{"type":"number","optional":true},"greater_than":{"type":"number","optional":true},"greater_than_or_equal":{"type":"number","optional":true},"less_than":{"type":"number","optional":true},"less_than_or_equal":{"type":"number","optional":true}}},"filter-rank":{"params":{"source":{"type":"node","geometry":["*"]},"column":{"type":"string"},"rank":{"type":"enum","values":["top","bottom"]},"limit":{"type":"number"},"action":{"type":"enum","values":["show","hide"],"optional":true,"default-value":"show"}}},"georeference-admin-region":{"params":{"source":{"type":"node","geometry":["*"]},"admin_region_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-city":{"params":{"source":{"type":"node","geometry":["*"]},"city_column":{"type":"string"},"admin_region":{"type":"string","optional":true},"admin_region_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-country":{"params":{"source":{"type":"node","geometry":["*"]},"country_column":{"type":"string"}}},"georeference-ip-address":{"params":{"source":{"type":"node","geometry":["*"]},"ip_address":{"type":"string"}}},"georeference-long-lat":{"params":{"source":{"type":"node","geometry":["*"]},"longitude":{"type":"string"},"latitude":{"type":"string"}}},"georeference-postal-code":{"params":{"source":{"type":"node","geometry":["*"]},"output_geometry_type":{"type":"enum","values":["point","polygon"],"optional":true,"default-value":"point"},"postal_code_column":{"type":"string"},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"georeference-street-address":{"params":{"source":{"type":"node","geometry":["*"]},"street_address_column":{"type":"string","optional":true},"street_address_template":{"type":"string","optional":true},"city":{"type":"string","optional":true},"city_column":{"type":"string","optional":true},"state":{"type":"string","optional":true},"state_column":{"type":"string","optional":true},"country":{"type":"string","optional":true},"country_column":{"type":"string","optional":true}}},"gravity":{"params":{"source":{"type":"node","geometry":["*"]},"target":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"weight_threshold":{"type":"number","optional":true,"default-value":-1e+308},"pop_column":{"type":"string"},"max_distance":{"type":"number"},"target_id":{"type":"number"}}},"intersection":{"params":{"source":{"type":"node","geometry":["*"]},"source_columns":{"type":"array","optional":true,"default-value":[]},"target":{"type":"node","geometry":["*"]}}},"kmeans":{"params":{"source":{"type":"node","geometry":["point"]},"clusters":{"type":"number"}}},"line-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"order_column":{"type":"string"},"order_type":{"type":"enum","values":["asc","desc"]},"category_column":{"type":"string","optional":true}}},"line-source-to-target":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string","optional":true},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string","optional":true},"closest":{"type":"boolean"}}},"line-to-column":{"params":{"source":{"type":"node","geometry":["point"]},"target_column":{"type":"string"}}},"line-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"}}},"link-by-line":{"params":{"source_points":{"type":"node","geometry":["point"]},"destination_points":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"destination_column":{"type":"string"},"use_great_circle":{"type":"boolean","optional":true,"default-value":false}}},"merge":{"params":{"left_source":{"type":"node","geometry":["*"]},"right_source":{"type":"node","geometry":["*"]},"left_source_column":{"type":"string"},"right_source_column":{"type":"string"},"join_operator":{"type":"enum","values":["inner","left","right"],"optional":true,"default-value":"inner"},"source_geometry":{"type":"enum","values":["left_source","right_source"],"optional":true,"default-value":"left_source"},"left_source_columns":{"type":"array","optional":true},"right_source_columns":{"type":"array","optional":true,"default-value":[]}}},"moran":{"params":{"source":{"type":"node","geometry":["polygon","point"]},"numerator_column":{"type":"string"},"denominator_column":{"type":"string","optional":true},"significance":{"type":"number"},"neighbours":{"type":"number","optional":true},"permutations":{"type":"number","optional":true},"w_type":{"type":"enum","values":["knn","queen"],"optional":true,"default-value":"knn"}}},"point-in-polygon":{"params":{"points_source":{"type":"node","geometry":["point"]},"polygons_source":{"type":"node","geometry":["polygon"]}}},"population-in-area":{"params":{"source":{"type":"node","geometry":["polygon"]},"final_column":{"type":"string"}}},"routing-sequential":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"order_column":{"type":"string","optional":true,"default-value":"cartodb_id"},"order_type":{"type":"enum","values":["asc","desc"],"optional":true,"default-value":"asc"}}},"routing-to-layer-all-to-all":{"params":{"source":{"type":"node","geometry":["point"]},"source_column":{"type":"string"},"target":{"type":"node","geometry":["point"]},"target_column":{"type":"string"},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"},"closest":{"type":"boolean"}}},"routing-to-single-point":{"params":{"source":{"type":"node","geometry":["point"]},"mode":{"type":"enum","values":["car","walk","bicycle","public_transport"]},"destination_longitude":{"type":"number"},"destination_latitude":{"type":"number"},"units":{"type":"enum","values":["kilometers","miles"],"optional":true,"default-value":"kilometers"}}},"sampling":{"params":{"source":{"type":"node","geometry":["*"]},"sampling":{"type":"number"},"seed":{"type":"number","optional":true}}},"source":{"params":{"query":{"type":"string"}}},"spatial-markov-trend":{"params":{"source":{"type":"node","geometry":["*"]},"time_columns":{"type":"array"},"num_classes":{"type":"number","optional":true,"default-value":5},"weight_type":{"type":"string","optional":true,"default-value":"knn"},"num_ngbrs":{"type":"number","optional":true,"default-value":5},"permutations":{"type":"number","optional":true,"default-value":0},"geom_col":{"type":"string","optional":true,"default-value":"the_geom"},"id_col":{"type":"string","optional":true,"default-value":"cartodb_id"}}},"trade-area":{"params":{"source":{"type":"node","geometry":["point"]},"kind":{"type":"enum","values":["walk","car"]},"time":{"type":"number"},"isolines":{"type":"number"},"dissolved":{"type":"boolean"}}},"weighted-centroid":{"params":{"source":{"type":"node","geometry":["*"]},"weight_column":{"type":"string"},"category_column":{"type":"string","optional":true},"aggregation":{"type":"string","optional":true,"default-value":"count"},"aggregation_column":{"type":"string","optional":true}}}}};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./0.59.4/reference.json": 130
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 131;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports.versions = [
  '0.1.0',
  '0.2.0',
  '0.3.0',
  '0.4.0',
  '0.6.0',
  '0.7.0',
  '0.9.0',
  '0.10.0',
  '0.14.0',
  '0.15.0',
  '0.16.0',
  '0.17.0',
  '0.18.0',
  '0.19.0',
  '0.20.0',
  '0.21.0',
  '0.22.0',
  '0.23.0',
  '0.26.0',
  '0.27.0',
  '0.29.0',
  '0.33.0',
  '0.34.0',
  '0.37.0',
  '0.37.1',
  '0.38.0',
  '0.40.0',
  '0.41.0',
  '0.43.0',
  '0.44.0',
  '0.47.0',
  '0.51.0',
  '0.52.0',
  '0.54.0',
  '0.55.0',
  '0.55.1',
  '0.58.1',
  '0.59.3',
  '0.59.4'
];

module.exports.target = '0.59.4';


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var version = __webpack_require__(43);
var AnalysisGraph = __webpack_require__(129);

module.exports.getVersion = version.getVersion;
module.exports.versions = version.versions;
module.exports.AnalysisGraph = AnalysisGraph;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var AnalysisService = __webpack_require__(29);

/**
 * Return a payload with the serialization of all the analyses in the
 * layersCollection and the dataviewsCollection.
 */
function serialize(layersCollection, dataviewsCollection) {
  var analysisList = AnalysisService.getAnalysisList(layersCollection, dataviewsCollection);
  return _generateUniqueAnalysisList(analysisList);
}

/**
 * Return an analysis list without duplicated or nested analyses
 */
function _generateUniqueAnalysisList(analysisList) {
  var analysisIds = {};
  return _.reduce(analysisList, function (list, analysis) {
    if (!analysisIds[analysis.get('id')] && !_isAnalysisPartOfOtherAnalyses(analysis, analysisList)) {
      analysisIds[analysis.get('id')] = true; // keep a set of already added analysis.
      list.push(analysis.toJSON());
    }
    return list;
  }, []);
}

/**
 * Check if an analysis is referenced by other anylisis in the given
 * analysis collection.
 */
function _isAnalysisPartOfOtherAnalyses(analysis, analysisList) {
  return _.any(analysisList, function (otherAnalysisModel) {
    if (!analysis.equals(otherAnalysisModel)) {
      return otherAnalysisModel.findAnalysisById(analysis.get('id'));
    }
    return false;
  });
}

module.exports = {
  serialize: serialize
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AnalisysSerializer = __webpack_require__(134);
var DataviewSerializer = __webpack_require__(128);
var LayerSerializer = __webpack_require__(127);

/**
 * Transform a map visualization into a json payload compatible with the windshaft API.
 */
function serialize(layersCollection, dataviewsCollection) {
  return {
    buffersize: { mvt: 0 },
    layers: LayerSerializer.serialize(layersCollection),
    dataviews: DataviewSerializer.serialize(dataviewsCollection),
    analyses: AnalisysSerializer.serialize(layersCollection, dataviewsCollection)
  };
}

module.exports = {
  serialize: serialize
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
(c) 2012 Uzi Kilon, Splunk Inc.
Backbone Poller 1.1.4
https://github.com/uzikilon/backbone-poller
Backbone Poller may be freely distributed under the MIT license.
*/
(function (root, factory) {
  'use strict';
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
  else {}
}(this, function (_, Backbone) {
  'use strict';

  // Default settings
  var defaults = {
    delay: 1000,
    condition: function () {
      return true;
    }
  };

  // Available events
  var events = ['start', 'stop', 'fetch', 'success', 'error', 'complete'];

  var pollers = [];
  function findPoller(model) {
    return _.find(pollers, function (poller) {
      return poller.model === model;
    });
  }

  var PollingManager = {

    // **Backbone.Poller.get(model[, options])**
    // <pre>
    // Returns a singleton instance of a poller for a model
    // Stops it if running
    // If options.autostart is true, will start it
    // Returns a poller instance
    // </pre>
    get: function (model, options) {
      var poller = findPoller(model);
      if (!poller) {
        poller = new Poller(model, options);
        pollers.push(poller);
      }
      else {
        poller.set(options);
      }
      if (options && options.autostart === true) {
        poller.start({silent: true});
      }
      return poller;
    },

    // **Backbone.Poller.size()**
    // <pre>
    // Returns the number of instantiated pollers
    // </pre>
    size: function () {
      return pollers.length;
    },

    // **Backbone.Poller.reset()**
    // <pre>
    // Stops all pollers and removes from the pollers pool
    // </pre>
    reset: function () {
      while (pollers.length) {
        pollers[0].destroy();
      }
    }
  };

  function Poller(model, options) {
    this.model = model;
    this.cid = _.uniqueId('poller');
    this.set(options);

    if (this.model instanceof Backbone.Model) {
      this.listenTo(this.model, 'destroy', this.destroy);
    }
  }

  _.extend(Poller.prototype, Backbone.Events, {

    // **poller.set([options])**
    // <pre>
    // Reset poller options and stops the poller
    // </pre>
    set: function (options) {
      this.options = _.extend({}, defaults, options || {});
      if (this.options.flush) {
        this.off();
      }
      _.each(events, _.bind(function (name) {
        var callback = this.options[name];
        if (_.isFunction(callback)) {
          this.off(name, callback, this);
          this.on(name, callback, this);
        }
      }, this));

      return this.stop({silent: true});
    },
    //
    // **poller.start([options])**
    // <pre>
    // Start the poller
    // Returns a poller instance
    // Triggers a 'start' events unless options.silent is set to true
    // </pre>
    start: function (options) {
      if (!this.active()) {
        options && options.silent || this.trigger('start', this.model);
        this.options.active = true;
        if (this.options.delayed) {
          delayedRun(this, _.isNumber(this.options.delayed) && this.options.delayed);
        }
        else {
          run(this);
        }
      }
      return this;
    },
    // **poller.stop([options])**
    // <pre>
    // Stops the poller
    // Aborts any running XHR call
    // Returns a poller instance
    // Triggers a 'stop' events unless options.silent is set to true
    // </pre>
    stop: function (options) {
      options && options.silent || this.trigger('stop', this.model);
      this.options.active = false;
      this.xhr && this.xhr.abort && this.xhr.abort();
      this.xhr = null;
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
      return this;
    },
    // **poller.active()**
    // <pre>
    // Returns a boolean for poller status
    // </pre>
    active: function () {
      return this.options.active === true;
    },

    destroy: function () {
      var index = _.indexOf(pollers, this);
      if (index > -1) {
        this.stop().stopListening().off();
        pollers.splice(index, 1);
      }
    }
  });

  function run(poller) {
    if (validate(poller)) {
      var options = _.extend({}, poller.options, {
        success: function (model, resp) {
          poller.trigger('success', model, resp);
          delayedRun(poller);
        },
        error: function (model, resp) {
          if (poller.options.continueOnError) {
            poller.trigger('error', model, resp);
            delayedRun(poller);
          }
          else {
            poller.stop({silent: true});
            poller.trigger('error', model, resp);
          }
        }
      });
      poller.trigger('fetch', poller.model);
      poller.xhr = poller.model.fetch(options);
    }
  }

  var backoff = {};
  function getDelay(poller) {
    if (_.isNumber(poller.options.delay)) {
      return poller.options.delay;
    }

    var min = poller.options.delay[0],
        max = poller.options.delay[1],
        interval = poller.options.delay[2] || 2;

    if (backoff[poller.cid]) {
      if (_.isFunction(interval)) {
        backoff[poller.cid] = interval(backoff[poller.cid]);
      }
      else {
        backoff[poller.cid] *= interval;
      }
    }
    else {
      backoff[poller.cid] = 1;
    }

    var res = Math.round(min * backoff[poller.cid]);
    if (max && max > 0) {
      res = Math.min(res, max);
    }
    return res;
  }

  function delayedRun(poller, delay) {
    if (validate(poller)) {
      poller.timeoutId = _.delay(run, delay || getDelay(poller), poller);
    }
  }

  function validate(poller) {
    if (!poller.options.active) {
      return false;
    }
    if (poller.options.condition(poller.model) !== true) {
      poller.stop({silent: true});
      poller.trigger('complete', poller.model);
      return false;
    }
    return true;
  }

  /* Test hooks */
  PollingManager.getDelay = getDelay;
  PollingManager.prototype = Poller.prototype;

  return PollingManager;
}));


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var BackbonePoller = __webpack_require__(136);

function AnalysisPoller() {
  this._pollers = [];
}

AnalysisPoller.CONFIG = {
  START_DELAY: 1000,
  MAX_DELAY: Infinity,
  DELAY_MULTIPLIER: 1.5
};

AnalysisPoller.prototype.resetAnalysisNodes = function (analysisModels) {
  this.reset();
  _.each(analysisModels, function (analysisModel) {
    this._poll(analysisModel);
  }, this);
};

AnalysisPoller.prototype._poll = function (analysisModel) {
  if (this._canBePolled(analysisModel)) {
    var poller = this._createPoller(analysisModel);
    poller.start();
  }
};

AnalysisPoller.prototype._canBePolled = function (analysisModel) {
  return analysisModel.url() && !analysisModel.isDone();
};

AnalysisPoller.prototype._findPoller = function (analysisModel) {
  return _.find(this._pollers, function (poller) {
    return poller.model === analysisModel;
  });
};

AnalysisPoller.prototype._createPoller = function (analysisModel) {
  var pollerOptions = {
    delay: [AnalysisPoller.CONFIG.START_DELAY, AnalysisPoller.CONFIG.MAX_DELAY, AnalysisPoller.CONFIG.DELAY_MULTIPLIER],
    condition: function condition(analysisModel) {
      return !analysisModel.isDone();
    }
  };

  var poller = BackbonePoller.get(analysisModel, pollerOptions);
  this._pollers.push(poller);
  return poller;
};

AnalysisPoller.prototype.reset = function () {
  BackbonePoller.reset();
  this._pollers = [];
};

module.exports = AnalysisPoller;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Use {@link http://docs.trackjs.com/tracker/top-level-api} for error logging.
 */
function track(error) {
  if (window.trackJs) {
    try {
      var message = error ? error.message + ' - code: ' + error.errorCode : JSON.stringify(error);
      window.trackJs.track(new Error(message));
    } catch (exc) {
      // Swallow
    }
  }
}

module.exports = { track: track };

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  layer: {
    'non-valid-source': {
      messageRegex: /nonValidSource/,
      friendlyMessage: 'The given object is not a valid source. See "carto.source.Base".'
    },
    'non-valid-style': {
      messageRegex: /nonValidStyle/,
      friendlyMessage: 'The given object is not a valid style. See "carto.style.Base".'
    },
    'non-valid-columns': {
      messageRegex: /nonValidColumns/,
      friendlyMessage: 'The given object is not a valid array of string columns.'
    },
    'source-with-different-client': {
      messageRegex: /differentSourceClient/,
      friendlyMessage: "A layer can't have a source which belongs to a different client."
    },
    'style-with-different-client': {
      messageRegex: /differentStyleClient/,
      friendlyMessage: "A layer can't have a style which belongs to a different client."
    },
    'wrong-interactivity-columns': {
      messageRegex: /wrongInteractivityColumns\[(.+)\]#(.+)$/,
      friendlyMessage: 'Columns [$0] set on `$1` do not match the columns set in aggregation options.'
    }
  },
  source: {
    'query-required': {
      messageRegex: /requiredQuery/,
      friendlyMessage: 'SQL Source must have a SQL query.'
    },
    'query-string': {
      messageRegex: /requiredString/,
      friendlyMessage: 'SQL Query must be a string.'
    },
    'no-dataset-name': {
      messageRegex: /noDatasetName/,
      friendlyMessage: 'Table name is required.'
    },
    'dataset-string': {
      messageRegex: /requiredDatasetString$/,
      friendlyMessage: 'Table name must be a string.'
    },
    'dataset-required': {
      messageRegex: /requiredDataset$/,
      friendlyMessage: 'Table name must be not empty.'
    }
  },
  style: {
    'required-css': {
      messageRegex: /requiredCSS$/,
      friendlyMessage: 'CartoCSS is required.'
    },
    'css-string': {
      messageRegex: /requiredCSSString$/,
      friendlyMessage: 'CartoCSS must be a string.'
    }
  },
  client: {
    'bad-layer-type': {
      messageRegex: /badLayerType/,
      friendlyMessage: 'The given object is not a layer.'
    },
    'index-number': {
      messageRegex: /indexNumber/,
      friendlyMessage: 'index property must be a number.'
    },
    'index-out-of-range': {
      messageRegex: /indexOutOfRange/,
      friendlyMessage: 'index is out of range.'
    },
    'api-key-required': {
      messageRegex: /apiKeyRequired/,
      friendlyMessage: 'apiKey property is required.'
    },
    'api-key-string': {
      messageRegex: /apiKeyString/,
      friendlyMessage: 'apiKey property must be a string.'
    },
    'username-required': {
      messageRegex: /usernameRequired/,
      friendlyMessage: 'username property is required.'
    },
    'username-string': {
      messageRegex: /usernameString/,
      friendlyMessage: 'username property must be a string.'
    },
    'non-valid-server-url': {
      messageRegex: /nonValidServerURL/,
      friendlyMessage: 'serverUrl is not a valid URL.'
    },
    'non-matching-server-url': {
      messageRegex: /serverURLDoesntMatchUsername/,
      friendlyMessage: "serverUrl doesn't match the username."
    },
    'duplicated-layer-id': {
      messageRegex: /duplicatedLayerId/,
      friendlyMessage: 'A layer with the same ID already exists in the client.'
    }
  },
  dataview: {
    'source-required': {
      messageRegex: /sourceRequired/,
      friendlyMessage: 'Source property is required.'
    },
    'column-required': {
      messageRegex: /columnRequired/,
      friendlyMessage: 'Column property is required.'
    },
    'column-string': {
      messageRegex: /columnString/,
      friendlyMessage: 'Column property must be a string.'
    },
    'empty-column': {
      messageRegex: /emptyColumn/,
      friendlyMessage: 'Column property must be not empty.'
    },
    'filter-required': {
      messageRegex: /filterRequired/,
      friendlyMessage: 'Filter property is required.'
    },
    'time-series-options-required': {
      messageRegex: /timeSeriesOptionsRequired/,
      friendlyMessage: 'Options object to create a time series dataview is required.'
    },
    'time-series-invalid-aggregation': {
      messageRegex: /timeSeriesInvalidAggregation/,
      friendlyMessage: 'Time aggregation must be a valid value. Use carto.dataview.timeAggregation.'
    },
    'time-series-invalid-offset': {
      messageRegex: /timeSeriesInvalidOffset/,
      friendlyMessage: 'Offset must an integer value between -12 and 14.'
    },
    'time-series-invalid-uselocaltimezone': {
      messageRegex: /timeSeriesInvalidUselocaltimezone/,
      friendlyMessage: 'useLocalTimezone must be a boolean value.'
    },
    'histogram-options-required': {
      messageRegex: /histogramOptionsRequired/,
      friendlyMessage: 'Options object to create a histogram dataview is required.'
    },
    'histogram-invalid-bins': {
      messageRegex: /histogramInvalidBins/,
      friendlyMessage: 'Bins must be a positive integer value.'
    },
    'histogram-invalid-start-end': {
      messageRegex: /histogramInvalidStartEnd/,
      friendlyMessage: 'Both start and end values must be a number or null.'
    },
    'formula-options-required': {
      messageRegex: /formulaOptionsRequired/,
      friendlyMessage: 'Formula dataview options are not defined.'
    },
    'formula-invalid-operation': {
      messageRegex: /formulaInvalidOperation/,
      friendlyMessage: 'Operation for formula dataview is not valid. Use carto.operation'
    },
    'category-options-required': {
      messageRegex: /categoryOptionsRequired/,
      friendlyMessage: 'Category dataview options are not defined.'
    },
    'category-limit-required': {
      messageRegex: /categoryLimitRequired/,
      friendlyMessage: 'Limit for category dataview is required.'
    },
    'category-limit-number': {
      messageRegex: /categoryLimitNumber/,
      friendlyMessage: 'Limit for category dataview must be a number.'
    },
    'category-limit-positive': {
      messageRegex: /categoryLimitPositive/,
      friendlyMessage: 'Limit for category dataview must be greater than 0.'
    },
    'category-invalid-operation': {
      messageRegex: /categoryInvalidOperation/,
      friendlyMessage: 'Operation for category dataview is not valid. Use carto.operation'
    },
    'category-operation-required': {
      messageRegex: /categoryOperationRequired/,
      friendlyMessage: 'Operation column for category dataview is required.'
    },
    'category-operation-string': {
      messageRegex: /categoryOperationString/,
      friendlyMessage: 'Operation column for category dataview must be a string.'
    },
    'category-operation-empty': {
      messageRegex: /categoryOperationEmpty/,
      friendlyMessage: 'Operation column for category dataview must be not empty.'
    }
  },
  filter: {
    'invalid-bounds-object': {
      messageRegex: /invalidBoundsObject/,
      friendlyMessage: 'Bounds object is not valid. Use a carto.filter.Bounds object'
    },
    'invalid-circle-object': {
      messageRegex: /invalidCircleObject/,
      friendlyMessage: 'Circle object is not valid. Use a carto.filter.CircleData object'
    },
    'invalid-polygon-object': {
      messageRegex: /invalidPolygonObject/,
      friendlyMessage: 'Polygon object is not valid. Use a carto.filter.PolygonData object'
    },
    'column-required': {
      messageRegex: /columnRequired/,
      friendlyMessage: 'Column property is required.'
    },
    'column-string': {
      messageRegex: /columnString/,
      friendlyMessage: 'Column property must be a string.'
    },
    'empty-column': {
      messageRegex: /emptyColumn/,
      friendlyMessage: 'Column property must be not empty.'
    },
    'invalid-filter': {
      messageRegex: /invalidFilter(.+)/,
      friendlyMessage: "'$0' is not a valid filter. Please check documentation."
    },
    'invalid-option': {
      messageRegex: /invalidOption(.+)/,
      friendlyMessage: "'$0' is not a valid option for this filter."
    },
    'wrong-filter-type': {
      messageRegex: /wrongFilterType/,
      friendlyMessage: 'Filters need to extend from carto.filter.SQLBase. Please use carto.filter.Category or carto.filter.Range.'
    },
    'invalid-parameter-type': {
      messageRegex: /invalidParameterType(.+)/,
      friendlyMessage: "Invalid parameter type for '$0'. Please check filters documentation."
    }
  },
  aggregation: {
    'threshold-required': {
      messageRegex: /thresholdRequired/,
      friendlyMessage: 'Aggregation threshold is required.'
    },
    'invalid-threshold': {
      messageRegex: /invalidThreshold/,
      friendlyMessage: 'Aggregation threshold must be an integer value greater than 0.'
    },
    'resolution-required': {
      messageRegex: /resolutionRequired/,
      friendlyMessage: 'Aggregation resolution is required.'
    },
    'invalid-resolution': {
      messageRegex: /invalidResolution/,
      friendlyMessage: 'Aggregation resolution must be 0.5, 1 or powers of 2 up to 256 (2, 4, 8, 16, 32, 64, 128, 256).'
    },
    'invalid-placement': {
      messageRegex: /invalidPlacement/,
      friendlyMessage: 'Aggregation placement is not valid. Must be one of these values: `point-sample`, `point-grid`, `centroid`'
    },
    'column-function-required': {
      messageRegex: /columnFunctionRequired(.+)$/,
      friendlyMessage: "Aggregation function for column '$0' is required."
    },
    'invalid-column-function': {
      messageRegex: /invalidColumnFunction(.+)$/,
      friendlyMessage: "Aggregation function for column '$0' is not valid. Use carto.aggregation.function"
    },
    'column-aggregated-column-required': {
      messageRegex: /columnAggregatedColumnRequired(.+)$/,
      friendlyMessage: "Column to be aggregated to '$0' is required."
    },
    'invalid-column-aggregated-column': {
      messageRegex: /invalidColumnAggregatedColumn(.+)$/,
      friendlyMessage: "Column to be aggregated to '$0' must be a string."
    }
  }
};

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  analysis: {
    'sql-syntax-error': {
      messageRegex: /^syntax error/
    },
    'invalid-dataset': {
      messageRegex: /relation (.+) does not exist/,
      friendlyMessage: 'Invalid dataset name used. Dataset $0 does not exist.'
    },
    'column-does-not-exist': {
      messageRegex: /column (.+) does not exist/,
      friendlyMessage: 'Invalid column name. Column $0 does not exist.'
    },
    'analysis-requires-authentication': {
      messageRegex: /^Analysis requires authentication with API key/
    }
  },
  generic: {},
  limit: {
    'over-platform-limits': {
      messageRegex: /^You are over platform's limits/
    },
    'generic-limit-error': {
      messageRegex: /.*/,
      friendlyMessage: 'The server is taking too long to respond, due to poor conectivity or a temporary error with our servers. Please try again soon.'
    }
  },
  tile: {
    'generic-tile-error': {
      messageRegex: /.*/,
      friendlyMessage: 'Some tiles might not be rendering correctly.'
    }
  },
  layer: {
    'column-does-not-exist': {
      messageRegex: /column (.+) does not exist/,
      friendlyMessage: 'Invalid column name. Column $0 does not exist.'
    },
    'unrecognized-rule': {
      messageRegex: /Unrecognized rule: (.+)/,
      friendlyMessage: 'Unrecognized rule "$0"'
    },
    'generic-layer-error': {
      messageRegex: /.*/
    }
  },
  dataview: {
    'formula-does-not-support-operation': {
      messageRegex: /Formula does not support (.+) operation/
    },
    'column-does-not-exist': {
      messageRegex: /column (.+) does not exist/
    },
    'permission-denied': {
      messageRegex: /permission denied for (.+)/
    },
    'wrong-type-column-used-in-time-series': {
      messageRegex: /function date_part\(unknown, (.+)\) does not exist/,
      friendlyMessage: 'Your time series column type is $0. Please use a date type.'
    },
    'invalid-aggregation-value': {
      messageRegex: /Invalid aggregation value. Valid ones: auto, minute, hour, day, week, month, quarter, year, decade, century, millennium/
    }
  },
  auth: {
    'forbidden': {
      messageRegex: /^Forbidden$/,
      friendlyMessage: 'Forbidden. API key does not grant access.'
    }
  }
};

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var windshaft = __webpack_require__(141);
var ajax = __webpack_require__(140);
var validation = __webpack_require__(139);

module.exports = {
  ajax: ajax,
  windshaft: windshaft,
  validation: validation
};

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var ERROR_LIST = __webpack_require__(142);

/**
 * Returns two parameters to enrich a CartoError.
 * - friendlyMessage: A easy to understand error description.
 * - errorCode: Am unique error code
 *
 * @param {CartoError} cartoError
 *
 * @returns {object} - An object containing a friendly message and a errorCode
 */
function getExtraFields(cartoError) {
  var errorlist = _getErrorList(cartoError);
  var listedError = _getListedError(cartoError, errorlist);

  return {
    friendlyMessage: listedError.friendlyMessage,
    errorCode: listedError.errorCode
  };
}

/**
 *
 * @param {CartoError} cartoError
 */
function _getErrorList(cartoError) {
  return ERROR_LIST[cartoError.origin] && ERROR_LIST[cartoError.origin][cartoError.type];
}

/**
 * Get the listed error from a cartoError, if no listedError is found return a generic
 * unknown error.
 * @param {CartoError} cartoError
 */
function _getListedError(cartoError, errorList) {
  var errorListkeys = _.keys(errorList);
  var key;
  for (var i = 0; i < errorListkeys.length; i++) {
    key = errorListkeys[i];
    if (!(errorList[key].messageRegex instanceof RegExp)) {
      throw new Error('MessageRegex on ' + key + ' is not a RegExp.');
    }
    if (errorList[key].messageRegex.test(cartoError.message)) {
      return {
        friendlyMessage: _replaceRegex(cartoError, errorList[key]),
        errorCode: _buildErrorCode(cartoError, key)
      };
    }
  }

  // When cartoError not found return generic values
  return {
    friendlyMessage: cartoError.message || '',
    errorCode: _buildErrorCode(cartoError, 'unknown-error')
  };
}

/**
 * Replace $0 and $1 with the proper paramter in the listedError regex to build a friendly message
 */
function _replaceRegex(cartoError, listedError) {
  if (!listedError.friendlyMessage) {
    return cartoError.message;
  }
  var match = cartoError.message && cartoError.message.match(listedError.messageRegex);
  if (match && match.length > 1) {
    var replaced = listedError.friendlyMessage.replace('$0', match[1]);
    if (match.length > 2) {
      replaced = replaced.replace('$1', match[2]);
    }
    return replaced;
  }
  return listedError.friendlyMessage;
}

/**
 * Generate an unique string that represents a cartoError
 * @param {cartoError} cartoError
 * @param {string} key
 */
function _buildErrorCode(cartoError, key) {
  var fragments = [];
  fragments.push(cartoError && cartoError.origin);
  fragments.push(cartoError && cartoError.type);
  fragments.push(key);
  fragments = _.compact(fragments);

  return fragments.join(':');
}

module.exports = { getExtraFields: getExtraFields };

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ = __webpack_require__(0);
var Backbone = __webpack_require__(1);
var CartoError = __webpack_require__(4);
var Engine = __webpack_require__(44);
var Events = __webpack_require__(14);
var LayerBase = __webpack_require__(40);
var Layers = __webpack_require__(111);
var VERSION = __webpack_require__(26).version;
var CartoValidationError = __webpack_require__(3);
var utils = __webpack_require__(7);

function getValidationError(code) {
  return new CartoValidationError('client', code);
}

var DEFAULT_SERVER_URL = 'https://{username}.carto.com';

/**
 * This is the entry point for a CARTO.js application.
 *
 * A CARTO client allows managing layers and dataviews. Some operations like addding a layer or a dataview are asynchronous.
 * The client takes care of the communication between CARTO.js and the server for you.
 *
 * To create a new client you need a CARTO account, where you will be able to get
 * your API key and username.
 *
 * If you want to learn more about authorization and authentication, please read the authorization fundamentals section of our Developer Center.
 *
 * @param {object} settings
 * @param {string} settings.apiKey - API key used to authenticate against CARTO
 * @param {string} settings.username - Name of the user
 * @param {string} [settings.serverUrl='https://{username}.carto.com'] - URL of the windshaft server. Only needed in custom installations. Pattern: `http(s)://{username}.your.carto.instance` or `http(s)://your.carto.instance/user/{username}` (only for On-Premises environments).
 *
 * @example
 * var client = new carto.Client({
 *   apiKey: 'YOUR_API_KEY_HERE',
 *   username: 'YOUR_USERNAME_HERE'
 * });
 *
 * var client = new carto.Client({
 *   apiKey: 'YOUR_API_KEY_HERE',
 *   username: 'YOUR_USERNAME_HERE',
 *   serverUrl: 'http://{username}.your.carto.instance'
 * });
 *
 * @constructor
 * @memberof carto
 * @api
 *
 * @fires error
 * @fires success
 */
function Client(settings) {
  settings.serverUrl = (settings.serverUrl || DEFAULT_SERVER_URL).replace(/{username}/, settings.username || '');
  _checkSettings(settings);
  this._layers = new Layers();
  this._dataviews = [];
  this._engine = new Engine({
    apiKey: settings.apiKey,
    username: settings.username,
    serverUrl: settings.serverUrl,
    client: 'js-' + VERSION
  });
  this._bindEngine(this._engine);
}

_.extend(Client.prototype, Backbone.Events);

/**
 * Add a layer to the client.
 * If the layer id already exists in the client this method will throw an error.
 *
 * @param {carto.layer.Base} - The layer to be added
 *
 * @fires error
 * @fires success
 *
 * @example
 * // Add a layer to the client
 * client.addLayer(layer)
 *  .then(() => {
 *    console.log('Layer added');
 *  })
 *  .catch(cartoError => {
 *    console.error(cartoError.message);
 *  });
 *
 * @returns {Promise} - A promise that will be fulfilled when the layer is added
 * @api
 */
Client.prototype.addLayer = function (layer) {
  return this.addLayers([layer]);
};

/**
 * Add multiple layers to the client at once.
 *
 * @param {carto.layer.Base[]} - An array with the layers to be added. Note that ([A, B]) displays B as the top layer.
 *
 * @fires error
 * @fires success
 *
 * @example
 * // Add multiple layers ad once layer to the client
 * client.addLayers([layer0, layer1])
 *  .then(() => {
 *    console.log('Layers added');
 *  })
 *  .catch(cartoError => {
 *    console.error(cartoError.message);
 *  });
 *
 * @returns {Promise} A promise that will be fulfilled when the layers are added
 * @api
 */
Client.prototype.addLayers = function (layers) {
  layers.forEach(this._addLayer, this);
  return this._reload();
};

/**
 * Remove a layer from the client.
 *
 * @example
 * // Remove a layer from the client
 * client.removeLayer(layer)
 * .then(() => {
 *  console.log('Layer removed');
 * })
 * .catch(cartoError => {
 *  console.error(cartoError.message);
 * });
 *
 * @param {carto.layer.Base} - The layer to be removed
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} A promise that will be fulfilled when the layer is removed
 * @api
 */
Client.prototype.removeLayer = function (layer) {
  return this.removeLayers([layer]);
};

/**
 * Remove multiple layers from the client.
 *
 * @example
 * // Remove multiple layers from the client
 * client.removeLayers([layer1, layer2])
 * .then(() => {
 *  console.log('Layers removed');
 * })
 * .catch(cartoError => {
 *  console.error(cartoError.message);
 * });
 *
 *
 * @param {carto.layer.Base[]} - An array with the layers to be removed
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} A promise that will be fulfilled when the layers are removed
 * @api
 */
Client.prototype.removeLayers = function (layers) {
  var layersToRemove = layers.slice(0);
  layersToRemove.forEach(this._removeLayer, this);

  return this._reload();
};

/**
 * Move layer order.
 *
 * @example
 * // Move layer order
 * client.moveLayer(layer1, 0)
 * .then(() => {
 *  console.log('Layer moved');
 * })
 * .catch(cartoError => {
 *  console.error(cartoError.message);
 * });
 *
 *
 * @param {carto.layer.Base} - The layer to be moved
 * @param {number} toIndex - Final index for the layer
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} A promise that will be fulfilled when the layer is moved
 * @api
 */
Client.prototype.moveLayer = function (layer, toIndex) {
  var fromIndex = this._layers.indexOf(layer);
  this._moveLayer(layer, toIndex);
  if (fromIndex === toIndex) {
    return Promise.resolve();
  } else {
    return this._reload();
  }
};

/**
 * Get all the {@link carto.layer.Base|layers} from the client.
 *
 * @example
 * // Get all layers from the client
 * const layers = client.getLayers();
 *
 * @example
 * // Hide all layers from the client
 * client.getLayers().forEach(layer => layer.hide());
 *
 * @returns {carto.layer.Base[]} An array with all the Layers from the client
 * @api
 */
Client.prototype.getLayers = function () {
  return this._layers.toArray();
};

/**
 * Add a dataview to the client.
 *
 * @example
 * // Add a dataview to the client
 * client.addDataview(dataview)
 *  .then(() => {
 *    console.log('Dataview added');
 *  })
 *  .catch(cartoError => {
 *    console.error(cartoError.message);
 *  }):
 *
 * @param {carto.dataview.Base} - The dataview to be added
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} - A promise that will be fulfilled when the dataview is added
 * @api
 */
Client.prototype.addDataview = function (dataview) {
  return this.addDataviews([dataview]);
};

/**
 * Add multipe dataviews to the client.
 *
 * @example
 * // Add several dataviews to the client
 * client.addDataview([dataview0, dataview1])
 *  .then(() => {
 *    console.log('Dataviews added');
 *  })
 *  .catch(cartoError => {
 *    console.error(cartoError.message);
 *  }):
 *
 * @param {carto.dataview.Base[]} - An array with the dataviews to be added
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} A promise that will be fulfilled when the dataviews are added
 * @api
 */
Client.prototype.addDataviews = function (dataviews) {
  dataviews.forEach(this._addDataview, this);
  return this._reload();
};

/**
 * Remove a dataview from the client.
 *
 * @example
 * // Remove a dataview from the client
 * client.removeDataview(dataview)
 * .then(() => {
 *    console.log('Dataviews removed');
 *  })
 *  .catch(cartoError => {
 *    console.error(cartoError.message);
 *  }):
 *
 * @param {carto.dataview.Base} - The dataview array to be removed
 *
 * @fires error
 * @fires success
 *
 * @returns {Promise} A promise that will be fulfilled when the dataview is removed
 * @api
 */
Client.prototype.removeDataview = function (dataview) {
  var dataviewIndex = this._dataviews.indexOf(dataview);

  if (dataviewIndex === -1) {
    return Promise.resolve();
  }

  this._dataviews.splice(dataviewIndex, 1);
  this._engine.removeDataview(dataview.$getInternalModel());
  dataview.disable();
  return this._reload();
};

/**
 * Get all the dataviews from the client.
 *
 * @example
 * // Get all the dataviews from the client
 * const dataviews = client.getDataviews();
 *
 * @returns {carto.dataview.Base[]} An array with all the dataviews from the client
 * @api
 */
Client.prototype.getDataviews = function () {
  return this._dataviews;
};

/**
 * Return a {@link http://leafletjs.com/reference-1.3.1.html#tilelayer|leaflet layer} that groups all the layers that have been
 * added to this client.
 *
 * @example
 * // Get the leafletlayer from the client
 * const cartoLeafletLayer = client.getLeafletLayer();
 *
 * @example
 * // Add the leafletLayer to a leafletMap
 * client.getLeafletLayer().addTo(map);
 *
 * @param {object} options - {@link https://leafletjs.com/reference-1.3.0.html#tilelayer-minzoom|L.TileLayer} options.
 *
 * @returns A {@link http://leafletjs.com/reference-1.3.1.html#tilelayer|L.TileLayer} layer that groups all the layers.
 *
 * @api
 */
Client.prototype.getLeafletLayer = function (options) {
  // Check if Leaflet is loaded
  utils.isLeafletLoaded();
  if (!this._leafletLayer) {
    var LeafletLayer = __webpack_require__(110);
    this._leafletLayer = new LeafletLayer(this._layers, this._engine, options);
  }
  return this._leafletLayer;
};

/**
 * Return a {@link https://developers.google.com/maps/documentation/javascript/maptypes|google.maps.MapType} that groups all the layers that have been
 * added to this client.
 *
 * @example
 * // Get googlemaps MapType from client
 * const gmapsMapType = client.getGoogleMapsMapType();
 *
 * @example
 * // Add googlemaps MapType to a google map
 * googleMap.overlayMapTypes.push(client.getGoogleMapsMapType(googleMap));
 *
 * @param {google.maps.Map} - The native Google Maps map where the CARTO layers will be displayed.
 *
 * @return {google.maps.MapType} A Google Maps mapType that groups all the layers:
 * {@link https://developers.google.com/maps/documentation/javascript/maptypes|google.maps.MapType}
 * @api
 */
Client.prototype.getGoogleMapsMapType = function (map) {
  // Check if Google Maps is loaded
  utils.isGoogleMapsLoaded();
  if (!this._gmapsMapType) {
    var GoogleMapsMapType = __webpack_require__(87);
    this._gmapsMapType = new GoogleMapsMapType(this._layers, this._engine, map);
  }
  return this._gmapsMapType;
};

/**
 * Call engine.reload wrapping the native cartojs errors
 * into public CartoErrors.
 */
Client.prototype._reload = function () {
  return this._engine.reload().then(function () {
    return Promise.resolve();
  }).catch(function (error) {
    return Promise.reject(new CartoError(error));
  });
};

/**
 * Helper used to link a layer and an engine.
 * @private
 */
Client.prototype._addLayer = function (layer, engine) {
  _checkLayer(layer);
  this._checkDuplicatedLayerId(layer);
  this._layers.add(layer);
  layer.$setClient(this);
  layer.$setEngine(this._engine);
  this._engine.addLayer(layer.$getInternalModel());
};

/**
 * Helper used to remove a layer from the client.
 * @private
 */
Client.prototype._removeLayer = function (layer) {
  _checkLayer(layer);
  this._layers.remove(layer);
  this._engine.removeLayer(layer.$getInternalModel());
};

/**
 * Helper used to remove a layer from the client.
 * @private
 */
Client.prototype._moveLayer = function (layer, toIndex) {
  _checkLayer(layer);
  _checkLayerIndex(toIndex, this._layers.size());
  this._layers.move(layer, toIndex);
  this._engine.moveLayer(layer.$getInternalModel(), toIndex);
};

/**
 * Helper used to link a dataview and an engine
 * @private
 */
Client.prototype._addDataview = function (dataview, engine) {
  this._dataviews.push(dataview);
  dataview.$setEngine(this._engine);
  this._engine.addDataview(dataview.$getInternalModel());
};

/**
 * Client exposes Event.SUCCESS and RELOAD_ERROR to the api users,
 * those events are wrappers using _engine internaly.
 */
Client.prototype._bindEngine = function (engine) {
  engine.on(Engine.Events.RELOAD_SUCCESS, function () {
    this.trigger(Events.SUCCESS);
  }.bind(this));

  engine.on(Engine.Events.RELOAD_ERROR, function (err) {
    this.trigger(Events.ERROR, new CartoError(err, { layers: this._layers }));
  }.bind(this));

  engine.on(Engine.Events.LAYER_ERROR, function (err) {
    this.trigger(Events.ERROR, new CartoError(err));
  }.bind(this));
};

/**
 * Check if some layer in the client has the same id.
 * @param {carto.layer.Base} layer
 */
Client.prototype._checkDuplicatedLayerId = function (layer) {
  if (this._layers.findById(layer.getId())) {
    throw getValidationError('duplicatedLayerId');
  }
};

/**
 * Utility function to reduce duplicated code.
 */
function _checkLayer(layer) {
  if (!(layer instanceof LayerBase)) {
    throw getValidationError('badLayerType');
  }
}

function _checkLayerIndex(index, size) {
  if (!_.isNumber(index)) {
    throw getValidationError('indexNumber');
  }
  if (index < 0 || index >= size) {
    throw getValidationError('indexOutOfRange');
  }
}

function _checkSettings(settings) {
  _checkApiKey(settings.apiKey);
  _checkUsername(settings.username);
  if (settings.serverUrl) {
    _checkServerUrl(settings.serverUrl, settings.username);
  }
}

function _checkApiKey(apiKey) {
  if (!apiKey) {
    throw getValidationError('apiKeyRequired');
  }
  if (!_.isString(apiKey)) {
    throw getValidationError('apiKeyString');
  }
}

function _checkUsername(username) {
  if (!username) {
    throw getValidationError('usernameRequired');
  }
  if (!_.isString(username)) {
    throw getValidationError('usernameString');
  }
}

function _checkServerUrl(serverUrl, username) {
  var urlregex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  if (!serverUrl.match(urlregex)) {
    throw getValidationError('nonValidServerURL');
  }
  if (serverUrl.indexOf(username) < 0) {
    throw getValidationError('serverURLDoesntMatchUsername');
  }
}

module.exports = Client;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30), __webpack_require__(145)))

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(146);
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(30)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate) {(function (root) {

  // Store setTimeout reference so promise-polyfill will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var setTimeoutFunc = setTimeout;

  function noop() {}
  
  // Polyfill for Function.prototype.bind
  function bind(fn, thisArg) {
    return function () {
      fn.apply(thisArg, arguments);
    };
  }

  function Promise(fn) {
    if (!(this instanceof Promise)) throw new TypeError('Promises must be constructed via new');
    if (typeof fn !== 'function') throw new TypeError('not a function');
    this._state = 0;
    this._handled = false;
    this._value = undefined;
    this._deferreds = [];

    doResolve(fn, this);
  }

  function handle(self, deferred) {
    while (self._state === 3) {
      self = self._value;
    }
    if (self._state === 0) {
      self._deferreds.push(deferred);
      return;
    }
    self._handled = true;
    Promise._immediateFn(function () {
      var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected;
      if (cb === null) {
        (self._state === 1 ? resolve : reject)(deferred.promise, self._value);
        return;
      }
      var ret;
      try {
        ret = cb(self._value);
      } catch (e) {
        reject(deferred.promise, e);
        return;
      }
      resolve(deferred.promise, ret);
    });
  }

  function resolve(self, newValue) {
    try {
      // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
      if (newValue === self) throw new TypeError('A promise cannot be resolved with itself.');
      if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')) {
        var then = newValue.then;
        if (newValue instanceof Promise) {
          self._state = 3;
          self._value = newValue;
          finale(self);
          return;
        } else if (typeof then === 'function') {
          doResolve(bind(then, newValue), self);
          return;
        }
      }
      self._state = 1;
      self._value = newValue;
      finale(self);
    } catch (e) {
      reject(self, e);
    }
  }

  function reject(self, newValue) {
    self._state = 2;
    self._value = newValue;
    finale(self);
  }

  function finale(self) {
    if (self._state === 2 && self._deferreds.length === 0) {
      Promise._immediateFn(function() {
        if (!self._handled) {
          Promise._unhandledRejectionFn(self._value);
        }
      });
    }

    for (var i = 0, len = self._deferreds.length; i < len; i++) {
      handle(self, self._deferreds[i]);
    }
    self._deferreds = null;
  }

  function Handler(onFulfilled, onRejected, promise) {
    this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
    this.onRejected = typeof onRejected === 'function' ? onRejected : null;
    this.promise = promise;
  }

  /**
   * Take a potentially misbehaving resolver function and make sure
   * onFulfilled and onRejected are only called once.
   *
   * Makes no guarantees about asynchrony.
   */
  function doResolve(fn, self) {
    var done = false;
    try {
      fn(function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      }, function (reason) {
        if (done) return;
        done = true;
        reject(self, reason);
      });
    } catch (ex) {
      if (done) return;
      done = true;
      reject(self, ex);
    }
  }

  Promise.prototype['catch'] = function (onRejected) {
    return this.then(null, onRejected);
  };

  Promise.prototype.then = function (onFulfilled, onRejected) {
    var prom = new (this.constructor)(noop);

    handle(this, new Handler(onFulfilled, onRejected, prom));
    return prom;
  };

  Promise.all = function (arr) {
    return new Promise(function (resolve, reject) {
      if (!arr || typeof arr.length === 'undefined') throw new TypeError('Promise.all accepts an array');
      var args = Array.prototype.slice.call(arr);
      if (args.length === 0) return resolve([]);
      var remaining = args.length;

      function res(i, val) {
        try {
          if (val && (typeof val === 'object' || typeof val === 'function')) {
            var then = val.then;
            if (typeof then === 'function') {
              then.call(val, function (val) {
                res(i, val);
              }, reject);
              return;
            }
          }
          args[i] = val;
          if (--remaining === 0) {
            resolve(args);
          }
        } catch (ex) {
          reject(ex);
        }
      }

      for (var i = 0; i < args.length; i++) {
        res(i, args[i]);
      }
    });
  };

  Promise.resolve = function (value) {
    if (value && typeof value === 'object' && value.constructor === Promise) {
      return value;
    }

    return new Promise(function (resolve) {
      resolve(value);
    });
  };

  Promise.reject = function (value) {
    return new Promise(function (resolve, reject) {
      reject(value);
    });
  };

  Promise.race = function (values) {
    return new Promise(function (resolve, reject) {
      for (var i = 0, len = values.length; i < len; i++) {
        values[i].then(resolve, reject);
      }
    });
  };

  // Use polyfill for setImmediate for performance gains
  Promise._immediateFn = (typeof setImmediate === 'function' && function (fn) { setImmediate(fn); }) ||
    function (fn) {
      setTimeoutFunc(fn, 0);
    };

  Promise._unhandledRejectionFn = function _unhandledRejectionFn(err) {
    if (typeof console !== 'undefined' && console) {
      console.warn('Possible Unhandled Promise Rejection:', err); // eslint-disable-line no-console
    }
  };

  /**
   * Set the immediate function to execute callbacks
   * @param fn {function} Function to execute
   * @deprecated
   */
  Promise._setImmediateFn = function _setImmediateFn(fn) {
    Promise._immediateFn = fn;
  };

  /**
   * Change the function to execute on unhandled rejection
   * @param {function} fn Function to execute on unhandled rejection
   * @deprecated
   */
  Promise._setUnhandledRejectionFn = function _setUnhandledRejectionFn(fn) {
    Promise._unhandledRejectionFn = fn;
  };
  
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = Promise;
  } else if (!root.Promise) {
    root.Promise = Promise;
  }

})(this);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(147).setImmediate))

/***/ }),
/* 149 */
/***/ (function(module, exports) {

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob()
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ]

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    }

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name)
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value)
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift()
        return {done: value === undefined, value: value}
      }
    }

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      }
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {}

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value)
      }, this)
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1])
      }, this)
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name])
      }, this)
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name)
    value = normalizeValue(value)
    var oldValue = this.map[name]
    this.map[name] = oldValue ? oldValue+','+value : value
  }

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)]
  }

  Headers.prototype.get = function(name) {
    name = normalizeName(name)
    return this.has(name) ? this.map[name] : null
  }

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  }

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value)
  }

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this)
      }
    }
  }

  Headers.prototype.keys = function() {
    var items = []
    this.forEach(function(value, name) { items.push(name) })
    return iteratorFor(items)
  }

  Headers.prototype.values = function() {
    var items = []
    this.forEach(function(value) { items.push(value) })
    return iteratorFor(items)
  }

  Headers.prototype.entries = function() {
    var items = []
    this.forEach(function(value, name) { items.push([name, value]) })
    return iteratorFor(items)
  }

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result)
      }
      reader.onerror = function() {
        reject(reader.error)
      }
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsArrayBuffer(blob)
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader()
    var promise = fileReaderReady(reader)
    reader.readAsText(blob)
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf)
    var chars = new Array(view.length)

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i])
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength)
      view.set(new Uint8Array(buf))
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false

    this._initBody = function(body) {
      this._bodyInit = body
      if (!body) {
        this._bodyText = ''
      } else if (typeof body === 'string') {
        this._bodyText = body
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString()
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer)
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer])
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body)
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8')
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type)
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
        }
      }
    }

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this)
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      }

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      }
    }

    this.text = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    }

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      }
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    }

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

  function normalizeMethod(method) {
    var upcased = method.toUpperCase()
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {}
    var body = options.body

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url
      this.credentials = input.credentials
      if (!options.headers) {
        this.headers = new Headers(input.headers)
      }
      this.method = input.method
      this.mode = input.mode
      if (!body && input._bodyInit != null) {
        body = input._bodyInit
        input.bodyUsed = true
      }
    } else {
      this.url = String(input)
    }

    this.credentials = options.credentials || this.credentials || 'omit'
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers)
    }
    this.method = normalizeMethod(options.method || this.method || 'GET')
    this.mode = options.mode || this.mode || null
    this.referrer = null

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body)
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  }

  function decode(body) {
    var form = new FormData()
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers()
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':')
      var key = parts.shift().trim()
      if (key) {
        var value = parts.join(':').trim()
        headers.append(key, value)
      }
    })
    return headers
  }

  Body.call(Request.prototype)

  function Response(bodyInit, options) {
    if (!options) {
      options = {}
    }

    this.type = 'default'
    this.status = options.status === undefined ? 200 : options.status
    this.ok = this.status >= 200 && this.status < 300
    this.statusText = 'statusText' in options ? options.statusText : 'OK'
    this.headers = new Headers(options.headers)
    this.url = options.url || ''
    this._initBody(bodyInit)
  }

  Body.call(Response.prototype)

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  }

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''})
    response.type = 'error'
    return response
  }

  var redirectStatuses = [301, 302, 303, 307, 308]

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  }

  self.Headers = Headers
  self.Request = Request
  self.Response = Response

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init)
      var xhr = new XMLHttpRequest()

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        }
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
        var body = 'response' in xhr ? xhr.response : xhr.responseText
        resolve(new Response(body, options))
      }

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'))
      }

      xhr.open(request.method, request.url, true)

      if (request.credentials === 'include') {
        xhr.withCredentials = true
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob'
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value)
      })

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
    })
  }
  self.fetch.polyfill = true
})(typeof self !== 'undefined' ? self : this);


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 *  @api
 *  @namespace carto
 *
 *  @description
 *  # CARTO.js
 *  All the library features are exposed through the `carto` namespace.
 *
 *
 * - **Client** : The api client.
 * - **source** : Source description
 * - **style** : Style description
 * - **layer** : Layer description
 * - **dataview** : Dataview description
 * - **filter** : Filter description
 * - **events** : The events exposed.
 * - **operation** : The operations exposed.
 */

// Add polyfill for `fetch`
__webpack_require__(149);
// Add polyfill for `Promise`
var Promise = __webpack_require__(148);
if (!window.Promise) {
  window.Promise = Promise;
}

var Client = __webpack_require__(144);
var source = __webpack_require__(82);
var style = __webpack_require__(79);
var layer = __webpack_require__(23);
var dataview = __webpack_require__(77);
var filter = __webpack_require__(59);
var events = __webpack_require__(14);
var constants = __webpack_require__(5);

var carto = {
  version: __webpack_require__(26).version,
  ATTRIBUTION: constants.ATTRIBUTION,
  Client: Client,
  source: source,
  style: style,
  layer: layer,
  dataview: dataview,
  filter: filter,
  events: events,
  operation: constants.operation
};

module.exports = carto;

/***/ })
/******/ ]);
});
//# sourceMappingURL=carto.js.map