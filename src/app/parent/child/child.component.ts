import { Component, EventEmitter, Output } from '@angular/core'
import { FormsModule } from '@angular/forms'

export interface Grade {
  math: number
  physic: number
}

@Component({
  selector: 'inst-child',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  name = 'Serega'
  inputGrade = ''

  changeParentTitle() {}

  @Output() senGradeEvent = new EventEmitter<string>()

  senGrade() {
    this.senGradeEvent.emit(this.inputGrade)
    this.inputGrade = ''
  }
}
