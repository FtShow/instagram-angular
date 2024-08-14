import { Component, OnInit } from '@angular/core'
import { ValueService } from '../sevice/value.service'

@Component({
  selector: 'inst-comp',
  standalone: true,
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.scss',
})
export class CompComponent implements OnInit {
  vvv = 10

  addValueHandler() {
    console.log('add')
    this.valueService.add()
  }

  constructor(private valueService: ValueService) {}

  ngOnInit(): void {
    this.valueService.value$.subscribe(value => {
      this.vvv = value
    })
  }
}
