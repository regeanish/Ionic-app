import { Component, OnInit } from '@angular/core';
import { NavParams, NavController } from 'ionic-angular';

@Component({
    selector: 'page-user',
    templateUrl: 'user.html'
})


export class UserPage implements OnInit {
    name:string;

    constructor(
        private navCtrl:NavController,
        private navParams: NavParams
    ) { }

    ngOnInit() {
        
        // get complete data or object
        //this.name = this.navParams.data;

        // OR use get for objects
        this.name = this.navParams.get('userName');
    }

    getUserBack(){

        // pop the current page to previous page
       // this.navCtrl.pop();

        // pop to root
        this.navCtrl.popToRoot();
    }

    


}