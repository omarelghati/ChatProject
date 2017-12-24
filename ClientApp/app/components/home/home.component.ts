import { Component } from '@angular/core';
import { AuthentificationService } from '../../services/autentification.service';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls : ['./home.component.css']
})
export class HomeComponent {
    users: any[];
    curentUser: any;
   
    constructor(private auth: AuthentificationService, private user: UserService, private route: Router) {
        console.log(this.route.url);
        
    }
    ngOnInit() {
        var local = localStorage.getItem('currentUser');
        this.auth.checkCredentials();
        if (local != null)
            this.curentUser = JSON.parse(local);

        this.user.getUsers(this.curentUser.id).subscribe(response => this.users = response);
    }
    SendRequest(idReceiver: number) {
        this.user.SendRequest(this.curentUser.id, idReceiver).subscribe(res => console.log(res));
        //console.log(idReceiver);
    }
    logout() {
        localStorage.clear();
        this.route.navigate(["/login"]);
    }


}