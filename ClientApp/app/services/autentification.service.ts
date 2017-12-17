import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs';
@Injectable()
export class AuthentificationService {

    constructor(private http: Http) { }
    getUsers() {
        return this.http.get("api/user/All")
                    .map(response => response.json());
    }
    SignIn(username:string, password:string) {
        return this.http.post("/api/user/login", { username, password },
                       { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
                   .map(res => res.json());
    }

}
