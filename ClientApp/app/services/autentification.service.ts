import { Injectable } from '@angular/core';
import { Http,Headers} from '@angular/http';
import 'rxjs';
import { Router } from '@angular/router';
@Injectable()
export class AuthentificationService {

    constructor(private http: Http, private router: Router) { }
    static id: any;
    SignIn(username:string, password:string) {
        return this.http.post("/api/user/login", { username, password },
                       { headers: new Headers({ 'X-Requested-With': 'XMLHttpRequest' }) })
            .map(res => res.json()).do((r) => {
                this.setId(r.id);
            });
    }

    checkCredentials() {
        if (localStorage.getItem("currentUser") != null) {
            this.router.navigate(['/friends']);
        } 
        else this.router.navigate(['login']);
    }
    getUserData(id:number) {
        return this.http.get("/api/user/getData/"+id)
            .map(res => res);
    }
    getId() { return AuthentificationService.id; }

    setId(v: any) { AuthentificationService.id = v; }

}
