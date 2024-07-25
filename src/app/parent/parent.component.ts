import { Component } from '@angular/core'
import { ChildComponent, Grade } from './child/child.component'
import { JsonPipe, NgForOf } from '@angular/common'

export interface Address {
  city: string
  street: string
  home: number
}

@Component({
  selector: 'inst-parent',
  standalone: true,
  imports: [ChildComponent, JsonPipe, NgForOf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  grades: string[] = ['math: 5', 'eng: 2']

  getGrade(grade: string) {
    this.grades.push(grade)
  }
}
