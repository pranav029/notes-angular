import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoteCardComponent } from './note-card/note-card.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'
import { DataModule } from '../data/data.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NoteCardComponent,
    CreateComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DataModule,
    FormsModule
  ],
  exports:[
    HomeComponent
  ]
})
export class PresentationModule { }
