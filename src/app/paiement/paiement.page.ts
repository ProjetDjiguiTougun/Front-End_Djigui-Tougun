import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  notificationsOutline,
  chevronDownOutline,
  cardOutline,
  checkmarkCircle
} from 'ionicons/icons';

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule, // 👈 indispensable pour <ion-content>, <ion-card>, <ion-button>...
  ],
})
export class PaiementPage {
  constructor() {
    addIcons({
      arrowBackOutline,
      notificationsOutline,
      chevronDownOutline,
      cardOutline,
      checkmarkCircle
    });
  }
}
