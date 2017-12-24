import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app',
    templateUrl: './logout.component.html',
    styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
    showNav: boolean = true;
    constructor(private router: Router) {
        localStorage.clear();
        this.router.navigate(['/login']);
    }
}
