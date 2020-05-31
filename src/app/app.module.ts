import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppService} from './app.service';
import {HomeComponent} from './home.component';
import {LoginComponent} from './login.component';
import {AppComponent} from './app.component';
import {AppRoutingModule} from "./app-routing.module";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {
}