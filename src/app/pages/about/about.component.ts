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
    { name: 'html', value: 95 },
    { name: 'css', value: 95 },
    { name: 'javascript', value: 90 },
    { name: 'bootstrap', value: 90 },
    { name: 'angular', value: 90 },
    { name: 'reactjs / redux', value: 90 },
    { name: 'nextjs', value: 90 },
    { name: 'react native', value: 80 },
    { name: 'figma', value: 85 },
    { name: 'mysql', value: 80 },
    { name: 'php', value: 70 },
    { name: 'python', value: 75 },
    { name: 'c', value: 70 },
    { name: 'git', value: 80 },
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
