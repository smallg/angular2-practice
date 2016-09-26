/**
 * Created by wenpeng.guo on 9/23/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <router-outlet></router-outlet>
        <nav>
            <a routerLink="/dashboard" routerLinkActive="active">Home</a>
            <a routerLink="/accordion" routerLinkActive="active">Accordion</a>
            <a routerLink="/button" routerLinkActive="active">Button</a>
        </nav>
        `,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = 'Angular2 NG Bootstrap';
}