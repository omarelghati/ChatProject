import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../../services/autentification.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    showNav: boolean = true;
    logoutConfirm: boolean = false;
    constructor(private router: Router, private auth: AuthentificationService) {
        this.router.events.subscribe(t => {
            if (this.router.url == '/login')
                this.showNav = false;
            else this.showNav = true;
        }); 
    }
    ngOnInit() {
        this.auth.checkCredentials();
    }
}
