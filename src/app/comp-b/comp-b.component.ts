import { Component, OnInit } from '@angular/core'
import { ValueService } from '../sevice/value.service'

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
})
export class CompComponentB implements OnInit {
  vvv = 10

  decValueHandler() {
    this.valueService.dec()
  }

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.vvv = this.valueService.value
  }
}
