import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { UserPage } from './user/user';

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToUser(name){
    this.navCtrl.push(UserPage, {userName:name});
  }

}
