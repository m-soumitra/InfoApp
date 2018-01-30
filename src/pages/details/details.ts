import { NavController, NavParams } from 'ionic-angular';
import { Component } from '@angular/core';

@Component({
    templateUrl:'details.html'
})
export class DetailsPage {
    item: any;

    constructor(public navController: NavController, public navParams: NavParams) {
        this.item = navParams.get('item');
        console.log(this.item)
    }
}