import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SongComponent } from './song.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SongComponent],
  exports: [SongComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CommonModule,

  ]
})
export class SongModule {}
/*

import { RouterModule } from '@angular/router';

*/
