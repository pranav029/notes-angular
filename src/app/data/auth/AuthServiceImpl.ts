import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthService } from "./AuthService";
import { Observable } from "rxjs";
import { Resource, Loading, Success, Failure } from "../Resource";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthServiceImpl extends AuthService {
    auth = getAuth()

    override signUp(email: string, password: string): Observable<Resource<void>> {
        return new Observable((observer) => {
            observer.next(new Loading())
            createUserWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    observer.next(new Success())
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    observer.next(new Failure(errorMessage));
                });
        });
    }

    override isUserLoggedIn(): boolean {
        return this.auth.currentUser != null
    }

    override signIn(email: string, password: string): Observable<Resource<void>> {
        return new Observable((observer) => {
            observer.next(new Loading())
            signInWithEmailAndPassword(this.auth, email, password)
                .then((userCredential) => {
                    observer.next(new Success())
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    observer.next(new Failure(errorMessage))
                });
        })
    }

    override signOut(): Observable<Resource<void>> {
        return new Observable((observer) => {
            observer.next(new Loading())
            this.auth.signOut()
                .then(() => {
                    observer.next(new Success())
                })
                .catch((error) => {
                    observer.next(new Failure(error.errorMessage))
                })
        })
    }

}