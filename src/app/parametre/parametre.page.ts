import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// ⚡ Import des composants Ionic standalone
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonItem,
  IonLabel,
  IonIcon,
  IonList,
  IonButton,
  IonAvatar,
  IonToggle,
  IonSelect,
  IonSelectOption
} from '@ionic/angular/standalone';

import {
  arrowBackOutline,
  settingsOutline,
  chevronForwardOutline,
  notificationsOutline,
  mailOutline,
  chatbubbleEllipsesOutline,
  chatboxEllipsesOutline,
  globeOutline,
  colorPaletteOutline,
  informationCircleOutline,
  starOutline
} from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-parametre',
  templateUrl: './parametre.page.html',
  styleUrls: ['./parametre.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonItem,
    IonLabel,
    IonIcon,
    IonList,
    IonButton,
    IonAvatar,
    IonToggle,
    IonSelect,
    IonSelectOption
  ]
})
export class ParametrePage implements OnInit {
  constructor() {
    addIcons({
      arrowBackOutline,
      settingsOutline,
      chevronForwardOutline,
      notificationsOutline,
      mailOutline,
      chatbubbleEllipsesOutline,
      chatboxEllipsesOutline,
      globeOutline,
      colorPaletteOutline,
      informationCircleOutline,
      starOutline
    });
  }

  ngOnInit() {}
}
