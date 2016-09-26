/**
 * Created by wenpeng.guo on 9/21/16.
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {routing} from './app.routing';

import {AppComponent} from './app.component';
import {DashboardComponent} from "./dashboard.component";
import {AccordionComponent} from "./accordion.component";
import {ButtonComponent} from "./button.component";

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        NgbModule,
        routing
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        AccordionComponent,
        ButtonComponent
    ],
    bootstrap: [AppComponent]
})

export class AppModule {
}