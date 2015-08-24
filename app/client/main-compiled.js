'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});
exports.configure = configure;

function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging();
    aurelia.start().then(function (a) {
        return a.setRoot('./shell/shell');
    });
}

//# sourceMappingURL=main.js.map

//# sourceMappingURL=main-compiled.js.map