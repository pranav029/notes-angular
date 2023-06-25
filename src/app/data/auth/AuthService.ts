import { Observable } from "rxjs";
import { Resource } from "../Resource";

export abstract class AuthService{
    abstract isUserLoggedIn():boolean
    abstract signIn(email:string,password:string):Observable<Resource<void>>
    abstract signUp(email:string,password:string):Observable<Resource<void>>
    abstract signOut():Observable<Resource<void>>
}