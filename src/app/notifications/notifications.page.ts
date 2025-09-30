import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton, IonIcon, IonList, IonCard, IonItem, IonLabel, IonFooter, IonTabs, IonTabBar, IonTabButton, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
    IonButton,
    IonIcon,
    IonList,
    IonCard,
    IonItem,
    IonLabel,
    IonFooter,
    IonTabs,
    IonTabBar,
    IonTabButton
  ]
})
export class NotificationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
