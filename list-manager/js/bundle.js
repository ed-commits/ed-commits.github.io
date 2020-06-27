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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const App = function (context) {\n    this.context = context;\n}\n\nApp.prototype.build_out_array = function() {\n    for (let obj of this.context.persist.array) {\n        this.context.the_list.prepend(this.objectToHTMLElement(obj));\n    }\n}\n\nApp.prototype.make_elt = function(tag, clss, text, parent) {\n    const elt = document.createElement(tag);\n    if (!(clss == null)) {\n        elt.classList.add(clss);\n    }\n    elt.textContent = text;\n    if (!(parent == null)) {\n        parent.appendChild(elt);\n    }\n    return elt;\n}\n\nApp.prototype.objectToHTMLElement = function(obj) {\n    const li_elt = this.make_elt('li');\n    li_elt.setAttribute('id', \"li_\" + obj.id);\n    \n    const div_elt = this.make_elt('div', 'item', null, li_elt);\n    const button_elt = this.make_elt('button', 'collapsible', obj.title, div_elt);\n    const content_elt = this.make_elt('div', 'content', null, div_elt);\n    const details_elt = this.make_elt('textarea', 'details', obj.details, content_elt);\n    details_elt.setAttribute('rows', 15);\n    details_elt.setAttribute('cols', 35);\n\n    button_elt.classList.add('inactive');\n    button_elt.addEventListener('click', toggle_collapse);\n\n    const update_button_elt = this.make_update_button(obj.id, details_elt);\n    content_elt.appendChild(update_button_elt);\n\n    const delete_button_elt = this.make_delete_button(obj.id, this.context.the_list, li_elt);\n    content_elt.appendChild(delete_button_elt);\n\n    return li_elt;\n}\n\nApp.prototype.make_update_button = function(id, textbox) {\n    const button_elt = this.make_elt(\"input\", \"button\");\n    button_elt.setAttribute('type', 'button');\n    button_elt.setAttribute('value', 'Update');\n\n    function update_item(event) {\n        this.context.persist.update_by_id(id, textbox.value);\n    }\n\n    button_elt.addEventListener('click', update_item.bind(this));\n    return button_elt;\n}\n\nApp.prototype.make_delete_button = function(id, parent, child) {\n    // <input class=\"button\" type=\"button\" id=\"export\" value=\"Export\">\n    const button_elt = this.make_elt(\"input\", \"button\");\n    button_elt.setAttribute('type', 'button');\n    button_elt.setAttribute('value', 'Delete');\n\n    function delete_item(event) {\n        // delete by id from the array\n        this.context.persist.delete_by_id(id);\n\n        // delete the HTML element too\n        parent.removeChild(child);\n    }\n\n    button_elt.addEventListener('click', delete_item.bind(this));\n    return button_elt;\n}\n\n// https://www.w3schools.com/howto/howto_js_collapsible.asp\nfunction toggle_collapse(event) {\n    this.classList.toggle(\"active\");\n    this.classList.toggle(\"inactive\");\n    var content = this.nextElementSibling;\n    if (content.style.maxHeight) {\n        content.style.maxHeight = null;\n    } else {\n        content.style.maxHeight = content.scrollHeight + \"px\";\n    }\n}\n\nmodule.exports = App;\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const App = __webpack_require__(/*! ./app.js */ \"./src/app.js\");\nconst Persistence = __webpack_require__(/*! ./persistence.js */ \"./src/persistence.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n    let context = {};\n    const element_names = [\n        'the_form', 'input_title', 'input_details',\n        'submit_button', 'clear_button', 'export_button',\n        'open_all_button', 'close_all_button',\n        'upload_button', 'upload_box', 'the_list'\n    ];\n    element_names.forEach(function (name) {\n        result = document.querySelector('#' + name)\n        if (result == null) { console.error(`Error: ${name} is null!`); }\n        context[name] = result;\n    });\n\n    context.persist = new Persistence();\n    context.app = new App(context);\n    context.app.build_out_array();\n\n    context.submit_button.addEventListener('click', click.bind(context));\n    context.clear_button.addEventListener('click', clear.bind(context));\n    context.export_button.addEventListener('click', export_it.bind(context));\n    context.open_all_button.addEventListener('click', open_all.bind(context));\n    context.close_all_button.addEventListener('click', close_all.bind(context));\n    context.upload_button.addEventListener('click', handle_upload.bind(context));\n});\n\n/////// Button code\n\nfunction click(event) {\n    event.preventDefault();\n\n    const title = this.input_title.value;\n    const details = this.input_details.value;\n    this.the_form.reset();\n\n    const obj = {\n        id: this.persist.array.length,\n        title: title,\n        details: details,\n        date: new Date()\n    };\n    //console.dir(obj);\n\n    this.persist.array.push(obj);\n    this.persist.save();\n    const elt = this.app.objectToHTMLElement(obj);\n    this.the_list.prepend(elt);\n}\n\nfunction clear(event) {\n    this.the_list.innerHTML = null;\n    this.persist.clear();\n}\n\nfunction export_it(event) {\n    downloadObjectAsJson(this.persist.array, \"my_list\");\n}\n\nfunction open_all(event) {\n    const buttons = document.querySelectorAll('button.collapsible.inactive');\n    buttons.forEach(button => button.click());\n}\n\nfunction close_all(event) {\n    const buttons = document.querySelectorAll('button.collapsible.active');\n    buttons.forEach(button => button.click());\n}\n\nfunction handle_upload(event) {\n    this.persist.load(this.upload_box.value);\n    this.persist.save();\n    this.the_list.innerHTML = null;\n    this.app.build_out_array();\n}\n\n\n// https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser\nfunction downloadObjectAsJson(exportObj, exportName) {\n    var dataStr = \"data:text/json;charset=utf-8,\" + encodeURIComponent(JSON.stringify(exportObj));\n    var downloadAnchorNode = document.createElement('a');\n    downloadAnchorNode.setAttribute(\"href\", dataStr);\n    downloadAnchorNode.setAttribute(\"download\", exportName + \".json\");\n    document.body.appendChild(downloadAnchorNode); // required for firefox\n    downloadAnchorNode.click();\n    downloadAnchorNode.remove();\n}\n\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/persistence.js":
/*!****************************!*\
  !*** ./src/persistence.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nconst Persistence = function () {\n    this.array = [];\n    if (localStorage.array !== null) {\n        this.load(localStorage.array);\n    }\n}\n\nPersistence.prototype.save = function() {\n    localStorage.array = JSON.stringify(this.array);\n}\n\nPersistence.prototype.load = function(text) {\n//    console.log(text);\n    try {\n        this.array = JSON.parse(text);\n    }\n    catch (error) { }\n}\n\nPersistence.prototype.clear = function() {\n    this.array = [];\n    localStorage.removeItem('array');\n}\n\nPersistence.prototype.delete_by_id = function(id) {\n    this.array = this.array.filter(obj => obj.id !== id);\n    this.save();\n}\n\nPersistence.prototype.update_by_id = function(id, text) {\n    const index = this.array.findIndex(obj => obj.id == id);\n    this.array[index].details = text;\n    this.save();\n}\n\nmodule.exports = Persistence;\n\n\n//# sourceURL=webpack:///./src/persistence.js?");

/***/ })

/******/ });