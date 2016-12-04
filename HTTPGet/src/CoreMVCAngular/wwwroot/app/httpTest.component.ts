import {Component} from 'angular2/core';
import {HTTPTestService} from './httptest.service';

@Component({
    selector: 'http-test',
    template: '<button (click)="onTestGet()">Test Get Request</button><br/><p>output:{{getData}}</p><button>Test POST Request</button><br/><p>output: {{postData}}</p>',
    providers: [HTTPTestService]
})
export class HTTPTestComponent {
    getData: string;
    postData: string;

    constructor(private _httpService: HTTPTestService) { }
    
    onTestGet() {
        this._httpService.getCurrentTime().subscribe(data => this.getData = JSON.stringify(data), Error => alert(Error),()=>console.log("finished"));
    }
}