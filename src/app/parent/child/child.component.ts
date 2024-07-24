import { Component, Input } from '@angular/core'
import { Address } from '../parent.component'

@Component({
  selector: 'inst-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  name = 'Serega'
  @Input() surnameProps?: string
  @Input() address?: Address
}
