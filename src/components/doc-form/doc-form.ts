import { inject } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { StateService } from '../../services/state-service';

@inject(Router, StateService)
export class DocForm {
  constructor(public router: Router, public state: StateService) { }

/*  switch() {
    this.router.navigateToRoute("doc-search")
  }
*/}