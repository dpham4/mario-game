/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '../ig/platform.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


console.log(!(function webpackMissingModule() { var e = new Error("Cannot find module '../ig/platform.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
var canvas = document.querySelector("canvas");
var c = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
var gravity = 0.5;

var Player = /*#__PURE__*/function () {
  function Player() {
    _classCallCheck(this, Player);

    this.position = {
      x: 150,
      y: 100
    };
    this.velocity = {
      x: 0,
      y: 0
    };
    this.width = 30;
    this.height = 30;
  }

  _createClass(Player, [{
    key: "draw",
    value: function draw() {
      c.fillStyle = "red";
      c.fillRect(this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;

      if (this.position.y + this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity;
      } else {
        this.velocity.y = 0;
      }
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(x_position, y_position, image) {
    _classCallCheck(this, Platform);

    this.position = {
      x: x_position,
      y: y_position
    };
    this.width = 200;
    this.height = 20;
    this.image = image;
  }

  _createClass(Platform, [{
    key: "draw",
    value: function draw() {
      c.drawImage(this.image, this.position.x, this.position.y);
    }
  }]);

  return Platform;
}();

var image = new Image();
image.src = !(function webpackMissingModule() { var e = new Error("Cannot find module '../ig/platform.png'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
console.log(image);
var player = new Player();
var platforms = [new Platform(300, 650, image), new Platform(500, 500, image), new Platform(700, 350, image)];
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

var animate = function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  player.update();
  platforms.forEach(function (platform) {
    platform.draw(); //Key pressed change left and right for player direction

    if (keys.right.pressed && player.position.x < 600) {
      player.velocity.x = 5;
    } else if (keys.left.pressed && player.position.x > 100) {
      player.velocity.x = -5;
    } else {
      player.velocity.x = 0;

      if (keys.right.pressed) {
        scrollOffset += 5;
        platform.position.x -= 5;
      } else if (keys.left.pressed) {
        scrollOffset -= 5;
        platform.position.x += 5;
      }
    } //Setting hit box for player and platform (Setting platform collision)


    if (player.position.y + player.height <= platform.position.y && player.position.y + player.height + player.velocity.y >= platform.position.y && player.position.x + player.width >= platform.position.x && player.position.x <= platform.position.x + platform.width) {
      player.velocity.y = 0;
    }

    if (scrollOffset > 2000) {
      console.log(scrollOffset);
      console.log("You win");
    }
  });
};

animate();
window.addEventListener("keydown", function (_ref) {
  var keyCode = _ref.keyCode;

  // console.log(keyCode);
  switch (keyCode) {
    case 65:
      // console.log("left")
      keys.left.pressed = true;
      break;

    case 68:
      // console.log("right")
      keys.right.pressed = true;
      break;

    case 83:
      // console.log("down")
      break;

    case 87:
      // console.log("up")
      player.velocity.y -= 10;
      break;
  }
});
window.addEventListener("keyup", function (_ref2) {
  var keyCode = _ref2.keyCode;

  // console.log(keyCode)
  switch (keyCode) {
    case 65:
      // console.log("left")
      keys.left.pressed = false;
      break;

    case 68:
      // console.log("right")
      keys.right.pressed = false;
      break;

    case 83:
      // console.log("down")
      break;

    case 87:
      // console.log("up")
      break;
  }
});

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map