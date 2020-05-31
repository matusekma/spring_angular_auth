import {Component} from '@angular/core';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {resourceURL} from "../../config";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {

    title = 'Demo';
    greeting = null;

    constructor(private app: AppService, private http: HttpClient) {
        http.get(resourceURL).subscribe(data => this.greeting = data);
    }

    authenticated() {
        return this.app.authenticated;
    }

}