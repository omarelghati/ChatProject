import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../../services/autentification.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    wrong: boolean = false;
    constructor(private auth: AuthentificationService, private router: Router) {

    }

    ngOnInit() {
        this.auth.checkCredentials();
      //this.auth.getUsers().subscribe(response => console.log(response)); 
    }

    onSignin(form: NgForm) {
        this.auth.SignIn(form.value.username, form.value.password).subscribe((res) => {
            if (res == "UserNotFound")
                this.wrong = true;
            else {
                console.log(res);
                localStorage.setItem('currentUser', JSON.stringify(res));
                console.log(res.requestSent);
                this.router.navigate(["/home"]);
            }
        }
            );
    }
}
