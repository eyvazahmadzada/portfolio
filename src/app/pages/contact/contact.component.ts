import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../../services/contact.service';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  isLoading = false;

  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(form: HTMLFormElement) {
    const userData = new User(
      form.value.name,
      form.value.email,
      form.value.message
    );
    this.isLoading = true;
    this.contactService.formSubmitted = true;
    this.contactService
      .sendMessage(userData)
      .then((res) => {
        console.log(res);
        this.isLoading = false;
        this.router.navigate(['/success']);
      })
      .catch((error) => {
        console.log(error);
        this.isLoading = false;
        this.router.navigate(['/error']);
      });
    form.reset();
  }
}
