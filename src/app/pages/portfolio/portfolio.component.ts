import { Component } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  projects: Project[] = [
    {
      name: 'Ecommerce Website',
      about: 'A basic ecommerce project with authentication feature.',
      image: 'ecommerce.png',
      link: 'https://web-ecommerce.netlify.app/',
      tech: 'Angular 9',
    },
    {
      name: 'To Do App',
      about:
        'A website to create, delete tasks, mark them as done when needed.',
      image: 'todo.png',
      link: 'https://web-todo-app.netlify.app/',
      tech: 'HTML, CSS, jQuery',
    },
    {
      name: 'Random Password Generator',
      about: 'A basic website to generate random passwords with any length.',
      image: 'passgenerator.png',
      link: 'https://random-pass-generator.netlify.app/',
      tech: 'HTML, CSS, Javascript',
    },
    {
      name: 'Internship Form',
      about: 'A website to get internship offers from companies.',
      image: 'internshipform.png',
      link: 'https://internship-offers.netlify.app/',
      tech: 'HTML, CSS, jQuery',
    },
    {
      name: 'Rock, Paper & Scissors Game',
      about: 'A basic website to play Rock, Paper & Scissors Game.',
      image: 'rpsgame.png',
      link: 'https://playrps.netlify.app/',
      tech: 'HTML, CSS, JS',
    },
  ];
}
