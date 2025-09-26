import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // ✅ Import global des composants Ionic
import { addIcons } from 'ionicons';
import { home, peopleOutline, cardOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonicModule,   // ✅ permet de reconnaître <ion-tabs>, <ion-tab-bar>, <ion-icon> etc.
    CommonModule,
    FormsModule
  ]
})
export class TabsPage implements OnInit {

  constructor() {
    // ✅ enregistrement des icônes ionicons
    addIcons({ home, peopleOutline, cardOutline, settingsOutline });
  }

  ngOnInit() {}
}
