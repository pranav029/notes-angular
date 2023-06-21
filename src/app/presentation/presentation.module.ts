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
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { MatDialogModule } from '@angular/material/dialog'



@NgModule({
  declarations: [
    NoteCardComponent,
    CreateComponent,
    HomeComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    DataModule,
    FormsModule,
    MatDialogModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PresentationModule { }
