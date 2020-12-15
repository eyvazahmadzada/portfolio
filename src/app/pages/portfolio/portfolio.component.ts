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
      'ASSMI Trans Logistics LLC',
      'Multi-language and fully responsive website of a logistics company',
      'assmilogistics.png',
      'https://assmilogistics.com/',
      'NextJS'
    ),
    new Project(
      'Netlist',
      'A website to discover movies & tv series and to add them to watchlist.',
      'netlist.png',
      'https://netlist.netlify.app/',
      'Angular 10'
    ),
    new Project(
      'Quiz Game',
      'A website to play quiz game with levels and then to get the results.',
      'gamequizz.png',
      'https://gamequizz.netlify.app/',
      'ReactJS'
    ),
    new Project(
      'Rock, Paper & Scissors Game',
      'A basic website to play Rock, Paper & Scissors Game.',
      'playrps.png',
      'https://playrps.netlify.app/',
      'HTML, CSS, JS'
    ),

    new Project(
      'Car Game',
      'A basic website to play a fully responsive car racing game.',
      'gamecar.png',
      'https://gamecar.netlify.app/',
      'HTML, CSS, JS'
    ),
    new Project(
      'Random Password Generator',
      'A basic website to generate random passwords with any length.',
      'random-pass-generator.png',
      'https://random-pass-generator.netlify.app/',
      'HTML, CSS, JS'
    ),
    new Project(
      'Internship Form',
      'A website to get internship offers from companies.',
      'internship-offers.png',
      'https://internship-offers.netlify.app/',
      'HTML, CSS, jQuery'
    ),
  ];
}
