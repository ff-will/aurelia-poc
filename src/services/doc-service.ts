import { WebAPI } from './web-api';
import { Doctor } from '../model/doctor';
import { inject } from 'aurelia-framework';

/* This is probably an unnecessary abstraction layer between the components, that are actually using the data and the WebAPI class, that delivers the data */
@inject(WebAPI)
export class DocService {
    constructor(private api: WebAPI) { }
    
    getDoctors(docType: string, name: string): Promise<Doctor[]> {
        return this.api.getDoctors(docType, name);
    }

}