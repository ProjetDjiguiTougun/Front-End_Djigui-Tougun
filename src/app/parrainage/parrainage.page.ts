import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular/standalone';
import {
  arrowBackOutline,
  notificationsOutline,
  chevronDownOutline,
  checkmarkOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-parrainage',
  templateUrl: './parrainage.page.html',
  styleUrls: ['./parrainage.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonicModule]
})
export class ParrainagePage implements OnInit {

  constructor() {
     addIcons({
      arrowBackOutline,
      notificationsOutline,
      chevronDownOutline,
      checkmarkOutline
    });
  }

  ngOnInit() {
  }

}
