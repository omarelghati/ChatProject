import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/autentification.service';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-friends',
    templateUrl: './friends.component.html',
    styleUrls: ['./friends.component.css']
})
export class FriendsComponent  {
    users: any[];
    curentUser: any;
    sent: any[];
    received: any[];
    friends: any[];
    showSent: boolean = true;
    showReceived: boolean = false;
    constructor(private auth: AuthentificationService, private user: UserService, private route: Router) {

    }
    switch() {
        this.showReceived = !this.showReceived;
        this.showSent = !this.showSent;
    }
    ngOnInit() {
        var local = localStorage.getItem('currentUser');
        this.auth.checkCredentials();
        if (local != null)
            this.curentUser = JSON.parse(local);
        this.user.getFriends(this.curentUser.id).subscribe((r) => { this.received = r.received; this.sent = r.sent; this.friends = r.friends; console.log(r); });
        this.user.getUsers(this.curentUser.id).subscribe(response => this.users = response);
    }
    SendRequest(idReceiver: number) {
        this.user.SendRequest(this.curentUser.id, idReceiver).subscribe(res => console.log(res));
    }
    
}