export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging();
    aurelia.start().then((a) => a.setRoot('./shell/shell'));
}
//# sourceMappingURL=main.js.map