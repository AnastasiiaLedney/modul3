"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _About = _interopRequireDefault(require("./components/About"));

var _Photos = _interopRequireDefault(require("./components/Photos.vue"));
var _fetch = _interopRequireDefault(require("./components/fetch.vue"));
var _PhotoDetaild = _interopRequireDefault(require("./components/PhotoDetaild.vue"));
var _PhotoTemplate = _interopRequireDefault(require("./components/PhotoTemplate.vue"));


function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: [{
    path: "/",
    component: _Photos["default"]
  }, {
    path: "/About",
    component: _About["default"]
  }, {
    path: "/fetch",
    component: _computed["default"]
  },
  {
    path: "/PhotoDetaild",
    component: _PhotoDetaild["default"]
  },
  {
    path: "/PhotoTemplate",
    component: _PhotoTemplate["default"]
  },
]
});
var _default = Router;
exports["default"] = _default;