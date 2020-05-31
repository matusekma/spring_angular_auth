import {Component} from '@angular/core';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    templateUrl: './login.component.html'
})
export class LoginComponent {

    error = false;
    credentials = {username: '', password: ''};

    constructor(private app: AppService, private http: HttpClient, private router: Router) {
    }

    login() {
        this.app.authenticate(this.credentials, () => {
            if (this.app.authenticated) {
                this.error = false;
                this.router.navigateByUrl('/');
            } else {
                this.error = true;
            }
        });
        return false;
    }

}