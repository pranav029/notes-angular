import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NotesServiceImpl } from './NotesServiceImpl';
import { NotesService } from './NotesService'



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: NotesService, useExisting: NotesServiceImpl }]
})
export class DataModule { }
