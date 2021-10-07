import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ServicedataService } from '../../services/servidata.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
dataUser: any;

  constructor(public navCtrl: NavController,public dataService:ServicedataService) {
   this.dataUser=this.dataService.getData();
   console.log('datos en detalles:' + JSON.stringify(this.dataUser));
   }

  ngOnInit() {
  }
  navigatePage(){
    this.navCtrl.navigateBack('home');
   }
}
