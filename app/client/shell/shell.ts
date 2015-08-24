import {Router} from "aurelia-router";
import {RouterConfiguration} from "aurelia-router";

export class Shell {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "My book designer";

        config.map([
            { route: ['','properties'], name: 'bookProperties', moduleId: 'bookDesigner/properties/properties', nav: true, title:'Properties' },
            { route: 'layout', name: 'bookLayout', moduleId: 'bookDesigner/layout/layout', nav: true, title:'Layout' }

        ]);

        this.router = router;


    }

    navigate(href: string) {
        this.router.navigate(href);
    }
}