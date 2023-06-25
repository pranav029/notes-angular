import { Component, OnInit } from '@angular/core';

import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseConfig } from './data/auth/FirebaseConfig';
import { Resource, Success } from './data/Resource';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit(): void {
    this.initializeFirebase()
  }

  private initializeFirebase() {
    initializeApp(FirebaseConfig);
  }
}


