import { Component } from '@angular/core'
import { ChildComponent, Grade } from './child/child.component'
import { JsonPipe, NgForOf } from '@angular/common'

export interface Address {
  city: string
  street: string
  home: number
}

export interface WeekGrades {
  id: number
  gradeItem: number
}

export interface Lessons {
  id: number
  title: string
  weekGrades: WeekGrades[]
}

@Component({
  selector: 'inst-parent',
  standalone: true,
  imports: [ChildComponent, JsonPipe, NgForOf],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  lessons: Lessons[] = [
    {
      id: 0,
      title: 'Math',
      weekGrades: [
        {
          id: 0,
          gradeItem: 5,
        },
        {
          id: 1,
          gradeItem: 3,
        },
        {
          id: 2,
          gradeItem: 4,
        },
      ],
    },
    {
      id: 1,
      title: 'Physic',
      weekGrades: [
        {
          id: 0,
          gradeItem: 1,
        },
        {
          id: 1,
          gradeItem: 67,
        },
        {
          id: 2,
          gradeItem: 2,
        },
      ],
    },
  ]

  getGrade(grade: string) {
    console.log(grade)
  }
}
