import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  constructor() {}

  onDropdownToggle() {
    document.querySelector('.animated-icon').classList.toggle('open');
  }

  onItemSelect() {
    document.querySelector('#navbarNavAltMarkup').classList.remove('show');
    document.querySelector('.animated-icon').classList.toggle('open');
  }
}
