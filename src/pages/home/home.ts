import { DetailsPage } from './../details/details';
import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AppServices } from '../../providers/app-services';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  category: string;
  items: any;
  country: any;

  constructor(public navCtrl: NavController, private _appServices: AppServices) {

  }

  ngOnInit() {
    if (localStorage.getItem('category') != null) {
      this.category = localStorage.getItem('category');
      this.country = localStorage.getItem('country');
    } else {
      this.category = 'sports';
      this.country = 'us';
    }
    this.getPosts(this.category, this.country);
  }

  private getPosts(category: string, country: string) {
    this._appServices.getPosts(category, country).subscribe(response => {
      console.log('Response:', response);
      this.items = response.articles;
    });
  }

  viewItem(item) {
    console.log('item', item)
    this.navCtrl.push(DetailsPage, {
      item: item
    });
    console.log(this.navCtrl)
  }

  changeCategory() {
    console.log("hello")
    this.getPosts(this.category, this.country);
  }

  changeCountry() {
    this.getPosts(this.category, this.country);
  }

}
