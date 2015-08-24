'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var Shell = (function () {
    function Shell() {
        _classCallCheck(this, Shell);
    }

    //# sourceMappingURL=shell.js.map

    _createClass(Shell, [{
        key: 'configureRouter',
        value: function configureRouter(config, router) {
            config.title = "My book designer";
            config.map([{ route: 'designer/1/properties', name: 'bookProperties', moduleId: 'bookDesigner/properties/properties', nav: true, title: 'Properties' }, { route: 'designer/1/layout', name: 'bookLayout', moduleId: 'bookDesigner/layout/layout', nav: true, title: 'Layout' }]);
            this.router = router;
        }
    }, {
        key: 'navigate',
        value: function navigate(href) {
            this.router.navigate(href);
        }
    }]);

    return Shell;
})();

exports.Shell = Shell;

//# sourceMappingURL=shell-compiled.js.map