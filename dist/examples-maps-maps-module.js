(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["examples-maps-maps-module"],{

/***/ "./node_modules/d3-array/src/array.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/array.js ***!
  \********************************************/
/*! exports provided: slice, map */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slice", function() { return slice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
var array = Array.prototype;

var slice = array.slice;
var map = array.map;


/***/ }),

/***/ "./node_modules/d3-array/src/ascending.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/ascending.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bin.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/bin.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-array/src/array.js");
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/d3-array/src/bisect.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-array/src/constant.js");
/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-array/src/extent.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-array/src/identity.js");
/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./range.js */ "./node_modules/d3-array/src/range.js");
/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/d3-array/src/ticks.js");
/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/d3-array/src/threshold/sturges.js");









/* harmony default export */ __webpack_exports__["default"] = (function() {
  var value = _identity_js__WEBPACK_IMPORTED_MODULE_4__["default"],
      domain = _extent_js__WEBPACK_IMPORTED_MODULE_3__["default"],
      threshold = _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_7__["default"];

  function histogram(data) {
    if (!Array.isArray(data)) data = Array.from(data);

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
      tz = Object(_ticks_js__WEBPACK_IMPORTED_MODULE_6__["tickStep"])(x0, x1, tz);
      tz = Object(_range_js__WEBPACK_IMPORTED_MODULE_5__["default"])(Math.ceil(x0 / tz) * tz, x1, tz); // exclusive
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
        bins[Object(_bisect_js__WEBPACK_IMPORTED_MODULE_1__["default"])(tz, x, 0, m)].push(data[i]);
      }
    }

    return bins;
  }

  histogram.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : value;
  };

  histogram.domain = function(_) {
    return arguments.length ? (domain = typeof _ === "function" ? _ : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])([_[0], _[1]]), histogram) : domain;
  };

  histogram.thresholds = function(_) {
    return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_array_js__WEBPACK_IMPORTED_MODULE_0__["slice"].call(_)) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_), histogram) : threshold;
  };

  return histogram;
});


/***/ }),

/***/ "./node_modules/d3-array/src/bisect.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/bisect.js ***!
  \*********************************************/
/*! exports provided: bisectRight, bisectLeft, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return bisectRight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return bisectLeft; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/d3-array/src/bisector.js");



var ascendingBisect = Object(_bisector_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
var bisectRight = ascendingBisect.right;
var bisectLeft = ascendingBisect.left;
/* harmony default export */ __webpack_exports__["default"] = (bisectRight);


/***/ }),

/***/ "./node_modules/d3-array/src/bisector.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/bisector.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


/* harmony default export */ __webpack_exports__["default"] = (function(compare) {
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
    return Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(f(d), x);
  };
}


/***/ }),

/***/ "./node_modules/d3-array/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-array/src/count.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/count.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return count; });
function count(values, valueof) {
  let count = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count;
      }
    }
  }
  return count;
}


/***/ }),

/***/ "./node_modules/d3-array/src/cross.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/cross.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cross; });
function length(array) {
  return array.length | 0;
}

function empty(length) {
  return !(length > 0);
}

function arrayify(values) {
  return typeof values !== "object" || "length" in values ? values : Array.from(values);
}

function reducer(reduce) {
  return values => reduce(...values);
}

function cross(...values) {
  const reduce = typeof values[values.length - 1] === "function" && reducer(values.pop());
  values = values.map(arrayify);
  const lengths = values.map(length);
  const j = values.length - 1;
  const index = new Array(j + 1).fill(0);
  const product = [];
  if (j < 0 || lengths.some(empty)) return product;
  while (true) {
    product.push(index.map((j, i) => values[i][j]));
    let i = j;
    while (++index[i] === lengths[i]) {
      if (i === 0) return reduce ? product.map(reduce) : product;
      index[i--] = 0;
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-array/src/cumsum.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/cumsum.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cumsum; });
function cumsum(values, valueof) {
  var sum = 0, index = 0;
  return Float64Array.from(values, valueof === undefined
    ? v => (sum += +v || 0)
    : v => (sum += +valueof(v, index++, values) || 0));
}

/***/ }),

/***/ "./node_modules/d3-array/src/descending.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/descending.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});


/***/ }),

/***/ "./node_modules/d3-array/src/deviation.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/deviation.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return deviation; });
/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./variance.js */ "./node_modules/d3-array/src/variance.js");


function deviation(values, valueof) {
  const v = Object(_variance_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, valueof);
  return v ? Math.sqrt(v) : v;
}


/***/ }),

/***/ "./node_modules/d3-array/src/extent.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/extent.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  let min;
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null) {
        if (min === undefined) {
          if (value >= value) min = max = value;
        } else {
          if (min > value) min = value;
          if (max < value) max = value;
        }
      }
    }
  }
  return [min, max];
});


/***/ }),

/***/ "./node_modules/d3-array/src/greatest.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/greatest.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatest; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


function greatest(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let max;
  let defined = false;
  if (compare.length === 1) {
    let maxValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, maxValue) > 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        max = element;
        maxValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, max) > 0
          : compare(value, value) === 0) {
        max = value;
        defined = true;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/greatestIndex.js":
/*!****************************************************!*\
  !*** ./node_modules/d3-array/src/greatestIndex.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return greatestIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/d3-array/src/maxIndex.js");



function greatestIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_maxIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let maxValue;
  let max = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (max < 0
        ? compare(value, value) === 0
        : compare(value, maxValue) > 0) {
      maxValue = value;
      max = index;
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/group.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/group.js ***!
  \********************************************/
/*! exports provided: default, groups, rollup, rollups */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return group; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return groups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return rollup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return rollups; });
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-array/src/identity.js");


function group(values, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function groups(values, ...keys) {
  return nest(values, Array.from, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], keys);
}

function rollup(values, reduce, ...keys) {
  return nest(values, _identity_js__WEBPACK_IMPORTED_MODULE_0__["default"], reduce, keys);
}

function rollups(values, reduce, ...keys) {
  return nest(values, Array.from, reduce, keys);
}

function nest(values, map, reduce, keys) {
  return (function regroup(values, i) {
    if (i >= keys.length) return reduce(values);
    const groups = new Map();
    const keyof = keys[i++];
    let index = -1;
    for (const value of values) {
      const key = keyof(value, ++index, values);
      const group = groups.get(key);
      if (group) group.push(value);
      else groups.set(key, [value]);
    }
    for (const [key, values] of groups) {
      groups.set(key, regroup(values, i));
    }
    return map(groups);
  })(values, 0);
}


/***/ }),

/***/ "./node_modules/d3-array/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-array/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/index.js ***!
  \********************************************/
/*! exports provided: bisect, bisectRight, bisectLeft, ascending, bisector, count, cross, cumsum, descending, deviation, extent, group, groups, rollup, rollups, bin, histogram, thresholdFreedmanDiaconis, thresholdScott, thresholdSturges, max, maxIndex, mean, median, merge, min, minIndex, pairs, permute, quantile, quantileSorted, quickselect, range, least, leastIndex, greatest, greatestIndex, scan, shuffle, sum, ticks, tickIncrement, tickStep, transpose, variance, zip */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bisect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bisect.js */ "./node_modules/d3-array/src/bisect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisect", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectRight", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectRight"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisectLeft", function() { return _bisect_js__WEBPACK_IMPORTED_MODULE_0__["bisectLeft"]; });

/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ascending", function() { return _ascending_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _bisector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./bisector.js */ "./node_modules/d3-array/src/bisector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bisector", function() { return _bisector_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./count.js */ "./node_modules/d3-array/src/count.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "count", function() { return _count_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _cross_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cross.js */ "./node_modules/d3-array/src/cross.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cross", function() { return _cross_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _cumsum_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cumsum.js */ "./node_modules/d3-array/src/cumsum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cumsum", function() { return _cumsum_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _descending_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./descending.js */ "./node_modules/d3-array/src/descending.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "descending", function() { return _descending_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./deviation.js */ "./node_modules/d3-array/src/deviation.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deviation", function() { return _deviation_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _extent_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extent.js */ "./node_modules/d3-array/src/extent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extent", function() { return _extent_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _group_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./group.js */ "./node_modules/d3-array/src/group.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "group", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "groups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["groups"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollup", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["rollup"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rollups", function() { return _group_js__WEBPACK_IMPORTED_MODULE_9__["rollups"]; });

/* harmony import */ var _bin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./bin.js */ "./node_modules/d3-array/src/bin.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "bin", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "histogram", function() { return _bin_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./threshold/freedmanDiaconis.js */ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdFreedmanDiaconis", function() { return _threshold_freedmanDiaconis_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./threshold/scott.js */ "./node_modules/d3-array/src/threshold/scott.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdScott", function() { return _threshold_scott_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./threshold/sturges.js */ "./node_modules/d3-array/src/threshold/sturges.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "thresholdSturges", function() { return _threshold_sturges_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./max.js */ "./node_modules/d3-array/src/max.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "max", function() { return _max_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./maxIndex.js */ "./node_modules/d3-array/src/maxIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "maxIndex", function() { return _maxIndex_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _mean_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./mean.js */ "./node_modules/d3-array/src/mean.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "mean", function() { return _mean_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _median_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./median.js */ "./node_modules/d3-array/src/median.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "median", function() { return _median_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _merge_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./merge.js */ "./node_modules/d3-array/src/merge.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "merge", function() { return _merge_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "min", function() { return _min_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/d3-array/src/minIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "minIndex", function() { return _minIndex_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _pairs_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pairs.js */ "./node_modules/d3-array/src/pairs.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pairs", function() { return _pairs_js__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _permute_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./permute.js */ "./node_modules/d3-array/src/permute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "permute", function() { return _permute_js__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-array/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_23__["quantileSorted"]; });

/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/d3-array/src/quickselect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quickselect", function() { return _quickselect_js__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _range_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./range.js */ "./node_modules/d3-array/src/range.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "range", function() { return _range_js__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _least_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./least.js */ "./node_modules/d3-array/src/least.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "least", function() { return _least_js__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/d3-array/src/leastIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "leastIndex", function() { return _leastIndex_js__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _greatest_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./greatest.js */ "./node_modules/d3-array/src/greatest.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatest", function() { return _greatest_js__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./greatestIndex.js */ "./node_modules/d3-array/src/greatestIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "greatestIndex", function() { return _greatestIndex_js__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _scan_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./scan.js */ "./node_modules/d3-array/src/scan.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scan", function() { return _scan_js__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _shuffle_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shuffle.js */ "./node_modules/d3-array/src/shuffle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "shuffle", function() { return _shuffle_js__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _sum_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./sum.js */ "./node_modules/d3-array/src/sum.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sum", function() { return _sum_js__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _ticks_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ticks.js */ "./node_modules/d3-array/src/ticks.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ticks", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["tickIncrement"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return _ticks_js__WEBPACK_IMPORTED_MODULE_33__["tickStep"]; });

/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/d3-array/src/transpose.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "transpose", function() { return _transpose_js__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _variance_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./variance.js */ "./node_modules/d3-array/src/variance.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "variance", function() { return _variance_js__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _zip_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./zip.js */ "./node_modules/d3-array/src/zip.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zip", function() { return _zip_js__WEBPACK_IMPORTED_MODULE_36__["default"]; });











 // Deprecated; use bin.



















 // Deprecated; use leastIndex.








/***/ }),

/***/ "./node_modules/d3-array/src/least.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/least.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return least; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


function least(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  let min;
  let defined = false;
  if (compare.length === 1) {
    let minValue;
    for (const element of values) {
      const value = compare(element);
      if (defined
          ? Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, minValue) < 0
          : Object(_ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value, value) === 0) {
        min = element;
        minValue = value;
        defined = true;
      }
    }
  } else {
    for (const value of values) {
      if (defined
          ? compare(value, min) < 0
          : compare(value, value) === 0) {
        min = value;
        defined = true;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/leastIndex.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-array/src/leastIndex.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return leastIndex; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");
/* harmony import */ var _minIndex_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./minIndex.js */ "./node_modules/d3-array/src/minIndex.js");



function leastIndex(values, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  if (compare.length === 1) return Object(_minIndex_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, compare);
  let minValue;
  let min = -1;
  let index = -1;
  for (const value of values) {
    ++index;
    if (min < 0
        ? compare(value, value) === 0
        : compare(value, minValue) < 0) {
      minValue = value;
      min = index;
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/max.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/max.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return max; });
function max(values, valueof) {
  let max;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value;
      }
    }
  }
  return max;
}


/***/ }),

/***/ "./node_modules/d3-array/src/maxIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/maxIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return maxIndex; });
function maxIndex(values, valueof) {
  let max;
  let maxIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (max < value || (max === undefined && value >= value))) {
        max = value, maxIndex = index;
      }
    }
  }
  return maxIndex;
}


/***/ }),

/***/ "./node_modules/d3-array/src/mean.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/mean.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mean; });
function mean(values, valueof) {
  let count = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        ++count, sum += value;
      }
    }
  }
  if (count) return sum / count;
}


/***/ }),

/***/ "./node_modules/d3-array/src/median.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/median.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-array/src/quantile.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values, valueof) {
  return Object(_quantile_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, 0.5, valueof);
});


/***/ }),

/***/ "./node_modules/d3-array/src/merge.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/merge.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return merge; });
function* flatten(arrays) {
  for (const array of arrays) {
    yield* array;
  }
}

function merge(arrays) {
  return Array.from(flatten(arrays));
}


/***/ }),

/***/ "./node_modules/d3-array/src/min.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/min.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return min; });
function min(values, valueof) {
  let min;
  if (valueof === undefined) {
    for (const value of values) {
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value;
      }
    }
  }
  return min;
}


/***/ }),

/***/ "./node_modules/d3-array/src/minIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/minIndex.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return minIndex; });
function minIndex(values, valueof) {
  let min;
  let minIndex = -1;
  let index = -1;
  if (valueof === undefined) {
    for (const value of values) {
      ++index;
      if (value != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  } else {
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null
          && (min > value || (min === undefined && value >= value))) {
        min = value, minIndex = index;
      }
    }
  }
  return minIndex;
}


/***/ }),

/***/ "./node_modules/d3-array/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-array/src/number.js ***!
  \*********************************************/
/*! exports provided: default, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x === null ? NaN : +x;
});

function* numbers(values, valueof) {
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        yield value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        yield value;
      }
    }
  }
}


/***/ }),

/***/ "./node_modules/d3-array/src/pairs.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/pairs.js ***!
  \********************************************/
/*! exports provided: default, pair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pairs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pair", function() { return pair; });
function pairs(values, pairof = pair) {
  const pairs = [];
  let previous;
  let first = false;
  for (const value of values) {
    if (first) pairs.push(pairof(previous, value));
    previous = value;
    first = true;
  }
  return pairs;
}

function pair(a, b) {
  return [a, b];
}


/***/ }),

/***/ "./node_modules/d3-array/src/permute.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/permute.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(source, keys) {
  return Array.from(keys, key => source[key]);
});


/***/ }),

/***/ "./node_modules/d3-array/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default, quantileSorted */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quantileSorted", function() { return quantileSorted; });
/* harmony import */ var _max_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./max.js */ "./node_modules/d3-array/src/max.js");
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");
/* harmony import */ var _quickselect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quickselect.js */ "./node_modules/d3-array/src/quickselect.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-array/src/number.js");





function quantile(values, p, valueof) {
  values = Float64Array.from(Object(_number_js__WEBPACK_IMPORTED_MODULE_3__["numbers"])(values, valueof));
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values);
  if (p >= 1) return Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = Object(_max_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(_quickselect_js__WEBPACK_IMPORTED_MODULE_2__["default"])(values, i0).subarray(0, i0 + 1)),
      value1 = Object(_min_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values.subarray(i0 + 1));
  return value0 + (value1 - value0) * (i - i0);
}

function quantileSorted(values, p, valueof = _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
  if (!(n = values.length)) return;
  if ((p = +p) <= 0 || n < 2) return +valueof(values[0], 0, values);
  if (p >= 1) return +valueof(values[n - 1], n - 1, values);
  var n,
      i = (n - 1) * p,
      i0 = Math.floor(i),
      value0 = +valueof(values[i0], i0, values),
      value1 = +valueof(values[i0 + 1], i0 + 1, values);
  return value0 + (value1 - value0) * (i - i0);
}


/***/ }),

/***/ "./node_modules/d3-array/src/quickselect.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-array/src/quickselect.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quickselect; });
/* harmony import */ var _ascending_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ascending.js */ "./node_modules/d3-array/src/ascending.js");


// Based on https://github.com/mourner/quickselect
// ISC license, Copyright 2018 Vladimir Agafonkin.
function quickselect(array, k, left = 0, right = array.length - 1, compare = _ascending_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
  while (right > left) {
    if (right - left > 600) {
      const n = right - left + 1;
      const m = k - left + 1;
      const z = Math.log(n);
      const s = 0.5 * Math.exp(2 * z / 3);
      const sd = 0.5 * Math.sqrt(z * s * (n - s) / n) * (m - n / 2 < 0 ? -1 : 1);
      const newLeft = Math.max(left, Math.floor(k - m * s / n + sd));
      const newRight = Math.min(right, Math.floor(k + (n - m) * s / n + sd));
      quickselect(array, k, newLeft, newRight, compare);
    }

    const t = array[k];
    let i = left;
    let j = right;

    swap(array, left, k);
    if (compare(array[right], t) > 0) swap(array, left, right);

    while (i < j) {
      swap(array, i, j), ++i, --j;
      while (compare(array[i], t) < 0) ++i;
      while (compare(array[j], t) > 0) --j;
    }

    if (compare(array[left], t) === 0) swap(array, left, j);
    else ++j, swap(array, j, right);

    if (j <= k) left = j + 1;
    if (k <= j) right = j - 1;
  }
  return array;
}

function swap(array, i, j) {
  const t = array[i];
  array[i] = array[j];
  array[j] = t;
}


/***/ }),

/***/ "./node_modules/d3-array/src/range.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/range.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;

  var i = -1,
      n = Math.max(0, Math.ceil((stop - start) / step)) | 0,
      range = new Array(n);

  while (++i < n) {
    range[i] = start + i * step;
  }

  return range;
});


/***/ }),

/***/ "./node_modules/d3-array/src/scan.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-array/src/scan.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scan; });
/* harmony import */ var _leastIndex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./leastIndex.js */ "./node_modules/d3-array/src/leastIndex.js");


function scan(values, compare) {
  const index = Object(_leastIndex_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values, compare);
  return index < 0 ? undefined : index;
}


/***/ }),

/***/ "./node_modules/d3-array/src/shuffle.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-array/src/shuffle.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return shuffle; });
function shuffle(array, i0 = 0, i1 = array.length) {
  var m = i1 - (i0 = +i0),
      t,
      i;

  while (m) {
    i = Math.random() * m-- | 0;
    t = array[m + i0];
    array[m + i0] = array[i + i0];
    array[i + i0] = t;
  }

  return array;
}


/***/ }),

/***/ "./node_modules/d3-array/src/sum.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/sum.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sum; });
function sum(values, valueof) {
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value = +value) {
        sum += value;
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if (value = +valueof(value, ++index, values)) {
        sum += value;
      }
    }
  }
  return sum;
}


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/freedmanDiaconis.js":
/*!*****************************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/freedmanDiaconis.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");
/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../quantile.js */ "./node_modules/d3-array/src/quantile.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (2 * (Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.75) - Object(_quantile_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values, 0.25)) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/scott.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/scott.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");
/* harmony import */ var _deviation_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../deviation.js */ "./node_modules/d3-array/src/deviation.js");



/* harmony default export */ __webpack_exports__["default"] = (function(values, min, max) {
  return Math.ceil((max - min) / (3.5 * Object(_deviation_js__WEBPACK_IMPORTED_MODULE_1__["default"])(values) * Math.pow(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values), -1 / 3)));
});


/***/ }),

/***/ "./node_modules/d3-array/src/threshold/sturges.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-array/src/threshold/sturges.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _count_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../count.js */ "./node_modules/d3-array/src/count.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  return Math.ceil(Math.log(Object(_count_js__WEBPACK_IMPORTED_MODULE_0__["default"])(values)) / Math.LN2) + 1;
});


/***/ }),

/***/ "./node_modules/d3-array/src/ticks.js":
/*!********************************************!*\
  !*** ./node_modules/d3-array/src/ticks.js ***!
  \********************************************/
/*! exports provided: default, tickIncrement, tickStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickIncrement", function() { return tickIncrement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tickStep", function() { return tickStep; });
var e10 = Math.sqrt(50),
    e5 = Math.sqrt(10),
    e2 = Math.sqrt(2);

/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count) {
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


/***/ }),

/***/ "./node_modules/d3-array/src/transpose.js":
/*!************************************************!*\
  !*** ./node_modules/d3-array/src/transpose.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _min_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./min.js */ "./node_modules/d3-array/src/min.js");


/* harmony default export */ __webpack_exports__["default"] = (function(matrix) {
  if (!(n = matrix.length)) return [];
  for (var i = -1, m = Object(_min_js__WEBPACK_IMPORTED_MODULE_0__["default"])(matrix, length), transpose = new Array(m); ++i < m;) {
    for (var j = -1, n, row = transpose[i] = new Array(n); ++j < n;) {
      row[j] = matrix[j][i];
    }
  }
  return transpose;
});

function length(d) {
  return d.length;
}


/***/ }),

/***/ "./node_modules/d3-array/src/variance.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-array/src/variance.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return variance; });
function variance(values, valueof) {
  let count = 0;
  let delta;
  let mean = 0;
  let sum = 0;
  if (valueof === undefined) {
    for (let value of values) {
      if (value != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  } else {
    let index = -1;
    for (let value of values) {
      if ((value = valueof(value, ++index, values)) != null && (value = +value) >= value) {
        delta = value - mean;
        mean += delta / ++count;
        sum += delta * (value - mean);
      }
    }
  }
  if (count > 1) return sum / (count - 1);
}


/***/ }),

/***/ "./node_modules/d3-array/src/zip.js":
/*!******************************************!*\
  !*** ./node_modules/d3-array/src/zip.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _transpose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transpose.js */ "./node_modules/d3-array/src/transpose.js");


/* harmony default export */ __webpack_exports__["default"] = (function() {
  return Object(_transpose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arguments);
});


/***/ }),

/***/ "./node_modules/d3-color/src/color.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/color.js ***!
  \********************************************/
/*! exports provided: Color, darker, brighter, default, rgbConvert, rgb, Rgb, hslConvert, hsl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "darker", function() { return darker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "brighter", function() { return brighter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbConvert", function() { return rgbConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Rgb", function() { return Rgb; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslConvert", function() { return hslConvert; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return hsl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");


function Color() {}

var darker = 0.7;
var brighter = 1 / darker;

var reI = "\\s*([+-]?\\d+)\\s*",
    reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    reHex = /^#([0-9a-f]{3,8})$/,
    reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
    reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
    reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
    reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
    reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
    reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

var named = {
  aliceblue: 0xf0f8ff,
  antiquewhite: 0xfaebd7,
  aqua: 0x00ffff,
  aquamarine: 0x7fffd4,
  azure: 0xf0ffff,
  beige: 0xf5f5dc,
  bisque: 0xffe4c4,
  black: 0x000000,
  blanchedalmond: 0xffebcd,
  blue: 0x0000ff,
  blueviolet: 0x8a2be2,
  brown: 0xa52a2a,
  burlywood: 0xdeb887,
  cadetblue: 0x5f9ea0,
  chartreuse: 0x7fff00,
  chocolate: 0xd2691e,
  coral: 0xff7f50,
  cornflowerblue: 0x6495ed,
  cornsilk: 0xfff8dc,
  crimson: 0xdc143c,
  cyan: 0x00ffff,
  darkblue: 0x00008b,
  darkcyan: 0x008b8b,
  darkgoldenrod: 0xb8860b,
  darkgray: 0xa9a9a9,
  darkgreen: 0x006400,
  darkgrey: 0xa9a9a9,
  darkkhaki: 0xbdb76b,
  darkmagenta: 0x8b008b,
  darkolivegreen: 0x556b2f,
  darkorange: 0xff8c00,
  darkorchid: 0x9932cc,
  darkred: 0x8b0000,
  darksalmon: 0xe9967a,
  darkseagreen: 0x8fbc8f,
  darkslateblue: 0x483d8b,
  darkslategray: 0x2f4f4f,
  darkslategrey: 0x2f4f4f,
  darkturquoise: 0x00ced1,
  darkviolet: 0x9400d3,
  deeppink: 0xff1493,
  deepskyblue: 0x00bfff,
  dimgray: 0x696969,
  dimgrey: 0x696969,
  dodgerblue: 0x1e90ff,
  firebrick: 0xb22222,
  floralwhite: 0xfffaf0,
  forestgreen: 0x228b22,
  fuchsia: 0xff00ff,
  gainsboro: 0xdcdcdc,
  ghostwhite: 0xf8f8ff,
  gold: 0xffd700,
  goldenrod: 0xdaa520,
  gray: 0x808080,
  green: 0x008000,
  greenyellow: 0xadff2f,
  grey: 0x808080,
  honeydew: 0xf0fff0,
  hotpink: 0xff69b4,
  indianred: 0xcd5c5c,
  indigo: 0x4b0082,
  ivory: 0xfffff0,
  khaki: 0xf0e68c,
  lavender: 0xe6e6fa,
  lavenderblush: 0xfff0f5,
  lawngreen: 0x7cfc00,
  lemonchiffon: 0xfffacd,
  lightblue: 0xadd8e6,
  lightcoral: 0xf08080,
  lightcyan: 0xe0ffff,
  lightgoldenrodyellow: 0xfafad2,
  lightgray: 0xd3d3d3,
  lightgreen: 0x90ee90,
  lightgrey: 0xd3d3d3,
  lightpink: 0xffb6c1,
  lightsalmon: 0xffa07a,
  lightseagreen: 0x20b2aa,
  lightskyblue: 0x87cefa,
  lightslategray: 0x778899,
  lightslategrey: 0x778899,
  lightsteelblue: 0xb0c4de,
  lightyellow: 0xffffe0,
  lime: 0x00ff00,
  limegreen: 0x32cd32,
  linen: 0xfaf0e6,
  magenta: 0xff00ff,
  maroon: 0x800000,
  mediumaquamarine: 0x66cdaa,
  mediumblue: 0x0000cd,
  mediumorchid: 0xba55d3,
  mediumpurple: 0x9370db,
  mediumseagreen: 0x3cb371,
  mediumslateblue: 0x7b68ee,
  mediumspringgreen: 0x00fa9a,
  mediumturquoise: 0x48d1cc,
  mediumvioletred: 0xc71585,
  midnightblue: 0x191970,
  mintcream: 0xf5fffa,
  mistyrose: 0xffe4e1,
  moccasin: 0xffe4b5,
  navajowhite: 0xffdead,
  navy: 0x000080,
  oldlace: 0xfdf5e6,
  olive: 0x808000,
  olivedrab: 0x6b8e23,
  orange: 0xffa500,
  orangered: 0xff4500,
  orchid: 0xda70d6,
  palegoldenrod: 0xeee8aa,
  palegreen: 0x98fb98,
  paleturquoise: 0xafeeee,
  palevioletred: 0xdb7093,
  papayawhip: 0xffefd5,
  peachpuff: 0xffdab9,
  peru: 0xcd853f,
  pink: 0xffc0cb,
  plum: 0xdda0dd,
  powderblue: 0xb0e0e6,
  purple: 0x800080,
  rebeccapurple: 0x663399,
  red: 0xff0000,
  rosybrown: 0xbc8f8f,
  royalblue: 0x4169e1,
  saddlebrown: 0x8b4513,
  salmon: 0xfa8072,
  sandybrown: 0xf4a460,
  seagreen: 0x2e8b57,
  seashell: 0xfff5ee,
  sienna: 0xa0522d,
  silver: 0xc0c0c0,
  skyblue: 0x87ceeb,
  slateblue: 0x6a5acd,
  slategray: 0x708090,
  slategrey: 0x708090,
  snow: 0xfffafa,
  springgreen: 0x00ff7f,
  steelblue: 0x4682b4,
  tan: 0xd2b48c,
  teal: 0x008080,
  thistle: 0xd8bfd8,
  tomato: 0xff6347,
  turquoise: 0x40e0d0,
  violet: 0xee82ee,
  wheat: 0xf5deb3,
  white: 0xffffff,
  whitesmoke: 0xf5f5f5,
  yellow: 0xffff00,
  yellowgreen: 0x9acd32
};

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor, this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex, // Deprecated! Use color.formatHex.
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});

function color_formatHex() {
  return this.rgb().formatHex();
}

function color_formatHsl() {
  return hslConvert(this).formatHsl();
}

function color_formatRgb() {
  return this.rgb().formatRgb();
}

function color(format) {
  var m, l;
  format = (format + "").trim().toLowerCase();
  return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
      : l === 3 ? new Rgb((m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), ((m & 0xf) << 4) | (m & 0xf), 1) // #f00
      : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
      : l === 4 ? rgba((m >> 12 & 0xf) | (m >> 8 & 0xf0), (m >> 8 & 0xf) | (m >> 4 & 0xf0), (m >> 4 & 0xf) | (m & 0xf0), (((m & 0xf) << 4) | (m & 0xf)) / 0xff) // #f000
      : null) // invalid hex
      : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
      : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
      : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
      : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
      : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
      : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
      : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
      : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0)
      : null;
}

function rgbn(n) {
  return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
}

function rgba(r, g, b, a) {
  if (a <= 0) r = g = b = NaN;
  return new Rgb(r, g, b, a);
}

function rgbConvert(o) {
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Rgb;
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}

function rgb(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}

function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Rgb, rgb, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return (-0.5 <= this.r && this.r < 255.5)
        && (-0.5 <= this.g && this.g < 255.5)
        && (-0.5 <= this.b && this.b < 255.5)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex, // Deprecated! Use color.formatHex.
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));

function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}

function rgb_formatRgb() {
  var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(")
      + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", "
      + Math.max(0, Math.min(255, Math.round(this.b) || 0))
      + (a === 1 ? ")" : ", " + a + ")");
}

function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}

function hsla(h, s, l, a) {
  if (a <= 0) h = s = l = NaN;
  else if (l <= 0 || l >= 1) h = s = NaN;
  else if (s <= 0) h = NaN;
  return new Hsl(h, s, l, a);
}

function hslConvert(o) {
  if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color)) o = color(o);
  if (!o) return new Hsl;
  if (o instanceof Hsl) return o;
  o = o.rgb();
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      min = Math.min(r, g, b),
      max = Math.max(r, g, b),
      h = NaN,
      s = max - min,
      l = (max + min) / 2;
  if (s) {
    if (r === max) h = (g - b) / s + (g < b) * 6;
    else if (g === max) h = (b - r) / s + 2;
    else h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}

function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}

function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hsl, hsl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360,
        s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
        l = this.l,
        m2 = l + (l < 0.5 ? l : 1 - l) * s,
        m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s))
        && (0 <= this.l && this.l <= 1)
        && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity; a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(")
        + (this.h || 0) + ", "
        + (this.s || 0) * 100 + "%, "
        + (this.l || 0) * 100 + "%"
        + (a === 1 ? ")" : ", " + a + ")");
  }
}));

/* From FvD 13.37, CSS Color Module Level 3 */
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60
      : h < 180 ? m2
      : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60
      : m1) * 255;
}


/***/ }),

/***/ "./node_modules/d3-color/src/cubehelix.js":
/*!************************************************!*\
  !*** ./node_modules/d3-color/src/cubehelix.js ***!
  \************************************************/
/*! exports provided: default, Cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return cubehelix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cubehelix", function() { return Cubehelix; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




var A = -0.14861,
    B = +1.78277,
    C = -0.29227,
    D = -0.90649,
    E = +1.97294,
    ED = E * D,
    EB = E * B,
    BC_DA = B * C - D * A;

function cubehelixConvert(o) {
  if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = o.r / 255,
      g = o.g / 255,
      b = o.b / 255,
      l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
      bl = b - l,
      k = (E * (g - l) - C * bl) / D,
      s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)), // NaN if l=0 or l=1
      h = s ? Math.atan2(k, bl) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"] - 120 : NaN;
  return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
}

function cubehelix(h, s, l, opacity) {
  return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
}

function Cubehelix(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Cubehelix, cubehelix, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["brighter"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? _color_js__WEBPACK_IMPORTED_MODULE_1__["darker"] : Math.pow(_color_js__WEBPACK_IMPORTED_MODULE_1__["darker"], k);
    return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = isNaN(this.h) ? 0 : (this.h + 120) * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"],
        l = +this.l,
        a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
        cosh = Math.cos(h),
        sinh = Math.sin(h);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      255 * (l + a * (A * cosh + B * sinh)),
      255 * (l + a * (C * cosh + D * sinh)),
      255 * (l + a * (E * cosh)),
      this.opacity
    );
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/define.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-color/src/define.js ***!
  \*********************************************/
/*! exports provided: default, extend */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extend", function() { return extend; });
/* harmony default export */ __webpack_exports__["default"] = (function(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
});

function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition) prototype[key] = definition[key];
  return prototype;
}


/***/ }),

/***/ "./node_modules/d3-color/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-color/src/index.js ***!
  \********************************************/
/*! exports provided: color, rgb, hsl, lab, hcl, lch, gray, cubehelix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rgb", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["rgb"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hsl", function() { return _color_js__WEBPACK_IMPORTED_MODULE_0__["hsl"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-color/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["hcl"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["lch"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_1__["gray"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-color/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "./node_modules/d3-color/src/lab.js":
/*!******************************************!*\
  !*** ./node_modules/d3-color/src/lab.js ***!
  \******************************************/
/*! exports provided: gray, default, Lab, lch, hcl, Hcl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gray", function() { return gray; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lab", function() { return Lab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lch", function() { return lch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hcl", function() { return hcl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hcl", function() { return Hcl; });
/* harmony import */ var _define_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./define.js */ "./node_modules/d3-color/src/define.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-color/src/color.js");
/* harmony import */ var _math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math.js */ "./node_modules/d3-color/src/math.js");




// https://observablehq.com/@mbostock/lab-and-rgb
var K = 18,
    Xn = 0.96422,
    Yn = 1,
    Zn = 0.82521,
    t0 = 4 / 29,
    t1 = 6 / 29,
    t2 = 3 * t1 * t1,
    t3 = t1 * t1 * t1;

function labConvert(o) {
  if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
  if (o instanceof Hcl) return hcl2lab(o);
  if (!(o instanceof _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"])) o = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["rgbConvert"])(o);
  var r = rgb2lrgb(o.r),
      g = rgb2lrgb(o.g),
      b = rgb2lrgb(o.b),
      y = xyz2lab((0.2225045 * r + 0.7168786 * g + 0.0606169 * b) / Yn), x, z;
  if (r === g && g === b) x = z = y; else {
    x = xyz2lab((0.4360747 * r + 0.3850649 * g + 0.1430804 * b) / Xn);
    z = xyz2lab((0.0139322 * r + 0.0971045 * g + 0.7141733 * b) / Zn);
  }
  return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
}

function gray(l, opacity) {
  return new Lab(l, 0, 0, opacity == null ? 1 : opacity);
}

function lab(l, a, b, opacity) {
  return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
}

function Lab(l, a, b, opacity) {
  this.l = +l;
  this.a = +a;
  this.b = +b;
  this.opacity = +opacity;
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Lab, lab, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Lab(this.l + K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  darker: function(k) {
    return new Lab(this.l - K * (k == null ? 1 : k), this.a, this.b, this.opacity);
  },
  rgb: function() {
    var y = (this.l + 16) / 116,
        x = isNaN(this.a) ? y : y + this.a / 500,
        z = isNaN(this.b) ? y : y - this.b / 200;
    x = Xn * lab2xyz(x);
    y = Yn * lab2xyz(y);
    z = Zn * lab2xyz(z);
    return new _color_js__WEBPACK_IMPORTED_MODULE_1__["Rgb"](
      lrgb2rgb( 3.1338561 * x - 1.6168667 * y - 0.4906146 * z),
      lrgb2rgb(-0.9787684 * x + 1.9161415 * y + 0.0334540 * z),
      lrgb2rgb( 0.0719453 * x - 0.2289914 * y + 1.4052427 * z),
      this.opacity
    );
  }
}));

function xyz2lab(t) {
  return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
}

function lab2xyz(t) {
  return t > t1 ? t * t * t : t2 * (t - t0);
}

function lrgb2rgb(x) {
  return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
}

function rgb2lrgb(x) {
  return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
}

function hclConvert(o) {
  if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
  if (!(o instanceof Lab)) o = labConvert(o);
  if (o.a === 0 && o.b === 0) return new Hcl(NaN, 0 < o.l && o.l < 100 ? 0 : NaN, o.l, o.opacity);
  var h = Math.atan2(o.b, o.a) * _math_js__WEBPACK_IMPORTED_MODULE_2__["rad2deg"];
  return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
}

function lch(l, c, h, opacity) {
  return arguments.length === 1 ? hclConvert(l) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function hcl(h, c, l, opacity) {
  return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
}

function Hcl(h, c, l, opacity) {
  this.h = +h;
  this.c = +c;
  this.l = +l;
  this.opacity = +opacity;
}

function hcl2lab(o) {
  if (isNaN(o.h)) return new Lab(o.l, 0, 0, o.opacity);
  var h = o.h * _math_js__WEBPACK_IMPORTED_MODULE_2__["deg2rad"];
  return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
}

Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Hcl, hcl, Object(_define_js__WEBPACK_IMPORTED_MODULE_0__["extend"])(_color_js__WEBPACK_IMPORTED_MODULE_1__["Color"], {
  brighter: function(k) {
    return new Hcl(this.h, this.c, this.l + K * (k == null ? 1 : k), this.opacity);
  },
  darker: function(k) {
    return new Hcl(this.h, this.c, this.l - K * (k == null ? 1 : k), this.opacity);
  },
  rgb: function() {
    return hcl2lab(this).rgb();
  }
}));


/***/ }),

/***/ "./node_modules/d3-color/src/math.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-color/src/math.js ***!
  \*******************************************/
/*! exports provided: deg2rad, rad2deg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deg2rad", function() { return deg2rad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rad2deg", function() { return rad2deg; });
var deg2rad = Math.PI / 180;
var rad2deg = 180 / Math.PI;


/***/ }),

/***/ "./node_modules/d3-format/src/defaultLocale.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/defaultLocale.js ***!
  \*****************************************************/
/*! exports provided: format, formatPrefix, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "format", function() { return format; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return formatPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");


var locale;
var format;
var formatPrefix;

defaultLocale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["$", ""],
  minus: "-"
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-format/src/exponent.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/exponent.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(x)), x ? x[1] : NaN;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatDecimal.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatDecimal.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Computes the decimal coefficient and exponent of the specified number x with
// significant digits p, where x is positive and p is in [1, 21] or undefined.
// For example, formatDecimal(1.23) returns ["123", 0].
/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0) return null; // NaN, ±Infinity
  var i, coefficient = x.slice(0, i);

  // The string returned by toExponential either has the form \d\.\d+e[-+]\d+
  // (e.g., 1.2e+3) or the form \de[-+]\d+ (e.g., 1e+3).
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatGroup.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatGroup.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(grouping, thousands) {
  return function(value, width) {
    var i = value.length,
        t = [],
        j = 0,
        g = grouping[0],
        length = 0;

    while (i > 0 && g > 0) {
      if (length + g + 1 > width) g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width) break;
      g = grouping[j = (j + 1) % grouping.length];
    }

    return t.reverse().join(thousands);
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatNumerals.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/formatNumerals.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatPrefixAuto.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-format/src/formatPrefixAuto.js ***!
  \********************************************************/
/*! exports provided: prefixExponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prefixExponent", function() { return prefixExponent; });
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


var prefixExponent;

/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1],
      i = exponent - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent / 3))) * 3) + 1,
      n = coefficient.length;
  return i === n ? coefficient
      : i > n ? coefficient + new Array(i - n + 1).join("0")
      : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i)
      : "0." + new Array(1 - i).join("0") + Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, Math.max(0, p + i - 1))[0]; // less than 1y!
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatRounded.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-format/src/formatRounded.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatDecimal.js */ "./node_modules/d3-format/src/formatDecimal.js");


/* harmony default export */ __webpack_exports__["default"] = (function(x, p) {
  var d = Object(_formatDecimal_js__WEBPACK_IMPORTED_MODULE_0__["default"])(x, p);
  if (!d) return x + "";
  var coefficient = d[0],
      exponent = d[1];
  return exponent < 0 ? "0." + new Array(-exponent).join("0") + coefficient
      : coefficient.length > exponent + 1 ? coefficient.slice(0, exponent + 1) + "." + coefficient.slice(exponent + 1)
      : coefficient + new Array(exponent - coefficient.length + 2).join("0");
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatSpecifier.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/formatSpecifier.js ***!
  \*******************************************************/
/*! exports provided: default, FormatSpecifier */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatSpecifier; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return FormatSpecifier; });
// [[fill]align][sign][symbol][0][width][,][.precision][~][type]
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;

function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier))) throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}

formatSpecifier.prototype = FormatSpecifier.prototype; // instanceof

function FormatSpecifier(specifier) {
  this.fill = specifier.fill === undefined ? " " : specifier.fill + "";
  this.align = specifier.align === undefined ? ">" : specifier.align + "";
  this.sign = specifier.sign === undefined ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === undefined ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === undefined ? undefined : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === undefined ? undefined : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === undefined ? "" : specifier.type + "";
}

FormatSpecifier.prototype.toString = function() {
  return this.fill
      + this.align
      + this.sign
      + this.symbol
      + (this.zero ? "0" : "")
      + (this.width === undefined ? "" : Math.max(1, this.width | 0))
      + (this.comma ? "," : "")
      + (this.precision === undefined ? "" : "." + Math.max(0, this.precision | 0))
      + (this.trim ? "~" : "")
      + this.type;
};


/***/ }),

/***/ "./node_modules/d3-format/src/formatTrim.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-format/src/formatTrim.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// Trims insignificant zeros, e.g., replaces 1.2000k with 1.2k.
/* harmony default export */ __webpack_exports__["default"] = (function(s) {
  out: for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
    switch (s[i]) {
      case ".": i0 = i1 = i; break;
      case "0": if (i0 === 0) i0 = i; i1 = i; break;
      default: if (!+s[i]) break out; if (i0 > 0) i0 = 0; break;
    }
  }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
});


/***/ }),

/***/ "./node_modules/d3-format/src/formatTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-format/src/formatTypes.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatRounded.js */ "./node_modules/d3-format/src/formatRounded.js");



/* harmony default export */ __webpack_exports__["default"] = ({
  "%": function(x, p) { return (x * 100).toFixed(p); },
  "b": function(x) { return Math.round(x).toString(2); },
  "c": function(x) { return x + ""; },
  "d": function(x) { return Math.round(x).toString(10); },
  "e": function(x, p) { return x.toExponential(p); },
  "f": function(x, p) { return x.toFixed(p); },
  "g": function(x, p) { return x.toPrecision(p); },
  "o": function(x) { return Math.round(x).toString(8); },
  "p": function(x, p) { return Object(_formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"])(x * 100, p); },
  "r": _formatRounded_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  "s": _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "X": function(x) { return Math.round(x).toString(16).toUpperCase(); },
  "x": function(x) { return Math.round(x).toString(16); }
});


/***/ }),

/***/ "./node_modules/d3-format/src/identity.js":
/*!************************************************!*\
  !*** ./node_modules/d3-format/src/identity.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return x;
});


/***/ }),

/***/ "./node_modules/d3-format/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-format/src/index.js ***!
  \*********************************************/
/*! exports provided: formatDefaultLocale, format, formatPrefix, formatLocale, formatSpecifier, FormatSpecifier, precisionFixed, precisionPrefix, precisionRound */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatPrefix", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["formatPrefix"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FormatSpecifier", function() { return _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_2__["FormatSpecifier"]; });

/* harmony import */ var _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./precisionFixed.js */ "./node_modules/d3-format/src/precisionFixed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionFixed", function() { return _precisionFixed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./precisionPrefix.js */ "./node_modules/d3-format/src/precisionPrefix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionPrefix", function() { return _precisionPrefix_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./precisionRound.js */ "./node_modules/d3-format/src/precisionRound.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "precisionRound", function() { return _precisionRound_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });









/***/ }),

/***/ "./node_modules/d3-format/src/locale.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-format/src/locale.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");
/* harmony import */ var _formatGroup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formatGroup.js */ "./node_modules/d3-format/src/formatGroup.js");
/* harmony import */ var _formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./formatNumerals.js */ "./node_modules/d3-format/src/formatNumerals.js");
/* harmony import */ var _formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatSpecifier.js */ "./node_modules/d3-format/src/formatSpecifier.js");
/* harmony import */ var _formatTrim_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formatTrim.js */ "./node_modules/d3-format/src/formatTrim.js");
/* harmony import */ var _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./formatTypes.js */ "./node_modules/d3-format/src/formatTypes.js");
/* harmony import */ var _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./formatPrefixAuto.js */ "./node_modules/d3-format/src/formatPrefixAuto.js");
/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-format/src/identity.js");









var map = Array.prototype.map,
    prefixes = ["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];

/* harmony default export */ __webpack_exports__["default"] = (function(locale) {
  var group = locale.grouping === undefined || locale.thousands === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatGroup_js__WEBPACK_IMPORTED_MODULE_1__["default"])(map.call(locale.grouping, Number), locale.thousands + ""),
      currencyPrefix = locale.currency === undefined ? "" : locale.currency[0] + "",
      currencySuffix = locale.currency === undefined ? "" : locale.currency[1] + "",
      decimal = locale.decimal === undefined ? "." : locale.decimal + "",
      numerals = locale.numerals === undefined ? _identity_js__WEBPACK_IMPORTED_MODULE_7__["default"] : Object(_formatNumerals_js__WEBPACK_IMPORTED_MODULE_2__["default"])(map.call(locale.numerals, String)),
      percent = locale.percent === undefined ? "%" : locale.percent + "",
      minus = locale.minus === undefined ? "-" : locale.minus + "",
      nan = locale.nan === undefined ? "NaN" : locale.nan + "";

  function newFormat(specifier) {
    specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier);

    var fill = specifier.fill,
        align = specifier.align,
        sign = specifier.sign,
        symbol = specifier.symbol,
        zero = specifier.zero,
        width = specifier.width,
        comma = specifier.comma,
        precision = specifier.precision,
        trim = specifier.trim,
        type = specifier.type;

    // The "n" type is an alias for ",g".
    if (type === "n") comma = true, type = "g";

    // The "" type, and any invalid type, is an alias for ".12~g".
    else if (!_formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type]) precision === undefined && (precision = 12), trim = true, type = "g";

    // If zero fill is specified, padding goes after sign and before digits.
    if (zero || (fill === "0" && align === "=")) zero = true, fill = "0", align = "=";

    // Compute the prefix and suffix.
    // For SI-prefix, the suffix is lazily computed.
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "",
        suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";

    // What format function should we use?
    // Is this an integer type?
    // Can this type generate exponential notation?
    var formatType = _formatTypes_js__WEBPACK_IMPORTED_MODULE_5__["default"][type],
        maybeSuffix = /[defgprs%]/.test(type);

    // Set the default precision if not specified,
    // or clamp the specified precision to the supported range.
    // For significant precision, it must be in [1, 21].
    // For fixed precision, it must be in [0, 20].
    precision = precision === undefined ? 6
        : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision))
        : Math.max(0, Math.min(20, precision));

    function format(value) {
      var valuePrefix = prefix,
          valueSuffix = suffix,
          i, n, c;

      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;

        // Determine the sign. -0 is not less than 0, but 1 / -0 is!
        var valueNegative = value < 0 || 1 / value < 0;

        // Perform the initial formatting.
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);

        // Trim insignificant zeros.
        if (trim) value = Object(_formatTrim_js__WEBPACK_IMPORTED_MODULE_4__["default"])(value);

        // If a negative value rounds to zero after formatting, and no explicit positive sign is requested, hide the sign.
        if (valueNegative && +value === 0 && sign !== "+") valueNegative = false;

        // Compute the prefix and suffix.
        valuePrefix = (valueNegative ? (sign === "(" ? sign : minus) : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + _formatPrefixAuto_js__WEBPACK_IMPORTED_MODULE_6__["prefixExponent"] / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");

        // Break the formatted value into the integer “value” part that can be
        // grouped, and fractional or exponential “suffix” part that is not.
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }

      // If the fill character is not "0", grouping is applied before padding.
      if (comma && !zero) value = group(value, Infinity);

      // Compute the padding.
      var length = valuePrefix.length + value.length + valueSuffix.length,
          padding = length < width ? new Array(width - length + 1).join(fill) : "";

      // If the fill character is "0", grouping is applied after padding.
      if (comma && zero) value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";

      // Reconstruct the final output based on the desired alignment.
      switch (align) {
        case "<": value = valuePrefix + value + valueSuffix + padding; break;
        case "=": value = valuePrefix + padding + value + valueSuffix; break;
        case "^": value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length); break;
        default: value = padding + valuePrefix + value + valueSuffix; break;
      }

      return numerals(value);
    }

    format.toString = function() {
      return specifier + "";
    };

    return format;
  }

  function formatPrefix(specifier, value) {
    var f = newFormat((specifier = Object(_formatSpecifier_js__WEBPACK_IMPORTED_MODULE_3__["default"])(specifier), specifier.type = "f", specifier)),
        e = Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3,
        k = Math.pow(10, -e),
        prefix = prefixes[8 + e / 3];
    return function(value) {
      return f(k * value) + prefix;
    };
  }

  return {
    format: newFormat,
    formatPrefix: formatPrefix
  };
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionFixed.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionFixed.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step) {
  return Math.max(0, -Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionPrefix.js":
/*!*******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionPrefix.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value) / 3))) * 3 - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.abs(step)));
});


/***/ }),

/***/ "./node_modules/d3-format/src/precisionRound.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-format/src/precisionRound.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exponent_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exponent.js */ "./node_modules/d3-format/src/exponent.js");


/* harmony default export */ __webpack_exports__["default"] = (function(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(max) - Object(_exponent_js__WEBPACK_IMPORTED_MODULE_0__["default"])(step)) + 1;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/array.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/array.js ***!
  \**************************************************/
/*! exports provided: default, genericArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genericArray", function() { return genericArray; });
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");



/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return (Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_1__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_1__["default"] : genericArray)(a, b);
});

function genericArray(a, b) {
  var nb = b ? b.length : 0,
      na = a ? Math.min(nb, a.length) : 0,
      x = new Array(na),
      c = new Array(nb),
      i;

  for (i = 0; i < na; ++i) x[i] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[i], b[i]);
  for (; i < nb; ++i) c[i] = b[i];

  return function(t) {
    for (i = 0; i < na; ++i) c[i] = x[i](t);
    return c;
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basis.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basis.js ***!
  \**************************************************/
/*! exports provided: basis, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "basis", function() { return basis; });
function basis(t1, v0, v1, v2, v3) {
  var t2 = t1 * t1, t3 = t2 * t1;
  return ((1 - 3 * t1 + 3 * t2 - t3) * v0
      + (4 - 6 * t2 + 3 * t3) * v1
      + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2
      + t3 * v3) / 6;
}

/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length - 1;
  return function(t) {
    var i = t <= 0 ? (t = 0) : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
        v1 = values[i],
        v2 = values[i + 1],
        v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
        v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
    return basis((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/basisClosed.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/basisClosed.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");


/* harmony default export */ __webpack_exports__["default"] = (function(values) {
  var n = values.length;
  return function(t) {
    var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
        v0 = values[(i + n - 1) % n],
        v1 = values[i % n],
        v2 = values[(i + 1) % n],
        v3 = values[(i + 2) % n];
    return Object(_basis_js__WEBPACK_IMPORTED_MODULE_0__["basis"])((t - i / n) * n, v0, v1, v2, v3);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/color.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/color.js ***!
  \**************************************************/
/*! exports provided: hue, gamma, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hue", function() { return hue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gamma", function() { return gamma; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return nogamma; });
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");


function linear(a, d) {
  return function(t) {
    return a + t * d;
  };
}

function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}

function hue(a, b) {
  var d = b - a;
  return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}

function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
  };
}

function nogamma(a, b) {
  var d = b - a;
  return d ? linear(a, d) : Object(_constant_js__WEBPACK_IMPORTED_MODULE_0__["default"])(isNaN(a) ? b : a);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/constant.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/constant.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/cubehelix.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/cubehelix.js ***!
  \******************************************************/
/*! exports provided: default, cubehelixLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cubehelixLong", function() { return cubehelixLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function cubehelix(hue) {
  return (function cubehelixGamma(y) {
    y = +y;

    function cubehelix(start, end) {
      var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["cubehelix"])(end)).h),
          s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
          l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
          opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
      return function(t) {
        start.h = h(t);
        start.s = s(t);
        start.l = l(Math.pow(t, y));
        start.opacity = opacity(t);
        return start + "";
      };
    }

    cubehelix.gamma = cubehelixGamma;

    return cubehelix;
  })(1);
}

/* harmony default export */ __webpack_exports__["default"] = (cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var cubehelixLong = cubehelix(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/date.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/date.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var d = new Date;
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/discrete.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/discrete.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(range) {
  var n = range.length;
  return function(t) {
    return range[Math.max(0, Math.min(n - 1, Math.floor(t * n)))];
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hcl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hcl.js ***!
  \************************************************/
/*! exports provided: default, hclLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hclLong", function() { return hclLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hcl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hcl"])(end)).h),
        c = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.c, end.c),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.c = c(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hclLong = hcl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hsl.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hsl.js ***!
  \************************************************/
/*! exports provided: default, hslLong */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hslLong", function() { return hslLong; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function hsl(hue) {
  return function(start, end) {
    var h = hue((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(start)).h, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["hsl"])(end)).h),
        s = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.s, end.s),
        l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.l, end.l),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.h = h(t);
      start.s = s(t);
      start.l = l(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
}

/* harmony default export */ __webpack_exports__["default"] = (hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["hue"]));
var hslLong = hsl(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/hue.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/hue.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = Object(_color_js__WEBPACK_IMPORTED_MODULE_0__["hue"])(+a, +b);
  return function(t) {
    var x = i(t);
    return x - 360 * Math.floor(x / 360);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/index.js ***!
  \**************************************************/
/*! exports provided: interpolate, interpolateArray, interpolateBasis, interpolateBasisClosed, interpolateDate, interpolateDiscrete, interpolateHue, interpolateNumber, interpolateNumberArray, interpolateObject, interpolateRound, interpolateString, interpolateTransformCss, interpolateTransformSvg, interpolateZoom, interpolateRgb, interpolateRgbBasis, interpolateRgbBasisClosed, interpolateHsl, interpolateHslLong, interpolateLab, interpolateHcl, interpolateHclLong, interpolateCubehelix, interpolateCubehelixLong, piecewise, quantize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolate", function() { return _value_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateArray", function() { return _array_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasis", function() { return _basis_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function() { return _basisClosed_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDate", function() { return _date_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _discrete_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./discrete.js */ "./node_modules/d3-interpolate/src/discrete.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateDiscrete", function() { return _discrete_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _hue_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hue.js */ "./node_modules/d3-interpolate/src/hue.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHue", function() { return _hue_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumber", function() { return _number_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateNumberArray", function() { return _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateObject", function() { return _object_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _round_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./round.js */ "./node_modules/d3-interpolate/src/round.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRound", function() { return _round_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateString", function() { return _string_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _transform_index_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/index.js */ "./node_modules/d3-interpolate/src/transform/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformCss"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return _transform_index_js__WEBPACK_IMPORTED_MODULE_12__["interpolateTransformSvg"]; });

/* harmony import */ var _zoom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./zoom.js */ "./node_modules/d3-interpolate/src/zoom.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateZoom", function() { return _zoom_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgb", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function() { return _rgb_js__WEBPACK_IMPORTED_MODULE_14__["rgbBasisClosed"]; });

/* harmony import */ var _hsl_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hsl.js */ "./node_modules/d3-interpolate/src/hsl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHsl", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHslLong", function() { return _hsl_js__WEBPACK_IMPORTED_MODULE_15__["hslLong"]; });

/* harmony import */ var _lab_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lab.js */ "./node_modules/d3-interpolate/src/lab.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateLab", function() { return _lab_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _hcl_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./hcl.js */ "./node_modules/d3-interpolate/src/hcl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHcl", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateHclLong", function() { return _hcl_js__WEBPACK_IMPORTED_MODULE_17__["hclLong"]; });

/* harmony import */ var _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cubehelix.js */ "./node_modules/d3-interpolate/src/cubehelix.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function() { return _cubehelix_js__WEBPACK_IMPORTED_MODULE_18__["cubehelixLong"]; });

/* harmony import */ var _piecewise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./piecewise.js */ "./node_modules/d3-interpolate/src/piecewise.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "piecewise", function() { return _piecewise_js__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-interpolate/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_20__["default"]; });
























/***/ }),

/***/ "./node_modules/d3-interpolate/src/lab.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/lab.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lab; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");



function lab(start, end) {
  var l = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(start)).l, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["lab"])(end)).l),
      a = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.a, end.a),
      b = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.b, end.b),
      opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_1__["default"])(start.opacity, end.opacity);
  return function(t) {
    start.l = l(t);
    start.a = a(t);
    start.b = b(t);
    start.opacity = opacity(t);
    return start + "";
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/number.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/number.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/numberArray.js":
/*!********************************************************!*\
  !*** ./node_modules/d3-interpolate/src/numberArray.js ***!
  \********************************************************/
/*! exports provided: default, isNumberArray */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumberArray", function() { return isNumberArray; });
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  if (!b) b = [];
  var n = a ? Math.min(b.length, a.length) : 0,
      c = b.slice(),
      i;
  return function(t) {
    for (i = 0; i < n; ++i) c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
});

function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/object.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/object.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./value.js */ "./node_modules/d3-interpolate/src/value.js");


/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var i = {},
      c = {},
      k;

  if (a === null || typeof a !== "object") a = {};
  if (b === null || typeof b !== "object") b = {};

  for (k in b) {
    if (k in a) {
      i[k] = Object(_value_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }

  return function(t) {
    for (k in i) c[k] = i[k](t);
    return c;
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/piecewise.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-interpolate/src/piecewise.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return piecewise; });
function piecewise(interpolate, values) {
  var i = 0, n = values.length - 1, v = values[0], I = new Array(n < 0 ? 0 : n);
  while (i < n) I[i] = interpolate(v, v = values[++i]);
  return function(t) {
    var i = Math.max(0, Math.min(n - 1, Math.floor(t *= n)));
    return I[i](t - i);
  };
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/quantize.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-interpolate/src/quantize.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(interpolator, n) {
  var samples = new Array(n);
  for (var i = 0; i < n; ++i) samples[i] = interpolator(i / (n - 1));
  return samples;
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/rgb.js":
/*!************************************************!*\
  !*** ./node_modules/d3-interpolate/src/rgb.js ***!
  \************************************************/
/*! exports provided: default, rgbBasis, rgbBasisClosed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasis", function() { return rgbBasis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rgbBasisClosed", function() { return rgbBasisClosed; });
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _basis_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basis.js */ "./node_modules/d3-interpolate/src/basis.js");
/* harmony import */ var _basisClosed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basisClosed.js */ "./node_modules/d3-interpolate/src/basisClosed.js");
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color.js */ "./node_modules/d3-interpolate/src/color.js");





/* harmony default export */ __webpack_exports__["default"] = ((function rgbGamma(y) {
  var color = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["gamma"])(y);

  function rgb(start, end) {
    var r = color((start = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(start)).r, (end = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(end)).r),
        g = color(start.g, end.g),
        b = color(start.b, end.b),
        opacity = Object(_color_js__WEBPACK_IMPORTED_MODULE_3__["default"])(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }

  rgb.gamma = rgbGamma;

  return rgb;
})(1));

function rgbSpline(spline) {
  return function(colors) {
    var n = colors.length,
        r = new Array(n),
        g = new Array(n),
        b = new Array(n),
        i, color;
    for (i = 0; i < n; ++i) {
      color = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["rgb"])(colors[i]);
      r[i] = color.r || 0;
      g[i] = color.g || 0;
      b[i] = color.b || 0;
    }
    r = spline(r);
    g = spline(g);
    b = spline(b);
    color.opacity = 1;
    return function(t) {
      color.r = r(t);
      color.g = g(t);
      color.b = b(t);
      return color + "";
    };
  };
}

var rgbBasis = rgbSpline(_basis_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
var rgbBasisClosed = rgbSpline(_basisClosed_js__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ }),

/***/ "./node_modules/d3-interpolate/src/round.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/round.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/string.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-interpolate/src/string.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");


var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    reB = new RegExp(reA.source, "g");

function zero(b) {
  return function() {
    return b;
  };
}

function one(b) {
  return function(t) {
    return b(t) + "";
  };
}

/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, // scan index for next number in b
      am, // current match in a
      bm, // current match in b
      bs, // string preceding current number in b, if any
      i = -1, // index in s
      s = [], // string constants and placeholders
      q = []; // number interpolators

  // Coerce inputs to strings.
  a = a + "", b = b + "";

  // Interpolate pairs of numbers in a & b.
  while ((am = reA.exec(a))
      && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) { // a string precedes the next number in b
      bs = b.slice(bi, bs);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) { // numbers in a & b match
      if (s[i]) s[i] += bm; // coalesce with previous string
      else s[++i] = bm;
    } else { // interpolate non-matching numbers
      s[++i] = null;
      q.push({i: i, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(am, bm)});
    }
    bi = reB.lastIndex;
  }

  // Add remains of b.
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i]) s[i] += bs; // coalesce with previous string
    else s[++i] = bs;
  }

  // Special optimization for only a single match.
  // Otherwise, interpolate each of the numbers and rejoin the string.
  return s.length < 2 ? (q[0]
      ? one(q[0].x)
      : zero(b))
      : (b = q.length, function(t) {
          for (var i = 0, o; i < b; ++i) s[(o = q[i]).i] = o.x(t);
          return s.join("");
        });
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/decompose.js":
/*!****************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/decompose.js ***!
  \****************************************************************/
/*! exports provided: identity, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
var degrees = 180 / Math.PI;

var identity = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};

/* harmony default export */ __webpack_exports__["default"] = (function(a, b, c, d, e, f) {
  var scaleX, scaleY, skewX;
  if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
  if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
  if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
  if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
  return {
    translateX: e,
    translateY: f,
    rotate: Math.atan2(b, a) * degrees,
    skewX: Math.atan(skewX) * degrees,
    scaleX: scaleX,
    scaleY: scaleY
  };
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/index.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/index.js ***!
  \************************************************************/
/*! exports provided: interpolateTransformCss, interpolateTransformSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function() { return interpolateTransformCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function() { return interpolateTransformSvg; });
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ "./node_modules/d3-interpolate/src/transform/parse.js");



function interpolateTransform(parse, pxComma, pxParen, degParen) {

  function pop(s) {
    return s.length ? s.pop() + " " : "";
  }

  function translate(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push("translate(", null, pxComma, null, pxParen);
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb || yb) {
      s.push("translate(" + xb + pxComma + yb + pxParen);
    }
  }

  function rotate(a, b, s, q) {
    if (a !== b) {
      if (a - b > 180) b += 360; else if (b - a > 180) a += 360; // shortest path
      q.push({i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "rotate(" + b + degParen);
    }
  }

  function skewX(a, b, s, q) {
    if (a !== b) {
      q.push({i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(a, b)});
    } else if (b) {
      s.push(pop(s) + "skewX(" + b + degParen);
    }
  }

  function scale(xa, ya, xb, yb, s, q) {
    if (xa !== xb || ya !== yb) {
      var i = s.push(pop(s) + "scale(", null, ",", null, ")");
      q.push({i: i - 4, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(xa, xb)}, {i: i - 2, x: Object(_number_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ya, yb)});
    } else if (xb !== 1 || yb !== 1) {
      s.push(pop(s) + "scale(" + xb + "," + yb + ")");
    }
  }

  return function(a, b) {
    var s = [], // string constants and placeholders
        q = []; // number interpolators
    a = parse(a), b = parse(b);
    translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
    rotate(a.rotate, b.rotate, s, q);
    skewX(a.skewX, b.skewX, s, q);
    scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
    a = b = null; // gc
    return function(t) {
      var i = -1, n = q.length, o;
      while (++i < n) s[(o = q[i]).i] = o.x(t);
      return s.join("");
    };
  };
}

var interpolateTransformCss = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseCss"], "px, ", "px)", "deg)");
var interpolateTransformSvg = interpolateTransform(_parse_js__WEBPACK_IMPORTED_MODULE_1__["parseSvg"], ", ", ")", ")");


/***/ }),

/***/ "./node_modules/d3-interpolate/src/transform/parse.js":
/*!************************************************************!*\
  !*** ./node_modules/d3-interpolate/src/transform/parse.js ***!
  \************************************************************/
/*! exports provided: parseCss, parseSvg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseCss", function() { return parseCss; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseSvg", function() { return parseSvg; });
/* harmony import */ var _decompose_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./decompose.js */ "./node_modules/d3-interpolate/src/transform/decompose.js");


var cssNode,
    cssRoot,
    cssView,
    svgNode;

function parseCss(value) {
  if (value === "none") return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
  cssNode.style.transform = value;
  value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
  cssRoot.removeChild(cssNode);
  value = value.slice(7, -1).split(",");
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
}

function parseSvg(value) {
  if (value == null) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
  svgNode.setAttribute("transform", value);
  if (!(value = svgNode.transform.baseVal.consolidate())) return _decompose_js__WEBPACK_IMPORTED_MODULE_0__["identity"];
  value = value.matrix;
  return Object(_decompose_js__WEBPACK_IMPORTED_MODULE_0__["default"])(value.a, value.b, value.c, value.d, value.e, value.f);
}


/***/ }),

/***/ "./node_modules/d3-interpolate/src/value.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-interpolate/src/value.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-color */ "./node_modules/d3-color/src/index.js");
/* harmony import */ var _rgb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rgb.js */ "./node_modules/d3-interpolate/src/rgb.js");
/* harmony import */ var _array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array.js */ "./node_modules/d3-interpolate/src/array.js");
/* harmony import */ var _date_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./date.js */ "./node_modules/d3-interpolate/src/date.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-interpolate/src/number.js");
/* harmony import */ var _object_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./object.js */ "./node_modules/d3-interpolate/src/object.js");
/* harmony import */ var _string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./string.js */ "./node_modules/d3-interpolate/src/string.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-interpolate/src/constant.js");
/* harmony import */ var _numberArray_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numberArray.js */ "./node_modules/d3-interpolate/src/numberArray.js");










/* harmony default export */ __webpack_exports__["default"] = (function(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? Object(_constant_js__WEBPACK_IMPORTED_MODULE_7__["default"])(b)
      : (t === "number" ? _number_js__WEBPACK_IMPORTED_MODULE_4__["default"]
      : t === "string" ? ((c = Object(d3_color__WEBPACK_IMPORTED_MODULE_0__["color"])(b)) ? (b = c, _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : _string_js__WEBPACK_IMPORTED_MODULE_6__["default"])
      : b instanceof d3_color__WEBPACK_IMPORTED_MODULE_0__["color"] ? _rgb_js__WEBPACK_IMPORTED_MODULE_1__["default"]
      : b instanceof Date ? _date_js__WEBPACK_IMPORTED_MODULE_3__["default"]
      : Object(_numberArray_js__WEBPACK_IMPORTED_MODULE_8__["isNumberArray"])(b) ? _numberArray_js__WEBPACK_IMPORTED_MODULE_8__["default"]
      : Array.isArray(b) ? _array_js__WEBPACK_IMPORTED_MODULE_2__["genericArray"]
      : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? _object_js__WEBPACK_IMPORTED_MODULE_5__["default"]
      : _number_js__WEBPACK_IMPORTED_MODULE_4__["default"])(a, b);
});


/***/ }),

/***/ "./node_modules/d3-interpolate/src/zoom.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-interpolate/src/zoom.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var rho = Math.SQRT2,
    rho2 = 2,
    rho4 = 4,
    epsilon2 = 1e-12;

function cosh(x) {
  return ((x = Math.exp(x)) + 1 / x) / 2;
}

function sinh(x) {
  return ((x = Math.exp(x)) - 1 / x) / 2;
}

function tanh(x) {
  return ((x = Math.exp(2 * x)) - 1) / (x + 1);
}

// p0 = [ux0, uy0, w0]
// p1 = [ux1, uy1, w1]
/* harmony default export */ __webpack_exports__["default"] = (function(p0, p1) {
  var ux0 = p0[0], uy0 = p0[1], w0 = p0[2],
      ux1 = p1[0], uy1 = p1[1], w1 = p1[2],
      dx = ux1 - ux0,
      dy = uy1 - uy0,
      d2 = dx * dx + dy * dy,
      i,
      S;

  // Special case for u0 ≅ u1.
  if (d2 < epsilon2) {
    S = Math.log(w1 / w0) / rho;
    i = function(t) {
      return [
        ux0 + t * dx,
        uy0 + t * dy,
        w0 * Math.exp(rho * t * S)
      ];
    }
  }

  // General case.
  else {
    var d1 = Math.sqrt(d2),
        b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
        b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
        r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
        r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
    S = (r1 - r0) / rho;
    i = function(t) {
      var s = t * S,
          coshr0 = cosh(r0),
          u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
      return [
        ux0 + u * dx,
        uy0 + u * dy,
        w0 * coshr0 / cosh(rho * s + r0)
      ];
    }
  }

  i.duration = S * 1000;

  return i;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/band.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/band.js ***!
  \*******************************************/
/*! exports provided: default, point */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return band; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "point", function() { return point; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/d3-scale/src/ordinal.js");




function band() {
  var scale = Object(_ordinal_js__WEBPACK_IMPORTED_MODULE_2__["default"])().unknown(undefined),
      domain = scale.domain,
      ordinalRange = scale.range,
      r0 = 0,
      r1 = 1,
      step,
      bandwidth,
      round = false,
      paddingInner = 0,
      paddingOuter = 0,
      align = 0.5;

  delete scale.unknown;

  function rescale() {
    var n = domain().length,
        reverse = r1 < r0,
        start = reverse ? r1 : r0,
        stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round) step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round) start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["range"])(n).map(function(i) { return start + step * i; });
    return ordinalRange(reverse ? values.reverse() : values);
  }

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };

  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };

  scale.bandwidth = function() {
    return bandwidth;
  };

  scale.step = function() {
    return step;
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };

  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };

  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };

  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };

  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };

  scale.copy = function() {
    return band(domain(), [r0, r1])
        .round(round)
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)
        .align(align);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(rescale(), arguments);
}

function pointish(scale) {
  var copy = scale.copy;

  scale.padding = scale.paddingOuter;
  delete scale.paddingInner;
  delete scale.paddingOuter;

  scale.copy = function() {
    return pointish(copy());
  };

  return scale;
}

function point() {
  return pointish(band.apply(null, arguments).paddingInner(1));
}


/***/ }),

/***/ "./node_modules/d3-scale/src/constant.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/constant.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),

/***/ "./node_modules/d3-scale/src/continuous.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/continuous.js ***!
  \*************************************************/
/*! exports provided: identity, copy, transformer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "identity", function() { return identity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformer", function() { return transformer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return continuous; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _constant_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant.js */ "./node_modules/d3-scale/src/constant.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");





var unit = [0, 1];

function identity(x) {
  return x;
}

function normalize(a, b) {
  return (b -= (a = +a))
      ? function(x) { return (x - a) / b; }
      : Object(_constant_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isNaN(b) ? NaN : 0.5);
}

function clamper(a, b) {
  var t;
  if (a > b) t = a, a = b, b = t;
  return function(x) { return Math.max(a, Math.min(b, x)); };
}

// normalize(a, b)(x) takes a domain value x in [a,b] and returns the corresponding parameter t in [0,1].
// interpolate(a, b)(t) takes a parameter t in [0,1] and returns the corresponding range value x in [a,b].
function bimap(domain, range, interpolate) {
  var d0 = domain[0], d1 = domain[1], r0 = range[0], r1 = range[1];
  if (d1 < d0) d0 = normalize(d1, d0), r0 = interpolate(r1, r0);
  else d0 = normalize(d0, d1), r0 = interpolate(r0, r1);
  return function(x) { return r0(d0(x)); };
}

function polymap(domain, range, interpolate) {
  var j = Math.min(domain.length, range.length) - 1,
      d = new Array(j),
      r = new Array(j),
      i = -1;

  // Reverse descending domains.
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range = range.slice().reverse();
  }

  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate(range[i], range[i + 1]);
  }

  return function(x) {
    var i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1, j) - 1;
    return r[i](d[i](x));
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .range(source.range())
      .interpolate(source.interpolate())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function transformer() {
  var domain = unit,
      range = unit,
      interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolate"],
      transform,
      untransform,
      unknown,
      clamp = identity,
      piecewise,
      output,
      input;

  function rescale() {
    var n = Math.min(domain.length, range.length);
    if (clamp !== identity) clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range, interpolate)))(transform(clamp(x)));
  }

  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range, domain.map(transform), d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateNumber"])))(y)));
  };

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"]), rescale()) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.rangeRound = function(_) {
    return range = Array.from(_), interpolate = d3_interpolate__WEBPACK_IMPORTED_MODULE_1__["interpolateRound"], rescale();
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity, rescale()) : clamp !== identity;
  };

  scale.interpolate = function(_) {
    return arguments.length ? (interpolate = _, rescale()) : interpolate;
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}

function continuous() {
  return transformer()(identity, identity);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/diverging.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/diverging.js ***!
  \************************************************/
/*! exports provided: default, divergingLog, divergingSymlog, divergingPow, divergingSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return diverging; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingLog", function() { return divergingLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSymlog", function() { return divergingSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingPow", function() { return divergingPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "divergingSqrt", function() { return divergingSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/d3-scale/src/sequential.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");









function transformer() {
  var x0 = 0,
      x1 = 0.5,
      x2 = 1,
      s = 1,
      t0,
      t1,
      t2,
      k10,
      k21,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      transform,
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : (x = 0.5 + ((x = +transform(x)) - t1) * (s * x < s * t1 ? k10 : k21), interpolator(clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1, x2] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), t2 = transform(x2 = +x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1, scale) : [x0, x1, x2];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1, r2;
      return arguments.length ? ([r0, r1, r2] = _, interpolator = Object(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["piecewise"])(interpolate, [r0, r1, r2]), scale) : [interpolator(0), interpolator(0.5), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), t2 = t(x2), k10 = t0 === t1 ? 0 : 0.5 / (t1 - t0), k21 = t1 === t2 ? 0 : 0.5 / (t2 - t1), s = t1 < t0 ? -1 : 1;
    return scale;
  };
}

function diverging() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, diverging());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([0.1, 1, 10]);

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_6__["symlogish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_7__["powish"])(transformer());

  scale.copy = function() {
    return Object(_sequential_js__WEBPACK_IMPORTED_MODULE_5__["copy"])(scale, divergingPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function divergingSqrt() {
  return divergingPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/identity.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/identity.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return identity; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");



function identity(domain) {
  var unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : x;
  }

  scale.invert = scale;

  scale.domain = scale.range = function(_) {
    return arguments.length ? (domain = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]), scale) : domain.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return identity(domain).unknown(unknown);
  };

  domain = arguments.length ? Array.from(domain, _number_js__WEBPACK_IMPORTED_MODULE_1__["default"]) : [0, 1];

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/index.js":
/*!********************************************!*\
  !*** ./node_modules/d3-scale/src/index.js ***!
  \********************************************/
/*! exports provided: scaleBand, scalePoint, scaleIdentity, scaleLinear, scaleLog, scaleSymlog, scaleOrdinal, scaleImplicit, scalePow, scaleSqrt, scaleRadial, scaleQuantile, scaleQuantize, scaleThreshold, scaleTime, scaleUtc, scaleSequential, scaleSequentialLog, scaleSequentialPow, scaleSequentialSqrt, scaleSequentialSymlog, scaleSequentialQuantile, scaleDiverging, scaleDivergingLog, scaleDivergingPow, scaleDivergingSqrt, scaleDivergingSymlog, tickFormat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _band_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./band.js */ "./node_modules/d3-scale/src/band.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleBand", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePoint", function() { return _band_js__WEBPACK_IMPORTED_MODULE_0__["point"]; });

/* harmony import */ var _identity_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./identity.js */ "./node_modules/d3-scale/src/identity.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleIdentity", function() { return _identity_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLinear", function() { return _linear_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleLog", function() { return _log_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSymlog", function() { return _symlog_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ordinal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ordinal.js */ "./node_modules/d3-scale/src/ordinal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleOrdinal", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleImplicit", function() { return _ordinal_js__WEBPACK_IMPORTED_MODULE_5__["implicit"]; });

/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scalePow", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSqrt", function() { return _pow_js__WEBPACK_IMPORTED_MODULE_6__["sqrt"]; });

/* harmony import */ var _radial_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radial.js */ "./node_modules/d3-scale/src/radial.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleRadial", function() { return _radial_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _quantile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./quantile.js */ "./node_modules/d3-scale/src/quantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantile", function() { return _quantile_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _quantize_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./quantize.js */ "./node_modules/d3-scale/src/quantize.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleQuantize", function() { return _quantize_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _threshold_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./threshold.js */ "./node_modules/d3-scale/src/threshold.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleThreshold", function() { return _threshold_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./time.js */ "./node_modules/d3-scale/src/time.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleTime", function() { return _time_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _utcTime_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcTime.js */ "./node_modules/d3-scale/src/utcTime.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleUtc", function() { return _utcTime_js__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _sequential_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sequential.js */ "./node_modules/d3-scale/src/sequential.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequential", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialLog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialPow", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSqrt", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialSymlog", function() { return _sequential_js__WEBPACK_IMPORTED_MODULE_13__["sequentialSymlog"]; });

/* harmony import */ var _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sequentialQuantile.js */ "./node_modules/d3-scale/src/sequentialQuantile.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleSequentialQuantile", function() { return _sequentialQuantile_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony import */ var _diverging_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./diverging.js */ "./node_modules/d3-scale/src/diverging.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDiverging", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingLog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingLog"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingPow", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingPow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSqrt", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSqrt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "scaleDivergingSymlog", function() { return _diverging_js__WEBPACK_IMPORTED_MODULE_15__["divergingSymlog"]; });

/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/d3-scale/src/tickFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "tickFormat", function() { return _tickFormat_js__WEBPACK_IMPORTED_MODULE_16__["default"]; });




































/***/ }),

/***/ "./node_modules/d3-scale/src/init.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/init.js ***!
  \*******************************************/
/*! exports provided: initRange, initInterpolator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initRange", function() { return initRange; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initInterpolator", function() { return initInterpolator; });
function initRange(domain, range) {
  switch (arguments.length) {
    case 0: break;
    case 1: this.range(domain); break;
    default: this.range(range).domain(domain); break;
  }
  return this;
}

function initInterpolator(domain, interpolator) {
  switch (arguments.length) {
    case 0: break;
    case 1: {
      if (typeof domain === "function") this.interpolator(domain);
      else this.range(domain);
      break;
    }
    default: {
      this.domain(domain);
      if (typeof interpolator === "function") this.interpolator(interpolator);
      else this.range(interpolator);
      break;
    }
  }
  return this;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/linear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/linear.js ***!
  \*********************************************/
/*! exports provided: linearish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "linearish", function() { return linearish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return linear; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _tickFormat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tickFormat.js */ "./node_modules/d3-scale/src/tickFormat.js");





function linearish(scale) {
  var domain = scale.domain;

  scale.ticks = function(count) {
    var d = domain();
    return Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(d[0], d[d.length - 1], count == null ? 10 : count);
  };

  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return Object(_tickFormat_js__WEBPACK_IMPORTED_MODULE_3__["default"])(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };

  scale.nice = function(count) {
    if (count == null) count = 10;

    var d = domain(),
        i0 = 0,
        i1 = d.length - 1,
        start = d[i0],
        stop = d[i1],
        step;

    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }

    step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);

    if (step > 0) {
      start = Math.floor(start / step) * step;
      stop = Math.ceil(stop / step) * step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    } else if (step < 0) {
      start = Math.ceil(start * step) / step;
      stop = Math.floor(stop * step) / step;
      step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickIncrement"])(start, stop, count);
    }

    if (step > 0) {
      d[i0] = Math.floor(start / step) * step;
      d[i1] = Math.ceil(stop / step) * step;
      domain(d);
    } else if (step < 0) {
      d[i0] = Math.ceil(start * step) / step;
      d[i1] = Math.floor(stop * step) / step;
      domain(d);
    }

    return scale;
  };

  return scale;
}

function linear() {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, linear());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return linearish(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/log.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/log.js ***!
  \******************************************/
/*! exports provided: loggish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loggish", function() { return loggish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return log; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nice.js */ "./node_modules/d3-scale/src/nice.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");






function transformLog(x) {
  return Math.log(x);
}

function transformExp(x) {
  return Math.exp(x);
}

function transformLogn(x) {
  return -Math.log(-x);
}

function transformExpn(x) {
  return -Math.exp(-x);
}

function pow10(x) {
  return isFinite(x) ? +("1e" + x) : x < 0 ? 0 : x;
}

function powp(base) {
  return base === 10 ? pow10
      : base === Math.E ? Math.exp
      : function(x) { return Math.pow(base, x); };
}

function logp(base) {
  return base === Math.E ? Math.log
      : base === 10 && Math.log10
      || base === 2 && Math.log2
      || (base = Math.log(base), function(x) { return Math.log(x) / base; });
}

function reflect(f) {
  return function(x) {
    return -f(-x);
  };
}

function loggish(transform) {
  var scale = transform(transformLog, transformExp),
      domain = scale.domain,
      base = 10,
      logs,
      pows;

  function rescale() {
    logs = logp(base), pows = powp(base);
    if (domain()[0] < 0) {
      logs = reflect(logs), pows = reflect(pows);
      transform(transformLogn, transformExpn);
    } else {
      transform(transformLog, transformExp);
    }
    return scale;
  }

  scale.base = function(_) {
    return arguments.length ? (base = +_, rescale()) : base;
  };

  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };

  scale.ticks = function(count) {
    var d = domain(),
        u = d[0],
        v = d[d.length - 1],
        r;

    if (r = v < u) i = u, u = v, v = i;

    var i = logs(u),
        j = logs(v),
        p,
        k,
        t,
        n = count == null ? 10 : +count,
        z = [];

    if (!(base % 1) && j - i < n) {
      i = Math.floor(i), j = Math.ceil(j);
      if (u > 0) for (; i <= j; ++i) {
        for (k = 1, p = pows(i); k < base; ++k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      } else for (; i <= j; ++i) {
        for (k = base - 1, p = pows(i); k >= 1; --k) {
          t = p * k;
          if (t < u) continue;
          if (t > v) break;
          z.push(t);
        }
      }
      if (z.length * 2 < n) z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(u, v, n);
    } else {
      z = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["ticks"])(i, j, Math.min(j - i, n)).map(pows);
    }

    return r ? z.reverse() : z;
  };

  scale.tickFormat = function(count, specifier) {
    if (specifier == null) specifier = base === 10 ? ".0e" : ",";
    if (typeof specifier !== "function") specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
    if (count === Infinity) return specifier;
    if (count == null) count = 10;
    var k = Math.max(1, base * count / scale.ticks().length); // TODO fast estimate?
    return function(d) {
      var i = d / pows(Math.round(logs(d)));
      if (i * base < base - 0.5) i *= base;
      return i <= k ? specifier(d) : "";
    };
  };

  scale.nice = function() {
    return domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_2__["default"])(domain(), {
      floor: function(x) { return pows(Math.floor(logs(x))); },
      ceil: function(x) { return pows(Math.ceil(logs(x))); }
    }));
  };

  return scale;
}

function log() {
  var scale = loggish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["transformer"])()).domain([1, 10]);

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, log()).base(scale.base());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/nice.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/nice.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(domain, interval) {
  domain = domain.slice();

  var i0 = 0,
      i1 = domain.length - 1,
      x0 = domain[i0],
      x1 = domain[i1],
      t;

  if (x1 < x0) {
    t = i0, i0 = i1, i1 = t;
    t = x0, x0 = x1, x1 = t;
  }

  domain[i0] = interval.floor(x0);
  domain[i1] = interval.ceil(x1);
  return domain;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/number.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/number.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function(x) {
  return +x;
});


/***/ }),

/***/ "./node_modules/d3-scale/src/ordinal.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/ordinal.js ***!
  \**********************************************/
/*! exports provided: implicit, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "implicit", function() { return implicit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ordinal; });
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");


const implicit = Symbol("implicit");

function ordinal() {
  var index = new Map(),
      domain = [],
      range = [],
      unknown = implicit;

  function scale(d) {
    var key = d + "", i = index.get(key);
    if (!i) {
      if (unknown !== implicit) return unknown;
      index.set(key, i = domain.push(d));
    }
    return range[(i - 1) % range.length];
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [], index = new Map();
    for (const value of _) {
      const key = value + "";
      if (index.has(key)) continue;
      index.set(key, domain.push(value));
    }
    return scale;
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), scale) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return ordinal(domain, range).unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_0__["initRange"].apply(scale, arguments);

  return scale;
}


/***/ }),

/***/ "./node_modules/d3-scale/src/pow.js":
/*!******************************************!*\
  !*** ./node_modules/d3-scale/src/pow.js ***!
  \******************************************/
/*! exports provided: powish, default, sqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "powish", function() { return powish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sqrt", function() { return sqrt; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformPow(exponent) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent) : Math.pow(x, exponent);
  };
}

function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}

function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}

function powish(transform) {
  var scale = transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]),
      exponent = 1;

  function rescale() {
    return exponent === 1 ? transform(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"], _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"])
        : exponent === 0.5 ? transform(transformSqrt, transformSquare)
        : transform(transformPow(exponent), transformPow(1 / exponent));
  }

  scale.exponent = function(_) {
    return arguments.length ? (exponent = +_, rescale()) : exponent;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function pow() {
  var scale = powish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, pow()).exponent(scale.exponent());
  };

  _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);

  return scale;
}

function sqrt() {
  return pow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantile.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantile.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");



function quantile() {
  var domain = [],
      range = [],
      thresholds = [],
      unknown;

  function rescale() {
    var i = 0, n = Math.max(1, range.length);
    thresholds = new Array(n - 1);
    while (++i < n) thresholds[i - 1] = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n);
    return scale;
  }

  function scale(x) {
    return isNaN(x = +x) ? unknown : range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(thresholds, x)];
  }

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN] : [
      i > 0 ? thresholds[i - 1] : domain[0],
      i < thresholds.length ? thresholds[i] : domain[domain.length - 1]
    ];
  };

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return rescale();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), rescale()) : range.slice();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.quantiles = function() {
    return thresholds.slice();
  };

  scale.copy = function() {
    return quantile()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/quantize.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-scale/src/quantize.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return quantize; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function quantize() {
  var x0 = 0,
      x1 = 1,
      n = 1,
      domain = [0.5],
      range = [0, 1],
      unknown;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  function rescale() {
    var i = -1;
    domain = new Array(n);
    while (++i < n) domain[i] = ((i + 1) * x1 - (i - n) * x0) / (n + 1);
    return scale;
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, x0 = +x0, x1 = +x1, rescale()) : [x0, x1];
  };

  scale.range = function(_) {
    return arguments.length ? (n = (range = Array.from(_)).length - 1, rescale()) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return i < 0 ? [NaN, NaN]
        : i < 1 ? [x0, domain[0]]
        : i >= n ? [domain[n - 1], x1]
        : [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : scale;
  };

  scale.thresholds = function() {
    return domain.slice();
  };

  scale.copy = function() {
    return quantize()
        .domain([x0, x1])
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(Object(_linear_js__WEBPACK_IMPORTED_MODULE_1__["linearish"])(scale), arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/radial.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/radial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return radial; });
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _number_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./number.js */ "./node_modules/d3-scale/src/number.js");





function square(x) {
  return Math.sign(x) * x * x;
}

function unsquare(x) {
  return Math.sign(x) * Math.sqrt(Math.abs(x));
}

function radial() {
  var squared = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      range = [0, 1],
      round = false,
      unknown;

  function scale(x) {
    var y = unsquare(squared(x));
    return isNaN(y) ? unknown : round ? Math.round(y) : y;
  }

  scale.invert = function(y) {
    return squared.invert(square(y));
  };

  scale.domain = function(_) {
    return arguments.length ? (squared.domain(_), scale) : squared.domain();
  };

  scale.range = function(_) {
    return arguments.length ? (squared.range((range = Array.from(_, _number_js__WEBPACK_IMPORTED_MODULE_3__["default"])).map(square)), scale) : range.slice();
  };

  scale.rangeRound = function(_) {
    return scale.range(_).round(true);
  };

  scale.round = function(_) {
    return arguments.length ? (round = !!_, scale) : round;
  };

  scale.clamp = function(_) {
    return arguments.length ? (squared.clamp(_), scale) : squared.clamp();
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return radial(squared.domain(), range)
        .round(round)
        .clamp(squared.clamp())
        .unknown(unknown);
  };

  _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_2__["linearish"])(scale);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequential.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/sequential.js ***!
  \*************************************************/
/*! exports provided: copy, default, sequentialLog, sequentialSymlog, sequentialPow, sequentialSqrt */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "copy", function() { return copy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequential; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialLog", function() { return sequentialLog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSymlog", function() { return sequentialSymlog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialPow", function() { return sequentialPow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sequentialSqrt", function() { return sequentialSqrt; });
/* harmony import */ var d3_interpolate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-interpolate */ "./node_modules/d3-interpolate/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./log.js */ "./node_modules/d3-scale/src/log.js");
/* harmony import */ var _symlog_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./symlog.js */ "./node_modules/d3-scale/src/symlog.js");
/* harmony import */ var _pow_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pow.js */ "./node_modules/d3-scale/src/pow.js");








function transformer() {
  var x0 = 0,
      x1 = 1,
      t0,
      t1,
      k10,
      transform,
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"],
      clamp = false,
      unknown;

  function scale(x) {
    return isNaN(x = +x) ? unknown : interpolator(k10 === 0 ? 0.5 : (x = (transform(x) - t0) * k10, clamp ? Math.max(0, Math.min(1, x)) : x));
  }

  scale.domain = function(_) {
    return arguments.length ? ([x0, x1] = _, t0 = transform(x0 = +x0), t1 = transform(x1 = +x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0), scale) : [x0, x1];
  };

  scale.clamp = function(_) {
    return arguments.length ? (clamp = !!_, scale) : clamp;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  function range(interpolate) {
    return function(_) {
      var r0, r1;
      return arguments.length ? ([r0, r1] = _, interpolator = interpolate(r0, r1), scale) : [interpolator(0), interpolator(1)];
    };
  }

  scale.range = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolate"]);

  scale.rangeRound = range(d3_interpolate__WEBPACK_IMPORTED_MODULE_0__["interpolateRound"]);

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  return function(t) {
    transform = t, t0 = t(x0), t1 = t(x1), k10 = t0 === t1 ? 0 : 1 / (t1 - t0);
    return scale;
  };
}

function copy(source, target) {
  return target
      .domain(source.domain())
      .interpolator(source.interpolator())
      .clamp(source.clamp())
      .unknown(source.unknown());
}

function sequential() {
  var scale = Object(_linear_js__WEBPACK_IMPORTED_MODULE_3__["linearish"])(transformer()(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"]));

  scale.copy = function() {
    return copy(scale, sequential());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialLog() {
  var scale = Object(_log_js__WEBPACK_IMPORTED_MODULE_4__["loggish"])(transformer()).domain([1, 10]);

  scale.copy = function() {
    return copy(scale, sequentialLog()).base(scale.base());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSymlog() {
  var scale = Object(_symlog_js__WEBPACK_IMPORTED_MODULE_5__["symlogish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialSymlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialPow() {
  var scale = Object(_pow_js__WEBPACK_IMPORTED_MODULE_6__["powish"])(transformer());

  scale.copy = function() {
    return copy(scale, sequentialPow()).exponent(scale.exponent());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}

function sequentialSqrt() {
  return sequentialPow.apply(null, arguments).exponent(0.5);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/sequentialQuantile.js":
/*!*********************************************************!*\
  !*** ./node_modules/d3-scale/src/sequentialQuantile.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sequentialQuantile; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function sequentialQuantile() {
  var domain = [],
      interpolator = _continuous_js__WEBPACK_IMPORTED_MODULE_1__["identity"];

  function scale(x) {
    if (!isNaN(x = +x)) return interpolator((Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(d3_array__WEBPACK_IMPORTED_MODULE_0__["ascending"]);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["quantile"])(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initInterpolator"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/symlog.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-scale/src/symlog.js ***!
  \*********************************************/
/*! exports provided: symlogish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "symlogish", function() { return symlogish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symlog; });
/* harmony import */ var _linear_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./linear.js */ "./node_modules/d3-scale/src/linear.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");




function transformSymlog(c) {
  return function(x) {
    return Math.sign(x) * Math.log1p(Math.abs(x / c));
  };
}

function transformSymexp(c) {
  return function(x) {
    return Math.sign(x) * Math.expm1(Math.abs(x)) * c;
  };
}

function symlogish(transform) {
  var c = 1, scale = transform(transformSymlog(c), transformSymexp(c));

  scale.constant = function(_) {
    return arguments.length ? transform(transformSymlog(c = +_), transformSymexp(c)) : c;
  };

  return Object(_linear_js__WEBPACK_IMPORTED_MODULE_0__["linearish"])(scale);
}

function symlog() {
  var scale = symlogish(Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["transformer"])());

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_1__["copy"])(scale, symlog()).constant(scale.constant());
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_2__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/threshold.js":
/*!************************************************!*\
  !*** ./node_modules/d3-scale/src/threshold.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return threshold; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");



function threshold() {
  var domain = [0.5],
      range = [0, 1],
      unknown,
      n = 1;

  function scale(x) {
    return x <= x ? range[Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisect"])(domain, x, 0, n)] : unknown;
  }

  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : domain.slice();
  };

  scale.range = function(_) {
    return arguments.length ? (range = Array.from(_), n = Math.min(domain.length, range.length - 1), scale) : range.slice();
  };

  scale.invertExtent = function(y) {
    var i = range.indexOf(y);
    return [domain[i - 1], domain[i]];
  };

  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };

  scale.copy = function() {
    return threshold()
        .domain(domain)
        .range(range)
        .unknown(unknown);
  };

  return _init_js__WEBPACK_IMPORTED_MODULE_1__["initRange"].apply(scale, arguments);
}


/***/ }),

/***/ "./node_modules/d3-scale/src/tickFormat.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-scale/src/tickFormat.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-format */ "./node_modules/d3-format/src/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function(start, stop, count, specifier) {
  var step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, count),
      precision;
  specifier = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatSpecifier"])(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionPrefix"])(step, value))) specifier.precision = precision;
      return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["formatPrefix"])(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionRound"])(step, Math.max(Math.abs(start), Math.abs(stop))))) specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["precisionFixed"])(step))) specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return Object(d3_format__WEBPACK_IMPORTED_MODULE_1__["format"])(specifier);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/time.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-scale/src/time.js ***!
  \*******************************************/
/*! exports provided: calendar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony import */ var d3_array__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-array */ "./node_modules/d3-array/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var _continuous_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./continuous.js */ "./node_modules/d3-scale/src/continuous.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");
/* harmony import */ var _nice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nice.js */ "./node_modules/d3-scale/src/nice.js");







var durationSecond = 1000,
    durationMinute = durationSecond * 60,
    durationHour = durationMinute * 60,
    durationDay = durationHour * 24,
    durationWeek = durationDay * 7,
    durationMonth = durationDay * 30,
    durationYear = durationDay * 365;

function date(t) {
  return new Date(t);
}

function number(t) {
  return t instanceof Date ? +t : +new Date(+t);
}

function calendar(year, month, week, day, hour, minute, second, millisecond, format) {
  var scale = Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      invert = scale.invert,
      domain = scale.domain;

  var formatMillisecond = format(".%L"),
      formatSecond = format(":%S"),
      formatMinute = format("%I:%M"),
      formatHour = format("%I %p"),
      formatDay = format("%a %d"),
      formatWeek = format("%b %d"),
      formatMonth = format("%B"),
      formatYear = format("%Y");

  var tickIntervals = [
    [second,  1,      durationSecond],
    [second,  5,  5 * durationSecond],
    [second, 15, 15 * durationSecond],
    [second, 30, 30 * durationSecond],
    [minute,  1,      durationMinute],
    [minute,  5,  5 * durationMinute],
    [minute, 15, 15 * durationMinute],
    [minute, 30, 30 * durationMinute],
    [  hour,  1,      durationHour  ],
    [  hour,  3,  3 * durationHour  ],
    [  hour,  6,  6 * durationHour  ],
    [  hour, 12, 12 * durationHour  ],
    [   day,  1,      durationDay   ],
    [   day,  2,  2 * durationDay   ],
    [  week,  1,      durationWeek  ],
    [ month,  1,      durationMonth ],
    [ month,  3,  3 * durationMonth ],
    [  year,  1,      durationYear  ]
  ];

  function tickFormat(date) {
    return (second(date) < date ? formatMillisecond
        : minute(date) < date ? formatSecond
        : hour(date) < date ? formatMinute
        : day(date) < date ? formatHour
        : month(date) < date ? (week(date) < date ? formatDay : formatWeek)
        : year(date) < date ? formatMonth
        : formatYear)(date);
  }

  function tickInterval(interval, start, stop) {
    if (interval == null) interval = 10;

    // If a desired tick count is specified, pick a reasonable tick interval
    // based on the extent of the domain and a rough estimate of tick size.
    // Otherwise, assume interval is already a time interval and use it.
    if (typeof interval === "number") {
      var target = Math.abs(stop - start) / interval,
          i = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["bisector"])(function(i) { return i[2]; }).right(tickIntervals, target),
          step;
      if (i === tickIntervals.length) {
        step = Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start / durationYear, stop / durationYear, interval);
        interval = year;
      } else if (i) {
        i = tickIntervals[target / tickIntervals[i - 1][2] < tickIntervals[i][2] / target ? i - 1 : i];
        step = i[1];
        interval = i[0];
      } else {
        step = Math.max(Object(d3_array__WEBPACK_IMPORTED_MODULE_0__["tickStep"])(start, stop, interval), 1);
        interval = millisecond;
      }
      return interval.every(step);
    }

    return interval;
  }

  scale.invert = function(y) {
    return new Date(invert(y));
  };

  scale.domain = function(_) {
    return arguments.length ? domain(Array.from(_, number)) : domain().map(date);
  };

  scale.ticks = function(interval) {
    var d = domain(),
        t0 = d[0],
        t1 = d[d.length - 1],
        r = t1 < t0,
        t;
    if (r) t = t0, t0 = t1, t1 = t;
    t = tickInterval(interval, t0, t1);
    t = t ? t.range(t0, t1 + 1) : []; // inclusive stop
    return r ? t.reverse() : t;
  };

  scale.tickFormat = function(count, specifier) {
    return specifier == null ? tickFormat : format(specifier);
  };

  scale.nice = function(interval) {
    var d = domain();
    return (interval = tickInterval(interval, d[0], d[d.length - 1]))
        ? domain(Object(_nice_js__WEBPACK_IMPORTED_MODULE_5__["default"])(d, interval))
        : scale;
  };

  scale.copy = function() {
    return Object(_continuous_js__WEBPACK_IMPORTED_MODULE_3__["copy"])(scale, calendar(year, month, week, day, hour, minute, second, millisecond, format));
  };

  return scale;
}

/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init_js__WEBPACK_IMPORTED_MODULE_4__["initRange"].apply(calendar(d3_time__WEBPACK_IMPORTED_MODULE_1__["timeYear"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMonth"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeWeek"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeDay"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeHour"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMinute"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeSecond"], d3_time__WEBPACK_IMPORTED_MODULE_1__["timeMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_2__["timeFormat"]).domain([new Date(2000, 0, 1), new Date(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/d3-scale/src/utcTime.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-scale/src/utcTime.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _time_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time.js */ "./node_modules/d3-scale/src/time.js");
/* harmony import */ var d3_time_format__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! d3-time-format */ "./node_modules/d3-time-format/src/index.js");
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./init.js */ "./node_modules/d3-scale/src/init.js");





/* harmony default export */ __webpack_exports__["default"] = (function() {
  return _init_js__WEBPACK_IMPORTED_MODULE_3__["initRange"].apply(Object(_time_js__WEBPACK_IMPORTED_MODULE_0__["calendar"])(d3_time__WEBPACK_IMPORTED_MODULE_2__["utcYear"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMonth"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcWeek"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcDay"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcHour"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMinute"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcSecond"], d3_time__WEBPACK_IMPORTED_MODULE_2__["utcMillisecond"], d3_time_format__WEBPACK_IMPORTED_MODULE_1__["utcFormat"]).domain([Date.UTC(2000, 0, 1), Date.UTC(2000, 0, 2)]), arguments);
});


/***/ }),

/***/ "./node_modules/d3-time-format/src/defaultLocale.js":
/*!**********************************************************!*\
  !*** ./node_modules/d3-time-format/src/defaultLocale.js ***!
  \**********************************************************/
/*! exports provided: timeFormat, timeParse, utcFormat, utcParse, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return timeFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return timeParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return utcFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return utcParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return defaultLocale; });
/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-time-format/src/locale.js");


var locale;
var timeFormat;
var timeParse;
var utcFormat;
var utcParse;

defaultLocale({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
  shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
});

function defaultLocale(definition) {
  locale = Object(_locale_js__WEBPACK_IMPORTED_MODULE_0__["default"])(definition);
  timeFormat = locale.format;
  timeParse = locale.parse;
  utcFormat = locale.utcFormat;
  utcParse = locale.utcParse;
  return locale;
}


/***/ }),

/***/ "./node_modules/d3-time-format/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/d3-time-format/src/index.js ***!
  \**************************************************/
/*! exports provided: timeFormatDefaultLocale, timeFormat, timeParse, utcFormat, utcParse, timeFormatLocale, isoFormat, isoParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatDefaultLocale", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["timeParse"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFormat", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcParse", function() { return _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcParse"]; });

/* harmony import */ var _locale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./locale.js */ "./node_modules/d3-time-format/src/locale.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFormatLocale", function() { return _locale_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoFormat", function() { return _isoFormat_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _isoParse_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./isoParse.js */ "./node_modules/d3-time-format/src/isoParse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isoParse", function() { return _isoParse_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),

/***/ "./node_modules/d3-time-format/src/isoFormat.js":
/*!******************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoFormat.js ***!
  \******************************************************/
/*! exports provided: isoSpecifier, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isoSpecifier", function() { return isoSpecifier; });
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");


var isoSpecifier = "%Y-%m-%dT%H:%M:%S.%LZ";

function formatIsoNative(date) {
  return date.toISOString();
}

var formatIso = Date.prototype.toISOString
    ? formatIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_0__["utcFormat"])(isoSpecifier);

/* harmony default export */ __webpack_exports__["default"] = (formatIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/isoParse.js":
/*!*****************************************************!*\
  !*** ./node_modules/d3-time-format/src/isoParse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _isoFormat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isoFormat.js */ "./node_modules/d3-time-format/src/isoFormat.js");
/* harmony import */ var _defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./defaultLocale.js */ "./node_modules/d3-time-format/src/defaultLocale.js");



function parseIsoNative(string) {
  var date = new Date(string);
  return isNaN(date) ? null : date;
}

var parseIso = +new Date("2000-01-01T00:00:00.000Z")
    ? parseIsoNative
    : Object(_defaultLocale_js__WEBPACK_IMPORTED_MODULE_1__["utcParse"])(_isoFormat_js__WEBPACK_IMPORTED_MODULE_0__["isoSpecifier"]);

/* harmony default export */ __webpack_exports__["default"] = (parseIso);


/***/ }),

/***/ "./node_modules/d3-time-format/src/locale.js":
/*!***************************************************!*\
  !*** ./node_modules/d3-time-format/src/locale.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLocale; });
/* harmony import */ var d3_time__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! d3-time */ "./node_modules/d3-time/src/index.js");


function localDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(-1, d.m, d.d, d.H, d.M, d.S, d.L);
    date.setFullYear(d.y);
    return date;
  }
  return new Date(d.y, d.m, d.d, d.H, d.M, d.S, d.L);
}

function utcDate(d) {
  if (0 <= d.y && d.y < 100) {
    var date = new Date(Date.UTC(-1, d.m, d.d, d.H, d.M, d.S, d.L));
    date.setUTCFullYear(d.y);
    return date;
  }
  return new Date(Date.UTC(d.y, d.m, d.d, d.H, d.M, d.S, d.L));
}

function newDate(y, m, d) {
  return {y: y, m: m, d: d, H: 0, M: 0, S: 0, L: 0};
}

function formatLocale(locale) {
  var locale_dateTime = locale.dateTime,
      locale_date = locale.date,
      locale_time = locale.time,
      locale_periods = locale.periods,
      locale_weekdays = locale.days,
      locale_shortWeekdays = locale.shortDays,
      locale_months = locale.months,
      locale_shortMonths = locale.shortMonths;

  var periodRe = formatRe(locale_periods),
      periodLookup = formatLookup(locale_periods),
      weekdayRe = formatRe(locale_weekdays),
      weekdayLookup = formatLookup(locale_weekdays),
      shortWeekdayRe = formatRe(locale_shortWeekdays),
      shortWeekdayLookup = formatLookup(locale_shortWeekdays),
      monthRe = formatRe(locale_months),
      monthLookup = formatLookup(locale_months),
      shortMonthRe = formatRe(locale_shortMonths),
      shortMonthLookup = formatLookup(locale_shortMonths);

  var formats = {
    "a": formatShortWeekday,
    "A": formatWeekday,
    "b": formatShortMonth,
    "B": formatMonth,
    "c": null,
    "d": formatDayOfMonth,
    "e": formatDayOfMonth,
    "f": formatMicroseconds,
    "H": formatHour24,
    "I": formatHour12,
    "j": formatDayOfYear,
    "L": formatMilliseconds,
    "m": formatMonthNumber,
    "M": formatMinutes,
    "p": formatPeriod,
    "q": formatQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatSeconds,
    "u": formatWeekdayNumberMonday,
    "U": formatWeekNumberSunday,
    "V": formatWeekNumberISO,
    "w": formatWeekdayNumberSunday,
    "W": formatWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatYear,
    "Y": formatFullYear,
    "Z": formatZone,
    "%": formatLiteralPercent
  };

  var utcFormats = {
    "a": formatUTCShortWeekday,
    "A": formatUTCWeekday,
    "b": formatUTCShortMonth,
    "B": formatUTCMonth,
    "c": null,
    "d": formatUTCDayOfMonth,
    "e": formatUTCDayOfMonth,
    "f": formatUTCMicroseconds,
    "H": formatUTCHour24,
    "I": formatUTCHour12,
    "j": formatUTCDayOfYear,
    "L": formatUTCMilliseconds,
    "m": formatUTCMonthNumber,
    "M": formatUTCMinutes,
    "p": formatUTCPeriod,
    "q": formatUTCQuarter,
    "Q": formatUnixTimestamp,
    "s": formatUnixTimestampSeconds,
    "S": formatUTCSeconds,
    "u": formatUTCWeekdayNumberMonday,
    "U": formatUTCWeekNumberSunday,
    "V": formatUTCWeekNumberISO,
    "w": formatUTCWeekdayNumberSunday,
    "W": formatUTCWeekNumberMonday,
    "x": null,
    "X": null,
    "y": formatUTCYear,
    "Y": formatUTCFullYear,
    "Z": formatUTCZone,
    "%": formatLiteralPercent
  };

  var parses = {
    "a": parseShortWeekday,
    "A": parseWeekday,
    "b": parseShortMonth,
    "B": parseMonth,
    "c": parseLocaleDateTime,
    "d": parseDayOfMonth,
    "e": parseDayOfMonth,
    "f": parseMicroseconds,
    "H": parseHour24,
    "I": parseHour24,
    "j": parseDayOfYear,
    "L": parseMilliseconds,
    "m": parseMonthNumber,
    "M": parseMinutes,
    "p": parsePeriod,
    "q": parseQuarter,
    "Q": parseUnixTimestamp,
    "s": parseUnixTimestampSeconds,
    "S": parseSeconds,
    "u": parseWeekdayNumberMonday,
    "U": parseWeekNumberSunday,
    "V": parseWeekNumberISO,
    "w": parseWeekdayNumberSunday,
    "W": parseWeekNumberMonday,
    "x": parseLocaleDate,
    "X": parseLocaleTime,
    "y": parseYear,
    "Y": parseFullYear,
    "Z": parseZone,
    "%": parseLiteralPercent
  };

  // These recursive directive definitions must be deferred.
  formats.x = newFormat(locale_date, formats);
  formats.X = newFormat(locale_time, formats);
  formats.c = newFormat(locale_dateTime, formats);
  utcFormats.x = newFormat(locale_date, utcFormats);
  utcFormats.X = newFormat(locale_time, utcFormats);
  utcFormats.c = newFormat(locale_dateTime, utcFormats);

  function newFormat(specifier, formats) {
    return function(date) {
      var string = [],
          i = -1,
          j = 0,
          n = specifier.length,
          c,
          pad,
          format;

      if (!(date instanceof Date)) date = new Date(+date);

      while (++i < n) {
        if (specifier.charCodeAt(i) === 37) {
          string.push(specifier.slice(j, i));
          if ((pad = pads[c = specifier.charAt(++i)]) != null) c = specifier.charAt(++i);
          else pad = c === "e" ? " " : "0";
          if (format = formats[c]) c = format(date, pad);
          string.push(c);
          j = i + 1;
        }
      }

      string.push(specifier.slice(j, i));
      return string.join("");
    };
  }

  function newParse(specifier, Z) {
    return function(string) {
      var d = newDate(1900, undefined, 1),
          i = parseSpecifier(d, specifier, string += "", 0),
          week, day;
      if (i != string.length) return null;

      // If a UNIX timestamp is specified, return it.
      if ("Q" in d) return new Date(d.Q);
      if ("s" in d) return new Date(d.s * 1000 + ("L" in d ? d.L : 0));

      // If this is utcParse, never use the local timezone.
      if (Z && !("Z" in d)) d.Z = 0;

      // The am-pm flag is 0 for AM, and 1 for PM.
      if ("p" in d) d.H = d.H % 12 + d.p * 12;

      // If the month was not specified, inherit from the quarter.
      if (d.m === undefined) d.m = "q" in d ? d.q : 0;

      // Convert day-of-week and week-of-year to day-of-year.
      if ("V" in d) {
        if (d.V < 1 || d.V > 53) return null;
        if (!("w" in d)) d.w = 1;
        if ("Z" in d) {
          week = utcDate(newDate(d.y, 0, 1)), day = week.getUTCDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getUTCFullYear();
          d.m = week.getUTCMonth();
          d.d = week.getUTCDate() + (d.w + 6) % 7;
        } else {
          week = localDate(newDate(d.y, 0, 1)), day = week.getDay();
          week = day > 4 || day === 0 ? d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].ceil(week) : Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"])(week);
          week = d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].offset(week, (d.V - 1) * 7);
          d.y = week.getFullYear();
          d.m = week.getMonth();
          d.d = week.getDate() + (d.w + 6) % 7;
        }
      } else if ("W" in d || "U" in d) {
        if (!("w" in d)) d.w = "u" in d ? d.u % 7 : "W" in d ? 1 : 0;
        day = "Z" in d ? utcDate(newDate(d.y, 0, 1)).getUTCDay() : localDate(newDate(d.y, 0, 1)).getDay();
        d.m = 0;
        d.d = "W" in d ? (d.w + 6) % 7 + d.W * 7 - (day + 5) % 7 : d.w + d.U * 7 - (day + 6) % 7;
      }

      // If a time zone is specified, all fields are interpreted as UTC and then
      // offset according to the specified time zone.
      if ("Z" in d) {
        d.H += d.Z / 100 | 0;
        d.M += d.Z % 100;
        return utcDate(d);
      }

      // Otherwise, all fields are in local time.
      return localDate(d);
    };
  }

  function parseSpecifier(d, specifier, string, j) {
    var i = 0,
        n = specifier.length,
        m = string.length,
        c,
        parse;

    while (i < n) {
      if (j >= m) return -1;
      c = specifier.charCodeAt(i++);
      if (c === 37) {
        c = specifier.charAt(i++);
        parse = parses[c in pads ? specifier.charAt(i++) : c];
        if (!parse || ((j = parse(d, string, j)) < 0)) return -1;
      } else if (c != string.charCodeAt(j++)) {
        return -1;
      }
    }

    return j;
  }

  function parsePeriod(d, string, i) {
    var n = periodRe.exec(string.slice(i));
    return n ? (d.p = periodLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortWeekday(d, string, i) {
    var n = shortWeekdayRe.exec(string.slice(i));
    return n ? (d.w = shortWeekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseWeekday(d, string, i) {
    var n = weekdayRe.exec(string.slice(i));
    return n ? (d.w = weekdayLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseShortMonth(d, string, i) {
    var n = shortMonthRe.exec(string.slice(i));
    return n ? (d.m = shortMonthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseMonth(d, string, i) {
    var n = monthRe.exec(string.slice(i));
    return n ? (d.m = monthLookup[n[0].toLowerCase()], i + n[0].length) : -1;
  }

  function parseLocaleDateTime(d, string, i) {
    return parseSpecifier(d, locale_dateTime, string, i);
  }

  function parseLocaleDate(d, string, i) {
    return parseSpecifier(d, locale_date, string, i);
  }

  function parseLocaleTime(d, string, i) {
    return parseSpecifier(d, locale_time, string, i);
  }

  function formatShortWeekday(d) {
    return locale_shortWeekdays[d.getDay()];
  }

  function formatWeekday(d) {
    return locale_weekdays[d.getDay()];
  }

  function formatShortMonth(d) {
    return locale_shortMonths[d.getMonth()];
  }

  function formatMonth(d) {
    return locale_months[d.getMonth()];
  }

  function formatPeriod(d) {
    return locale_periods[+(d.getHours() >= 12)];
  }

  function formatQuarter(d) {
    return 1 + ~~(d.getMonth() / 3);
  }

  function formatUTCShortWeekday(d) {
    return locale_shortWeekdays[d.getUTCDay()];
  }

  function formatUTCWeekday(d) {
    return locale_weekdays[d.getUTCDay()];
  }

  function formatUTCShortMonth(d) {
    return locale_shortMonths[d.getUTCMonth()];
  }

  function formatUTCMonth(d) {
    return locale_months[d.getUTCMonth()];
  }

  function formatUTCPeriod(d) {
    return locale_periods[+(d.getUTCHours() >= 12)];
  }

  function formatUTCQuarter(d) {
    return 1 + ~~(d.getUTCMonth() / 3);
  }

  return {
    format: function(specifier) {
      var f = newFormat(specifier += "", formats);
      f.toString = function() { return specifier; };
      return f;
    },
    parse: function(specifier) {
      var p = newParse(specifier += "", false);
      p.toString = function() { return specifier; };
      return p;
    },
    utcFormat: function(specifier) {
      var f = newFormat(specifier += "", utcFormats);
      f.toString = function() { return specifier; };
      return f;
    },
    utcParse: function(specifier) {
      var p = newParse(specifier += "", true);
      p.toString = function() { return specifier; };
      return p;
    }
  };
}

var pads = {"-": "", "_": " ", "0": "0"},
    numberRe = /^\s*\d+/, // note: ignores next directive
    percentRe = /^%/,
    requoteRe = /[\\^$*+?|[\]().{}]/g;

function pad(value, fill, width) {
  var sign = value < 0 ? "-" : "",
      string = (sign ? -value : value) + "",
      length = string.length;
  return sign + (length < width ? new Array(width - length + 1).join(fill) + string : string);
}

function requote(s) {
  return s.replace(requoteRe, "\\$&");
}

function formatRe(names) {
  return new RegExp("^(?:" + names.map(requote).join("|") + ")", "i");
}

function formatLookup(names) {
  var map = {}, i = -1, n = names.length;
  while (++i < n) map[names[i].toLowerCase()] = i;
  return map;
}

function parseWeekdayNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.w = +n[0], i + n[0].length) : -1;
}

function parseWeekdayNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.u = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberSunday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.U = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberISO(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.V = +n[0], i + n[0].length) : -1;
}

function parseWeekNumberMonday(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.W = +n[0], i + n[0].length) : -1;
}

function parseFullYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 4));
  return n ? (d.y = +n[0], i + n[0].length) : -1;
}

function parseYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.y = +n[0] + (+n[0] > 68 ? 1900 : 2000), i + n[0].length) : -1;
}

function parseZone(d, string, i) {
  var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(string.slice(i, i + 6));
  return n ? (d.Z = n[1] ? 0 : -(n[2] + (n[3] || "00")), i + n[0].length) : -1;
}

function parseQuarter(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 1));
  return n ? (d.q = n[0] * 3 - 3, i + n[0].length) : -1;
}

function parseMonthNumber(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.m = n[0] - 1, i + n[0].length) : -1;
}

function parseDayOfMonth(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.d = +n[0], i + n[0].length) : -1;
}

function parseDayOfYear(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.m = 0, d.d = +n[0], i + n[0].length) : -1;
}

function parseHour24(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.H = +n[0], i + n[0].length) : -1;
}

function parseMinutes(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.M = +n[0], i + n[0].length) : -1;
}

function parseSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 2));
  return n ? (d.S = +n[0], i + n[0].length) : -1;
}

function parseMilliseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 3));
  return n ? (d.L = +n[0], i + n[0].length) : -1;
}

function parseMicroseconds(d, string, i) {
  var n = numberRe.exec(string.slice(i, i + 6));
  return n ? (d.L = Math.floor(n[0] / 1000), i + n[0].length) : -1;
}

function parseLiteralPercent(d, string, i) {
  var n = percentRe.exec(string.slice(i, i + 1));
  return n ? i + n[0].length : -1;
}

function parseUnixTimestamp(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.Q = +n[0], i + n[0].length) : -1;
}

function parseUnixTimestampSeconds(d, string, i) {
  var n = numberRe.exec(string.slice(i));
  return n ? (d.s = +n[0], i + n[0].length) : -1;
}

function formatDayOfMonth(d, p) {
  return pad(d.getDate(), p, 2);
}

function formatHour24(d, p) {
  return pad(d.getHours(), p, 2);
}

function formatHour12(d, p) {
  return pad(d.getHours() % 12 || 12, p, 2);
}

function formatDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["timeDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d), p, 3);
}

function formatMilliseconds(d, p) {
  return pad(d.getMilliseconds(), p, 3);
}

function formatMicroseconds(d, p) {
  return formatMilliseconds(d, p) + "000";
}

function formatMonthNumber(d, p) {
  return pad(d.getMonth() + 1, p, 2);
}

function formatMinutes(d, p) {
  return pad(d.getMinutes(), p, 2);
}

function formatSeconds(d, p) {
  return pad(d.getSeconds(), p, 2);
}

function formatWeekdayNumberMonday(d) {
  var day = d.getDay();
  return day === 0 ? 7 : day;
}

function formatWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function formatWeekNumberISO(d, p) {
  var day = d.getDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d).getDay() === 4), p, 2);
}

function formatWeekdayNumberSunday(d) {
  return d.getDay();
}

function formatWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["timeYear"])(d) - 1, d), p, 2);
}

function formatYear(d, p) {
  return pad(d.getFullYear() % 100, p, 2);
}

function formatFullYear(d, p) {
  return pad(d.getFullYear() % 10000, p, 4);
}

function formatZone(d) {
  var z = d.getTimezoneOffset();
  return (z > 0 ? "-" : (z *= -1, "+"))
      + pad(z / 60 | 0, "0", 2)
      + pad(z % 60, "0", 2);
}

function formatUTCDayOfMonth(d, p) {
  return pad(d.getUTCDate(), p, 2);
}

function formatUTCHour24(d, p) {
  return pad(d.getUTCHours(), p, 2);
}

function formatUTCHour12(d, p) {
  return pad(d.getUTCHours() % 12 || 12, p, 2);
}

function formatUTCDayOfYear(d, p) {
  return pad(1 + d3_time__WEBPACK_IMPORTED_MODULE_0__["utcDay"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d), p, 3);
}

function formatUTCMilliseconds(d, p) {
  return pad(d.getUTCMilliseconds(), p, 3);
}

function formatUTCMicroseconds(d, p) {
  return formatUTCMilliseconds(d, p) + "000";
}

function formatUTCMonthNumber(d, p) {
  return pad(d.getUTCMonth() + 1, p, 2);
}

function formatUTCMinutes(d, p) {
  return pad(d.getUTCMinutes(), p, 2);
}

function formatUTCSeconds(d, p) {
  return pad(d.getUTCSeconds(), p, 2);
}

function formatUTCWeekdayNumberMonday(d) {
  var dow = d.getUTCDay();
  return dow === 0 ? 7 : dow;
}

function formatUTCWeekNumberSunday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcSunday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function formatUTCWeekNumberISO(d, p) {
  var day = d.getUTCDay();
  d = (day >= 4 || day === 0) ? Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"])(d) : d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].ceil(d);
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcThursday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d), d) + (Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d).getUTCDay() === 4), p, 2);
}

function formatUTCWeekdayNumberSunday(d) {
  return d.getUTCDay();
}

function formatUTCWeekNumberMonday(d, p) {
  return pad(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcMonday"].count(Object(d3_time__WEBPACK_IMPORTED_MODULE_0__["utcYear"])(d) - 1, d), p, 2);
}

function formatUTCYear(d, p) {
  return pad(d.getUTCFullYear() % 100, p, 2);
}

function formatUTCFullYear(d, p) {
  return pad(d.getUTCFullYear() % 10000, p, 4);
}

function formatUTCZone() {
  return "+0000";
}

function formatLiteralPercent() {
  return "%";
}

function formatUnixTimestamp(d) {
  return +d;
}

function formatUnixTimestampSeconds(d) {
  return Math.floor(+d / 1000);
}


/***/ }),

/***/ "./node_modules/d3-time/src/day.js":
/*!*****************************************!*\
  !*** ./node_modules/d3-time/src/day.js ***!
  \*****************************************/
/*! exports provided: default, days */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "days", function() { return days; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var day = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setDate(date.getDate() + step);
}, function(start, end) {
  return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (day);
var days = day.range;


/***/ }),

/***/ "./node_modules/d3-time/src/duration.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/duration.js ***!
  \**********************************************/
/*! exports provided: durationSecond, durationMinute, durationHour, durationDay, durationWeek */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationSecond", function() { return durationSecond; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationMinute", function() { return durationMinute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationHour", function() { return durationHour; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationDay", function() { return durationDay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationWeek", function() { return durationWeek; });
var durationSecond = 1e3;
var durationMinute = 6e4;
var durationHour = 36e5;
var durationDay = 864e5;
var durationWeek = 6048e5;


/***/ }),

/***/ "./node_modules/d3-time/src/hour.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/hour.js ***!
  \******************************************/
/*! exports provided: default, hours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hours", function() { return hours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var hour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"] - date.getMinutes() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getHours();
});

/* harmony default export */ __webpack_exports__["default"] = (hour);
var hours = hour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/index.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/index.js ***!
  \*******************************************/
/*! exports provided: timeInterval, timeMillisecond, timeMilliseconds, utcMillisecond, utcMilliseconds, timeSecond, timeSeconds, utcSecond, utcSeconds, timeMinute, timeMinutes, timeHour, timeHours, timeDay, timeDays, timeWeek, timeWeeks, timeSunday, timeSundays, timeMonday, timeMondays, timeTuesday, timeTuesdays, timeWednesday, timeWednesdays, timeThursday, timeThursdays, timeFriday, timeFridays, timeSaturday, timeSaturdays, timeMonth, timeMonths, timeYear, timeYears, utcMinute, utcMinutes, utcHour, utcHours, utcDay, utcDays, utcWeek, utcWeeks, utcSunday, utcSundays, utcMonday, utcMondays, utcTuesday, utcTuesdays, utcWednesday, utcWednesdays, utcThursday, utcThursdays, utcFriday, utcFridays, utcSaturday, utcSaturdays, utcMonth, utcMonths, utcYear, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeInterval", function() { return _interval_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _millisecond_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./millisecond.js */ "./node_modules/d3-time/src/millisecond.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMillisecond", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMilliseconds", function() { return _millisecond_js__WEBPACK_IMPORTED_MODULE_1__["milliseconds"]; });

/* harmony import */ var _second_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./second.js */ "./node_modules/d3-time/src/second.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSecond", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSeconds", function() { return _second_js__WEBPACK_IMPORTED_MODULE_2__["seconds"]; });

/* harmony import */ var _minute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./minute.js */ "./node_modules/d3-time/src/minute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinute", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMinutes", function() { return _minute_js__WEBPACK_IMPORTED_MODULE_3__["minutes"]; });

/* harmony import */ var _hour_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hour.js */ "./node_modules/d3-time/src/hour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHour", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeHours", function() { return _hour_js__WEBPACK_IMPORTED_MODULE_4__["hours"]; });

/* harmony import */ var _day_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./day.js */ "./node_modules/d3-time/src/day.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDay", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeDays", function() { return _day_js__WEBPACK_IMPORTED_MODULE_5__["days"]; });

/* harmony import */ var _week_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./week.js */ "./node_modules/d3-time/src/week.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeek", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWeeks", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSunday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSundays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["sundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["monday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMondays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["mondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeTuesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["tuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeWednesdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["wednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeThursdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["thursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFriday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["friday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeFridays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["fridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturday", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeSaturdays", function() { return _week_js__WEBPACK_IMPORTED_MODULE_6__["saturdays"]; });

/* harmony import */ var _month_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./month.js */ "./node_modules/d3-time/src/month.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonth", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeMonths", function() { return _month_js__WEBPACK_IMPORTED_MODULE_7__["months"]; });

/* harmony import */ var _year_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./year.js */ "./node_modules/d3-time/src/year.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYear", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "timeYears", function() { return _year_js__WEBPACK_IMPORTED_MODULE_8__["years"]; });

/* harmony import */ var _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utcMinute.js */ "./node_modules/d3-time/src/utcMinute.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinute", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return _utcMinute_js__WEBPACK_IMPORTED_MODULE_9__["utcMinutes"]; });

/* harmony import */ var _utcHour_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./utcHour.js */ "./node_modules/d3-time/src/utcHour.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHour", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return _utcHour_js__WEBPACK_IMPORTED_MODULE_10__["utcHours"]; });

/* harmony import */ var _utcDay_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./utcDay.js */ "./node_modules/d3-time/src/utcDay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDay", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return _utcDay_js__WEBPACK_IMPORTED_MODULE_11__["utcDays"]; });

/* harmony import */ var _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./utcWeek.js */ "./node_modules/d3-time/src/utcWeek.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeek", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWeeks", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSunday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSundays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMonday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcMondays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcTuesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcWednesdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcThursdays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFriday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcFridays"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturday"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return _utcWeek_js__WEBPACK_IMPORTED_MODULE_12__["utcSaturdays"]; });

/* harmony import */ var _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utcMonth.js */ "./node_modules/d3-time/src/utcMonth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonth", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return _utcMonth_js__WEBPACK_IMPORTED_MODULE_13__["utcMonths"]; });

/* harmony import */ var _utcYear_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./utcYear.js */ "./node_modules/d3-time/src/utcYear.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYear", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return _utcYear_js__WEBPACK_IMPORTED_MODULE_14__["utcYears"]; });
































/***/ }),

/***/ "./node_modules/d3-time/src/interval.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/interval.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return newInterval; });
var t0 = new Date,
    t1 = new Date;

function newInterval(floori, offseti, count, field) {

  function interval(date) {
    return floori(date = arguments.length === 0 ? new Date : new Date(+date)), date;
  }

  interval.floor = function(date) {
    return floori(date = new Date(+date)), date;
  };

  interval.ceil = function(date) {
    return floori(date = new Date(date - 1)), offseti(date, 1), floori(date), date;
  };

  interval.round = function(date) {
    var d0 = interval(date),
        d1 = interval.ceil(date);
    return date - d0 < d1 - date ? d0 : d1;
  };

  interval.offset = function(date, step) {
    return offseti(date = new Date(+date), step == null ? 1 : Math.floor(step)), date;
  };

  interval.range = function(start, stop, step) {
    var range = [], previous;
    start = interval.ceil(start);
    step = step == null ? 1 : Math.floor(step);
    if (!(start < stop) || !(step > 0)) return range; // also handles Invalid Date
    do range.push(previous = new Date(+start)), offseti(start, step), floori(start);
    while (previous < start && start < stop);
    return range;
  };

  interval.filter = function(test) {
    return newInterval(function(date) {
      if (date >= date) while (floori(date), !test(date)) date.setTime(date - 1);
    }, function(date, step) {
      if (date >= date) {
        if (step < 0) while (++step <= 0) {
          while (offseti(date, -1), !test(date)) {} // eslint-disable-line no-empty
        } else while (--step >= 0) {
          while (offseti(date, +1), !test(date)) {} // eslint-disable-line no-empty
        }
      }
    });
  };

  if (count) {
    interval.count = function(start, end) {
      t0.setTime(+start), t1.setTime(+end);
      floori(t0), floori(t1);
      return Math.floor(count(t0, t1));
    };

    interval.every = function(step) {
      step = Math.floor(step);
      return !isFinite(step) || !(step > 0) ? null
          : !(step > 1) ? interval
          : interval.filter(field
              ? function(d) { return field(d) % step === 0; }
              : function(d) { return interval.count(0, d) % step === 0; });
    };
  }

  return interval;
}


/***/ }),

/***/ "./node_modules/d3-time/src/millisecond.js":
/*!*************************************************!*\
  !*** ./node_modules/d3-time/src/millisecond.js ***!
  \*************************************************/
/*! exports provided: default, milliseconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "milliseconds", function() { return milliseconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var millisecond = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function() {
  // noop
}, function(date, step) {
  date.setTime(+date + step);
}, function(start, end) {
  return end - start;
});

// An optimized implementation for this simple case.
millisecond.every = function(k) {
  k = Math.floor(k);
  if (!isFinite(k) || !(k > 0)) return null;
  if (!(k > 1)) return millisecond;
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setTime(Math.floor(date / k) * k);
  }, function(date, step) {
    date.setTime(+date + step * k);
  }, function(start, end) {
    return (end - start) / k;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (millisecond);
var milliseconds = millisecond.range;


/***/ }),

/***/ "./node_modules/d3-time/src/minute.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/minute.js ***!
  \********************************************/
/*! exports provided: default, minutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "minutes", function() { return minutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var minute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds() - date.getSeconds() * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (minute);
var minutes = minute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/month.js":
/*!*******************************************!*\
  !*** ./node_modules/d3-time/src/month.js ***!
  \*******************************************/
/*! exports provided: default, months */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "months", function() { return months; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var month = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (month);
var months = month.range;


/***/ }),

/***/ "./node_modules/d3-time/src/second.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/second.js ***!
  \********************************************/
/*! exports provided: default, seconds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seconds", function() { return seconds; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var second = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setTime(date - date.getMilliseconds());
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationSecond"];
}, function(date) {
  return date.getUTCSeconds();
});

/* harmony default export */ __webpack_exports__["default"] = (second);
var seconds = second.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcDay.js":
/*!********************************************!*\
  !*** ./node_modules/d3-time/src/utcDay.js ***!
  \********************************************/
/*! exports provided: default, utcDays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcDays", function() { return utcDays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcDay = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCDate(date.getUTCDate() + step);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationDay"];
}, function(date) {
  return date.getUTCDate() - 1;
});

/* harmony default export */ __webpack_exports__["default"] = (utcDay);
var utcDays = utcDay.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcHour.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcHour.js ***!
  \*********************************************/
/*! exports provided: default, utcHours */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcHours", function() { return utcHours; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcHour = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMinutes(0, 0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationHour"];
}, function(date) {
  return date.getUTCHours();
});

/* harmony default export */ __webpack_exports__["default"] = (utcHour);
var utcHours = utcHour.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMinute.js":
/*!***********************************************!*\
  !*** ./node_modules/d3-time/src/utcMinute.js ***!
  \***********************************************/
/*! exports provided: default, utcMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMinutes", function() { return utcMinutes; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



var utcMinute = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCSeconds(0, 0);
}, function(date, step) {
  date.setTime(+date + step * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]);
}, function(start, end) {
  return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"];
}, function(date) {
  return date.getUTCMinutes();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMinute);
var utcMinutes = utcMinute.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcMonth.js":
/*!**********************************************!*\
  !*** ./node_modules/d3-time/src/utcMonth.js ***!
  \**********************************************/
/*! exports provided: default, utcMonths */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonths", function() { return utcMonths; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var utcMonth = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCDate(1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCMonth(date.getUTCMonth() + step);
}, function(start, end) {
  return end.getUTCMonth() - start.getUTCMonth() + (end.getUTCFullYear() - start.getUTCFullYear()) * 12;
}, function(date) {
  return date.getUTCMonth();
});

/* harmony default export */ __webpack_exports__["default"] = (utcMonth);
var utcMonths = utcMonth.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcWeek.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcWeek.js ***!
  \*********************************************/
/*! exports provided: utcSunday, utcMonday, utcTuesday, utcWednesday, utcThursday, utcFriday, utcSaturday, utcSundays, utcMondays, utcTuesdays, utcWednesdays, utcThursdays, utcFridays, utcSaturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSunday", function() { return utcSunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMonday", function() { return utcMonday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesday", function() { return utcTuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesday", function() { return utcWednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursday", function() { return utcThursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFriday", function() { return utcFriday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturday", function() { return utcSaturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSundays", function() { return utcSundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcMondays", function() { return utcMondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcTuesdays", function() { return utcTuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcWednesdays", function() { return utcWednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcThursdays", function() { return utcThursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcFridays", function() { return utcFridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcSaturdays", function() { return utcSaturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



function utcWeekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCDate(date.getUTCDate() - (date.getUTCDay() + 7 - i) % 7);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCDate(date.getUTCDate() + step * 7);
  }, function(start, end) {
    return (end - start) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var utcSunday = utcWeekday(0);
var utcMonday = utcWeekday(1);
var utcTuesday = utcWeekday(2);
var utcWednesday = utcWeekday(3);
var utcThursday = utcWeekday(4);
var utcFriday = utcWeekday(5);
var utcSaturday = utcWeekday(6);

var utcSundays = utcSunday.range;
var utcMondays = utcMonday.range;
var utcTuesdays = utcTuesday.range;
var utcWednesdays = utcWednesday.range;
var utcThursdays = utcThursday.range;
var utcFridays = utcFriday.range;
var utcSaturdays = utcSaturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/utcYear.js":
/*!*********************************************!*\
  !*** ./node_modules/d3-time/src/utcYear.js ***!
  \*********************************************/
/*! exports provided: default, utcYears */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "utcYears", function() { return utcYears; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var utcYear = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
}, function(date, step) {
  date.setUTCFullYear(date.getUTCFullYear() + step);
}, function(start, end) {
  return end.getUTCFullYear() - start.getUTCFullYear();
}, function(date) {
  return date.getUTCFullYear();
});

// An optimized implementation for this simple case.
utcYear.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setUTCFullYear(Math.floor(date.getUTCFullYear() / k) * k);
    date.setUTCMonth(0, 1);
    date.setUTCHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setUTCFullYear(date.getUTCFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (utcYear);
var utcYears = utcYear.range;


/***/ }),

/***/ "./node_modules/d3-time/src/week.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/week.js ***!
  \******************************************/
/*! exports provided: sunday, monday, tuesday, wednesday, thursday, friday, saturday, sundays, mondays, tuesdays, wednesdays, thursdays, fridays, saturdays */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sunday", function() { return sunday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monday", function() { return monday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesday", function() { return tuesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesday", function() { return wednesday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursday", function() { return thursday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "friday", function() { return friday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturday", function() { return saturday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sundays", function() { return sundays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mondays", function() { return mondays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tuesdays", function() { return tuesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wednesdays", function() { return wednesdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thursdays", function() { return thursdays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fridays", function() { return fridays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saturdays", function() { return saturdays; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");
/* harmony import */ var _duration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./duration.js */ "./node_modules/d3-time/src/duration.js");



function weekday(i) {
  return Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setDate(date.getDate() - (date.getDay() + 7 - i) % 7);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setDate(date.getDate() + step * 7);
  }, function(start, end) {
    return (end - start - (end.getTimezoneOffset() - start.getTimezoneOffset()) * _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationMinute"]) / _duration_js__WEBPACK_IMPORTED_MODULE_1__["durationWeek"];
  });
}

var sunday = weekday(0);
var monday = weekday(1);
var tuesday = weekday(2);
var wednesday = weekday(3);
var thursday = weekday(4);
var friday = weekday(5);
var saturday = weekday(6);

var sundays = sunday.range;
var mondays = monday.range;
var tuesdays = tuesday.range;
var wednesdays = wednesday.range;
var thursdays = thursday.range;
var fridays = friday.range;
var saturdays = saturday.range;


/***/ }),

/***/ "./node_modules/d3-time/src/year.js":
/*!******************************************!*\
  !*** ./node_modules/d3-time/src/year.js ***!
  \******************************************/
/*! exports provided: default, years */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "years", function() { return years; });
/* harmony import */ var _interval_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interval.js */ "./node_modules/d3-time/src/interval.js");


var year = Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
  date.setMonth(0, 1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setFullYear(date.getFullYear() + step);
}, function(start, end) {
  return end.getFullYear() - start.getFullYear();
}, function(date) {
  return date.getFullYear();
});

// An optimized implementation for this simple case.
year.every = function(k) {
  return !isFinite(k = Math.floor(k)) || !(k > 0) ? null : Object(_interval_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function(date) {
    date.setFullYear(Math.floor(date.getFullYear() / k) * k);
    date.setMonth(0, 1);
    date.setHours(0, 0, 0, 0);
  }, function(date, step) {
    date.setFullYear(date.getFullYear() + step * k);
  });
};

/* harmony default export */ __webpack_exports__["default"] = (year);
var years = year.range;


/***/ }),

/***/ "./node_modules/devextreme/dist/js/vectormap-data/world.js":
/*!*****************************************************************!*\
  !*** ./node_modules/devextreme/dist/js/vectormap-data/world.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_RESULT__;

(function(root, factory) {
    if(true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function(require, exports, module) {
            factory(exports);
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
}(this, function(sources) {
    sources.world = {"type":"FeatureCollection","features":[{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[61.2108,35.6501],[62.2307,35.2707],[62.9847,35.404],[63.1935,35.8572],[63.9829,36.008],[64.5465,36.3121],[64.7461,37.1118],[65.5889,37.3052],[65.7456,37.6612],[66.2174,37.3938],[66.5186,37.3628],[67.0758,37.3561],[67.83,37.145],[68.1356,37.0231],[68.8594,37.3443],[69.1963,37.1511],[69.5188,37.609],[70.1166,37.5882],[70.2706,37.7352],[70.3763,38.1384],[70.8068,38.4863],[71.3481,38.2589],[71.2394,37.9533],[71.5419,37.9058],[71.4487,37.0656],[71.8446,36.7382],[72.193,36.9483],[72.6369,37.0476],[73.2601,37.4953],[73.9487,37.4216],[74.98,37.42],[75.158,37.133],[74.5759,37.0208],[74.0676,36.8362],[72.92,36.72],[71.8463,36.5099],[71.2623,36.0744],[71.4988,35.6506],[71.6131,35.1532],[71.115,34.7331],[71.1568,34.3489],[70.8818,33.9889],[69.9305,34.0201],[70.3236,33.3585],[69.6871,33.1055],[69.2625,32.5019],[69.3178,31.9014],[68.9267,31.6202],[68.5569,31.7133],[67.7927,31.5829],[67.6834,31.3032],[66.9389,31.3049],[66.3815,30.7389],[66.3465,29.8879],[65.0469,29.4722],[64.3504,29.56],[64.148,29.3408],[63.5503,29.4683],[62.5499,29.3186],[60.8742,29.8292],[61.7812,30.7359],[61.6993,31.3795],[60.9419,31.5481],[60.8637,32.1829],[60.5361,32.9813],[60.9637,33.5288],[60.5284,33.6764],[60.8032,34.4041],[61.2108,35.6501]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Afghanistan","sov_a3":"AFG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Afghanistan","adm0_a3":"AFG","geou_dif":0,"geounit":"Afghanistan","gu_a3":"AFG","su_dif":0,"subunit":"Afghanistan","su_a3":"AFG","brk_diff":0,"name":"Afghanistan","name_long":"Afghanistan","brk_a3":"AFG","brk_name":"Afghanistan","brk_group":"","abbrev":"Afg.","postal":"AF","formal_en":"Islamic State of Afghanistan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Afghanistan","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":8,"mapcolor13":7,"pop_est":28400000,"gdp_md_est":22270,"pop_year":-99,"lastcensus":1979,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"AF","iso_a3":"AFG","iso_n3":"004","un_a3":"004","wb_a2":"AF","wb_a3":"AFG","woe_id":-99,"adm0_a3_is":"AFG","adm0_a3_us":"AFG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":11,"long_len":11,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[16.3265,-5.8775],[16.5732,-6.6226],[16.8602,-7.2223],[17.09,-7.5457],[17.473,-8.0686],[18.1342,-7.9877],[18.4642,-7.847],[19.0168,-7.9882],[19.1666,-7.7382],[19.4175,-7.1554],[20.0377,-7.1164],[20.0916,-6.9431],[20.6018,-6.9393],[20.5147,-7.2996],[21.7281,-7.2909],[21.7465,-7.9201],[21.9491,-8.3059],[21.8018,-8.9087],[21.8752,-9.5237],[22.2088,-9.8948],[22.1553,-11.0848],[22.4028,-10.9931],[22.8373,-11.0176],[23.4568,-10.8679],[23.9122,-10.9268],[24.0179,-11.2373],[23.9042,-11.7223],[24.0799,-12.1913],[23.9309,-12.5658],[24.0161,-12.911],[21.9339,-12.8984],[21.8878,-16.0803],[22.5625,-16.8985],[23.215,-17.5231],[21.3772,-17.9306],[18.9562,-17.7891],[18.2633,-17.31],[14.2097,-17.3531],[14.0585,-17.4234],[13.4624,-16.9712],[12.8141,-16.9413],[12.2155,-17.1117],[11.7342,-17.3019],[11.6401,-16.6731],[11.7785,-15.7938],[12.1236,-14.8783],[12.1756,-14.4491],[12.5001,-13.5477],[12.7385,-13.1379],[13.3129,-12.4836],[13.6337,-12.0386],[13.7387,-11.2979],[13.6864,-10.7311],[13.3873,-10.3736],[13.121,-9.7669],[12.8754,-9.1669],[12.9291,-8.9591],[13.2364,-8.5626],[12.933,-7.5965],[12.7283,-6.9271],[12.2273,-6.2944],[12.3224,-6.1001],[12.7352,-5.9657],[13.0249,-5.9844],[13.3756,-5.8642],[16.3265,-5.8775]],[[12.4367,-5.6843],[12.1823,-5.7899],[11.915,-5.038],[12.3186,-4.6062],[12.6208,-4.438],[12.9955,-4.7811],[12.6316,-4.9913],[12.468,-5.2484],[12.4367,-5.6843]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Angola","sov_a3":"AGO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Angola","adm0_a3":"AGO","geou_dif":0,"geounit":"Angola","gu_a3":"AGO","su_dif":0,"subunit":"Angola","su_a3":"AGO","brk_diff":0,"name":"Angola","name_long":"Angola","brk_a3":"AGO","brk_name":"Angola","brk_group":"","abbrev":"Ang.","postal":"AO","formal_en":"People's Republic of Angola","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Angola","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":6,"mapcolor13":1,"pop_est":12799293,"gdp_md_est":110300,"pop_year":-99,"lastcensus":1970,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"AO","iso_a3":"AGO","iso_n3":"024","un_a3":"024","wb_a2":"AO","wb_a3":"AGO","woe_id":-99,"adm0_a3_is":"AGO","adm0_a3_us":"AGO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[20.5902,41.8554],[20.4632,41.5151],[20.6052,41.0862],[21.02,40.8427],[21,40.58],[20.675,40.435],[20.615,40.11],[20.15,39.625],[19.98,39.695],[19.96,39.915],[19.4061,40.2508],[19.3191,40.7272],[19.4035,41.4096],[19.54,41.72],[19.3718,41.8775],[19.3045,42.1957],[19.7381,42.6882],[19.8016,42.5001],[20.0707,42.5886],[20.2838,42.3203],[20.523,42.2179],[20.5902,41.8554]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Albania","sov_a3":"ALB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Albania","adm0_a3":"ALB","geou_dif":0,"geounit":"Albania","gu_a3":"ALB","su_dif":0,"subunit":"Albania","su_a3":"ALB","brk_diff":0,"name":"Albania","name_long":"Albania","brk_a3":"ALB","brk_name":"Albania","brk_group":"","abbrev":"Alb.","postal":"AL","formal_en":"Republic of Albania","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Albania","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":6,"pop_est":3639453,"gdp_md_est":21810,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"AL","iso_a3":"ALB","iso_n3":"008","un_a3":"008","wb_a2":"AL","wb_a3":"ALB","woe_id":-99,"adm0_a3_is":"ALB","adm0_a3_us":"ALB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[51.5795,24.2455],[51.7574,24.2941],[51.7944,24.0198],[52.5771,24.1774],[53.404,24.1513],[54.008,24.1218],[54.693,24.7979],[55.439,25.4391],[56.0708,26.0555],[56.261,25.7146],[56.3968,24.9247],[55.8862,24.9208],[55.8041,24.2696],[55.9812,24.1305],[55.5286,23.9336],[55.5258,23.5249],[55.2345,23.111],[55.2083,22.7083],[55.0068,22.4969],[52.0007,23.0012],[51.6177,24.0142],[51.5795,24.2455]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"United Arab Emirates","sov_a3":"ARE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"United Arab Emirates","adm0_a3":"ARE","geou_dif":0,"geounit":"United Arab Emirates","gu_a3":"ARE","su_dif":0,"subunit":"United Arab Emirates","su_a3":"ARE","brk_diff":0,"name":"United Arab Emirates","name_long":"United Arab Emirates","brk_a3":"ARE","brk_name":"United Arab Emirates","brk_group":"","abbrev":"U.A.E.","postal":"AE","formal_en":"United Arab Emirates","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"United Arab Emirates","name_alt":"","mapcolor7":2,"mapcolor8":1,"mapcolor9":3,"mapcolor13":3,"pop_est":4798491,"gdp_md_est":184300,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"AE","iso_a3":"ARE","iso_n3":"784","un_a3":"784","wb_a2":"AE","wb_a3":"ARE","woe_id":-99,"adm0_a3_is":"ARE","adm0_a3_us":"ARE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":20,"long_len":20,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-65.5,-55.2],[-66.45,-55.25],[-66.9599,-54.8968],[-67.5624,-54.87],[-68.6333,-54.8695],[-68.634,-52.6364],[-68.25,-53.1],[-67.75,-53.85],[-66.45,-54.45],[-65.05,-54.7],[-65.5,-55.2]],[[-64.9649,-22.0759],[-64.377,-22.7981],[-63.9868,-21.9936],[-62.8465,-22.035],[-62.6851,-22.249],[-60.8466,-23.8807],[-60.029,-24.0328],[-58.8071,-24.7715],[-57.7772,-25.1623],[-57.6337,-25.6037],[-58.6182,-27.1237],[-57.6098,-27.3959],[-56.4867,-27.5485],[-55.6958,-27.3878],[-54.7888,-26.6218],[-54.6253,-25.7393],[-54.13,-25.5476],[-53.6283,-26.1249],[-53.6487,-26.9235],[-54.4907,-27.4748],[-55.1623,-27.8819],[-56.2909,-28.8528],[-57.6251,-30.2163],[-57.8749,-31.0166],[-58.1424,-32.0445],[-58.1326,-33.0406],[-58.3496,-33.2632],[-58.4271,-33.9095],[-58.4954,-34.4315],[-57.2258,-35.288],[-57.3624,-35.9774],[-56.7375,-36.4131],[-56.7883,-36.9016],[-57.7492,-38.1839],[-59.2319,-38.7202],[-61.2374,-38.9284],[-62.336,-38.8277],[-62.1258,-39.4241],[-62.3305,-40.1726],[-62.146,-40.6769],[-62.7458,-41.0288],[-63.7705,-41.1668],[-64.7321,-40.8027],[-65.118,-41.0643],[-64.9786,-42.058],[-64.3034,-42.359],[-63.7559,-42.0437],[-63.4581,-42.5631],[-64.3788,-42.8736],[-65.1818,-43.4954],[-65.3288,-44.5014],[-65.5653,-45.0368],[-66.51,-45.0396],[-67.2938,-45.5519],[-67.5805,-46.3018],[-66.5971,-47.0339],[-65.641,-47.2361],[-65.9851,-48.1333],[-67.1662,-48.6973],[-67.8161,-49.8697],[-68.7287,-50.2642],[-69.1385,-50.7325],[-68.8156,-51.7711],[-68.15,-52.35],[-68.5715,-52.2994],[-69.4984,-52.1428],[-71.9148,-52.009],[-72.3294,-51.426],[-72.31,-50.677],[-72.9757,-50.7415],[-73.3281,-50.3788],[-73.4154,-49.3184],[-72.6482,-48.8786],[-72.3312,-48.2442],[-72.4474,-47.7385],[-71.9173,-46.8848],[-71.552,-45.5607],[-71.6593,-44.9737],[-71.2228,-44.7842],[-71.3298,-44.4075],[-71.7936,-44.2072],[-71.4641,-43.7876],[-71.9154,-43.4086],[-72.1489,-42.2549],[-71.7468,-42.0514],[-71.9157,-40.8323],[-71.6808,-39.8082],[-71.4135,-38.916],[-70.8147,-38.553],[-71.1186,-37.5768],[-71.1219,-36.6581],[-70.3648,-36.0051],[-70.388,-35.1697],[-69.8173,-34.1936],[-69.8148,-33.2739],[-70.0744,-33.0912],[-70.5351,-31.365],[-69.919,-30.3363],[-70.0136,-29.3679],[-69.6561,-28.4591],[-69.0012,-27.5212],[-68.2955,-26.8993],[-68.5948,-26.5069],[-68.386,-26.185],[-68.4177,-24.5186],[-67.3284,-24.0253],[-66.9852,-22.9863],[-67.1067,-22.7359],[-66.2733,-21.8323],[-64.9649,-22.0759]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Argentina","sov_a3":"ARG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Argentina","adm0_a3":"ARG","geou_dif":0,"geounit":"Argentina","gu_a3":"ARG","su_dif":0,"subunit":"Argentina","su_a3":"ARG","brk_diff":0,"name":"Argentina","name_long":"Argentina","brk_a3":"ARG","brk_name":"Argentina","brk_group":"","abbrev":"Arg.","postal":"AR","formal_en":"Argentine Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Argentina","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":3,"mapcolor13":13,"pop_est":40913584,"gdp_md_est":573900,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"AR","iso_a3":"ARG","iso_n3":"032","un_a3":"032","wb_a2":"AR","wb_a3":"ARG","woe_id":-99,"adm0_a3_is":"ARG","adm0_a3_us":"ARG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[43.5827,41.0921],[44.9725,41.2481],[45.1795,40.9854],[45.5604,40.8123],[45.3592,40.5615],[45.8919,40.2185],[45.61,39.9],[46.0345,39.628],[46.4835,39.4642],[46.5057,38.7706],[46.1436,38.7412],[45.7354,39.3197],[45.74,39.474],[45.2981,39.4718],[45.002,39.74],[44.794,39.713],[44.4,40.005],[43.6564,40.2536],[43.7527,40.7402],[43.5827,41.0921]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Armenia","sov_a3":"ARM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Armenia","adm0_a3":"ARM","geou_dif":0,"geounit":"Armenia","gu_a3":"ARM","su_dif":0,"subunit":"Armenia","su_a3":"ARM","brk_diff":0,"name":"Armenia","name_long":"Armenia","brk_a3":"ARM","brk_name":"Armenia","brk_group":"","abbrev":"Arm.","postal":"ARM","formal_en":"Republic of Armenia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Armenia","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":2,"mapcolor13":10,"pop_est":2967004,"gdp_md_est":18770,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"AM","iso_a3":"ARM","iso_n3":"051","un_a3":"051","wb_a2":"AM","wb_a3":"ARM","woe_id":-99,"adm0_a3_is":"ARM","adm0_a3_us":"ARM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-59.5721,-80.0402],[-59.8658,-80.5497],[-60.1597,-81.0003],[-62.2554,-80.8632],[-64.4881,-80.9219],[-65.7417,-80.5888],[-65.7417,-80.5497],[-66.29,-80.2558],[-64.0377,-80.2949],[-61.8832,-80.3929],[-61.139,-79.9814],[-60.6101,-79.6287],[-59.5721,-80.0402]],[[-159.2082,-79.4971],[-161.1276,-79.6342],[-162.4398,-79.2815],[-163.0274,-78.9288],[-163.0666,-78.87],[-163.7129,-78.5957],[-163.7129,-78.5957],[-163.1058,-78.2233],[-161.2451,-78.3802],[-160.2462,-78.6936],[-159.4824,-79.0463],[-159.2082,-79.4971]],[[-45.1548,-78.0471],[-43.9208,-78.4781],[-43.4899,-79.0856],[-43.3724,-79.5166],[-43.3333,-80.0261],[-44.8805,-80.3396],[-46.5062,-80.5944],[-48.3864,-80.8295],[-50.4821,-81.0254],[-52.852,-80.9667],[-54.1643,-80.6335],[-53.988,-80.222],[-51.8531,-79.9477],[-50.9913,-79.6146],[-50.3646,-79.1835],[-49.9141,-78.8112],[-49.307,-78.4586],[-48.6606,-78.047],[-48.6606,-78.047],[-48.1514,-78.0471],[-46.6629,-77.8315],[-45.1548,-78.0471]],[[-121.2115,-73.501],[-119.9189,-73.6577],[-118.7241,-73.4814],[-119.2921,-73.8341],[-120.2322,-74.0888],[-121.6228,-74.0105],[-122.6217,-73.6578],[-122.6217,-73.6578],[-122.4062,-73.3246],[-121.2115,-73.501]],[[-125.5596,-73.4814],[-124.0319,-73.8733],[-124.6195,-73.8341],[-125.9122,-73.7361],[-127.2831,-73.4618],[-127.2831,-73.4618],[-126.5585,-73.2462],[-125.5596,-73.4814]],[[-98.9815,-71.9333],[-97.8847,-72.0705],[-96.7879,-71.953],[-96.2003,-72.5212],[-96.9838,-72.4429],[-98.1981,-72.482],[-99.432,-72.4429],[-100.7835,-72.5016],[-101.8019,-72.3057],[-102.3307,-71.8942],[-102.3307,-71.8942],[-101.704,-71.7178],[-100.4309,-71.855],[-98.9815,-71.9333]],[[-68.4513,-70.9558],[-68.3338,-71.4065],[-68.5101,-71.7984],[-68.7843,-72.1707],[-69.9595,-72.3079],[-71.0759,-72.5038],[-72.3881,-72.4843],[-71.8985,-72.0923],[-73.0736,-72.2295],[-74.19,-72.3667],[-74.9539,-72.0728],[-75.0126,-71.6613],[-73.9158,-71.2693],[-73.9158,-71.2693],[-73.2303,-71.1518],[-72.0747,-71.191],[-71.781,-70.6815],[-71.7222,-70.3092],[-71.7418,-69.5058],[-71.1738,-69.0355],[-70.2533,-68.8787],[-69.7244,-69.251],[-69.4894,-69.6233],[-69.0585,-70.074],[-68.7255,-70.5052],[-68.4513,-70.9558]],[[-58.6141,-64.1525],[-59.0451,-64.368],[-59.7893,-64.2112],[-60.6119,-64.3092],[-61.2974,-64.5443],[-62.0221,-64.7991],[-62.5118,-65.093],[-62.6489,-65.4849],[-62.5901,-65.8572],[-62.1201,-66.1903],[-62.8056,-66.4255],[-63.7457,-66.5038],[-64.2941,-66.837],[-64.8817,-67.1505],[-65.5084,-67.5816],[-65.6651,-67.9539],[-65.3125,-68.3653],[-64.7837,-68.6789],[-63.9611,-68.914],[-63.1973,-69.2276],[-62.786,-69.6194],[-62.5705,-69.9917],[-62.2767,-70.3837],[-61.8067,-70.7168],[-61.5129,-71.089],[-61.3758,-72.0101],[-61.082,-72.3824],[-61.0037,-72.7743],[-60.6903,-73.1662],[-60.8274,-73.6952],[-61.3758,-74.1067],[-61.9634,-74.4398],[-63.2952,-74.577],[-63.7457,-74.9297],[-64.3528,-75.2628],[-65.861,-75.6351],[-67.1928,-75.7919],[-68.4463,-76.0075],[-69.7977,-76.223],[-70.6007,-76.6345],[-72.2068,-76.6737],[-73.9695,-76.6345],[-75.556,-76.7129],[-77.2404,-76.7129],[-76.927,-77.1048],[-75.3993,-77.2811],[-74.2829,-77.5554],[-73.6561,-77.9081],[-74.7725,-78.2216],[-76.4961,-78.1237],[-77.9259,-78.3784],[-77.9847,-78.7899],[-78.0238,-79.1818],[-76.8486,-79.5149],[-76.6332,-79.8872],[-75.3601,-80.2595],[-73.2449,-80.4163],[-71.4429,-80.6906],[-70.0132,-81.0042],[-68.1916,-81.3177],[-65.7043,-81.4745],[-63.256,-81.7488],[-61.552,-82.0427],[-59.6914,-82.3759],[-58.7121,-82.8461],[-58.2225,-83.2184],[-57.0081,-82.8657],[-55.3629,-82.5718],[-53.6198,-82.2582],[-51.5436,-82.0035],[-49.7613,-81.7292],[-47.2739,-81.7096],[-44.8257,-81.8467],[-42.8084,-82.0819],[-42.162,-81.6508],[-40.7714,-81.3569],[-38.2448,-81.3373],[-36.2667,-81.1217],[-34.3864,-80.9062],[-32.3103,-80.769],[-30.0971,-80.5927],[-28.5498,-80.3379],[-29.2549,-79.9852],[-29.6858,-79.6325],[-29.6858,-79.2602],[-31.6248,-79.2994],[-33.6813,-79.4561],[-35.6399,-79.4561],[-35.9141,-79.0839],[-35.777,-78.3392],[-35.3265,-78.1237],[-33.8968,-77.8885],[-32.2124,-77.6535],[-30.9981,-77.3595],[-29.7837,-77.0656],[-28.8828,-76.6737],[-27.5118,-76.4973],[-26.1603,-76.3601],[-25.4748,-76.2818],[-23.9276,-76.2426],[-22.4586,-76.1054],[-21.2247,-75.9095],[-20.0104,-75.6743],[-18.9135,-75.4392],[-17.523,-75.1257],[-16.6416,-74.7925],[-15.7015,-74.4986],[-15.4077,-74.1067],[-16.4653,-73.8716],[-16.1128,-73.4601],[-15.4469,-73.1465],[-14.4088,-72.9506],[-13.312,-72.7155],[-12.2935,-72.4019],[-11.5101,-72.0101],[-11.0204,-71.5398],[-10.2958,-71.2654],[-9.101,-71.3242],[-8.6114,-71.6573],[-7.4166,-71.6965],[-7.3775,-71.3242],[-6.8682,-70.9323],[-5.791,-71.0303],[-5.5364,-71.4026],[-4.3417,-71.4614],[-3.049,-71.2851],[-1.7955,-71.1674],[-0.6595,-71.2262],[-0.2286,-71.6377],[0.8682,-71.3046],[1.8867,-71.1283],[3.0226,-70.9911],[4.1391,-70.8539],[5.1575,-70.6188],[6.2739,-70.4621],[7.1357,-70.2465],[7.7429,-69.8938],[8.4871,-70.1485],[9.5251,-70.0113],[10.2498,-70.4816],[10.8178,-70.8343],[11.9538,-70.6384],[12.4043,-70.2465],[13.4228,-69.9722],[14.735,-70.0309],[15.1268,-70.4032],[15.9493,-70.0309],[17.0266,-69.9134],[18.2017,-69.8742],[19.2594,-69.8938],[20.3757,-70.0113],[21.453,-70.0701],[21.923,-70.4032],[22.5694,-70.6972],[23.6662,-70.5208],[24.8414,-70.4816],[25.9773,-70.4816],[27.0937,-70.4621],[28.0926,-70.3249],[29.1502,-70.2073],[30.0316,-69.9329],[30.9717,-69.7566],[31.9902,-69.6586],[32.7541,-69.3843],[33.3024,-68.8356],[33.8704,-68.5026],[34.9085,-68.6593],[35.3002,-69.012],[36.162,-69.2471],[37.2,-69.1687],[37.9051,-69.5214],[38.6494,-69.7762],[39.6679,-69.5411],[40.0204,-69.1099],[40.9214,-68.9336],[41.9594,-68.6005],[42.9387,-68.4633],[44.1139,-68.2674],[44.8973,-68.0519],[45.7199,-67.8167],[46.5033,-67.6012],[47.4434,-67.7188],[48.3444,-67.3661],[48.9907,-67.0917],[49.9309,-67.1113],[50.7535,-66.8762],[50.9493,-66.5235],[51.7915,-66.2491],[52.6141,-66.0532],[53.613,-65.8964],[54.5336,-65.818],[55.4149,-65.8768],[56.355,-65.9748],[57.1581,-66.2491],[57.256,-66.6802],[58.1374,-67.0133],[58.7445,-67.2877],[59.9393,-67.4052],[60.6052,-67.6796],[61.4278,-67.9539],[62.3875,-68.0127],[63.1905,-67.8167],[64.0523,-67.4052],[64.9924,-67.6207],[65.9717,-67.7383],[66.9119,-67.8559],[67.8911,-67.9343],[68.89,-67.9343],[69.7126,-68.9728],[69.6735,-69.2276],[69.5559,-69.6782],[68.5963,-69.9329],[67.8127,-70.3053],[67.9499,-70.6972],[69.0663,-70.6775],[68.9292,-71.0695],[68.42,-71.4418],[67.9499,-71.8533],[68.7138,-72.1668],[69.8693,-72.2648],[71.0249,-72.0884],[71.5733,-71.6965],[71.9063,-71.3242],[72.4546,-71.0107],[73.0814,-70.7168],[73.336,-70.364],[73.8649,-69.8742],[74.4916,-69.7762],[75.6276,-69.737],[76.6265,-69.6194],[77.6449,-69.4627],[78.1345,-69.0708],[78.4284,-68.6984],[79.1139,-68.3262],[80.0931,-68.0715],[80.9353,-67.8755],[81.4838,-67.5424],[82.0518,-67.3661],[82.7764,-67.2093],[83.7753,-67.3073],[84.6762,-67.2093],[85.6555,-67.0917],[86.7524,-67.1505],[87.477,-66.8762],[87.9863,-66.2099],[88.3584,-66.4843],[88.8284,-66.9546],[89.6706,-67.1505],[90.6304,-67.2289],[91.5901,-67.1113],[92.6085,-67.1897],[93.5486,-67.2093],[94.1754,-67.1113],[95.0176,-67.1701],[95.7815,-67.3857],[96.6824,-67.2485],[97.7596,-67.2485],[98.6802,-67.1113],[99.7182,-67.2485],[100.3842,-66.9153],[100.8934,-66.5822],[101.5789,-66.3079],[102.8324,-65.5633],[103.4787,-65.7005],[104.2426,-65.9748],[104.9085,-66.3275],[106.1816,-66.9349],[107.1609,-66.9546],[108.0814,-66.9546],[109.1586,-66.837],[110.2358,-66.6998],[111.0585,-66.4255],[111.744,-66.1316],[112.8604,-66.0923],[113.6047,-65.8768],[114.3881,-66.0728],[114.8973,-66.3863],[115.6024,-66.6998],[116.6992,-66.6606],[117.3847,-66.9153],[118.5795,-67.1701],[119.8329,-67.2681],[120.871,-67.1897],[121.6544,-66.8762],[122.3204,-66.5627],[123.2213,-66.4843],[124.1223,-66.6215],[125.1602,-66.7194],[126.1004,-66.5627],[127.0014,-66.5627],[127.8828,-66.6606],[128.8033,-66.7586],[129.7043,-66.5822],[130.7815,-66.4255],[131.7999,-66.3863],[132.9359,-66.3863],[133.8565,-66.2883],[134.7574,-66.21],[135.0316,-65.7201],[135.0708,-65.3086],[135.6975,-65.5829],[135.8738,-66.0336],[136.2067,-66.4451],[136.618,-66.7782],[137.4603,-66.9546],[138.5962,-66.8958],[139.9084,-66.8762],[140.8094,-66.8174],[142.1217,-66.8174],[143.0618,-66.7978],[144.3741,-66.837],[145.4904,-66.9153],[146.1956,-67.2289],[145.9997,-67.6012],[146.6461,-67.8951],[147.7233,-68.1303],[148.8396,-68.385],[150.1323,-68.5613],[151.4837,-68.7181],[152.5022,-68.8748],[153.6382,-68.8945],[154.2846,-68.5613],[155.1659,-68.8356],[155.9298,-69.1492],[156.8111,-69.3843],[158.0255,-69.4823],[159.181,-69.5998],[159.6707,-69.9917],[160.8067,-70.2269],[161.5705,-70.5796],[162.6869,-70.7364],[163.8424,-70.7168],[164.9197,-70.7755],[166.1144,-70.7559],[167.3091,-70.8343],[168.4256,-70.9715],[169.4636,-71.2067],[170.5017,-71.4026],[171.2068,-71.6965],[171.0892,-72.0884],[170.5604,-72.4412],[170.11,-72.8918],[169.7574,-73.2445],[169.2873,-73.656],[167.9751,-73.8128],[167.3875,-74.1655],[166.0948,-74.381],[165.6444,-74.773],[164.9589,-75.1453],[164.2342,-75.4588],[163.8228,-75.8703],[163.5682,-76.2426],[163.4703,-76.6933],[163.4899,-77.0656],[164.0579,-77.4574],[164.2734,-77.8298],[164.7435,-78.1825],[166.6041,-78.3196],[166.9958,-78.7507],[165.1939,-78.9075],[163.6662,-79.123],[161.7664,-79.1622],[160.9242,-79.7305],[160.7479,-80.2007],[160.317,-80.5731],[159.7882,-80.9454],[161.12,-81.2785],[161.6293,-81.69],[162.491,-82.0623],[163.7053,-82.3954],[165.0959,-82.709],[166.6041,-83.0225],[168.8957,-83.336],[169.4048,-83.8259],[172.2839,-84.0414],[172.477,-84.1179],[173.2241,-84.4137],[175.9857,-84.159],[178.2772,-84.4725],[180,-84.7134],[180,-90],[-180,-90],[-180,-84.7134],[-179.9425,-84.7214],[-179.0587,-84.1394],[-177.2568,-84.4529],[-177.1408,-84.4179],[-176.0847,-84.0993],[-175.9472,-84.1104],[-175.8299,-84.1179],[-174.3825,-84.5343],[-173.1166,-84.1179],[-172.8891,-84.061],[-169.9512,-83.8846],[-169,-84.1179],[-168.5302,-84.2374],[-167.0221,-84.5705],[-164.1821,-84.8252],[-161.9298,-85.1387],[-158.0714,-85.3739],[-155.1923,-85.0996],[-150.9421,-85.2955],[-148.5331,-85.609],[-145.8889,-85.3151],[-143.1077,-85.0408],[-142.8923,-84.5705],[-146.8291,-84.5313],[-150.0607,-84.2961],[-150.9029,-83.9042],[-153.5862,-83.6887],[-153.4099,-83.238],[-153.0378,-82.8265],[-152.6656,-82.4542],[-152.8615,-82.0427],[-154.5263,-81.7684],[-155.2902,-81.4157],[-156.8374,-81.1021],[-154.4088,-81.1609],[-152.0977,-81.0042],[-150.6483,-81.3373],[-148.866,-81.0434],[-147.2207,-80.671],[-146.4177,-80.3379],[-146.7703,-79.9264],[-148.0629,-79.6521],[-149.5319,-79.3582],[-151.5884,-79.2994],[-153.3903,-79.1622],[-155.3294,-79.0643],[-155.9757,-78.6919],[-157.2683,-78.3784],[-158.0518,-78.0257],[-158.3651,-76.8892],[-157.8755,-76.9872],[-156.9746,-77.3008],[-155.3294,-77.2027],[-153.7428,-77.0656],[-152.9202,-77.4967],[-151.3338,-77.3987],[-150.0019,-77.1831],[-148.7485,-76.9088],[-147.6125,-76.5757],[-146.1044,-76.4778],[-146.1435,-76.1054],[-146.4961,-75.7332],[-146.2023,-75.3804],[-144.9096,-75.204],[-144.322,-75.5372],[-142.7944,-75.3412],[-141.6388,-75.0865],[-140.209,-75.0669],[-138.8576,-74.9689],[-137.5062,-74.7338],[-136.4289,-74.5182],[-135.2146,-74.3027],[-134.4312,-74.3615],[-133.7457,-74.4398],[-132.2572,-74.3027],[-130.9253,-74.479],[-129.5543,-74.4594],[-128.242,-74.3223],[-126.8906,-74.4203],[-125.4021,-74.5182],[-124.0115,-74.479],[-122.5622,-74.4986],[-121.0736,-74.5182],[-119.7026,-74.479],[-118.6841,-74.1851],[-117.4698,-74.0283],[-116.2163,-74.2439],[-115.0216,-74.0675],[-113.9443,-73.7148],[-113.298,-74.0283],[-112.9455,-74.381],[-112.2991,-74.7142],[-111.2611,-74.4203],[-110.0663,-74.7925],[-108.7149,-74.9101],[-107.5593,-75.1845],[-106.1491,-75.1257],[-104.8761,-74.9493],[-103.3679,-74.9885],[-102.0165,-75.1257],[-100.6455,-75.302],[-100.1167,-74.8709],[-100.763,-74.5378],[-101.2527,-74.1851],[-102.5453,-74.1067],[-103.1133,-73.7344],[-103.3288,-73.3621],[-103.6813,-72.6175],[-102.9175,-72.7547],[-101.6052,-72.8134],[-100.3125,-72.7547],[-99.1374,-72.9114],[-98.1189,-73.2053],[-97.688,-73.558],[-96.3366,-73.6168],[-95.044,-73.4797],[-93.6729,-73.2837],[-92.439,-73.1662],[-91.4206,-73.4013],[-90.0887,-73.3229],[-89.227,-72.5587],[-88.424,-73.0094],[-87.2683,-73.1858],[-86.0148,-73.0878],[-85.1922,-73.4797],[-83.88,-73.5189],[-82.6656,-73.6364],[-81.4709,-73.852],[-80.6874,-73.4797],[-80.2958,-73.127],[-79.2969,-73.5189],[-77.9259,-73.4209],[-76.9074,-73.6364],[-76.2219,-73.9695],[-74.89,-73.8716],[-73.852,-73.656],[-72.8335,-73.4013],[-71.6192,-73.2642],[-70.209,-73.1465],[-68.9359,-73.0094],[-67.9566,-72.7939],[-67.3691,-72.4803],[-67.134,-72.0492],[-67.2515,-71.6377],[-67.5649,-71.2458],[-67.9175,-70.8539],[-68.2308,-70.4621],[-68.4855,-70.1093],[-68.5442,-69.7174],[-68.4463,-69.3255],[-67.9762,-68.9532],[-67.5845,-68.5417],[-67.4278,-68.1498],[-67.6237,-67.7188],[-67.7412,-67.3268],[-67.2515,-66.8762],[-66.7032,-66.5822],[-66.0568,-66.21],[-65.3713,-65.8964],[-64.5683,-65.6025],[-64.1765,-65.1714],[-63.6282,-64.8971],[-63.0014,-64.6423],[-62.0417,-64.5836],[-61.4149,-64.27],[-60.7099,-64.0741],[-59.8873,-63.9565],[-59.1626,-63.7017],[-58.5946,-63.3882],[-57.8111,-63.2707],[-57.2236,-63.5254],[-57.5957,-63.8585],[-58.6141,-64.1525]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Antarctica","sov_a3":"ATA","adm0_dif":0,"level":2,"type":"Indeterminate","admin":"Antarctica","adm0_a3":"ATA","geou_dif":0,"geounit":"Antarctica","gu_a3":"ATA","su_dif":0,"subunit":"Antarctica","su_a3":"ATA","brk_diff":0,"name":"Antarctica","name_long":"Antarctica","brk_a3":"ATA","brk_name":"Antarctica","brk_group":"","abbrev":"Ant.","postal":"AQ","formal_en":"","formal_fr":"","note_adm0":"","note_brk":"Multiple claims held in abeyance","name_sort":"Antarctica","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":1,"mapcolor13":-99,"pop_est":3802,"gdp_md_est":760.4,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"AQ","iso_a3":"ATA","iso_n3":"010","un_a3":"-099","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"ATA","adm0_a3_us":"ATA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Antarctica","region_un":"Antarctica","subregion":"Antarctica","region_wb":"Antarctica","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[68.935,-48.625],[69.58,-48.94],[70.525,-49.065],[70.56,-49.255],[70.28,-49.71],[68.745,-49.775],[68.72,-49.2425],[68.8675,-48.83],[68.935,-48.625]]]},"properties":{"scalerank":3,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"France","sov_a3":"FR1","adm0_dif":1,"level":2,"type":"Dependency","admin":"French Southern and Antarctic Lands","adm0_a3":"ATF","geou_dif":0,"geounit":"French Southern and Antarctic Lands","gu_a3":"ATF","su_dif":0,"subunit":"French Southern and Antarctic Lands","su_a3":"ATF","brk_diff":0,"name":"Fr. S. Antarctic Lands","name_long":"French Southern and Antarctic Lands","brk_a3":"ATF","brk_name":"Fr. S. and Antarctic Lands","brk_group":"","abbrev":"Fr. S.A.L.","postal":"TF","formal_en":"Territory of the French Southern and Antarctic Lands","formal_fr":"","note_adm0":"Fr.","note_brk":"","name_sort":"French Southern and Antarctic Lands","name_alt":"","mapcolor7":7,"mapcolor8":5,"mapcolor9":9,"mapcolor13":11,"pop_est":140,"gdp_md_est":16,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"TF","iso_a3":"ATF","iso_n3":"260","un_a3":"-099","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"ATF","adm0_a3_us":"ATF","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Seven seas (open ocean)","region_un":"Seven seas (open ocean)","subregion":"Seven seas (open ocean)","region_wb":"Sub-Saharan Africa","name_len":22,"long_len":35,"abbrev_len":10,"tiny":2,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[145.398,-40.7925],[146.3641,-41.1377],[146.9086,-41.0005],[147.6893,-40.8083],[148.2891,-40.8754],[148.3599,-42.0624],[148.0173,-42.407],[147.9141,-43.2115],[147.5646,-42.9377],[146.8703,-43.6346],[146.6633,-43.5809],[146.0484,-43.5497],[145.4319,-42.6938],[145.2951,-42.0336],[144.7181,-41.1626],[144.7438,-40.704],[145.398,-40.7925]],[[143.5618,-13.7637],[143.9221,-14.5483],[144.5637,-14.1712],[144.8949,-14.5945],[145.3747,-14.985],[145.272,-15.4282],[145.4853,-16.2857],[145.637,-16.7849],[145.8889,-16.9069],[146.1603,-17.7617],[146.0637,-18.2801],[146.3875,-18.9583],[147.4711,-19.4807],[148.1776,-19.9559],[148.8484,-20.3912],[148.7175,-20.6335],[149.2894,-21.2605],[149.6783,-22.3425],[150.0774,-22.1228],[150.4829,-22.5561],[150.7273,-22.4024],[150.8996,-23.4622],[151.6092,-24.0763],[152.0735,-24.4579],[152.8552,-25.2675],[153.1362,-26.0712],[153.1619,-26.6413],[153.0929,-27.2603],[153.5695,-28.1101],[153.5121,-28.9951],[153.3391,-29.4582],[153.0692,-30.3502],[153.0896,-30.9236],[152.8916,-31.6404],[152.45,-32.55],[151.7091,-33.0413],[151.344,-33.816],[151.0106,-34.3104],[150.7141,-35.1735],[150.3282,-35.6719],[150.0752,-36.4202],[149.9461,-37.1091],[149.9973,-37.4253],[149.4239,-37.7727],[148.3046,-37.8091],[147.3817,-38.2192],[146.9221,-38.6065],[146.3179,-39.0358],[145.4897,-38.5938],[144.877,-38.4174],[145.0322,-37.8962],[144.4857,-38.0853],[143.61,-38.8095],[142.7454,-38.5383],[142.1783,-38.38],[141.6066,-38.3085],[140.6386,-38.0193],[139.9922,-37.4029],[139.8066,-36.6436],[139.5741,-36.1384],[139.0828,-35.7328],[138.1207,-35.6123],[138.4495,-35.1273],[138.2076,-34.3847],[137.7192,-35.0768],[136.8294,-35.2605],[137.3524,-34.7073],[137.5039,-34.1303],[137.8901,-33.6405],[137.8103,-32.9],[136.9968,-33.7528],[136.3721,-34.0948],[135.989,-34.8901],[135.2082,-34.4787],[135.2392,-33.948],[134.6134,-33.2228],[134.0859,-32.8481],[134.2739,-32.6172],[132.9908,-32.0112],[132.2881,-31.9826],[131.3263,-31.4958],[129.5358,-31.5904],[128.2409,-31.9485],[127.1029,-32.2823],[126.1487,-32.216],[125.0886,-32.7288],[124.2216,-32.9595],[124.0289,-33.4838],[123.6597,-33.8902],[122.811,-33.9145],[122.1831,-34.0034],[121.2992,-33.821],[120.5803,-33.9302],[119.8937,-33.9761],[119.2989,-34.5094],[119.0073,-34.4641],[118.5057,-34.7468],[118.025,-35.0647],[117.2955,-35.0255],[116.6251,-35.0251],[115.5643,-34.3864],[115.0268,-34.1965],[115.0486,-33.6234],[115.5451,-33.4873],[115.7147,-33.2596],[115.6794,-32.9004],[115.8016,-32.2051],[115.6896,-31.6124],[115.1609,-30.6016],[114.997,-30.0307],[115.04,-29.4611],[114.642,-28.8102],[114.6165,-28.5164],[114.1736,-28.1181],[114.0489,-27.3348],[113.4775,-26.5431],[113.339,-26.1165],[113.7784,-26.549],[113.441,-25.6213],[113.9369,-25.9112],[114.2329,-26.2984],[114.2162,-25.7863],[113.7213,-24.9989],[113.6253,-24.684],[113.3935,-24.3848],[113.502,-23.8064],[113.707,-23.5602],[113.8434,-23.06],[113.7366,-22.4755],[114.1498,-21.7559],[114.2253,-22.5175],[114.6478,-21.8295],[115.4602,-21.4952],[115.9474,-21.0687],[116.7116,-20.7017],[117.1663,-20.6236],[117.4415,-20.7469],[118.2296,-20.3742],[118.8361,-20.2633],[118.9878,-20.0442],[119.2525,-19.9529],[119.8052,-19.9765],[120.8562,-19.6837],[121.3999,-19.2398],[121.6551,-18.7053],[122.2417,-18.1976],[122.2866,-17.7986],[122.3128,-17.255],[123.0126,-16.4052],[123.4338,-17.2686],[123.8593,-17.069],[123.5032,-16.5965],[123.8171,-16.1113],[124.2583,-16.3279],[124.3797,-15.5671],[124.9262,-15.0751],[125.1673,-14.6804],[125.6701,-14.5101],[125.6858,-14.2307],[126.1251,-14.3473],[126.1428,-14.096],[126.5826,-13.9528],[127.0659,-13.818],[127.8046,-14.2769],[128.3597,-14.8692],[128.9855,-14.876],[129.6215,-14.9698],[129.4096,-14.4207],[129.8886,-13.6187],[130.3395,-13.3574],[130.1835,-13.1075],[130.6178,-12.5364],[131.2235,-12.1836],[131.7351,-12.3025],[132.5753,-12.114],[132.5572,-11.603],[131.8247,-11.2738],[132.3572,-11.1285],[133.0196,-11.3764],[133.5508,-11.7865],[134.3931,-12.0424],[134.6786,-11.9412],[135.2985,-12.2486],[135.8827,-11.9623],[136.2584,-12.0493],[136.4925,-11.8572],[136.9516,-12.352],[136.6851,-12.8872],[136.3054,-13.2912],[135.9618,-13.3245],[136.0776,-13.7243],[135.7838,-14.224],[135.4287,-14.7154],[135.5002,-14.9977],[136.2952,-15.5503],[137.0654,-15.8708],[137.5805,-16.2151],[138.3032,-16.8076],[138.5852,-16.8066],[139.1085,-17.0627],[139.2606,-17.3716],[140.2152,-17.7108],[140.8755,-17.3691],[141.0711,-16.832],[141.2741,-16.3889],[141.3982,-15.8405],[141.7022,-15.0449],[141.5634,-14.5613],[141.6355,-14.2704],[141.5199,-13.6981],[141.6509,-12.9447],[141.8427,-12.7415],[141.687,-12.4076],[141.9286,-11.8775],[142.1185,-11.328],[142.1437,-11.0427],[142.5153,-10.6682],[142.7973,-11.1574],[142.8668,-11.7847],[143.1159,-11.9056],[143.1586,-12.3257],[143.5221,-12.8344],[143.5972,-13.4004],[143.5618,-13.7637]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Australia","sov_a3":"AU1","adm0_dif":1,"level":2,"type":"Country","admin":"Australia","adm0_a3":"AUS","geou_dif":0,"geounit":"Australia","gu_a3":"AUS","su_dif":0,"subunit":"Australia","su_a3":"AUS","brk_diff":0,"name":"Australia","name_long":"Australia","brk_a3":"AUS","brk_name":"Australia","brk_group":"","abbrev":"Auz.","postal":"AU","formal_en":"Commonwealth of Australia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Australia","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":2,"mapcolor13":7,"pop_est":21262641,"gdp_md_est":800200,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"AU","iso_a3":"AUS","iso_n3":"036","un_a3":"036","wb_a2":"AU","wb_a3":"AUS","woe_id":-99,"adm0_a3_is":"AUS","adm0_a3_us":"AUS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Australia and New Zealand","region_wb":"East Asia & Pacific","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[16.9797,48.1235],[16.9038,47.7149],[16.3406,47.7129],[16.5343,47.4962],[16.2023,46.8524],[16.0117,46.6836],[15.1371,46.6587],[14.6325,46.4318],[13.8065,46.5093],[12.3765,46.7676],[12.1531,47.1154],[11.1648,46.9416],[11.0486,46.7514],[10.4427,46.8935],[9.9324,46.9207],[9.48,47.1028],[9.6329,47.3476],[9.5942,47.5251],[9.8961,47.5802],[10.4021,47.3025],[10.5445,47.5664],[11.4264,47.5238],[12.1414,47.7031],[12.6208,47.6724],[12.9326,47.4676],[13.0259,47.6376],[12.8841,48.2891],[13.2434,48.4161],[13.5959,48.8772],[14.3389,48.5553],[14.9014,48.9644],[15.2534,49.0391],[16.0296,48.7339],[16.4993,48.7858],[16.9603,48.597],[16.88,48.47],[16.9797,48.1235]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Austria","sov_a3":"AUT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Austria","adm0_a3":"AUT","geou_dif":0,"geounit":"Austria","gu_a3":"AUT","su_dif":0,"subunit":"Austria","su_a3":"AUT","brk_diff":0,"name":"Austria","name_long":"Austria","brk_a3":"AUT","brk_name":"Austria","brk_group":"","abbrev":"Aust.","postal":"A","formal_en":"Republic of Austria","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Austria","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":3,"mapcolor13":4,"pop_est":8210281,"gdp_md_est":329500,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"AT","iso_a3":"AUT","iso_n3":"040","un_a3":"040","wb_a2":"AT","wb_a3":"AUT","woe_id":-99,"adm0_a3_is":"AUT","adm0_a3_us":"AUT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[45.002,39.74],[45.2981,39.4718],[45.74,39.474],[45.7354,39.3197],[46.1436,38.7412],[45.4577,38.8741],[44.9527,39.3358],[44.794,39.713],[45.002,39.74]],[[47.3733,41.2197],[47.8157,41.1514],[47.9873,41.4058],[48.5844,41.8089],[49.1103,41.2823],[49.6189,40.5729],[50.0848,40.5262],[50.3928,40.2566],[49.5692,40.1761],[49.3953,39.3995],[49.2232,39.0492],[48.8565,38.8155],[48.8832,38.3202],[48.6344,38.2704],[48.0107,38.794],[48.3555,39.2888],[48.0601,39.5822],[47.6851,39.5084],[46.5057,38.7706],[46.4835,39.4642],[46.0345,39.628],[45.61,39.9],[45.8919,40.2185],[45.3592,40.5615],[45.5604,40.8123],[45.1795,40.9854],[44.9725,41.2481],[45.2174,41.4115],[45.9626,41.1239],[46.5016,41.0644],[46.6379,41.1817],[46.1454,41.7228],[46.405,41.8607],[46.6861,41.8271],[47.3733,41.2197]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Azerbaijan","sov_a3":"AZE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Azerbaijan","adm0_a3":"AZE","geou_dif":0,"geounit":"Azerbaijan","gu_a3":"AZE","su_dif":0,"subunit":"Azerbaijan","su_a3":"AZE","brk_diff":0,"name":"Azerbaijan","name_long":"Azerbaijan","brk_a3":"AZE","brk_name":"Azerbaijan","brk_group":"","abbrev":"Aze.","postal":"AZ","formal_en":"Republic of Azerbaijan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Azerbaijan","name_alt":"","mapcolor7":1,"mapcolor8":6,"mapcolor9":5,"mapcolor13":8,"pop_est":8238672,"gdp_md_est":77610,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"AZ","iso_a3":"AZE","iso_n3":"031","un_a3":"031","wb_a2":"AZ","wb_a3":"AZE","woe_id":-99,"adm0_a3_is":"AZE","adm0_a3_us":"AZE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[29.34,-4.5],[29.2764,-3.2939],[29.0249,-2.8393],[29.6322,-2.9179],[29.9384,-2.3485],[30.4697,-2.4139],[30.5277,-2.8076],[30.743,-3.0343],[30.7523,-3.3593],[30.5056,-3.5686],[30.1163,-4.0901],[29.7535,-4.4524],[29.34,-4.5]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Burundi","sov_a3":"BDI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Burundi","adm0_a3":"BDI","geou_dif":0,"geounit":"Burundi","gu_a3":"BDI","su_dif":0,"subunit":"Burundi","su_a3":"BDI","brk_diff":0,"name":"Burundi","name_long":"Burundi","brk_a3":"BDI","brk_name":"Burundi","brk_group":"","abbrev":"Bur.","postal":"BI","formal_en":"Republic of Burundi","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Burundi","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":5,"mapcolor13":8,"pop_est":8988091,"gdp_md_est":3102,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"BI","iso_a3":"BDI","iso_n3":"108","un_a3":"108","wb_a2":"BI","wb_a3":"BDI","woe_id":-99,"adm0_a3_is":"BDI","adm0_a3_us":"BDI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[3.315,51.3458],[4.0471,51.2673],[4.974,51.475],[5.607,51.0373],[6.1567,50.8037],[6.0431,50.1281],[5.7824,50.0903],[5.6741,49.5295],[4.7992,49.9854],[4.286,49.9075],[3.5882,50.379],[3.1233,50.7804],[2.6584,50.7968],[2.5136,51.1485],[3.315,51.3458]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Belgium","sov_a3":"BEL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Belgium","adm0_a3":"BEL","geou_dif":0,"geounit":"Belgium","gu_a3":"BEL","su_dif":0,"subunit":"Belgium","su_a3":"BEL","brk_diff":0,"name":"Belgium","name_long":"Belgium","brk_a3":"BEL","brk_name":"Belgium","brk_group":"","abbrev":"Belg.","postal":"B","formal_en":"Kingdom of Belgium","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Belgium","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":1,"mapcolor13":8,"pop_est":10414336,"gdp_md_est":389300,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"BE","iso_a3":"BEL","iso_n3":"056","un_a3":"056","wb_a2":"BE","wb_a3":"BEL","woe_id":-99,"adm0_a3_is":"BEL","adm0_a3_us":"BEL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[2.6917,6.2588],[1.8652,6.1422],[1.619,6.832],[1.6645,9.1286],[1.463,9.3346],[1.4251,9.8254],[1.0778,10.1756],[0.7723,10.4708],[0.8996,10.9973],[1.2435,11.1105],[1.4472,11.5477],[1.936,11.6412],[2.1545,11.9402],[2.4902,12.2331],[2.8486,12.2356],[3.6112,11.6602],[3.5722,11.3279],[3.7971,10.7347],[3.6001,10.3322],[3.7054,10.0632],[3.2204,9.4442],[2.9123,9.1376],[2.7238,8.5068],[2.7491,7.8707],[2.6917,6.2588]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Benin","sov_a3":"BEN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Benin","adm0_a3":"BEN","geou_dif":0,"geounit":"Benin","gu_a3":"BEN","su_dif":0,"subunit":"Benin","su_a3":"BEN","brk_diff":0,"name":"Benin","name_long":"Benin","brk_a3":"BEN","brk_name":"Benin","brk_group":"","abbrev":"Benin","postal":"BJ","formal_en":"Republic of Benin","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Benin","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":2,"mapcolor13":12,"pop_est":8791832,"gdp_md_est":12830,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"BJ","iso_a3":"BEN","iso_n3":"204","un_a3":"204","wb_a2":"BJ","wb_a3":"BEN","woe_id":-99,"adm0_a3_is":"BEN","adm0_a3_us":"BEN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-2.8275,9.6425],[-3.5119,9.9003],[-3.9804,9.8623],[-4.3302,9.6108],[-4.7799,9.822],[-4.9547,10.1527],[-5.4043,10.3707],[-5.4706,10.9513],[-5.1978,11.3751],[-5.2209,11.7139],[-4.4272,12.5426],[-4.2804,13.2284],[-4.0064,13.4725],[-3.5228,13.3377],[-3.1037,13.5413],[-2.9677,13.7982],[-2.1918,14.2464],[-2.001,14.559],[-1.0664,14.9738],[-0.5159,15.1162],[-0.2663,14.9243],[0.3749,14.9289],[0.2956,14.4442],[0.4299,13.9887],[0.993,13.3357],[1.0241,12.8518],[2.1771,12.625],[2.1545,11.9402],[1.936,11.6412],[1.4472,11.5477],[1.2435,11.1105],[0.8996,10.9973],[0.0238,11.0187],[-0.4387,11.0983],[-0.7616,10.9369],[-1.2034,11.0098],[-2.9404,10.9627],[-2.9639,10.3953],[-2.8275,9.6425]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Burkina Faso","sov_a3":"BFA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Burkina Faso","adm0_a3":"BFA","geou_dif":0,"geounit":"Burkina Faso","gu_a3":"BFA","su_dif":0,"subunit":"Burkina Faso","su_a3":"BFA","brk_diff":0,"name":"Burkina Faso","name_long":"Burkina Faso","brk_a3":"BFA","brk_name":"Burkina Faso","brk_group":"","abbrev":"B.F.","postal":"BF","formal_en":"Burkina Faso","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Burkina Faso","name_alt":"","mapcolor7":2,"mapcolor8":1,"mapcolor9":5,"mapcolor13":11,"pop_est":15746232,"gdp_md_est":17820,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"BF","iso_a3":"BFA","iso_n3":"854","un_a3":"854","wb_a2":"BF","wb_a3":"BFA","woe_id":-99,"adm0_a3_is":"BFA","adm0_a3_us":"BFA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":12,"long_len":12,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[92.6727,22.0412],[92.6523,21.324],[92.3032,21.4755],[92.3686,20.6709],[92.0829,21.1922],[92.0252,21.7016],[91.8349,22.1829],[91.4171,22.765],[90.496,22.805],[90.587,22.3928],[90.273,21.8364],[89.8475,22.0391],[89.702,21.8571],[89.4189,21.9662],[89.032,22.0557],[88.8763,22.8791],[88.5298,23.6311],[88.6999,24.2337],[88.0844,24.5017],[88.3064,24.8661],[88.9316,25.2387],[88.2098,25.7681],[88.563,26.4465],[89.3551,26.0144],[89.8325,25.9651],[89.9207,25.2697],[90.8722,25.1326],[91.7996,25.1474],[92.3762,24.9767],[91.9151,24.1304],[91.4677,24.0726],[91.159,23.5035],[91.7065,22.9853],[91.8699,23.6243],[92.146,23.6275],[92.6727,22.0412]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Bangladesh","sov_a3":"BGD","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bangladesh","adm0_a3":"BGD","geou_dif":0,"geounit":"Bangladesh","gu_a3":"BGD","su_dif":0,"subunit":"Bangladesh","su_a3":"BGD","brk_diff":0,"name":"Bangladesh","name_long":"Bangladesh","brk_a3":"BGD","brk_name":"Bangladesh","brk_group":"","abbrev":"Bang.","postal":"BD","formal_en":"People's Republic of Bangladesh","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bangladesh","name_alt":"","mapcolor7":3,"mapcolor8":4,"mapcolor9":7,"mapcolor13":7,"pop_est":156050883,"gdp_md_est":224000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"BD","iso_a3":"BGD","iso_n3":"050","un_a3":"050","wb_a2":"BD","wb_a3":"BGD","woe_id":-99,"adm0_a3_is":"BGD","adm0_a3_us":"BGD","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":10,"long_len":10,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[22.6571,44.2349],[22.9448,43.8238],[23.3323,43.897],[24.1007,43.7411],[25.5693,43.6884],[26.0652,43.9435],[27.2424,44.176],[27.9701,43.8125],[28.5581,43.7075],[28.0391,43.2932],[27.6739,42.5779],[27.9967,42.0074],[27.1357,42.1415],[26.117,41.8269],[26.1061,41.3289],[25.1972,41.2345],[24.4926,41.5839],[23.6921,41.3091],[22.9524,41.338],[22.8814,41.9993],[22.3805,42.3203],[22.545,42.4614],[22.4366,42.5803],[22.6048,42.8985],[22.986,43.2112],[22.5002,43.6428],[22.4104,44.0081],[22.6571,44.2349]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Bulgaria","sov_a3":"BGR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bulgaria","adm0_a3":"BGR","geou_dif":0,"geounit":"Bulgaria","gu_a3":"BGR","su_dif":0,"subunit":"Bulgaria","su_a3":"BGR","brk_diff":0,"name":"Bulgaria","name_long":"Bulgaria","brk_a3":"BGR","brk_name":"Bulgaria","brk_group":"","abbrev":"Bulg.","postal":"BG","formal_en":"Republic of Bulgaria","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bulgaria","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":1,"mapcolor13":8,"pop_est":7204687,"gdp_md_est":93750,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"BG","iso_a3":"BGR","iso_n3":"100","un_a3":"100","wb_a2":"BG","wb_a3":"BGR","woe_id":-99,"adm0_a3_is":"BGR","adm0_a3_us":"BGR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-77.5347,23.7597],[-77.78,23.71],[-78.0341,24.2862],[-78.4085,24.5756],[-78.1909,25.2103],[-77.89,25.17],[-77.54,24.34],[-77.5347,23.7597]],[[-77.82,26.58],[-78.91,26.42],[-78.98,26.79],[-78.51,26.87],[-77.85,26.84],[-77.82,26.58]],[[-77,26.59],[-77.1725,25.8792],[-77.3564,26.0073],[-77.34,26.53],[-77.788,26.9252],[-77.79,27.04],[-77,26.59]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"The Bahamas","sov_a3":"BHS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"The Bahamas","adm0_a3":"BHS","geou_dif":0,"geounit":"The Bahamas","gu_a3":"BHS","su_dif":0,"subunit":"The Bahamas","su_a3":"BHS","brk_diff":0,"name":"Bahamas","name_long":"Bahamas","brk_a3":"BHS","brk_name":"Bahamas","brk_group":"","abbrev":"Bhs.","postal":"BS","formal_en":"Commonwealth of the Bahamas","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bahamas, The","name_alt":"","mapcolor7":1,"mapcolor8":1,"mapcolor9":2,"mapcolor13":5,"pop_est":309156,"gdp_md_est":9093,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"BS","iso_a3":"BHS","iso_n3":"044","un_a3":"044","wb_a2":"BS","wb_a3":"BHS","woe_id":-99,"adm0_a3_is":"BHS","adm0_a3_us":"BHS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[19.0055,44.8602],[19.368,44.863],[19.1176,44.4231],[19.5998,44.0385],[19.454,43.5681],[19.2185,43.5238],[19.0317,43.4325],[18.7065,43.2001],[18.56,42.65],[17.6749,43.0286],[17.2974,43.4463],[16.9162,43.6677],[16.4564,44.0412],[16.2397,44.3511],[15.75,44.8187],[15.9594,45.2338],[16.3182,45.0041],[16.5349,45.2116],[17.0021,45.2338],[17.8618,45.0677],[18.5532,45.0816],[19.0055,44.8602]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Bosnia and Herzegovina","sov_a3":"BIH","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bosnia and Herzegovina","adm0_a3":"BIH","geou_dif":0,"geounit":"Bosnia and Herzegovina","gu_a3":"BIH","su_dif":0,"subunit":"Bosnia and Herzegovina","su_a3":"BIH","brk_diff":0,"name":"Bosnia and Herz.","name_long":"Bosnia and Herzegovina","brk_a3":"BIH","brk_name":"Bosnia and Herz.","brk_group":"","abbrev":"B.H.","postal":"BiH","formal_en":"Bosnia and Herzegovina","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bosnia and Herzegovina","name_alt":"","mapcolor7":1,"mapcolor8":1,"mapcolor9":1,"mapcolor13":2,"pop_est":4613414,"gdp_md_est":29700,"pop_year":-99,"lastcensus":1991,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"BA","iso_a3":"BIH","iso_n3":"070","un_a3":"070","wb_a2":"BA","wb_a3":"BIH","woe_id":-99,"adm0_a3_is":"BIH","adm0_a3_us":"BIH","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":16,"long_len":22,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[23.4841,53.9125],[24.4507,53.9057],[25.5364,54.2824],[25.7684,54.847],[26.5883,55.1672],[26.4943,55.6151],[27.1025,55.7833],[28.1767,56.1691],[29.2295,55.9183],[29.3716,55.6701],[29.8963,55.7895],[30.8739,55.551],[30.9718,55.0815],[30.7575,54.8118],[31.3845,54.1571],[31.7914,53.9746],[31.7313,53.794],[32.4056,53.618],[32.6936,53.3514],[32.3045,53.1327],[31.4976,53.1674],[31.3052,53.074],[31.54,52.7421],[31.786,52.1017],[30.9275,52.0424],[30.6195,51.8228],[30.5551,51.3195],[30.1574,51.4161],[29.2549,51.3682],[28.9928,51.602],[28.6176,51.4277],[28.2416,51.5722],[27.4541,51.5923],[26.338,51.8323],[25.3278,51.9107],[24.5531,51.8885],[24.0051,51.6174],[23.5271,51.5785],[23.508,52.0236],[23.1995,52.487],[23.7992,52.6911],[23.8049,53.0897],[23.5275,53.4701],[23.4841,53.9125]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Belarus","sov_a3":"BLR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Belarus","adm0_a3":"BLR","geou_dif":0,"geounit":"Belarus","gu_a3":"BLR","su_dif":0,"subunit":"Belarus","su_a3":"BLR","brk_diff":0,"name":"Belarus","name_long":"Belarus","brk_a3":"BLR","brk_name":"Belarus","brk_group":"","abbrev":"Bela.","postal":"BY","formal_en":"Republic of Belarus","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Belarus","name_alt":"","mapcolor7":1,"mapcolor8":1,"mapcolor9":5,"mapcolor13":11,"pop_est":9648533,"gdp_md_est":114100,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"BY","iso_a3":"BLR","iso_n3":"112","un_a3":"112","wb_a2":"BY","wb_a3":"BLR","woe_id":-99,"adm0_a3_is":"BLR","adm0_a3_us":"BLR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-89.1431,17.8083],[-89.1509,17.9555],[-89.0299,18.0015],[-88.8483,17.8832],[-88.4901,18.4868],[-88.3,18.5],[-88.2963,18.3533],[-88.1068,18.3487],[-88.1235,18.0767],[-88.2854,17.6441],[-88.1979,17.4895],[-88.3026,17.1317],[-88.2395,17.0361],[-88.3554,16.5308],[-88.5518,16.2655],[-88.7324,16.2336],[-88.9306,15.8873],[-89.2291,15.8869],[-89.1508,17.0156],[-89.1431,17.8083]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Belize","sov_a3":"BLZ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Belize","adm0_a3":"BLZ","geou_dif":0,"geounit":"Belize","gu_a3":"BLZ","su_dif":0,"subunit":"Belize","su_a3":"BLZ","brk_diff":0,"name":"Belize","name_long":"Belize","brk_a3":"BLZ","brk_name":"Belize","brk_group":"","abbrev":"Belize","postal":"BZ","formal_en":"Belize","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Belize","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":5,"mapcolor13":7,"pop_est":307899,"gdp_md_est":2536,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"BZ","iso_a3":"BLZ","iso_n3":"084","un_a3":"084","wb_a2":"BZ","wb_a3":"BLZ","woe_id":-99,"adm0_a3_is":"BLZ","adm0_a3_us":"BLZ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-62.8465,-22.035],[-63.9868,-21.9936],[-64.377,-22.7981],[-64.9649,-22.0759],[-66.2733,-21.8323],[-67.1067,-22.7359],[-67.8282,-22.8729],[-68.2199,-21.4943],[-68.7572,-20.3727],[-68.4422,-19.4051],[-68.9668,-18.9817],[-69.1002,-18.2601],[-69.5904,-17.58],[-68.9596,-16.5007],[-69.3898,-15.6601],[-69.1603,-15.324],[-69.3395,-14.9532],[-68.9489,-14.4536],[-68.9292,-13.6027],[-68.8801,-12.8997],[-68.6651,-12.5613],[-69.5297,-10.9517],[-68.7862,-11.0364],[-68.2713,-11.0145],[-68.0482,-10.7121],[-67.1738,-10.3068],[-66.6469,-9.9313],[-65.3384,-9.762],[-65.4448,-10.5115],[-65.3219,-10.8959],[-65.4023,-11.5663],[-64.3164,-12.462],[-63.1965,-12.627],[-62.8031,-13.0007],[-62.1271,-13.1988],[-61.7132,-13.4892],[-61.0841,-13.4794],[-60.5033,-13.776],[-60.4592,-14.354],[-60.2643,-14.646],[-60.2511,-15.0772],[-60.543,-15.0939],[-60.1584,-16.2583],[-58.2412,-16.2996],[-58.3881,-16.8771],[-58.2808,-17.2717],[-57.7346,-17.5525],[-57.4984,-18.1742],[-57.676,-18.9618],[-57.95,-19.4],[-57.8538,-19.97],[-58.1664,-20.1767],[-58.1835,-19.8684],[-59.115,-19.3569],[-60.0436,-19.3427],[-61.7863,-19.6337],[-62.266,-20.5137],[-62.2912,-21.0516],[-62.6851,-22.249],[-62.8465,-22.035]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Bolivia","sov_a3":"BOL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bolivia","adm0_a3":"BOL","geou_dif":0,"geounit":"Bolivia","gu_a3":"BOL","su_dif":0,"subunit":"Bolivia","su_a3":"BOL","brk_diff":0,"name":"Bolivia","name_long":"Bolivia","brk_a3":"BOL","brk_name":"Bolivia","brk_group":"","abbrev":"Bolivia","postal":"BO","formal_en":"Plurinational State of Bolivia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bolivia","name_alt":"","mapcolor7":1,"mapcolor8":5,"mapcolor9":2,"mapcolor13":3,"pop_est":9775246,"gdp_md_est":43270,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"BO","iso_a3":"BOL","iso_n3":"068","un_a3":"068","wb_a2":"BO","wb_a3":"BOL","woe_id":-99,"adm0_a3_is":"BOL","adm0_a3_us":"BOL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":7,"long_len":7,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-57.6251,-30.2163],[-56.2909,-28.8528],[-55.1623,-27.8819],[-54.4907,-27.4748],[-53.6487,-26.9235],[-53.6283,-26.1249],[-54.13,-25.5476],[-54.6253,-25.7393],[-54.4289,-25.1622],[-54.2935,-24.5708],[-54.293,-24.021],[-54.6528,-23.8396],[-55.0279,-24.0013],[-55.4007,-23.9569],[-55.5176,-23.572],[-55.6107,-22.6556],[-55.798,-22.3569],[-56.4733,-22.0863],[-56.8815,-22.2822],[-57.9372,-22.0902],[-57.8707,-20.7327],[-58.1664,-20.1767],[-57.8538,-19.97],[-57.95,-19.4],[-57.676,-18.9618],[-57.4984,-18.1742],[-57.7346,-17.5525],[-58.2808,-17.2717],[-58.3881,-16.8771],[-58.2412,-16.2996],[-60.1584,-16.2583],[-60.543,-15.0939],[-60.2511,-15.0772],[-60.2643,-14.646],[-60.4592,-14.354],[-60.5033,-13.776],[-61.0841,-13.4794],[-61.7132,-13.4892],[-62.1271,-13.1988],[-62.8031,-13.0007],[-63.1965,-12.627],[-64.3164,-12.462],[-65.4023,-11.5663],[-65.3219,-10.8959],[-65.4448,-10.5115],[-65.3384,-9.762],[-66.6469,-9.9313],[-67.1738,-10.3068],[-68.0482,-10.7121],[-68.2713,-11.0145],[-68.7862,-11.0364],[-69.5297,-10.9517],[-70.0938,-11.124],[-70.5487,-11.0091],[-70.4819,-9.4901],[-71.3024,-10.0794],[-72.1849,-10.0536],[-72.563,-9.5202],[-73.2267,-9.4622],[-73.0154,-9.0328],[-73.5711,-8.4244],[-73.9872,-7.5238],[-73.7234,-7.341],[-73.7245,-6.9186],[-73.12,-6.6299],[-73.2197,-6.0892],[-72.9645,-5.7413],[-72.8919,-5.2746],[-71.7484,-4.594],[-70.9288,-4.4016],[-70.7948,-4.2513],[-69.8936,-4.2982],[-69.4441,-1.5563],[-69.4205,-1.1226],[-69.5771,-0.55],[-70.0207,-0.1852],[-70.0156,0.5414],[-69.4524,0.7062],[-69.2524,0.6027],[-69.2186,0.9857],[-69.8046,1.0891],[-69.817,1.7148],[-67.8686,1.6925],[-67.5378,2.0372],[-67.26,1.72],[-67.065,1.1301],[-66.8763,1.2534],[-66.3258,0.7245],[-65.5483,0.7893],[-65.3547,1.0953],[-64.611,1.3287],[-64.1993,1.4929],[-64.0831,1.9164],[-63.3688,2.2009],[-63.4229,2.4111],[-64.27,2.497],[-64.4088,3.1268],[-64.3685,3.7972],[-64.8161,4.0564],[-64.6287,4.1485],[-63.8883,4.0205],[-63.0932,3.7706],[-62.8045,4.007],[-62.0854,4.1621],[-60.9669,4.5365],[-60.6012,4.9181],[-60.7336,5.2003],[-60.2137,5.2445],[-59.981,5.0141],[-60.111,4.575],[-59.7674,4.4235],[-59.538,3.9588],[-59.8154,3.6065],[-59.9745,2.7552],[-59.7185,2.2496],[-59.646,1.7869],[-59.0309,1.3177],[-58.54,1.2681],[-58.4295,1.4639],[-58.1134,1.5072],[-57.661,1.6826],[-57.3358,1.9485],[-56.7827,1.8637],[-56.5394,1.8995],[-55.9957,1.8177],[-55.9056,2.022],[-56.0733,2.2208],[-55.9733,2.5104],[-55.5698,2.4215],[-55.0976,2.5237],[-54.5248,2.3118],[-54.0881,2.1056],[-53.7785,2.3767],[-53.5548,2.3349],[-53.4185,2.0534],[-52.9397,2.1249],[-52.5564,2.5047],[-52.2493,3.2411],[-51.6578,4.1562],[-51.3171,4.2035],[-51.0698,3.6504],[-50.5089,1.9016],[-49.9741,1.7365],[-49.9471,1.0462],[-50.6993,0.223],[-50.3882,-0.0784],[-48.6206,-0.2355],[-48.5845,-1.2378],[-47.825,-0.5816],[-46.5666,-0.941],[-44.9057,-1.5517],[-44.4176,-2.1378],[-44.5816,-2.6913],[-43.4188,-2.3831],[-41.4727,-2.912],[-39.9787,-2.8731],[-38.5004,-3.7007],[-37.2233,-4.8209],[-36.4529,-5.1094],[-35.5978,-5.1495],[-35.2354,-5.4649],[-34.896,-6.7382],[-34.73,-7.3432],[-35.1282,-8.9964],[-35.637,-9.6493],[-37.0465,-11.0407],[-37.6836,-12.1712],[-38.4239,-13.0381],[-38.6739,-13.0577],[-38.9533,-13.7934],[-38.8823,-15.6671],[-39.1611,-17.2084],[-39.2673,-17.8677],[-39.5835,-18.2623],[-39.7608,-19.5991],[-40.7747,-20.9045],[-40.9448,-21.9373],[-41.7542,-22.3707],[-41.9883,-22.9701],[-43.0747,-22.9677],[-44.6478,-23.352],[-45.3521,-23.7968],[-46.4721,-24.089],[-47.649,-24.8852],[-48.4955,-25.877],[-48.641,-26.6237],[-48.4747,-27.1759],[-48.6615,-28.1861],[-48.8885,-28.6741],[-49.5873,-29.2245],[-50.6969,-30.9845],[-51.5762,-31.7777],[-52.2561,-32.2454],[-52.7121,-33.1966],[-53.3737,-33.7684],[-53.6505,-33.202],[-53.2096,-32.7277],[-53.788,-32.0472],[-54.5725,-31.4945],[-55.6015,-30.8539],[-55.9732,-30.8831],[-56.976,-30.1097],[-57.6251,-30.2163]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Brazil","sov_a3":"BRA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Brazil","adm0_a3":"BRA","geou_dif":0,"geounit":"Brazil","gu_a3":"BRA","su_dif":0,"subunit":"Brazil","su_a3":"BRA","brk_diff":0,"name":"Brazil","name_long":"Brazil","brk_a3":"BRA","brk_name":"Brazil","brk_group":"","abbrev":"Brazil","postal":"BR","formal_en":"Federative Republic of Brazil","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Brazil","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":5,"mapcolor13":7,"pop_est":198739269,"gdp_md_est":1993000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"3. Emerging region: BRIC","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"BR","iso_a3":"BRA","iso_n3":"076","un_a3":"076","wb_a2":"BR","wb_a3":"BRA","woe_id":-99,"adm0_a3_is":"BRA","adm0_a3_us":"BRA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[114.204,4.5259],[114.6,4.9],[115.4507,5.4477],[115.4057,4.9552],[115.3475,4.3166],[114.8696,4.3483],[114.6596,4.0076],[114.204,4.5259]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Brunei","sov_a3":"BRN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Brunei","adm0_a3":"BRN","geou_dif":0,"geounit":"Brunei","gu_a3":"BRN","su_dif":0,"subunit":"Brunei","su_a3":"BRN","brk_diff":0,"name":"Brunei","name_long":"Brunei Darussalam","brk_a3":"BRN","brk_name":"Brunei","brk_group":"","abbrev":"Brunei","postal":"BN","formal_en":"Negara Brunei Darussalam","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Brunei","name_alt":"","mapcolor7":4,"mapcolor8":6,"mapcolor9":6,"mapcolor13":12,"pop_est":388190,"gdp_md_est":20250,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"BN","iso_a3":"BRN","iso_n3":"096","un_a3":"096","wb_a2":"BN","wb_a3":"BRN","woe_id":-99,"adm0_a3_is":"BRN","adm0_a3_us":"BRN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":6,"long_len":17,"abbrev_len":6,"tiny":2,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[91.6967,27.7717],[92.1037,27.4526],[92.0335,26.8383],[91.2175,26.8086],[90.3733,26.8757],[89.7445,26.7194],[88.8356,27.099],[88.8142,27.2993],[89.4758,28.0428],[90.0158,28.2964],[90.7305,28.065],[91.2589,28.0406],[91.6967,27.7717]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Bhutan","sov_a3":"BTN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Bhutan","adm0_a3":"BTN","geou_dif":0,"geounit":"Bhutan","gu_a3":"BTN","su_dif":0,"subunit":"Bhutan","su_a3":"BTN","brk_diff":0,"name":"Bhutan","name_long":"Bhutan","brk_a3":"BTN","brk_name":"Bhutan","brk_group":"","abbrev":"Bhutan","postal":"BT","formal_en":"Kingdom of Bhutan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Bhutan","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":1,"mapcolor13":8,"pop_est":691141,"gdp_md_est":3524,"pop_year":-99,"lastcensus":2005,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"BT","iso_a3":"BTN","iso_n3":"064","un_a3":"064","wb_a2":"BT","wb_a3":"BTN","woe_id":-99,"adm0_a3_is":"BTN","adm0_a3_us":"BTN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[25.6492,-18.536],[25.8504,-18.7144],[26.1648,-19.2931],[27.2965,-20.3915],[27.7247,-20.4991],[27.7272,-20.8518],[28.0214,-21.486],[28.7947,-21.6395],[29.4322,-22.0913],[28.0172,-22.8278],[27.1194,-23.5743],[26.7864,-24.2407],[26.4858,-24.6163],[25.9417,-24.6964],[25.7658,-25.1748],[25.6647,-25.4868],[25.0252,-25.7197],[24.2113,-25.6702],[23.7336,-25.3901],[23.3121,-25.2687],[22.8243,-25.5005],[22.5795,-25.9794],[22.106,-26.2803],[21.6059,-26.7265],[20.8896,-26.8285],[20.6665,-26.4775],[20.7586,-25.8681],[20.1657,-24.918],[19.8958,-24.7678],[19.8955,-21.8492],[20.8811,-21.8143],[20.9106,-18.2522],[21.655,-18.2191],[23.1969,-17.869],[23.579,-18.2813],[24.2174,-17.8893],[24.5207,-17.8871],[25.0844,-17.6618],[25.2642,-17.7365],[25.6492,-18.536]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Botswana","sov_a3":"BWA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Botswana","adm0_a3":"BWA","geou_dif":0,"geounit":"Botswana","gu_a3":"BWA","su_dif":0,"subunit":"Botswana","su_a3":"BWA","brk_diff":0,"name":"Botswana","name_long":"Botswana","brk_a3":"BWA","brk_name":"Botswana","brk_group":"","abbrev":"Bwa.","postal":"BW","formal_en":"Republic of Botswana","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Botswana","name_alt":"","mapcolor7":6,"mapcolor8":5,"mapcolor9":7,"mapcolor13":3,"pop_est":1990876,"gdp_md_est":27060,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"BW","iso_a3":"BWA","iso_n3":"072","un_a3":"072","wb_a2":"BW","wb_a3":"BWA","woe_id":-99,"adm0_a3_is":"BWA","adm0_a3_us":"BWA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Southern Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[15.2795,7.4219],[16.1062,7.4971],[16.2906,7.7543],[16.4562,7.7348],[16.706,7.5083],[17.9649,7.8909],[18.3896,8.2813],[18.911,8.6309],[18.812,8.9829],[19.094,9.0748],[20.0597,9.0127],[21.0009,9.476],[21.7238,10.5671],[22.2311,10.9719],[22.8642,11.1424],[22.9775,10.7145],[23.5543,10.0893],[23.5572,9.6812],[23.3948,9.2651],[23.459,8.9543],[23.8058,8.6663],[24.5674,8.2292],[25.1149,7.8251],[25.1241,7.5001],[25.7966,6.9793],[26.2134,6.5466],[26.4659,5.9467],[27.2134,5.551],[27.3742,5.2339],[27.0441,5.1279],[26.4028,5.1509],[25.6505,5.2561],[25.2788,5.1704],[25.1288,4.9272],[24.805,4.8972],[24.4105,5.1088],[23.2972,4.6097],[22.8415,4.7101],[22.7041,4.6331],[22.4051,4.0292],[21.6591,4.2243],[20.9276,4.3228],[20.2907,4.6917],[19.4678,5.0315],[18.9323,4.7095],[18.543,4.2018],[18.4531,3.5044],[17.8099,3.5602],[17.133,3.7282],[16.5371,3.1983],[16.0129,2.2676],[15.9074,2.5574],[15.8627,3.0135],[15.4054,3.3353],[15.0362,3.8514],[14.951,4.2104],[14.4784,4.7326],[14.5589,5.0306],[14.4594,5.4518],[14.5366,6.227],[14.7765,6.4085],[15.2795,7.4219]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Central African Republic","sov_a3":"CAF","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Central African Republic","adm0_a3":"CAF","geou_dif":0,"geounit":"Central African Republic","gu_a3":"CAF","su_dif":0,"subunit":"Central African Republic","su_a3":"CAF","brk_diff":0,"name":"Central African Rep.","name_long":"Central African Republic","brk_a3":"CAF","brk_name":"Central African Rep.","brk_group":"","abbrev":"C.A.R.","postal":"CF","formal_en":"Central African Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Central African Republic","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":6,"mapcolor13":9,"pop_est":4511488,"gdp_md_est":3198,"pop_year":-99,"lastcensus":2003,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"CF","iso_a3":"CAF","iso_n3":"140","un_a3":"140","wb_a2":"CF","wb_a3":"CAF","woe_id":-99,"adm0_a3_is":"CAF","adm0_a3_us":"CAF","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":20,"long_len":24,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-63.6645,46.55],[-62.9393,46.4159],[-62.0121,46.4431],[-62.5039,46.0334],[-62.8743,45.9682],[-64.1428,46.3927],[-64.3926,46.7275],[-64.0149,47.036],[-63.6645,46.55]],[[-61.8063,49.1051],[-62.2932,49.0872],[-63.5893,49.4007],[-64.5191,49.873],[-64.1732,49.9572],[-62.8583,49.7064],[-61.8356,49.2885],[-61.8063,49.1051]],[[-123.51,48.51],[-124.0129,48.3708],[-125.655,48.825],[-125.955,49.18],[-126.85,49.53],[-127.03,49.815],[-128.0593,49.995],[-128.4446,50.5391],[-128.3584,50.7706],[-127.3086,50.5526],[-126.695,50.4009],[-125.755,50.295],[-125.415,49.95],[-124.9208,49.4753],[-123.9225,49.0625],[-123.51,48.51]],[[-56.134,50.687],[-56.7959,49.8123],[-56.1431,50.1501],[-55.4715,49.9358],[-55.8224,49.5871],[-54.9351,49.313],[-54.4738,49.5567],[-53.4765,49.2491],[-53.786,48.5168],[-53.0861,48.6878],[-52.9586,48.1572],[-52.6481,47.5355],[-53.0692,46.6555],[-53.5215,46.6183],[-54.1789,46.8071],[-53.9619,47.6252],[-54.2405,47.7523],[-55.4008,46.885],[-55.9975,46.9197],[-55.2912,47.3896],[-56.2508,47.6325],[-57.3252,47.5728],[-59.266,47.6033],[-59.4195,47.8995],[-58.7966,48.2515],[-59.2316,48.5232],[-58.3918,49.1256],[-57.3587,50.7183],[-56.7387,51.2874],[-55.871,51.6321],[-55.407,51.5883],[-55.6002,51.3171],[-56.134,50.687]],[[-133.18,54.17],[-132.71,54.04],[-131.75,54.12],[-132.0495,52.9846],[-131.179,52.1804],[-131.5778,52.1824],[-132.1804,52.6397],[-132.55,53.1],[-133.0546,53.4115],[-133.2397,53.8511],[-133.18,54.17]],[[-79.2658,62.1587],[-79.6575,61.6331],[-80.0996,61.7181],[-80.3622,62.0165],[-80.3154,62.0856],[-79.9294,62.3856],[-79.52,62.3637],[-79.2658,62.1587]],[[-81.8982,62.7108],[-83.0686,62.1592],[-83.7746,62.1823],[-83.9937,62.4528],[-83.2505,62.9141],[-81.877,62.9046],[-81.8982,62.7108]],[[-85.1613,65.6573],[-84.9758,65.2175],[-84.464,65.3718],[-83.8826,65.1096],[-82.7876,64.7667],[-81.642,64.4551],[-81.5534,63.9796],[-80.8174,64.0575],[-80.1035,63.726],[-80.991,63.4112],[-82.5472,63.6517],[-83.1088,64.1019],[-84.1004,63.5697],[-85.5234,63.0524],[-85.8668,63.6373],[-87.222,63.5412],[-86.3528,64.0358],[-86.2249,64.8229],[-85.8838,65.7388],[-85.1613,65.6573]],[[-75.8659,67.1489],[-76.9869,67.0987],[-77.2364,67.5881],[-76.8117,68.1486],[-75.8952,68.2872],[-75.1145,68.0104],[-75.1033,67.582],[-75.216,67.4442],[-75.8659,67.1489]],[[-95.6477,69.1077],[-96.2695,68.757],[-97.6174,69.06],[-98.4318,68.9507],[-99.7974,69.4],[-98.9174,69.71],[-98.2183,70.1435],[-97.1574,69.86],[-96.5574,69.68],[-96.2574,69.49],[-95.6477,69.1077]],[[-90.5471,69.4977],[-90.5515,68.475],[-89.2151,69.2587],[-88.0197,68.6151],[-88.3175,67.8734],[-87.3502,67.1987],[-86.3061,67.9215],[-85.5766,68.7846],[-85.522,69.8821],[-84.1008,69.8054],[-82.6226,69.6583],[-81.2804,69.162],[-81.2202,68.6657],[-81.9644,68.1325],[-81.2593,67.5972],[-81.3865,67.1108],[-83.3446,66.4115],[-84.7354,66.2573],[-85.7694,66.5583],[-86.0676,66.0563],[-87.0314,65.213],[-87.3232,64.7756],[-88.483,64.099],[-89.9144,64.0327],[-90.704,63.6102],[-90.77,62.9602],[-91.9334,62.8351],[-93.157,62.0247],[-94.2415,60.8987],[-94.6293,60.1102],[-94.6846,58.9488],[-93.215,58.7821],[-92.7646,57.8457],[-92.297,57.0871],[-90.8977,57.2847],[-89.0395,56.8517],[-88.0398,56.4716],[-87.3242,55.9991],[-86.0712,55.7238],[-85.0118,55.3026],[-83.3605,55.2449],[-82.2728,55.1483],[-82.4362,54.2823],[-82.125,53.277],[-81.4007,52.1579],[-79.9129,51.2084],[-79.143,51.5339],[-78.6019,52.5621],[-79.1242,54.1415],[-79.8296,54.6677],[-78.2287,55.1365],[-77.0956,55.8374],[-76.5414,56.5342],[-76.6232,57.2026],[-77.3023,58.0521],[-78.5169,58.8046],[-77.3368,59.8526],[-77.7727,60.7579],[-78.1069,62.3196],[-77.4107,62.5505],[-75.6962,62.2784],[-74.6682,62.1811],[-73.8399,62.4438],[-72.9085,62.1051],[-71.6771,61.5254],[-71.3737,61.1372],[-69.5904,61.0614],[-69.6203,60.2213],[-69.2879,58.9574],[-68.3745,58.8011],[-67.6498,58.2121],[-66.2018,58.7673],[-65.2452,59.8707],[-64.5835,60.3356],[-63.8047,59.4426],[-62.5024,58.1671],[-61.3965,56.9675],[-61.7987,56.3395],[-60.4685,55.7755],[-59.5696,55.2041],[-57.9751,54.9455],[-57.3332,54.6265],[-56.9369,53.7803],[-56.1581,53.6475],[-55.7563,53.2704],[-55.6834,52.1466],[-56.4092,51.7707],[-57.1269,51.4197],[-58.7748,51.0643],[-60.0331,50.2428],[-61.7237,50.0805],[-63.8625,50.291],[-65.3633,50.2982],[-66.399,50.229],[-67.2363,49.5116],[-68.5111,49.0684],[-69.9536,47.7449],[-71.1046,46.8217],[-70.2552,46.9861],[-68.65,48.3],[-66.5524,49.1331],[-65.0563,49.2328],[-64.171,48.7425],[-65.1154,48.0709],[-64.7985,46.993],[-64.4722,46.2385],[-63.1733,45.739],[-61.5207,45.8838],[-60.5182,47.0079],[-60.4486,46.2826],[-59.8029,45.9204],[-61.0399,45.2653],[-63.2547,44.6701],[-64.2466,44.2655],[-65.3641,43.5452],[-66.1234,43.6187],[-66.1617,44.4651],[-64.4255,45.292],[-66.0261,45.2593],[-67.1374,45.1375],[-67.7913,45.7028],[-67.7905,47.0664],[-68.2344,47.3549],[-68.905,47.185],[-69.2372,47.4478],[-70,46.6931],[-70.305,45.915],[-70.66,45.46],[-71.0848,45.3052],[-71.405,45.255],[-71.5051,45.0082],[-73.3478,45.0074],[-74.867,45.0005],[-75.3182,44.8164],[-76.375,44.0963],[-76.5,44.0185],[-76.82,43.6288],[-77.7379,43.6291],[-78.7203,43.6251],[-79.1717,43.4663],[-79.01,43.27],[-78.92,42.965],[-78.9394,42.8636],[-80.2474,42.3662],[-81.2777,42.209],[-82.4393,41.6751],[-82.6901,41.6751],[-83.0298,41.8328],[-83.142,41.9757],[-83.12,42.08],[-82.9,42.43],[-82.43,42.98],[-82.1376,43.5711],[-82.3378,44.44],[-82.5509,45.3475],[-83.5929,45.8169],[-83.4696,45.9947],[-83.6161,46.1169],[-83.8908,46.1169],[-84.0919,46.2754],[-84.1421,46.5122],[-84.3367,46.4088],[-84.6049,46.4396],[-84.5437,46.5387],[-84.7792,46.6371],[-84.8761,46.9001],[-85.6524,47.2202],[-86.462,47.5533],[-87.4398,47.94],[-88.3781,48.3029],[-89.2729,48.0198],[-89.6,48.01],[-90.83,48.27],[-91.64,48.14],[-92.61,48.45],[-93.6309,48.6093],[-94.3291,48.6707],[-94.64,48.84],[-94.8176,49.3891],[-95.1561,49.3843],[-95.1591,49],[-97.2287,49.0007],[-100.65,49],[-104.0483,48.9999],[-107.05,49],[-110.05,49],[-113,49],[-116.0482,49],[-117.0312,49],[-120,49],[-122.84,49],[-122.9742,49.0025],[-124.9102,49.9846],[-125.6246,50.4166],[-127.4356,50.8306],[-127.9928,51.7158],[-127.8503,52.3296],[-129.1298,52.7554],[-129.3052,53.5616],[-130.515,54.2876],[-130.5361,54.8028],[-129.98,55.285],[-130.0078,55.9158],[-131.7078,56.5521],[-132.7304,57.6929],[-133.3556,58.4103],[-134.2711,58.8611],[-134.945,59.2706],[-135.4758,59.7878],[-136.4797,59.4639],[-137.4525,58.905],[-138.3409,59.5621],[-139.039,60],[-140.013,60.2768],[-140.9978,60.3064],[-140.9925,66],[-140.986,69.712],[-139.1205,69.471],[-137.5464,68.99],[-136.5036,68.898],[-135.6258,69.3151],[-134.4146,69.6274],[-132.9293,69.5053],[-131.4314,69.9445],[-129.7947,70.1937],[-129.1077,69.7793],[-128.3616,70.0129],[-128.1382,70.4838],[-127.4471,70.3772],[-125.7563,69.4806],[-124.4248,70.1584],[-124.2897,69.3997],[-123.0611,69.5637],[-122.6835,69.8555],[-121.4723,69.7978],[-119.9429,69.3779],[-117.6027,69.0113],[-116.2264,68.8415],[-115.2469,68.9059],[-113.8979,68.3989],[-115.3049,67.9026],[-113.4973,67.6882],[-110.798,67.8061],[-109.9462,67.981],[-108.8802,67.3814],[-107.7924,67.8874],[-108.813,68.3116],[-108.1672,68.6539],[-106.95,68.7],[-106.15,68.8],[-105.3428,68.5612],[-104.3379,68.018],[-103.2211,68.0977],[-101.4543,67.6469],[-99.902,67.8057],[-98.4432,67.7816],[-98.5586,68.4039],[-97.6695,68.5786],[-96.1199,68.2394],[-96.1259,67.2934],[-95.4894,68.0907],[-94.685,68.0638],[-94.2328,69.069],[-95.3041,69.6857],[-96.4713,70.0898],[-96.3912,71.1948],[-95.2088,71.9205],[-93.89,71.7601],[-92.8782,71.3187],[-91.5196,70.1913],[-92.4069,69.7],[-90.5471,69.4977]],[[-114.1672,73.1215],[-114.6663,72.6528],[-112.441,72.9554],[-111.0504,72.4504],[-109.9203,72.9611],[-109.0065,72.6334],[-108.1883,71.6509],[-107.686,72.0655],[-108.3964,73.0895],[-107.5165,73.236],[-106.5226,73.076],[-105.4025,72.6726],[-104.7748,71.6984],[-104.4648,70.993],[-102.7854,70.4978],[-100.9808,70.0243],[-101.0893,69.5845],[-102.7312,69.504],[-102.0933,69.1196],[-102.4302,68.7528],[-104.24,68.91],[-105.96,69.18],[-107.1225,69.1192],[-109,68.78],[-111.5341,68.6301],[-113.3132,68.5355],[-113.855,69.0074],[-115.22,69.28],[-116.1079,69.1682],[-117.34,69.96],[-116.6747,70.0666],[-115.1311,70.2373],[-113.7214,70.1924],[-112.4161,70.3664],[-114.35,70.6],[-116.4868,70.5204],[-117.9048,70.5406],[-118.4324,70.9092],[-116.1131,71.3092],[-117.6557,71.2952],[-119.402,71.5586],[-118.5627,72.3079],[-117.8664,72.7059],[-115.1891,73.3146],[-114.1672,73.1215]],[[-104.5,73.42],[-105.38,72.76],[-106.94,73.46],[-106.6,73.6],[-105.26,73.64],[-104.5,73.42]],[[-76.34,73.1027],[-76.2514,72.8264],[-77.3144,72.8555],[-78.3917,72.8767],[-79.4863,72.7422],[-79.7758,72.8029],[-80.8761,73.3332],[-80.8339,73.6932],[-80.3531,73.7597],[-78.0644,73.6519],[-76.34,73.1027]],[[-86.5622,73.1574],[-85.7744,72.5341],[-84.8501,73.3403],[-82.3156,73.751],[-80.6001,72.7165],[-80.7489,72.0619],[-78.7706,72.3522],[-77.8246,72.7496],[-75.6058,72.2437],[-74.2286,71.7671],[-74.0991,71.3308],[-72.2422,71.5569],[-71.2,70.92],[-68.7861,70.525],[-67.915,70.1219],[-66.969,69.1861],[-68.8051,68.7202],[-66.4499,68.0672],[-64.8623,67.8475],[-63.4249,66.9285],[-61.852,66.8621],[-62.1632,66.1603],[-63.9184,64.9987],[-65.1489,65.426],[-66.7212,66.388],[-68.015,66.2627],[-68.1413,65.6898],[-67.0896,65.1085],[-65.7321,64.6484],[-65.3202,64.3827],[-64.6694,63.3929],[-65.0138,62.6742],[-66.275,62.9451],[-68.7832,63.7457],[-67.3697,62.884],[-66.3283,62.2801],[-66.1656,61.9309],[-68.8774,62.3301],[-71.0234,62.9107],[-72.2354,63.3978],[-71.8863,63.68],[-73.3783,64.194],[-74.8344,64.6791],[-74.8185,64.3891],[-77.71,64.2295],[-78.5559,64.5729],[-77.8973,65.3092],[-76.0183,65.327],[-73.9598,65.4548],[-74.2939,65.8118],[-73.9449,66.3106],[-72.6512,67.2846],[-72.9261,67.7269],[-73.3116,68.0694],[-74.8433,68.5546],[-76.8691,68.8947],[-76.2286,69.1478],[-77.2874,69.7695],[-78.1686,69.8265],[-78.9572,70.1669],[-79.4925,69.8718],[-81.3055,69.7432],[-84.9447,69.9666],[-87.06,70.26],[-88.6817,70.4107],[-89.5134,70.762],[-88.4677,71.2182],[-89.8882,71.2226],[-90.2052,72.2351],[-89.4366,73.1295],[-88.4082,73.5379],[-85.8262,73.8038],[-86.5622,73.1574]],[[-100.3564,73.8439],[-99.1639,73.6334],[-97.38,73.76],[-97.12,73.47],[-98.0536,72.9905],[-96.54,72.56],[-96.72,71.66],[-98.3597,71.2728],[-99.3229,71.3564],[-100.0148,71.7383],[-102.5,72.51],[-102.48,72.83],[-100.4384,72.7059],[-101.54,73.36],[-100.3564,73.8439]],[[-93.1963,72.772],[-94.269,72.0246],[-95.4099,72.0619],[-96.0337,72.9403],[-96.0183,73.4374],[-95.4958,73.8624],[-94.5037,74.1349],[-92.42,74.1],[-90.5098,73.8567],[-92.004,72.9662],[-93.1963,72.772]],[[-120.46,71.3836],[-123.0922,70.9016],[-123.62,71.34],[-125.9289,71.8687],[-125.5,72.2923],[-124.8073,73.0226],[-123.94,73.68],[-124.9177,74.2928],[-121.5379,74.4489],[-120.1098,74.2414],[-117.5556,74.1858],[-116.5844,73.8961],[-115.5108,73.4752],[-116.7679,73.2229],[-119.22,72.52],[-120.46,71.82],[-120.46,71.3836]],[[-93.6128,74.98],[-94.1569,74.5923],[-95.6087,74.6669],[-96.8209,74.9276],[-96.2886,75.3778],[-94.8508,75.6472],[-93.9777,75.2965],[-93.6128,74.98]],[[-98.5,76.72],[-97.7356,76.2566],[-97.7044,75.7434],[-98.16,75],[-99.8087,74.8974],[-100.8837,75.0574],[-100.8629,75.6408],[-102.5021,75.5638],[-102.5655,76.3366],[-101.4897,76.3054],[-99.9835,76.6463],[-98.577,76.5886],[-98.5,76.72]],[[-108.2114,76.2017],[-107.8194,75.8455],[-106.9289,76.0128],[-105.881,75.9694],[-105.705,75.4795],[-106.3135,75.0053],[-109.7,74.85],[-112.2231,74.417],[-113.7438,74.3943],[-113.8713,74.7203],[-111.7942,75.1625],[-116.3122,75.0434],[-117.7104,75.2222],[-116.346,76.199],[-115.4049,76.4789],[-112.5906,76.1413],[-110.8142,75.5492],[-109.0671,75.4732],[-110.4973,76.4298],[-109.5811,76.7942],[-108.5486,76.6783],[-108.2114,76.2017]],[[-94.6841,77.0979],[-93.5739,76.7763],[-91.605,76.7785],[-90.7418,76.4496],[-90.9697,76.074],[-89.8222,75.8478],[-89.1871,75.6102],[-87.8383,75.5662],[-86.3792,75.4824],[-84.7896,75.6992],[-82.7534,75.7843],[-81.1285,75.714],[-80.0575,75.3368],[-79.8339,74.9231],[-80.4578,74.6573],[-81.9488,74.4425],[-83.2289,74.564],[-86.0975,74.41],[-88.1504,74.3923],[-89.7647,74.5156],[-92.4224,74.8378],[-92.7683,75.3868],[-92.8899,75.8827],[-93.8938,76.3192],[-95.9625,76.4414],[-97.1214,76.7511],[-96.7451,77.1614],[-94.6841,77.0979]],[[-116.1986,77.6453],[-116.3358,76.877],[-117.1061,76.53],[-118.0404,76.4812],[-119.8993,76.0532],[-121.5,75.9],[-122.8549,76.1165],[-122.8549,76.1165],[-121.1575,76.8645],[-119.1039,77.5122],[-117.5701,77.4983],[-116.1986,77.6453]],[[-93.84,77.52],[-94.2956,77.4913],[-96.1697,77.5551],[-96.4363,77.8346],[-94.4226,77.82],[-93.7207,77.6343],[-93.84,77.52]],[[-110.1869,77.697],[-112.0512,77.4092],[-113.5343,77.7322],[-112.7246,78.0511],[-111.2644,78.153],[-109.8545,77.9963],[-110.1869,77.697]],[[-109.6631,78.602],[-110.8813,78.4069],[-112.5421,78.4079],[-112.5259,78.5506],[-111.5,78.85],[-110.9637,78.8044],[-109.6631,78.602]],[[-95.8303,78.0569],[-97.3098,77.8506],[-98.1243,78.0829],[-98.5529,78.4581],[-98.632,78.8719],[-97.3372,78.832],[-96.7544,78.7658],[-95.5593,78.4183],[-95.8303,78.0569]],[[-100.0602,78.3248],[-99.6709,77.9075],[-101.3039,78.019],[-102.9498,78.3432],[-105.1761,78.3803],[-104.2104,78.6774],[-105.4196,78.9183],[-105.4923,79.3016],[-103.5293,79.1653],[-100.8252,78.8005],[-100.0602,78.3248]],[[-87.02,79.66],[-85.8143,79.3369],[-87.1876,79.0393],[-89.0353,78.2872],[-90.8044,78.2153],[-92.8767,78.3433],[-93.9512,78.751],[-93.9357,79.1137],[-93.1452,79.3801],[-94.974,79.3725],[-96.0761,79.705],[-96.7097,80.1578],[-96.0164,80.6023],[-95.3234,80.9073],[-94.2984,80.9773],[-94.7354,81.2065],[-92.4098,81.2574],[-91.1329,80.7235],[-89.45,80.5093],[-87.81,80.32],[-87.02,79.66]],[[-68.5,83.1063],[-65.8273,83.028],[-63.68,82.9],[-61.85,82.6286],[-61.8939,82.3617],[-64.334,81.9278],[-66.7534,81.7253],[-67.6575,81.5014],[-65.4803,81.5066],[-67.84,80.9],[-69.4697,80.6168],[-71.18,79.8],[-73.2428,79.6342],[-73.88,79.4302],[-76.9077,79.3231],[-75.5292,79.1977],[-76.2205,79.0191],[-75.3934,78.5258],[-76.3435,78.183],[-77.8885,77.8999],[-78.3627,77.5086],[-79.7595,77.2097],[-79.6196,76.9834],[-77.9109,77.022],[-77.8891,76.778],[-80.5612,76.1781],[-83.1744,76.454],[-86.1118,76.299],[-87.6,76.42],[-89.4907,76.4724],[-89.6161,76.9521],[-87.7674,77.1783],[-88.26,77.9],[-87.65,77.9702],[-84.9763,77.5387],[-86.34,78.18],[-87.9619,78.3718],[-87.152,78.7587],[-85.3787,78.9969],[-85.0949,79.3454],[-86.5073,79.7362],[-86.9318,80.2515],[-84.1984,80.2084],[-83.4087,80.1],[-81.8482,80.4644],[-84.1,80.58],[-87.599,80.5163],[-89.3666,80.8557],[-90.2,81.26],[-91.3679,81.5531],[-91.587,81.8943],[-90.1,82.085],[-88.9323,82.1175],[-86.9702,82.2796],[-85.5,82.6523],[-84.26,82.6],[-83.18,82.32],[-82.42,82.86],[-81.1,83.02],[-79.3066,83.1306],[-76.25,83.1721],[-75.7188,83.064],[-72.8315,83.2332],[-70.6658,83.1698],[-68.5,83.1063]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Canada","sov_a3":"CAN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Canada","adm0_a3":"CAN","geou_dif":0,"geounit":"Canada","gu_a3":"CAN","su_dif":0,"subunit":"Canada","su_a3":"CAN","brk_diff":0,"name":"Canada","name_long":"Canada","brk_a3":"CAN","brk_name":"Canada","brk_group":"","abbrev":"Can.","postal":"CA","formal_en":"Canada","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Canada","name_alt":"","mapcolor7":6,"mapcolor8":6,"mapcolor9":2,"mapcolor13":2,"pop_est":33487208,"gdp_md_est":1300000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"CA","iso_a3":"CAN","iso_n3":"124","un_a3":"124","wb_a2":"CA","wb_a3":"CAN","woe_id":-99,"adm0_a3_is":"CAN","adm0_a3_us":"CAN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Northern America","region_wb":"North America","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[9.5942,47.5251],[9.6329,47.3476],[9.48,47.1028],[9.9324,46.9207],[10.4427,46.8935],[10.3634,46.4836],[9.9228,46.3149],[9.1829,46.4402],[8.9663,46.0369],[8.49,46.0052],[8.3166,46.1636],[7.756,45.8245],[7.2739,45.7769],[6.8436,45.9911],[6.5001,46.4297],[6.0226,46.273],[6.0374,46.7258],[6.7687,47.2877],[6.7366,47.5418],[7.1922,47.4498],[7.4668,47.6206],[8.3173,47.6136],[8.5226,47.8308],[9.5942,47.5251]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Switzerland","sov_a3":"CHE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Switzerland","adm0_a3":"CHE","geou_dif":0,"geounit":"Switzerland","gu_a3":"CHE","su_dif":0,"subunit":"Switzerland","su_a3":"CHE","brk_diff":0,"name":"Switzerland","name_long":"Switzerland","brk_a3":"CHE","brk_name":"Switzerland","brk_group":"","abbrev":"Switz.","postal":"CH","formal_en":"Swiss Confederation","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Switzerland","name_alt":"","mapcolor7":5,"mapcolor8":2,"mapcolor9":7,"mapcolor13":3,"pop_est":7604467,"gdp_md_est":316700,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"CH","iso_a3":"CHE","iso_n3":"756","un_a3":"756","wb_a2":"CH","wb_a3":"CHE","woe_id":-99,"adm0_a3_is":"CHE","adm0_a3_us":"CHE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":11,"long_len":11,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-68.634,-52.6364],[-68.6333,-54.8695],[-67.5624,-54.87],[-66.9599,-54.8968],[-67.291,-55.3012],[-68.1486,-55.6118],[-68.64,-55.58],[-69.2321,-55.4991],[-69.9581,-55.1984],[-71.0057,-55.0538],[-72.2639,-54.4951],[-73.2852,-53.9575],[-74.6625,-52.8375],[-73.8381,-53.0474],[-72.4342,-53.7154],[-71.1077,-54.0743],[-70.5918,-53.6158],[-70.2675,-52.9312],[-69.3456,-52.5183],[-68.634,-52.6364]],[[-68.2199,-21.4943],[-67.8282,-22.8729],[-67.1067,-22.7359],[-66.9852,-22.9863],[-67.3284,-24.0253],[-68.4177,-24.5186],[-68.386,-26.185],[-68.5948,-26.5069],[-68.2955,-26.8993],[-69.0012,-27.5212],[-69.6561,-28.4591],[-70.0136,-29.3679],[-69.919,-30.3363],[-70.5351,-31.365],[-70.0744,-33.0912],[-69.8148,-33.2739],[-69.8173,-34.1936],[-70.388,-35.1697],[-70.3648,-36.0051],[-71.1219,-36.6581],[-71.1186,-37.5768],[-70.8147,-38.553],[-71.4135,-38.916],[-71.6808,-39.8082],[-71.9157,-40.8323],[-71.7468,-42.0514],[-72.1489,-42.2549],[-71.9154,-43.4086],[-71.4641,-43.7876],[-71.7936,-44.2072],[-71.3298,-44.4075],[-71.2228,-44.7842],[-71.6593,-44.9737],[-71.552,-45.5607],[-71.9173,-46.8848],[-72.4474,-47.7385],[-72.3312,-48.2442],[-72.6482,-48.8786],[-73.4154,-49.3184],[-73.3281,-50.3788],[-72.9757,-50.7415],[-72.31,-50.677],[-72.3294,-51.426],[-71.9148,-52.009],[-69.4984,-52.1428],[-68.5715,-52.2994],[-69.4613,-52.292],[-69.9428,-52.5379],[-70.8451,-52.8992],[-71.0063,-53.8333],[-71.4298,-53.8565],[-72.5579,-53.5314],[-73.7028,-52.8351],[-73.7028,-52.8351],[-74.9468,-52.2628],[-75.26,-51.6294],[-74.9766,-51.0434],[-75.4798,-50.3784],[-75.608,-48.6738],[-75.1828,-47.7119],[-74.1266,-46.9393],[-75.6444,-46.6476],[-74.6922,-45.764],[-74.3517,-44.103],[-73.2404,-44.455],[-72.7178,-42.3834],[-73.3889,-42.1175],[-73.7013,-43.3658],[-74.3319,-43.225],[-74.018,-41.7948],[-73.6771,-39.9422],[-73.2176,-39.2587],[-73.5056,-38.2829],[-73.5881,-37.1563],[-73.1667,-37.1238],[-72.5531,-35.5088],[-71.8617,-33.9091],[-71.4385,-32.4189],[-71.6687,-30.9206],[-71.3701,-30.0957],[-71.4899,-28.8614],[-70.9051,-27.6404],[-70.725,-25.7059],[-70.404,-23.629],[-70.0912,-21.3933],[-70.1644,-19.7565],[-70.3726,-18.348],[-69.8584,-18.0927],[-69.5904,-17.58],[-69.1002,-18.2601],[-68.9668,-18.9817],[-68.4422,-19.4051],[-68.7572,-20.3727],[-68.2199,-21.4943]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Chile","sov_a3":"CHL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Chile","adm0_a3":"CHL","geou_dif":0,"geounit":"Chile","gu_a3":"CHL","su_dif":0,"subunit":"Chile","su_a3":"CHL","brk_diff":0,"name":"Chile","name_long":"Chile","brk_a3":"CHL","brk_name":"Chile","brk_group":"","abbrev":"Chile","postal":"CL","formal_en":"Republic of Chile","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Chile","name_alt":"","mapcolor7":5,"mapcolor8":1,"mapcolor9":5,"mapcolor13":9,"pop_est":16601707,"gdp_md_est":244500,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"CL","iso_a3":"CHL","iso_n3":"152","un_a3":"152","wb_a2":"CL","wb_a3":"CHL","woe_id":-99,"adm0_a3_is":"CHL","adm0_a3_us":"CHL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[110.3392,18.6784],[109.4752,18.1977],[108.6552,18.5077],[108.6262,19.3679],[109.1191,19.821],[110.2116,20.1013],[110.7866,20.0775],[111.0101,19.6959],[110.5706,19.2559],[110.3392,18.6784]],[[127.6574,49.7603],[129.3978,49.4406],[130.5823,48.7297],[130.9873,47.7901],[132.5067,47.789],[133.3736,48.1834],[135.0263,48.4782],[134.5008,47.5784],[134.1124,47.2125],[133.7696,46.1169],[133.0971,45.1441],[131.8835,45.3212],[131.0252,44.968],[131.2886,44.1115],[131.1447,42.93],[130.6339,42.903],[130.64,42.395],[129.9943,42.9854],[129.5967,42.425],[128.0522,41.9943],[128.2084,41.4668],[127.3438,41.5032],[126.8691,41.8166],[126.182,41.1073],[125.0799,40.5698],[124.2656,39.9285],[122.8676,39.6378],[122.1314,39.1705],[121.0546,38.8975],[121.586,39.3609],[121.3768,39.7503],[122.1686,40.4224],[121.6404,40.9464],[120.7686,40.5934],[119.6396,39.8981],[119.0235,39.2523],[118.0427,39.2043],[117.5327,38.7376],[118.0597,38.0615],[118.8781,37.8973],[118.9116,37.4485],[119.7028,37.1564],[120.8235,37.8704],[121.7113,37.4811],[122.3579,37.4545],[122.52,36.9306],[121.1042,36.6513],[120.637,36.1114],[119.6646,35.6098],[119.1512,34.9099],[120.2275,34.3603],[120.6204,33.3767],[121.229,32.4603],[121.9081,31.6922],[121.8919,30.9494],[121.2643,30.6763],[121.5035,30.1429],[122.0921,29.8325],[121.9384,29.018],[121.6844,28.2255],[121.1257,28.1357],[120.3955,27.0532],[119.5855,25.7408],[118.6569,24.5474],[117.2816,23.6245],[115.8907,22.7829],[114.7638,22.6681],[114.1525,22.2238],[113.8068,22.5483],[113.2411,22.0514],[111.8436,21.5505],[110.7855,21.3971],[110.444,20.341],[109.8899,20.2825],[109.6277,21.0082],[109.8645,21.3951],[108.5228,21.7152],[108.0502,21.5524],[107.0434,21.8119],[106.5673,22.2182],[106.7254,22.7943],[105.8112,22.9769],[105.3292,23.3521],[104.4769,22.8192],[103.5045,22.7038],[102.707,22.7088],[102.1704,22.4648],[101.652,22.3182],[101.8031,21.1744],[101.27,21.2017],[101.18,21.4366],[101.15,21.85],[100.4165,21.5588],[99.9835,21.7429],[99.2409,22.1183],[99.532,22.949],[98.8987,23.1427],[98.6603,24.0633],[97.6047,23.8974],[97.7246,25.0836],[98.6718,25.9187],[98.7121,26.7435],[98.6827,27.5088],[98.2462,27.7472],[97.912,28.3359],[97.3271,28.2616],[96.2488,28.411],[96.5866,28.831],[96.1177,29.4528],[95.4048,29.0317],[94.566,29.2774],[93.4133,28.6406],[92.5031,27.8969],[91.6967,27.7717],[91.2589,28.0406],[90.7305,28.065],[90.0158,28.2964],[89.4758,28.0428],[88.8142,27.2993],[88.7303,28.0869],[88.1204,27.8765],[86.9545,27.9743],[85.8233,28.2036],[85.0116,28.6428],[84.2346,28.8399],[83.899,29.3202],[83.3371,29.4637],[82.3275,30.1153],[81.5258,30.4227],[81.1113,30.1835],[79.7214,30.8827],[78.7389,31.5159],[78.4584,32.6182],[79.1761,32.4838],[79.2089,32.9944],[78.8111,33.5062],[78.9123,34.3219],[77.8375,35.494],[76.1928,35.8984],[75.8969,36.6668],[75.158,37.133],[74.98,37.42],[74.83,37.99],[74.8648,38.3788],[74.2575,38.6065],[73.9289,38.5058],[73.6754,39.4312],[73.96,39.66],[73.8222,39.894],[74.7769,40.3664],[75.4678,40.5621],[76.5264,40.4279],[76.9045,41.0665],[78.1872,41.1853],[78.5437,41.5822],[80.1194,42.1239],[80.26,42.35],[80.1802,42.9201],[80.8662,43.1804],[79.9661,44.9175],[81.9471,45.317],[82.4589,45.5396],[83.1805,47.33],[85.1643,47.001],[85.7205,47.453],[85.7682,48.4558],[86.5988,48.5492],[87.36,49.215],[87.7513,49.2972],[88.0138,48.5995],[88.8543,48.0691],[90.2808,47.6935],[90.9708,46.8881],[90.5858,45.7197],[90.9455,45.2861],[92.1339,45.1151],[93.4807,44.9755],[94.6889,44.3523],[95.3069,44.2413],[95.7625,43.3194],[96.3494,42.7256],[97.4518,42.7489],[99.5158,42.5247],[100.8459,42.6638],[101.833,42.5149],[103.3123,41.9075],[104.5223,41.9083],[104.965,41.5974],[106.1293,42.1343],[107.7448,42.4815],[109.2436,42.5194],[110.4121,42.8712],[111.1297,43.4068],[111.8296,43.7431],[111.6677,44.0732],[111.3484,44.4574],[111.8733,45.1021],[112.4361,45.0116],[113.4639,44.8089],[114.4603,45.3398],[115.9851,45.7272],[116.7179,46.3882],[117.4217,46.6727],[118.8743,46.8054],[119.6633,46.6927],[119.7728,47.0481],[118.8666,47.7471],[118.0641,48.0667],[117.2955,47.6977],[116.309,47.8534],[115.7428,47.7265],[115.4853,48.1354],[116.1918,49.1346],[116.6788,49.8885],[117.8792,49.511],[119.2885,50.1429],[119.2794,50.5829],[120.182,51.6436],[120.7382,51.9641],[120.7258,52.5162],[120.1771,52.7539],[121.0031,53.2514],[122.2457,53.4317],[123.5715,53.4588],[125.0682,53.161],[125.9463,52.7928],[126.5644,51.7843],[126.9392,51.3539],[127.2875,50.7398],[127.6574,49.7603]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"China","sov_a3":"CH1","adm0_dif":1,"level":2,"type":"Country","admin":"China","adm0_a3":"CHN","geou_dif":0,"geounit":"China","gu_a3":"CHN","su_dif":0,"subunit":"China","su_a3":"CHN","brk_diff":0,"name":"China","name_long":"China","brk_a3":"CHN","brk_name":"China","brk_group":"","abbrev":"China","postal":"CN","formal_en":"People's Republic of China","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"China","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":4,"mapcolor13":3,"pop_est":1338612970,"gdp_md_est":7973000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"3. Emerging region: BRIC","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"CN","iso_a3":"CHN","iso_n3":"156","un_a3":"156","wb_a2":"CN","wb_a3":"CHN","woe_id":-99,"adm0_a3_is":"CHN","adm0_a3_us":"CHN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-2.8561,4.9945],[-3.3111,4.9843],[-4.0088,5.1798],[-4.6499,5.1683],[-5.8345,4.9937],[-6.5288,4.7051],[-7.5189,4.3383],[-7.7122,4.3646],[-7.6354,5.1882],[-7.5397,5.3133],[-7.5702,5.7074],[-7.9937,6.1262],[-8.3113,6.193],[-8.6029,6.4676],[-8.3855,6.9118],[-8.4854,7.3952],[-8.4393,7.686],[-8.2807,7.6872],[-8.2218,8.1233],[-8.299,8.3164],[-8.2035,8.4555],[-7.8321,8.5757],[-8.0791,9.3762],[-8.3096,9.7895],[-8.2293,10.129],[-8.0299,10.2065],[-7.8996,10.2974],[-7.6228,10.1472],[-6.8505,10.139],[-6.6665,10.4308],[-6.494,10.4113],[-6.2052,10.5241],[-6.0505,10.0964],[-5.8169,10.2226],[-5.4043,10.3707],[-4.9547,10.1527],[-4.7799,9.822],[-4.3302,9.6108],[-3.9804,9.8623],[-3.5119,9.9003],[-2.8275,9.6425],[-2.5622,8.2196],[-2.9836,7.3797],[-3.2444,6.2505],[-2.8107,5.3891],[-2.8561,4.9945]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Ivory Coast","sov_a3":"CIV","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ivory Coast","adm0_a3":"CIV","geou_dif":0,"geounit":"Ivory Coast","gu_a3":"CIV","su_dif":0,"subunit":"Ivory Coast","su_a3":"CIV","brk_diff":0,"name":"Côte d'Ivoire","name_long":"Côte d'Ivoire","brk_a3":"CIV","brk_name":"Côte d'Ivoire","brk_group":"","abbrev":"I.C.","postal":"CI","formal_en":"Republic of Ivory Coast","formal_fr":"Republic of Cote D'Ivoire","note_adm0":"","note_brk":"","name_sort":"Côte d'Ivoire","name_alt":"","mapcolor7":4,"mapcolor8":6,"mapcolor9":3,"mapcolor13":3,"pop_est":20617068,"gdp_md_est":33850,"pop_year":-99,"lastcensus":1998,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"CI","iso_a3":"CIV","iso_n3":"384","un_a3":"384","wb_a2":"CI","wb_a3":"CIV","woe_id":-99,"adm0_a3_is":"CIV","adm0_a3_us":"CIV","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":13,"long_len":13,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[13.0758,2.2671],[12.9513,2.3216],[12.3594,2.1928],[11.7517,2.3268],[11.2764,2.2611],[9.6492,2.2839],[9.7952,3.0734],[9.4044,3.7345],[8.9481,3.9041],[8.7449,4.3522],[8.4888,4.4956],[8.5003,4.772],[8.7575,5.4797],[9.2332,6.4445],[9.5227,6.4535],[10.1183,7.0388],[10.4974,7.0554],[11.0588,6.6444],[11.7458,6.9814],[11.8393,7.397],[12.0639,7.7998],[12.2189,8.3058],[12.7537,8.7178],[12.9555,9.4178],[13.1676,9.6406],[13.3087,10.1604],[13.5729,10.7986],[14.4154,11.5724],[14.4682,11.9048],[14.5772,12.0854],[14.1813,12.4837],[14.2135,12.802],[14.4958,12.8594],[14.8934,12.219],[14.9602,11.5556],[14.9236,10.8913],[15.4679,9.9823],[14.9094,9.9921],[14.6272,9.9209],[14.1715,10.0214],[13.9542,9.5495],[14.5445,8.9659],[14.98,8.7961],[15.1209,8.3822],[15.4361,7.6928],[15.2795,7.4219],[14.7765,6.4085],[14.5366,6.227],[14.4594,5.4518],[14.5589,5.0306],[14.4784,4.7326],[14.951,4.2104],[15.0362,3.8514],[15.4054,3.3353],[15.8627,3.0135],[15.9074,2.5574],[16.0129,2.2676],[15.9409,1.7277],[15.1463,1.964],[14.3378,2.2279],[13.0758,2.2671]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Cameroon","sov_a3":"CMR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Cameroon","adm0_a3":"CMR","geou_dif":0,"geounit":"Cameroon","gu_a3":"CMR","su_dif":0,"subunit":"Cameroon","su_a3":"CMR","brk_diff":0,"name":"Cameroon","name_long":"Cameroon","brk_a3":"CMR","brk_name":"Cameroon","brk_group":"","abbrev":"Cam.","postal":"CM","formal_en":"Republic of Cameroon","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Cameroon","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":3,"pop_est":18879301,"gdp_md_est":42750,"pop_year":-99,"lastcensus":2005,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"CM","iso_a3":"CMR","iso_n3":"120","un_a3":"120","wb_a2":"CM","wb_a3":"CMR","woe_id":-99,"adm0_a3_is":"CMR","adm0_a3_us":"CMR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[30.8339,3.5092],[30.7733,2.3399],[31.1741,2.2045],[30.8527,1.8494],[30.4685,1.5838],[30.0862,1.0623],[29.8758,0.5974],[29.8195,-0.2053],[29.5878,-0.5874],[29.5795,-1.3413],[29.2919,-1.6201],[29.2548,-2.2151],[29.1175,-2.2922],[29.0249,-2.8393],[29.2764,-3.2939],[29.34,-4.5],[29.52,-5.42],[29.42,-5.94],[29.62,-6.52],[30.2,-7.08],[30.74,-8.34],[30.3461,-8.2383],[29.0029,-8.407],[28.7349,-8.5266],[28.4499,-9.1649],[28.6737,-9.6059],[28.4961,-10.7899],[28.3723,-11.7936],[28.6424,-11.9716],[29.3415,-12.3607],[29.616,-12.1789],[29.6996,-13.2572],[28.9343,-13.249],[28.5236,-12.6986],[28.1551,-12.2725],[27.3888,-12.1327],[27.1644,-11.6087],[26.5531,-11.9244],[25.7523,-11.785],[25.4181,-11.3309],[24.7832,-11.2387],[24.3145,-11.2628],[24.2572,-10.952],[23.9122,-10.9268],[23.4568,-10.8679],[22.8373,-11.0176],[22.4028,-10.9931],[22.1553,-11.0848],[22.2088,-9.8948],[21.8752,-9.5237],[21.8018,-8.9087],[21.9491,-8.3059],[21.7465,-7.9201],[21.7281,-7.2909],[20.5147,-7.2996],[20.6018,-6.9393],[20.0916,-6.9431],[20.0377,-7.1164],[19.4175,-7.1554],[19.1666,-7.7382],[19.0168,-7.9882],[18.4642,-7.847],[18.1342,-7.9877],[17.473,-8.0686],[17.09,-7.5457],[16.8602,-7.2223],[16.5732,-6.6226],[16.3265,-5.8775],[13.3756,-5.8642],[13.0249,-5.9844],[12.7352,-5.9657],[12.3224,-6.1001],[12.1823,-5.7899],[12.4367,-5.6843],[12.468,-5.2484],[12.6316,-4.9913],[12.9955,-4.7811],[13.2582,-4.883],[13.6002,-4.5001],[14.145,-4.51],[14.209,-4.7931],[14.5826,-4.9702],[15.171,-4.3435],[15.7535,-3.8552],[16.0063,-3.5351],[15.9728,-2.7124],[16.4071,-1.7409],[16.8653,-1.2258],[17.5237,-0.7438],[17.6386,-0.4248],[17.6636,-0.0581],[17.8265,0.2889],[17.7742,0.8557],[17.8988,1.7418],[18.0943,2.3657],[18.3938,2.9004],[18.4531,3.5044],[18.543,4.2018],[18.9323,4.7095],[19.4678,5.0315],[20.2907,4.6917],[20.9276,4.3228],[21.6591,4.2243],[22.4051,4.0292],[22.7041,4.6331],[22.8415,4.7101],[23.2972,4.6097],[24.4105,5.1088],[24.805,4.8972],[25.1288,4.9272],[25.2788,5.1704],[25.6505,5.2561],[26.4028,5.1509],[27.0441,5.1279],[27.3742,5.2339],[27.98,4.4084],[28.429,4.2872],[28.6967,4.4551],[29.1591,4.3893],[29.716,4.6008],[29.9535,4.1737],[30.8339,3.5092]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Democratic Republic of the Congo","sov_a3":"COD","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Democratic Republic of the Congo","adm0_a3":"COD","geou_dif":0,"geounit":"Democratic Republic of the Congo","gu_a3":"COD","su_dif":0,"subunit":"Democratic Republic of the Congo","su_a3":"COD","brk_diff":0,"name":"Dem. Rep. Congo","name_long":"Democratic Republic of the Congo","brk_a3":"COD","brk_name":"Democratic Republic of the Congo","brk_group":"","abbrev":"D.R.C.","postal":"DRC","formal_en":"Democratic Republic of the Congo","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Congo, Dem. Rep.","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":4,"mapcolor13":7,"pop_est":68692542,"gdp_md_est":20640,"pop_year":-99,"lastcensus":1984,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"CD","iso_a3":"COD","iso_n3":"180","un_a3":"180","wb_a2":"ZR","wb_a3":"ZAR","woe_id":-99,"adm0_a3_is":"COD","adm0_a3_us":"COD","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":15,"long_len":32,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[12.9955,-4.7811],[12.6208,-4.438],[12.3186,-4.6062],[11.915,-5.038],[11.0938,-3.9788],[11.8551,-3.4269],[11.478,-2.7656],[11.821,-2.5142],[12.4957,-2.3917],[12.5753,-1.9485],[13.1096,-2.4287],[13.9924,-2.4708],[14.2992,-1.9983],[14.4255,-1.3334],[14.3164,-0.5526],[13.8433,0.0388],[14.2763,1.1969],[14.0267,1.3957],[13.2826,1.3142],[13.0031,1.8309],[13.0758,2.2671],[14.3378,2.2279],[15.1463,1.964],[15.9409,1.7277],[16.0129,2.2676],[16.5371,3.1983],[17.133,3.7282],[17.8099,3.5602],[18.4531,3.5044],[18.3938,2.9004],[18.0943,2.3657],[17.8988,1.7418],[17.7742,0.8557],[17.8265,0.2889],[17.6636,-0.0581],[17.6386,-0.4248],[17.5237,-0.7438],[16.8653,-1.2258],[16.4071,-1.7409],[15.9728,-2.7124],[16.0063,-3.5351],[15.7535,-3.8552],[15.171,-4.3435],[14.5826,-4.9702],[14.209,-4.7931],[14.145,-4.51],[13.6002,-4.5001],[13.2582,-4.883],[12.9955,-4.7811]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Republic of Congo","sov_a3":"COG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Republic of Congo","adm0_a3":"COG","geou_dif":0,"geounit":"Republic of Congo","gu_a3":"COG","su_dif":0,"subunit":"Republic of Congo","su_a3":"COG","brk_diff":0,"name":"Congo","name_long":"Republic of Congo","brk_a3":"COG","brk_name":"Republic of Congo","brk_group":"","abbrev":"Rep. Congo","postal":"CG","formal_en":"Republic of Congo","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Congo, Rep.","name_alt":"","mapcolor7":2,"mapcolor8":1,"mapcolor9":3,"mapcolor13":10,"pop_est":4012809,"gdp_md_est":15350,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"CG","iso_a3":"COG","iso_n3":"178","un_a3":"178","wb_a2":"CG","wb_a3":"COG","woe_id":-99,"adm0_a3_is":"COG","adm0_a3_us":"COG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":17,"abbrev_len":10,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-75.3732,-0.152],[-75.8015,0.0848],[-76.2923,0.416],[-76.5764,0.2569],[-77.425,0.3957],[-77.6686,0.8259],[-77.8551,0.8099],[-78.8553,1.3809],[-78.9909,1.6914],[-78.6178,1.7664],[-78.6621,2.2674],[-78.4276,2.6296],[-77.9315,2.6966],[-77.5104,3.325],[-77.1277,3.8496],[-77.4963,4.0876],[-77.3076,4.668],[-77.5332,5.5828],[-77.3188,5.8454],[-77.4767,6.6911],[-77.8816,7.2238],[-77.7534,7.7098],[-77.4311,7.6381],[-77.2426,7.9353],[-77.4747,8.5243],[-77.3534,8.6705],[-76.8367,8.6387],[-76.0864,9.3368],[-75.6746,9.4432],[-75.6647,9.774],[-75.4804,10.619],[-74.9069,11.083],[-74.2768,11.102],[-74.1972,11.3105],[-73.4148,11.227],[-72.6278,11.732],[-72.2382,11.9555],[-71.7541,12.4373],[-71.3998,12.376],[-71.1375,12.113],[-71.3316,11.7763],[-71.9739,11.6087],[-72.2276,11.1087],[-72.6147,10.822],[-72.9053,10.4503],[-73.0276,9.7368],[-73.305,9.152],[-72.7887,9.085],[-72.6605,8.6253],[-72.4399,8.4053],[-72.3609,8.0026],[-72.4797,7.6325],[-72.4445,7.4238],[-72.1984,7.3404],[-71.9602,6.9916],[-70.6742,7.0878],[-70.0933,6.9604],[-69.3895,6.0999],[-68.9853,6.2068],[-68.2651,6.1533],[-67.6951,6.2673],[-67.3414,6.0955],[-67.5215,5.5569],[-67.7447,5.2211],[-67.823,4.5039],[-67.6218,3.8395],[-67.3376,3.5423],[-67.3032,3.3185],[-67.8099,2.8207],[-67.4471,2.6003],[-67.1813,2.2506],[-66.8763,1.2534],[-67.065,1.1301],[-67.26,1.72],[-67.5378,2.0372],[-67.8686,1.6925],[-69.817,1.7148],[-69.8046,1.0891],[-69.2186,0.9857],[-69.2524,0.6027],[-69.4524,0.7062],[-70.0156,0.5414],[-70.0207,-0.1852],[-69.5771,-0.55],[-69.4205,-1.1226],[-69.4441,-1.5563],[-69.8936,-4.2982],[-70.394,-3.7666],[-70.6927,-3.7429],[-70.0477,-2.7252],[-70.8135,-2.2569],[-71.4136,-2.3428],[-71.7748,-2.1698],[-72.3258,-2.4342],[-73.0704,-2.309],[-73.6595,-1.2605],[-74.1224,-1.0028],[-74.4416,-0.5308],[-75.1066,-0.0572],[-75.3732,-0.152]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Colombia","sov_a3":"COL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Colombia","adm0_a3":"COL","geou_dif":0,"geounit":"Colombia","gu_a3":"COL","su_dif":0,"subunit":"Colombia","su_a3":"COL","brk_diff":0,"name":"Colombia","name_long":"Colombia","brk_a3":"COL","brk_name":"Colombia","brk_group":"","abbrev":"Col.","postal":"CO","formal_en":"Republic of Colombia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Colombia","name_alt":"","mapcolor7":2,"mapcolor8":1,"mapcolor9":3,"mapcolor13":1,"pop_est":45644023,"gdp_md_est":395400,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"CO","iso_a3":"COL","iso_n3":"170","un_a3":"170","wb_a2":"CO","wb_a3":"COL","woe_id":-99,"adm0_a3_is":"COL","adm0_a3_us":"COL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-82.9658,8.225],[-83.5084,8.4469],[-83.7115,8.6568],[-83.5963,8.8304],[-83.6326,9.0514],[-83.9099,9.2908],[-84.3034,9.4874],[-84.6476,9.6155],[-84.7134,9.9081],[-84.9757,10.0867],[-84.9114,9.796],[-85.1109,9.557],[-85.3395,9.8345],[-85.6608,9.9333],[-85.7974,10.1349],[-85.7917,10.4393],[-85.6593,10.7543],[-85.9417,10.8953],[-85.7125,11.0884],[-85.5619,11.2171],[-84.903,10.9523],[-84.6731,11.0827],[-84.3559,10.9992],[-84.1902,10.7935],[-83.8951,10.7268],[-83.6556,10.9388],[-83.4023,10.3954],[-83.0157,9.993],[-82.5462,9.5661],[-82.9329,9.4768],[-82.9272,9.0743],[-82.7192,8.9257],[-82.8687,8.8073],[-82.8298,8.6263],[-82.9132,8.4235],[-82.9658,8.225]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Costa Rica","sov_a3":"CRI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Costa Rica","adm0_a3":"CRI","geou_dif":0,"geounit":"Costa Rica","gu_a3":"CRI","su_dif":0,"subunit":"Costa Rica","su_a3":"CRI","brk_diff":0,"name":"Costa Rica","name_long":"Costa Rica","brk_a3":"CRI","brk_name":"Costa Rica","brk_group":"","abbrev":"C.R.","postal":"CR","formal_en":"Republic of Costa Rica","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Costa Rica","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":4,"mapcolor13":2,"pop_est":4253877,"gdp_md_est":48320,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"CR","iso_a3":"CRI","iso_n3":"188","un_a3":"188","wb_a2":"CR","wb_a3":"CRI","woe_id":-99,"adm0_a3_is":"CRI","adm0_a3_us":"CRI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-82.2682,23.1886],[-81.4045,23.1173],[-80.6188,23.106],[-79.6795,22.7653],[-79.2815,22.3992],[-78.3474,22.5122],[-77.9933,22.2772],[-77.1464,21.6579],[-76.5238,21.2068],[-76.1946,21.2206],[-75.5982,21.0166],[-75.6711,20.7351],[-74.9339,20.6939],[-74.178,20.2846],[-74.2966,20.0504],[-74.9616,19.9234],[-75.6347,19.8738],[-76.3237,19.9529],[-77.7555,19.8555],[-77.0851,20.4134],[-77.4927,20.6731],[-78.1373,20.7399],[-78.4828,21.0286],[-78.7199,21.5981],[-79.285,21.5592],[-80.2175,21.8273],[-80.5175,22.0371],[-81.8209,22.1921],[-82.17,22.3871],[-81.795,22.637],[-82.7759,22.6882],[-83.4945,22.1685],[-83.9088,22.1546],[-84.0522,21.9106],[-84.547,21.8012],[-84.9749,21.896],[-84.4471,22.2049],[-84.2304,22.5658],[-83.7782,22.7881],[-83.2675,22.983],[-82.5104,23.0787],[-82.2682,23.1886]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Cuba","sov_a3":"CUB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Cuba","adm0_a3":"CUB","geou_dif":0,"geounit":"Cuba","gu_a3":"CUB","su_dif":0,"subunit":"Cuba","su_a3":"CUB","brk_diff":0,"name":"Cuba","name_long":"Cuba","brk_a3":"CUB","brk_name":"Cuba","brk_group":"","abbrev":"Cuba","postal":"CU","formal_en":"Republic of Cuba","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Cuba","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":3,"mapcolor13":4,"pop_est":11451652,"gdp_md_est":108200,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"CU","iso_a3":"CUB","iso_n3":"192","un_a3":"192","wb_a2":"CU","wb_a3":"CUB","woe_id":-99,"adm0_a3_is":"CUB","adm0_a3_us":"CUB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[32.7318,35.14],[32.8025,35.1455],[32.947,35.3867],[33.6672,35.3732],[34.5765,35.6716],[33.9008,35.2458],[33.9736,35.0585],[33.8664,35.0936],[33.6754,35.0179],[33.5257,35.0387],[33.4758,35.0003],[33.4559,35.1014],[33.3838,35.1627],[33.191,35.1731],[32.9196,35.0878],[32.7318,35.14]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Northern Cyprus","sov_a3":"CYN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Northern Cyprus","adm0_a3":"CYN","geou_dif":0,"geounit":"Northern Cyprus","gu_a3":"CYN","su_dif":0,"subunit":"Northern Cyprus","su_a3":"CYN","brk_diff":1,"name":"N. Cyprus","name_long":"Northern Cyprus","brk_a3":"B20","brk_name":"N. Cyprus","brk_group":"","abbrev":"N. Cy.","postal":"CN","formal_en":"Turkish Republic of Northern Cyprus","formal_fr":"","note_adm0":"Self admin.","note_brk":"Self admin.; Claimed by Cyprus","name_sort":"Cyprus, Northern","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":4,"mapcolor13":8,"pop_est":265100,"gdp_md_est":3600,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"-99","iso_a3":"-99","iso_n3":"-99","un_a3":"-099","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"CYP","adm0_a3_us":"CYP","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":9,"long_len":15,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[33.9736,35.0585],[34.0049,34.9781],[32.9798,34.5719],[32.4903,34.7017],[32.2567,35.1032],[32.7318,35.14],[32.9196,35.0878],[33.191,35.1731],[33.3838,35.1627],[33.4559,35.1014],[33.4758,35.0003],[33.5257,35.0387],[33.6754,35.0179],[33.8664,35.0936],[33.9736,35.0585]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Cyprus","sov_a3":"CYP","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Cyprus","adm0_a3":"CYP","geou_dif":0,"geounit":"Cyprus","gu_a3":"CYP","su_dif":0,"subunit":"Cyprus","su_a3":"CYP","brk_diff":0,"name":"Cyprus","name_long":"Cyprus","brk_a3":"CYP","brk_name":"Cyprus","brk_group":"","abbrev":"Cyp.","postal":"CY","formal_en":"Republic of Cyprus","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Cyprus","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":3,"mapcolor13":7,"pop_est":531640,"gdp_md_est":22700,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"CY","iso_a3":"CYP","iso_n3":"196","un_a3":"196","wb_a2":"CY","wb_a3":"CYP","woe_id":-99,"adm0_a3_is":"CYP","adm0_a3_us":"CYP","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[16.9603,48.597],[16.4993,48.7858],[16.0296,48.7339],[15.2534,49.0391],[14.9014,48.9644],[14.3389,48.5553],[13.5959,48.8772],[13.0313,49.3071],[12.521,49.5474],[12.4152,49.9691],[12.2401,50.2663],[12.9668,50.4841],[13.3381,50.7332],[14.0562,50.9269],[14.307,51.1173],[14.5707,51.0023],[15.017,51.1067],[15.491,50.7847],[16.2386,50.6977],[16.1763,50.4226],[16.7195,50.2157],[16.8688,50.474],[17.5546,50.3621],[17.6494,50.049],[18.3929,49.9886],[18.8531,49.4962],[18.555,49.495],[18.4,49.315],[18.1705,49.2715],[18.105,49.044],[17.9135,48.9965],[17.8865,48.9035],[17.545,48.8],[17.102,48.817],[16.9603,48.597]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Czech Republic","sov_a3":"CZE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Czech Republic","adm0_a3":"CZE","geou_dif":0,"geounit":"Czech Republic","gu_a3":"CZE","su_dif":0,"subunit":"Czech Republic","su_a3":"CZE","brk_diff":0,"name":"Czech Rep.","name_long":"Czech Republic","brk_a3":"CZE","brk_name":"Czech Rep.","brk_group":"","abbrev":"Cz. Rep.","postal":"CZ","formal_en":"Czech Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Czech Republic","name_alt":"","mapcolor7":1,"mapcolor8":1,"mapcolor9":2,"mapcolor13":6,"pop_est":10211904,"gdp_md_est":265200,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"CZ","iso_a3":"CZE","iso_n3":"203","un_a3":"203","wb_a2":"CZ","wb_a3":"CZE","woe_id":-99,"adm0_a3_is":"CZE","adm0_a3_us":"CZE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":10,"long_len":14,"abbrev_len":8,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[9.9219,54.9831],[9.9396,54.5966],[10.9501,54.3636],[10.9395,54.0087],[11.9563,54.1965],[12.5184,54.4704],[13.6475,54.0755],[14.1197,53.757],[14.3533,53.2482],[14.0745,52.9813],[14.4376,52.6249],[14.685,52.0899],[14.6071,51.7452],[15.017,51.1067],[14.5707,51.0023],[14.307,51.1173],[14.0562,50.9269],[13.3381,50.7332],[12.9668,50.4841],[12.2401,50.2663],[12.4152,49.9691],[12.521,49.5474],[13.0313,49.3071],[13.5959,48.8772],[13.2434,48.4161],[12.8841,48.2891],[13.0259,47.6376],[12.9326,47.4676],[12.6208,47.6724],[12.1414,47.7031],[11.4264,47.5238],[10.5445,47.5664],[10.4021,47.3025],[9.8961,47.5802],[9.5942,47.5251],[8.5226,47.8308],[8.3173,47.6136],[7.4668,47.6206],[7.5937,48.333],[8.0993,49.0178],[6.6582,49.202],[6.1863,49.4638],[6.2428,49.9022],[6.0431,50.1281],[6.1567,50.8037],[5.9887,51.8516],[6.5894,51.852],[6.8429,52.2284],[7.0921,53.144],[6.9051,53.4822],[7.1004,53.6939],[7.9362,53.7483],[8.1217,53.5278],[8.8007,54.0208],[8.5721,54.3956],[8.5262,54.9627],[9.282,54.8309],[9.9219,54.9831]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Germany","sov_a3":"DEU","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Germany","adm0_a3":"DEU","geou_dif":0,"geounit":"Germany","gu_a3":"DEU","su_dif":0,"subunit":"Germany","su_a3":"DEU","brk_diff":0,"name":"Germany","name_long":"Germany","brk_a3":"DEU","brk_name":"Germany","brk_group":"","abbrev":"Ger.","postal":"D","formal_en":"Federal Republic of Germany","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Germany","name_alt":"","mapcolor7":2,"mapcolor8":5,"mapcolor9":5,"mapcolor13":1,"pop_est":82329758,"gdp_md_est":2918000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"DE","iso_a3":"DEU","iso_n3":"276","un_a3":"276","wb_a2":"DE","wb_a3":"DEU","woe_id":-99,"adm0_a3_is":"DEU","adm0_a3_us":"DEU","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[43.0812,12.6996],[43.3179,12.3901],[43.2864,11.9749],[42.7159,11.7356],[43.1453,11.462],[42.7769,10.9269],[42.5549,11.1051],[42.3141,11.0342],[41.7556,11.0509],[41.7396,11.3551],[41.6618,11.6312],[42,12.1],[42.3516,12.5422],[42.7796,12.4554],[43.0812,12.6996]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Djibouti","sov_a3":"DJI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Djibouti","adm0_a3":"DJI","geou_dif":0,"geounit":"Djibouti","gu_a3":"DJI","su_dif":0,"subunit":"Djibouti","su_a3":"DJI","brk_diff":0,"name":"Djibouti","name_long":"Djibouti","brk_a3":"DJI","brk_name":"Djibouti","brk_group":"","abbrev":"Dji.","postal":"DJ","formal_en":"Republic of Djibouti","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Djibouti","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":4,"mapcolor13":8,"pop_est":516055,"gdp_md_est":1885,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"DJ","iso_a3":"DJI","iso_n3":"262","un_a3":"262","wb_a2":"DJ","wb_a3":"DJI","woe_id":-99,"adm0_a3_is":"DJI","adm0_a3_us":"DJI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Middle East & North Africa","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[12.69,55.61],[12.09,54.8],[11.0435,55.3649],[10.9039,55.78],[12.3709,56.1114],[12.69,55.61]],[[10.9122,56.4586],[10.6678,56.0814],[10.37,56.19],[9.65,55.47],[9.9219,54.9831],[9.282,54.8309],[8.5262,54.9627],[8.1203,55.5177],[8.09,56.54],[8.2566,56.81],[8.5434,57.11],[9.4245,57.1721],[9.7756,57.4479],[10.58,57.73],[10.5461,57.2157],[10.25,56.89],[10.37,56.61],[10.9122,56.4586]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Denmark","sov_a3":"DN1","adm0_dif":1,"level":2,"type":"Country","admin":"Denmark","adm0_a3":"DNK","geou_dif":0,"geounit":"Denmark","gu_a3":"DNK","su_dif":0,"subunit":"Denmark","su_a3":"DNK","brk_diff":0,"name":"Denmark","name_long":"Denmark","brk_a3":"DNK","brk_name":"Denmark","brk_group":"","abbrev":"Den.","postal":"DK","formal_en":"Kingdom of Denmark","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Denmark","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":3,"mapcolor13":12,"pop_est":5500510,"gdp_md_est":203600,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"DK","iso_a3":"DNK","iso_n3":"208","un_a3":"208","wb_a2":"DK","wb_a3":"DNK","woe_id":-99,"adm0_a3_is":"DNK","adm0_a3_us":"DNK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-71.7124,19.7145],[-71.5873,19.8849],[-70.8067,19.8803],[-70.2144,19.6229],[-69.9508,19.648],[-69.7693,19.2933],[-69.2221,19.3132],[-69.2543,19.0152],[-68.8094,18.9791],[-68.3179,18.6122],[-68.6893,18.2051],[-69.1649,18.4226],[-69.624,18.3807],[-69.9529,18.4283],[-70.1332,18.2459],[-70.5171,18.1843],[-70.6693,18.4269],[-71,18.2833],[-71.4002,17.5986],[-71.6577,17.7576],[-71.7083,18.045],[-71.6877,18.3167],[-71.9451,18.6169],[-71.7013,18.7854],[-71.6249,19.1698],[-71.7124,19.7145]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Dominican Republic","sov_a3":"DOM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Dominican Republic","adm0_a3":"DOM","geou_dif":0,"geounit":"Dominican Republic","gu_a3":"DOM","su_dif":0,"subunit":"Dominican Republic","su_a3":"DOM","brk_diff":0,"name":"Dominican Rep.","name_long":"Dominican Republic","brk_a3":"DOM","brk_name":"Dominican Rep.","brk_group":"","abbrev":"Dom. Rep.","postal":"DO","formal_en":"Dominican Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Dominican Republic","name_alt":"","mapcolor7":5,"mapcolor8":2,"mapcolor9":5,"mapcolor13":7,"pop_est":9650054,"gdp_md_est":78000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"DO","iso_a3":"DOM","iso_n3":"214","un_a3":"214","wb_a2":"DO","wb_a3":"DOM","woe_id":-99,"adm0_a3_is":"DOM","adm0_a3_us":"DOM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":14,"long_len":18,"abbrev_len":9,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[11.9995,23.4717],[8.5729,21.5657],[5.6776,19.6012],[4.2674,19.1553],[3.1581,19.0574],[3.1467,19.6936],[2.6836,19.8562],[2.061,20.1422],[1.8232,20.6108],[-1.5501,22.7927],[-4.9233,24.9746],[-8.6844,27.3957],[-8.6651,27.5895],[-8.6656,27.6564],[-8.6741,28.8413],[-7.0592,29.5792],[-6.0606,29.7317],[-5.2421,30.0004],[-4.8596,30.5012],[-3.6904,30.897],[-3.6475,31.6373],[-3.069,31.7245],[-2.6166,32.0943],[-1.3079,32.2629],[-1.1246,32.6515],[-1.388,32.864],[-1.7335,33.9197],[-1.793,34.5279],[-2.1699,35.1684],[-1.2086,35.7148],[-0.1275,35.8887],[0.5039,36.3013],[1.4669,36.6056],[3.1617,36.7839],[4.8158,36.865],[5.3201,36.7165],[6.2618,37.1107],[7.3304,37.1184],[7.7371,36.8857],[8.421,36.9464],[8.2178,36.4332],[8.3764,35.4799],[8.141,34.6551],[7.5245,34.0974],[7.6126,33.3441],[8.4305,32.7483],[8.4391,32.5063],[9.0556,32.1027],[9.4821,30.3076],[9.8056,29.4246],[9.86,28.96],[9.6839,28.1442],[9.7561,27.6883],[9.6291,27.141],[9.7163,26.5122],[9.3194,26.0943],[9.9107,25.3655],[9.9483,24.937],[10.3038,24.3793],[10.7714,24.5625],[11.5607,24.0979],[11.9995,23.4717]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Algeria","sov_a3":"DZA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Algeria","adm0_a3":"DZA","geou_dif":0,"geounit":"Algeria","gu_a3":"DZA","su_dif":0,"subunit":"Algeria","su_a3":"DZA","brk_diff":0,"name":"Algeria","name_long":"Algeria","brk_a3":"DZA","brk_name":"Algeria","brk_group":"","abbrev":"Alg.","postal":"DZ","formal_en":"People's Democratic Republic of Algeria","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Algeria","name_alt":"","mapcolor7":5,"mapcolor8":1,"mapcolor9":6,"mapcolor13":3,"pop_est":34178188,"gdp_md_est":232900,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"DZ","iso_a3":"DZA","iso_n3":"012","un_a3":"012","wb_a2":"DZ","wb_a3":"DZA","woe_id":-99,"adm0_a3_is":"DZA","adm0_a3_us":"DZA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-80.3026,-3.4049],[-79.7703,-2.6575],[-79.9866,-2.2208],[-80.3688,-2.6852],[-80.9678,-2.2469],[-80.7648,-1.965],[-80.9337,-1.0575],[-80.5834,-0.9067],[-80.3993,-0.2837],[-80.0209,0.3603],[-80.0906,0.7684],[-79.5428,0.9829],[-78.8553,1.3809],[-77.8551,0.8099],[-77.6686,0.8259],[-77.425,0.3957],[-76.5764,0.2569],[-76.2923,0.416],[-75.8015,0.0848],[-75.3732,-0.152],[-75.2337,-0.9114],[-75.545,-1.5616],[-76.6354,-2.6087],[-77.8379,-3.003],[-78.4507,-3.8731],[-78.6399,-4.5478],[-79.2053,-4.9591],[-79.625,-4.4542],[-80.0289,-4.3461],[-80.4422,-4.4257],[-80.4693,-4.0593],[-80.184,-3.8212],[-80.3026,-3.4049]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Ecuador","sov_a3":"ECU","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ecuador","adm0_a3":"ECU","geou_dif":0,"geounit":"Ecuador","gu_a3":"ECU","su_dif":0,"subunit":"Ecuador","su_a3":"ECU","brk_diff":0,"name":"Ecuador","name_long":"Ecuador","brk_a3":"ECU","brk_name":"Ecuador","brk_group":"","abbrev":"Ecu.","postal":"EC","formal_en":"Republic of Ecuador","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Ecuador","name_alt":"","mapcolor7":1,"mapcolor8":5,"mapcolor9":2,"mapcolor13":12,"pop_est":14573101,"gdp_md_est":107700,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"EC","iso_a3":"ECU","iso_n3":"218","un_a3":"218","wb_a2":"EC","wb_a3":"ECU","woe_id":-99,"adm0_a3_is":"ECU","adm0_a3_us":"ECU","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[34.9226,29.5013],[34.6417,29.0994],[34.4266,28.344],[34.1545,27.8233],[33.9214,27.6487],[33.5881,27.9714],[33.1368,28.4177],[32.4232,29.8511],[32.3205,29.7604],[32.7348,28.7052],[33.3488,27.6999],[34.1046,26.1423],[34.4739,25.5986],[34.7951,25.0338],[35.6924,23.9267],[35.4937,23.7524],[35.526,23.1024],[36.6907,22.2049],[36.8662,22],[32.9,22],[29.02,22],[25,22],[25,25.6825],[25,29.2387],[24.7001,30.0442],[24.9576,30.6616],[24.8029,31.0893],[25.1648,31.5692],[26.4953,31.5857],[27.4576,31.3213],[28.4505,31.0258],[28.9135,30.8701],[29.6834,31.1869],[30.095,31.4734],[30.9769,31.5559],[31.688,31.4296],[31.9604,30.9336],[32.1925,31.2603],[32.9939,31.0241],[33.7734,30.9675],[34.2654,31.2194],[34.9226,29.5013]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Egypt","sov_a3":"EGY","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Egypt","adm0_a3":"EGY","geou_dif":0,"geounit":"Egypt","gu_a3":"EGY","su_dif":0,"subunit":"Egypt","su_a3":"EGY","brk_diff":0,"name":"Egypt","name_long":"Egypt","brk_a3":"EGY","brk_name":"Egypt","brk_group":"","abbrev":"Egypt","postal":"EG","formal_en":"Arab Republic of Egypt","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Egypt, Arab Rep.","name_alt":"","mapcolor7":4,"mapcolor8":6,"mapcolor9":7,"mapcolor13":2,"pop_est":83082869,"gdp_md_est":443700,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"EG","iso_a3":"EGY","iso_n3":"818","un_a3":"818","wb_a2":"EG","wb_a3":"EGY","woe_id":-99,"adm0_a3_is":"EGY","adm0_a3_us":"EGY","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[42.3516,12.5422],[42.0097,12.8658],[41.5986,13.4521],[41.1552,13.7733],[40.8966,14.1186],[40.0262,14.5196],[39.3406,14.5315],[39.0994,14.7406],[38.513,14.5055],[37.9061,14.9594],[37.5938,14.2131],[36.4295,14.4221],[36.3232,14.8225],[36.7539,16.2919],[36.8525,16.9565],[37.1675,17.2631],[37.904,17.4275],[38.4101,17.9983],[38.9906,16.8406],[39.2661,15.9227],[39.8143,15.4356],[41.1793,14.4911],[41.735,13.921],[42.2768,13.344],[42.5896,13.0004],[43.0812,12.6996],[42.7796,12.4554],[42.3516,12.5422]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Eritrea","sov_a3":"ERI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Eritrea","adm0_a3":"ERI","geou_dif":0,"geounit":"Eritrea","gu_a3":"ERI","su_dif":0,"subunit":"Eritrea","su_a3":"ERI","brk_diff":0,"name":"Eritrea","name_long":"Eritrea","brk_a3":"ERI","brk_name":"Eritrea","brk_group":"","abbrev":"Erit.","postal":"ER","formal_en":"State of Eritrea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Eritrea","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":2,"mapcolor13":12,"pop_est":5647168,"gdp_md_est":3945,"pop_year":-99,"lastcensus":1984,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"ER","iso_a3":"ERI","iso_n3":"232","un_a3":"232","wb_a2":"ER","wb_a3":"ERI","woe_id":-99,"adm0_a3_is":"ERI","adm0_a3_us":"ERI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-9.0348,41.8806],[-8.9844,42.5928],[-9.3929,43.0266],[-7.9782,43.7483],[-6.7545,43.5679],[-5.4119,43.5742],[-4.3478,43.4034],[-3.5175,43.4559],[-1.9014,43.4228],[-1.5028,43.034],[0.338,42.5795],[0.7016,42.7957],[1.8268,42.3434],[2.986,42.473],[3.0395,41.8921],[2.0918,41.2261],[0.8105,41.0147],[0.7213,40.6783],[0.1067,40.1239],[-0.2787,39.31],[0.1113,38.7385],[-0.4671,38.2924],[-0.6834,37.6424],[-1.4384,37.4431],[-2.1465,36.6741],[-3.4158,36.6589],[-4.3689,36.6778],[-4.9952,36.3247],[-5.3772,35.9469],[-5.8664,36.0298],[-6.2367,36.3677],[-6.5202,36.9429],[-7.4537,37.0978],[-7.5371,37.4289],[-7.1665,37.8039],[-7.0293,38.0758],[-7.3741,38.3731],[-7.098,39.0301],[-7.4986,39.6296],[-7.0666,39.7119],[-7.0264,40.1845],[-6.864,40.3309],[-6.8511,41.1111],[-6.3891,41.3818],[-6.6686,41.8834],[-7.2513,41.9183],[-7.4225,41.7921],[-8.0132,41.7909],[-8.2639,42.2805],[-8.6719,42.1347],[-9.0348,41.8806]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Spain","sov_a3":"ESP","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Spain","adm0_a3":"ESP","geou_dif":0,"geounit":"Spain","gu_a3":"ESP","su_dif":0,"subunit":"Spain","su_a3":"ESP","brk_diff":0,"name":"Spain","name_long":"Spain","brk_a3":"ESP","brk_name":"Spain","brk_group":"","abbrev":"Sp.","postal":"E","formal_en":"Kingdom of Spain","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Spain","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":5,"mapcolor13":5,"pop_est":40525002,"gdp_md_est":1403000,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"ES","iso_a3":"ESP","iso_n3":"724","un_a3":"724","wb_a2":"ES","wb_a3":"ESP","woe_id":-99,"adm0_a3_is":"ESP","adm0_a3_us":"ESP","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":5,"long_len":5,"abbrev_len":3,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[24.3129,57.7934],[24.4289,58.3834],[24.0612,58.2574],[23.4266,58.6128],[23.3398,59.1872],[24.6042,59.4659],[25.8642,59.6111],[26.9491,59.4458],[27.9811,59.4754],[28.1317,59.3008],[27.4202,58.7246],[27.7167,57.7919],[27.2882,57.4745],[26.4635,57.4764],[25.6028,57.8475],[25.1646,57.9702],[24.3129,57.7934]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Estonia","sov_a3":"EST","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Estonia","adm0_a3":"EST","geou_dif":0,"geounit":"Estonia","gu_a3":"EST","su_dif":0,"subunit":"Estonia","su_a3":"EST","brk_diff":0,"name":"Estonia","name_long":"Estonia","brk_a3":"EST","brk_name":"Estonia","brk_group":"","abbrev":"Est.","postal":"EST","formal_en":"Republic of Estonia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Estonia","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":1,"mapcolor13":10,"pop_est":1299371,"gdp_md_est":27410,"pop_year":-99,"lastcensus":2000,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"EE","iso_a3":"EST","iso_n3":"233","un_a3":"233","wb_a2":"EE","wb_a3":"EST","woe_id":-99,"adm0_a3_is":"EST","adm0_a3_us":"EST","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[37.9061,14.9594],[38.513,14.5055],[39.0994,14.7406],[39.3406,14.5315],[40.0263,14.5196],[40.8966,14.1186],[41.1552,13.7733],[41.5986,13.4521],[42.0097,12.8658],[42.3516,12.5422],[42,12.1],[41.6618,11.6312],[41.7396,11.3551],[41.7556,11.0509],[42.3141,11.0342],[42.5549,11.1051],[42.7769,10.9269],[42.5588,10.5726],[42.9281,10.0219],[43.297,9.5405],[43.6788,9.1836],[46.9483,7.9969],[47.7894,8.003],[44.9636,5.0016],[43.6609,4.9576],[42.7697,4.2526],[42.1286,4.2341],[41.8551,3.9189],[41.1718,3.9191],[40.7685,4.257],[39.8549,3.8388],[39.5594,3.4221],[38.8925,3.5007],[38.6711,3.6161],[38.437,3.5885],[38.1209,3.5986],[36.8551,4.4479],[36.1591,4.4479],[35.8174,4.777],[35.8174,5.3382],[35.298,5.506],[34.707,6.5942],[34.2503,6.8261],[34.0751,7.226],[33.5683,7.7133],[32.9542,7.785],[33.2948,8.3546],[33.8255,8.3792],[33.975,8.6846],[33.9616,9.5836],[34.2575,10.6301],[34.7312,10.9102],[34.8316,11.319],[35.2605,12.0829],[35.8636,12.5783],[36.2702,13.5633],[36.4295,14.4221],[37.5938,14.2131],[37.9061,14.9594]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Ethiopia","sov_a3":"ETH","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ethiopia","adm0_a3":"ETH","geou_dif":0,"geounit":"Ethiopia","gu_a3":"ETH","su_dif":0,"subunit":"Ethiopia","su_a3":"ETH","brk_diff":0,"name":"Ethiopia","name_long":"Ethiopia","brk_a3":"ETH","brk_name":"Ethiopia","brk_group":"","abbrev":"Eth.","postal":"ET","formal_en":"Federal Democratic Republic of Ethiopia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Ethiopia","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":1,"mapcolor13":13,"pop_est":85237338,"gdp_md_est":68770,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"ET","iso_a3":"ETH","iso_n3":"231","un_a3":"231","wb_a2":"ET","wb_a3":"ETH","woe_id":-99,"adm0_a3_is":"ETH","adm0_a3_us":"ETH","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[28.5919,69.0648],[28.4459,68.3646],[29.9774,67.6983],[29.0546,66.9443],[30.2177,65.806],[29.5444,64.9487],[30.4447,64.2045],[30.0359,63.5528],[31.5161,62.8677],[31.14,62.3577],[30.2111,61.78],[28.07,60.5035],[26.2552,60.424],[24.4966,60.0573],[22.8697,59.8464],[22.2908,60.3919],[21.3222,60.7202],[21.5449,61.7053],[21.0592,62.6074],[21.536,63.1897],[22.4427,63.8178],[24.7305,64.9023],[25.3981,65.1114],[25.294,65.5343],[23.9034,66.0069],[23.5659,66.3961],[23.5395,67.936],[21.9785,68.6168],[20.6456,69.1062],[21.2449,69.3704],[22.3562,68.8417],[23.662,68.8912],[24.7357,68.6496],[25.6892,69.0921],[26.1796,69.8253],[27.7323,70.1642],[29.0156,69.7665],[28.5919,69.0648]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Finland","sov_a3":"FI1","adm0_dif":1,"level":2,"type":"Country","admin":"Finland","adm0_a3":"FIN","geou_dif":0,"geounit":"Finland","gu_a3":"FIN","su_dif":0,"subunit":"Finland","su_a3":"FIN","brk_diff":0,"name":"Finland","name_long":"Finland","brk_a3":"FIN","brk_name":"Finland","brk_group":"","abbrev":"Fin.","postal":"FIN","formal_en":"Republic of Finland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Finland","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":4,"mapcolor13":6,"pop_est":5250275,"gdp_md_est":193500,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"FI","iso_a3":"FIN","iso_n3":"246","un_a3":"246","wb_a2":"FI","wb_a3":"FIN","woe_id":-99,"adm0_a3_is":"FIN","adm0_a3_us":"FIN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[178.3736,-17.3399],[178.7181,-17.6285],[178.5527,-18.1506],[177.9327,-18.288],[177.3815,-18.1643],[177.285,-17.7246],[177.6709,-17.3811],[178.1256,-17.5048],[178.3736,-17.3399]],[[179.3641,-16.8014],[178.7251,-17.012],[178.5968,-16.6391],[179.0966,-16.434],[179.4135,-16.3791],[180,-16.0671],[180,-16.5552],[179.3641,-16.8014]],[[-179.9174,-16.5018],[-180,-16.5552],[-180,-16.0671],[-179.7933,-16.0209],[-179.9174,-16.5018]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Fiji","sov_a3":"FJI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Fiji","adm0_a3":"FJI","geou_dif":0,"geounit":"Fiji","gu_a3":"FJI","su_dif":0,"subunit":"Fiji","su_a3":"FJI","brk_diff":0,"name":"Fiji","name_long":"Fiji","brk_a3":"FJI","brk_name":"Fiji","brk_group":"","abbrev":"Fiji","postal":"FJ","formal_en":"Republic of Fiji","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Fiji","name_alt":"","mapcolor7":5,"mapcolor8":1,"mapcolor9":2,"mapcolor13":2,"pop_est":944720,"gdp_md_est":3579,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"FJ","iso_a3":"FJI","iso_n3":"242","un_a3":"242","wb_a2":"FJ","wb_a3":"FJI","woe_id":-99,"adm0_a3_is":"FJI","adm0_a3_us":"FJI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Melanesia","region_wb":"East Asia & Pacific","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-61.2,-51.85],[-60,-51.25],[-59.15,-51.5],[-58.55,-51.1],[-57.75,-51.55],[-58.05,-51.9],[-59.4,-52.2],[-59.85,-51.85],[-60.7,-52.3],[-61.2,-51.85]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"United Kingdom","sov_a3":"GB1","adm0_dif":1,"level":2,"type":"Dependency","admin":"Falkland Islands","adm0_a3":"FLK","geou_dif":0,"geounit":"Falkland Islands","gu_a3":"FLK","su_dif":0,"subunit":"Falkland Islands","su_a3":"FLK","brk_diff":1,"name":"Falkland Is.","name_long":"Falkland Islands","brk_a3":"B12","brk_name":"Falkland Is.","brk_group":"","abbrev":"Flk. Is.","postal":"FK","formal_en":"Falkland Islands","formal_fr":"","note_adm0":"U.K.","note_brk":"Admin. by U.K.; Claimed by Argentina","name_sort":"Falkland Islands","name_alt":"Islas Malvinas","mapcolor7":6,"mapcolor8":6,"mapcolor9":6,"mapcolor13":3,"pop_est":3140,"gdp_md_est":105.1,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"FK","iso_a3":"FLK","iso_n3":"238","un_a3":"238","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"FLK","adm0_a3_us":"FLK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":12,"long_len":16,"abbrev_len":8,"tiny":-99,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-52.5564,2.5047],[-52.9397,2.1249],[-53.4185,2.0534],[-53.5548,2.3349],[-53.7785,2.3767],[-54.0881,2.1056],[-54.5248,2.3118],[-54.2712,2.7387],[-54.1843,3.1942],[-54.0115,3.6226],[-54.3995,4.2126],[-54.4786,4.8968],[-53.958,5.7565],[-53.6185,5.6465],[-52.8821,5.4099],[-51.8233,4.5658],[-51.6578,4.1562],[-52.2493,3.2411],[-52.5564,2.5047]],[[9.56,42.1525],[9.2298,41.38],[8.7757,41.5836],[8.5442,42.2565],[8.746,42.6281],[9.39,43.01],[9.56,42.1525]],[[3.5882,50.379],[4.286,49.9075],[4.7992,49.9854],[5.6741,49.5295],[5.8978,49.4427],[6.1863,49.4638],[6.6582,49.202],[8.0993,49.0178],[7.5937,48.333],[7.4668,47.6206],[7.1922,47.4498],[6.7366,47.5418],[6.7687,47.2877],[6.0374,46.7258],[6.0226,46.273],[6.5001,46.4297],[6.8436,45.9911],[6.8024,45.7086],[7.0967,45.3331],[6.75,45.0285],[7.0076,44.2548],[7.5496,44.1279],[7.4352,43.6938],[6.5292,43.1289],[4.557,43.3997],[3.1004,43.0752],[2.986,42.473],[1.8268,42.3434],[0.7016,42.7957],[0.338,42.5795],[-1.5028,43.034],[-1.9014,43.4228],[-1.3842,44.0226],[-1.1938,46.0149],[-2.2257,47.0644],[-2.9633,47.5703],[-4.4916,47.955],[-4.5923,48.6842],[-3.2958,48.9017],[-1.6165,48.6444],[-1.9335,49.7763],[-0.9895,49.3474],[1.3388,50.1272],[1.639,50.9466],[2.5136,51.1485],[2.6584,50.7968],[3.1233,50.7804],[3.5882,50.379]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"France","sov_a3":"FR1","adm0_dif":1,"level":2,"type":"Country","admin":"France","adm0_a3":"FRA","geou_dif":0,"geounit":"France","gu_a3":"FRA","su_dif":0,"subunit":"France","su_a3":"FRA","brk_diff":0,"name":"France","name_long":"France","brk_a3":"FRA","brk_name":"France","brk_group":"","abbrev":"Fr.","postal":"F","formal_en":"French Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"France","name_alt":"","mapcolor7":7,"mapcolor8":5,"mapcolor9":9,"mapcolor13":11,"pop_est":64057792,"gdp_md_est":2128000,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"FR","iso_a3":"FRA","iso_n3":"250","un_a3":"250","wb_a2":"FR","wb_a3":"FRA","woe_id":-99,"adm0_a3_is":"FRA","adm0_a3_us":"FRA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":3,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[11.0938,-3.9788],[10.0661,-2.9695],[9.4052,-2.1443],[8.798,-1.1113],[8.8301,-0.7791],[9.0484,-0.4594],[9.2914,0.2687],[9.4929,1.0101],[9.8303,1.0679],[11.2851,1.0577],[11.2764,2.2611],[11.7517,2.3268],[12.3594,2.1928],[12.9513,2.3216],[13.0758,2.2671],[13.0031,1.8309],[13.2826,1.3142],[14.0267,1.3957],[14.2763,1.1969],[13.8433,0.0388],[14.3164,-0.5526],[14.4255,-1.3334],[14.2992,-1.9983],[13.9924,-2.4708],[13.1096,-2.4287],[12.5753,-1.9485],[12.4957,-2.3917],[11.821,-2.5142],[11.478,-2.7656],[11.8551,-3.4269],[11.0938,-3.9788]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Gabon","sov_a3":"GAB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Gabon","adm0_a3":"GAB","geou_dif":0,"geounit":"Gabon","gu_a3":"GAB","su_dif":0,"subunit":"Gabon","su_a3":"GAB","brk_diff":0,"name":"Gabon","name_long":"Gabon","brk_a3":"GAB","brk_name":"Gabon","brk_group":"","abbrev":"Gabon","postal":"GA","formal_en":"Gabonese Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Gabon","name_alt":"","mapcolor7":6,"mapcolor8":2,"mapcolor9":5,"mapcolor13":5,"pop_est":1514993,"gdp_md_est":21110,"pop_year":-99,"lastcensus":2003,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"GA","iso_a3":"GAB","iso_n3":"266","un_a3":"266","wb_a2":"GA","wb_a3":"GAB","woe_id":-99,"adm0_a3_is":"GAB","adm0_a3_us":"GAB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":3,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-5.6619,54.5546],[-6.1979,53.8676],[-6.9537,54.0737],[-7.5722,54.06],[-7.366,54.5958],[-7.5722,55.1316],[-6.7338,55.1729],[-5.6619,54.5546]],[[-3.005,58.635],[-4.0738,57.553],[-3.055,57.69],[-1.9593,57.6848],[-2.22,56.87],[-3.119,55.9738],[-2.085,55.91],[-2.0057,55.8049],[-1.115,54.625],[-0.4305,54.4644],[0.185,53.325],[0.47,52.93],[1.6815,52.7395],[1.56,52.1],[1.0506,51.8068],[1.4499,51.2894],[0.5503,50.7657],[-0.7875,50.775],[-2.49,50.5],[-2.9563,50.6969],[-3.6174,50.2284],[-4.5425,50.3418],[-5.245,49.96],[-5.7766,50.1597],[-4.31,51.21],[-3.4149,51.426],[-3.4227,51.4268],[-4.9844,51.5935],[-5.2673,51.9914],[-4.2223,52.3014],[-4.77,52.84],[-4.58,53.495],[-3.0938,53.4045],[-3.0921,53.4044],[-2.945,53.985],[-3.6147,54.6009],[-3.63,54.615],[-4.8442,54.791],[-5.0825,55.0616],[-4.7191,55.5085],[-5.048,55.784],[-5.5864,55.3111],[-5.645,56.275],[-6.15,56.785],[-5.7868,57.8188],[-5.01,58.63],[-4.2115,58.5508],[-3.005,58.635]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"United Kingdom","sov_a3":"GB1","adm0_dif":1,"level":2,"type":"Country","admin":"United Kingdom","adm0_a3":"GBR","geou_dif":0,"geounit":"United Kingdom","gu_a3":"GBR","su_dif":0,"subunit":"United Kingdom","su_a3":"GBR","brk_diff":0,"name":"United Kingdom","name_long":"United Kingdom","brk_a3":"GBR","brk_name":"United Kingdom","brk_group":"","abbrev":"U.K.","postal":"GB","formal_en":"United Kingdom of Great Britain and Northern Ireland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"United Kingdom","name_alt":"","mapcolor7":6,"mapcolor8":6,"mapcolor9":6,"mapcolor13":3,"pop_est":62262000,"gdp_md_est":1977704,"pop_year":0,"lastcensus":2011,"gdp_year":2009,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"GB","iso_a3":"GBR","iso_n3":"826","un_a3":"826","wb_a2":"GB","wb_a3":"GBR","woe_id":-99,"adm0_a3_is":"GBR","adm0_a3_us":"GBR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":14,"long_len":14,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[41.5541,41.5357],[41.7032,41.9629],[41.4535,42.6451],[40.8755,43.0136],[40.3214,43.1286],[39.955,43.435],[40.077,43.5531],[40.9222,43.3822],[42.3944,43.2203],[43.756,42.7408],[43.9312,42.555],[44.5376,42.712],[45.4703,42.5028],[45.7764,42.0924],[46.405,41.8607],[46.1454,41.7228],[46.6379,41.1817],[46.5016,41.0644],[45.9626,41.1239],[45.2174,41.4115],[44.9725,41.2481],[43.5827,41.0921],[42.6195,41.5832],[41.5541,41.5357]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Georgia","sov_a3":"GEO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Georgia","adm0_a3":"GEO","geou_dif":0,"geounit":"Georgia","gu_a3":"GEO","su_dif":0,"subunit":"Georgia","su_a3":"GEO","brk_diff":0,"name":"Georgia","name_long":"Georgia","brk_a3":"GEO","brk_name":"Georgia","brk_group":"","abbrev":"Geo.","postal":"GE","formal_en":"Georgia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Georgia","name_alt":"","mapcolor7":5,"mapcolor8":1,"mapcolor9":3,"mapcolor13":2,"pop_est":4615807,"gdp_md_est":21510,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"GE","iso_a3":"GEO","iso_n3":"268","un_a3":"268","wb_a2":"GE","wb_a3":"GEO","woe_id":-99,"adm0_a3_is":"GEO","adm0_a3_us":"GEO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[1.0601,5.9288],[-0.5076,5.3435],[-1.0636,5.0005],[-1.9647,4.7105],[-2.8561,4.9945],[-2.8107,5.3891],[-3.2444,6.2505],[-2.9836,7.3797],[-2.5622,8.2196],[-2.8275,9.6425],[-2.9639,10.3953],[-2.9404,10.9627],[-1.2034,11.0098],[-0.7616,10.9369],[-0.4387,11.0983],[0.0238,11.0187],[-0.0498,10.7069],[0.3676,10.1912],[0.3659,9.465],[0.4612,8.6772],[0.712,8.3125],[0.491,7.4117],[0.5704,6.9144],[0.8369,6.28],[1.0601,5.9288]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Ghana","sov_a3":"GHA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ghana","adm0_a3":"GHA","geou_dif":0,"geounit":"Ghana","gu_a3":"GHA","su_dif":0,"subunit":"Ghana","su_a3":"GHA","brk_diff":0,"name":"Ghana","name_long":"Ghana","brk_a3":"GHA","brk_name":"Ghana","brk_group":"","abbrev":"Ghana","postal":"GH","formal_en":"Republic of Ghana","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Ghana","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":1,"mapcolor13":4,"pop_est":23832495,"gdp_md_est":34200,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"GH","iso_a3":"GHA","iso_n3":"288","un_a3":"288","wb_a2":"GH","wb_a3":"GHA","woe_id":-99,"adm0_a3_is":"GHA","adm0_a3_us":"GHA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-8.4393,7.686],[-8.7221,7.7117],[-8.9261,7.309],[-9.2088,7.3139],[-9.4033,7.5269],[-9.3373,7.9285],[-9.7553,8.5411],[-10.0166,8.4285],[-10.2301,8.4062],[-10.5055,8.3489],[-10.4943,8.7155],[-10.6548,8.9772],[-10.6224,9.2679],[-10.8392,9.6882],[-11.1175,10.0459],[-11.9173,10.047],[-12.1503,9.8586],[-12.4259,9.8358],[-12.5967,9.6202],[-12.712,9.3427],[-13.2466,8.903],[-13.6852,9.4947],[-14.074,9.8862],[-14.3301,10.0157],[-14.5797,10.2145],[-14.6932,10.6563],[-14.8396,10.8766],[-15.1303,11.0404],[-14.6857,11.5278],[-14.3822,11.5093],[-14.1214,11.6771],[-13.9008,11.6787],[-13.7432,11.8113],[-13.8283,12.1426],[-13.7187,12.2472],[-13.7005,12.5862],[-13.2178,12.5759],[-12.4991,12.3321],[-12.2786,12.3544],[-12.2036,12.4656],[-11.6583,12.3866],[-11.5139,12.443],[-11.4562,12.0768],[-11.2976,12.078],[-11.0366,12.2112],[-10.8708,12.1779],[-10.5932,11.924],[-10.1652,11.8441],[-9.891,12.0605],[-9.5679,12.1942],[-9.3276,12.3343],[-9.1275,12.3081],[-8.9053,12.0884],[-8.7861,11.8126],[-8.3763,11.3936],[-8.5813,11.1362],[-8.6203,10.8109],[-8.4073,10.9093],[-8.2824,10.7926],[-8.3354,10.4948],[-8.0299,10.2065],[-8.2293,10.129],[-8.3096,9.7895],[-8.0791,9.3762],[-7.8321,8.5757],[-8.2035,8.4555],[-8.299,8.3164],[-8.2218,8.1233],[-8.2807,7.6872],[-8.4393,7.686]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Guinea","sov_a3":"GIN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Guinea","adm0_a3":"GIN","geou_dif":0,"geounit":"Guinea","gu_a3":"GIN","su_dif":0,"subunit":"Guinea","su_a3":"GIN","brk_diff":0,"name":"Guinea","name_long":"Guinea","brk_a3":"GIN","brk_name":"Guinea","brk_group":"","abbrev":"Gin.","postal":"GN","formal_en":"Republic of Guinea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Guinea","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":7,"mapcolor13":2,"pop_est":10057975,"gdp_md_est":10600,"pop_year":-99,"lastcensus":1996,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"GN","iso_a3":"GIN","iso_n3":"324","un_a3":"324","wb_a2":"GN","wb_a3":"GIN","woe_id":-99,"adm0_a3_is":"GIN","adm0_a3_us":"GIN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-16.8415,13.1514],[-16.7137,13.595],[-15.6246,13.6236],[-15.3988,13.8604],[-15.0817,13.8765],[-14.687,13.6304],[-14.3767,13.6257],[-14.047,13.7941],[-13.845,13.505],[-14.2777,13.2806],[-14.7122,13.2982],[-15.1412,13.5095],[-15.5118,13.2786],[-15.691,13.2704],[-15.9313,13.1303],[-16.8415,13.1514]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Gambia","sov_a3":"GMB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Gambia","adm0_a3":"GMB","geou_dif":0,"geounit":"Gambia","gu_a3":"GMB","su_dif":0,"subunit":"Gambia","su_a3":"GMB","brk_diff":0,"name":"Gambia","name_long":"The Gambia","brk_a3":"GMB","brk_name":"Gambia","brk_group":"","abbrev":"Gambia","postal":"GM","formal_en":"Republic of the Gambia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Gambia, The","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":8,"pop_est":1782893,"gdp_md_est":2272,"pop_year":-99,"lastcensus":2003,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"GM","iso_a3":"GMB","iso_n3":"270","un_a3":"270","wb_a2":"GM","wb_a3":"GMB","woe_id":-99,"adm0_a3_is":"GMB","adm0_a3_us":"GMB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":10,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-15.1303,11.0404],[-15.6642,11.4585],[-16.0852,11.5246],[-16.3148,11.8065],[-16.3089,11.9587],[-16.6138,12.1709],[-16.6775,12.3849],[-16.1477,12.5478],[-15.8166,12.5156],[-15.5485,12.6282],[-13.7005,12.5862],[-13.7187,12.2472],[-13.8283,12.1426],[-13.7432,11.8113],[-13.9008,11.6787],[-14.1214,11.6771],[-14.3822,11.5093],[-14.6857,11.5278],[-15.1303,11.0404]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Guinea Bissau","sov_a3":"GNB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Guinea Bissau","adm0_a3":"GNB","geou_dif":0,"geounit":"Guinea Bissau","gu_a3":"GNB","su_dif":0,"subunit":"Guinea Bissau","su_a3":"GNB","brk_diff":0,"name":"Guinea-Bissau","name_long":"Guinea-Bissau","brk_a3":"GNB","brk_name":"Guinea-Bissau","brk_group":"","abbrev":"GnB.","postal":"GW","formal_en":"Republic of Guinea-Bissau","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Guinea-Bissau","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":3,"mapcolor13":4,"pop_est":1533964,"gdp_md_est":904.2,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"GW","iso_a3":"GNB","iso_n3":"624","un_a3":"624","wb_a2":"GW","wb_a3":"GNB","woe_id":-99,"adm0_a3_is":"GNB","adm0_a3_us":"GNB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":13,"long_len":13,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[9.4929,1.0101],[9.3056,1.1609],[9.6492,2.2839],[11.2764,2.2611],[11.2851,1.0577],[9.8303,1.0679],[9.4929,1.0101]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Equatorial Guinea","sov_a3":"GNQ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Equatorial Guinea","adm0_a3":"GNQ","geou_dif":0,"geounit":"Equatorial Guinea","gu_a3":"GNQ","su_dif":0,"subunit":"Equatorial Guinea","su_a3":"GNQ","brk_diff":0,"name":"Eq. Guinea","name_long":"Equatorial Guinea","brk_a3":"GNQ","brk_name":"Eq. Guinea","brk_group":"","abbrev":"Eq. G.","postal":"GQ","formal_en":"Republic of Equatorial Guinea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Equatorial Guinea","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":4,"mapcolor13":8,"pop_est":650702,"gdp_md_est":14060,"pop_year":0,"lastcensus":2002,"gdp_year":0,"economy":"7. Least developed region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"GQ","iso_a3":"GNQ","iso_n3":"226","un_a3":"226","wb_a2":"GQ","wb_a3":"GNQ","woe_id":-99,"adm0_a3_is":"GNQ","adm0_a3_us":"GNQ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":10,"long_len":17,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[23.7,35.705],[24.2467,35.368],[25.025,35.425],[25.7692,35.354],[25.745,35.18],[26.29,35.3],[26.165,35.005],[24.725,34.92],[24.735,35.085],[23.515,35.28],[23.7,35.705]],[[26.6042,41.5621],[26.2946,40.9363],[26.0569,40.8241],[25.4477,40.8525],[24.9258,40.9471],[23.7148,40.6871],[24.408,40.125],[23.9,39.962],[23.343,39.961],[22.814,40.476],[22.6263,40.2566],[22.8497,39.6593],[23.35,39.19],[22.9731,38.9709],[23.53,38.51],[24.025,38.22],[24.04,37.655],[23.115,37.92],[23.41,37.41],[22.775,37.305],[23.1542,36.4225],[22.49,36.41],[21.67,36.845],[21.295,37.645],[21.12,38.3103],[20.73,38.77],[20.2177,39.3402],[20.15,39.625],[20.615,40.11],[20.675,40.435],[21,40.58],[21.02,40.8427],[21.6742,40.9313],[22.0554,41.1499],[22.5973,41.1305],[22.7618,41.3048],[22.9524,41.338],[23.6921,41.3091],[24.4926,41.5839],[25.1972,41.2345],[26.1061,41.3289],[26.117,41.8269],[26.6042,41.5621]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Greece","sov_a3":"GRC","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Greece","adm0_a3":"GRC","geou_dif":0,"geounit":"Greece","gu_a3":"GRC","su_dif":0,"subunit":"Greece","su_a3":"GRC","brk_diff":0,"name":"Greece","name_long":"Greece","brk_a3":"GRC","brk_name":"Greece","brk_group":"","abbrev":"Greece","postal":"GR","formal_en":"Hellenic Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Greece","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":2,"mapcolor13":9,"pop_est":10737428,"gdp_md_est":343000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"GR","iso_a3":"GRC","iso_n3":"300","un_a3":"300","wb_a2":"GR","wb_a3":"GRC","woe_id":-99,"adm0_a3_is":"GRC","adm0_a3_us":"GRC","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-46.7638,82.628],[-43.4064,83.2252],[-39.8975,83.1802],[-38.6221,83.549],[-35.0879,83.6451],[-27.1005,83.5197],[-20.8454,82.7267],[-22.6918,82.3417],[-26.5175,82.2977],[-31.9,82.2],[-31.3965,82.0215],[-27.8567,82.1318],[-24.8445,81.787],[-22.9033,82.0932],[-22.0717,81.7345],[-23.1696,81.1527],[-20.6236,81.5246],[-15.7682,81.9125],[-12.7702,81.7189],[-12.2085,81.2915],[-16.2853,80.58],[-16.85,80.35],[-20.0462,80.1771],[-17.7303,80.1291],[-18.9,79.4],[-19.705,78.7513],[-19.6735,77.6386],[-18.4728,76.9857],[-20.035,76.9443],[-21.6794,76.628],[-19.8341,76.0981],[-19.599,75.2484],[-20.6682,75.1559],[-19.3728,74.2956],[-21.5942,74.2238],[-20.4345,73.8171],[-20.7623,73.4644],[-22.1722,73.3096],[-23.5659,73.3066],[-22.3131,72.6293],[-22.2995,72.1841],[-24.2783,72.5979],[-24.793,72.3302],[-23.443,72.0802],[-22.1328,71.469],[-21.7536,70.6637],[-23.536,70.471],[-24.307,70.8565],[-25.5434,71.4309],[-25.2014,70.7523],[-26.3628,70.2265],[-23.7274,70.184],[-22.349,70.1295],[-25.0293,69.2588],[-27.7474,68.4705],[-30.6737,68.125],[-31.7766,68.1208],[-32.811,67.7355],[-34.202,66.6797],[-36.3528,65.9789],[-37.0438,65.9377],[-38.375,65.6921],[-39.8122,65.4585],[-40.669,64.84],[-40.6828,64.139],[-41.1887,63.4825],[-42.8194,62.6823],[-42.4167,61.9009],[-42.8662,61.074],[-43.3784,60.0977],[-44.7875,60.0368],[-46.2636,60.8533],[-48.2629,60.8584],[-49.2331,61.4068],[-49.9004,62.3834],[-51.6332,63.6269],[-52.1401,64.2784],[-52.2766,65.1767],[-53.6617,66.0996],[-53.3016,66.8365],[-53.9691,67.189],[-52.9804,68.3576],[-51.4754,68.7296],[-51.0804,69.1478],[-50.8712,69.9291],[-52.0136,69.5749],[-52.5579,69.4262],[-53.4563,69.2836],[-54.6834,69.61],[-54.75,70.2893],[-54.3588,70.8213],[-53.4313,70.8358],[-51.3901,70.5698],[-53.1094,71.2049],[-54.0042,71.5472],[-55,71.4065],[-55.8347,71.6544],[-54.7182,72.5863],[-55.3263,72.9586],[-56.12,73.6498],[-57.3236,74.7103],[-58.5968,75.0986],[-58.5852,75.5173],[-61.2686,76.1024],[-63.3916,76.1752],[-66.0643,76.1349],[-68.5044,76.0614],[-69.6648,76.3798],[-71.4026,77.0086],[-68.7767,77.3231],[-66.764,77.376],[-71.0429,77.6359],[-73.297,78.0442],[-73.1594,78.4327],[-69.3734,78.9139],[-65.7107,79.3944],[-65.3239,79.7581],[-68.023,80.1172],[-67.1513,80.5158],[-63.6892,81.214],[-62.2344,81.3211],[-62.6512,81.7704],[-60.2825,82.0336],[-57.2074,82.1907],[-54.1344,82.1996],[-53.0433,81.8883],[-50.3906,82.4388],[-48.0039,82.0648],[-46.5998,81.9859],[-44.523,81.6607],[-46.9007,82.1998],[-46.7638,82.628]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Denmark","sov_a3":"DN1","adm0_dif":1,"level":2,"type":"Country","admin":"Greenland","adm0_a3":"GRL","geou_dif":0,"geounit":"Greenland","gu_a3":"GRL","su_dif":0,"subunit":"Greenland","su_a3":"GRL","brk_diff":0,"name":"Greenland","name_long":"Greenland","brk_a3":"GRL","brk_name":"Greenland","brk_group":"","abbrev":"Grlnd.","postal":"GL","formal_en":"Greenland","formal_fr":"","note_adm0":"Den.","note_brk":"","name_sort":"Greenland","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":3,"mapcolor13":12,"pop_est":57600,"gdp_md_est":1100,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"GL","iso_a3":"GRL","iso_n3":"304","un_a3":"304","wb_a2":"GL","wb_a3":"GRL","woe_id":-99,"adm0_a3_is":"GRL","adm0_a3_us":"GRL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Northern America","region_wb":"Europe & Central Asia","name_len":9,"long_len":9,"abbrev_len":6,"tiny":-99,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-90.0956,13.7353],[-90.6086,13.9098],[-91.2324,13.9278],[-91.6897,14.1262],[-92.2278,14.5388],[-92.2032,14.8301],[-92.0872,15.0646],[-92.2292,15.2514],[-91.748,16.0666],[-90.4645,16.0696],[-90.4389,16.4101],[-90.6008,16.4708],[-90.7118,16.6875],[-91.0817,16.9185],[-91.4539,17.2522],[-91.0023,17.2547],[-91.0015,17.8176],[-90.0679,17.8193],[-89.1431,17.8083],[-89.1508,17.0156],[-89.2291,15.8869],[-88.9306,15.8873],[-88.6046,15.7064],[-88.5184,15.8554],[-88.225,15.7277],[-88.6807,15.3462],[-89.1548,15.0664],[-89.2252,14.8743],[-89.1455,14.678],[-89.3533,14.4241],[-89.5873,14.3626],[-89.5342,14.2448],[-89.7219,14.1342],[-90.0647,13.882],[-90.0956,13.7353]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Guatemala","sov_a3":"GTM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Guatemala","adm0_a3":"GTM","geou_dif":0,"geounit":"Guatemala","gu_a3":"GTM","su_dif":0,"subunit":"Guatemala","su_a3":"GTM","brk_diff":0,"name":"Guatemala","name_long":"Guatemala","brk_a3":"GTM","brk_name":"Guatemala","brk_group":"","abbrev":"Guat.","postal":"GT","formal_en":"Republic of Guatemala","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Guatemala","name_alt":"","mapcolor7":3,"mapcolor8":3,"mapcolor9":3,"mapcolor13":6,"pop_est":13276517,"gdp_md_est":68580,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"GT","iso_a3":"GTM","iso_n3":"320","un_a3":"320","wb_a2":"GT","wb_a3":"GTM","woe_id":-99,"adm0_a3_is":"GTM","adm0_a3_us":"GTM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":9,"long_len":9,"abbrev_len":5,"tiny":4,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-59.7583,8.367],[-59.1017,7.9992],[-58.483,7.3477],[-58.4549,6.8328],[-58.0781,6.8091],[-57.5422,6.3213],[-57.1474,5.9731],[-57.3072,5.0736],[-57.9143,4.8126],[-57.8602,4.5768],[-58.0447,4.0609],[-57.6016,3.3347],[-57.2814,3.3335],[-57.1501,2.7689],[-56.5394,1.8995],[-56.7827,1.8637],[-57.3358,1.9485],[-57.661,1.6826],[-58.1134,1.5072],[-58.4295,1.4639],[-58.54,1.2681],[-59.0309,1.3177],[-59.646,1.7869],[-59.7185,2.2496],[-59.9745,2.7552],[-59.8154,3.6065],[-59.538,3.9588],[-59.7674,4.4235],[-60.111,4.575],[-59.981,5.0141],[-60.2137,5.2445],[-60.7336,5.2003],[-61.4103,5.9591],[-61.1394,6.2343],[-61.1593,6.6961],[-60.544,6.8566],[-60.2957,7.0439],[-60.638,7.415],[-60.5506,7.7796],[-59.7583,8.367]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Guyana","sov_a3":"GUY","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Guyana","adm0_a3":"GUY","geou_dif":0,"geounit":"Guyana","gu_a3":"GUY","su_dif":0,"subunit":"Guyana","su_a3":"GUY","brk_diff":0,"name":"Guyana","name_long":"Guyana","brk_a3":"GUY","brk_name":"Guyana","brk_group":"","abbrev":"Guy.","postal":"GY","formal_en":"Co-operative Republic of Guyana","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Guyana","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":4,"mapcolor13":8,"pop_est":772298,"gdp_md_est":2966,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"GY","iso_a3":"GUY","iso_n3":"328","un_a3":"328","wb_a2":"GY","wb_a3":"GUY","woe_id":-99,"adm0_a3_is":"GUY","adm0_a3_us":"GUY","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-87.3167,12.9847],[-87.4894,13.2975],[-87.7931,13.3845],[-87.7235,13.7851],[-87.8595,13.8933],[-88.0653,13.9646],[-88.504,13.8455],[-88.5412,13.9802],[-88.8431,14.1405],[-89.0585,14.34],[-89.3533,14.4241],[-89.1455,14.678],[-89.2252,14.8743],[-89.1548,15.0664],[-88.6807,15.3462],[-88.225,15.7277],[-88.1212,15.6887],[-87.9018,15.8645],[-87.6157,15.8788],[-87.5229,15.7973],[-87.3678,15.8469],[-86.9032,15.7567],[-86.4409,15.7828],[-86.1192,15.8934],[-86.002,16.0054],[-85.6833,15.9537],[-85.444,15.8857],[-85.1824,15.9092],[-84.9837,15.9959],[-84.527,15.8572],[-84.3683,15.8352],[-84.0631,15.6482],[-83.774,15.4241],[-83.4104,15.2709],[-83.1472,14.9958],[-83.49,15.0163],[-83.6286,14.8801],[-83.9757,14.7494],[-84.2283,14.7488],[-84.4493,14.6216],[-84.6496,14.6668],[-84.82,14.8196],[-84.9245,14.7905],[-85.0528,14.5515],[-85.1488,14.5602],[-85.1654,14.3544],[-85.5144,14.079],[-85.6987,13.9601],[-85.8013,13.8361],[-86.0963,14.0382],[-86.3121,13.7714],[-86.5207,13.7785],[-86.7551,13.7548],[-86.7338,13.2631],[-86.8806,13.2542],[-87.0058,13.0258],[-87.3167,12.9847]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Honduras","sov_a3":"HND","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Honduras","adm0_a3":"HND","geou_dif":0,"geounit":"Honduras","gu_a3":"HND","su_dif":0,"subunit":"Honduras","su_a3":"HND","brk_diff":0,"name":"Honduras","name_long":"Honduras","brk_a3":"HND","brk_name":"Honduras","brk_group":"","abbrev":"Hond.","postal":"HN","formal_en":"Republic of Honduras","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Honduras","name_alt":"","mapcolor7":2,"mapcolor8":5,"mapcolor9":2,"mapcolor13":5,"pop_est":7792854,"gdp_md_est":33720,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"HN","iso_a3":"HND","iso_n3":"340","un_a3":"340","wb_a2":"HN","wb_a3":"HND","woe_id":-99,"adm0_a3_is":"HND","adm0_a3_us":"HND","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[18.8298,45.9089],[19.0728,45.5215],[19.3905,45.2365],[19.0055,44.8602],[18.5532,45.0816],[17.8618,45.0677],[17.0021,45.2338],[16.5349,45.2116],[16.3182,45.0041],[15.9594,45.2338],[15.75,44.8187],[16.2397,44.3511],[16.4564,44.0412],[16.9162,43.6677],[17.2974,43.4463],[17.6749,43.0286],[18.56,42.65],[18.45,42.48],[17.51,42.85],[16.93,43.21],[16.0154,43.5072],[15.1745,44.2432],[15.3763,44.3179],[14.9203,44.7385],[14.9016,45.0761],[14.2587,45.2338],[13.9523,44.8021],[13.657,45.1369],[13.6794,45.4841],[13.7151,45.5003],[14.412,45.4662],[14.5951,45.6349],[14.9352,45.4717],[15.3277,45.4523],[15.324,45.7318],[15.6715,45.8342],[15.7687,46.2381],[16.5648,46.5038],[16.8825,46.3806],[17.6301,45.9518],[18.4561,45.7595],[18.8298,45.9089]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Croatia","sov_a3":"HRV","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Croatia","adm0_a3":"HRV","geou_dif":0,"geounit":"Croatia","gu_a3":"HRV","su_dif":0,"subunit":"Croatia","su_a3":"HRV","brk_diff":0,"name":"Croatia","name_long":"Croatia","brk_a3":"HRV","brk_name":"Croatia","brk_group":"","abbrev":"Cro.","postal":"HR","formal_en":"Republic of Croatia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Croatia","name_alt":"","mapcolor7":5,"mapcolor8":4,"mapcolor9":5,"mapcolor13":1,"pop_est":4489409,"gdp_md_est":82390,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"HR","iso_a3":"HRV","iso_n3":"191","un_a3":"191","wb_a2":"HR","wb_a3":"HRV","woe_id":-99,"adm0_a3_is":"HRV","adm0_a3_us":"HRV","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-73.1898,19.9157],[-72.5797,19.8715],[-71.7124,19.7145],[-71.6249,19.1698],[-71.7013,18.7854],[-71.9451,18.6169],[-71.6877,18.3167],[-71.7083,18.045],[-72.3725,18.215],[-72.8444,18.1456],[-73.4546,18.2179],[-73.9224,18.031],[-74.458,18.3425],[-74.3699,18.6649],[-73.4495,18.5261],[-72.6949,18.4458],[-72.3349,18.6684],[-72.7916,19.1016],[-72.7841,19.4836],[-73.415,19.6396],[-73.1898,19.9157]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Haiti","sov_a3":"HTI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Haiti","adm0_a3":"HTI","geou_dif":0,"geounit":"Haiti","gu_a3":"HTI","su_dif":0,"subunit":"Haiti","su_a3":"HTI","brk_diff":0,"name":"Haiti","name_long":"Haiti","brk_a3":"HTI","brk_name":"Haiti","brk_group":"","abbrev":"Haiti","postal":"HT","formal_en":"Republic of Haiti","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Haiti","name_alt":"","mapcolor7":2,"mapcolor8":1,"mapcolor9":7,"mapcolor13":2,"pop_est":9035536,"gdp_md_est":11500,"pop_year":-99,"lastcensus":2003,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"HT","iso_a3":"HTI","iso_n3":"332","un_a3":"332","wb_a2":"HT","wb_a3":"HTI","woe_id":-99,"adm0_a3_is":"HTI","adm0_a3_us":"HTI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[16.2023,46.8524],[16.5343,47.4962],[16.3406,47.7129],[16.9038,47.7149],[16.9797,48.1235],[17.4885,47.8675],[17.8571,47.7584],[18.6965,47.881],[18.777,48.0818],[19.1744,48.1114],[19.6614,48.2666],[19.7695,48.2027],[20.2391,48.3276],[20.4736,48.5629],[20.8013,48.6239],[21.8722,48.32],[22.0856,48.4223],[22.6408,48.1502],[22.7105,47.8822],[22.0998,47.6724],[21.6265,46.9942],[21.022,46.3161],[20.2202,46.1275],[19.596,46.1717],[18.8298,45.9089],[18.4561,45.7595],[17.6301,45.9518],[16.8825,46.3806],[16.5648,46.5038],[16.3705,46.8413],[16.2023,46.8524]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Hungary","sov_a3":"HUN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Hungary","adm0_a3":"HUN","geou_dif":0,"geounit":"Hungary","gu_a3":"HUN","su_dif":0,"subunit":"Hungary","su_a3":"HUN","brk_diff":0,"name":"Hungary","name_long":"Hungary","brk_a3":"HUN","brk_name":"Hungary","brk_group":"","abbrev":"Hun.","postal":"HU","formal_en":"Republic of Hungary","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Hungary","name_alt":"","mapcolor7":4,"mapcolor8":6,"mapcolor9":1,"mapcolor13":5,"pop_est":9905596,"gdp_md_est":196600,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"HU","iso_a3":"HUN","iso_n3":"348","un_a3":"348","wb_a2":"HU","wb_a3":"HUN","woe_id":-99,"adm0_a3_is":"HUN","adm0_a3_us":"HUN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[120.7156,-10.2396],[120.295,-10.2586],[118.9678,-9.558],[119.9003,-9.3613],[120.4258,-9.6659],[120.7755,-9.9697],[120.7156,-10.2396]],[[124.436,-10.14],[123.58,-10.36],[123.46,-10.24],[123.55,-9.9],[123.98,-9.29],[124.9687,-8.8928],[125.07,-9.09],[125.0885,-9.3932],[124.436,-10.14]],[[117.9,-8.0957],[118.2606,-8.3624],[118.8785,-8.2807],[119.1265,-8.7058],[117.9704,-8.9066],[117.2777,-9.0409],[116.7401,-9.0329],[117.0837,-8.4572],[117.632,-8.4493],[117.9,-8.0957]],[[122.9035,-8.0942],[122.757,-8.6498],[121.2545,-8.9337],[119.9244,-8.8104],[119.9209,-8.4449],[120.7151,-8.237],[121.3417,-8.5367],[122.0074,-8.4606],[122.9035,-8.0942]],[[108.6235,-6.7777],[110.5392,-6.8774],[110.7596,-6.4652],[112.6148,-6.946],[112.9788,-7.5942],[114.4789,-7.7765],[115.7055,-8.3708],[114.5645,-8.7518],[113.4647,-8.3489],[112.5597,-8.3762],[111.5221,-8.3021],[110.5861,-8.1226],[109.4277,-7.7407],[108.6937,-7.6416],[108.2778,-7.7667],[106.4541,-7.3549],[106.2806,-6.9249],[105.3655,-6.8514],[106.0516,-5.8959],[107.265,-5.955],[108.0721,-6.3458],[108.4868,-6.422],[108.6235,-6.7777]],[[134.7246,-6.2144],[134.2101,-6.8952],[134.1128,-6.1425],[134.2903,-5.7831],[134.4996,-5.445],[134.727,-5.7376],[134.7246,-6.2144]],[[127.2492,-3.4591],[126.8749,-3.791],[126.1838,-3.6074],[125.989,-3.1773],[127.0007,-3.1293],[127.2492,-3.4591]],[[130.4713,-3.0938],[130.8348,-3.8585],[129.9905,-3.4463],[129.1552,-3.3626],[128.5907,-3.4287],[127.8989,-3.3934],[128.1359,-2.8437],[129.371,-2.8022],[130.4713,-3.0938]],[[134.1434,-1.1519],[134.4226,-2.7692],[135.4576,-3.3678],[136.2933,-2.307],[137.4407,-1.7035],[138.3297,-1.7027],[139.1849,-2.0513],[139.9267,-2.4091],[141.0002,-2.6002],[141.0171,-5.859],[141.0339,-9.1179],[140.1434,-8.2972],[139.1278,-8.096],[138.8815,-8.3809],[137.6145,-8.4117],[138.0391,-7.5979],[138.6686,-7.3202],[138.4079,-6.2328],[137.9278,-5.3934],[135.9893,-4.5465],[135.1646,-4.4629],[133.6629,-3.5389],[133.3677,-4.0248],[132.984,-4.113],[132.7569,-3.7463],[132.7538,-3.3118],[131.9898,-2.8206],[133.0668,-2.4604],[133.78,-2.4798],[133.6962,-2.2145],[132.2324,-2.2125],[131.8362,-1.6172],[130.9428,-1.4325],[130.5196,-0.9377],[131.8675,-0.6955],[132.3801,-0.3695],[133.9855,-0.7802],[134.1434,-1.1519]],[[125.2405,1.4198],[124.437,0.4279],[123.6855,0.2356],[122.7231,0.4311],[121.0567,0.3812],[120.1831,0.2372],[120.0409,-0.5197],[120.9359,-1.4089],[121.4758,-0.956],[123.3406,-0.6157],[123.2584,-1.0762],[122.8227,-0.931],[122.3885,-1.5169],[121.5083,-1.9045],[122.4546,-3.1861],[122.2719,-3.5295],[123.171,-4.6837],[123.1623,-5.3406],[122.6285,-5.6346],[122.2364,-5.2829],[122.7196,-4.4642],[121.7382,-4.8513],[121.4895,-4.5746],[121.6192,-4.1885],[120.8982,-3.6021],[120.9724,-2.6276],[120.3055,-2.9316],[120.39,-4.0976],[120.4307,-5.5282],[119.7965,-5.6734],[119.3669,-5.3799],[119.6536,-4.4594],[119.4988,-3.4944],[119.0783,-3.487],[118.7678,-2.802],[119.181,-2.1471],[119.3234,-1.3531],[119.826,0.1543],[120.0357,0.5665],[120.8858,1.3092],[121.6668,1.0139],[122.9276,0.8752],[124.0775,0.9171],[125.066,1.6433],[125.2405,1.4198]],[[128.6882,1.1324],[128.636,0.2585],[128.1202,0.3564],[127.968,-0.2521],[128.38,-0.78],[128.1,-0.9],[127.6965,-0.2666],[127.3995,1.0117],[127.6005,1.8107],[127.9324,2.1746],[128.0042,1.6285],[128.5946,1.5408],[128.6882,1.1324]],[[117.8756,1.8276],[118.9967,0.9022],[117.8119,0.7842],[117.4783,0.1025],[117.5216,-0.8037],[116.56,-1.4877],[116.5338,-2.4835],[116.1481,-4.0127],[116.0009,-3.657],[114.8648,-4.107],[114.4687,-3.4957],[113.7557,-3.4392],[113.257,-3.1188],[112.0681,-3.4784],[111.7033,-2.9944],[111.0482,-3.0494],[110.2238,-2.934],[110.0709,-1.5929],[109.5719,-1.3149],[109.0919,-0.4595],[108.9527,0.4154],[109.0691,1.3419],[109.6633,2.0065],[109.8302,1.3381],[110.5141,0.7731],[111.1591,0.9765],[111.7975,0.9044],[112.3803,1.4101],[112.8598,1.4978],[113.8058,1.2175],[114.6214,1.4307],[115.134,2.8215],[115.5191,3.1692],[115.8655,4.3066],[117.0152,4.3061],[117.882,4.1376],[117.3132,3.2344],[118.0483,2.2877],[117.8756,1.8276]],[[105.8177,-5.8524],[104.7104,-5.8733],[103.8682,-5.0373],[102.5843,-4.2203],[102.1562,-3.6141],[101.3991,-2.7998],[100.9025,-2.0503],[100.142,-0.6503],[99.2637,0.1831],[98.97,1.0429],[98.6014,1.8235],[97.6996,2.4532],[97.1769,3.3088],[96.424,3.8689],[95.3809,4.9708],[95.293,5.4798],[95.9369,5.4395],[97.4849,5.2463],[98.3692,4.2684],[99.1426,3.5903],[99.694,3.1743],[100.6414,2.0994],[101.658,2.0837],[102.4983,1.3987],[103.0768,0.5614],[103.8384,0.1045],[103.4376,-0.7119],[104.0108,-1.0592],[104.37,-1.0848],[104.5395,-1.7824],[104.8879,-2.3404],[105.6221,-2.4288],[106.1086,-3.0618],[105.8574,-4.3055],[105.8177,-5.8524]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Indonesia","sov_a3":"IDN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Indonesia","adm0_a3":"IDN","geou_dif":0,"geounit":"Indonesia","gu_a3":"IDN","su_dif":0,"subunit":"Indonesia","su_a3":"IDN","brk_diff":0,"name":"Indonesia","name_long":"Indonesia","brk_a3":"IDN","brk_name":"Indonesia","brk_group":"","abbrev":"Indo.","postal":"INDO","formal_en":"Republic of Indonesia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Indonesia","name_alt":"","mapcolor7":6,"mapcolor8":6,"mapcolor9":6,"mapcolor13":11,"pop_est":240271522,"gdp_md_est":914600,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"4. Emerging region: MIKT","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"ID","iso_a3":"IDN","iso_n3":"360","un_a3":"360","wb_a2":"ID","wb_a3":"IDN","woe_id":-99,"adm0_a3_is":"IDN","adm0_a3_us":"IDN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":9,"long_len":9,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[77.8375,35.494],[78.9123,34.3219],[78.8111,33.5062],[79.2089,32.9944],[79.1761,32.4838],[78.4584,32.6182],[78.7389,31.5159],[79.7214,30.8827],[81.1113,30.1835],[80.4767,29.7299],[80.0884,28.7945],[81.0572,28.4161],[82,27.9255],[83.3042,27.3645],[84.675,27.2349],[85.2518,26.7262],[86.0244,26.631],[87.2275,26.3979],[88.0602,26.4146],[88.1748,26.8104],[88.0431,27.4458],[88.1204,27.8765],[88.7303,28.0869],[88.8142,27.2993],[88.8356,27.099],[89.7445,26.7194],[90.3733,26.8757],[91.2175,26.8086],[92.0335,26.8383],[92.1037,27.4526],[91.6967,27.7717],[92.5031,27.8969],[93.4133,28.6406],[94.566,29.2774],[95.4048,29.0317],[96.1177,29.4528],[96.5866,28.831],[96.2488,28.411],[97.3271,28.2616],[97.4026,27.8825],[97.052,27.6991],[97.134,27.0838],[96.4194,27.2646],[95.1248,26.5736],[95.1552,26.0013],[94.6032,25.1625],[94.5527,24.6752],[94.1067,23.8507],[93.3252,24.0786],[93.2863,23.0437],[93.0603,22.7031],[93.1661,22.2785],[92.6727,22.0412],[92.146,23.6275],[91.8699,23.6243],[91.7065,22.9853],[91.159,23.5035],[91.4677,24.0726],[91.9151,24.1304],[92.3762,24.9767],[91.7996,25.1474],[90.8722,25.1326],[89.9207,25.2697],[89.8325,25.9651],[89.3551,26.0144],[88.563,26.4465],[88.2098,25.7681],[88.9316,25.2387],[88.3064,24.8661],[88.0844,24.5017],[88.6999,24.2337],[88.5298,23.6311],[88.8763,22.8791],[89.032,22.0557],[88.8888,21.6906],[88.2085,21.7032],[86.9757,21.4956],[87.0332,20.7433],[86.4994,20.1516],[85.0603,19.4786],[83.941,18.302],[83.1892,17.6712],[82.1928,17.0166],[82.1912,16.5567],[81.6927,16.3102],[80.792,15.952],[80.3249,15.8992],[80.0251,15.1364],[80.2333,13.8358],[80.2863,13.0063],[79.8625,12.0562],[79.858,10.3573],[79.3405,10.3089],[78.8853,9.5461],[79.1897,9.2165],[78.2779,8.933],[77.9412,8.253],[77.5399,7.9655],[76.593,8.8993],[76.1301,10.2996],[75.7465,11.3083],[75.3961,11.7812],[74.8648,12.7419],[74.6167,13.9926],[74.4439,14.6172],[73.5342,15.9907],[73.1199,17.9286],[72.8209,19.2082],[72.8245,20.4195],[72.6305,21.356],[71.1753,20.7574],[70.4705,20.8773],[69.1641,22.0893],[69.6449,22.4508],[69.3496,22.8432],[68.1766,23.692],[68.8426,24.3591],[71.0432,24.3565],[70.8447,25.2151],[70.2829,25.7222],[70.1689,26.4919],[69.5144,26.941],[70.6165,27.9892],[71.7777,27.9132],[72.8238,28.9616],[73.4506,29.9764],[74.4214,30.9798],[74.4059,31.6926],[75.2586,32.2711],[74.4516,32.7649],[74.1043,33.4415],[73.7499,34.3177],[74.2402,34.7489],[75.7571,34.5049],[76.8717,34.6535],[77.8375,35.494]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"India","sov_a3":"IND","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"India","adm0_a3":"IND","geou_dif":0,"geounit":"India","gu_a3":"IND","su_dif":0,"subunit":"India","su_a3":"IND","brk_diff":0,"name":"India","name_long":"India","brk_a3":"IND","brk_name":"India","brk_group":"","abbrev":"India","postal":"IND","formal_en":"Republic of India","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"India","name_alt":"","mapcolor7":1,"mapcolor8":3,"mapcolor9":2,"mapcolor13":2,"pop_est":1166079220,"gdp_md_est":3297000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"3. Emerging region: BRIC","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"IN","iso_a3":"IND","iso_n3":"356","un_a3":"356","wb_a2":"IN","wb_a3":"IND","woe_id":-99,"adm0_a3_is":"IND","adm0_a3_us":"IND","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-6.1979,53.8676],[-6.033,53.1532],[-6.7889,52.2601],[-8.5616,51.6693],[-9.9771,51.8205],[-9.1663,52.8646],[-9.6885,53.8814],[-8.328,54.6645],[-7.5722,55.1316],[-7.366,54.5958],[-7.5722,54.06],[-6.9537,54.0737],[-6.1979,53.8676]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Ireland","sov_a3":"IRL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ireland","adm0_a3":"IRL","geou_dif":0,"geounit":"Ireland","gu_a3":"IRL","su_dif":0,"subunit":"Ireland","su_a3":"IRL","brk_diff":0,"name":"Ireland","name_long":"Ireland","brk_a3":"IRL","brk_name":"Ireland","brk_group":"","abbrev":"Ire.","postal":"IRL","formal_en":"Ireland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Ireland","name_alt":"","mapcolor7":2,"mapcolor8":3,"mapcolor9":2,"mapcolor13":2,"pop_est":4203200,"gdp_md_est":188400,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"IE","iso_a3":"IRL","iso_n3":"372","un_a3":"372","wb_a2":"IE","wb_a3":"IRL","woe_id":-99,"adm0_a3_is":"IRL","adm0_a3_us":"IRL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[53.9216,37.1989],[54.8003,37.3924],[55.5116,37.9641],[56.1804,37.9351],[56.6194,38.1214],[57.3304,38.0292],[58.4362,37.5223],[59.2348,37.413],[60.3776,36.5274],[61.1231,36.4916],[61.2108,35.6501],[60.8032,34.4041],[60.5284,33.6764],[60.9637,33.5288],[60.5361,32.9813],[60.8637,32.1829],[60.9419,31.5481],[61.6993,31.3795],[61.7812,30.7359],[60.8742,29.8292],[61.3693,29.3033],[61.7719,28.6993],[62.7278,28.2596],[62.7554,27.3789],[63.2339,27.217],[63.3166,26.7565],[61.8742,26.24],[61.4974,25.0782],[59.6161,25.3802],[58.5258,25.61],[57.3973,25.7399],[56.9708,26.9661],[56.4921,27.1433],[55.7237,26.9646],[54.7151,26.4807],[53.4931,26.8124],[52.4836,27.5808],[51.5208,27.8657],[50.8529,28.8145],[50.115,30.1478],[49.5769,29.9857],[48.9413,30.3171],[48.568,29.9268],[48.0146,30.4525],[48.0047,30.9851],[47.6853,30.9849],[47.8492,31.7092],[47.3347,32.4692],[46.1094,33.0173],[45.4167,33.9678],[45.6485,34.7481],[46.1518,35.0933],[46.0763,35.6774],[45.4206,35.9775],[44.7727,37.1705],[44.2258,37.9716],[44.4214,38.2813],[44.1092,39.4281],[44.794,39.713],[44.9527,39.3358],[45.4577,38.8741],[46.1436,38.7412],[46.5057,38.7706],[47.6851,39.5084],[48.0601,39.5822],[48.3555,39.2888],[48.0107,38.794],[48.6344,38.2704],[48.8832,38.3202],[49.1996,37.5829],[50.1478,37.3746],[50.8424,36.8728],[52.264,36.7004],[53.8258,36.965],[53.9216,37.1989]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Iran","sov_a3":"IRN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Iran","adm0_a3":"IRN","geou_dif":0,"geounit":"Iran","gu_a3":"IRN","su_dif":0,"subunit":"Iran","su_a3":"IRN","brk_diff":0,"name":"Iran","name_long":"Iran","brk_a3":"IRN","brk_name":"Iran","brk_group":"","abbrev":"Iran","postal":"IRN","formal_en":"Islamic Republic of Iran","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Iran, Islamic Rep.","name_alt":"","mapcolor7":4,"mapcolor8":3,"mapcolor9":4,"mapcolor13":13,"pop_est":66429284,"gdp_md_est":841700,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"IR","iso_a3":"IRN","iso_n3":"364","un_a3":"364","wb_a2":"IR","wb_a3":"IRN","woe_id":-99,"adm0_a3_is":"IRN","adm0_a3_us":"IRN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"Middle East & North Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[45.4206,35.9775],[46.0763,35.6774],[46.1518,35.0933],[45.6485,34.7481],[45.4167,33.9678],[46.1094,33.0173],[47.3347,32.4692],[47.8492,31.7092],[47.6853,30.9849],[48.0047,30.9851],[48.0146,30.4525],[48.568,29.9268],[47.9745,29.9758],[47.3026,30.0591],[46.5687,29.099],[44.7095,29.1789],[41.89,31.19],[40.4,31.89],[39.1955,32.161],[38.7923,33.3787],[41.0062,34.4194],[41.384,35.6283],[41.2897,36.3588],[41.8371,36.6059],[42.3496,37.2299],[42.7791,37.3853],[43.9423,37.2562],[44.2935,37.0015],[44.7727,37.1704],[45.4206,35.9775]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Iraq","sov_a3":"IRQ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Iraq","adm0_a3":"IRQ","geou_dif":0,"geounit":"Iraq","gu_a3":"IRQ","su_dif":0,"subunit":"Iraq","su_a3":"IRQ","brk_diff":0,"name":"Iraq","name_long":"Iraq","brk_a3":"IRQ","brk_name":"Iraq","brk_group":"","abbrev":"Iraq","postal":"IRQ","formal_en":"Republic of Iraq","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Iraq","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":3,"mapcolor13":1,"pop_est":31129225,"gdp_md_est":103900,"pop_year":-99,"lastcensus":1997,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"IQ","iso_a3":"IRQ","iso_n3":"368","un_a3":"368","wb_a2":"IQ","wb_a3":"IRQ","woe_id":-99,"adm0_a3_is":"IRQ","adm0_a3_us":"IRQ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-14.5087,66.4559],[-14.7396,65.8087],[-13.6097,65.1267],[-14.9098,64.3641],[-17.7944,63.6787],[-18.6562,63.4964],[-19.9728,63.6436],[-22.763,63.9602],[-21.7785,64.4021],[-23.955,64.8911],[-22.1844,65.085],[-22.2274,65.3786],[-24.3262,65.6112],[-23.6505,66.2625],[-22.1349,66.4105],[-20.5763,65.7321],[-19.0568,66.2766],[-17.7986,65.9939],[-16.1678,66.5268],[-14.5087,66.4559]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Iceland","sov_a3":"ISL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Iceland","adm0_a3":"ISL","geou_dif":0,"geounit":"Iceland","gu_a3":"ISL","su_dif":0,"subunit":"Iceland","su_a3":"ISL","brk_diff":0,"name":"Iceland","name_long":"Iceland","brk_a3":"ISL","brk_name":"Iceland","brk_group":"","abbrev":"Iceland","postal":"IS","formal_en":"Republic of Iceland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Iceland","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":4,"mapcolor13":9,"pop_est":306694,"gdp_md_est":12710,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"IS","iso_a3":"ISL","iso_n3":"352","un_a3":"352","wb_a2":"IS","wb_a3":"ISL","woe_id":-99,"adm0_a3_is":"ISL","adm0_a3_us":"ISL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[35.7199,32.7092],[35.5457,32.394],[35.1839,32.5325],[34.9746,31.8666],[35.2259,31.7543],[34.9705,31.6168],[34.9274,31.3534],[35.3976,31.4891],[35.4209,31.1001],[34.9226,29.5013],[34.2654,31.2194],[34.5564,31.5488],[34.4881,31.6055],[34.7526,32.0729],[34.9554,32.8274],[35.0985,33.0805],[35.1261,33.0909],[35.4607,33.089],[35.5528,33.2643],[35.8211,33.2774],[35.8364,32.8681],[35.7008,32.716],[35.7199,32.7092]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Israel","sov_a3":"ISR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Israel","adm0_a3":"ISR","geou_dif":0,"geounit":"Israel","gu_a3":"ISR","su_dif":0,"subunit":"Israel","su_a3":"ISR","brk_diff":0,"name":"Israel","name_long":"Israel","brk_a3":"ISR","brk_name":"Israel","brk_group":"","abbrev":"Isr.","postal":"IS","formal_en":"State of Israel","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Israel","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":5,"mapcolor13":9,"pop_est":7233701,"gdp_md_est":201400,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"IL","iso_a3":"ISR","iso_n3":"376","un_a3":"376","wb_a2":"IL","wb_a3":"ISR","woe_id":-99,"adm0_a3_is":"ISR","adm0_a3_us":"ISR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[15.5204,38.2312],[15.1602,37.444],[15.3099,37.1342],[15.1,36.62],[14.3352,36.9966],[13.8267,37.1045],[12.431,37.6129],[12.5709,38.1264],[13.7412,38.035],[14.7612,38.1439],[15.5204,38.2312]],[[9.21,41.21],[9.81,40.5],[9.6695,39.1774],[9.2148,39.2405],[8.8069,38.9066],[8.4283,39.1718],[8.3883,40.3783],[8.16,40.95],[8.71,40.9],[9.21,41.21]],[[12.3765,46.7676],[13.8065,46.5093],[13.6981,46.0168],[13.9376,45.591],[13.1416,45.7367],[12.3286,45.3818],[12.3839,44.8854],[12.2615,44.6005],[12.5892,44.0914],[13.5269,43.5877],[14.0298,42.761],[15.1426,41.9551],[15.9262,41.9613],[16.1699,41.7403],[15.8893,41.5411],[16.785,41.1796],[17.5192,40.8771],[18.3767,40.3556],[18.4802,40.1689],[18.2934,39.8108],[17.7384,40.2777],[16.8696,40.4422],[16.4487,39.7954],[17.1715,39.4247],[17.0528,38.9029],[16.6351,38.8436],[16.101,37.9859],[15.6841,37.9088],[15.688,38.2146],[15.892,38.7509],[16.1093,38.9645],[15.7188,39.5441],[15.4136,40.0484],[14.9985,40.1729],[14.7033,40.6046],[14.0607,40.7863],[13.628,41.1883],[12.8881,41.2531],[12.1067,41.7045],[11.1919,42.3554],[10.5119,42.9315],[10.2,43.92],[9.7025,44.0363],[8.8889,44.3663],[8.4286,44.2312],[7.8508,43.7671],[7.4352,43.6938],[7.5496,44.1279],[7.0076,44.2548],[6.75,45.0285],[7.0967,45.3331],[6.8024,45.7086],[6.8436,45.9911],[7.2739,45.7769],[7.756,45.8245],[8.3166,46.1636],[8.49,46.0052],[8.9663,46.0369],[9.1829,46.4402],[9.9228,46.3149],[10.3634,46.4836],[10.4427,46.8935],[11.0486,46.7514],[11.1648,46.9416],[12.1531,47.1154],[12.3765,46.7676]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Italy","sov_a3":"ITA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Italy","adm0_a3":"ITA","geou_dif":0,"geounit":"Italy","gu_a3":"ITA","su_dif":0,"subunit":"Italy","su_a3":"ITA","brk_diff":0,"name":"Italy","name_long":"Italy","brk_a3":"ITA","brk_name":"Italy","brk_group":"","abbrev":"Italy","postal":"I","formal_en":"Italian Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Italy","name_alt":"","mapcolor7":6,"mapcolor8":7,"mapcolor9":8,"mapcolor13":7,"pop_est":58126212,"gdp_md_est":1823000,"pop_year":-99,"lastcensus":2012,"gdp_year":-99,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"IT","iso_a3":"ITA","iso_n3":"380","un_a3":"380","wb_a2":"IT","wb_a3":"ITA","woe_id":-99,"adm0_a3_is":"ITA","adm0_a3_us":"ITA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-77.5696,18.4905],[-76.8966,18.4009],[-76.3654,18.1607],[-76.1997,17.8869],[-76.9026,17.8682],[-77.2063,17.7011],[-77.766,17.8616],[-78.3377,18.226],[-78.2177,18.4545],[-77.7974,18.5242],[-77.5696,18.4905]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Jamaica","sov_a3":"JAM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Jamaica","adm0_a3":"JAM","geou_dif":0,"geounit":"Jamaica","gu_a3":"JAM","su_dif":0,"subunit":"Jamaica","su_a3":"JAM","brk_diff":0,"name":"Jamaica","name_long":"Jamaica","brk_a3":"JAM","brk_name":"Jamaica","brk_group":"","abbrev":"Jam.","postal":"J","formal_en":"Jamaica","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Jamaica","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":4,"mapcolor13":10,"pop_est":2825928,"gdp_md_est":20910,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"JM","iso_a3":"JAM","iso_n3":"388","un_a3":"388","wb_a2":"JM","wb_a3":"JAM","woe_id":-99,"adm0_a3_is":"JAM","adm0_a3_us":"JAM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[35.5457,32.394],[35.7199,32.7092],[36.8341,32.3129],[38.7923,33.3787],[39.1955,32.161],[39.0049,32.0102],[37.0022,31.5084],[37.9988,30.5085],[37.6681,30.3387],[37.5036,30.0038],[36.7405,29.8653],[36.5012,29.5053],[36.0689,29.1975],[34.956,29.3566],[34.9226,29.5013],[35.4209,31.1001],[35.3976,31.4891],[35.5453,31.7825],[35.5457,32.394]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Jordan","sov_a3":"JOR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Jordan","adm0_a3":"JOR","geou_dif":0,"geounit":"Jordan","gu_a3":"JOR","su_dif":0,"subunit":"Jordan","su_a3":"JOR","brk_diff":0,"name":"Jordan","name_long":"Jordan","brk_a3":"JOR","brk_name":"Jordan","brk_group":"","abbrev":"Jord.","postal":"J","formal_en":"Hashemite Kingdom of Jordan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Jordan","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":4,"mapcolor13":4,"pop_est":6342948,"gdp_md_est":31610,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"JO","iso_a3":"JOR","iso_n3":"400","un_a3":"400","wb_a2":"JO","wb_a3":"JOR","woe_id":-99,"adm0_a3_is":"JOR","adm0_a3_us":"JOR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":6,"long_len":6,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[134.6384,34.1492],[134.7664,33.8063],[134.2034,33.2012],[133.793,33.522],[133.2803,33.2896],[133.0149,32.7046],[132.3631,32.9894],[132.3712,33.4636],[132.9244,34.0603],[133.493,33.9446],[133.9041,34.3649],[134.6384,34.1492]],[[140.9764,37.1421],[140.5998,36.344],[140.7741,35.8429],[140.2533,35.1381],[138.9755,34.6676],[137.2176,34.6063],[135.793,33.4648],[135.121,33.8491],[135.0794,34.5965],[133.3403,34.3759],[132.1568,33.9049],[130.9861,33.8858],[132,33.15],[131.3328,31.4504],[130.6863,31.0296],[130.2024,31.4182],[130.4477,32.3195],[129.8147,32.6103],[129.4085,33.2961],[130.3539,33.6042],[130.8785,34.2327],[131.8842,34.7497],[132.6177,35.4334],[134.6083,35.7316],[135.6775,35.5271],[136.7238,37.305],[137.3906,36.8274],[138.8576,37.8275],[139.4264,38.216],[140.0548,39.4388],[139.8834,40.5633],[140.3058,41.195],[141.369,41.3786],[141.9143,39.9916],[141.8846,39.1809],[140.9595,38.174],[140.9764,37.1421]],[[143.9102,44.1741],[144.6134,43.9609],[145.3208,44.3847],[145.5431,43.2621],[144.0597,42.9884],[143.1838,41.9952],[141.6115,42.6788],[141.0673,41.5846],[139.9551,41.5696],[139.8175,42.5638],[140.3121,43.3333],[141.3805,43.3888],[141.672,44.7721],[141.9676,45.5515],[143.1429,44.5104],[143.9102,44.1741]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Japan","sov_a3":"JPN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Japan","adm0_a3":"JPN","geou_dif":0,"geounit":"Japan","gu_a3":"JPN","su_dif":0,"subunit":"Japan","su_a3":"JPN","brk_diff":0,"name":"Japan","name_long":"Japan","brk_a3":"JPN","brk_name":"Japan","brk_group":"","abbrev":"Japan","postal":"J","formal_en":"Japan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Japan","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":5,"mapcolor13":4,"pop_est":127078679,"gdp_md_est":4329000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"JP","iso_a3":"JPN","iso_n3":"392","un_a3":"392","wb_a2":"JP","wb_a3":"JPN","woe_id":-99,"adm0_a3_is":"JPN","adm0_a3_us":"JPN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[70.9623,42.2662],[70.389,42.0813],[69.07,41.3842],[68.6325,40.6687],[68.2599,40.6623],[67.9859,41.136],[66.714,41.1684],[66.5106,41.9876],[66.0234,41.9946],[66.098,42.9977],[64.9008,43.7281],[63.1858,43.6501],[62.0133,43.5045],[61.0583,44.4058],[60.24,44.784],[58.69,45.5],[58.5031,45.5868],[55.9289,44.9959],[55.9682,41.3086],[55.4553,41.2599],[54.7553,42.044],[54.0794,42.3241],[52.9443,42.116],[52.5025,41.7833],[52.4463,42.0272],[52.6921,42.4439],[52.5014,42.7923],[51.3424,43.133],[50.8913,44.031],[50.3391,44.284],[50.3056,44.6098],[51.2785,44.5149],[51.3169,45.246],[52.1674,45.4084],[53.0409,45.259],[53.2209,46.2346],[53.0427,46.853],[52.042,46.8046],[51.1919,47.0487],[50.0341,46.609],[49.1012,46.3993],[48.5932,46.561],[48.6947,47.0756],[48.0573,47.7438],[47.3152,47.7158],[46.4664,48.3942],[47.0437,49.152],[46.7516,49.356],[47.5495,50.4547],[48.5778,49.8748],[48.7024,50.6051],[50.7666,51.6928],[52.3287,51.7187],[54.5329,51.0262],[55.7169,50.6217],[56.778,51.0436],[58.3633,51.0637],[59.6423,50.5454],[59.9328,50.8422],[61.3374,50.7991],[61.588,51.2727],[59.9675,51.9604],[60.9273,52.4475],[60.74,52.72],[61.7,52.98],[60.9781,53.665],[61.4366,54.0063],[65.1785,54.3542],[65.6669,54.6013],[68.1691,54.9704],[69.0682,55.3853],[70.8653,55.1697],[71.1801,54.1333],[72.2242,54.3767],[73.5085,54.0356],[73.4257,53.4898],[74.3848,53.5469],[76.8911,54.4905],[76.5252,54.177],[77.8009,53.4044],[80.0356,50.8648],[80.5684,51.3883],[81.946,50.8122],[83.383,51.0692],[83.9351,50.8892],[84.4164,50.3114],[85.1156,50.1173],[85.5413,49.6929],[86.8294,49.8267],[87.36,49.215],[86.5988,48.5492],[85.7682,48.4558],[85.7205,47.453],[85.1643,47.001],[83.1805,47.33],[82.4589,45.5396],[81.9471,45.317],[79.9661,44.9175],[80.8662,43.1804],[80.1802,42.9201],[80.26,42.35],[79.6436,42.4967],[79.1422,42.8561],[77.6584,42.9607],[76.0004,42.988],[75.637,42.8779],[74.2129,43.2983],[73.6453,43.0913],[73.4898,42.5009],[71.8446,42.8454],[71.1863,42.7043],[70.9623,42.2662]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Kazakhstan","sov_a3":"KAZ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Kazakhstan","adm0_a3":"KAZ","geou_dif":0,"geounit":"Kazakhstan","gu_a3":"KAZ","su_dif":0,"subunit":"Kazakhstan","su_a3":"KAZ","brk_diff":0,"name":"Kazakhstan","name_long":"Kazakhstan","brk_a3":"KAZ","brk_name":"Kazakhstan","brk_group":"","abbrev":"Kaz.","postal":"KZ","formal_en":"Republic of Kazakhstan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Kazakhstan","name_alt":"","mapcolor7":6,"mapcolor8":1,"mapcolor9":6,"mapcolor13":1,"pop_est":15399437,"gdp_md_est":175800,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"KZ","iso_a3":"KAZ","iso_n3":"398","un_a3":"398","wb_a2":"KZ","wb_a3":"KAZ","woe_id":-99,"adm0_a3_is":"KAZ","adm0_a3_us":"KAZ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Central Asia","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[40.993,-0.8583],[41.5851,-1.6832],[40.8848,-2.0825],[40.6379,-2.4998],[40.263,-2.5731],[40.1212,-3.2777],[39.8001,-3.6812],[39.6049,-4.3465],[39.2022,-4.6768],[37.7669,-3.6771],[37.6987,-3.097],[34.0726,-1.0598],[33.9037,-0.95],[33.8936,0.1098],[34.18,0.515],[34.6721,1.1769],[35.036,1.9058],[34.5961,3.0537],[34.4791,3.5556],[34.005,4.2499],[34.6202,4.8471],[35.298,5.506],[35.8174,5.3382],[35.8174,4.777],[36.1591,4.4479],[36.8551,4.4479],[38.1209,3.5986],[38.437,3.5885],[38.6711,3.6161],[38.8925,3.5007],[39.5594,3.4221],[39.8549,3.8388],[40.7685,4.257],[41.1718,3.9191],[41.8551,3.9189],[40.9811,2.7845],[40.993,-0.8583]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Kenya","sov_a3":"KEN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Kenya","adm0_a3":"KEN","geou_dif":0,"geounit":"Kenya","gu_a3":"KEN","su_dif":0,"subunit":"Kenya","su_a3":"KEN","brk_diff":0,"name":"Kenya","name_long":"Kenya","brk_a3":"KEN","brk_name":"Kenya","brk_group":"","abbrev":"Ken.","postal":"KE","formal_en":"Republic of Kenya","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Kenya","name_alt":"","mapcolor7":5,"mapcolor8":2,"mapcolor9":7,"mapcolor13":3,"pop_est":39002772,"gdp_md_est":61510,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"KE","iso_a3":"KEN","iso_n3":"404","un_a3":"404","wb_a2":"KE","wb_a3":"KEN","woe_id":-99,"adm0_a3_is":"KEN","adm0_a3_us":"KEN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[70.9623,42.2662],[71.1863,42.7043],[71.8446,42.8454],[73.4898,42.5009],[73.6453,43.0913],[74.2129,43.2983],[75.637,42.8779],[76.0004,42.988],[77.6584,42.9607],[79.1422,42.8561],[79.6436,42.4967],[80.26,42.35],[80.1194,42.1239],[78.5437,41.5822],[78.1872,41.1853],[76.9045,41.0665],[76.5264,40.4279],[75.4678,40.5621],[74.7769,40.3664],[73.8222,39.894],[73.96,39.66],[73.6754,39.4312],[71.7847,39.2795],[70.5492,39.6042],[69.4649,39.5267],[69.5596,40.1032],[70.648,39.9358],[71.0142,40.2444],[71.7749,40.1458],[73.0554,40.866],[71.8701,41.3929],[71.1579,41.1436],[70.42,41.52],[71.2592,42.1677],[70.9623,42.2662]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Kyrgyzstan","sov_a3":"KGZ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Kyrgyzstan","adm0_a3":"KGZ","geou_dif":0,"geounit":"Kyrgyzstan","gu_a3":"KGZ","su_dif":0,"subunit":"Kyrgyzstan","su_a3":"KGZ","brk_diff":0,"name":"Kyrgyzstan","name_long":"Kyrgyzstan","brk_a3":"KGZ","brk_name":"Kyrgyzstan","brk_group":"","abbrev":"Kgz.","postal":"KG","formal_en":"Kyrgyz Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Kyrgyz Republic","name_alt":"","mapcolor7":5,"mapcolor8":7,"mapcolor9":7,"mapcolor13":6,"pop_est":5431747,"gdp_md_est":11610,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"6. Developing region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"KG","iso_a3":"KGZ","iso_n3":"417","un_a3":"417","wb_a2":"KG","wb_a3":"KGZ","woe_id":-99,"adm0_a3_is":"KGZ","adm0_a3_us":"KGZ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Central Asia","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[103.4973,10.6326],[103.0907,11.1537],[102.5849,12.1866],[102.3481,13.3942],[102.9884,14.2257],[104.2814,14.4167],[105.2188,14.2732],[106.0439,13.8811],[106.4964,14.5706],[107.3827,14.2024],[107.6145,13.5355],[107.4914,12.3372],[105.8105,11.5676],[106.2497,10.9618],[105.1999,10.8893],[104.3343,10.4865],[103.4973,10.6326]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Cambodia","sov_a3":"KHM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Cambodia","adm0_a3":"KHM","geou_dif":0,"geounit":"Cambodia","gu_a3":"KHM","su_dif":0,"subunit":"Cambodia","su_a3":"KHM","brk_diff":0,"name":"Cambodia","name_long":"Cambodia","brk_a3":"KHM","brk_name":"Cambodia","brk_group":"","abbrev":"Camb.","postal":"KH","formal_en":"Kingdom of Cambodia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Cambodia","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":6,"mapcolor13":5,"pop_est":14494293,"gdp_md_est":27940,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"KH","iso_a3":"KHM","iso_n3":"116","un_a3":"116","wb_a2":"KH","wb_a3":"KHM","woe_id":-99,"adm0_a3_is":"KHM","adm0_a3_us":"KHM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[128.3497,38.6122],[129.2129,37.4324],[129.4604,36.7842],[129.4683,35.6321],[129.0914,35.0825],[128.1859,34.8904],[127.3865,34.4757],[126.4857,34.39],[126.3739,34.9346],[126.5592,35.6845],[126.1174,36.7255],[126.8601,36.8939],[126.1748,37.7497],[126.2373,37.8404],[126.6837,37.8048],[127.0733,38.2561],[127.78,38.3045],[128.2057,38.3704],[128.3497,38.6122]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"South Korea","sov_a3":"KOR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"South Korea","adm0_a3":"KOR","geou_dif":0,"geounit":"South Korea","gu_a3":"KOR","su_dif":0,"subunit":"South Korea","su_a3":"KOR","brk_diff":0,"name":"Korea","name_long":"Republic of Korea","brk_a3":"KOR","brk_name":"Republic of Korea","brk_group":"","abbrev":"S.K.","postal":"KR","formal_en":"Republic of Korea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Korea, Rep.","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":1,"mapcolor13":5,"pop_est":48508972,"gdp_md_est":1335000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"4. Emerging region: MIKT","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"KR","iso_a3":"KOR","iso_n3":"410","un_a3":"410","wb_a2":"KR","wb_a3":"KOR","woe_id":-99,"adm0_a3_is":"KOR","adm0_a3_us":"KOR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":5,"long_len":17,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[20.7622,42.0519],[20.7173,41.8471],[20.5902,41.8554],[20.523,42.2179],[20.2837,42.3203],[20.0707,42.5886],[20.2576,42.8128],[20.4968,42.8847],[20.6351,43.2167],[20.8145,43.2721],[20.9565,43.1309],[21.1434,43.0687],[21.2742,42.9096],[21.4387,42.8625],[21.633,42.6772],[21.7751,42.6827],[21.6629,42.4392],[21.5433,42.3203],[21.5766,42.2452],[21.3527,42.2068],[20.7622,42.0519]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Kosovo","sov_a3":"KOS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Kosovo","adm0_a3":"KOS","geou_dif":0,"geounit":"Kosovo","gu_a3":"KOS","su_dif":0,"subunit":"Kosovo","su_a3":"KOS","brk_diff":1,"name":"Kosovo","name_long":"Kosovo","brk_a3":"B57","brk_name":"Kosovo","brk_group":"","abbrev":"Kos.","postal":"KO","formal_en":"Republic of Kosovo","formal_fr":"","note_adm0":"","note_brk":"Self admin.; Claimed by Serbia","name_sort":"Kosovo","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":3,"mapcolor13":11,"pop_est":1804838,"gdp_md_est":5352,"pop_year":-99,"lastcensus":1981,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"-99","iso_a3":"-99","iso_n3":"-99","un_a3":"-099","wb_a2":"KV","wb_a3":"KSV","woe_id":-99,"adm0_a3_is":"SRB","adm0_a3_us":"KOS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[47.9745,29.9758],[48.1832,29.5345],[48.0939,29.3063],[48.4161,28.552],[47.7089,28.5261],[47.4598,29.0025],[46.5687,29.099],[47.3026,30.0591],[47.9745,29.9758]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Kuwait","sov_a3":"KWT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Kuwait","adm0_a3":"KWT","geou_dif":0,"geounit":"Kuwait","gu_a3":"KWT","su_dif":0,"subunit":"Kuwait","su_a3":"KWT","brk_diff":0,"name":"Kuwait","name_long":"Kuwait","brk_a3":"KWT","brk_name":"Kuwait","brk_group":"","abbrev":"Kwt.","postal":"KW","formal_en":"State of Kuwait","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Kuwait","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":2,"mapcolor13":2,"pop_est":2691158,"gdp_md_est":149100,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"KW","iso_a3":"KWT","iso_n3":"414","un_a3":"414","wb_a2":"KW","wb_a3":"KWT","woe_id":-99,"adm0_a3_is":"KWT","adm0_a3_us":"KWT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[105.2188,14.2732],[105.5443,14.7239],[105.589,15.5703],[104.7793,16.4419],[104.7169,17.4289],[103.9565,18.241],[103.2002,18.3096],[102.9987,17.9617],[102.413,17.9328],[102.1136,18.1091],[101.0595,17.5125],[101.0359,18.4089],[101.282,19.4626],[100.6063,19.5083],[100.5489,20.1092],[100.116,20.4178],[100.3291,20.7861],[101.18,21.4366],[101.27,21.2017],[101.8031,21.1744],[101.652,22.3182],[102.1704,22.4648],[102.7549,21.6751],[103.2039,20.7666],[104.435,20.7587],[104.8226,19.8866],[104.1834,19.6247],[103.8965,19.2652],[105.0946,18.667],[105.9258,17.4853],[106.556,16.6043],[107.3127,15.9085],[107.5645,15.2022],[107.3827,14.2024],[106.4964,14.5706],[106.0439,13.8811],[105.2188,14.2732]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Laos","sov_a3":"LAO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Laos","adm0_a3":"LAO","geou_dif":0,"geounit":"Laos","gu_a3":"LAO","su_dif":0,"subunit":"Laos","su_a3":"LAO","brk_diff":0,"name":"Lao PDR","name_long":"Lao PDR","brk_a3":"LAO","brk_name":"Laos","brk_group":"","abbrev":"Laos","postal":"LA","formal_en":"Lao People's Democratic Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Lao PDR","name_alt":"","mapcolor7":1,"mapcolor8":1,"mapcolor9":1,"mapcolor13":9,"pop_est":6834942,"gdp_md_est":13980,"pop_year":-99,"lastcensus":2005,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"LA","iso_a3":"LAO","iso_n3":"418","un_a3":"418","wb_a2":"LA","wb_a3":"LAO","woe_id":-99,"adm0_a3_is":"LAO","adm0_a3_us":"LAO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[35.8211,33.2774],[35.5528,33.2643],[35.4607,33.089],[35.1261,33.0909],[35.4822,33.9055],[35.9796,34.6101],[35.9984,34.6449],[36.4482,34.5939],[36.6118,34.2018],[36.0665,33.8249],[35.8211,33.2774]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Lebanon","sov_a3":"LBN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Lebanon","adm0_a3":"LBN","geou_dif":0,"geounit":"Lebanon","gu_a3":"LBN","su_dif":0,"subunit":"Lebanon","su_a3":"LBN","brk_diff":0,"name":"Lebanon","name_long":"Lebanon","brk_a3":"LBN","brk_name":"Lebanon","brk_group":"","abbrev":"Leb.","postal":"LB","formal_en":"Lebanese Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Lebanon","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":4,"mapcolor13":12,"pop_est":4017095,"gdp_md_est":44060,"pop_year":-99,"lastcensus":1970,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"LB","iso_a3":"LBN","iso_n3":"422","un_a3":"422","wb_a2":"LB","wb_a3":"LBN","woe_id":-99,"adm0_a3_is":"LBN","adm0_a3_us":"LBN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":4,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-7.7122,4.3646],[-7.9741,4.3558],[-9.0048,4.8324],[-9.9134,5.5936],[-10.7654,6.1407],[-11.4388,6.7859],[-11.1998,7.1058],[-11.1467,7.3967],[-10.6956,7.9395],[-10.2301,8.4062],[-10.0166,8.4285],[-9.7553,8.5411],[-9.3373,7.9285],[-9.4033,7.5269],[-9.2088,7.3139],[-8.9261,7.309],[-8.7221,7.7117],[-8.4393,7.686],[-8.4854,7.3952],[-8.3855,6.9118],[-8.6029,6.4676],[-8.3113,6.193],[-7.9937,6.1262],[-7.5702,5.7074],[-7.5397,5.3133],[-7.6354,5.1882],[-7.7122,4.3646]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Liberia","sov_a3":"LBR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Liberia","adm0_a3":"LBR","geou_dif":0,"geounit":"Liberia","gu_a3":"LBR","su_dif":0,"subunit":"Liberia","su_a3":"LBR","brk_diff":0,"name":"Liberia","name_long":"Liberia","brk_a3":"LBR","brk_name":"Liberia","brk_group":"","abbrev":"Liberia","postal":"LR","formal_en":"Republic of Liberia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Liberia","name_alt":"","mapcolor7":2,"mapcolor8":3,"mapcolor9":4,"mapcolor13":9,"pop_est":3441790,"gdp_md_est":1526,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"LR","iso_a3":"LBR","iso_n3":"430","un_a3":"430","wb_a2":"LR","wb_a3":"LBR","woe_id":-99,"adm0_a3_is":"LBR","adm0_a3_us":"LBR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[14.8513,22.863],[14.1439,22.4913],[13.5814,23.0405],[11.9995,23.4717],[11.5607,24.0979],[10.7714,24.5625],[10.3038,24.3793],[9.9483,24.937],[9.9107,25.3655],[9.3194,26.0943],[9.7163,26.5122],[9.6291,27.141],[9.7561,27.6883],[9.6839,28.1442],[9.86,28.96],[9.8056,29.4246],[9.4821,30.3076],[9.97,30.5393],[10.0566,30.9618],[9.9502,31.3761],[10.6369,31.7614],[10.9448,32.0818],[11.4323,32.3689],[11.4888,33.137],[12.6633,32.7928],[13.0833,32.8788],[13.9187,32.712],[15.2456,32.2651],[15.7139,31.3763],[16.6116,31.1822],[18.0211,30.7636],[19.0864,30.2664],[19.574,30.5258],[20.0533,30.9858],[19.8203,31.7518],[20.134,32.2382],[20.8545,32.7068],[21.543,32.8432],[22.8958,32.6386],[23.2368,32.1915],[23.6091,32.1873],[23.9275,32.0167],[24.9211,31.8994],[25.1648,31.5692],[24.8029,31.0893],[24.9576,30.6616],[24.7001,30.0442],[25,29.2387],[25,25.6825],[25,22],[25,20.003],[23.85,20],[23.8377,19.5805],[19.8493,21.4951],[15.8609,23.4097],[14.8513,22.863]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Libya","sov_a3":"LBY","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Libya","adm0_a3":"LBY","geou_dif":0,"geounit":"Libya","gu_a3":"LBY","su_dif":0,"subunit":"Libya","su_a3":"LBY","brk_diff":0,"name":"Libya","name_long":"Libya","brk_a3":"LBY","brk_name":"Libya","brk_group":"","abbrev":"Libya","postal":"LY","formal_en":"Libya","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Libya","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":2,"mapcolor13":11,"pop_est":6310434,"gdp_md_est":88830,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"LY","iso_a3":"LBY","iso_n3":"434","un_a3":"434","wb_a2":"LY","wb_a3":"LBY","woe_id":-99,"adm0_a3_is":"LBY","adm0_a3_us":"LBY","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[81.788,7.5231],[81.6373,6.4818],[81.218,6.1971],[80.3484,5.9684],[79.8725,6.7635],[79.6952,8.2008],[80.1478,9.8241],[80.8388,9.2684],[81.3043,8.5642],[81.788,7.5231]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Sri Lanka","sov_a3":"LKA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Sri Lanka","adm0_a3":"LKA","geou_dif":0,"geounit":"Sri Lanka","gu_a3":"LKA","su_dif":0,"subunit":"Sri Lanka","su_a3":"LKA","brk_diff":0,"name":"Sri Lanka","name_long":"Sri Lanka","brk_a3":"LKA","brk_name":"Sri Lanka","brk_group":"","abbrev":"Sri L.","postal":"LK","formal_en":"Democratic Socialist Republic of Sri Lanka","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Sri Lanka","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":4,"mapcolor13":9,"pop_est":21324791,"gdp_md_est":91870,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"LK","iso_a3":"LKA","iso_n3":"144","un_a3":"144","wb_a2":"LK","wb_a3":"LKA","woe_id":-99,"adm0_a3_is":"LKA","adm0_a3_us":"LKA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":9,"long_len":9,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[28.9783,-28.9556],[29.3252,-29.2574],[29.0184,-29.7438],[28.8484,-30.0701],[28.2911,-30.2262],[28.1072,-30.5457],[27.7494,-30.6451],[26.9993,-29.876],[27.5325,-29.2427],[28.0743,-28.8515],[28.5417,-28.6475],[28.9783,-28.9556]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Lesotho","sov_a3":"LSO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Lesotho","adm0_a3":"LSO","geou_dif":0,"geounit":"Lesotho","gu_a3":"LSO","su_dif":0,"subunit":"Lesotho","su_a3":"LSO","brk_diff":0,"name":"Lesotho","name_long":"Lesotho","brk_a3":"LSO","brk_name":"Lesotho","brk_group":"","abbrev":"Les.","postal":"LS","formal_en":"Kingdom of Lesotho","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Lesotho","name_alt":"","mapcolor7":1,"mapcolor8":5,"mapcolor9":2,"mapcolor13":8,"pop_est":2130819,"gdp_md_est":3293,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"LS","iso_a3":"LSO","iso_n3":"426","un_a3":"426","wb_a2":"LS","wb_a3":"LSO","woe_id":-99,"adm0_a3_is":"LSO","adm0_a3_us":"LSO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Southern Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[22.7311,54.3275],[22.6511,54.5827],[22.7578,54.8566],[22.3157,55.0153],[21.2684,55.1905],[21.0558,56.0311],[22.2012,56.3378],[23.8783,56.2737],[24.8607,56.3725],[25.0009,56.1645],[25.533,56.1003],[26.4943,55.6151],[26.5883,55.1672],[25.7684,54.847],[25.5364,54.2824],[24.4507,53.9057],[23.4841,53.9125],[23.244,54.2206],[22.7311,54.3275]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Lithuania","sov_a3":"LTU","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Lithuania","adm0_a3":"LTU","geou_dif":0,"geounit":"Lithuania","gu_a3":"LTU","su_dif":0,"subunit":"Lithuania","su_a3":"LTU","brk_diff":0,"name":"Lithuania","name_long":"Lithuania","brk_a3":"LTU","brk_name":"Lithuania","brk_group":"","abbrev":"Lith.","postal":"LT","formal_en":"Republic of Lithuania","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Lithuania","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":3,"mapcolor13":9,"pop_est":3555179,"gdp_md_est":63330,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"LT","iso_a3":"LTU","iso_n3":"440","un_a3":"440","wb_a2":"LT","wb_a3":"LTU","woe_id":-99,"adm0_a3_is":"LTU","adm0_a3_us":"LTU","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":9,"long_len":9,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[6.0431,50.1281],[6.2428,49.9022],[6.1863,49.4638],[5.8978,49.4427],[5.6741,49.5295],[5.7824,50.0903],[6.0431,50.1281]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Luxembourg","sov_a3":"LUX","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Luxembourg","adm0_a3":"LUX","geou_dif":0,"geounit":"Luxembourg","gu_a3":"LUX","su_dif":0,"subunit":"Luxembourg","su_a3":"LUX","brk_diff":0,"name":"Luxembourg","name_long":"Luxembourg","brk_a3":"LUX","brk_name":"Luxembourg","brk_group":"","abbrev":"Lux.","postal":"L","formal_en":"Grand Duchy of Luxembourg","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Luxembourg","name_alt":"","mapcolor7":1,"mapcolor8":7,"mapcolor9":3,"mapcolor13":7,"pop_est":491775,"gdp_md_est":39370,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"LU","iso_a3":"LUX","iso_n3":"442","un_a3":"442","wb_a2":"LU","wb_a3":"LUX","woe_id":-99,"adm0_a3_is":"LUX","adm0_a3_us":"LUX","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":5,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[21.0558,56.0311],[21.0904,56.7839],[21.5819,57.4119],[22.5243,57.7534],[23.3185,57.0062],[24.1207,57.0257],[24.3129,57.7934],[25.1646,57.9702],[25.6028,57.8475],[26.4635,57.4764],[27.2882,57.4745],[27.77,57.2443],[27.8553,56.7593],[28.1767,56.1691],[27.1025,55.7833],[26.4943,55.6151],[25.533,56.1003],[25.0009,56.1645],[24.8607,56.3725],[23.8783,56.2737],[22.2012,56.3378],[21.0558,56.0311]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Latvia","sov_a3":"LVA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Latvia","adm0_a3":"LVA","geou_dif":0,"geounit":"Latvia","gu_a3":"LVA","su_dif":0,"subunit":"Latvia","su_a3":"LVA","brk_diff":0,"name":"Latvia","name_long":"Latvia","brk_a3":"LVA","brk_name":"Latvia","brk_group":"","abbrev":"Lat.","postal":"LV","formal_en":"Republic of Latvia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Latvia","name_alt":"","mapcolor7":4,"mapcolor8":7,"mapcolor9":6,"mapcolor13":13,"pop_est":2231503,"gdp_md_est":38860,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"LV","iso_a3":"LVA","iso_n3":"428","un_a3":"428","wb_a2":"LV","wb_a3":"LVA","woe_id":-99,"adm0_a3_is":"LVA","adm0_a3_us":"LVA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-5.1939,35.7552],[-4.591,35.3307],[-3.6401,35.3999],[-2.6043,35.1791],[-2.1699,35.1684],[-1.793,34.5279],[-1.7335,33.9197],[-1.388,32.864],[-1.1246,32.6515],[-1.3079,32.2629],[-2.6166,32.0943],[-3.069,31.7245],[-3.6475,31.6373],[-3.6904,30.897],[-4.8596,30.5012],[-5.2421,30.0004],[-6.0606,29.7317],[-7.0592,29.5792],[-8.6741,28.8413],[-8.6656,27.6564],[-8.8178,27.6564],[-8.8178,27.6564],[-8.7949,27.1207],[-9.413,27.0885],[-9.7353,26.8609],[-10.1894,26.8609],[-10.5513,26.9908],[-11.3926,26.8834],[-11.7182,26.1041],[-12.0308,26.0309],[-12.501,24.7701],[-13.8911,23.691],[-14.2212,22.3102],[-14.6308,21.8609],[-14.751,21.5006],[-17.003,21.4207],[-17.0204,21.4223],[-16.9732,21.8857],[-16.5891,22.1582],[-16.2619,22.6793],[-16.3264,23.0178],[-15.9826,23.7234],[-15.426,24.3591],[-15.0893,24.5203],[-14.8246,25.1035],[-14.8009,25.6363],[-14.4399,26.2544],[-13.7738,26.6189],[-13.1399,27.6401],[-13.1216,27.6541],[-12.6188,28.0382],[-11.6889,28.1486],[-10.901,28.8321],[-10.3996,29.0986],[-9.5648,29.9336],[-9.8147,31.1777],[-9.4348,32.0381],[-9.3007,32.5647],[-8.6575,33.2402],[-7.6542,33.6971],[-6.9125,34.1105],[-6.2443,35.1459],[-5.93,35.76],[-5.1939,35.7552]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Morocco","sov_a3":"MAR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Morocco","adm0_a3":"MAR","geou_dif":0,"geounit":"Morocco","gu_a3":"MAR","su_dif":0,"subunit":"Morocco","su_a3":"MAR","brk_diff":0,"name":"Morocco","name_long":"Morocco","brk_a3":"MAR","brk_name":"Morocco","brk_group":"","abbrev":"Mor.","postal":"MA","formal_en":"Kingdom of Morocco","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Morocco","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":3,"mapcolor13":9,"pop_est":34859364,"gdp_md_est":136600,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"MA","iso_a3":"MAR","iso_n3":"504","un_a3":"504","wb_a2":"MA","wb_a3":"MAR","woe_id":-99,"adm0_a3_is":"MAR","adm0_a3_us":"MAR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[26.6193,48.2207],[26.8578,48.3682],[27.5225,48.4671],[28.2595,48.1556],[28.6709,48.1181],[29.1227,47.8491],[29.0509,47.5102],[29.4151,47.3466],[29.5597,46.9286],[29.9089,46.6744],[29.8382,46.5253],[30.0247,46.4239],[29.76,46.35],[29.1707,46.3793],[29.0721,46.5177],[28.863,46.4379],[28.9337,46.2588],[28.66,45.94],[28.4853,45.5969],[28.2336,45.4883],[28.0544,45.9446],[28.16,46.3716],[28.128,46.8105],[27.5512,47.4051],[27.2339,47.8268],[26.9242,48.1233],[26.6193,48.2207]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Moldova","sov_a3":"MDA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Moldova","adm0_a3":"MDA","geou_dif":0,"geounit":"Moldova","gu_a3":"MDA","su_dif":0,"subunit":"Moldova","su_a3":"MDA","brk_diff":0,"name":"Moldova","name_long":"Moldova","brk_a3":"MDA","brk_name":"Moldova","brk_group":"","abbrev":"Mda.","postal":"MD","formal_en":"Republic of Moldova","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Moldova","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":4,"mapcolor13":12,"pop_est":4320748,"gdp_md_est":10670,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"MD","iso_a3":"MDA","iso_n3":"498","un_a3":"498","wb_a2":"MD","wb_a3":"MDA","woe_id":-99,"adm0_a3_is":"MDA","adm0_a3_us":"MDA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[49.5435,-12.4698],[49.809,-12.8953],[50.0565,-13.5558],[50.2174,-14.7588],[50.4765,-15.2265],[50.3771,-15.7061],[50.2003,-16.0003],[49.8606,-15.4143],[49.6726,-15.7102],[49.8633,-16.451],[49.7746,-16.875],[49.4986,-17.106],[49.4356,-17.9531],[49.0418,-19.1188],[48.5485,-20.4969],[47.9307,-22.3915],[47.5477,-23.782],[47.0958,-24.9416],[46.2825,-25.1785],[45.4095,-25.6014],[44.8336,-25.3461],[44.0397,-24.9883],[43.7638,-24.4607],[43.6978,-23.5741],[43.3457,-22.7769],[43.2542,-22.0574],[43.4333,-21.3365],[43.8937,-21.1633],[43.8964,-20.8305],[44.3743,-20.0724],[44.4644,-19.4355],[44.2324,-18.962],[44.043,-18.3314],[43.9631,-17.4099],[44.3125,-16.8505],[44.4465,-16.2162],[44.9449,-16.1794],[45.5027,-15.9744],[45.873,-15.7935],[46.3122,-15.78],[46.8822,-15.2102],[47.7051,-14.5943],[48.0052,-14.0912],[47.869,-13.6639],[48.2938,-13.7841],[48.8451,-13.0892],[48.8635,-12.4879],[49.1947,-12.0406],[49.5435,-12.4698]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Madagascar","sov_a3":"MDG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Madagascar","adm0_a3":"MDG","geou_dif":0,"geounit":"Madagascar","gu_a3":"MDG","su_dif":0,"subunit":"Madagascar","su_a3":"MDG","brk_diff":0,"name":"Madagascar","name_long":"Madagascar","brk_a3":"MDG","brk_name":"Madagascar","brk_group":"","abbrev":"Mad.","postal":"MG","formal_en":"Republic of Madagascar","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Madagascar","name_alt":"","mapcolor7":6,"mapcolor8":5,"mapcolor9":2,"mapcolor13":3,"pop_est":20653556,"gdp_md_est":20130,"pop_year":-99,"lastcensus":1993,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"MG","iso_a3":"MDG","iso_n3":"450","un_a3":"450","wb_a2":"MG","wb_a3":"MDG","woe_id":-99,"adm0_a3_is":"MDG","adm0_a3_us":"MDG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-97.14,25.87],[-97.5281,24.9921],[-97.7029,24.2723],[-97.776,22.9326],[-97.8724,22.4442],[-97.699,21.8987],[-97.389,21.411],[-97.1893,20.6354],[-96.5256,19.8909],[-96.2921,19.3204],[-95.9009,18.828],[-94.8391,18.5627],[-94.4257,18.1444],[-93.5487,18.4238],[-92.7861,18.5248],[-92.0373,18.7046],[-91.4079,18.8761],[-90.7719,19.2841],[-90.5336,19.8674],[-90.4515,20.7075],[-90.2786,20.9999],[-89.6013,21.2617],[-88.5439,21.4937],[-87.6584,21.4588],[-87.0519,21.5435],[-86.812,21.3315],[-86.8459,20.8499],[-87.3833,20.2554],[-87.6211,19.6466],[-87.4368,19.4724],[-87.5866,19.0401],[-87.8372,18.2598],[-88.0907,18.5166],[-88.3,18.5],[-88.4901,18.4868],[-88.8483,17.8832],[-89.0299,18.0015],[-89.1509,17.9555],[-89.1431,17.8083],[-90.0679,17.8193],[-91.0015,17.8176],[-91.0023,17.2547],[-91.4539,17.2522],[-91.0817,16.9185],[-90.7118,16.6875],[-90.6008,16.4708],[-90.4389,16.4101],[-90.4645,16.0696],[-91.748,16.0666],[-92.2292,15.2514],[-92.0872,15.0646],[-92.2032,14.8301],[-92.2278,14.5388],[-93.3595,15.6154],[-93.8752,15.9402],[-94.6917,16.201],[-95.2502,16.1283],[-96.0534,15.7521],[-96.5574,15.6535],[-97.2636,15.9171],[-98.013,16.1073],[-98.9477,16.566],[-99.6974,16.7062],[-100.8295,17.1711],[-101.6661,17.649],[-101.9185,17.9161],[-102.4781,17.9758],[-103.501,18.2923],[-103.9175,18.7486],[-104.992,19.3161],[-105.493,19.9468],[-105.7314,20.4341],[-105.3978,20.5317],[-105.5007,20.8169],[-105.2708,21.0763],[-105.2658,21.4221],[-105.6032,21.8711],[-105.6934,22.2691],[-106.0287,22.7738],[-106.91,23.7678],[-107.9154,24.5489],[-108.4019,25.1723],[-109.2602,25.5806],[-109.4441,25.8249],[-109.2916,26.4429],[-109.8015,26.6762],[-110.3917,27.1621],[-110.641,27.8599],[-111.1789,27.9412],[-111.7596,28.468],[-112.2282,28.9544],[-112.2718,29.2668],[-112.8096,30.0211],[-113.1638,30.7869],[-113.1487,31.171],[-113.8719,31.5676],[-114.2057,31.524],[-114.7765,31.7995],[-114.9367,31.3935],[-114.7712,30.9136],[-114.6739,30.1627],[-114.331,29.7504],[-113.5889,29.0616],[-113.4241,28.8262],[-113.272,28.7548],[-113.14,28.4113],[-112.9623,28.4252],[-112.7616,27.7802],[-112.4579,27.5258],[-112.245,27.1717],[-111.6165,26.6628],[-111.2847,25.7326],[-110.9878,25.2946],[-110.71,24.826],[-110.655,24.2986],[-110.1729,24.2655],[-109.7718,23.8112],[-109.4091,23.3647],[-109.4334,23.1856],[-109.8542,22.8183],[-110.0314,22.8231],[-110.2951,23.431],[-110.9495,24.001],[-111.6706,24.4844],[-112.182,24.7384],[-112.149,25.4701],[-112.3007,26.012],[-112.7773,26.322],[-113.4647,26.7682],[-113.5967,26.6395],[-113.8489,26.9001],[-114.4657,27.1421],[-115.0551,27.7227],[-114.9823,27.7982],[-114.5704,27.7415],[-114.1993,28.115],[-114.162,28.5661],[-114.9318,29.2795],[-115.5187,29.5564],[-115.8874,30.1808],[-116.2584,30.8365],[-116.7215,31.6357],[-117.1278,32.5353],[-115.9913,32.6124],[-114.7214,32.7208],[-114.815,32.5253],[-113.305,32.0391],[-111.0236,31.3347],[-109.035,31.3419],[-108.2419,31.3422],[-108.24,31.7549],[-106.5076,31.7545],[-106.1429,31.4],[-105.6316,31.0838],[-105.0374,30.644],[-104.7057,30.1217],[-104.457,29.572],[-103.94,29.27],[-103.11,28.97],[-102.48,29.76],[-101.6624,29.7793],[-100.9576,29.3807],[-100.4558,28.6961],[-100.11,28.11],[-99.52,27.54],[-99.3,26.84],[-99.02,26.37],[-98.24,26.06],[-97.53,25.84],[-97.14,25.87]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Mexico","sov_a3":"MEX","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Mexico","adm0_a3":"MEX","geou_dif":0,"geounit":"Mexico","gu_a3":"MEX","su_dif":0,"subunit":"Mexico","su_a3":"MEX","brk_diff":0,"name":"Mexico","name_long":"Mexico","brk_a3":"MEX","brk_name":"Mexico","brk_group":"","abbrev":"Mex.","postal":"MX","formal_en":"United Mexican States","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Mexico","name_alt":"","mapcolor7":6,"mapcolor8":1,"mapcolor9":7,"mapcolor13":3,"pop_est":111211789,"gdp_md_est":1563000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"4. Emerging region: MIKT","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"MX","iso_a3":"MEX","iso_n3":"484","un_a3":"484","wb_a2":"MX","wb_a3":"MEX","woe_id":-99,"adm0_a3_is":"MEX","adm0_a3_us":"MEX","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[20.5902,41.8554],[20.7173,41.8471],[20.7622,42.0519],[21.3527,42.2068],[21.5766,42.2452],[21.9171,42.3036],[22.3805,42.3203],[22.8814,41.9993],[22.9524,41.338],[22.7618,41.3048],[22.5973,41.1305],[22.0554,41.1499],[21.6742,40.9313],[21.02,40.8427],[20.6052,41.0862],[20.4632,41.5151],[20.5902,41.8554]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Macedonia","sov_a3":"MKD","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Macedonia","adm0_a3":"MKD","geou_dif":0,"geounit":"Macedonia","gu_a3":"MKD","su_dif":0,"subunit":"Macedonia","su_a3":"MKD","brk_diff":0,"name":"Macedonia","name_long":"Macedonia","brk_a3":"MKD","brk_name":"Macedonia","brk_group":"","abbrev":"Mkd.","postal":"MK","formal_en":"Former Yugoslav Republic of Macedonia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Macedonia, FYR","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":7,"mapcolor13":3,"pop_est":2066718,"gdp_md_est":18780,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"MK","iso_a3":"MKD","iso_n3":"807","un_a3":"807","wb_a2":"MK","wb_a3":"MKD","woe_id":-99,"adm0_a3_is":"MKD","adm0_a3_us":"MKD","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-12.1708,14.6168],[-11.8342,14.7991],[-11.6661,15.3882],[-11.3491,15.4113],[-10.6508,15.1327],[-10.0868,15.3305],[-9.7003,15.2641],[-9.5502,15.4865],[-5.5377,15.5017],[-5.3153,16.2019],[-5.4885,16.3251],[-5.9711,20.6408],[-6.4538,24.9566],[-4.9233,24.9746],[-1.5501,22.7927],[1.8232,20.6108],[2.061,20.1422],[2.6836,19.8562],[3.1467,19.6936],[3.1581,19.0574],[4.2674,19.1553],[4.2702,16.8522],[3.7234,16.1843],[3.6383,15.5681],[2.75,15.4095],[1.3855,15.3236],[1.0158,14.9682],[0.3749,14.9289],[-0.2663,14.9243],[-0.5159,15.1162],[-1.0664,14.9738],[-2.001,14.559],[-2.1918,14.2464],[-2.9677,13.7982],[-3.1037,13.5413],[-3.5228,13.3377],[-4.0064,13.4725],[-4.2804,13.2284],[-4.4272,12.5426],[-5.2209,11.7139],[-5.1978,11.3751],[-5.4706,10.9513],[-5.4043,10.3707],[-5.8169,10.2226],[-6.0505,10.0964],[-6.2052,10.5241],[-6.494,10.4113],[-6.6665,10.4308],[-6.8505,10.139],[-7.6228,10.1472],[-7.8996,10.2974],[-8.0299,10.2065],[-8.3354,10.4948],[-8.2824,10.7926],[-8.4073,10.9093],[-8.6203,10.8109],[-8.5813,11.1362],[-8.3763,11.3936],[-8.7861,11.8126],[-8.9053,12.0884],[-9.1275,12.3081],[-9.3276,12.3343],[-9.5679,12.1942],[-9.891,12.0605],[-10.1652,11.8441],[-10.5932,11.924],[-10.8708,12.1779],[-11.0366,12.2112],[-11.2976,12.078],[-11.4562,12.0768],[-11.5139,12.443],[-11.4679,12.7545],[-11.5534,13.1412],[-11.9277,13.4221],[-12.1249,13.9947],[-12.1708,14.6168]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Mali","sov_a3":"MLI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Mali","adm0_a3":"MLI","geou_dif":0,"geounit":"Mali","gu_a3":"MLI","su_dif":0,"subunit":"Mali","su_a3":"MLI","brk_diff":0,"name":"Mali","name_long":"Mali","brk_a3":"MLI","brk_name":"Mali","brk_group":"","abbrev":"Mali","postal":"ML","formal_en":"Republic of Mali","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Mali","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":7,"pop_est":12666987,"gdp_md_est":14590,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"ML","iso_a3":"MLI","iso_n3":"466","un_a3":"466","wb_a2":"ML","wb_a3":"MLI","woe_id":-99,"adm0_a3_is":"MLI","adm0_a3_us":"MLI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[99.5433,20.1866],[98.9597,19.753],[98.2537,19.7082],[97.7978,18.6271],[97.3759,18.4454],[97.8591,17.5679],[98.4938,16.8378],[98.9033,16.1778],[98.5374,15.3085],[98.1921,15.1237],[98.4308,14.622],[99.0978,13.8275],[99.212,13.2693],[99.1964,12.8047],[99.5873,11.8928],[99.0381,10.9605],[98.5536,9.933],[98.4572,10.6753],[98.7645,11.4413],[98.4283,12.033],[98.5096,13.1224],[98.1036,13.6405],[97.7777,14.8373],[97.5971,16.1006],[97.1645,16.9287],[96.5058,16.4272],[95.3694,15.7144],[94.8084,15.8035],[94.1888,16.0379],[94.5335,17.2772],[94.3248,18.2135],[93.541,19.3665],[93.6633,19.727],[93.0783,19.8551],[92.3686,20.6709],[92.3032,21.4755],[92.6523,21.324],[92.6727,22.0412],[93.1661,22.2785],[93.0603,22.7031],[93.2863,23.0437],[93.3252,24.0786],[94.1067,23.8507],[94.5527,24.6752],[94.6032,25.1625],[95.1552,26.0013],[95.1248,26.5736],[96.4194,27.2646],[97.134,27.0838],[97.052,27.6991],[97.4026,27.8825],[97.3271,28.2616],[97.912,28.3359],[98.2462,27.7472],[98.6827,27.5088],[98.7121,26.7435],[98.6718,25.9187],[97.7246,25.0836],[97.6047,23.8974],[98.6603,24.0633],[98.8987,23.1427],[99.532,22.949],[99.2409,22.1183],[99.9835,21.7429],[100.4165,21.5588],[101.15,21.85],[101.18,21.4366],[100.3291,20.7861],[100.116,20.4178],[99.5433,20.1866]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Myanmar","sov_a3":"MMR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Myanmar","adm0_a3":"MMR","geou_dif":0,"geounit":"Myanmar","gu_a3":"MMR","su_dif":0,"subunit":"Myanmar","su_a3":"MMR","brk_diff":0,"name":"Myanmar","name_long":"Myanmar","brk_a3":"MMR","brk_name":"Myanmar","brk_group":"","abbrev":"Myan.","postal":"MM","formal_en":"Republic of the Union of Myanmar","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Myanmar","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":5,"mapcolor13":13,"pop_est":48137741,"gdp_md_est":55130,"pop_year":-99,"lastcensus":1983,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"MM","iso_a3":"MMR","iso_n3":"104","un_a3":"104","wb_a2":"MM","wb_a3":"MMR","woe_id":-99,"adm0_a3_is":"MMR","adm0_a3_us":"MMR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":7,"long_len":7,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[19.8016,42.5001],[19.7381,42.6882],[19.3045,42.1957],[19.3718,41.8775],[19.1625,41.955],[18.8821,42.2815],[18.45,42.48],[18.56,42.65],[18.7065,43.2001],[19.0317,43.4325],[19.2185,43.5238],[19.4839,43.3523],[19.63,43.2138],[19.9586,43.106],[20.3398,42.8985],[20.2576,42.8128],[20.0707,42.5886],[19.8016,42.5001]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Montenegro","sov_a3":"MNE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Montenegro","adm0_a3":"MNE","geou_dif":0,"geounit":"Montenegro","gu_a3":"MNE","su_dif":0,"subunit":"Montenegro","su_a3":"MNE","brk_diff":0,"name":"Montenegro","name_long":"Montenegro","brk_a3":"MNE","brk_name":"Montenegro","brk_group":"","abbrev":"Mont.","postal":"ME","formal_en":"Montenegro","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Montenegro","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":4,"mapcolor13":5,"pop_est":672180,"gdp_md_est":6816,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"ME","iso_a3":"MNE","iso_n3":"499","un_a3":"499","wb_a2":"ME","wb_a3":"MNE","woe_id":-99,"adm0_a3_is":"MNE","adm0_a3_us":"MNE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[87.7513,49.2972],[88.8056,49.4705],[90.7137,50.3318],[92.2347,50.8022],[93.1042,50.4953],[94.1476,50.4805],[94.8159,50.0134],[95.814,49.9775],[97.2597,49.7261],[98.2318,50.4224],[97.8257,51.011],[98.8615,52.0474],[99.9817,51.634],[100.8895,51.5169],[102.0652,51.2599],[102.2559,50.5106],[103.6765,50.09],[104.6216,50.2753],[105.8866,50.406],[106.8888,50.2743],[107.8682,49.7937],[108.4752,49.2825],[109.4024,49.293],[110.662,49.1301],[111.5812,49.378],[112.8977,49.5436],[114.3625,50.2483],[114.9621,50.1402],[115.4857,49.8052],[116.6788,49.8885],[116.1918,49.1346],[115.4853,48.1354],[115.7428,47.7265],[116.309,47.8534],[117.2955,47.6977],[118.0641,48.0667],[118.8666,47.7471],[119.7728,47.0481],[119.6633,46.6927],[118.8743,46.8054],[117.4217,46.6727],[116.7179,46.3882],[115.9851,45.7272],[114.4603,45.3398],[113.4639,44.8089],[112.4361,45.0116],[111.8733,45.1021],[111.3484,44.4574],[111.6677,44.0732],[111.8296,43.7431],[111.1297,43.4068],[110.4121,42.8712],[109.2436,42.5194],[107.7448,42.4815],[106.1293,42.1343],[104.965,41.5974],[104.5223,41.9083],[103.3123,41.9075],[101.833,42.5149],[100.8459,42.6638],[99.5158,42.5247],[97.4518,42.7489],[96.3494,42.7256],[95.7625,43.3194],[95.3069,44.2413],[94.6889,44.3523],[93.4807,44.9755],[92.1339,45.1151],[90.9455,45.2861],[90.5858,45.7197],[90.9708,46.8881],[90.2808,47.6935],[88.8543,48.0691],[88.0138,48.5995],[87.7513,49.2972]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Mongolia","sov_a3":"MNG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Mongolia","adm0_a3":"MNG","geou_dif":0,"geounit":"Mongolia","gu_a3":"MNG","su_dif":0,"subunit":"Mongolia","su_a3":"MNG","brk_diff":0,"name":"Mongolia","name_long":"Mongolia","brk_a3":"MNG","brk_name":"Mongolia","brk_group":"","abbrev":"Mong.","postal":"MN","formal_en":"Mongolia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Mongolia","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":5,"mapcolor13":6,"pop_est":3041142,"gdp_md_est":9476,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"MN","iso_a3":"MNG","iso_n3":"496","un_a3":"496","wb_a2":"MN","wb_a3":"MNG","woe_id":-99,"adm0_a3_is":"MNG","adm0_a3_us":"MNG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[34.56,-11.52],[35.3124,-11.4391],[36.5141,-11.7209],[36.7752,-11.5945],[37.4713,-11.5688],[37.8276,-11.2688],[38.4276,-11.2852],[39.521,-10.8969],[40.3166,-10.3171],[40.4784,-10.7654],[40.4373,-11.7617],[40.5608,-12.6392],[40.5996,-14.202],[40.7755,-14.6918],[40.4773,-15.4063],[40.0893,-16.1008],[39.4526,-16.7209],[38.5384,-17.101],[37.4111,-17.5864],[36.2813,-18.6597],[35.8965,-18.8423],[35.1984,-19.5528],[34.7864,-19.784],[34.7019,-20.497],[35.1761,-21.2544],[35.3734,-21.8408],[35.3858,-22.14],[35.5625,-22.09],[35.5339,-23.0708],[35.3718,-23.5354],[35.6075,-23.7066],[35.4587,-24.1226],[35.0407,-24.4784],[34.2158,-24.8163],[33.0132,-25.3576],[32.5746,-25.7273],[32.6604,-26.1486],[32.916,-26.2159],[32.8301,-26.7422],[32.0717,-26.7338],[31.9858,-26.2918],[31.8378,-25.8433],[31.7524,-25.4843],[31.9306,-24.3694],[31.6704,-23.659],[31.1914,-22.2515],[32.245,-21.1165],[32.5087,-20.3953],[32.6597,-20.3043],[32.7727,-19.7156],[32.612,-19.4194],[32.6549,-18.6721],[32.8499,-17.9791],[32.8476,-16.7134],[32.3282,-16.3921],[31.852,-16.3194],[31.6365,-16.072],[31.1731,-15.8609],[30.339,-15.8808],[30.2743,-15.5078],[30.1795,-14.7961],[33.214,-13.9719],[33.7897,-14.4518],[34.0648,-14.36],[34.4596,-14.613],[34.5177,-15.0137],[34.3073,-15.4786],[34.3813,-16.1836],[35.0338,-16.8013],[35.3391,-16.1074],[35.7719,-15.8969],[35.6868,-14.611],[35.268,-13.8878],[34.9072,-13.5654],[34.56,-13.58],[34.28,-12.28],[34.56,-11.52]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Mozambique","sov_a3":"MOZ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Mozambique","adm0_a3":"MOZ","geou_dif":0,"geounit":"Mozambique","gu_a3":"MOZ","su_dif":0,"subunit":"Mozambique","su_a3":"MOZ","brk_diff":0,"name":"Mozambique","name_long":"Mozambique","brk_a3":"MOZ","brk_name":"Mozambique","brk_group":"","abbrev":"Moz.","postal":"MZ","formal_en":"Republic of Mozambique","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Mozambique","name_alt":"","mapcolor7":4,"mapcolor8":2,"mapcolor9":1,"mapcolor13":4,"pop_est":21669278,"gdp_md_est":18940,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"MZ","iso_a3":"MOZ","iso_n3":"508","un_a3":"508","wb_a2":"MZ","wb_a3":"MOZ","woe_id":-99,"adm0_a3_is":"MOZ","adm0_a3_us":"MOZ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-12.1708,14.6168],[-12.8307,15.3037],[-13.4357,16.0394],[-14.0995,16.3043],[-14.5773,16.5983],[-15.1357,16.5873],[-15.6237,16.3693],[-16.1207,16.4557],[-16.4631,16.135],[-16.5497,16.6739],[-16.2706,17.167],[-16.1463,18.1085],[-16.2569,19.0967],[-16.3777,19.5938],[-16.2778,20.0925],[-16.5363,20.5679],[-17.0634,20.9998],[-16.8452,21.3333],[-12.9291,21.3271],[-13.1188,22.7712],[-12.8742,23.2848],[-11.9372,23.3746],[-11.9694,25.9334],[-8.6873,25.8811],[-8.6844,27.3957],[-4.9233,24.9746],[-6.4538,24.9566],[-5.9711,20.6408],[-5.4885,16.3251],[-5.3153,16.2019],[-5.5377,15.5017],[-9.5502,15.4865],[-9.7003,15.2641],[-10.0868,15.3305],[-10.6508,15.1327],[-11.3491,15.4113],[-11.6661,15.3882],[-11.8342,14.7991],[-12.1708,14.6168]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Mauritania","sov_a3":"MRT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Mauritania","adm0_a3":"MRT","geou_dif":0,"geounit":"Mauritania","gu_a3":"MRT","su_dif":0,"subunit":"Mauritania","su_a3":"MRT","brk_diff":0,"name":"Mauritania","name_long":"Mauritania","brk_a3":"MRT","brk_name":"Mauritania","brk_group":"","abbrev":"Mrt.","postal":"MR","formal_en":"Islamic Republic of Mauritania","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Mauritania","name_alt":"","mapcolor7":3,"mapcolor8":3,"mapcolor9":2,"mapcolor13":1,"pop_est":3129486,"gdp_md_est":6308,"pop_year":-99,"lastcensus":2000,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"MR","iso_a3":"MRT","iso_n3":"478","un_a3":"478","wb_a2":"MR","wb_a3":"MRT","woe_id":-99,"adm0_a3_is":"MRT","adm0_a3_us":"MRT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[34.56,-11.52],[34.28,-12.28],[34.56,-13.58],[34.9072,-13.5654],[35.268,-13.8878],[35.6868,-14.611],[35.7719,-15.8969],[35.3391,-16.1074],[35.0338,-16.8013],[34.3813,-16.1836],[34.3073,-15.4786],[34.5177,-15.0137],[34.4596,-14.613],[34.0648,-14.36],[33.7897,-14.4518],[33.214,-13.9719],[32.6882,-13.7129],[32.9918,-12.7839],[33.3064,-12.4358],[33.1143,-11.6072],[33.3153,-10.7965],[33.4857,-10.5256],[33.2314,-9.6767],[32.7594,-9.2306],[33.7397,-9.4172],[33.9408,-9.6937],[34.28,-10.16],[34.56,-11.52]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Malawi","sov_a3":"MWI","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Malawi","adm0_a3":"MWI","geou_dif":0,"geounit":"Malawi","gu_a3":"MWI","su_dif":0,"subunit":"Malawi","su_a3":"MWI","brk_diff":0,"name":"Malawi","name_long":"Malawi","brk_a3":"MWI","brk_name":"Malawi","brk_group":"","abbrev":"Mal.","postal":"MW","formal_en":"Republic of Malawi","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Malawi","name_alt":"","mapcolor7":1,"mapcolor8":3,"mapcolor9":4,"mapcolor13":5,"pop_est":14268711,"gdp_md_est":11810,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"MW","iso_a3":"MWI","iso_n3":"454","un_a3":"454","wb_a2":"MW","wb_a3":"MWI","woe_id":-99,"adm0_a3_is":"MWI","adm0_a3_us":"MWI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[101.0755,6.2049],[101.1542,5.6914],[101.8143,5.8108],[102.1412,6.2216],[102.3711,6.1282],[102.9617,5.5245],[103.3812,4.855],[103.4386,4.1816],[103.3321,3.7267],[103.4294,3.3829],[103.5024,2.791],[103.8547,2.5155],[104.2479,1.6311],[104.2288,1.293],[103.5197,1.2263],[102.5736,1.9671],[101.3906,2.7608],[101.2735,3.2703],[100.6954,3.9391],[100.5574,4.7673],[100.1967,5.3125],[100.3063,6.0406],[100.0858,6.4645],[100.2596,6.6428],[101.0755,6.2049]],[[118.6183,4.4782],[117.882,4.1376],[117.0152,4.3061],[115.8655,4.3066],[115.5191,3.1692],[115.134,2.8215],[114.6214,1.4307],[113.8058,1.2175],[112.8598,1.4978],[112.3803,1.4101],[111.7975,0.9044],[111.1591,0.9765],[110.5141,0.7731],[109.8302,1.3381],[109.6633,2.0065],[110.3961,1.6638],[111.1689,1.8506],[111.3701,2.6973],[111.7969,2.8859],[112.9956,3.1024],[113.7129,3.8935],[114.204,4.5259],[114.6596,4.0076],[114.8696,4.3483],[115.3475,4.3166],[115.4057,4.9552],[115.4507,5.4477],[116.2207,6.1432],[116.7251,6.9248],[117.1296,6.9281],[117.6434,6.4222],[117.6891,5.9875],[118.3477,5.7087],[119.1819,5.4078],[119.1107,5.0161],[118.4397,4.9665],[118.6183,4.4782]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Malaysia","sov_a3":"MYS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Malaysia","adm0_a3":"MYS","geou_dif":0,"geounit":"Malaysia","gu_a3":"MYS","su_dif":0,"subunit":"Malaysia","su_a3":"MYS","brk_diff":0,"name":"Malaysia","name_long":"Malaysia","brk_a3":"MYS","brk_name":"Malaysia","brk_group":"","abbrev":"Malay.","postal":"MY","formal_en":"Malaysia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Malaysia","name_alt":"","mapcolor7":2,"mapcolor8":4,"mapcolor9":3,"mapcolor13":6,"pop_est":25715819,"gdp_md_est":384300,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"MY","iso_a3":"MYS","iso_n3":"458","un_a3":"458","wb_a2":"MY","wb_a3":"MYS","woe_id":-99,"adm0_a3_is":"MYS","adm0_a3_us":"MYS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":8,"long_len":8,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[16.345,-28.5767],[15.6018,-27.8212],[15.2105,-27.091],[14.9897,-26.1174],[14.7432,-25.3929],[14.4081,-23.853],[14.3857,-22.6567],[14.2577,-22.1112],[13.8686,-21.699],[13.3525,-20.8728],[12.8268,-19.6732],[12.6086,-19.0453],[11.7949,-18.0691],[11.7342,-17.3019],[12.2155,-17.1117],[12.8141,-16.9413],[13.4624,-16.9712],[14.0585,-17.4234],[14.2097,-17.3531],[18.2633,-17.31],[18.9562,-17.7891],[21.3772,-17.9306],[23.215,-17.5231],[24.0339,-17.2958],[24.6823,-17.3534],[25.077,-17.5788],[25.0844,-17.6618],[24.5207,-17.8871],[24.2174,-17.8893],[23.579,-18.2813],[23.1969,-17.869],[21.655,-18.2191],[20.9106,-18.2522],[20.8811,-21.8143],[19.8955,-21.8492],[19.8958,-24.7678],[19.8947,-28.4611],[19.0021,-28.9724],[18.4649,-29.0455],[17.8362,-28.8564],[17.3875,-28.7835],[17.2189,-28.3559],[16.824,-28.0822],[16.345,-28.5767]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Namibia","sov_a3":"NAM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Namibia","adm0_a3":"NAM","geou_dif":0,"geounit":"Namibia","gu_a3":"NAM","su_dif":0,"subunit":"Namibia","su_a3":"NAM","brk_diff":0,"name":"Namibia","name_long":"Namibia","brk_a3":"NAM","brk_name":"Namibia","brk_group":"","abbrev":"Nam.","postal":"NA","formal_en":"Republic of Namibia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Namibia","name_alt":"","mapcolor7":4,"mapcolor8":1,"mapcolor9":1,"mapcolor13":7,"pop_est":2108665,"gdp_md_est":13250,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"NA","iso_a3":"NAM","iso_n3":"516","un_a3":"516","wb_a2":"NA","wb_a3":"NAM","woe_id":-99,"adm0_a3_is":"NAM","adm0_a3_us":"NAM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Southern Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[165.78,-21.08],[166.6,-21.7],[167.12,-22.16],[166.74,-22.4],[166.1897,-22.1297],[165.4744,-21.6796],[164.8298,-21.1498],[164.168,-20.4447],[164.0296,-20.1056],[164.46,-20.12],[165.02,-20.46],[165.46,-20.8],[165.78,-21.08]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"France","sov_a3":"FR1","adm0_dif":1,"level":2,"type":"Dependency","admin":"New Caledonia","adm0_a3":"NCL","geou_dif":0,"geounit":"New Caledonia","gu_a3":"NCL","su_dif":0,"subunit":"New Caledonia","su_a3":"NCL","brk_diff":0,"name":"New Caledonia","name_long":"New Caledonia","brk_a3":"NCL","brk_name":"New Caledonia","brk_group":"","abbrev":"New C.","postal":"NC","formal_en":"New Caledonia","formal_fr":"Nouvelle-Calédonie","note_adm0":"Fr.","note_brk":"","name_sort":"New Caledonia","name_alt":"","mapcolor7":7,"mapcolor8":5,"mapcolor9":9,"mapcolor13":11,"pop_est":227436,"gdp_md_est":3158,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"NC","iso_a3":"NCL","iso_n3":"540","un_a3":"540","wb_a2":"NC","wb_a3":"NCL","woe_id":-99,"adm0_a3_is":"NCL","adm0_a3_us":"NCL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Melanesia","region_wb":"East Asia & Pacific","name_len":13,"long_len":13,"abbrev_len":6,"tiny":-99,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[2.1545,11.9402],[2.1771,12.625],[1.0241,12.8518],[0.993,13.3357],[0.4299,13.9887],[0.2956,14.4442],[0.3749,14.9289],[1.0158,14.9682],[1.3855,15.3236],[2.75,15.4095],[3.6383,15.5681],[3.7234,16.1843],[4.2702,16.8522],[4.2674,19.1553],[5.6776,19.6012],[8.5729,21.5657],[11.9995,23.4717],[13.5814,23.0405],[14.1439,22.4913],[14.8513,22.863],[15.0969,21.3085],[15.4711,21.0485],[15.4871,20.7304],[15.9032,20.3876],[15.6857,19.9572],[15.3004,17.9279],[15.2477,16.6273],[13.9722,15.6844],[13.5404,14.3671],[13.9567,13.9967],[13.9545,13.3534],[14.5958,13.3304],[14.4958,12.8594],[14.2135,12.802],[14.1813,12.4837],[13.9954,12.4616],[13.3187,13.5564],[13.084,13.5961],[12.3021,13.0372],[11.5278,13.329],[10.9896,13.3873],[10.701,13.2469],[10.1148,13.2773],[9.5249,12.8511],[9.0149,12.8267],[7.8047,13.3435],[7.3307,13.098],[6.8204,13.1151],[6.4454,13.4928],[5.4431,13.8659],[4.3683,13.7475],[4.1079,13.5312],[3.9673,12.9561],[3.6806,12.5529],[3.6112,11.6602],[2.8486,12.2356],[2.4902,12.2331],[2.1545,11.9402]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Niger","sov_a3":"NER","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Niger","adm0_a3":"NER","geou_dif":0,"geounit":"Niger","gu_a3":"NER","su_dif":0,"subunit":"Niger","su_a3":"NER","brk_diff":0,"name":"Niger","name_long":"Niger","brk_a3":"NER","brk_name":"Niger","brk_group":"","abbrev":"Niger","postal":"NE","formal_en":"Republic of Niger","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Niger","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":3,"mapcolor13":13,"pop_est":15306252,"gdp_md_est":10040,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"NE","iso_a3":"NER","iso_n3":"562","un_a3":"562","wb_a2":"NE","wb_a3":"NER","woe_id":-99,"adm0_a3_is":"NER","adm0_a3_us":"NER","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[8.5003,4.772],[7.4621,4.4121],[7.0826,4.4647],[6.6981,4.2406],[5.8982,4.2625],[5.3628,4.888],[5.0336,5.6118],[4.3256,6.2707],[3.5742,6.2583],[2.6917,6.2588],[2.7491,7.8707],[2.7238,8.5068],[2.9123,9.1376],[3.2204,9.4442],[3.7054,10.0632],[3.6001,10.3322],[3.7971,10.7347],[3.5722,11.3279],[3.6112,11.6602],[3.6806,12.5529],[3.9673,12.9561],[4.1079,13.5312],[4.3683,13.7475],[5.4431,13.8659],[6.4454,13.4928],[6.8204,13.1151],[7.3307,13.098],[7.8047,13.3435],[9.0149,12.8267],[9.5249,12.8511],[10.1148,13.2773],[10.701,13.2469],[10.9896,13.3873],[11.5278,13.329],[12.3021,13.0372],[13.084,13.5961],[13.3187,13.5564],[13.9954,12.4616],[14.1813,12.4837],[14.5772,12.0854],[14.4682,11.9048],[14.4154,11.5724],[13.5729,10.7986],[13.3087,10.1604],[13.1676,9.6406],[12.9555,9.4178],[12.7537,8.7178],[12.2189,8.3058],[12.0639,7.7998],[11.8393,7.397],[11.7458,6.9814],[11.0588,6.6444],[10.4974,7.0554],[10.1183,7.0388],[9.5227,6.4535],[9.2332,6.4445],[8.7575,5.4797],[8.5003,4.772]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Nigeria","sov_a3":"NGA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Nigeria","adm0_a3":"NGA","geou_dif":0,"geounit":"Nigeria","gu_a3":"NGA","su_dif":0,"subunit":"Nigeria","su_a3":"NGA","brk_diff":0,"name":"Nigeria","name_long":"Nigeria","brk_a3":"NGA","brk_name":"Nigeria","brk_group":"","abbrev":"Nigeria","postal":"NG","formal_en":"Federal Republic of Nigeria","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Nigeria","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":5,"mapcolor13":2,"pop_est":149229090,"gdp_md_est":335400,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"NG","iso_a3":"NGA","iso_n3":"566","un_a3":"566","wb_a2":"NG","wb_a3":"NGA","woe_id":-99,"adm0_a3_is":"NGA","adm0_a3_us":"NGA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-85.7125,11.0884],[-86.0585,11.4034],[-86.5258,11.8069],[-86.746,12.144],[-87.1675,12.4583],[-87.6685,12.9099],[-87.5575,13.0646],[-87.3924,12.914],[-87.3167,12.9847],[-87.0058,13.0258],[-86.8806,13.2542],[-86.7338,13.2631],[-86.7551,13.7548],[-86.5207,13.7785],[-86.3121,13.7714],[-86.0963,14.0382],[-85.8013,13.8361],[-85.6987,13.9601],[-85.5144,14.079],[-85.1654,14.3544],[-85.1488,14.5602],[-85.0528,14.5515],[-84.9245,14.7905],[-84.82,14.8196],[-84.6496,14.6668],[-84.4493,14.6216],[-84.2283,14.7488],[-83.9757,14.7494],[-83.6286,14.8801],[-83.49,15.0163],[-83.1472,14.9958],[-83.2332,14.8999],[-83.2842,14.6766],[-83.1821,14.3107],[-83.4125,13.9701],[-83.5198,13.5677],[-83.5522,13.1271],[-83.4985,12.8693],[-83.4733,12.4191],[-83.6261,12.3209],[-83.7196,11.8931],[-83.6509,11.629],[-83.8555,11.3733],[-83.8089,11.103],[-83.6556,10.9388],[-83.8951,10.7268],[-84.1902,10.7935],[-84.3559,10.9992],[-84.6731,11.0827],[-84.903,10.9523],[-85.5619,11.2171],[-85.7125,11.0884]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Nicaragua","sov_a3":"NIC","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Nicaragua","adm0_a3":"NIC","geou_dif":0,"geounit":"Nicaragua","gu_a3":"NIC","su_dif":0,"subunit":"Nicaragua","su_a3":"NIC","brk_diff":0,"name":"Nicaragua","name_long":"Nicaragua","brk_a3":"NIC","brk_name":"Nicaragua","brk_group":"","abbrev":"Nic.","postal":"NI","formal_en":"Republic of Nicaragua","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Nicaragua","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":9,"pop_est":5891199,"gdp_md_est":16790,"pop_year":-99,"lastcensus":2005,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"NI","iso_a3":"NIC","iso_n3":"558","un_a3":"558","wb_a2":"NI","wb_a3":"NIC","woe_id":-99,"adm0_a3_is":"NIC","adm0_a3_us":"NIC","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[6.0742,53.5104],[6.9051,53.4822],[7.0921,53.144],[6.8429,52.2284],[6.5894,51.852],[5.9887,51.8516],[6.1567,50.8037],[5.607,51.0373],[4.974,51.475],[4.0471,51.2673],[3.315,51.3458],[3.8303,51.6205],[4.706,53.0918],[6.0742,53.5104]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Netherlands","sov_a3":"NL1","adm0_dif":1,"level":2,"type":"Country","admin":"Netherlands","adm0_a3":"NLD","geou_dif":0,"geounit":"Netherlands","gu_a3":"NLD","su_dif":0,"subunit":"Netherlands","su_a3":"NLD","brk_diff":0,"name":"Netherlands","name_long":"Netherlands","brk_a3":"NLD","brk_name":"Netherlands","brk_group":"","abbrev":"Neth.","postal":"NL","formal_en":"Kingdom of the Netherlands","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Netherlands","name_alt":"","mapcolor7":4,"mapcolor8":2,"mapcolor9":2,"mapcolor13":9,"pop_est":16715999,"gdp_md_est":672000,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"NL","iso_a3":"NLD","iso_n3":"528","un_a3":"528","wb_a2":"NL","wb_a3":"NLD","woe_id":-99,"adm0_a3_is":"NLD","adm0_a3_us":"NLD","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Western Europe","region_wb":"Europe & Central Asia","name_len":11,"long_len":11,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[28.1655,71.1855],[31.2934,70.4538],[30.0054,70.1863],[31.1011,69.5581],[29.3996,69.1569],[28.5919,69.0648],[29.0156,69.7665],[27.7323,70.1642],[26.1796,69.8253],[25.6892,69.0921],[24.7357,68.6496],[23.662,68.8912],[22.3562,68.8417],[21.2449,69.3704],[20.6456,69.1062],[20.0253,69.0651],[19.8786,68.4072],[17.9939,68.5674],[17.7292,68.0106],[16.7689,68.0139],[16.1087,67.3025],[15.1084,66.1939],[13.5557,64.787],[13.9199,64.4454],[13.5719,64.0491],[12.5799,64.0662],[11.9306,63.1283],[11.9921,61.8004],[12.6311,61.2936],[12.3004,60.1179],[11.4683,59.4324],[11.0274,58.8561],[10.3566,59.4698],[8.382,58.3133],[7.0487,58.0789],[5.6658,58.5882],[5.3082,59.6632],[4.9921,61.971],[5.9129,62.6145],[8.5534,63.454],[10.5277,64.486],[12.3583,65.8797],[14.7611,67.8106],[16.4359,68.5632],[19.184,69.8174],[21.3784,70.2552],[23.0237,70.2021],[24.5465,71.0305],[26.37,70.9863],[28.1655,71.1855]],[[24.7241,77.8538],[22.4903,77.4449],[20.726,77.677],[21.4161,77.935],[20.8119,78.2546],[22.8843,78.4549],[23.2813,78.0795],[24.7241,77.8538]],[[18.2518,79.7018],[21.5438,78.9561],[19.0274,78.5626],[18.4717,77.8267],[17.5944,77.638],[17.1182,76.8094],[15.9132,76.7704],[13.7626,77.3803],[14.6696,77.7356],[13.1706,78.0249],[11.2223,78.8693],[10.4445,79.6524],[13.1708,80.0105],[13.7185,79.6604],[15.1428,79.6743],[15.5226,80.0161],[16.9908,80.0509],[18.2518,79.7018]],[[25.4476,80.4073],[27.4075,80.0564],[25.9247,79.5178],[23.0245,79.4],[20.0752,79.5668],[19.8973,79.8424],[18.4623,79.8599],[17.368,80.3189],[20.456,80.5982],[21.9079,80.3577],[22.9193,80.6571],[25.4476,80.4073]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Norway","sov_a3":"NOR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Norway","adm0_a3":"NOR","geou_dif":0,"geounit":"Norway","gu_a3":"NOR","su_dif":0,"subunit":"Norway","su_a3":"NOR","brk_diff":0,"name":"Norway","name_long":"Norway","brk_a3":"NOR","brk_name":"Norway","brk_group":"","abbrev":"Nor.","postal":"N","formal_en":"Kingdom of Norway","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Norway","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":8,"mapcolor13":12,"pop_est":4676305,"gdp_md_est":276400,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"NO","iso_a3":"NOR","iso_n3":"578","un_a3":"578","wb_a2":"NO","wb_a3":"NOR","woe_id":-99,"adm0_a3_is":"NOR","adm0_a3_us":"NOR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[88.1204,27.8765],[88.0431,27.4458],[88.1748,26.8104],[88.0602,26.4146],[87.2275,26.3979],[86.0244,26.631],[85.2518,26.7262],[84.675,27.2349],[83.3042,27.3645],[82,27.9255],[81.0572,28.4161],[80.0884,28.7945],[80.4767,29.7299],[81.1113,30.1835],[81.5258,30.4227],[82.3275,30.1153],[83.3371,29.4637],[83.899,29.3202],[84.2346,28.8399],[85.0116,28.6428],[85.8233,28.2036],[86.9545,27.9743],[88.1204,27.8765]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Nepal","sov_a3":"NPL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Nepal","adm0_a3":"NPL","geou_dif":0,"geounit":"Nepal","gu_a3":"NPL","su_dif":0,"subunit":"Nepal","su_a3":"NPL","brk_diff":0,"name":"Nepal","name_long":"Nepal","brk_a3":"NPL","brk_name":"Nepal","brk_group":"","abbrev":"Nepal","postal":"NP","formal_en":"Nepal","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Nepal","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":3,"mapcolor13":12,"pop_est":28563377,"gdp_md_est":31080,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"NP","iso_a3":"NPL","iso_n3":"524","un_a3":"524","wb_a2":"NP","wb_a3":"NPL","woe_id":-99,"adm0_a3_is":"NPL","adm0_a3_us":"NPL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[173.0204,-40.9191],[173.2472,-41.332],[173.9584,-40.9267],[174.2476,-41.3492],[174.2485,-41.77],[173.8764,-42.2332],[173.2227,-42.97],[172.7112,-43.3723],[173.0801,-43.8533],[172.3086,-43.8657],[171.4529,-44.2425],[171.1851,-44.8971],[170.6167,-45.9089],[169.8314,-46.3558],[169.3323,-46.6412],[168.4114,-46.6199],[167.7637,-46.2902],[166.6769,-46.2199],[166.5091,-45.8527],[167.0464,-45.1109],[168.3038,-44.124],[168.9494,-43.9358],[169.6678,-43.5553],[170.5249,-43.0317],[171.1251,-42.5128],[171.5697,-41.7674],[171.9487,-41.5144],[172.0972,-40.9561],[172.7986,-40.494],[173.0204,-40.9191]],[[174.612,-36.1564],[175.3366,-37.2091],[175.3576,-36.5262],[175.8089,-36.7989],[175.9585,-37.5554],[176.7632,-37.8813],[177.4388,-37.9612],[178.0104,-37.5798],[178.5171,-37.6954],[178.2747,-38.5828],[177.9705,-39.1663],[177.207,-39.1458],[176.94,-39.4497],[177.0329,-39.8799],[176.8858,-40.066],[176.508,-40.6048],[176.0124,-41.2896],[175.2396,-41.6883],[175.0679,-41.4259],[174.651,-41.2818],[175.2276,-40.4592],[174.9002,-39.9089],[173.824,-39.5089],[173.8523,-39.1466],[174.5748,-38.7977],[174.7435,-38.0278],[174.697,-37.3811],[174.292,-36.7111],[174.319,-36.5348],[173.841,-36.122],[173.0542,-35.2371],[172.636,-34.5291],[173.007,-34.4507],[173.5513,-35.0062],[174.3294,-35.2655],[174.612,-36.1564]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"New Zealand","sov_a3":"NZ1","adm0_dif":1,"level":2,"type":"Country","admin":"New Zealand","adm0_a3":"NZL","geou_dif":0,"geounit":"New Zealand","gu_a3":"NZL","su_dif":0,"subunit":"New Zealand","su_a3":"NZL","brk_diff":0,"name":"New Zealand","name_long":"New Zealand","brk_a3":"NZL","brk_name":"New Zealand","brk_group":"","abbrev":"N.Z.","postal":"NZ","formal_en":"New Zealand","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"New Zealand","name_alt":"","mapcolor7":3,"mapcolor8":3,"mapcolor9":4,"mapcolor13":4,"pop_est":4213418,"gdp_md_est":116700,"pop_year":-99,"lastcensus":2006,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"NZ","iso_a3":"NZL","iso_n3":"554","un_a3":"554","wb_a2":"NZ","wb_a3":"NZL","woe_id":-99,"adm0_a3_is":"NZL","adm0_a3_us":"NZL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Australia and New Zealand","region_wb":"East Asia & Pacific","name_len":11,"long_len":11,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[58.8611,21.114],[58.488,20.429],[58.0343,20.4814],[57.8264,20.243],[57.6658,19.736],[57.7887,19.0676],[57.6944,18.9447],[57.2343,18.948],[56.6097,18.5743],[56.5122,18.0871],[56.2835,17.8761],[55.6615,17.8841],[55.2699,17.6323],[55.2749,17.2284],[54.791,16.9507],[54.2393,17.045],[53.5705,16.7077],[53.1086,16.6511],[52.7822,17.3497],[52,19],[55,20],[55.6667,22],[55.2083,22.7083],[55.2345,23.111],[55.5258,23.5249],[55.5286,23.9336],[55.9812,24.1305],[55.8041,24.2696],[55.8862,24.9208],[56.3968,24.9247],[56.8451,24.2417],[57.4035,23.8786],[58.1369,23.7479],[58.7292,23.5657],[59.1805,22.9924],[59.4501,22.6603],[59.8081,22.5336],[59.8061,22.3105],[59.4422,21.7145],[59.2824,21.4339],[58.8611,21.114]],[[56.3914,25.896],[56.261,25.7146],[56.0708,26.0555],[56.362,26.3959],[56.4857,26.3091],[56.3914,25.896]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Oman","sov_a3":"OMN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Oman","adm0_a3":"OMN","geou_dif":0,"geounit":"Oman","gu_a3":"OMN","su_dif":0,"subunit":"Oman","su_a3":"OMN","brk_diff":0,"name":"Oman","name_long":"Oman","brk_a3":"OMN","brk_name":"Oman","brk_group":"","abbrev":"Oman","postal":"OM","formal_en":"Sultanate of Oman","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Oman","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":6,"pop_est":3418085,"gdp_md_est":66980,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"OM","iso_a3":"OMN","iso_n3":"512","un_a3":"512","wb_a2":"OM","wb_a3":"OMN","woe_id":-99,"adm0_a3_is":"OMN","adm0_a3_us":"OMN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[75.158,37.133],[75.8969,36.6668],[76.1928,35.8984],[77.8375,35.494],[76.8717,34.6535],[75.7571,34.5049],[74.2402,34.7489],[73.7499,34.3177],[74.1043,33.4415],[74.4516,32.7649],[75.2586,32.2711],[74.4059,31.6926],[74.4214,30.9798],[73.4506,29.9764],[72.8238,28.9616],[71.7777,27.9132],[70.6165,27.9892],[69.5144,26.941],[70.1689,26.4919],[70.2829,25.7222],[70.8447,25.2151],[71.0432,24.3565],[68.8426,24.3591],[68.1766,23.692],[67.4437,23.9448],[67.1454,24.6636],[66.3728,25.4251],[64.5304,25.237],[62.9057,25.2184],[61.4974,25.0782],[61.8742,26.24],[63.3166,26.7565],[63.2339,27.217],[62.7554,27.3789],[62.7278,28.2596],[61.7719,28.6993],[61.3693,29.3033],[60.8742,29.8292],[62.5499,29.3186],[63.5503,29.4683],[64.148,29.3408],[64.3504,29.56],[65.0469,29.4722],[66.3465,29.8879],[66.3815,30.7389],[66.9389,31.3049],[67.6834,31.3032],[67.7927,31.5829],[68.5569,31.7133],[68.9267,31.6202],[69.3178,31.9014],[69.2625,32.5019],[69.6871,33.1055],[70.3236,33.3585],[69.9305,34.0201],[70.8818,33.9889],[71.1568,34.3489],[71.115,34.7331],[71.6131,35.1532],[71.4988,35.6506],[71.2623,36.0744],[71.8463,36.5099],[72.92,36.72],[74.0676,36.8362],[74.5759,37.0208],[75.158,37.133]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Pakistan","sov_a3":"PAK","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Pakistan","adm0_a3":"PAK","geou_dif":0,"geounit":"Pakistan","gu_a3":"PAK","su_dif":0,"subunit":"Pakistan","su_a3":"PAK","brk_diff":0,"name":"Pakistan","name_long":"Pakistan","brk_a3":"PAK","brk_name":"Pakistan","brk_group":"","abbrev":"Pak.","postal":"PK","formal_en":"Islamic Republic of Pakistan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Pakistan","name_alt":"","mapcolor7":2,"mapcolor8":2,"mapcolor9":3,"mapcolor13":11,"pop_est":176242949,"gdp_md_est":427300,"pop_year":-99,"lastcensus":1998,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"PK","iso_a3":"PAK","iso_n3":"586","un_a3":"586","wb_a2":"PK","wb_a3":"PAK","woe_id":-99,"adm0_a3_is":"PAK","adm0_a3_us":"PAK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Southern Asia","region_wb":"South Asia","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-77.8816,7.2238],[-78.2149,7.5123],[-78.4292,8.052],[-78.1821,8.3192],[-78.4355,8.3877],[-78.6221,8.7181],[-79.1203,8.9961],[-79.5579,8.9324],[-79.7606,8.5845],[-80.1645,8.3333],[-80.3827,8.2984],[-80.4807,8.0903],[-80.0037,7.5475],[-80.2767,7.4198],[-80.4212,7.2716],[-80.8864,7.2205],[-81.0595,7.8179],[-81.1897,7.6479],[-81.5195,7.7066],[-81.7213,8.109],[-82.1314,8.1754],[-82.3909,8.2924],[-82.8201,8.2909],[-82.851,8.0738],[-82.9658,8.225],[-82.9132,8.4235],[-82.8298,8.6263],[-82.8687,8.8073],[-82.7192,8.9257],[-82.9272,9.0743],[-82.9329,9.4768],[-82.5462,9.5661],[-82.1871,9.2074],[-82.2076,8.9956],[-81.8086,8.9506],[-81.7142,9.032],[-81.4393,8.7862],[-80.9473,8.8585],[-80.5219,9.1111],[-79.9146,9.3128],[-79.5733,9.6116],[-79.0212,9.5529],[-79.0585,9.4546],[-78.5009,9.4205],[-78.0559,9.2477],[-77.7295,8.9468],[-77.3534,8.6705],[-77.4747,8.5243],[-77.2426,7.9353],[-77.4311,7.6381],[-77.7534,7.7098],[-77.8816,7.2238]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Panama","sov_a3":"PAN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Panama","adm0_a3":"PAN","geou_dif":0,"geounit":"Panama","gu_a3":"PAN","su_dif":0,"subunit":"Panama","su_a3":"PAN","brk_diff":0,"name":"Panama","name_long":"Panama","brk_a3":"PAN","brk_name":"Panama","brk_group":"","abbrev":"Pan.","postal":"PA","formal_en":"Republic of Panama","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Panama","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":6,"mapcolor13":3,"pop_est":3360474,"gdp_md_est":38830,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"PA","iso_a3":"PAN","iso_n3":"591","un_a3":"591","wb_a2":"PA","wb_a3":"PAN","woe_id":-99,"adm0_a3_is":"PAN","adm0_a3_us":"PAN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-69.5904,-17.58],[-69.8584,-18.0927],[-70.3726,-18.348],[-71.3753,-17.7738],[-71.462,-17.3635],[-73.4445,-16.3594],[-75.2379,-15.2657],[-76.0092,-14.6493],[-76.4235,-13.8232],[-76.2592,-13.535],[-77.1062,-12.2227],[-78.0922,-10.3777],[-79.037,-8.3866],[-79.4459,-7.9308],[-79.7606,-7.1943],[-80.5375,-6.5417],[-81.25,-6.1368],[-80.9263,-5.6906],[-81.4109,-4.7368],[-81.0997,-4.0364],[-80.3026,-3.4049],[-80.184,-3.8212],[-80.4693,-4.0593],[-80.4422,-4.4257],[-80.0289,-4.3461],[-79.625,-4.4542],[-79.2053,-4.9591],[-78.6399,-4.5478],[-78.4507,-3.8731],[-77.8379,-3.003],[-76.6354,-2.6087],[-75.545,-1.5616],[-75.2337,-0.9114],[-75.3732,-0.152],[-75.1066,-0.0572],[-74.4416,-0.5308],[-74.1224,-1.0028],[-73.6595,-1.2605],[-73.0704,-2.309],[-72.3258,-2.4342],[-71.7748,-2.1698],[-71.4136,-2.3428],[-70.8135,-2.2569],[-70.0477,-2.7252],[-70.6927,-3.7429],[-70.394,-3.7666],[-69.8936,-4.2982],[-70.7948,-4.2513],[-70.9288,-4.4016],[-71.7484,-4.594],[-72.8919,-5.2746],[-72.9645,-5.7413],[-73.2197,-6.0892],[-73.12,-6.6299],[-73.7245,-6.9186],[-73.7234,-7.341],[-73.9872,-7.5238],[-73.5711,-8.4244],[-73.0154,-9.0328],[-73.2267,-9.4622],[-72.563,-9.5202],[-72.1849,-10.0536],[-71.3024,-10.0794],[-70.4819,-9.4901],[-70.5487,-11.0091],[-70.0938,-11.124],[-69.5297,-10.9517],[-68.6651,-12.5613],[-68.8801,-12.8997],[-68.9292,-13.6027],[-68.9489,-14.4536],[-69.3395,-14.9532],[-69.1603,-15.324],[-69.3898,-15.6601],[-68.9596,-16.5007],[-69.5904,-17.58]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Peru","sov_a3":"PER","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Peru","adm0_a3":"PER","geou_dif":0,"geounit":"Peru","gu_a3":"PER","su_dif":0,"subunit":"Peru","su_a3":"PER","brk_diff":0,"name":"Peru","name_long":"Peru","brk_a3":"PER","brk_name":"Peru","brk_group":"","abbrev":"Peru","postal":"PE","formal_en":"Republic of Peru","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Peru","name_alt":"","mapcolor7":4,"mapcolor8":4,"mapcolor9":4,"mapcolor13":11,"pop_est":29546963,"gdp_md_est":247300,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"PE","iso_a3":"PER","iso_n3":"604","un_a3":"604","wb_a2":"PE","wb_a3":"PER","woe_id":-99,"adm0_a3_is":"PER","adm0_a3_us":"PER","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[126.3768,8.4147],[126.4785,7.7504],[126.5374,7.1894],[126.1968,6.2743],[125.8314,7.2937],[125.3639,6.7865],[125.6832,6.0497],[125.3965,5.581],[124.2198,6.1614],[123.9387,6.8851],[124.2437,7.3606],[123.6102,7.8335],[123.2961,7.4189],[122.8255,7.4574],[122.0855,6.8994],[121.9199,7.1921],[122.3124,8.035],[122.9424,8.3162],[123.4877,8.693],[123.8412,8.2403],[124.6015,8.5142],[124.7646,8.9604],[125.4714,8.987],[125.4121,9.7603],[126.2227,9.2861],[126.3066,8.7825],[126.3768,8.4147]],[[123.9824,10.2788],[123.6232,9.9501],[123.3099,9.3183],[122.9959,9.0222],[122.3801,9.7134],[122.5861,9.981],[122.8371,10.2612],[122.9474,10.8819],[123.4988,10.9406],[123.3378,10.2674],[124.0779,11.2327],[123.9824,10.2788]],[[118.5046,9.3164],[117.1743,8.3675],[117.6645,9.0669],[118.3869,9.6845],[118.9873,10.3763],[119.5115,11.3697],[119.6897,10.5543],[119.0295,10.0037],[118.5046,9.3164]],[[121.8835,11.8918],[122.4838,11.5822],[123.1202,11.5837],[123.1008,11.1659],[122.6377,10.7413],[122.0026,10.441],[121.9674,10.9057],[122.0384,11.4158],[121.8835,11.8918]],[[125.5026,12.1627],[125.7835,11.0461],[125.0119,11.3115],[125.0328,10.9758],[125.2774,10.3587],[124.8018,10.1347],[124.7602,10.838],[124.4591,10.8899],[124.3025,11.4954],[124.891,11.4156],[124.878,11.7942],[124.2668,12.5578],[125.2271,12.5357],[125.5026,12.1627]],[[121.5274,13.0696],[121.2622,12.2056],[120.8339,12.7045],[120.3234,13.4664],[121.1801,13.4297],[121.5274,13.0696]],[[121.3213,18.5041],[121.9376,18.2186],[122.246,18.4789],[122.337,18.2249],[122.1743,17.8103],[122.5157,17.0935],[122.2523,16.2624],[121.6628,15.931],[121.5051,15.1248],[121.7288,14.3284],[122.2589,14.2182],[122.7013,14.3365],[123.9503,13.7821],[123.8551,13.2378],[124.1813,12.9975],[124.0774,12.5367],[123.298,13.0275],[122.9287,13.5529],[122.6714,13.1858],[122.0346,13.7845],[121.1264,13.6367],[120.6286,13.8577],[120.6794,14.271],[120.9918,14.5254],[120.6933,14.7567],[120.5641,14.3963],[120.0704,14.9709],[119.9209,15.4063],[119.8838,16.3637],[120.2865,16.0346],[120.39,17.5991],[120.7159,18.5052],[121.3213,18.5041]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Philippines","sov_a3":"PHL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Philippines","adm0_a3":"PHL","geou_dif":0,"geounit":"Philippines","gu_a3":"PHL","su_dif":0,"subunit":"Philippines","su_a3":"PHL","brk_diff":0,"name":"Philippines","name_long":"Philippines","brk_a3":"PHL","brk_name":"Philippines","brk_group":"","abbrev":"Phil.","postal":"PH","formal_en":"Republic of the Philippines","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Philippines","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":2,"mapcolor13":8,"pop_est":97976603,"gdp_md_est":317500,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"PH","iso_a3":"PHL","iso_n3":"608","un_a3":"608","wb_a2":"PH","wb_a3":"PHL","woe_id":-99,"adm0_a3_is":"PHL","adm0_a3_us":"PHL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":11,"long_len":11,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[155.88,-6.82],[155.6,-6.92],[155.167,-6.5359],[154.7292,-5.9008],[154.5141,-5.1391],[154.6525,-5.0424],[154.76,-5.34],[155.0629,-5.5668],[155.5477,-6.2007],[156.02,-6.54],[155.88,-6.82]],[[151.9828,-5.4781],[151.4591,-5.5603],[151.3014,-5.8407],[150.7544,-6.0838],[150.2412,-6.3178],[149.71,-6.3165],[148.8901,-6.026],[148.3189,-5.7471],[148.4018,-5.4378],[149.2984,-5.5837],[149.8456,-5.5055],[149.9963,-5.0261],[150.1398,-5.0013],[150.2369,-5.5322],[150.8075,-5.4558],[151.0897,-5.1137],[151.6479,-4.7571],[151.5379,-4.1678],[152.1368,-4.1488],[152.3387,-4.313],[152.3187,-4.8677],[151.9828,-5.4781]],[[147.1919,-7.388],[148.0846,-8.0441],[148.7341,-9.1047],[149.3068,-9.0714],[149.2666,-9.5144],[150.0387,-9.6843],[149.7388,-9.8729],[150.8016,-10.2937],[150.6906,-10.5827],[150.0284,-10.6525],[149.7823,-10.3933],[148.9231,-10.2809],[147.913,-10.1304],[147.1354,-9.4924],[146.5679,-8.9426],[146.0485,-8.0674],[144.7442,-7.6301],[143.8971,-7.9153],[143.2864,-8.2455],[143.4139,-8.9831],[142.6284,-9.3268],[142.0683,-9.1596],[141.0339,-9.1179],[141.0171,-5.859],[141.0002,-2.6002],[142.7352,-3.2892],[144.584,-3.8614],[145.2732,-4.3737],[145.8298,-4.8765],[145.9819,-5.4656],[147.6481,-6.0837],[147.8911,-6.614],[146.9709,-6.7217],[147.1919,-7.388]],[[153.14,-4.5],[152.8273,-4.7664],[152.6387,-4.1761],[152.406,-3.7897],[151.9532,-3.4621],[151.3843,-3.0354],[150.662,-2.7415],[150.94,-2.5],[151.48,-2.78],[151.82,-3],[152.24,-3.24],[152.64,-3.66],[153.02,-3.98],[153.14,-4.5]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Papua New Guinea","sov_a3":"PNG","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Papua New Guinea","adm0_a3":"PNG","geou_dif":0,"geounit":"Papua New Guinea","gu_a3":"PNG","su_dif":1,"subunit":"Papua New Guinea","su_a3":"PN1","brk_diff":0,"name":"Papua New Guinea","name_long":"Papua New Guinea","brk_a3":"PN1","brk_name":"Papua New Guinea","brk_group":"","abbrev":"P.N.G.","postal":"PG","formal_en":"Independent State of Papua New Guinea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Papua New Guinea","name_alt":"","mapcolor7":4,"mapcolor8":2,"mapcolor9":3,"mapcolor13":1,"pop_est":6057263,"gdp_md_est":13210,"pop_year":-99,"lastcensus":2000,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"PG","iso_a3":"PNG","iso_n3":"598","un_a3":"598","wb_a2":"PG","wb_a3":"PNG","woe_id":-99,"adm0_a3_is":"PNG","adm0_a3_us":"PNG","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Melanesia","region_wb":"East Asia & Pacific","name_len":16,"long_len":16,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[15.017,51.1067],[14.6071,51.7452],[14.685,52.0899],[14.4376,52.6249],[14.0745,52.9813],[14.3533,53.2482],[14.1197,53.757],[14.8029,54.0507],[16.3635,54.5132],[17.6228,54.8515],[18.6209,54.6826],[18.6963,54.4387],[19.6606,54.4261],[20.8922,54.3125],[22.7311,54.3275],[23.244,54.2206],[23.4841,53.9125],[23.5275,53.4701],[23.8049,53.0897],[23.7992,52.6911],[23.1995,52.487],[23.508,52.0236],[23.5271,51.5785],[24.03,50.7054],[23.9228,50.4249],[23.4265,50.3085],[22.5185,49.4768],[22.7764,49.0274],[22.5581,49.0857],[21.6078,49.4701],[20.888,49.3288],[20.4158,49.4315],[19.825,49.2171],[19.3207,49.5716],[18.9096,49.4358],[18.8531,49.4962],[18.3929,49.9886],[17.6494,50.049],[17.5546,50.3621],[16.8688,50.474],[16.7195,50.2157],[16.1763,50.4226],[16.2386,50.6977],[15.491,50.7847],[15.017,51.1067]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Poland","sov_a3":"POL","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Poland","adm0_a3":"POL","geou_dif":0,"geounit":"Poland","gu_a3":"POL","su_dif":0,"subunit":"Poland","su_a3":"POL","brk_diff":0,"name":"Poland","name_long":"Poland","brk_a3":"POL","brk_name":"Poland","brk_group":"","abbrev":"Pol.","postal":"PL","formal_en":"Republic of Poland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Poland","name_alt":"","mapcolor7":3,"mapcolor8":7,"mapcolor9":1,"mapcolor13":2,"pop_est":38482919,"gdp_md_est":667900,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"PL","iso_a3":"POL","iso_n3":"616","un_a3":"616","wb_a2":"PL","wb_a3":"POL","woe_id":-99,"adm0_a3_is":"POL","adm0_a3_us":"POL","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-66.2824,18.5148],[-65.7713,18.4267],[-65.591,18.228],[-65.8472,17.9759],[-66.5999,17.9818],[-67.1842,17.9466],[-67.2424,18.3745],[-67.1007,18.5206],[-66.2824,18.5148]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"United States of America","sov_a3":"US1","adm0_dif":1,"level":2,"type":"Dependency","admin":"Puerto Rico","adm0_a3":"PRI","geou_dif":0,"geounit":"Puerto Rico","gu_a3":"PRI","su_dif":0,"subunit":"Puerto Rico","su_a3":"PRI","brk_diff":0,"name":"Puerto Rico","name_long":"Puerto Rico","brk_a3":"PRI","brk_name":"Puerto Rico","brk_group":"","abbrev":"P.R.","postal":"PR","formal_en":"Commonwealth of Puerto Rico","formal_fr":"","note_adm0":"Commonwealth of U.S.A.","note_brk":"","name_sort":"Puerto Rico","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":1,"mapcolor13":1,"pop_est":3971020,"gdp_md_est":70230,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"PR","iso_a3":"PRI","iso_n3":"630","un_a3":"630","wb_a2":"PR","wb_a3":"PRI","woe_id":-99,"adm0_a3_is":"PRI","adm0_a3_us":"PRI","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":11,"long_len":11,"abbrev_len":4,"tiny":-99,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[130.64,42.395],[130.78,42.22],[130.4,42.28],[129.9659,41.9414],[129.6674,41.6011],[129.7052,40.8828],[129.1881,40.6618],[129.0104,40.4854],[128.6334,40.1898],[127.9674,40.0254],[127.5334,39.7569],[127.5021,39.3239],[127.3854,39.2135],[127.7833,39.0509],[128.3497,38.6122],[128.2057,38.3704],[127.78,38.3045],[127.0733,38.2561],[126.6837,37.8048],[126.2373,37.8404],[126.1748,37.7497],[125.6891,37.94],[125.5684,37.7521],[125.2753,37.6691],[125.2401,37.8572],[124.981,37.9488],[124.7122,38.1083],[124.986,38.5485],[125.2219,38.6659],[125.1329,38.8486],[125.3866,39.388],[125.3211,39.5514],[124.7375,39.6603],[124.2656,39.9285],[125.0799,40.5698],[126.182,41.1073],[126.8691,41.8166],[127.3438,41.5032],[128.2084,41.4668],[128.0522,41.9943],[129.5967,42.425],[129.9943,42.9854],[130.64,42.395]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"North Korea","sov_a3":"PRK","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"North Korea","adm0_a3":"PRK","geou_dif":0,"geounit":"North Korea","gu_a3":"PRK","su_dif":0,"subunit":"North Korea","su_a3":"PRK","brk_diff":0,"name":"Dem. Rep. Korea","name_long":"Dem. Rep. Korea","brk_a3":"PRK","brk_name":"Dem. Rep. Korea","brk_group":"","abbrev":"N.K.","postal":"KP","formal_en":"Democratic People's Republic of Korea","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Korea, Dem. Rep.","name_alt":"","mapcolor7":3,"mapcolor8":5,"mapcolor9":3,"mapcolor13":9,"pop_est":22665345,"gdp_md_est":40000,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"KP","iso_a3":"PRK","iso_n3":"408","un_a3":"408","wb_a2":"KP","wb_a3":"PRK","woe_id":-99,"adm0_a3_is":"PRK","adm0_a3_us":"PRK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":15,"long_len":15,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-9.0348,41.8806],[-8.6719,42.1347],[-8.2639,42.2805],[-8.0132,41.7909],[-7.4225,41.7921],[-7.2513,41.9183],[-6.6686,41.8834],[-6.3891,41.3818],[-6.8511,41.1111],[-6.864,40.3309],[-7.0264,40.1845],[-7.0666,39.7119],[-7.4986,39.6296],[-7.098,39.0301],[-7.3741,38.3731],[-7.0293,38.0758],[-7.1665,37.8039],[-7.5371,37.4289],[-7.4537,37.0978],[-7.8556,36.8383],[-8.3828,36.9789],[-8.8989,36.8688],[-8.7461,37.6513],[-8.84,38.2662],[-9.2875,38.3585],[-9.5266,38.7374],[-9.447,39.3921],[-9.0483,39.7551],[-8.9774,40.1593],[-8.7687,40.7606],[-8.7909,41.1843],[-8.9908,41.5435],[-9.0348,41.8806]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Portugal","sov_a3":"PRT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Portugal","adm0_a3":"PRT","geou_dif":0,"geounit":"Portugal","gu_a3":"PRT","su_dif":1,"subunit":"Portugal","su_a3":"PR1","brk_diff":0,"name":"Portugal","name_long":"Portugal","brk_a3":"PR1","brk_name":"Portugal","brk_group":"","abbrev":"Port.","postal":"P","formal_en":"Portuguese Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Portugal","name_alt":"","mapcolor7":1,"mapcolor8":7,"mapcolor9":1,"mapcolor13":4,"pop_est":10707924,"gdp_md_est":208627,"pop_year":-99,"lastcensus":2011,"gdp_year":0,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"PT","iso_a3":"PRT","iso_n3":"620","un_a3":"620","wb_a2":"PT","wb_a3":"PRT","woe_id":-99,"adm0_a3_is":"PRT","adm0_a3_us":"PRT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-62.6851,-22.249],[-62.2912,-21.0516],[-62.266,-20.5137],[-61.7863,-19.6337],[-60.0436,-19.3427],[-59.115,-19.3569],[-58.1835,-19.8684],[-58.1664,-20.1767],[-57.8707,-20.7327],[-57.9372,-22.0902],[-56.8815,-22.2822],[-56.4733,-22.0863],[-55.798,-22.3569],[-55.6107,-22.6556],[-55.5176,-23.572],[-55.4007,-23.9569],[-55.0279,-24.0013],[-54.6528,-23.8396],[-54.293,-24.021],[-54.2935,-24.5708],[-54.4289,-25.1622],[-54.6253,-25.7393],[-54.7888,-26.6218],[-55.6958,-27.3878],[-56.4867,-27.5485],[-57.6098,-27.3959],[-58.6182,-27.1237],[-57.6337,-25.6037],[-57.7772,-25.1623],[-58.8071,-24.7715],[-60.029,-24.0328],[-60.8466,-23.8807],[-62.6851,-22.249]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Paraguay","sov_a3":"PRY","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Paraguay","adm0_a3":"PRY","geou_dif":0,"geounit":"Paraguay","gu_a3":"PRY","su_dif":0,"subunit":"Paraguay","su_a3":"PRY","brk_diff":0,"name":"Paraguay","name_long":"Paraguay","brk_a3":"PRY","brk_name":"Paraguay","brk_group":"","abbrev":"Para.","postal":"PY","formal_en":"Republic of Paraguay","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Paraguay","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":6,"mapcolor13":2,"pop_est":6995655,"gdp_md_est":28890,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"PY","iso_a3":"PRY","iso_n3":"600","un_a3":"600","wb_a2":"PY","wb_a3":"PRY","woe_id":-99,"adm0_a3_is":"PRY","adm0_a3_us":"PRY","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[35.5457,32.394],[35.5453,31.7825],[35.3976,31.4891],[34.9274,31.3534],[34.9705,31.6168],[35.2259,31.7543],[34.9746,31.8666],[35.1839,32.5325],[35.5457,32.394]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Israel","sov_a3":"ISR","adm0_dif":1,"level":2,"type":"Disputed","admin":"Palestine","adm0_a3":"PSX","geou_dif":0,"geounit":"Palestine","gu_a3":"PSX","su_dif":0,"subunit":"Palestine","su_a3":"PSX","brk_diff":0,"name":"Palestine","name_long":"Palestine","brk_a3":"PSX","brk_name":"Palestine","brk_group":"","abbrev":"Pal.","postal":"PAL","formal_en":"West Bank and Gaza","formal_fr":"","note_adm0":"Partial self-admin.","note_brk":"Partial self-admin.","name_sort":"Palestine (West Bank and Gaza)","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":5,"mapcolor13":8,"pop_est":4119083,"gdp_md_est":11950.77,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"PS","iso_a3":"PSE","iso_n3":"275","un_a3":"275","wb_a2":"GZ","wb_a3":"WBG","woe_id":-99,"adm0_a3_is":"PSE","adm0_a3_us":"PSX","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":-99}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[50.8101,24.7547],[50.7439,25.4824],[51.0134,26.007],[51.2865,26.1146],[51.5891,25.8011],[51.6067,25.2157],[51.3896,24.6274],[51.1124,24.5563],[50.8101,24.7547]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Qatar","sov_a3":"QAT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Qatar","adm0_a3":"QAT","geou_dif":0,"geounit":"Qatar","gu_a3":"QAT","su_dif":0,"subunit":"Qatar","su_a3":"QAT","brk_diff":0,"name":"Qatar","name_long":"Qatar","brk_a3":"QAT","brk_name":"Qatar","brk_group":"","abbrev":"Qatar","postal":"QA","formal_en":"State of Qatar","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Qatar","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":2,"mapcolor13":4,"pop_est":833285,"gdp_md_est":91330,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"QA","iso_a3":"QAT","iso_n3":"634","un_a3":"634","wb_a2":"QA","wb_a3":"QAT","woe_id":-99,"adm0_a3_is":"QAT","adm0_a3_us":"QAT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[22.7105,47.8822],[23.1422,48.0963],[23.761,47.9856],[24.4021,47.9819],[24.8663,47.7375],[25.2077,47.8911],[25.9459,47.9871],[26.1975,48.2209],[26.6193,48.2207],[26.9242,48.1233],[27.2339,47.8268],[27.5512,47.4051],[28.128,46.8105],[28.16,46.3716],[28.0544,45.9446],[28.2336,45.4883],[28.6798,45.304],[29.1497,45.4649],[29.6033,45.2933],[29.6265,45.0354],[29.1416,44.8202],[28.8379,44.9139],[28.5581,43.7075],[27.9701,43.8125],[27.2424,44.176],[26.0652,43.9435],[25.5693,43.6884],[24.1007,43.7411],[23.3323,43.897],[22.9448,43.8238],[22.6571,44.2349],[22.474,44.4092],[22.7057,44.578],[22.459,44.7025],[22.1451,44.4784],[21.562,44.7689],[21.4835,45.1812],[20.8743,45.4164],[20.7622,45.7346],[20.2202,46.1275],[21.022,46.3161],[21.6265,46.9942],[22.0998,47.6724],[22.7105,47.8822]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Romania","sov_a3":"ROU","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Romania","adm0_a3":"ROU","geou_dif":0,"geounit":"Romania","gu_a3":"ROU","su_dif":0,"subunit":"Romania","su_a3":"ROU","brk_diff":0,"name":"Romania","name_long":"Romania","brk_a3":"ROU","brk_name":"Romania","brk_group":"","abbrev":"Rom.","postal":"RO","formal_en":"Romania","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Romania","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":3,"mapcolor13":13,"pop_est":22215421,"gdp_md_est":271400,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"RO","iso_a3":"ROU","iso_n3":"642","un_a3":"642","wb_a2":"RO","wb_a3":"ROM","woe_id":-99,"adm0_a3_is":"ROU","adm0_a3_us":"ROU","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[143.648,50.7476],[144.6541,48.9764],[143.1739,49.3066],[142.5587,47.8616],[143.5335,46.8367],[143.5053,46.1379],[142.7477,46.7408],[142.092,45.9668],[141.9069,46.8059],[142.0184,47.7801],[141.9044,48.8592],[142.1358,49.6152],[142.18,50.9523],[141.5941,51.9354],[141.6825,53.302],[142.6069,53.7621],[142.2097,54.2255],[142.6548,54.3659],[142.9146,53.7046],[143.2608,52.7408],[143.2353,51.7567],[143.648,50.7476]],[[22.7311,54.3275],[20.8922,54.3125],[19.6606,54.4261],[19.8885,54.8662],[21.2684,55.1905],[22.3157,55.0153],[22.7578,54.8566],[22.6511,54.5827],[22.7311,54.3275]],[[-175.0142,66.5844],[-174.3398,66.3356],[-174.5718,67.0622],[-171.8573,66.9131],[-169.8996,65.9772],[-170.8911,65.5414],[-172.5303,65.4379],[-172.555,64.4608],[-172.9553,64.2527],[-173.8918,64.2826],[-174.6539,64.6312],[-175.9835,64.9229],[-176.2072,65.3567],[-177.2227,65.5202],[-178.3599,65.3905],[-178.9033,65.7404],[-178.6861,66.1121],[-179.8838,65.8746],[-179.4327,65.4041],[-180,64.9797],[-180,68.9636],[-177.55,68.2],[-174.9283,67.2059],[-175.0142,66.5844]],[[180,70.8322],[178.9034,70.7811],[178.7253,71.0988],[180,71.5157],[180,70.8322]],[[-178.6938,70.893],[-180,70.8322],[-180,71.5157],[-179.8719,71.5576],[-179.0243,71.5555],[-177.5779,71.2695],[-177.6636,71.1328],[-178.6938,70.893]],[[143.6039,73.2124],[142.0876,73.2054],[140.0382,73.3169],[139.8631,73.3698],[140.8117,73.7651],[142.0621,73.8576],[143.4828,73.4752],[143.6039,73.2124]],[[150.7317,75.0841],[149.5759,74.6889],[147.9775,74.7784],[146.1192,75.173],[146.3585,75.4968],[148.2222,75.3458],[150.7317,75.0841]],[[145.0863,75.5626],[144.3,74.82],[140.6138,74.8477],[138.9554,74.6115],[136.9744,75.2617],[137.5118,75.9492],[138.8311,76.1368],[141.4716,76.0929],[145.0863,75.5626]],[[57.5357,70.7205],[56.945,70.6327],[53.6774,70.7627],[53.412,71.2067],[51.6019,71.4748],[51.4558,72.0149],[52.4783,72.2294],[52.4442,72.7747],[54.4276,73.6275],[53.5083,73.7498],[55.9025,74.6275],[55.6319,75.0814],[57.8686,75.6094],[61.17,76.2519],[64.4984,76.4391],[66.211,76.8098],[68.1571,76.9397],[68.8522,76.5448],[68.1806,76.2336],[64.6373,75.7378],[61.5835,75.2609],[58.4771,74.3091],[56.9868,73.333],[55.4193,72.3713],[55.6228,71.5406],[57.5357,70.7205]],[[106.9701,76.9742],[107.24,76.48],[108.1538,76.7234],[111.0773,76.71],[113.3315,76.2222],[114.1342,75.8476],[113.8854,75.3278],[112.7792,75.0319],[110.1513,74.4767],[109.4,74.18],[110.64,74.04],[112.1192,73.7877],[113.0195,73.9769],[113.5296,73.3351],[113.9688,73.5949],[115.5678,73.7529],[118.7763,73.5877],[119.02,73.12],[123.2007,72.9712],[123.2578,73.735],[125.38,73.56],[126.9764,73.5655],[128.5913,73.0387],[129.0516,72.3987],[128.46,71.98],[129.716,71.193],[131.2886,70.787],[132.2535,71.8363],[133.8577,71.3864],[135.5619,71.6553],[137.4976,71.3476],[138.2341,71.628],[139.8698,71.4878],[139.1479,72.4162],[140.4682,72.8494],[149.5,72.2],[150.3512,71.6064],[152.9689,70.8422],[157.0069,71.0314],[158.9978,70.8667],[159.8303,70.4532],[159.7087,69.722],[160.9405,69.4373],[162.2791,69.642],[164.0525,69.6682],[165.9404,69.472],[167.8357,69.5827],[169.5776,68.6938],[170.8169,69.0136],[170.0082,69.6528],[170.4535,70.097],[173.6439,69.8174],[175.724,69.8773],[178.6,69.4],[180,68.9636],[180,64.9797],[179.9928,64.9743],[178.7072,64.5349],[177.4113,64.6082],[178.313,64.0759],[178.9083,63.252],[179.3703,62.9826],[179.4864,62.5689],[179.2283,62.3041],[177.3643,62.5219],[174.5693,61.7692],[173.6801,61.6526],[172.15,60.95],[170.6985,60.3362],[170.3309,59.8818],[168.9005,60.5736],[166.295,59.7886],[165.84,60.16],[164.8767,59.7316],[163.5393,59.8687],[163.2171,59.211],[162.0173,58.2433],[162.053,57.8391],[163.1919,57.615],[163.0579,56.1592],[162.1296,56.1222],[161.7015,55.2857],[162.1175,54.8551],[160.3688,54.3443],[160.0217,53.2026],[158.5309,52.9587],[158.2312,51.9427],[156.7898,51.0111],[156.42,51.7],[155.9918,53.159],[155.4337,55.381],[155.9144,56.7679],[156.7582,57.3647],[156.8104,57.832],[158.3643,58.0558],[160.1506,59.3148],[161.872,60.343],[163.6697,61.1409],[164.4736,62.5506],[163.2584,62.4663],[162.6579,61.6425],[160.1215,60.5442],[159.3023,61.774],[156.7207,61.4344],[154.2181,59.7582],[155.0438,59.145],[152.8119,58.8839],[151.2657,58.7809],[151.3382,59.504],[149.7837,59.6557],[148.5448,59.1645],[145.4872,59.3364],[142.1978,59.04],[138.9585,57.0881],[135.1262,54.7296],[136.7017,54.6036],[137.1934,53.9773],[138.1647,53.755],[138.8046,54.2546],[139.9015,54.1897],[141.3453,53.0896],[141.3792,52.2388],[140.5974,51.2397],[140.5131,50.0455],[140.0619,48.4467],[138.5547,46.9996],[138.2197,46.308],[136.8623,45.1435],[135.5154,43.989],[134.8694,43.3982],[133.5369,42.8115],[132.9063,42.7985],[132.2781,43.2846],[130.9359,42.5527],[130.78,42.22],[130.64,42.395],[130.6339,42.903],[131.1447,42.93],[131.2886,44.1115],[131.0252,44.968],[131.8835,45.3212],[133.0971,45.1441],[133.7696,46.1169],[134.1124,47.2125],[134.5008,47.5785],[135.0263,48.4782],[133.3736,48.1834],[132.5067,47.789],[130.9873,47.7901],[130.5823,48.7297],[129.3978,49.4406],[127.6574,49.7603],[127.2875,50.7398],[126.9392,51.3539],[126.5644,51.7843],[125.9463,52.7928],[125.0682,53.161],[123.5715,53.4588],[122.2457,53.4317],[121.0031,53.2514],[120.1771,52.7539],[120.7258,52.5162],[120.7382,51.9641],[120.1821,51.6436],[119.2794,50.5829],[119.2885,50.1429],[117.8792,49.511],[116.6788,49.8885],[115.4857,49.8052],[114.9621,50.1402],[114.3625,50.2483],[112.8977,49.5436],[111.5812,49.378],[110.662,49.1301],[109.4024,49.293],[108.4752,49.2825],[107.8682,49.7937],[106.8888,50.2743],[105.8866,50.406],[104.6216,50.2753],[103.6765,50.09],[102.2559,50.5106],[102.0652,51.2599],[100.8895,51.5169],[99.9817,51.634],[98.8615,52.0474],[97.8257,51.011],[98.2318,50.4224],[97.2598,49.7261],[95.814,49.9775],[94.8159,50.0134],[94.1476,50.4805],[93.1042,50.4953],[92.2347,50.8022],[90.7137,50.3318],[88.8056,49.4705],[87.7513,49.2972],[87.36,49.215],[86.8294,49.8267],[85.5413,49.6929],[85.1156,50.1173],[84.4164,50.3114],[83.9351,50.8892],[83.383,51.0692],[81.946,50.8122],[80.5684,51.3883],[80.0356,50.8648],[77.8009,53.4044],[76.5252,54.177],[76.8911,54.4905],[74.3848,53.5469],[73.4257,53.4898],[73.5085,54.0356],[72.2242,54.3767],[71.1801,54.1333],[70.8653,55.1697],[69.0682,55.3853],[68.1691,54.9704],[65.6669,54.6013],[65.1785,54.3542],[61.4366,54.0063],[60.9781,53.665],[61.7,52.98],[60.74,52.72],[60.9273,52.4475],[59.9675,51.9604],[61.588,51.2727],[61.3374,50.7991],[59.9328,50.8422],[59.6423,50.5454],[58.3633,51.0636],[56.778,51.0436],[55.7169,50.6217],[54.5329,51.0262],[52.3287,51.7187],[50.7666,51.6928],[48.7024,50.6051],[48.5778,49.8748],[47.5495,50.4547],[46.7516,49.356],[47.0437,49.152],[46.4664,48.3942],[47.3152,47.7159],[48.0572,47.7438],[48.6947,47.0756],[48.5933,46.561],[49.1012,46.3993],[48.6454,45.8063],[47.6759,45.6415],[46.682,44.6092],[47.5909,43.6602],[47.4925,42.9866],[48.5844,41.8089],[47.9873,41.4058],[47.8157,41.1514],[47.3733,41.2197],[46.6861,41.8271],[46.405,41.8607],[45.7764,42.0924],[45.4703,42.5028],[44.5376,42.712],[43.9312,42.555],[43.756,42.7408],[42.3944,43.2203],[40.9222,43.3822],[40.077,43.5531],[39.955,43.435],[38.68,44.28],[37.5391,44.6572],[36.6755,45.2447],[37.4032,45.4045],[38.2329,46.2409],[37.6737,46.6366],[39.1477,47.0448],[39.1212,47.2634],[38.2235,47.1022],[38.2551,47.5464],[38.7706,47.8256],[39.7383,47.8989],[39.8956,48.2324],[39.6747,48.7838],[40.0808,49.3074],[40.069,49.601],[38.595,49.9265],[38.0106,49.9157],[37.3935,50.384],[36.6262,50.2256],[35.3561,50.5772],[35.3779,50.7739],[35.0222,51.2076],[34.2248,51.256],[34.142,51.5664],[34.3917,51.7689],[33.7527,52.3351],[32.7158,52.2385],[32.4121,52.2887],[32.1594,52.0613],[31.786,52.1017],[31.54,52.7421],[31.3052,53.074],[31.4976,53.1674],[32.3045,53.1327],[32.6936,53.3514],[32.4056,53.618],[31.7313,53.794],[31.7914,53.9746],[31.3845,54.1571],[30.7575,54.8118],[30.9718,55.0815],[30.8739,55.551],[29.8963,55.7895],[29.3716,55.6701],[29.2295,55.9183],[28.1767,56.1691],[27.8553,56.7593],[27.77,57.2443],[27.2882,57.4745],[27.7167,57.7919],[27.4202,58.7246],[28.1317,59.3008],[27.9811,59.4754],[29.1177,60.0281],[28.07,60.5035],[30.2111,61.78],[31.14,62.3577],[31.5161,62.8677],[30.0359,63.5528],[30.4447,64.2045],[29.5444,64.9487],[30.2177,65.806],[29.0546,66.9443],[29.9774,67.6983],[28.4459,68.3646],[28.5919,69.0648],[29.3996,69.1569],[31.1011,69.5581],[32.1327,69.906],[33.7755,69.3014],[36.514,69.0634],[40.2923,67.9324],[41.0599,67.4571],[41.126,66.7916],[40.0158,66.2662],[38.383,65.9995],[33.9187,66.7596],[33.1844,66.6325],[34.8148,65.9002],[34.8786,65.4362],[34.9439,64.4144],[36.2313,64.1095],[37.0127,63.8498],[37.142,64.3347],[36.5396,64.7645],[37.176,65.1432],[39.5934,64.5208],[40.4356,64.7645],[39.7626,65.4968],[42.0931,66.4762],[43.016,66.4186],[43.9498,66.0691],[44.5323,66.7563],[43.6984,67.3525],[44.188,67.9505],[43.4528,68.5708],[46.25,68.25],[46.8213,67.69],[45.5552,67.5665],[45.562,67.0101],[46.3492,66.6677],[47.8942,66.8846],[48.1388,67.5224],[50.2277,67.9987],[53.7174,68.8574],[54.4717,68.8082],[53.4858,68.2013],[54.7263,68.097],[55.4427,68.4387],[57.317,68.4663],[58.802,68.8808],[59.9414,68.2784],[61.0778,68.9407],[60.03,69.52],[60.55,69.85],[63.504,69.5474],[64.8881,69.2348],[68.5122,68.0923],[69.1807,68.6156],[68.1644,69.1444],[68.1352,69.3565],[66.9301,69.4546],[67.2598,69.9287],[66.7249,70.7089],[66.6947,71.029],[68.5401,71.9345],[69.1964,72.8434],[69.94,73.04],[72.5875,72.7763],[72.796,72.2201],[71.8481,71.409],[72.4701,71.0902],[72.7919,70.3911],[72.5647,69.0208],[73.6679,68.4079],[73.2387,67.7404],[71.28,66.32],[72.423,66.1727],[72.8208,66.5327],[73.921,66.7895],[74.1865,67.2843],[75.052,67.7605],[74.4693,68.329],[74.9358,68.9892],[73.8424,69.0715],[73.6019,69.6276],[74.3998,70.6317],[73.1011,71.4472],[74.8908,72.1212],[74.6593,72.8323],[75.158,72.855],[75.6835,72.3006],[75.289,71.3356],[76.3591,71.1529],[75.9031,71.874],[77.5767,72.2672],[79.652,72.3201],[81.5,71.75],[80.6107,72.5829],[80.5111,73.6482],[82.25,73.85],[84.6553,73.8059],[86.8223,73.9369],[86.0096,74.4597],[87.1668,75.1164],[88.3157,75.1439],[90.26,75.64],[92.9006,75.7733],[93.2342,76.0472],[95.86,76.14],[96.6782,75.9155],[98.9225,76.4469],[100.7597,76.4303],[101.0353,76.8619],[101.9908,77.2875],[104.3516,77.6979],[106.0666,77.3739],[104.705,77.1274],[106.9701,76.9742]],[[105.0755,78.3069],[99.4381,77.921],[101.2649,79.234],[102.0864,79.3464],[102.8378,79.2813],[105.3724,78.7133],[105.0755,78.3069]],[[51.1362,80.5473],[49.7937,80.4154],[48.8944,80.3396],[48.7549,80.1755],[47.5861,80.0102],[46.5028,80.2472],[47.0725,80.5594],[44.847,80.5898],[46.7991,80.7719],[48.3185,80.784],[48.5228,80.5146],[49.0972,80.754],[50.0398,80.9189],[51.5229,80.6997],[51.1362,80.5473]],[[99.9398,78.8809],[97.7579,78.7562],[94.9726,79.0447],[93.3129,79.4265],[92.5454,80.1438],[91.1811,80.3415],[93.7777,81.0246],[95.9409,81.2504],[97.8839,80.747],[100.1867,79.7801],[99.9398,78.8809]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Russia","sov_a3":"RUS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Russia","adm0_a3":"RUS","geou_dif":0,"geounit":"Russia","gu_a3":"RUS","su_dif":0,"subunit":"Russia","su_a3":"RUS","brk_diff":0,"name":"Russia","name_long":"Russian Federation","brk_a3":"RUS","brk_name":"Russia","brk_group":"","abbrev":"Rus.","postal":"RUS","formal_en":"Russian Federation","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Russian Federation","name_alt":"","mapcolor7":2,"mapcolor8":5,"mapcolor9":7,"mapcolor13":7,"pop_est":140041247,"gdp_md_est":2266000,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"3. Emerging region: BRIC","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"RU","iso_a3":"RUS","iso_n3":"643","un_a3":"643","wb_a2":"RU","wb_a3":"RUS","woe_id":-99,"adm0_a3_is":"RUS","adm0_a3_us":"RUS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":18,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[30.4191,-1.1347],[30.8161,-1.6989],[30.7583,-2.2873],[30.4697,-2.4139],[29.9384,-2.3485],[29.6322,-2.9179],[29.0249,-2.8393],[29.1175,-2.2922],[29.2548,-2.2151],[29.2919,-1.6201],[29.5795,-1.3413],[29.8215,-1.4433],[30.4191,-1.1347]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Rwanda","sov_a3":"RWA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Rwanda","adm0_a3":"RWA","geou_dif":0,"geounit":"Rwanda","gu_a3":"RWA","su_dif":0,"subunit":"Rwanda","su_a3":"RWA","brk_diff":0,"name":"Rwanda","name_long":"Rwanda","brk_a3":"RWA","brk_name":"Rwanda","brk_group":"","abbrev":"Rwa.","postal":"RW","formal_en":"Republic of Rwanda","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Rwanda","name_alt":"","mapcolor7":5,"mapcolor8":2,"mapcolor9":3,"mapcolor13":10,"pop_est":10473282,"gdp_md_est":9706,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"RW","iso_a3":"RWA","iso_n3":"646","un_a3":"646","wb_a2":"RW","wb_a3":"RWA","woe_id":-99,"adm0_a3_is":"RWA","adm0_a3_us":"RWA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-8.7949,27.1207],[-8.8178,27.6564],[-8.6656,27.6564],[-8.6651,27.5895],[-8.6844,27.3957],[-8.6873,25.8811],[-11.9694,25.9334],[-11.9372,23.3746],[-12.8742,23.2848],[-13.1188,22.7712],[-12.9291,21.3271],[-16.8452,21.3333],[-17.0634,20.9998],[-17.0204,21.4223],[-17.003,21.4207],[-14.751,21.5006],[-14.6308,21.8609],[-14.2212,22.3102],[-13.8911,23.691],[-12.501,24.7701],[-12.0308,26.0309],[-11.7182,26.1041],[-11.3926,26.8834],[-10.5513,26.9908],[-10.1894,26.8609],[-9.7353,26.8609],[-9.413,27.0885],[-8.7949,27.1207]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":7,"sovereignt":"Western Sahara","sov_a3":"SAH","adm0_dif":0,"level":2,"type":"Indeterminate","admin":"Western Sahara","adm0_a3":"SAH","geou_dif":0,"geounit":"Western Sahara","gu_a3":"SAH","su_dif":0,"subunit":"Western Sahara","su_a3":"SAH","brk_diff":1,"name":"W. Sahara","name_long":"Western Sahara","brk_a3":"B28","brk_name":"W. Sahara","brk_group":"","abbrev":"W. Sah.","postal":"WS","formal_en":"Sahrawi Arab Democratic Republic","formal_fr":"","note_adm0":"Self admin.","note_brk":"Self admin.; Claimed by Morocco","name_sort":"Western Sahara","name_alt":"","mapcolor7":4,"mapcolor8":7,"mapcolor9":4,"mapcolor13":4,"pop_est":-99,"gdp_md_est":-99,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"EH","iso_a3":"ESH","iso_n3":"732","un_a3":"732","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"MAR","adm0_a3_us":"SAH","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":9,"long_len":14,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[42.7793,16.3479],[42.6496,16.7746],[42.348,17.0758],[42.2709,17.4747],[41.7544,17.833],[41.2214,18.6716],[40.9393,19.4865],[40.2477,20.1746],[39.8017,20.3389],[39.1394,21.2919],[39.0237,21.9869],[39.0663,22.5797],[38.4928,23.6885],[38.0239,24.0787],[37.4836,24.2855],[37.1548,24.8585],[37.2095,25.0845],[36.9316,25.603],[36.6396,25.8262],[36.2491,26.5701],[35.6402,27.3765],[35.1302,28.0634],[34.6323,28.0585],[34.7878,28.6074],[34.8322,28.9575],[34.956,29.3566],[36.0689,29.1975],[36.5012,29.5053],[36.7405,29.8653],[37.5036,30.0038],[37.6681,30.3387],[37.9988,30.5085],[37.0022,31.5084],[39.0049,32.0102],[39.1955,32.161],[40.4,31.89],[41.89,31.19],[44.7095,29.1789],[46.5687,29.099],[47.4598,29.0025],[47.7089,28.5261],[48.4161,28.552],[48.8076,27.6896],[49.2996,27.4612],[49.4709,27.11],[50.1524,26.6897],[50.2129,26.277],[50.1133,25.944],[50.2399,25.608],[50.5274,25.3278],[50.6606,24.9999],[50.8101,24.7547],[51.1124,24.5563],[51.3896,24.6274],[51.5795,24.2455],[51.6177,24.0142],[52.0007,23.0012],[55.0068,22.4969],[55.2083,22.7083],[55.6667,22],[55,20],[52,19],[49.1167,18.6167],[48.1833,18.1667],[47.4667,17.1167],[47,16.95],[46.75,17.2833],[46.3667,17.2333],[45.4,17.3333],[45.2167,17.4333],[44.0626,17.4104],[43.7915,17.32],[43.3808,17.58],[43.1158,17.0884],[43.2184,16.6669],[42.7793,16.3479]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Saudi Arabia","sov_a3":"SAU","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Saudi Arabia","adm0_a3":"SAU","geou_dif":0,"geounit":"Saudi Arabia","gu_a3":"SAU","su_dif":0,"subunit":"Saudi Arabia","su_a3":"SAU","brk_diff":0,"name":"Saudi Arabia","name_long":"Saudi Arabia","brk_a3":"SAU","brk_name":"Saudi Arabia","brk_group":"","abbrev":"Saud.","postal":"SA","formal_en":"Kingdom of Saudi Arabia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Saudi Arabia","name_alt":"","mapcolor7":6,"mapcolor8":1,"mapcolor9":6,"mapcolor13":7,"pop_est":28686633,"gdp_md_est":576500,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"SA","iso_a3":"SAU","iso_n3":"682","un_a3":"682","wb_a2":"SA","wb_a3":"SAU","woe_id":-99,"adm0_a3_is":"SAU","adm0_a3_us":"SAU","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":12,"long_len":12,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[33.9634,9.4643],[33.825,9.4841],[33.8421,9.9819],[33.722,10.3253],[33.2069,10.7201],[33.0868,11.4411],[33.2069,12.1793],[32.7434,12.248],[32.6747,12.0248],[32.0739,11.9733],[32.3142,11.6815],[32.4001,11.0806],[31.8507,10.5313],[31.3529,9.8102],[30.8378,9.7072],[29.9966,10.2909],[29.619,10.0849],[29.516,9.7931],[29.0009,9.6042],[28.9666,9.3982],[27.9709,9.3982],[27.8336,9.6042],[27.1125,9.6386],[26.752,9.4669],[26.4773,9.5527],[25.9623,10.1364],[25.7906,10.4111],[25.0696,10.2738],[24.7949,9.8102],[24.5374,8.9175],[24.1941,8.7287],[23.887,8.6197],[23.8058,8.6663],[23.459,8.9543],[23.3948,9.2651],[23.5572,9.6812],[23.5543,10.0893],[22.9775,10.7145],[22.8642,11.1424],[22.8762,11.3846],[22.5087,11.6794],[22.4976,12.2602],[22.288,12.646],[21.9368,12.5882],[22.0376,12.9555],[22.2966,13.3723],[22.1833,13.7865],[22.512,14.0932],[22.3035,14.3268],[22.568,14.9443],[23.0246,15.6807],[23.8869,15.6108],[23.8377,19.5805],[23.85,20],[25,20.003],[25,22],[29.02,22],[32.9,22],[36.8662,22],[37.1887,21.0189],[36.9694,20.8374],[37.1147,19.808],[37.4818,18.6141],[37.8628,18.3679],[38.4101,17.9983],[37.904,17.4275],[37.1675,17.2631],[36.8525,16.9565],[36.7539,16.2919],[36.3232,14.8225],[36.4295,14.4221],[36.2702,13.5633],[35.8636,12.5783],[35.2605,12.0829],[34.8316,11.319],[34.7312,10.9102],[34.2575,10.6301],[33.9616,9.5836],[33.9634,9.4643]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Sudan","sov_a3":"SDN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Sudan","adm0_a3":"SDN","geou_dif":0,"geounit":"Sudan","gu_a3":"SDN","su_dif":0,"subunit":"Sudan","su_a3":"SDN","brk_diff":0,"name":"Sudan","name_long":"Sudan","brk_a3":"SDN","brk_name":"Sudan","brk_group":"","abbrev":"Sudan","postal":"SD","formal_en":"Republic of the Sudan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Sudan","name_alt":"","mapcolor7":2,"mapcolor8":6,"mapcolor9":4,"mapcolor13":1,"pop_est":25946220,"gdp_md_est":88080,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SD","iso_a3":"SDN","iso_n3":"729","un_a3":"729","wb_a2":"SD","wb_a3":"SDN","woe_id":-99,"adm0_a3_is":"SDN","adm0_a3_us":"SDN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Sub-Saharan Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[33.9634,9.4643],[33.975,8.6846],[33.8255,8.3792],[33.2948,8.3546],[32.9542,7.785],[33.5683,7.7133],[34.0751,7.226],[34.2503,6.8261],[34.707,6.5942],[35.298,5.506],[34.6202,4.8471],[34.005,4.2499],[33.39,3.79],[32.6864,3.7923],[31.8815,3.5583],[31.2456,3.7819],[30.8339,3.5092],[29.9535,4.1737],[29.716,4.6008],[29.1591,4.3893],[28.6967,4.4551],[28.429,4.2872],[27.98,4.4084],[27.3742,5.2339],[27.2134,5.551],[26.4659,5.9467],[26.2134,6.5466],[25.7966,6.9793],[25.1241,7.5001],[25.1149,7.8251],[24.5674,8.2292],[23.887,8.6197],[24.1941,8.7287],[24.5374,8.9175],[24.7949,9.8102],[25.0696,10.2738],[25.7906,10.4111],[25.9623,10.1364],[26.4773,9.5527],[26.752,9.4669],[27.1125,9.6386],[27.8336,9.6042],[27.9709,9.3982],[28.9666,9.3982],[29.0009,9.6042],[29.516,9.7931],[29.619,10.0849],[29.9966,10.2909],[30.8378,9.7072],[31.3529,9.8102],[31.8507,10.5313],[32.4001,11.0806],[32.3142,11.6815],[32.0739,11.9733],[32.6747,12.0248],[32.7434,12.248],[33.2069,12.1793],[33.0868,11.4411],[33.2069,10.7201],[33.722,10.3253],[33.8421,9.9819],[33.825,9.4841],[33.9634,9.4643]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"South Sudan","sov_a3":"SDS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"South Sudan","adm0_a3":"SDS","geou_dif":0,"geounit":"South Sudan","gu_a3":"SDS","su_dif":0,"subunit":"South Sudan","su_a3":"SDS","brk_diff":0,"name":"S. Sudan","name_long":"South Sudan","brk_a3":"SDS","brk_name":"S. Sudan","brk_group":"","abbrev":"S. Sud.","postal":"SS","formal_en":"Republic of South Sudan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"South Sudan","name_alt":"","mapcolor7":1,"mapcolor8":3,"mapcolor9":3,"mapcolor13":5,"pop_est":10625176,"gdp_md_est":13227,"pop_year":-99,"lastcensus":2008,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"SS","iso_a3":"SSD","iso_n3":"728","un_a3":"728","wb_a2":"SS","wb_a3":"SSD","woe_id":-99,"adm0_a3_is":"SSD","adm0_a3_us":"SDS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":11,"abbrev_len":7,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-16.7137,13.595],[-17.1261,14.3735],[-17.625,14.7295],[-17.1852,14.9195],[-16.7007,15.6215],[-16.4631,16.135],[-16.1207,16.4557],[-15.6237,16.3693],[-15.1357,16.5873],[-14.5773,16.5983],[-14.0995,16.3043],[-13.4357,16.0394],[-12.8307,15.3037],[-12.1708,14.6168],[-12.1249,13.9947],[-11.9277,13.4221],[-11.5534,13.1412],[-11.4679,12.7545],[-11.5139,12.443],[-11.6583,12.3866],[-12.2036,12.4656],[-12.2786,12.3544],[-12.4991,12.3321],[-13.2178,12.5759],[-13.7005,12.5862],[-15.5485,12.6282],[-15.8166,12.5156],[-16.1477,12.5478],[-16.6775,12.3849],[-16.8415,13.1514],[-15.9313,13.1303],[-15.691,13.2704],[-15.5118,13.2786],[-15.1412,13.5095],[-14.7122,13.2982],[-14.2777,13.2806],[-13.845,13.505],[-14.047,13.7941],[-14.3767,13.6257],[-14.687,13.6304],[-15.0817,13.8765],[-15.3988,13.8604],[-15.6246,13.6236],[-16.7137,13.595]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Senegal","sov_a3":"SEN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Senegal","adm0_a3":"SEN","geou_dif":0,"geounit":"Senegal","gu_a3":"SEN","su_dif":0,"subunit":"Senegal","su_a3":"SEN","brk_diff":0,"name":"Senegal","name_long":"Senegal","brk_a3":"SEN","brk_name":"Senegal","brk_group":"","abbrev":"Sen.","postal":"SN","formal_en":"Republic of Senegal","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Senegal","name_alt":"","mapcolor7":2,"mapcolor8":6,"mapcolor9":5,"mapcolor13":5,"pop_est":13711597,"gdp_md_est":21980,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SN","iso_a3":"SEN","iso_n3":"686","un_a3":"686","wb_a2":"SN","wb_a3":"SEN","woe_id":-99,"adm0_a3_is":"SEN","adm0_a3_us":"SEN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[162.119,-10.4827],[162.3986,-10.8264],[161.7,-10.82],[161.3198,-10.2048],[161.9174,-10.4467],[162.119,-10.4827]],[[160.8522,-9.8729],[160.4626,-9.8952],[159.8494,-9.794],[159.64,-9.64],[159.7029,-9.2429],[160.363,-9.4003],[160.6885,-9.6102],[160.8522,-9.8729]],[[161.68,-9.6],[161.5294,-9.7843],[160.7883,-8.9175],[160.58,-8.32],[160.92,-8.32],[161.28,-9.12],[161.68,-9.6]],[[159.875,-8.3373],[159.9174,-8.5383],[159.1337,-8.1142],[158.5861,-7.7548],[158.2111,-7.4219],[158.36,-7.32],[158.82,-7.56],[159.64,-8.02],[159.875,-8.3373]],[[157.5384,-7.3478],[157.3394,-7.4048],[156.902,-7.1769],[156.4914,-6.7659],[156.5428,-6.5993],[157.14,-7.0216],[157.5384,-7.3478]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Solomon Islands","sov_a3":"SLB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Solomon Islands","adm0_a3":"SLB","geou_dif":0,"geounit":"Solomon Islands","gu_a3":"SLB","su_dif":0,"subunit":"Solomon Islands","su_a3":"SLB","brk_diff":0,"name":"Solomon Is.","name_long":"Solomon Islands","brk_a3":"SLB","brk_name":"Solomon Is.","brk_group":"","abbrev":"S. Is.","postal":"SB","formal_en":"","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Solomon Islands","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":6,"pop_est":595613,"gdp_md_est":1078,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SB","iso_a3":"SLB","iso_n3":"090","un_a3":"090","wb_a2":"SB","wb_a3":"SLB","woe_id":-99,"adm0_a3_is":"SLB","adm0_a3_us":"SLB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Melanesia","region_wb":"East Asia & Pacific","name_len":11,"long_len":15,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-11.4388,6.7859],[-11.7082,6.8601],[-12.4281,7.2629],[-12.949,7.7986],[-13.124,8.1639],[-13.2466,8.903],[-12.712,9.3427],[-12.5967,9.6202],[-12.4259,9.8358],[-12.1503,9.8586],[-11.9173,10.047],[-11.1175,10.0459],[-10.8392,9.6882],[-10.6224,9.2679],[-10.6548,8.9772],[-10.4943,8.7155],[-10.5055,8.3489],[-10.2301,8.4062],[-10.6956,7.9395],[-11.1467,7.3967],[-11.1998,7.1058],[-11.4388,6.7859]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Sierra Leone","sov_a3":"SLE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Sierra Leone","adm0_a3":"SLE","geou_dif":0,"geounit":"Sierra Leone","gu_a3":"SLE","su_dif":0,"subunit":"Sierra Leone","su_a3":"SLE","brk_diff":0,"name":"Sierra Leone","name_long":"Sierra Leone","brk_a3":"SLE","brk_name":"Sierra Leone","brk_group":"","abbrev":"S.L.","postal":"SL","formal_en":"Republic of Sierra Leone","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Sierra Leone","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":1,"mapcolor13":7,"pop_est":6440053,"gdp_md_est":4285,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"SL","iso_a3":"SLE","iso_n3":"694","un_a3":"694","wb_a2":"SL","wb_a3":"SLE","woe_id":-99,"adm0_a3_is":"SLE","adm0_a3_us":"SLE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":12,"long_len":12,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-87.7931,13.3845],[-87.9041,13.149],[-88.4833,13.164],[-88.8432,13.2597],[-89.2567,13.4585],[-89.8124,13.5206],[-90.0956,13.7353],[-90.0647,13.882],[-89.7219,14.1342],[-89.5342,14.2448],[-89.5873,14.3626],[-89.3533,14.4241],[-89.0585,14.34],[-88.8431,14.1405],[-88.5412,13.9802],[-88.504,13.8455],[-88.0653,13.9646],[-87.8595,13.8933],[-87.7235,13.7851],[-87.7931,13.3845]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"El Salvador","sov_a3":"SLV","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"El Salvador","adm0_a3":"SLV","geou_dif":0,"geounit":"El Salvador","gu_a3":"SLV","su_dif":0,"subunit":"El Salvador","su_a3":"SLV","brk_diff":0,"name":"El Salvador","name_long":"El Salvador","brk_a3":"SLV","brk_name":"El Salvador","brk_group":"","abbrev":"El. S.","postal":"SV","formal_en":"Republic of El Salvador","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"El Salvador","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":6,"mapcolor13":8,"pop_est":7185218,"gdp_md_est":43630,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SV","iso_a3":"SLV","iso_n3":"222","un_a3":"222","wb_a2":"SV","wb_a3":"SLV","woe_id":-99,"adm0_a3_is":"SLV","adm0_a3_us":"SLV","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Central America","region_wb":"Latin America & Caribbean","name_len":11,"long_len":11,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[48.9381,9.4517],[48.4867,8.8376],[47.7894,8.003],[46.9483,7.9969],[43.6788,9.1836],[43.297,9.5405],[42.9281,10.0219],[42.5588,10.5726],[42.7769,10.9269],[43.1453,11.462],[43.4707,11.2777],[43.6667,10.8642],[44.1178,10.4455],[44.6143,10.4422],[45.5569,10.698],[46.6454,10.8165],[47.5257,11.1272],[48.0216,11.1931],[48.3788,11.3755],[48.9482,11.4106],[48.942,11.3943],[48.9385,10.9823],[48.9382,9.9735],[48.9381,9.4517]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Somaliland","sov_a3":"SOL","adm0_dif":0,"level":2,"type":"Indeterminate","admin":"Somaliland","adm0_a3":"SOL","geou_dif":0,"geounit":"Somaliland","gu_a3":"SOL","su_dif":0,"subunit":"Somaliland","su_a3":"SOL","brk_diff":1,"name":"Somaliland","name_long":"Somaliland","brk_a3":"B30","brk_name":"Somaliland","brk_group":"","abbrev":"Solnd.","postal":"SL","formal_en":"Republic of Somaliland","formal_fr":"","note_adm0":"Self admin.","note_brk":"Self admin.; Claimed by Somalia","name_sort":"Somaliland","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":5,"mapcolor13":2,"pop_est":3500000,"gdp_md_est":12250,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"-99","iso_a3":"-99","iso_n3":"-99","un_a3":"-099","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"SOM","adm0_a3_us":"SOM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":10,"long_len":10,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[49.7286,11.5789],[50.2588,11.6796],[50.732,12.0219],[51.1112,12.0246],[51.1339,11.7482],[51.0415,11.1665],[51.0453,10.6409],[50.8342,10.2797],[50.5524,9.1987],[50.0709,8.0817],[49.4527,6.8047],[48.5946,5.3391],[47.7408,4.2194],[46.5648,2.8553],[45.564,2.0458],[44.0681,1.0528],[43.136,0.2922],[42.0416,-0.9192],[41.811,-1.4465],[41.5851,-1.6832],[40.993,-0.8583],[40.9811,2.7845],[41.8551,3.9189],[42.1286,4.2341],[42.7697,4.2526],[43.6609,4.9576],[44.9636,5.0016],[47.7894,8.003],[48.4867,8.8376],[48.9381,9.4517],[48.9382,9.9735],[48.9385,10.9823],[48.942,11.3943],[48.9482,11.4106],[49.2678,11.4303],[49.7286,11.5789]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Somalia","sov_a3":"SOM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Somalia","adm0_a3":"SOM","geou_dif":0,"geounit":"Somalia","gu_a3":"SOM","su_dif":0,"subunit":"Somalia","su_a3":"SOM","brk_diff":0,"name":"Somalia","name_long":"Somalia","brk_a3":"SOM","brk_name":"Somalia","brk_group":"","abbrev":"Som.","postal":"SO","formal_en":"Federal Republic of Somalia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Somalia","name_alt":"","mapcolor7":2,"mapcolor8":8,"mapcolor9":6,"mapcolor13":7,"pop_est":9832017,"gdp_md_est":5524,"pop_year":-99,"lastcensus":1987,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"SO","iso_a3":"SOM","iso_n3":"706","un_a3":"706","wb_a2":"SO","wb_a3":"SOM","woe_id":-99,"adm0_a3_is":"SOM","adm0_a3_us":"SOM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[20.8743,45.4164],[21.4835,45.1812],[21.562,44.7689],[22.1451,44.4784],[22.459,44.7025],[22.7057,44.578],[22.474,44.4092],[22.6571,44.2349],[22.4104,44.0081],[22.5002,43.6428],[22.986,43.2112],[22.6048,42.8985],[22.4366,42.5803],[22.545,42.4614],[22.3805,42.3203],[21.9171,42.3036],[21.5766,42.2452],[21.5433,42.3203],[21.6629,42.4392],[21.7751,42.6827],[21.633,42.6772],[21.4387,42.8625],[21.2742,42.9096],[21.1434,43.0687],[20.9565,43.1309],[20.8145,43.2721],[20.6351,43.2167],[20.4968,42.8847],[20.2576,42.8128],[20.3398,42.8985],[19.9586,43.106],[19.63,43.2138],[19.4839,43.3523],[19.2185,43.5238],[19.454,43.5681],[19.5998,44.0385],[19.1176,44.4231],[19.368,44.863],[19.0055,44.8602],[19.3905,45.2365],[19.0728,45.5215],[18.8298,45.9089],[19.596,46.1717],[20.2202,46.1275],[20.7622,45.7346],[20.8743,45.4164]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Republic of Serbia","sov_a3":"SRB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Republic of Serbia","adm0_a3":"SRB","geou_dif":0,"geounit":"Republic of Serbia","gu_a3":"SRB","su_dif":0,"subunit":"Republic of Serbia","su_a3":"SRB","brk_diff":0,"name":"Serbia","name_long":"Serbia","brk_a3":"SRB","brk_name":"Serbia","brk_group":"","abbrev":"Serb.","postal":"RS","formal_en":"Republic of Serbia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Serbia","name_alt":"","mapcolor7":3,"mapcolor8":3,"mapcolor9":2,"mapcolor13":10,"pop_est":7379339,"gdp_md_est":80340,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"RS","iso_a3":"SRB","iso_n3":"688","un_a3":"688","wb_a2":"YF","wb_a3":"SRB","woe_id":-99,"adm0_a3_is":"SRB","adm0_a3_us":"SRB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-57.1474,5.9731],[-55.9493,5.7729],[-55.8418,5.9531],[-55.0333,6.0253],[-53.958,5.7565],[-54.4786,4.8968],[-54.3995,4.2126],[-54.0069,3.62],[-54.1817,3.1898],[-54.2697,2.7324],[-54.5248,2.3118],[-55.0976,2.5237],[-55.5698,2.4215],[-55.9733,2.5104],[-56.0733,2.2208],[-55.9056,2.022],[-55.9957,1.8177],[-56.5394,1.8995],[-57.1501,2.7689],[-57.2814,3.3335],[-57.6016,3.3347],[-58.0447,4.0609],[-57.8602,4.5768],[-57.9143,4.8126],[-57.3072,5.0736],[-57.1474,5.9731]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Suriname","sov_a3":"SUR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Suriname","adm0_a3":"SUR","geou_dif":0,"geounit":"Suriname","gu_a3":"SUR","su_dif":0,"subunit":"Suriname","su_a3":"SUR","brk_diff":0,"name":"Suriname","name_long":"Suriname","brk_a3":"SUR","brk_name":"Suriname","brk_group":"","abbrev":"Sur.","postal":"SR","formal_en":"Republic of Suriname","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Suriname","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":7,"mapcolor13":6,"pop_est":481267,"gdp_md_est":4254,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"SR","iso_a3":"SUR","iso_n3":"740","un_a3":"740","wb_a2":"SR","wb_a3":"SUR","woe_id":-99,"adm0_a3_is":"SUR","adm0_a3_us":"SUR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[18.8531,49.4962],[18.9096,49.4358],[19.3207,49.5716],[19.825,49.2171],[20.4158,49.4315],[20.888,49.3288],[21.6078,49.4701],[22.5581,49.0857],[22.2808,48.8254],[22.0856,48.4223],[21.8722,48.32],[20.8013,48.6239],[20.4736,48.5629],[20.2391,48.3276],[19.7695,48.2027],[19.6614,48.2666],[19.1744,48.1114],[18.777,48.0818],[18.6965,47.881],[17.8571,47.7584],[17.4885,47.8675],[16.9797,48.1235],[16.88,48.47],[16.9603,48.597],[17.102,48.817],[17.545,48.8],[17.8865,48.9035],[17.9135,48.9965],[18.105,49.044],[18.1705,49.2715],[18.4,49.315],[18.555,49.495],[18.8531,49.4962]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Slovakia","sov_a3":"SVK","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Slovakia","adm0_a3":"SVK","geou_dif":0,"geounit":"Slovakia","gu_a3":"SVK","su_dif":0,"subunit":"Slovakia","su_a3":"SVK","brk_diff":0,"name":"Slovakia","name_long":"Slovakia","brk_a3":"SVK","brk_name":"Slovakia","brk_group":"","abbrev":"Svk.","postal":"SK","formal_en":"Slovak Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Slovak Republic","name_alt":"","mapcolor7":2,"mapcolor8":4,"mapcolor9":4,"mapcolor13":9,"pop_est":5463046,"gdp_md_est":119500,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"SK","iso_a3":"SVK","iso_n3":"703","un_a3":"703","wb_a2":"SK","wb_a3":"SVK","woe_id":-99,"adm0_a3_is":"SVK","adm0_a3_us":"SVK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[13.8065,46.5093],[14.6325,46.4318],[15.1371,46.6587],[16.0117,46.6836],[16.2023,46.8524],[16.3705,46.8413],[16.5648,46.5038],[15.7687,46.2381],[15.6715,45.8342],[15.324,45.7318],[15.3277,45.4523],[14.9352,45.4717],[14.5951,45.6349],[14.412,45.4662],[13.7151,45.5003],[13.9376,45.591],[13.6981,46.0168],[13.8065,46.5093]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Slovenia","sov_a3":"SVN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Slovenia","adm0_a3":"SVN","geou_dif":0,"geounit":"Slovenia","gu_a3":"SVN","su_dif":0,"subunit":"Slovenia","su_a3":"SVN","brk_diff":0,"name":"Slovenia","name_long":"Slovenia","brk_a3":"SVN","brk_name":"Slovenia","brk_group":"","abbrev":"Slo.","postal":"SLO","formal_en":"Republic of Slovenia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Slovenia","name_alt":"","mapcolor7":2,"mapcolor8":3,"mapcolor9":2,"mapcolor13":12,"pop_est":2005692,"gdp_md_est":59340,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"SI","iso_a3":"SVN","iso_n3":"705","un_a3":"705","wb_a2":"SI","wb_a3":"SVN","woe_id":-99,"adm0_a3_is":"SVN","adm0_a3_us":"SVN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Southern Europe","region_wb":"Europe & Central Asia","name_len":8,"long_len":8,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[22.1832,65.7237],[21.2135,65.026],[21.3696,64.4136],[19.7789,63.6096],[17.8478,62.7494],[17.1196,61.3412],[17.8313,60.6366],[18.7877,60.0819],[17.8692,58.9538],[16.8292,58.7198],[16.4477,57.0411],[15.8798,56.1043],[14.6667,56.2009],[14.1007,55.4078],[12.9429,55.3617],[12.6251,56.3071],[11.7879,57.4418],[11.0274,58.8561],[11.4683,59.4324],[12.3004,60.1179],[12.6311,61.2936],[11.9921,61.8004],[11.9306,63.1283],[12.5799,64.0662],[13.5719,64.0491],[13.9199,64.4454],[13.5557,64.787],[15.1084,66.1939],[16.1087,67.3025],[16.7689,68.0139],[17.7292,68.0106],[17.9939,68.5674],[19.8786,68.4072],[20.0253,69.0651],[20.6456,69.1062],[21.9785,68.6168],[23.5395,67.936],[23.5659,66.3961],[23.9034,66.0069],[22.1832,65.7237]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Sweden","sov_a3":"SWE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Sweden","adm0_a3":"SWE","geou_dif":0,"geounit":"Sweden","gu_a3":"SWE","su_dif":0,"subunit":"Sweden","su_a3":"SWE","brk_diff":0,"name":"Sweden","name_long":"Sweden","brk_a3":"SWE","brk_name":"Sweden","brk_group":"","abbrev":"Swe.","postal":"S","formal_en":"Kingdom of Sweden","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Sweden","name_alt":"","mapcolor7":1,"mapcolor8":4,"mapcolor9":2,"mapcolor13":4,"pop_est":9059651,"gdp_md_est":344300,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"1. High income: OECD","wikipedia":-99,"fips_10":"","iso_a2":"SE","iso_a3":"SWE","iso_n3":"752","un_a3":"752","wb_a2":"SE","wb_a3":"SWE","woe_id":-99,"adm0_a3_is":"SWE","adm0_a3_us":"SWE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Northern Europe","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[32.0717,-26.7338],[31.8681,-27.1779],[31.2828,-27.2859],[30.686,-26.7438],[30.6766,-26.3981],[30.9497,-26.0226],[31.0441,-25.7315],[31.3332,-25.6602],[31.8378,-25.8433],[31.9858,-26.2918],[32.0717,-26.7338]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Swaziland","sov_a3":"SWZ","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Swaziland","adm0_a3":"SWZ","geou_dif":0,"geounit":"Swaziland","gu_a3":"SWZ","su_dif":0,"subunit":"Swaziland","su_a3":"SWZ","brk_diff":0,"name":"Swaziland","name_long":"Swaziland","brk_a3":"SWZ","brk_name":"Swaziland","brk_group":"","abbrev":"Swz.","postal":"SW","formal_en":"Kingdom of Swaziland","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Swaziland","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":2,"mapcolor13":5,"pop_est":1123913,"gdp_md_est":5702,"pop_year":-99,"lastcensus":2007,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SZ","iso_a3":"SWZ","iso_n3":"748","un_a3":"748","wb_a2":"SZ","wb_a3":"SWZ","woe_id":-99,"adm0_a3_is":"SWZ","adm0_a3_us":"SWZ","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Southern Africa","region_wb":"Sub-Saharan Africa","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[38.7923,33.3787],[36.8341,32.3129],[35.7199,32.7092],[35.7008,32.716],[35.8364,32.8681],[35.8211,33.2774],[36.0665,33.8249],[36.6118,34.2018],[36.4482,34.5939],[35.9984,34.6449],[35.905,35.41],[36.1498,35.8215],[36.4176,36.0406],[36.6854,36.2597],[36.7395,36.8175],[37.0668,36.623],[38.1677,36.9012],[38.6999,36.7129],[39.5226,36.7161],[40.6733,37.0913],[41.2121,37.0744],[42.3496,37.2299],[41.8371,36.6059],[41.2897,36.3588],[41.384,35.6283],[41.0062,34.4194],[38.7923,33.3787]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Syria","sov_a3":"SYR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Syria","adm0_a3":"SYR","geou_dif":0,"geounit":"Syria","gu_a3":"SYR","su_dif":0,"subunit":"Syria","su_a3":"SYR","brk_diff":0,"name":"Syria","name_long":"Syria","brk_a3":"SYR","brk_name":"Syria","brk_group":"","abbrev":"Syria","postal":"SYR","formal_en":"Syrian Arab Republic","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Syrian Arab Republic","name_alt":"","mapcolor7":2,"mapcolor8":6,"mapcolor9":2,"mapcolor13":6,"pop_est":20178485,"gdp_md_est":98830,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"SY","iso_a3":"SYR","iso_n3":"760","un_a3":"760","wb_a2":"SY","wb_a3":"SYR","woe_id":-99,"adm0_a3_is":"SYR","adm0_a3_us":"SYR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":5,"long_len":5,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[14.4958,12.8594],[14.5958,13.3304],[13.9545,13.3534],[13.9567,13.9967],[13.5404,14.3671],[13.9722,15.6844],[15.2477,16.6273],[15.3004,17.9279],[15.6857,19.9572],[15.9032,20.3876],[15.4871,20.7304],[15.4711,21.0485],[15.0969,21.3085],[14.8513,22.863],[15.8609,23.4097],[19.8493,21.4951],[23.8377,19.5805],[23.8869,15.6108],[23.0246,15.6807],[22.568,14.9443],[22.3035,14.3268],[22.512,14.0932],[22.1833,13.7865],[22.2966,13.3723],[22.0376,12.9555],[21.9368,12.5882],[22.288,12.646],[22.4976,12.2602],[22.5087,11.6794],[22.8762,11.3846],[22.8642,11.1424],[22.2311,10.9719],[21.7238,10.5671],[21.0009,9.476],[20.0597,9.0127],[19.094,9.0748],[18.812,8.9829],[18.911,8.6309],[18.3896,8.2813],[17.9649,7.8909],[16.706,7.5083],[16.4562,7.7348],[16.2906,7.7543],[16.1062,7.4971],[15.2795,7.4219],[15.4361,7.6928],[15.1209,8.3822],[14.98,8.7961],[14.5445,8.9659],[13.9542,9.5495],[14.1715,10.0214],[14.6272,9.9209],[14.9094,9.9921],[15.4679,9.9823],[14.9236,10.8913],[14.9602,11.5556],[14.8934,12.219],[14.4958,12.8594]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Chad","sov_a3":"TCD","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Chad","adm0_a3":"TCD","geou_dif":0,"geounit":"Chad","gu_a3":"TCD","su_dif":0,"subunit":"Chad","su_a3":"TCD","brk_diff":0,"name":"Chad","name_long":"Chad","brk_a3":"TCD","brk_name":"Chad","brk_group":"","abbrev":"Chad","postal":"TD","formal_en":"Republic of Chad","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Chad","name_alt":"","mapcolor7":6,"mapcolor8":1,"mapcolor9":8,"mapcolor13":6,"pop_est":10329208,"gdp_md_est":15860,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"TD","iso_a3":"TCD","iso_n3":"148","un_a3":"148","wb_a2":"TD","wb_a3":"TCD","woe_id":-99,"adm0_a3_is":"TCD","adm0_a3_us":"TCD","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Middle Africa","region_wb":"Sub-Saharan Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[1.8652,6.1422],[1.0601,5.9288],[0.8369,6.28],[0.5704,6.9144],[0.491,7.4117],[0.712,8.3125],[0.4612,8.6772],[0.3659,9.465],[0.3676,10.1912],[-0.0498,10.7069],[0.0238,11.0187],[0.8996,10.9973],[0.7723,10.4708],[1.0778,10.1756],[1.4251,9.8254],[1.463,9.3346],[1.6645,9.1286],[1.619,6.832],[1.8652,6.1422]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":6,"sovereignt":"Togo","sov_a3":"TGO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Togo","adm0_a3":"TGO","geou_dif":0,"geounit":"Togo","gu_a3":"TGO","su_dif":0,"subunit":"Togo","su_a3":"TGO","brk_diff":0,"name":"Togo","name_long":"Togo","brk_a3":"TGO","brk_name":"Togo","brk_group":"","abbrev":"Togo","postal":"TG","formal_en":"Togolese Republic","formal_fr":"République Togolaise","note_adm0":"","note_brk":"","name_sort":"Togo","name_alt":"","mapcolor7":3,"mapcolor8":1,"mapcolor9":3,"mapcolor13":5,"pop_est":6019877,"gdp_md_est":5118,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"TG","iso_a3":"TGO","iso_n3":"768","un_a3":"768","wb_a2":"TG","wb_a3":"TGO","woe_id":-99,"adm0_a3_is":"TGO","adm0_a3_us":"TGO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Western Africa","region_wb":"Sub-Saharan Africa","name_len":4,"long_len":4,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[102.5849,12.1866],[101.6872,12.6457],[100.8318,12.6271],[100.9785,13.4127],[100.0978,13.4069],[100.0187,12.307],[99.4789,10.8464],[99.1538,9.9631],[99.2224,9.2393],[99.8738,9.2079],[100.2796,8.2952],[100.4593,7.4296],[101.0173,6.8569],[101.6231,6.7406],[102.1412,6.2216],[101.8143,5.8108],[101.1542,5.6914],[101.0755,6.2049],[100.2596,6.6428],[100.0858,6.4645],[99.6907,6.8482],[99.5196,7.3435],[98.9883,7.908],[98.5038,8.3823],[98.3397,7.7945],[98.15,8.35],[98.2592,8.9739],[98.5536,9.933],[99.0381,10.9605],[99.5873,11.8928],[99.1964,12.8047],[99.212,13.2693],[99.0978,13.8275],[98.4308,14.622],[98.1921,15.1237],[98.5374,15.3085],[98.9033,16.1778],[98.4938,16.8378],[97.8591,17.5679],[97.3759,18.4454],[97.7978,18.6271],[98.2537,19.7082],[98.9597,19.753],[99.5433,20.1866],[100.116,20.4178],[100.5489,20.1092],[100.6063,19.5083],[101.282,19.4626],[101.0359,18.4089],[101.0595,17.5125],[102.1136,18.1091],[102.413,17.9328],[102.9987,17.9617],[103.2002,18.3096],[103.9565,18.241],[104.7169,17.4289],[104.7793,16.4419],[105.589,15.5703],[105.5443,14.7239],[105.2188,14.2732],[104.2814,14.4167],[102.9884,14.2257],[102.3481,13.3942],[102.5849,12.1866]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Thailand","sov_a3":"THA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Thailand","adm0_a3":"THA","geou_dif":0,"geounit":"Thailand","gu_a3":"THA","su_dif":0,"subunit":"Thailand","su_a3":"THA","brk_diff":0,"name":"Thailand","name_long":"Thailand","brk_a3":"THA","brk_name":"Thailand","brk_group":"","abbrev":"Thai.","postal":"TH","formal_en":"Kingdom of Thailand","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Thailand","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":8,"mapcolor13":1,"pop_est":65905410,"gdp_md_est":547400,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"TH","iso_a3":"THA","iso_n3":"764","un_a3":"764","wb_a2":"TH","wb_a3":"THA","woe_id":-99,"adm0_a3_is":"THA","adm0_a3_us":"THA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[71.0142,40.2444],[70.648,39.9358],[69.5596,40.1032],[69.4649,39.5267],[70.5492,39.6042],[71.7847,39.2795],[73.6754,39.4312],[73.9289,38.5058],[74.2575,38.6065],[74.8648,38.3788],[74.83,37.99],[74.98,37.42],[73.9487,37.4216],[73.2601,37.4953],[72.6369,37.0476],[72.193,36.9483],[71.8446,36.7382],[71.4487,37.0656],[71.5419,37.9058],[71.2394,37.9533],[71.3481,38.2589],[70.8068,38.4863],[70.3763,38.1384],[70.2706,37.7352],[70.1166,37.5882],[69.5188,37.609],[69.1963,37.1511],[68.8594,37.3443],[68.1356,37.0231],[67.83,37.145],[68.392,38.157],[68.176,38.9016],[67.4422,39.1401],[67.7014,39.5805],[68.5364,39.5335],[69.0116,40.0862],[69.3295,40.7278],[70.6666,40.9602],[70.4582,40.4965],[70.6014,40.2185],[71.0142,40.2444]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Tajikistan","sov_a3":"TJK","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Tajikistan","adm0_a3":"TJK","geou_dif":0,"geounit":"Tajikistan","gu_a3":"TJK","su_dif":0,"subunit":"Tajikistan","su_a3":"TJK","brk_diff":0,"name":"Tajikistan","name_long":"Tajikistan","brk_a3":"TJK","brk_name":"Tajikistan","brk_group":"","abbrev":"Tjk.","postal":"TJ","formal_en":"Republic of Tajikistan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Tajikistan","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":2,"mapcolor13":5,"pop_est":7349145,"gdp_md_est":13160,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"6. Developing region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"TJ","iso_a3":"TJK","iso_n3":"762","un_a3":"762","wb_a2":"TJ","wb_a3":"TJK","woe_id":-99,"adm0_a3_is":"TJK","adm0_a3_us":"TJK","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Central Asia","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[61.2108,35.6501],[61.1231,36.4916],[60.3776,36.5274],[59.2348,37.413],[58.4362,37.5223],[57.3304,38.0292],[56.6194,38.1214],[56.1804,37.9351],[55.5116,37.9641],[54.8003,37.3924],[53.9216,37.1989],[53.7355,37.9061],[53.8809,38.9521],[53.101,39.2906],[53.3578,39.9753],[52.694,40.0336],[52.9153,40.8765],[53.8581,40.631],[54.7368,40.951],[54.0083,41.5512],[53.7217,42.1232],[52.9167,41.8681],[52.8147,41.1354],[52.5025,41.7833],[52.9443,42.116],[54.0794,42.3241],[54.7553,42.044],[55.4553,41.2599],[55.9682,41.3086],[57.0964,41.3223],[56.9322,41.826],[57.7865,42.1706],[58.629,42.7516],[59.9764,42.2231],[60.0833,41.4251],[60.466,41.2203],[61.5472,41.2664],[61.8827,41.0849],[62.3743,40.0539],[63.518,39.3633],[64.1702,38.8924],[65.216,38.4027],[66.5462,37.9747],[66.5186,37.3628],[66.2174,37.3938],[65.7456,37.6612],[65.5889,37.3052],[64.7461,37.1118],[64.5465,36.3121],[63.9829,36.008],[63.1935,35.8572],[62.9847,35.404],[62.2307,35.2707],[61.2108,35.6501]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Turkmenistan","sov_a3":"TKM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Turkmenistan","adm0_a3":"TKM","geou_dif":0,"geounit":"Turkmenistan","gu_a3":"TKM","su_dif":0,"subunit":"Turkmenistan","su_a3":"TKM","brk_diff":0,"name":"Turkmenistan","name_long":"Turkmenistan","brk_a3":"TKM","brk_name":"Turkmenistan","brk_group":"","abbrev":"Turkm.","postal":"TM","formal_en":"Turkmenistan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Turkmenistan","name_alt":"","mapcolor7":3,"mapcolor8":2,"mapcolor9":1,"mapcolor13":9,"pop_est":4884887,"gdp_md_est":29780,"pop_year":-99,"lastcensus":1995,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"TM","iso_a3":"TKM","iso_n3":"795","un_a3":"795","wb_a2":"TM","wb_a3":"TKM","woe_id":-99,"adm0_a3_is":"TKM","adm0_a3_us":"TKM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Central Asia","region_wb":"Europe & Central Asia","name_len":12,"long_len":12,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[124.9687,-8.8928],[125.0862,-8.6569],[125.9471,-8.4321],[126.6447,-8.3982],[126.9572,-8.2733],[127.3359,-8.3973],[126.968,-8.6683],[125.9259,-9.106],[125.0885,-9.3932],[125.07,-9.09],[124.9687,-8.8928]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"East Timor","sov_a3":"TLS","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"East Timor","adm0_a3":"TLS","geou_dif":0,"geounit":"East Timor","gu_a3":"TLS","su_dif":0,"subunit":"East Timor","su_a3":"TLS","brk_diff":0,"name":"Timor-Leste","name_long":"Timor-Leste","brk_a3":"TLS","brk_name":"Timor-Leste","brk_group":"","abbrev":"T.L.","postal":"TL","formal_en":"Democratic Republic of Timor-Leste","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Timor-Leste","name_alt":"East Timor","mapcolor7":2,"mapcolor8":2,"mapcolor9":4,"mapcolor13":3,"pop_est":1131612,"gdp_md_est":2520,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"TL","iso_a3":"TLS","iso_n3":"626","un_a3":"626","wb_a2":"TP","wb_a3":"TMP","woe_id":-99,"adm0_a3_is":"TLS","adm0_a3_us":"TLS","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":11,"long_len":11,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-61.68,10.76],[-61.105,10.89],[-60.895,10.855],[-60.935,10.11],[-61.77,10],[-61.95,10.09],[-61.66,10.365],[-61.68,10.76]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":5,"sovereignt":"Trinidad and Tobago","sov_a3":"TTO","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Trinidad and Tobago","adm0_a3":"TTO","geou_dif":0,"geounit":"Trinidad and Tobago","gu_a3":"TTO","su_dif":0,"subunit":"Trinidad and Tobago","su_a3":"TTO","brk_diff":0,"name":"Trinidad and Tobago","name_long":"Trinidad and Tobago","brk_a3":"TTO","brk_name":"Trinidad and Tobago","brk_group":"","abbrev":"Tr.T.","postal":"TT","formal_en":"Republic of Trinidad and Tobago","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Trinidad and Tobago","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":2,"mapcolor13":5,"pop_est":1310000,"gdp_md_est":29010,"pop_year":-99,"lastcensus":2011,"gdp_year":-99,"economy":"6. Developing region","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"TT","iso_a3":"TTO","iso_n3":"780","un_a3":"780","wb_a2":"TT","wb_a3":"TTO","woe_id":-99,"adm0_a3_is":"TTO","adm0_a3_us":"TTO","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Caribbean","region_wb":"Latin America & Caribbean","name_len":19,"long_len":19,"abbrev_len":5,"tiny":2,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[9.4821,30.3076],[9.0556,32.1027],[8.4391,32.5063],[8.4305,32.7483],[7.6126,33.3441],[7.5245,34.0974],[8.141,34.6551],[8.3764,35.4799],[8.2178,36.4332],[8.421,36.9464],[9.51,37.35],[10.21,37.23],[10.1807,36.724],[11.0289,37.0921],[11.1,36.9],[10.6,36.41],[10.5933,35.9474],[10.9395,35.699],[10.8078,34.8335],[10.1496,34.3308],[10.3397,33.7857],[10.8568,33.7687],[11.1085,33.2933],[11.4888,33.137],[11.4323,32.3689],[10.9448,32.0818],[10.6369,31.7614],[9.9502,31.3761],[10.0566,30.9618],[9.97,30.5393],[9.4821,30.3076]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Tunisia","sov_a3":"TUN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Tunisia","adm0_a3":"TUN","geou_dif":0,"geounit":"Tunisia","gu_a3":"TUN","su_dif":0,"subunit":"Tunisia","su_a3":"TUN","brk_diff":0,"name":"Tunisia","name_long":"Tunisia","brk_a3":"TUN","brk_name":"Tunisia","brk_group":"","abbrev":"Tun.","postal":"TN","formal_en":"Republic of Tunisia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Tunisia","name_alt":"","mapcolor7":4,"mapcolor8":3,"mapcolor9":3,"mapcolor13":2,"pop_est":10486339,"gdp_md_est":81710,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"6. Developing region","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"TN","iso_a3":"TUN","iso_n3":"788","un_a3":"788","wb_a2":"TN","wb_a3":"TUN","woe_id":-99,"adm0_a3_is":"TUN","adm0_a3_us":"TUN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Northern Africa","region_wb":"Middle East & North Africa","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[36.9131,41.3354],[38.3477,40.9486],[39.5126,41.1028],[40.3734,41.0137],[41.5541,41.5357],[42.6195,41.5832],[43.5827,41.0921],[43.7527,40.7402],[43.6564,40.2536],[44.4,40.005],[44.794,39.713],[44.1092,39.4281],[44.4214,38.2813],[44.2258,37.9716],[44.7727,37.1704],[44.2935,37.0015],[43.9423,37.2562],[42.7791,37.3853],[42.3496,37.2299],[41.2121,37.0744],[40.6733,37.0913],[39.5226,36.7161],[38.6999,36.7129],[38.1677,36.9012],[37.0668,36.623],[36.7395,36.8175],[36.6854,36.2597],[36.4176,36.0406],[36.1498,35.8215],[35.7821,36.275],[36.1608,36.6506],[35.5509,36.5654],[34.7146,36.7955],[34.0269,36.22],[32.5092,36.1076],[31.6996,36.6443],[30.6216,36.6779],[30.3911,36.263],[29.7,36.1444],[28.7329,36.6768],[27.6412,36.6588],[27.0488,37.6534],[26.3182,38.2081],[26.8047,38.9858],[26.1708,39.4636],[27.28,40.42],[28.82,40.46],[29.24,41.22],[31.1459,41.0876],[32.348,41.7363],[33.5133,42.019],[35.1677,42.0402],[36.9131,41.3354]],[[27.1924,40.6906],[26.358,40.152],[26.0434,40.6178],[26.0569,40.8241],[26.2946,40.9363],[26.6042,41.5621],[26.117,41.8269],[27.1357,42.1415],[27.9967,42.0074],[28.1155,41.6229],[28.9884,41.2999],[28.8064,41.055],[27.619,40.9998],[27.1924,40.6906]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Turkey","sov_a3":"TUR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Turkey","adm0_a3":"TUR","geou_dif":0,"geounit":"Turkey","gu_a3":"TUR","su_dif":0,"subunit":"Turkey","su_a3":"TUR","brk_diff":0,"name":"Turkey","name_long":"Turkey","brk_a3":"TUR","brk_name":"Turkey","brk_group":"","abbrev":"Tur.","postal":"TR","formal_en":"Republic of Turkey","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Turkey","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":8,"mapcolor13":4,"pop_est":76805524,"gdp_md_est":902700,"pop_year":-99,"lastcensus":2000,"gdp_year":-99,"economy":"4. Emerging region: MIKT","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"TR","iso_a3":"TUR","iso_n3":"792","un_a3":"792","wb_a2":"TR","wb_a3":"TUR","woe_id":-99,"adm0_a3_is":"TUR","adm0_a3_us":"TUR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Europe & Central Asia","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[121.7778,24.3943],[121.1756,22.7909],[120.7471,21.9706],[120.2201,22.8149],[120.1062,23.5563],[120.6947,24.5385],[121.495,25.2955],[121.9512,24.9976],[121.7778,24.3943]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Taiwan","sov_a3":"TWN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Taiwan","adm0_a3":"TWN","geou_dif":0,"geounit":"Taiwan","gu_a3":"TWN","su_dif":0,"subunit":"Taiwan","su_a3":"TWN","brk_diff":1,"name":"Taiwan","name_long":"Taiwan","brk_a3":"B77","brk_name":"Taiwan","brk_group":"","abbrev":"Taiwan","postal":"TW","formal_en":"","formal_fr":"","note_adm0":"","note_brk":"Self admin.; Claimed by China","name_sort":"Taiwan","name_alt":"","mapcolor7":1,"mapcolor8":5,"mapcolor9":7,"mapcolor13":2,"pop_est":22974347,"gdp_md_est":712000,"pop_year":-99,"lastcensus":-99,"gdp_year":-99,"economy":"2. Developed region: nonG7","income_grp":"2. High income: nonOECD","wikipedia":-99,"fips_10":"","iso_a2":"TW","iso_a3":"TWN","iso_n3":"158","un_a3":"-099","wb_a2":"-99","wb_a3":"-99","woe_id":-99,"adm0_a3_is":"TWN","adm0_a3_us":"TWN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Eastern Asia","region_wb":"East Asia & Pacific","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[33.9037,-0.95],[34.0726,-1.0598],[37.6987,-3.097],[37.7669,-3.6771],[39.2022,-4.6768],[38.7405,-5.9089],[38.7998,-6.4757],[39.44,-6.84],[39.47,-7.1],[39.1947,-7.7039],[39.252,-8.0078],[39.1865,-8.4855],[39.5357,-9.1124],[39.9496,-10.0984],[40.3166,-10.3171],[39.521,-10.8969],[38.4276,-11.2852],[37.8276,-11.2688],[37.4713,-11.5688],[36.7752,-11.5945],[36.5141,-11.7209],[35.3124,-11.4391],[34.56,-11.52],[34.28,-10.16],[33.9408,-9.6937],[33.7397,-9.4171],[32.7594,-9.2306],[32.1919,-8.9304],[31.5563,-8.762],[31.1578,-8.5946],[30.74,-8.34],[30.2,-7.08],[29.62,-6.52],[29.42,-5.94],[29.52,-5.42],[29.34,-4.5],[29.7535,-4.4524],[30.1163,-4.0901],[30.5055,-3.5686],[30.7522,-3.3593],[30.743,-3.0343],[30.5277,-2.8076],[30.4697,-2.4138],[30.7583,-2.2873],[30.8161,-1.6989],[30.4191,-1.1347],[30.7699,-1.0145],[31.8662,-1.0274],[33.9037,-0.95]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"United Republic of Tanzania","sov_a3":"TZA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"United Republic of Tanzania","adm0_a3":"TZA","geou_dif":0,"geounit":"Tanzania","gu_a3":"TZA","su_dif":0,"subunit":"Tanzania","su_a3":"TZA","brk_diff":0,"name":"Tanzania","name_long":"Tanzania","brk_a3":"TZA","brk_name":"Tanzania","brk_group":"","abbrev":"Tanz.","postal":"TZ","formal_en":"United Republic of Tanzania","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Tanzania","name_alt":"","mapcolor7":3,"mapcolor8":6,"mapcolor9":2,"mapcolor13":2,"pop_est":41048532,"gdp_md_est":54250,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"TZ","iso_a3":"TZA","iso_n3":"834","un_a3":"834","wb_a2":"TZ","wb_a3":"TZA","woe_id":-99,"adm0_a3_is":"TZA","adm0_a3_us":"TZA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[31.8662,-1.0274],[30.7699,-1.0145],[30.4191,-1.1347],[29.8215,-1.4433],[29.5795,-1.3413],[29.5878,-0.5874],[29.8195,-0.2053],[29.8758,0.5974],[30.0862,1.0623],[30.4685,1.5838],[30.8527,1.8494],[31.1741,2.2045],[30.7733,2.3399],[30.8339,3.5092],[31.2456,3.7819],[31.8814,3.5583],[32.6864,3.7923],[33.39,3.79],[34.005,4.2499],[34.4791,3.5556],[34.5961,3.0537],[35.036,1.9058],[34.6721,1.1769],[34.18,0.515],[33.8936,0.1098],[33.9037,-0.95],[31.8662,-1.0274]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Uganda","sov_a3":"UGA","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Uganda","adm0_a3":"UGA","geou_dif":0,"geounit":"Uganda","gu_a3":"UGA","su_dif":0,"subunit":"Uganda","su_a3":"UGA","brk_diff":0,"name":"Uganda","name_long":"Uganda","brk_a3":"UGA","brk_name":"Uganda","brk_group":"","abbrev":"Uga.","postal":"UG","formal_en":"Republic of Uganda","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Uganda","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":6,"mapcolor13":4,"pop_est":32369558,"gdp_md_est":39380,"pop_year":-99,"lastcensus":2002,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"UG","iso_a3":"UGA","iso_n3":"800","un_a3":"800","wb_a2":"UG","wb_a3":"UGA","woe_id":-99,"adm0_a3_is":"UGA","adm0_a3_us":"UGA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[31.786,52.1017],[32.1594,52.0613],[32.4121,52.2887],[32.7158,52.2385],[33.7527,52.3351],[34.3917,51.7689],[34.142,51.5664],[34.2248,51.256],[35.0222,51.2076],[35.3779,50.774],[35.3561,50.5772],[36.6262,50.2256],[37.3935,50.384],[38.0106,49.9157],[38.595,49.9265],[40.0691,49.6011],[40.0808,49.3074],[39.6747,48.7838],[39.8956,48.2324],[39.7383,47.8989],[38.7706,47.8256],[38.2551,47.5464],[38.2235,47.1022],[37.4251,47.0222],[36.7599,46.6987],[35.8237,46.646],[34.9623,46.2732],[35.0208,45.6512],[35.51,45.41],[36.53,45.47],[36.3347,45.1132],[35.24,44.94],[33.8825,44.3615],[33.3264,44.5649],[33.5469,45.0348],[32.4542,45.3275],[32.6308,45.5192],[33.5882,45.8516],[33.2986,46.0806],[31.7441,46.3333],[31.6753,46.7062],[30.7487,46.5831],[30.3776,46.0324],[29.6033,45.2933],[29.1497,45.4649],[28.6798,45.304],[28.2336,45.4883],[28.4853,45.5969],[28.66,45.94],[28.9337,46.2588],[28.863,46.4379],[29.0721,46.5177],[29.1707,46.3793],[29.76,46.35],[30.0247,46.4239],[29.8382,46.5253],[29.9089,46.6744],[29.5597,46.9286],[29.4151,47.3466],[29.0509,47.5102],[29.1227,47.8491],[28.6709,48.1181],[28.2595,48.1556],[27.5225,48.4671],[26.8578,48.3682],[26.6193,48.2207],[26.1975,48.2209],[25.9459,47.9871],[25.2077,47.8911],[24.8663,47.7375],[24.4021,47.9819],[23.761,47.9856],[23.1422,48.0963],[22.7105,47.8822],[22.6408,48.1502],[22.0856,48.4223],[22.2808,48.8254],[22.5581,49.0857],[22.7764,49.0274],[22.5185,49.4768],[23.4265,50.3085],[23.9228,50.4249],[24.03,50.7054],[23.5271,51.5785],[24.0051,51.6174],[24.5531,51.8885],[25.3278,51.9107],[26.338,51.8323],[27.4541,51.5923],[28.2416,51.5722],[28.6176,51.4277],[28.9928,51.602],[29.2549,51.3682],[30.1574,51.4161],[30.5551,51.3195],[30.6195,51.8228],[30.9275,52.0424],[31.786,52.1017]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Ukraine","sov_a3":"UKR","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Ukraine","adm0_a3":"UKR","geou_dif":0,"geounit":"Ukraine","gu_a3":"UKR","su_dif":0,"subunit":"Ukraine","su_a3":"UKR","brk_diff":0,"name":"Ukraine","name_long":"Ukraine","brk_a3":"UKR","brk_name":"Ukraine","brk_group":"","abbrev":"Ukr.","postal":"UA","formal_en":"Ukraine","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Ukraine","name_alt":"","mapcolor7":5,"mapcolor8":1,"mapcolor9":6,"mapcolor13":3,"pop_est":45700395,"gdp_md_est":339800,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"UA","iso_a3":"UKR","iso_n3":"804","un_a3":"804","wb_a2":"UA","wb_a3":"UKR","woe_id":-99,"adm0_a3_is":"UKR","adm0_a3_us":"UKR","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Europe","region_un":"Europe","subregion":"Eastern Europe","region_wb":"Europe & Central Asia","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-57.6251,-30.2163],[-56.976,-30.1097],[-55.9732,-30.8831],[-55.6015,-30.8539],[-54.5725,-31.4945],[-53.788,-32.0472],[-53.2096,-32.7277],[-53.6505,-33.202],[-53.3737,-33.7684],[-53.8064,-34.3968],[-54.9359,-34.9526],[-55.6741,-34.7527],[-56.2153,-34.8598],[-57.1397,-34.4305],[-57.8179,-34.4625],[-58.4271,-33.9095],[-58.3496,-33.2632],[-58.1326,-33.0406],[-58.1424,-32.0445],[-57.8749,-31.0166],[-57.6251,-30.2163]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Uruguay","sov_a3":"URY","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Uruguay","adm0_a3":"URY","geou_dif":0,"geounit":"Uruguay","gu_a3":"URY","su_dif":0,"subunit":"Uruguay","su_a3":"URY","brk_diff":0,"name":"Uruguay","name_long":"Uruguay","brk_a3":"URY","brk_name":"Uruguay","brk_group":"","abbrev":"Ury.","postal":"UY","formal_en":"Oriental Republic of Uruguay","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Uruguay","name_alt":"","mapcolor7":1,"mapcolor8":2,"mapcolor9":2,"mapcolor13":10,"pop_est":3494382,"gdp_md_est":43160,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"UY","iso_a3":"URY","iso_n3":"858","un_a3":"858","wb_a2":"UY","wb_a3":"URY","woe_id":-99,"adm0_a3_is":"URY","adm0_a3_us":"URY","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":7,"long_len":7,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-155.5421,19.0835],[-155.6882,18.9162],[-155.9366,19.0594],[-155.9081,19.3389],[-156.0735,19.7029],[-156.0237,19.8142],[-155.8501,19.9773],[-155.9191,20.174],[-155.8611,20.2672],[-155.785,20.2487],[-155.4021,20.0798],[-155.2245,19.993],[-155.0623,19.8591],[-154.8074,19.5087],[-154.8315,19.4533],[-155.2222,19.2397],[-155.5421,19.0835]],[[-156.0793,20.644],[-156.4145,20.5724],[-156.5867,20.783],[-156.7017,20.8643],[-156.7105,20.9268],[-156.6126,21.0125],[-156.2571,20.9175],[-155.9957,20.764],[-156.0793,20.644]],[[-156.7582,21.1768],[-156.7893,21.0687],[-157.3252,21.0978],[-157.2503,21.2196],[-156.7582,21.1768]],[[-157.6528,21.3222],[-157.707,21.2644],[-157.7786,21.2773],[-158.1267,21.3124],[-158.2538,21.5392],[-158.2926,21.5791],[-158.0252,21.717],[-157.9416,21.6527],[-157.6528,21.3222]],[[-159.3451,21.982],[-159.4637,21.883],[-159.8005,22.0653],[-159.7488,22.1382],[-159.5962,22.2362],[-159.3657,22.2149],[-159.3451,21.982]],[[-94.8176,49.3891],[-94.64,48.84],[-94.3291,48.6707],[-93.6309,48.6093],[-92.61,48.45],[-91.64,48.14],[-90.83,48.27],[-89.6,48.01],[-89.2729,48.0198],[-88.3781,48.3029],[-87.4398,47.94],[-86.462,47.5533],[-85.6524,47.2202],[-84.8761,46.9001],[-84.7792,46.6371],[-84.5437,46.5387],[-84.6049,46.4396],[-84.3367,46.4088],[-84.1421,46.5122],[-84.0919,46.2754],[-83.8908,46.1169],[-83.6161,46.1169],[-83.4696,45.9947],[-83.5929,45.8169],[-82.5509,45.3475],[-82.3378,44.44],[-82.1376,43.5711],[-82.43,42.98],[-82.9,42.43],[-83.12,42.08],[-83.142,41.9757],[-83.0298,41.8328],[-82.6901,41.6751],[-82.4393,41.6751],[-81.2777,42.209],[-80.2474,42.3662],[-78.9394,42.8636],[-78.92,42.965],[-79.01,43.27],[-79.1717,43.4663],[-78.7203,43.6251],[-77.7379,43.6291],[-76.82,43.6288],[-76.5,44.0185],[-76.375,44.0963],[-75.3182,44.8165],[-74.867,45.0005],[-73.3478,45.0074],[-71.5051,45.0082],[-71.405,45.255],[-71.0848,45.3052],[-70.66,45.46],[-70.305,45.915],[-70,46.6931],[-69.2372,47.4478],[-68.905,47.185],[-68.2344,47.3549],[-67.7905,47.0664],[-67.7913,45.7028],[-67.1374,45.1375],[-66.9647,44.8097],[-68.0325,44.3252],[-69.06,43.98],[-70.1162,43.6841],[-70.6455,43.0902],[-70.8149,42.8653],[-70.825,42.335],[-70.495,41.805],[-70.08,41.78],[-70.185,42.145],[-69.885,41.9228],[-69.965,41.6372],[-70.64,41.475],[-71.1204,41.4945],[-71.86,41.32],[-72.295,41.27],[-72.8764,41.2207],[-73.71,40.9311],[-72.2413,41.1195],[-71.945,40.93],[-73.345,40.63],[-73.982,40.628],[-73.9523,40.7508],[-74.2567,40.4735],[-73.9624,40.4276],[-74.1784,39.7093],[-74.906,38.9395],[-74.9804,39.1964],[-75.2,39.2485],[-75.528,39.4985],[-75.32,38.96],[-75.0718,38.782],[-75.0567,38.4041],[-75.3775,38.0155],[-75.9402,37.2169],[-76.0313,37.2566],[-75.722,37.9371],[-76.2329,38.3192],[-76.35,39.15],[-76.5427,38.7176],[-76.3293,38.0833],[-76.99,38.24],[-76.3016,37.9179],[-76.2587,36.9664],[-75.9718,36.8973],[-75.868,36.5513],[-75.7275,35.5507],[-76.3632,34.8085],[-77.3976,34.512],[-78.055,33.9255],[-78.5543,33.8613],[-79.0607,33.4939],[-79.2036,33.1584],[-80.3013,32.5094],[-80.865,32.0333],[-81.3363,31.4405],[-81.4904,30.73],[-81.3137,30.0355],[-80.98,29.18],[-80.5356,28.4721],[-80.53,28.04],[-80.0565,26.88],[-80.088,26.2058],[-80.1316,25.8168],[-80.381,25.2062],[-80.68,25.08],[-81.1721,25.2013],[-81.33,25.64],[-81.71,25.87],[-82.24,26.73],[-82.7051,27.495],[-82.8553,27.8862],[-82.65,28.55],[-82.93,29.1],[-83.7096,29.9366],[-84.1,30.09],[-85.1088,29.6362],[-85.2878,29.6861],[-85.7731,30.1526],[-86.4,30.4],[-87.5304,30.2743],[-88.4178,30.3849],[-89.1805,30.316],[-89.5938,30.16],[-89.4137,29.8942],[-89.43,29.4886],[-89.2177,29.2911],[-89.4082,29.1596],[-89.7793,29.3071],[-90.1546,29.1174],[-90.8802,29.1485],[-91.6268,29.677],[-92.4991,29.5523],[-93.2264,29.7838],[-93.8484,29.7136],[-94.69,29.48],[-95.6003,28.7386],[-96.594,28.3075],[-97.14,27.83],[-97.37,27.38],[-97.38,26.69],[-97.33,26.21],[-97.14,25.87],[-97.53,25.84],[-98.24,26.06],[-99.02,26.37],[-99.3,26.84],[-99.52,27.54],[-100.11,28.11],[-100.4558,28.6961],[-100.9576,29.3807],[-101.6624,29.7793],[-102.48,29.76],[-103.11,28.97],[-103.94,29.27],[-104.457,29.572],[-104.7057,30.1217],[-105.0374,30.644],[-105.6316,31.0838],[-106.1429,31.4],[-106.5076,31.7545],[-108.24,31.7549],[-108.2419,31.3422],[-109.035,31.3419],[-111.0236,31.3347],[-113.305,32.0391],[-114.815,32.5253],[-114.7214,32.7208],[-115.9913,32.6124],[-117.1278,32.5353],[-117.2959,33.0462],[-117.944,33.6212],[-118.4106,33.7409],[-118.5199,34.0278],[-119.081,34.078],[-119.4388,34.3485],[-120.3678,34.4471],[-120.6229,34.6086],[-120.7443,35.1569],[-121.7146,36.1615],[-122.5475,37.5518],[-122.512,37.7834],[-122.9532,38.1137],[-123.7272,38.9517],[-123.8652,39.767],[-124.3981,40.3132],[-124.1789,41.142],[-124.2137,41.9996],[-124.5328,42.766],[-124.1421,43.7084],[-124.0205,44.6159],[-123.8989,45.5234],[-124.0796,46.8648],[-124.3957,47.7202],[-124.6872,48.1844],[-124.5661,48.3797],[-123.12,48.04],[-122.5874,47.096],[-122.34,47.36],[-122.5,48.18],[-122.84,49],[-120,49],[-117.0312,49],[-116.0482,49],[-113,49],[-110.05,49],[-107.05,49],[-104.0483,48.9999],[-100.65,49],[-97.2287,49.0007],[-95.1591,49],[-95.1561,49.3843],[-94.8176,49.3891]],[[-153.0063,57.1158],[-154.0051,56.7347],[-154.5164,56.9927],[-154.671,57.4612],[-153.7628,57.8166],[-153.2287,57.969],[-152.5648,57.9014],[-152.1411,57.5911],[-153.0063,57.1158]],[[-165.5792,59.91],[-166.1928,59.7544],[-166.8483,59.9414],[-167.4553,60.2131],[-166.4678,60.3842],[-165.6744,60.2936],[-165.5792,59.91]],[[-171.7317,63.7825],[-171.1144,63.5922],[-170.4911,63.695],[-169.6825,63.4311],[-168.6894,63.2975],[-168.7719,63.1886],[-169.5294,62.9769],[-170.2906,63.1944],[-170.6714,63.3758],[-171.5531,63.3178],[-171.7911,63.4058],[-171.7317,63.7825]],[[-155.0678,71.1478],[-154.3442,70.6964],[-153.9,70.89],[-152.21,70.83],[-152.27,70.6],[-150.74,70.43],[-149.72,70.53],[-147.6134,70.214],[-145.69,70.12],[-144.92,69.99],[-143.5894,70.1525],[-142.0725,69.8519],[-140.986,69.712],[-140.986,69.712],[-140.9925,66],[-140.9978,60.3064],[-140.013,60.2768],[-139.039,60],[-138.3409,59.5621],[-137.4525,58.905],[-136.4797,59.4639],[-135.4758,59.7878],[-134.945,59.2706],[-134.2711,58.8611],[-133.3555,58.4103],[-132.7304,57.6929],[-131.7078,56.5521],[-130.0078,55.9158],[-129.98,55.285],[-130.5361,54.8028],[-131.0858,55.1789],[-131.9672,55.4978],[-132.25,56.37],[-133.5392,57.1789],[-134.0781,58.1231],[-135.0382,58.1877],[-136.6281,58.2122],[-137.8,58.5],[-139.8678,59.5378],[-140.8253,59.7275],[-142.5744,60.0844],[-143.9589,59.9992],[-145.9256,60.4586],[-147.1144,60.8847],[-148.2243,60.673],[-148.0181,59.9783],[-148.5708,59.9142],[-149.7279,59.7057],[-150.6082,59.3682],[-151.7164,59.1558],[-151.8594,59.745],[-151.4097,60.7258],[-150.3469,61.0336],[-150.6211,61.2844],[-151.8958,60.7272],[-152.5783,60.0617],[-154.0192,59.3503],[-153.2875,58.8647],[-154.2325,58.1464],[-155.3075,57.7278],[-156.3083,57.4228],[-156.5561,56.98],[-158.1172,56.4636],[-158.4333,55.9942],[-159.6033,55.5667],[-160.2897,55.6436],[-161.223,55.3647],[-162.2378,55.0242],[-163.0694,54.6897],[-164.7856,54.4042],[-164.9422,54.5722],[-163.8483,55.0394],[-162.87,55.348],[-161.8042,55.895],[-160.5636,56.0081],[-160.0706,56.4181],[-158.6844,57.0167],[-158.4611,57.2169],[-157.7228,57.57],[-157.5503,58.3283],[-157.0417,58.9189],[-158.1947,58.6158],[-158.5172,58.7878],[-159.0586,58.4242],[-159.7117,58.9314],[-159.9813,58.5725],[-160.3553,59.0711],[-161.355,58.6708],[-161.9689,58.6717],[-162.055,59.2669],[-161.8742,59.6336],[-162.5181,59.9897],[-163.8183,59.7981],[-164.6622,60.2675],[-165.3464,60.5075],[-165.3508,61.0739],[-166.1214,61.5],[-165.7345,62.075],[-164.9192,62.6331],[-164.5625,63.1464],[-163.7533,63.2194],[-163.0672,63.0595],[-162.2606,63.5419],[-161.5344,63.4558],[-160.7725,63.7661],[-160.9583,64.2228],[-161.5181,64.4028],[-160.7778,64.7886],[-161.3919,64.7772],[-162.4531,64.5594],[-162.7578,64.3386],[-163.5464,64.5592],[-164.9608,64.4469],[-166.4253,64.6867],[-166.845,65.0889],[-168.1106,65.67],[-166.7053,66.0883],[-164.4747,66.5767],[-163.6525,66.5767],[-163.7886,66.0772],[-161.6778,66.1161],[-162.4897,66.7356],[-163.7197,67.1164],[-164.431,67.6163],[-165.3903,68.0428],[-166.7644,68.3589],[-166.2047,68.883],[-164.4308,68.9155],[-163.1686,69.3711],[-162.9306,69.8581],[-161.9089,70.3333],[-160.9348,70.4477],[-159.0392,70.8916],[-158.1197,70.8247],[-156.5808,71.3578],[-155.0678,71.1478]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"United States of America","sov_a3":"US1","adm0_dif":1,"level":2,"type":"Country","admin":"United States of America","adm0_a3":"USA","geou_dif":0,"geounit":"United States of America","gu_a3":"USA","su_dif":0,"subunit":"United States of America","su_a3":"USA","brk_diff":0,"name":"United States","name_long":"United States","brk_a3":"USA","brk_name":"United States","brk_group":"","abbrev":"U.S.A.","postal":"US","formal_en":"United States of America","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"United States of America","name_alt":"","mapcolor7":4,"mapcolor8":5,"mapcolor9":1,"mapcolor13":1,"pop_est":313973000,"gdp_md_est":15094000,"pop_year":0,"lastcensus":2010,"gdp_year":0,"economy":"1. Developed region: G7","income_grp":"1. High income: OECD","wikipedia":0,"fips_10":"","iso_a2":"US","iso_a3":"USA","iso_n3":"840","un_a3":"840","wb_a2":"US","wb_a3":"USA","woe_id":-99,"adm0_a3_is":"USA","adm0_a3_us":"USA","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"North America","region_un":"Americas","subregion":"Northern America","region_wb":"North America","name_len":13,"long_len":13,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[66.5186,37.3628],[66.5462,37.9747],[65.216,38.4027],[64.1702,38.8924],[63.518,39.3633],[62.3743,40.0539],[61.8827,41.0849],[61.5472,41.2664],[60.466,41.2203],[60.0833,41.4251],[59.9764,42.2231],[58.629,42.7516],[57.7865,42.1706],[56.9322,41.826],[57.0964,41.3223],[55.9682,41.3086],[55.9289,44.9959],[58.5031,45.5868],[58.69,45.5],[60.24,44.784],[61.0583,44.4058],[62.0133,43.5045],[63.1858,43.6501],[64.9008,43.7281],[66.098,42.9977],[66.0234,41.9946],[66.5106,41.9876],[66.714,41.1684],[67.9859,41.136],[68.2599,40.6623],[68.6325,40.6687],[69.07,41.3842],[70.389,42.0813],[70.9623,42.2662],[71.2592,42.1677],[70.42,41.52],[71.1579,41.1436],[71.8701,41.3929],[73.0554,40.866],[71.7749,40.1458],[71.0142,40.2444],[70.6014,40.2185],[70.4582,40.4965],[70.6666,40.9602],[69.3295,40.7278],[69.0116,40.0862],[68.5364,39.5335],[67.7014,39.5805],[67.4422,39.1401],[68.176,38.9016],[68.392,38.157],[67.83,37.145],[67.0758,37.3561],[66.5186,37.3628]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Uzbekistan","sov_a3":"UZB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Uzbekistan","adm0_a3":"UZB","geou_dif":0,"geounit":"Uzbekistan","gu_a3":"UZB","su_dif":0,"subunit":"Uzbekistan","su_a3":"UZB","brk_diff":0,"name":"Uzbekistan","name_long":"Uzbekistan","brk_a3":"UZB","brk_name":"Uzbekistan","brk_group":"","abbrev":"Uzb.","postal":"UZ","formal_en":"Republic of Uzbekistan","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Uzbekistan","name_alt":"","mapcolor7":2,"mapcolor8":3,"mapcolor9":5,"mapcolor13":4,"pop_est":27606007,"gdp_md_est":71670,"pop_year":-99,"lastcensus":1989,"gdp_year":-99,"economy":"6. Developing region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"UZ","iso_a3":"UZB","iso_n3":"860","un_a3":"860","wb_a2":"UZ","wb_a3":"UZB","woe_id":-99,"adm0_a3_is":"UZB","adm0_a3_us":"UZB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Central Asia","region_wb":"Europe & Central Asia","name_len":10,"long_len":10,"abbrev_len":4,"tiny":5,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[-71.3316,11.7763],[-71.36,11.54],[-71.947,11.4233],[-71.6209,10.9695],[-71.6331,10.4465],[-72.0742,9.8657],[-71.6956,9.0723],[-71.2646,9.1372],[-71.04,9.86],[-71.3501,10.2119],[-71.4006,10.969],[-70.1553,11.3755],[-70.2938,11.8468],[-69.9432,12.1623],[-69.5843,11.4596],[-68.883,11.4434],[-68.2333,10.8857],[-68.1941,10.5547],[-67.2962,10.5459],[-66.2279,10.6486],[-65.6552,10.2008],[-64.8905,10.0772],[-64.3295,10.3896],[-64.318,10.6414],[-63.0793,10.7017],[-61.8809,10.7156],[-62.7301,10.4203],[-62.3885,9.9482],[-61.5888,9.8731],[-60.8306,9.3813],[-60.6713,8.5802],[-60.1501,8.6028],[-59.7583,8.367],[-60.5506,7.7796],[-60.638,7.415],[-60.2957,7.0439],[-60.544,6.8566],[-61.1593,6.6961],[-61.1394,6.2343],[-61.4103,5.9591],[-60.7336,5.2003],[-60.6012,4.9181],[-60.9669,4.5365],[-62.0854,4.1621],[-62.8045,4.007],[-63.0932,3.7706],[-63.8883,4.0205],[-64.6287,4.1485],[-64.8161,4.0564],[-64.3685,3.7972],[-64.4088,3.1268],[-64.27,2.497],[-63.4229,2.4111],[-63.3688,2.2009],[-64.0831,1.9164],[-64.1993,1.4929],[-64.611,1.3287],[-65.3547,1.0953],[-65.5483,0.7893],[-66.3258,0.7245],[-66.8763,1.2534],[-67.1813,2.2506],[-67.4471,2.6003],[-67.8099,2.8207],[-67.3032,3.3185],[-67.3376,3.5423],[-67.6218,3.8395],[-67.823,4.5039],[-67.7447,5.2211],[-67.5215,5.5569],[-67.3414,6.0955],[-67.6951,6.2673],[-68.2651,6.1533],[-68.9853,6.2068],[-69.3895,6.0999],[-70.0933,6.9604],[-70.6742,7.0878],[-71.9602,6.9916],[-72.1984,7.3404],[-72.4445,7.4238],[-72.4797,7.6325],[-72.3609,8.0026],[-72.4399,8.4053],[-72.6605,8.6253],[-72.7887,9.085],[-73.305,9.152],[-73.0276,9.7368],[-72.9053,10.4503],[-72.6147,10.822],[-72.2276,11.1087],[-71.9739,11.6087],[-71.3316,11.7763]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Venezuela","sov_a3":"VEN","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Venezuela","adm0_a3":"VEN","geou_dif":0,"geounit":"Venezuela","gu_a3":"VEN","su_dif":0,"subunit":"Venezuela","su_a3":"VEN","brk_diff":0,"name":"Venezuela","name_long":"Venezuela","brk_a3":"VEN","brk_name":"Venezuela","brk_group":"","abbrev":"Ven.","postal":"VE","formal_en":"Bolivarian Republic of Venezuela","formal_fr":"República Bolivariana de Venezuela","note_adm0":"","note_brk":"","name_sort":"Venezuela, RB","name_alt":"","mapcolor7":1,"mapcolor8":3,"mapcolor9":1,"mapcolor13":4,"pop_est":26814843,"gdp_md_est":357400,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"VE","iso_a3":"VEN","iso_n3":"862","un_a3":"862","wb_a2":"VE","wb_a3":"VEN","woe_id":-99,"adm0_a3_is":"VEN","adm0_a3_us":"VEN","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"South America","region_un":"Americas","subregion":"South America","region_wb":"Latin America & Caribbean","name_len":9,"long_len":9,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[108.0502,21.5524],[106.7151,20.6969],[105.8817,19.7521],[105.662,19.0582],[106.4268,18.0041],[107.362,16.6975],[108.2695,16.0797],[108.8771,15.2767],[109.3353,13.426],[109.2001,11.6669],[108.3661,11.0083],[107.2209,10.3645],[106.4051,9.5308],[105.1583,8.5998],[104.7952,9.241],[105.0762,9.9185],[104.3343,10.4865],[105.1999,10.8893],[106.2497,10.9618],[105.8105,11.5676],[107.4914,12.3372],[107.6145,13.5355],[107.3827,14.2024],[107.5645,15.2022],[107.3127,15.9085],[106.556,16.6043],[105.9258,17.4853],[105.0946,18.667],[103.8965,19.2652],[104.1834,19.6247],[104.8226,19.8866],[104.435,20.7587],[103.2039,20.7666],[102.7549,21.6751],[102.1704,22.4648],[102.707,22.7088],[103.5045,22.7038],[104.4769,22.8192],[105.3292,23.3521],[105.8112,22.9769],[106.7254,22.7943],[106.5673,22.2182],[107.0434,21.8119],[108.0502,21.5524]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"Vietnam","sov_a3":"VNM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Vietnam","adm0_a3":"VNM","geou_dif":0,"geounit":"Vietnam","gu_a3":"VNM","su_dif":0,"subunit":"Vietnam","su_a3":"VNM","brk_diff":0,"name":"Vietnam","name_long":"Vietnam","brk_a3":"VNM","brk_name":"Vietnam","brk_group":"","abbrev":"Viet.","postal":"VN","formal_en":"Socialist Republic of Vietnam","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Vietnam","name_alt":"","mapcolor7":5,"mapcolor8":6,"mapcolor9":5,"mapcolor13":4,"pop_est":86967524,"gdp_md_est":241700,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"VN","iso_a3":"VNM","iso_n3":"704","un_a3":"704","wb_a2":"VN","wb_a3":"VNM","woe_id":-99,"adm0_a3_is":"VNM","adm0_a3_us":"VNM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"South-Eastern Asia","region_wb":"East Asia & Pacific","name_len":7,"long_len":7,"abbrev_len":5,"tiny":2,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[167.8449,-16.4663],[167.5152,-16.5978],[167.18,-16.16],[167.2168,-15.8918],[167.8449,-16.4663]],[[167.1077,-14.9339],[167.27,-15.74],[167.0012,-15.6146],[166.7932,-15.6688],[166.6499,-15.3927],[166.6291,-14.6265],[167.1077,-14.9339]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":4,"sovereignt":"Vanuatu","sov_a3":"VUT","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Vanuatu","adm0_a3":"VUT","geou_dif":0,"geounit":"Vanuatu","gu_a3":"VUT","su_dif":0,"subunit":"Vanuatu","su_a3":"VUT","brk_diff":0,"name":"Vanuatu","name_long":"Vanuatu","brk_a3":"VUT","brk_name":"Vanuatu","brk_group":"","abbrev":"Van.","postal":"VU","formal_en":"Republic of Vanuatu","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Vanuatu","name_alt":"","mapcolor7":6,"mapcolor8":3,"mapcolor9":7,"mapcolor13":3,"pop_est":218519,"gdp_md_est":988.5,"pop_year":-99,"lastcensus":2009,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"VU","iso_a3":"VUT","iso_n3":"548","un_a3":"548","wb_a2":"VU","wb_a3":"VUT","woe_id":-99,"adm0_a3_is":"VUT","adm0_a3_us":"VUT","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Oceania","region_un":"Oceania","subregion":"Melanesia","region_wb":"East Asia & Pacific","name_len":7,"long_len":7,"abbrev_len":4,"tiny":2,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[53.1086,16.6511],[52.3852,16.3824],[52.1917,15.9384],[52.1682,15.5974],[51.1725,15.1752],[49.5746,14.7088],[48.6792,14.0032],[48.2389,13.9481],[47.9389,14.0072],[47.3545,13.5922],[46.7171,13.3997],[45.8776,13.3478],[45.6251,13.2909],[45.4065,13.0269],[45.1444,12.9539],[44.9895,12.6996],[44.4946,12.7217],[44.1751,12.586],[43.483,12.6368],[43.2229,13.221],[43.2514,13.7676],[43.0879,14.0626],[42.8922,14.8022],[42.6049,15.2133],[42.805,15.262],[42.7024,15.7189],[42.8237,15.9117],[42.7793,16.3479],[43.2184,16.6669],[43.1158,17.0884],[43.3808,17.58],[43.7915,17.32],[44.0626,17.4104],[45.2167,17.4333],[45.4,17.3333],[46.3667,17.2333],[46.75,17.2833],[47,16.95],[47.4667,17.1167],[48.1833,18.1667],[49.1167,18.6167],[52,19],[52.7822,17.3497],[53.1086,16.6511]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Yemen","sov_a3":"YEM","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Yemen","adm0_a3":"YEM","geou_dif":0,"geounit":"Yemen","gu_a3":"YEM","su_dif":0,"subunit":"Yemen","su_a3":"YEM","brk_diff":0,"name":"Yemen","name_long":"Yemen","brk_a3":"YEM","brk_name":"Yemen","brk_group":"","abbrev":"Yem.","postal":"YE","formal_en":"Republic of Yemen","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Yemen, Rep.","name_alt":"","mapcolor7":5,"mapcolor8":3,"mapcolor9":3,"mapcolor13":11,"pop_est":23822783,"gdp_md_est":55280,"pop_year":-99,"lastcensus":2004,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"YE","iso_a3":"YEM","iso_n3":"887","un_a3":"887","wb_a2":"RY","wb_a3":"YEM","woe_id":-99,"adm0_a3_is":"YEM","adm0_a3_us":"YEM","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Asia","region_un":"Asia","subregion":"Western Asia","region_wb":"Middle East & North Africa","name_len":5,"long_len":5,"abbrev_len":4,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[31.521,-29.2574],[31.3256,-29.402],[30.9018,-29.91],[30.6228,-30.4238],[30.0557,-31.1403],[28.9256,-32.172],[28.2198,-32.772],[27.4646,-33.227],[26.4195,-33.615],[25.9097,-33.667],[25.7806,-33.9446],[25.1729,-33.7969],[24.6779,-33.9872],[23.594,-33.7945],[22.9882,-33.9164],[22.5742,-33.8641],[21.5428,-34.2588],[20.6891,-34.4172],[20.0713,-34.7951],[19.6164,-34.8192],[19.1933,-34.4626],[18.8553,-34.4443],[18.4246,-33.9979],[18.3774,-34.1365],[18.2445,-33.8678],[18.2501,-33.2814],[17.9252,-32.6113],[18.2479,-32.4291],[18.2218,-31.6616],[17.5669,-30.7257],[17.0644,-29.8786],[17.0629,-29.876],[16.345,-28.5767],[16.824,-28.0822],[17.2189,-28.3559],[17.3875,-28.7835],[17.8362,-28.8564],[18.4649,-29.0455],[19.0021,-28.9724],[19.8947,-28.4611],[19.8958,-24.7678],[20.1657,-24.918],[20.7586,-25.8681],[20.6665,-26.4775],[20.8896,-26.8285],[21.6059,-26.7265],[22.106,-26.2803],[22.5795,-25.9794],[22.8243,-25.5005],[23.3121,-25.2687],[23.7336,-25.3901],[24.2113,-25.6702],[25.0252,-25.7197],[25.6647,-25.4868],[25.7658,-25.1748],[25.9417,-24.6964],[26.4858,-24.6163],[26.7864,-24.2407],[27.1194,-23.5743],[28.0172,-22.8278],[29.4322,-22.0913],[29.839,-22.1022],[30.3229,-22.2716],[30.6599,-22.1516],[31.1914,-22.2515],[31.6704,-23.659],[31.9306,-24.3694],[31.7524,-25.4843],[31.8378,-25.8433],[31.3332,-25.6602],[31.0441,-25.7315],[30.9497,-26.0226],[30.6766,-26.3981],[30.686,-26.7438],[31.2828,-27.2859],[31.8681,-27.1779],[32.0717,-26.7338],[32.8301,-26.7422],[32.5803,-27.4702],[32.4621,-28.301],[32.2034,-28.7524],[31.521,-29.2574]],[[28.9783,-28.9556],[28.5417,-28.6475],[28.0743,-28.8515],[27.5325,-29.2427],[26.9993,-29.876],[27.7494,-30.6451],[28.1072,-30.5457],[28.2911,-30.2262],[28.8484,-30.0701],[29.0184,-29.7438],[29.3252,-29.2574],[28.9783,-28.9556]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":2,"sovereignt":"South Africa","sov_a3":"ZAF","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"South Africa","adm0_a3":"ZAF","geou_dif":0,"geounit":"South Africa","gu_a3":"ZAF","su_dif":0,"subunit":"South Africa","su_a3":"ZAF","brk_diff":0,"name":"South Africa","name_long":"South Africa","brk_a3":"ZAF","brk_name":"South Africa","brk_group":"","abbrev":"S.Af.","postal":"ZA","formal_en":"Republic of South Africa","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"South Africa","name_alt":"","mapcolor7":2,"mapcolor8":3,"mapcolor9":4,"mapcolor13":2,"pop_est":49052489,"gdp_md_est":491000,"pop_year":-99,"lastcensus":2001,"gdp_year":-99,"economy":"5. Emerging region: G20","income_grp":"3. Upper middle income","wikipedia":-99,"fips_10":"","iso_a2":"ZA","iso_a3":"ZAF","iso_n3":"710","un_a3":"710","wb_a2":"ZA","wb_a3":"ZAF","woe_id":-99,"adm0_a3_is":"ZAF","adm0_a3_us":"ZAF","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Southern Africa","region_wb":"Sub-Saharan Africa","name_len":12,"long_len":12,"abbrev_len":5,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[32.7594,-9.2306],[33.2314,-9.6767],[33.4857,-10.5256],[33.3153,-10.7965],[33.1143,-11.6072],[33.3064,-12.4358],[32.9918,-12.7839],[32.6882,-13.7129],[33.214,-13.9719],[30.1795,-14.7961],[30.2743,-15.5078],[29.5168,-15.6447],[28.9475,-16.0431],[28.8259,-16.3897],[28.4679,-16.4684],[27.5982,-17.2908],[27.0444,-17.938],[26.7068,-17.9612],[26.3819,-17.846],[25.2642,-17.7365],[25.0844,-17.6618],[25.077,-17.5788],[24.6823,-17.3534],[24.0339,-17.2958],[23.215,-17.5231],[22.5625,-16.8985],[21.8878,-16.0803],[21.9339,-12.8984],[24.0161,-12.911],[23.9309,-12.5658],[24.0799,-12.1913],[23.9042,-11.7223],[24.0179,-11.2373],[23.9122,-10.9268],[24.2572,-10.952],[24.3145,-11.2628],[24.7832,-11.2387],[25.4181,-11.3309],[25.7523,-11.785],[26.5531,-11.9244],[27.1644,-11.6087],[27.3888,-12.1327],[28.1551,-12.2725],[28.5236,-12.6986],[28.9343,-13.249],[29.6996,-13.2572],[29.616,-12.1789],[29.3415,-12.3607],[28.6424,-11.9716],[28.3723,-11.7936],[28.4961,-10.7899],[28.6737,-9.6059],[28.4499,-9.1649],[28.7349,-8.5266],[29.0029,-8.407],[30.3461,-8.2383],[30.74,-8.34],[31.1578,-8.5946],[31.5563,-8.762],[32.1919,-8.9304],[32.7594,-9.2306]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Zambia","sov_a3":"ZMB","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Zambia","adm0_a3":"ZMB","geou_dif":0,"geounit":"Zambia","gu_a3":"ZMB","su_dif":0,"subunit":"Zambia","su_a3":"ZMB","brk_diff":0,"name":"Zambia","name_long":"Zambia","brk_a3":"ZMB","brk_name":"Zambia","brk_group":"","abbrev":"Zambia","postal":"ZM","formal_en":"Republic of Zambia","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Zambia","name_alt":"","mapcolor7":5,"mapcolor8":8,"mapcolor9":5,"mapcolor13":13,"pop_est":11862740,"gdp_md_est":17500,"pop_year":-99,"lastcensus":2010,"gdp_year":-99,"economy":"7. Least developed region","income_grp":"4. Lower middle income","wikipedia":-99,"fips_10":"","iso_a2":"ZM","iso_a3":"ZMB","iso_n3":"894","un_a3":"894","wb_a2":"ZM","wb_a3":"ZMB","woe_id":-99,"adm0_a3_is":"ZMB","adm0_a3_us":"ZMB","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":6,"long_len":6,"abbrev_len":6,"tiny":-99,"homepart":1}},{"type":"Feature","geometry":{"type":"Polygon","coordinates":[[[31.1914,-22.2515],[30.6599,-22.1516],[30.3229,-22.2716],[29.839,-22.1022],[29.4322,-22.0913],[28.7947,-21.6395],[28.0214,-21.486],[27.7272,-20.8518],[27.7247,-20.4991],[27.2965,-20.3915],[26.1648,-19.2931],[25.8504,-18.7144],[25.6492,-18.536],[25.2642,-17.7365],[26.3819,-17.846],[26.7068,-17.9612],[27.0444,-17.938],[27.5982,-17.2908],[28.4679,-16.4684],[28.8259,-16.3897],[28.9475,-16.0431],[29.5168,-15.6447],[30.2743,-15.5078],[30.339,-15.8808],[31.1731,-15.8609],[31.6365,-16.072],[31.852,-16.3194],[32.3282,-16.3921],[32.8476,-16.7134],[32.8499,-17.9791],[32.6549,-18.6721],[32.612,-19.4194],[32.7727,-19.7156],[32.6597,-20.3043],[32.5087,-20.3953],[32.245,-21.1165],[31.1914,-22.2515]]]},"properties":{"scalerank":1,"featurecla":"Admin-0 country","labelrank":3,"sovereignt":"Zimbabwe","sov_a3":"ZWE","adm0_dif":0,"level":2,"type":"Sovereign country","admin":"Zimbabwe","adm0_a3":"ZWE","geou_dif":0,"geounit":"Zimbabwe","gu_a3":"ZWE","su_dif":0,"subunit":"Zimbabwe","su_a3":"ZWE","brk_diff":0,"name":"Zimbabwe","name_long":"Zimbabwe","brk_a3":"ZWE","brk_name":"Zimbabwe","brk_group":"","abbrev":"Zimb.","postal":"ZW","formal_en":"Republic of Zimbabwe","formal_fr":"","note_adm0":"","note_brk":"","name_sort":"Zimbabwe","name_alt":"","mapcolor7":1,"mapcolor8":5,"mapcolor9":3,"mapcolor13":9,"pop_est":12619600,"gdp_md_est":9323,"pop_year":0,"lastcensus":2002,"gdp_year":0,"economy":"5. Emerging region: G20","income_grp":"5. Low income","wikipedia":-99,"fips_10":"","iso_a2":"ZW","iso_a3":"ZWE","iso_n3":"716","un_a3":"716","wb_a2":"ZW","wb_a3":"ZWE","woe_id":-99,"adm0_a3_is":"ZWE","adm0_a3_us":"ZWE","adm0_a3_un":-99,"adm0_a3_wb":-99,"continent":"Africa","region_un":"Africa","subregion":"Eastern Africa","region_wb":"Sub-Saharan Africa","name_len":8,"long_len":8,"abbrev_len":5,"tiny":-99,"homepart":1}}],"bbox":[-179.99999999999997,-90.00000000000003,180.00000000000014,83.64513000000001]};
}));


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/google/google.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/google/google.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Google maps</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Maps </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Google maps\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card border-0\">\n        <div\n          class=\" map-canvas\"\n          data-lat=\"40.748817\"\n          data-lng=\"-73.985428\"\n          id=\"map-custom\"\n          style=\"height: 600px;\"\n        ></div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card border-0\">\n        <div\n          class=\" map-canvas\"\n          data-lat=\"40.748817\"\n          data-lng=\"-73.985428\"\n          id=\"map-default\"\n          style=\"height: 600px;\"\n        ></div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/vector/vector.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/vector/vector.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\" header bg-danger pb-6\">\n  <div class=\" container-fluid\">\n    <div class=\" header-body\">\n      <div class=\" row align-items-center py-4\">\n        <div class=\" col-lg-6 col-7\">\n          <h6 class=\" h2 text-white d-inline-block mb-0\">Vector maps</h6>\n\n          <nav\n            aria-label=\"breadcrumb\"\n            class=\" d-none d-md-inline-block ml-md-4\"\n          >\n            <ol class=\" breadcrumb breadcrumb-links breadcrumb-dark\">\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> <i class=\" fas fa-home\"> </i> </a>\n              </li>\n\n              <li class=\" breadcrumb-item\">\n                <a href=\"javascript:void(0)\"> Maps </a>\n              </li>\n\n              <li aria-current=\"page\" class=\" breadcrumb-item active\">\n                Vector maps\n              </li>\n            </ol>\n          </nav>\n        </div>\n\n        <div class=\" col-lg-6 col-5 text-right\">\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\"> New </a>\n\n          <a class=\" btn btn-sm btn-neutral\" href=\"javascript:void(0)\">\n            Filters\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\" container-fluid mt--6\">\n  <div class=\" row\">\n    <div class=\" col\">\n      <div class=\" card\">\n        <div class=\" card-body pt-0\">\n          <div class=\" vector-map\">\n            <dx-vector-map\n              id=\"vector-map\"\n              [bounds]=\"[0, 0, 0, 0]\"\n              (onClick)=\"click($event)\"\n            >\n              <dxo-size [height]=\"600\" [width]=\"950\"> </dxo-size>\n              <dxo-tooltip\n                [enabled]=\"true\"\n                [customizeTooltip]=\"customizeTooltip\"\n              >\n                <dxo-font color=\"#fff\"></dxo-font>\n                <dxo-border [visible]=\"false\"></dxo-border>\n              </dxo-tooltip>\n              <dxi-layer [dataSource]=\"worldMap\" [customize]=\"customizeLayers\">\n              </dxi-layer>\n            </dx-vector-map>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/examples/maps/google/google.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/examples/maps/google/google.component.ts ***!
  \**********************************************************/
/*! exports provided: GoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleComponent", function() { return GoogleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var GoogleComponent = /** @class */ (function () {
    function GoogleComponent() {
    }
    GoogleComponent.prototype.ngOnInit = function () {
        var map = document.getElementById("map-custom");
        var lat = map.getAttribute("data-lat");
        var lng = map.getAttribute("data-lng");
        var myLatlng = new google.maps.LatLng(lat, lng);
        var mapOptions = {
            zoom: 12,
            scrollwheel: false,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [
                {
                    featureType: "administrative",
                    elementType: "labels.text.fill",
                    stylers: [{ color: "#444444" }]
                },
                {
                    featureType: "landscape",
                    elementType: "all",
                    stylers: [{ color: "#f2f2f2" }]
                },
                {
                    featureType: "poi",
                    elementType: "all",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "road",
                    elementType: "all",
                    stylers: [{ saturation: -100 }, { lightness: 45 }]
                },
                {
                    featureType: "road.highway",
                    elementType: "all",
                    stylers: [{ visibility: "simplified" }]
                },
                {
                    featureType: "road.arterial",
                    elementType: "labels.icon",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "transit",
                    elementType: "all",
                    stylers: [{ visibility: "off" }]
                },
                {
                    featureType: "water",
                    elementType: "all",
                    stylers: [{ color: "#5e72e4" }, { visibility: "on" }]
                }
            ]
        };
        map = new google.maps.Map(map, mapOptions);
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            animation: google.maps.Animation.DROP,
            title: "Hello World!"
        });
        var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' +
            "<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>";
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        google.maps.event.addListener(marker, "click", function () {
            infowindow.open(map, marker);
        });
    };
    GoogleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-google",
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./google.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/google/google.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], GoogleComponent);
    return GoogleComponent;
}());



/***/ }),

/***/ "./src/app/examples/maps/maps.module.ts":
/*!**********************************************!*\
  !*** ./src/app/examples/maps/maps.module.ts ***!
  \**********************************************/
/*! exports provided: MapsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsModule", function() { return MapsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var devextreme_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! devextreme-angular */ "./node_modules/devextreme-angular/__ivy_ngcc__/fesm5/devextreme-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _maps_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.routing */ "./src/app/examples/maps/maps.routing.ts");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./google/google.component */ "./src/app/examples/maps/google/google.component.ts");
/* harmony import */ var _vector_vector_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vector/vector.component */ "./src/app/examples/maps/vector/vector.component.ts");









var MapsModule = /** @class */ (function () {
    function MapsModule() {
    }
    MapsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_google_google_component__WEBPACK_IMPORTED_MODULE_7__["GoogleComponent"], _vector_vector_component__WEBPACK_IMPORTED_MODULE_8__["VectorComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_maps_routing__WEBPACK_IMPORTED_MODULE_6__["MapsRoutes"]),
                _components_components_module__WEBPACK_IMPORTED_MODULE_3__["ComponentsModule"],
                devextreme_angular__WEBPACK_IMPORTED_MODULE_4__["DxVectorMapModule"]
            ]
        })
    ], MapsModule);
    return MapsModule;
}());



/***/ }),

/***/ "./src/app/examples/maps/maps.routing.ts":
/*!***********************************************!*\
  !*** ./src/app/examples/maps/maps.routing.ts ***!
  \***********************************************/
/*! exports provided: MapsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsRoutes", function() { return MapsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _google_google_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./google/google.component */ "./src/app/examples/maps/google/google.component.ts");
/* harmony import */ var _vector_vector_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vector/vector.component */ "./src/app/examples/maps/vector/vector.component.ts");



var MapsRoutes = [
    {
        path: "",
        children: [
            {
                path: "google",
                component: _google_google_component__WEBPACK_IMPORTED_MODULE_1__["GoogleComponent"]
            }
        ]
    },
    {
        path: "",
        children: [
            {
                path: "vector",
                component: _vector_vector_component__WEBPACK_IMPORTED_MODULE_2__["VectorComponent"]
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/examples/maps/vector/vector-map.service.ts":
/*!************************************************************!*\
  !*** ./src/app/examples/maps/vector/vector-map.service.ts ***!
  \************************************************************/
/*! exports provided: Country, Countries, Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Country", function() { return Country; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Countries", function() { return Countries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var d3_scale__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! d3-scale */ "./node_modules/d3-scale/src/index.js");



var popScale = Object(d3_scale__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"])()
    .domain([100, 3000])
    .range(["#AAAAAA", "#444444"]);
var Country = /** @class */ (function () {
    function Country() {
    }
    return Country;
}());

var Countries = /** @class */ (function () {
    function Countries() {
    }
    return Countries;
}());

var countries = {
    Russia: { color: popScale(300) },
    Canada: { color: popScale(120) },
    China: { color: popScale(1300) },
    "United States": { color: popScale(2920) },
    Brazil: { color: popScale(550) },
    Australia: { color: popScale(760) },
    India: { color: popScale(200) },
    Argentina: { color: popScale(240) },
    Romania: { color: popScale(600) },
    Algeria: { color: popScale(540) }
};
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.getCountries = function () {
        return countries;
    };
    Service = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Service);
    return Service;
}());



/***/ }),

/***/ "./src/app/examples/maps/vector/vector.component.scss":
/*!************************************************************!*\
  !*** ./src/app/examples/maps/vector/vector.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep #vector-map {\n  min-height: 220px;\n  width: 100%;\n  display: block;\n}\n\n::ng-deep #vector-map > svg > rect {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhhbXBsZXMvbWFwcy92ZWN0b3IvQzpcXFVzZXJzXFxIVUFXRUlcXERvY3VtZW50c1xcdmFuZGV3aWVsZVxcYnJzL3NyY1xcYXBwXFxleGFtcGxlc1xcbWFwc1xcdmVjdG9yXFx2ZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4YW1wbGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNDRjs7QURDQTtFQUNFLGFBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL21hcHMvdmVjdG9yL3ZlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAjdmVjdG9yLW1hcCB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG46Om5nLWRlZXAgI3ZlY3Rvci1tYXAgPiBzdmcgPiByZWN0IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIjo6bmctZGVlcCAjdmVjdG9yLW1hcCB7XG4gIG1pbi1oZWlnaHQ6IDIyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbjo6bmctZGVlcCAjdmVjdG9yLW1hcCA+IHN2ZyA+IHJlY3Qge1xuICBkaXNwbGF5OiBub25lO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/examples/maps/vector/vector.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/examples/maps/vector/vector.component.ts ***!
  \**********************************************************/
/*! exports provided: VectorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VectorComponent", function() { return VectorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! devextreme/dist/js/vectormap-data/world.js */ "./node_modules/devextreme/dist/js/vectormap-data/world.js");
/* harmony import */ var devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _vector_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vector-map.service */ "./src/app/examples/maps/vector/vector-map.service.ts");




var VectorComponent = /** @class */ (function () {
    function VectorComponent(service) {
        this.worldMap = devextreme_dist_js_vectormap_data_world_js__WEBPACK_IMPORTED_MODULE_2__["world"];
        this.countries = service.getCountries();
        this.customizeTooltip = this.customizeTooltip.bind(this);
        this.customizeLayers = this.customizeLayers.bind(this);
        this.click = this.click.bind(this);
    }
    VectorComponent.prototype.customizeTooltip = function (arg) {
        var name = arg.attribute("name");
        return {
            text: name,
            color: "#FFFFFF",
            fontColor: "#000"
        };
    };
    VectorComponent.prototype.customizeLayers = function (elements) {
        var _this = this;
        elements.forEach(function (element) {
            var country = _this.countries[element.attribute("name")];
            if (country) {
                element.applySettings({
                    color: country.color,
                    hoveredColor: country.color,
                    selectedColor: country.color
                });
            }
            else {
                element.applySettings({
                    color: "#e4e4e4",
                    hoveredColor: "#e4e4e4",
                    selectedColor: "#e4e4e4"
                });
            }
        });
    };
    VectorComponent.prototype.click = function (e) {
        var target = e.target;
        if (target && this.countries[target.attribute("name")]) {
            target.selected(!target.selected());
        }
    };
    VectorComponent.prototype.ngOnInit = function () { };
    VectorComponent.ctorParameters = function () { return [
        { type: _vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"] }
    ]; };
    VectorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-vector",
            providers: [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]],
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./vector.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/maps/vector/vector.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./vector.component.scss */ "./src/app/examples/maps/vector/vector.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_vector_map_service__WEBPACK_IMPORTED_MODULE_3__["Service"]])
    ], VectorComponent);
    return VectorComponent;
}());



/***/ })

}]);
//# sourceMappingURL=examples-maps-maps-module.js.map