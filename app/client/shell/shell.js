export class Shell {
    configureRouter(config, router) {
        config.title = "My book designer";
        config.map([
            { route: ['', 'properties'], name: 'bookProperties', moduleId: 'bookDesigner/properties/properties', nav: true, title: 'Properties' },
            { route: 'layout', name: 'bookLayout', moduleId: 'bookDesigner/layout/layout', nav: true, title: 'Layout' }
        ]);
        this.router = router;
    }
    navigate(href) {
        this.router.navigate(href);
    }
}
//# sourceMappingURL=shell.js.map