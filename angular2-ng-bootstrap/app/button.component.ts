/**
 * Created by wenpeng.guo on 9/26/16.
 */
import {Component} from '@angular/core';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/button.component.html'
    // styleUrls: ['app/accordion.component.css'],
})

export class ButtonComponent{
    model = {
        left: true,
        middle: false,
        right: false
    };
}