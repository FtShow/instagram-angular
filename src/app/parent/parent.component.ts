import { Component } from '@angular/core'
import { ChildComponent } from './child/child.component'
import { JsonPipe, NgClass, NgForOf, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common'
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
  imports: [
    ChildComponent,
    JsonPipe,
    NgForOf,
    NgIf,
    FormsModule,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgClass,
    NgStyle,
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  value = ''
  isSuccess = false

  constructor() {
    setInterval(() => {
      this.isSuccess = !this.isSuccess
    }, 1000)
  }
}
