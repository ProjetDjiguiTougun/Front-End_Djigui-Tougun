import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
// Importez addIcons et les icônes nécessaires
import { addIcons } from 'ionicons';
import {
  personCircleOutline,
  notificationsOutline,
  schoolOutline,
  peopleOutline,
  cashOutline,
  barChartOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule],
})
export class HomePage {
  constructor() {
    // Liez les icônes à la page
    addIcons({
      personCircleOutline,
      notificationsOutline,
      schoolOutline,
      peopleOutline,
      cashOutline,
      barChartOutline
    });
  }
}
