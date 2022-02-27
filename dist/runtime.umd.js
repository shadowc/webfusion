!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.JsFusion=e():t.JsFusion=e()}(self,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};t.r(e),t.d(e,{Component:()=>w,Runtime:()=>A});var n,o=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]},i=function(){function t(){this.attributes={}}return t.prototype.registerAttributeHandler=function(t,e){if(this.attributes[t])throw r("Initialization Error: Callback for attribute ".concat(t," already registered. You can only register one callback per attribute type. Try registering another attribute!")),"Attribute callback initialization error.";this.attributes[t]=e},t}(),a=function(){function t(t){this.parent=t}return t.prototype.handleAttribute=function(t,e){},t}(),p=function(t,e){var n=t.getAttribute(e),r=n?n.trim():"";o("Parsing attribute ".concat(e,' for value "').concat(r,'"'));try{return JSON.parse(r)}catch(t){return r.split(" ")}},c=function(t){if(!Array.isArray(t))throw r("Invalid data when trying to parse data-component attribute",t),"Syntax error data-component.";return t.forEach((function(e){if("string"!=typeof e)throw r("Invalid data when trying to parse data-component attribute",t),"Syntax error data-component."})),t},s=(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return s(e,t),e.prototype.handleAttribute=function(t,e){var n=this;c(p(e,t)).forEach((function(t){n.parent.registerComponentElement(t,e)}))},e}(a),f=function(t,e){var n=[];return e.forEach((function(e){e.node===t&&n.push({name:e.name,component:e.component,node:t})})),n},l=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),h=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return l(e,t),e.prototype.handleAttribute=function(t,e){var n,i=p(e,t);if(o("Attempting to add props to a component for ".concat(t,"."),e,i),!e.hasAttribute("data-component"))throw r("Error: Prop attributes must be declared in the same element that defines the component."),"data-props attribute doesn't belong to a component element";if(Array.isArray(i))throw r("Prop attributes has to be of type Object. It was parsed as an Array.",i),"Syntax error data-props.";var a=c(p(e,"data-component"));a.length>1&&Object.keys(i).forEach((function(t){if(-1===a.indexOf(t))throw r("Error: Prop attributes must be declared in the same element that defines the component. Elements with multiple components must have props defined for each of its components."),"data-props attribute doesn't belong to a component element."}));var s=f(e,this.parent.componentRegistry),u=1===s.length?((n={})[s[0].name]=i,n):i;s.forEach((function(t){var e=u[t.name];Object.keys(e).forEach((function(n){var o=t.component.propTypes[n];if(void 0!==o){if(!(o.type===String&&"string"==typeof e[n]||o.type===Boolean&&"boolean"==typeof e[n]||o.type===Number&&"number"==typeof e[n]||o.type===Array&&Array.isArray(e[n])||o.type instanceof Object&&e[n]instanceof Object))throw r("Invalid prop type for ".concat(n,"."),o,e[n]),"Invalid prop-type.";t.component.createProp(n,e[n])}})),Object.keys(t.component.propTypes).forEach((function(e){if(!0===t.component.propTypes[e].required&&void 0===t.component.props[e])throw r("The prop ".concat(e," is required but hasn't been defined! Consider adding a default value.")),"Required prop not defined."}))}))},e}(a),y=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),b=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return y(e,t),e.prototype.handleAttribute=function(t,e){var n=p(e,t);o("Attempting to bind a value to an element for ".concat(t),e,n)},e}(a),d=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),m=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return d(e,t),e.prototype.handleAttribute=function(t,e){var n=p(e,t);o("Attempting to bind an event to an element for ".concat(t),e,n)},e}(a),v=function(){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},t(e,n)};return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}(),g=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return v(e,t),e.prototype.handleAttribute=function(t,e){var n=p(e,t);o("Attempting to add a ref to a component for ".concat(t),e,n)},e}(a),O=function(t,e){var n=[];return t.forEach((function(t){if(t instanceof Element){var o=f(t,e);o.length>0?o.forEach((function(t){n.push(t.component)})):t.childNodes.length&&O(t.childNodes,e).forEach((function(t){n.push(t)}))}})),n},w=function(){function t(t,e){this.componentRegistry=e,this.element=t,this.props={},this.propTypes={},this.setPropTypes(),this.initializePropTypes()}return t.prototype.setPropTypes=function(){},t.prototype.initializePropTypes=function(){var t=this;Object.keys(this.propTypes).forEach((function(e){t.propTypes[e].required&&void 0!==t.propTypes[e].defaultValue&&t.createProp(e,t.propTypes[e].defaultValue)}))},Object.defineProperty(t.prototype,"children",{get:function(){var t=this.element.childNodes;return O(t,this.componentRegistry)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parents",{get:function(){for(var t,e=this.element.parentElement,n=function(){if((t=f(e,o.componentRegistry)).length>0){var n={};return t.forEach((function(t){n[t.name]=t.component})),{value:n}}e=e.parentElement},o=this;e&&"html"!==e.nodeName.toLowerCase();){var r=n();if("object"==typeof r)return r.value}return null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"parent",{get:function(){for(var t,e=this.element.parentElement;e&&"html"!==e.nodeName.toLowerCase();){if((t=f(e,this.componentRegistry)).length>0)return t[0].component;e=e.parentElement}return null},enumerable:!1,configurable:!0}),t.prototype.createProp=function(t,e){void 0===this.props[t]?(o("Creating prop ".concat(t),e),this.props[t]=e):this.props[t]=e},t}(),A=function(){function t(){this.version="0.1-alpha1",this.componentRegistry=[],this.components={},this.mutationObserver=new MutationObserver(this.mutationObserverHandler.bind(this)),this.observableAttributes=new i,this.observableAttributes.registerAttributeHandler("data-component",new u(this)),this.observableAttributes.registerAttributeHandler("data-props",new h(this)),this.observableAttributes.registerAttributeHandler("data-bind",new b(this)),this.observableAttributes.registerAttributeHandler("data-on",new m(this)),this.observableAttributes.registerAttributeHandler("data-ref",new g(this))}return t.prototype.mutationObserverHandler=function(t){t.forEach((function(t){o(t)}))},t.prototype.start=function(){var t=this,e=Object.keys(this.observableAttributes.attributes);e.forEach((function(e){document.body.querySelectorAll("*["+e+"]").forEach((function(n){t.observableAttributes.attributes[e].handleAttribute(e,n)}))})),this.mutationObserver.observe(document.body,{attributes:!0,attributeFilter:e,attributeOldValue:!0,childList:!0,subtree:!0})},t.prototype.registerComponent=function(t,e){o('Registering component "'.concat(t,'" for general use.')),void 0===this.components[t]&&(this.components[t]=e)},t.prototype.registerComponentElement=function(t,e){if(o('Registering component "'.concat(t,'" on'),e),void 0===this.components[t])throw r('The component "'.concat(t,"\" is not registered in JsFusion. Did you forget to run Runtime.registerComponent('").concat(t,"', MyComponentClass)?")),"Error while instantiating component";var n=this.components[t];this.componentRegistry.forEach((function(n){if(n.node===e&&n.name===t)throw r('The component "'.concat(t,'" has been already instantiated for ').concat(e,"!")),"Error while instantiating component"})),this.componentRegistry.push({name:t,component:new n(e,this.componentRegistry),node:e})},t}();return e})()}));