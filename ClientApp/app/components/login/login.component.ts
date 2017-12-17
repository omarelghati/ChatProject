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
      this.auth.getUsers().subscribe(response => console.log(response)); 
  }

  onSignin(form: NgForm) {
      this.auth.SignIn(form.value.username, form.value.password).subscribe((res) => {
          if (res == "UserNotFound")
              this.wrong = true;
          else
              this.router.navigate(["/home"]);
      }
          );
  }

}
