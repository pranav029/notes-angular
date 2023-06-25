import { Component, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseConfig } from './data/auth/FirebaseConfig';
import { Resource,Success } from './data/Resource';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  isFabVisible: Boolean = true
  constructor() { }
  ngOnInit(): void {
    this.initializeFirebase()
    this.test()
  }
  test(){
    let inst:Resource<string> = new Success<String>("Pranav");
    if(inst instanceof Success){
      console.log(`Yes ${inst.data}`);
    }else console.log('No')
  }

  toggle(state: Boolean) {
    this.isFabVisible = state
  }

  hideFab() {
    this.isFabVisible = !this.isFabVisible
  }

  private initializeFirebase() {
    initializeApp(FirebaseConfig);
  }
}


