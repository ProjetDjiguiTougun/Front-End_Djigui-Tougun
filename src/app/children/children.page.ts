import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { addIcons } from 'ionicons';
import { arrowBackOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-children',
  templateUrl: './children.page.html',
  styleUrls: ['./children.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonicModule, // 👈 indispensable pour <ion-content>, <ion-card>, <ion-button>...
  ],
})
export class ChildrenPage {
  constructor() {
    addIcons({ arrowBackOutline, notificationsOutline });
  }
}
