(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react")) : factory(root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _joyrideJs = __webpack_require__(2);
	
	var _joyrideJs2 = _interopRequireDefault(_joyrideJs);
	
	exports.Joyride = _joyrideJs2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by mac on 16/5/9.
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _pagerJs = __webpack_require__(4);
	
	var _pagerJs2 = _interopRequireDefault(_pagerJs);
	
	__webpack_require__(9);
	
	var Overlay = (function (_Component) {
	    _inherits(Overlay, _Component);
	
	    _createClass(Overlay, null, [{
	        key: 'propTypes',
	        value: {
	            //
	            steps: _react.PropTypes.array,
	            holePadding: _react.PropTypes.number,
	            tooltipMargin: _react.PropTypes.number
	        },
	        enumerable: true
	    }]);
	
	    function Overlay(props, context) {
	        _classCallCheck(this, Overlay);
	
	        _Component.call(this, props, context);
	        this.state = {
	            index: 0
	        };
	    }
	
	    Overlay.prototype.resizeListener = function resizeListener() {
	        if (this.state.index != -1) {
	            this.renderOverlay();
	        }
	    };
	
	    Overlay.prototype.componentDidMount = function componentDidMount() {
	        this.renderOverlay();
	        window.addEventListener('resize', this.resizeListener.bind(this));
	    };
	
	    Overlay.prototype.componentWillUnmount = function componentWillUnmount() {
	        window.removeEventListener('resize', this.resizeListener.bind(this));
	    };
	
	    Overlay.prototype.nextStep = function nextStep() {
	        var steps = this.props.steps;
	        var index = this.state.index;
	
	        index += 1;
	        if (index >= steps.length) {
	            this.close();
	        } else {
	            this.setState({
	                index: index
	            });
	        }
	    };
	
	    Overlay.prototype.componentDidUpdate = function componentDidUpdate() {
	        this.renderOverlay();
	    };
	
	    Overlay.prototype.getDimension = function getDimension(el) {
	        var elemRect = el.getBoundingClientRect();
	        return {
	            top: elemRect.top + window.scrollY,
	            left: elemRect.left + window.scrollX,
	            width: el.clientWidth,
	            height: el.clientHeight
	        };
	    };
	
	    Overlay.prototype.renderOverlay = function renderOverlay() {
	        var _props = this.props;
	        var steps = _props.steps;
	        var holePadding = _props.holePadding;
	        var tooltipMargin = _props.tooltipMargin;
	        var index = this.state.index;
	        var hole = this.refs.hole;
	        var holeStyle = hole.style;
	        var tooltip = this.refs.tooltip;
	        var tooltipStyle = tooltip.style;
	        var currentStep = steps[index];
	        var stepDom = document.querySelectorAll(currentStep.selector)[0];
	        var stepPosition = currentStep.position || 'bottom';
	        tooltip.className = 'joyride-tooltip';
	        tooltipStyle.opacity = 0;
	        //hole
	        var holeDimension = this.getDimension(stepDom),
	            holeLeft = holeDimension.left - holePadding,
	            holeTop = holeDimension.top - holePadding,
	            holeWidth = holeDimension.width + 2 * holePadding,
	            holeHeight = holeDimension.height + 2 * holePadding;
	
	        holeStyle.left = holeLeft + 'px';
	        holeStyle.top = holeTop + 'px';
	        holeStyle.width = holeWidth + 'px';
	        holeStyle.height = holeHeight + 'px';
	
	        //tooltip 不考虑冲突，只考虑用户设置的position
	        var tooltipDimension = this.getDimension(tooltip),
	            tooltipTop = 0,
	            tooltipLeft = 0,
	            tooltipWidth = tooltipDimension.width,
	            tooltipHeight = tooltipDimension.height;
	
	        //可视窗口的上下边界
	        var topLine = window.scrollY,
	            bottomline = topLine + window.innerHeight,
	            overlayTopLine = holeTop,
	            overlayBottomLine = holeTop + (tooltipHeight > holeHeight ? tooltipHeight : holeHeight);
	
	        switch (stepPosition) {
	            case 'top':
	                tooltipTop = holeTop - tooltipMargin - tooltipHeight;
	                tooltipLeft = holeLeft;
	                overlayTopLine = tooltipTop;
	                overlayBottomLine = holeTop + holeHeight;
	                //TODO
	                break;
	            case 'bottom':
	                tooltipTop = holeTop + holeHeight + tooltipMargin;
	                tooltipLeft = holeLeft;
	                overlayTopLine = holeTop;
	                overlayBottomLine = tooltipTop + tooltipHeight;
	                //TODO
	                break;
	            case 'left':
	                tooltipLeft = holeLeft - tooltipMargin - tooltipWidth;
	                tooltipTop = holeTop;
	                //TODO
	                break;
	            case 'right':
	                tooltipLeft = holeLeft + holeWidth + tooltipMargin;
	                tooltipTop = holeTop;
	                //TODO
	                break;
	        }
	        tooltipStyle.left = tooltipLeft + 'px';
	        tooltipStyle.top = tooltipTop + 'px';
	
	        //scroll up or down
	        if (overlayTopLine < topLine || overlayBottomLine > bottomline) {
	            window.scrollTo(0, overlayTopLine);
	        }
	        tooltip.className = 'joyride-tooltip animate';
	        requestAnimationFrame(function () {
	            tooltipStyle.opacity = 1;
	        });
	    };
	
	    Overlay.prototype.changePage = function changePage(index) {
	        this.setState({
	            index: index
	        });
	    };
	
	    Overlay.prototype.close = function close() {
	        this.setState({
	            index: -1
	        });
	    };
	
	    Overlay.prototype.open = function open(index) {
	        var steps = this.props.steps;
	
	        if (index >= 0 && index < steps.length) {
	            this.setState({
	                index: index
	            });
	        }
	    };
	
	    Overlay.prototype.render = function render() {
	        var steps = this.props.steps;
	        var index = this.state.index;
	        var currentStep = steps[index] || {};
	        if (index == -1) {
	            return null;
	        } else {
	            return _react2['default'].createElement(
	                'div',
	                { className: 'eg-joyride-container' },
	                _react2['default'].createElement('div', { ref: 'hole',
	                    className: 'joyride-hole' }),
	                _react2['default'].createElement(
	                    'div',
	                    { ref: 'tooltip', className: 'joyride-tooltip' },
	                    _react2['default'].createElement(
	                        'div',
	                        null,
	                        currentStep.title
	                    ),
	                    _react2['default'].createElement(
	                        'div',
	                        null,
	                        _react2['default'].createElement(
	                            'div',
	                            { className: 'btn-list' },
	                            _react2['default'].createElement(
	                                'span',
	                                { onClick: this.close.bind(this) },
	                                '跳过'
	                            ),
	                            _react2['default'].createElement(
	                                'span',
	                                { onClick: this.nextStep.bind(this) },
	                                index == steps.length - 1 ? '关闭' : '下一步'
	                            )
	                        ),
	                        _react2['default'].createElement(_pagerJs2['default'], { total: steps.length, current: index, changeCallback: this.changePage.bind(this) })
	                    )
	                )
	            );
	        }
	    };
	
	    _createClass(Overlay, null, [{
	        key: 'defaultProps',
	        value: {
	            holePadding: 5,
	            tooltipMargin: 10
	        },
	        enumerable: true
	    }]);
	
	    return Overlay;
	})(_react.Component);
	
	exports['default'] = Overlay;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(3);
	
	var _react2 = _interopRequireDefault(_react);
	
	__webpack_require__(5);
	
	var Pager = (function (_Component) {
	    _inherits(Pager, _Component);
	
	    _createClass(Pager, null, [{
	        key: 'propTypes',
	        value: {
	            //
	            total: _react.PropTypes.number,
	            current: _react.PropTypes.number,
	            changeCallback: _react.PropTypes.func
	
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            total: 0,
	            current: 0,
	            changeCallback: function changeCallback() {}
	        },
	        enumerable: true
	    }]);
	
	    function Pager(props, context) {
	        _classCallCheck(this, Pager);
	
	        _Component.call(this, props, context);
	    }
	
	    Pager.prototype.render = function render() {
	        var _props = this.props;
	        var total = _props.total;
	        var current = _props.current;
	        var _this = this;
	        var pageList = [];
	
	        var _loop = function (index) {
	            pageList.push(_react2['default'].createElement('i', { onClick: function () {
	                    if (index == current) {
	                        return;
	                    }
	                    _this.props.changeCallback(index);
	                },
	                className: index == current ? 'active' : '' }));
	        };
	
	        for (var index = 0; index < total; index++) {
	            _loop(index);
	        }
	        return _react2['default'].createElement(
	            'div',
	            { className: 'eg-pager-container' },
	            pageList
	        );
	    };
	
	    return Pager;
	})(_react.Component);
	
	exports['default'] = Pager;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(6);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./pager.less", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./pager.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".eg-pager-container {\n  text-align: center;\n}\n.eg-pager-container i {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  border: 1px solid #aaa;\n  margin-right: 5px;\n  cursor: pointer;\n}\n.eg-pager-container i:last-child {\n  margin-right: 0;\n}\n.eg-pager-container i.active {\n  background: #333;\n  border-color: #333;\n}\n", ""]);
	
	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}
	
	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(10);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!../node_modules/css-loader/index.js!../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(7)();
	// imports
	
	
	// module
	exports.push([module.id, ".eg-joyride-container {\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  z-index: 1500;\n}\n.eg-joyride-container .joyride-hole {\n  border-radius: 4px;\n  box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 0, 0, 0.5);\n  position: absolute;\n  width: 100px;\n  height: 100px;\n}\n.eg-joyride-container .animate {\n  transition-duration: 1s;\n  transition-property: opacity;\n}\n.eg-joyride-container .joyride-tooltip {\n  background-color: #fff;\n  border-radius: 4px;\n  color: #555;\n  cursor: default;\n  padding: 20px 20px 5px 20px;\n  pointer-events: auto;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n  width: 290px;\n  position: absolute;\n  opacity: 0;\n  top: 0;\n  left: 0;\n  z-index: 1510;\n}\n.eg-joyride-container .joyride-tooltip .btn-list {\n  font-size: 13px;\n  margin: 20px 0 5px 0;\n}\n.eg-joyride-container .joyride-tooltip .btn-list > span {\n  display: inline-block;\n  padding: 5px 15px;\n  border: 1px solid #ddd;\n  border-radius: 2px;\n}\n.eg-joyride-container .joyride-tooltip .btn-list > span:last-child {\n  float: right;\n}\n", ""]);
	
	// exports


/***/ }
/******/ ])
});
;