import { Component } from '@angular/core'
import { ChildComponent, Grade } from './child/child.component'
import { JsonPipe, NgForOf, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'
import { FormsModule } from '@angular/forms'

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
  imports: [ChildComponent, JsonPipe, NgForOf, NgIf, FormsModule, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  value = ''
}
