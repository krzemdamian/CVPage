import { Component, OnInit } from '@angular/core';
import { SkillModel } from '../skillModel';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skills: SkillModel[];

  constructor() { }

  ngOnInit() {
    this.skills = [
      { name: 'C#', rating: 3 },
      { name: '.Net Framework', rating: 3 },
      { name: 'Unit Tests', rating: 2 },
      { name: 'Visual Studio', rating: 3},
      { name: 'Solid Principals', rating: 3 },
      { name: 'Design Patterns', rating: 2 },
      { name: 'Angular', rating: 2 },
      { name: 'Python', rating: 2 },
      { name: 'Jenkins', rating: 2 },
      { name: 'Docker', rating: 2 },
      { name: 'Microsoft Office', rating: 4 },
      { name: 'Driving License', rating: 4 },
      { name: 'Communication Skills', rating: 4 },
      { name: 'Ability to work in team', rating: 4 },
    ]
  }

}
