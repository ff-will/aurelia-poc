import { inject } from 'aurelia-framework';
import { Router, RouterConfiguration } from 'aurelia-router';
import { WebAPI } from './services/web-api';

@inject(WebAPI)
export class App {
  router: Router;

  constructor(public api: WebAPI) { }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Hausarzt wechseln';
    config.options.pushState = true;
    config.options.root = '/';
    config.map([
      {route: ['', 'doc-form'],   moduleId: 'components/doc-form/doc-form',     name: 'doc-form', title: 'Ihre Angaben'},
      {route: 'doc-search',       moduleId: 'components/doc-search/doc-search', name: 'doc-search', title: 'Hausarzt-Suche'}      
    ]);

    this.router = router;
  }
}
