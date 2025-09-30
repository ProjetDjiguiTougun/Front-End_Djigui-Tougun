import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  IonContent,
  IonButtons,
  IonBackButton,
  IonInput,
  IonButton,
  IonIcon,
  IonText,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  personOutline,
  lockClosedOutline,
  eyeOffOutline,
  logoGoogle,
  logoFacebook,
  logoXing, // logo-x n'est pas une icône standard, j'utilise logo-xing comme substitut
  logoLinkedin
} from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonContent,
    IonButtons,
    IonBackButton,
    IonInput,
    IonButton,
    IonIcon,
    IonText
  ]
})
export class LoginPage {
  showPassword = false;

  constructor() {
    addIcons({
      personOutline,
      lockClosedOutline,
      eyeOffOutline,
      logoGoogle,
      logoFacebook,
      logoXing,
      logoLinkedin
    });
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
}
