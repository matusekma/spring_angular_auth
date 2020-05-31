import { Component } from '@angular/core';
import { AppService } from '../../app.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { resourceURL } from "../../config";

@Component({
    templateUrl: './home.component.html'
})
export class HomeComponent {

    title = 'Demo';
    greeting = null;

    constructor(private app: AppService, private http: HttpClient) {
        http.get('token').subscribe(data => {
            const token = data['token'];
            http.get(resourceURL, { headers: new HttpHeaders().set('X-Auth-Token', token) })
                .subscribe(response => this.greeting = response);
        }, () => { });
    }

    authenticated() {
        return this.app.authenticated;
    }

}