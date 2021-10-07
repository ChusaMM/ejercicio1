import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicedataService } from '../../services/servidata.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  users = [{
    "id": 1,
    "first_name": "Berkie",
    "last_name": "Sherwell",
    "email": "bsherwell0@webs.com",
    "gender": "Polygender",
    "image": "http://dummyimage.com/129x100.png/dddddd/000000"
  }, {
    "id": 2,
    "first_name": "Batsheva",
    "last_name": "Tewkesbury.",
    "email": "btewkesbury1@godaddy.com",
    "gender": "Female",
    "image": "http://dummyimage.com/239x100.png/5fa2dd/ffffff"
  }, {
    "id": 3,
    "first_name": "Sena",
    "last_name": "D'Adamo",
    "email": "sdadamo2@xing.com",
    "gender": "Non-binary",
    "image": "http://dummyimage.com/130x100.png/ff4444/ffffff"
  }, {
    "id": 4,
    "first_name": "Bevan",
    "last_name": "Gandy",
    "email": "bgandy3@google.pl",
    "gender": "Agender",
    "image": "http://dummyimage.com/225x100.png/cc0000/ffffff"
  }, {
    "id": 5,
    "first_name": "Syd",
    "last_name": "Punt",
    "email": "spunt4@sphinn.com",
    "gender": "Male",
    "image": "http://dummyimage.com/248x100.png/5fa2dd/ffffff"
  }, {
    "id": 6,
    "first_name": "Arabel",
    "last_name": "Byllam",
    "email": "abyllam5@census.gov",
    "gender": "Genderfluid",
    "image": "http://dummyimage.com/114x100.png/cc0000/ffffff"
  }, {
    "id": 7,
    "first_name": "Giacopo",
    "last_name": "Witard",
    "email": "gwitard6@wikispaces.com",
    "gender": "Female",
    "image": "http://dummyimage.com/226x100.png/dddddd/000000"
  }, {
    "id": 8,
    "first_name": "Gale",
    "last_name": "Casarino",
    "email": "gcasarino7@themeforest.net",
    "gender": "Agender",
    "image": "http://dummyimage.com/128x100.png/ff4444/ffffff"
  }, {
    "id": 9,
    "first_name": "Shawn",
    "last_name": "Gyenes",
    "email": "sgyenes8@1und1.de",
    "gender": "Genderqueer",
    "image": "http://dummyimage.com/119x100.png/ff4444/ffffff"
  }, {
    "id": 10,
    "first_name": "Rosana",
    "last_name": "Beyn",
    "email": "rbeyn9@bbc.co.uk",
    "gender": "Genderfluid",
    "image": "http://dummyimage.com/169x100.png/5fa2dd/ffffff"
  }];


  constructor(public navCtrl: NavController,public dataService:ServicedataService) {}
    navigatePage(user){
    this.dataService.setData(user);
    this.navCtrl.navigateForward('detalle');

}
}
