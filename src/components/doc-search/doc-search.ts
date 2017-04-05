import { Router } from 'aurelia-router';
import { inject } from 'aurelia-framework';

import { Doctor } from '../../model/doctor';
import { DocService } from '../../services/doc-service';
import { StateService } from '../../services/state-service';

@inject(DocService, StateService, Router)
export class DocSearch {
    searchDocType: string;
    searchDocName: string;
    filteredDoctors: Doctor[];
    isRequesting: boolean = false;

    constructor(private docService: DocService, public state: StateService, private router: Router) { }

    filterDoctors(): void {
        this.isRequesting = true;
        this.docService.getDoctors(this.searchDocType, this.searchDocName)
            .then(doctors => {
                this.filteredDoctors = doctors;
                this.isRequesting = false;
            }).catch((reason) => {
                alert("An error occured!");
                console.log("Could not load doctors: ${reason}");
                this.isRequesting = false;
            });
    }

    selectDoctor(doctor: Doctor) {
        this.state.userData['doctor'] = doctor;
        this.router.navigateToRoute("doc-form");
    }

}