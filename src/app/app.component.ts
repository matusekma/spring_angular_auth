import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.styl']
})

export class AppComponent {
    title = 'Demo';
    greeting = null;

    constructor(private http: HttpClient) {
        http.get('resource').subscribe(data => this.greeting = data);
    }
}