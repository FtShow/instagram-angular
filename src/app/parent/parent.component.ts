import { Component } from '@angular/core'
import { ChildComponent } from './child/child.component'

export interface Address {
  city: string
  street: string
  home: number
}

@Component({
  selector: 'inst-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.scss',
})
export class ParentComponent {
  name = 'Ivan'
  surname = 'Parent'
  address: Address = {
    city: 'Moscow',
    street: 'Street',
    home: 49,
  }
  old?: number

  parentFunc(e: number) {
    this.old = e
  }
}
