import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterLink, RouterModule } from '@angular/router';
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
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule,RouterLink],
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
