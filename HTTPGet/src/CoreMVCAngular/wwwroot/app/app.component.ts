import {Component} from 'angular2/core';
import {HTTPTestComponent} from './httptest.component';

@Component({
    selector: 'core-app',
    template: '<h3>Welcome to .NET Core 1.0 + MVC6 + Angular 2</h3><http-test></http-test>',
    directives: [HTTPTestComponent]
})
export class AppComponent { }