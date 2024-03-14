!function(){function t(i){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(i)}System.register(["./leaflet-legacy.fabde539.js"],(function(i,o){"use strict";var e,s=document.createElement("style");return s.textContent='.leaflet-control-locate a{cursor:pointer}.leaflet-control-locate a .leaflet-control-locate-location-arrow{display:inline-block;width:16px;height:16px;margin:7px;background-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>\')}.leaflet-control-locate a .leaflet-control-locate-spinner{display:inline-block;width:16px;height:16px;margin:7px;background-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="black" d="M304 48a48 48 0 1 1-96 0 48 48 0 0 1 96 0zm-48 368a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm208-208a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM96 256a48 48 0 1 0-96 0 48 48 0 0 0 96 0zm13 99a48 48 0 1 0 0 96 48 48 0 0 0 0-96zm294 0a48 48 0 1 0 0 96 48 48 0 0 0 0-96zM109 61a48 48 0 1 0 0 96 48 48 0 0 0 0-96z"/></svg>\');animation:leaflet-control-locate-spin 2s linear infinite}.leaflet-control-locate.active a .leaflet-control-locate-location-arrow{background-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(32, 116, 182)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>\')}.leaflet-control-locate.following a .leaflet-control-locate-location-arrow{background-image:url(\'data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="rgb(252, 132, 40)" d="M445 4 29 195c-48 23-32 93 19 93h176v176c0 51 70 67 93 19L508 67c16-38-25-79-63-63z"/></svg>\')}.leaflet-touch .leaflet-bar .leaflet-locate-text-active{width:100%;max-width:200px;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;padding:0 10px}.leaflet-touch .leaflet-bar .leaflet-locate-text-active .leaflet-locate-icon{padding:0 5px 0 0}.leaflet-control-locate-location circle{animation:leaflet-control-locate-throb 4s ease infinite}@keyframes leaflet-control-locate-throb{0%{stroke-width:1}50%{stroke-width:3;transform:scale(.8)}to{stroke-width:1}}@keyframes leaflet-control-locate-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}\n',document.head.appendChild(s),{setters:[function(t){e=t.r}],execute:function(){var o={exports:{}};
/*!
      Copyright (c) 2016 Dominik Moritz

      This file is part of the leaflet locate control. It is licensed under the MIT license.
      You can find the project at: https://github.com/domoritz/leaflet-locatecontrol
      */!function(i,o){!function(t,o){void 0!==o&&o.L?i.exports=t(L):i.exports=t(e()),void 0!==o&&o.L&&(o.L.Control.Locate=t(L))}((function(i){var o=function(t,o,e){(e=e.split(" ")).forEach((function(e){i.DomUtil[t].call(this,o,e)}))},e=function(t,i){return o("addClass",t,i)},s=function(t,i){return o("removeClass",t,i)},n=i.Marker.extend({initialize:function(t,o){i.Util.setOptions(this,o),this._latlng=t,this.createIcon()},createIcon:function(){var t=this.options,o="";void 0!==t.color&&(o+="stroke:".concat(t.color,";")),void 0!==t.weight&&(o+="stroke-width:".concat(t.weight,";")),void 0!==t.fillColor&&(o+="fill:".concat(t.fillColor,";")),void 0!==t.fillOpacity&&(o+="fill-opacity:".concat(t.fillOpacity,";")),void 0!==t.opacity&&(o+="opacity:".concat(t.opacity,";"));var e=this._getIconSVG(t,o);this._locationIcon=i.divIcon({className:e.className,html:e.svg,iconSize:[e.w,e.h]}),this.setIcon(this._locationIcon)},_getIconSVG:function(t,i){var o=t.radius,e=o+t.weight,s=2*e;return{className:"leaflet-control-locate-location",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(s,'" height="').concat(s,'" version="1.1" viewBox="-').concat(e," -").concat(e," ").concat(s," ").concat(s,'">')+'<circle r="'+o+'" style="'+i+'" /></svg>',w:s,h:s}},setStyle:function(t){i.Util.setOptions(this,t),this.createIcon()}}),a=n.extend({initialize:function(t,o,e){i.Util.setOptions(this,e),this._latlng=t,this._heading=o,this.createIcon()},setHeading:function(t){this._heading=t},_getIconSVG:function(t,i){var o=t.radius,e=t.width+t.weight,s=2*(o+t.depth+t.weight),n="M0,0 l".concat(t.width/2,",").concat(t.depth," l-").concat(e,",0 z"),a="transform: rotate(".concat(this._heading,"deg)");return{className:"leaflet-control-locate-heading",svg:'<svg xmlns="http://www.w3.org/2000/svg" width="'.concat(e,'" height="').concat(s,'" version="1.1" viewBox="-').concat(e/2," 0 ").concat(e," ").concat(s,'" style="').concat(a,'">')+'<path d="'+n+'" style="'+i+'" /></svg>',w:e,h:s}}}),l=i.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPanOrZoom",keepCurrentZoomLevel:!1,initialZoomLevel:!1,getLocationBounds:function(t){return t.bounds},flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView",inViewNotFollowing:"inView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,showCompass:!0,markerClass:n,compassClass:a,circleStyle:{className:"leaflet-control-locate-circle",color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:0},markerStyle:{className:"leaflet-control-locate-marker",color:"#fff",fillColor:"#2A93EE",fillOpacity:1,weight:3,opacity:1,radius:9},compassStyle:{fillColor:"#2A93EE",fillOpacity:1,weight:0,color:"#fff",opacity:1,radius:9,width:9,depth:6},followCircleStyle:{},followMarkerStyle:{},followCompassStyle:{},icon:"leaflet-control-locate-location-arrow",iconLoading:"leaflet-control-locate-spinner",iconElementTag:"span",textElementTag:"small",circlePadding:[0,0],metric:!0,createButtonCallback:function(t,o){var e=i.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",t);e.title=o.strings.title,e.href="#",e.setAttribute("role","button");var s=i.DomUtil.create(o.iconElementTag,o.icon,e);void 0!==o.strings.text&&(i.DomUtil.create(o.textElementTag,"leaflet-locate-text",e).textContent=o.strings.text,e.classList.add("leaflet-locate-text-active"),e.parentNode.style.display="flex",o.icon.length>0&&s.classList.add("leaflet-locate-icon"));return{link:e,icon:s}},onLocationError:function(t,i){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(o){for(var e in o)"object"===t(this.options[e])?i.extend(this.options[e],o[e]):this.options[e]=o[e];this.options.followMarkerStyle=i.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=i.extend({},this.options.circleStyle,this.options.followCircleStyle),this.options.followCompassStyle=i.extend({},this.options.compassStyle,this.options.followCompassStyle)},onAdd:function(t){var o=i.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._container=o,this._map=t,this._layer=this.options.layer||new i.LayerGroup,this._layer.addTo(t),this._event=void 0,this._compassHeading=null,this._prevBounds=null;var e=this.options.createButtonCallback(o,this.options);return this._link=e.link,this._icon=e.icon,i.DomEvent.on(this._link,"click",(function(t){i.DomEvent.stopPropagation(t),i.DomEvent.preventDefault(t),this._onClick()}),this).on(this._link,"dblclick",i.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),o},_onClick:function(){this._justClicked=!0;var t=this._isFollowing();if(this._userPanned=!1,this._userZoomed=!1,this._active&&!this._event)this.stop();else if(this._active){var i=this.options.clickBehavior,o=i.outOfView;switch(this._map.getBounds().contains(this._event.latlng)&&(o=t?i.inView:i.inViewNotFollowing),i[o]&&(o=i[o]),o){case"setView":this.setView();break;case"stop":if(this.stop(),this.options.returnToPrevBounds)(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},stopFollowing:function(){this._userPanned=!0,this._updateContainerStyle(),this._drawMarker()},_activate:function(){if(!this._active&&this._map&&(this._map.locate(this.options.locateOptions),this._map.fire("locateactivate",this),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this),this._map.on("zoomstart",this._onZoom,this),this._map.on("zoomend",this._onZoomEnd,this),this.options.showCompass)){var t="ondeviceorientationabsolute"in window;if(t||"ondeviceorientation"in window){var o=this,e=function(){i.DomEvent.on(window,t?"deviceorientationabsolute":"deviceorientation",o._onDeviceOrientation,o)};DeviceOrientationEvent&&"function"==typeof DeviceOrientationEvent.requestPermission?DeviceOrientationEvent.requestPermission().then((function(t){"granted"===t&&e()})):e()}}},_deactivate:function(){this._active&&this._map&&(this._map.stopLocate(),this._map.fire("locatedeactivate",this),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this),this._map.off("zoomstart",this._onZoom,this),this._map.off("zoomend",this._onZoomEnd,this),this.options.showCompass&&(this._compassHeading=null,"ondeviceorientationabsolute"in window?i.DomEvent.off(window,"deviceorientationabsolute",this._onDeviceOrientation,this):"ondeviceorientation"in window&&i.DomEvent.off(window,"deviceorientation",this._onDeviceOrientation,this)))},setView:function(){if(this._drawMarker(),this._isOutsideMapBounds())this._event=void 0,this.options.onLocationOutsideMapBounds(this);else if(this._justClicked&&!1!==this.options.initialZoomLevel)(t=this.options.flyTo?this._map.flyTo:this._map.setView).bind(this._map)([this._event.latitude,this._event.longitude],this.options.initialZoomLevel);else if(this.options.keepCurrentZoomLevel){(t=this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude])}else{var t=this.options.flyTo?this._map.flyToBounds:this._map.fitBounds;this._ignoreEvent=!0,t.bind(this._map)(this.options.getLocationBounds(this._event),{padding:this.options.circlePadding,maxZoom:this.options.initialZoomLevel||this.options.locateOptions.maxZoom}),i.Util.requestAnimFrame((function(){this._ignoreEvent=!1}),this)}},_drawCompass:function(){if(this._event){var t=this._event.latlng;if(this.options.showCompass&&t&&null!==this._compassHeading){var i=this._isFollowing()?this.options.followCompassStyle:this.options.compassStyle;this._compass?(this._compass.setLatLng(t),this._compass.setHeading(this._compassHeading),this._compass.setStyle&&this._compass.setStyle(i)):this._compass=new this.options.compassClass(t,this._compassHeading,i).addTo(this._layer)}!this._compass||this.options.showCompass&&null!==this._compassHeading||(this._compass.removeFrom(this._layer),this._compass=null)}},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var t,o,e=this._event.accuracy,s=this._event.latlng;if(this.options.drawCircle){var n=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(s).setRadius(e).setStyle(n):this._circle=i.circle(s,e,n).addTo(this._layer)}if(this.options.metric?(t=e.toFixed(0),o=this.options.strings.metersUnit):(t=(3.2808399*e).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){var a=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(s),this._marker.setStyle&&this._marker.setStyle(a)):this._marker=new this.options.markerClass(s,a).addTo(this._layer)}this._drawCompass();var l=this.options.strings.popup;function r(){return"string"==typeof l?i.Util.template(l,{distance:t,unit:o}):"function"==typeof l?l({distance:t,unit:o}):l}this.options.showPopup&&l&&this._marker&&this._marker.bindPopup(r())._popup.setLatLng(s),this.options.showPopup&&l&&this._compass&&this._compass.bindPopup(r())._popup.setLatLng(s)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_setCompassHeading:function(t){!isNaN(parseFloat(t))&&isFinite(t)?(t=Math.round(t),this._compassHeading=t,i.Util.requestAnimFrame(this._drawCompass,this)):this._compassHeading=null},_onCompassNeedsCalibration:function(){this._setCompassHeading()},_onDeviceOrientation:function(t){this._active&&(t.webkitCompassHeading?this._setCompassHeading(t.webkitCompassHeading):t.absolute&&t.alpha&&this._setCompassHeading(360-t.alpha))},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"untilPanOrZoom":this._userPanned||this._userZoomed||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&!this._ignoreEvent&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_onZoom:function(){this._event&&!this._ignoreEvent&&(this._userZoomed=!0,this._updateContainerStyle(),this._drawMarker())},_onZoomEnd:function(){this._event&&this._drawCompass(),this._event&&!this._ignoreEvent&&this._marker&&!this._map.getBounds().pad(-.3).contains(this._marker.getLatLng())&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:"untilPanOrZoom"===this.options.setView?!this._userPanned&&!this._userZoomed:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&(this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng))},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(s(this._container,"active following"),e(this._container,"requesting"),s(this._icon,this.options.icon),e(this._icon,this.options.iconLoading)):"active"==t?(s(this._container,"requesting following"),e(this._container,"active"),s(this._icon,this.options.iconLoading),e(this._icon,this.options.icon)):"following"==t&&(s(this._container,"requesting"),e(this._container,"active following"),s(this._icon,this.options.iconLoading),e(this._icon,this.options.icon))},_cleanClasses:function(){i.DomUtil.removeClass(this._container,"requesting"),i.DomUtil.removeClass(this._container,"active"),i.DomUtil.removeClass(this._container,"following"),s(this._icon,this.options.iconLoading),e(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1,this._userZoomed=!1}});return i.control.locate=function(t){return new i.Control.Locate(t)},l}),window)}(o);i("L",o.exports)}}}))}();
