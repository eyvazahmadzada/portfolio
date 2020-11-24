import { Component } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    new Project(
      'Rock, Paper & Scissors Game',
      'A basic website to play Rock, Paper & Scissors Game.',
      'rpsgame.png',
      'https://playrps.netlify.app/',
      'HTML, CSS, JS'
    ),

    new Project(
      'Car Game',
      'A basic website to play a fully responsive car racing game.',
      'cargame.png',
      'https://gamecar.netlify.app/',
      'HTML, CSS, JS'
    ),
    new Project(
      'Netlist',
      'A website to discover movies and tv series and add them to watchlist.',
      'netlist.png',
      'https://netlist.netlify.app/',
      'Angular 10'
    ),
    // new Project(
    //   'Ecommerce Website',
    //   'A basic ecommerce project with authentication feature.',
    //   'ecommerce.png',
    //   'https://web-ecommerce.netlify.app/',
    //   'Angular 9'
    // ),
    new Project(
      'To Do App',

      'A website to create, delete tasks, mark them as done when needed.',
      'todo.png',
      'https://web-todo-app.netlify.app/',
      'HTML, CSS, jQuery'
    ),
    new Project(
      'Random Password Generator',
      'A basic website to generate random passwords with any length.',
      'passgenerator.png',
      'https://random-pass-generator.netlify.app/',
      'HTML, CSS, JS'
    ),
    new Project(
      'Internship Form',
      'A website to get internship offers from companies.',
      'internshipform.png',
      'https://internship-offers.netlify.app/',
      'HTML, CSS, jQuery'
    ),
  ];
}
