import { Component } from '@angular/core';

export interface Skill {
  name: string;
  value: number;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  skills: Skill[] = [
    { name: 'html', value: 90 },
    { name: 'css', value: 90 },
    { name: 'javascript', value: 80 },
    { name: 'jquery', value: 50 },
    { name: 'bootstrap', value: 90 },
    { name: 'angular', value: 80 },
    { name: 'reactjs', value: 70 },
    { name: 'mysql', value: 80 },
    { name: 'python', value: 65 },
    { name: 'c', value: 70 },
    { name: 'java', value: 50 },
    { name: 'git', value: 70 },
  ];

  onDownloadCV() {
    const link = document.createElement('a');
    const filename = 'Eyvaz_Ahmadzada.pdf';
    const url = '../../assets/files/Eyvaz_Ahmadzada.pdf';
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
