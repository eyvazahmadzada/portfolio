import { Component, OnInit } from '@angular/core';
import { Project } from '../../shared/project.model';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  isIndividual = true;
  displayedProjects: Project[];
  projects: Project[] = [
    new Project(
      'ASSMI Trans Logistics LLC',
      'Multi-language and fully responsive website of a logistics company',
      'assmilogistics.png',
      'https://assmilogistics.com/',
      'NextJS',
      true
    ),
    new Project(
      'Netlist',
      'A website to discover movies & tv series and to add them to watchlist.',
      'netlist.png',
      'https://netlist.netlify.app/',
      'Angular',
      true
    ),
    new Project(
      'Codenames',
      'A website for playing the game Codenames online',
      'codenames.png',
      'https://codenamesclient.vercel.app/',
      'Figma (UI/UX Design), NextJS, Socket.IO',
      true
    ),
    new Project(
      'User Manager',
      'A website for a user management system',
      'u-manager.png',
      'https://u-manager.netlify.app/',
      'Angular, Reqres API',
      true
    ),
    new Project(
      'Quiz Game',
      'A website to play quiz game with levels and then to get the results.',
      'gamequizz.png',
      'https://gamequizz.netlify.app/',
      'ReactJS',
      true
    ),
    new Project(
      'MySKYL',
      'A website to display, analyze and insert weather records.',
      'myskyl.png',
      'http://eyvazahmadzada.alwaysdata.net/myskyl/',
      'HTML, CSS, JS, PHP, MySQL',
      true
    ),
    new Project(
      'Rock, Paper & Scissors Game',
      'A basic website to play Rock, Paper & Scissors Game.',
      'playrps.png',
      'https://playrps.netlify.app/',
      'HTML, CSS, JS',
      true
    ),
    new Project(
      'Car Game',
      'A basic website to play a fully responsive car racing game.',
      'gamecar.png',
      'https://gamecar.netlify.app/',
      'HTML, CSS, JS',
      true
    ),
    new Project(
      'OBA Market',
      'Website of the biggest market chain in Azerbaijan.',
      'oba.png',
      'https://obaz.az/',
      'HTML, CSS, jQuery',
      false
    ),
    new Project(
      'FS Poster',
      'Website of one of the most famous WordPress auto posters',
      'fs-poster.png',
      'https://fs-poster.com/',
      'HTML, CSS, jQuery, Laravel',
      false
    ),
    new Project(
      'Booknetic',
      'Website of one of the most famous WordPress booking plugins',
      'booknetic.png',
      'https://fs-poster.com/',
      'HTML, CSS, jQuery, Laravel',
      false
    )
  ];

  ngOnInit() {
    this.filterProjects();
  }

  onTabClicked(e) {
    this.isIndividual = (e.target as Element).innerHTML.trim() === "Individual";
    this.filterProjects();
  }

  filterProjects() {
    this.displayedProjects = this.projects.filter(project => project.isIndividual === this.isIndividual);
  }
}
