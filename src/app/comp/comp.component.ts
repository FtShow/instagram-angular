import { Component, OnInit } from '@angular/core'
import { ValueService } from '../sevice/value.service'
import { Observable } from 'rxjs'
import { AsyncPipe } from '@angular/common'
import { BeautyLoggerService } from '../sevice/beauty-logger.service'

@Component({
  selector: 'inst-comp',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.scss',
})
export class CompComponent implements OnInit {
  vvv$ = new Observable()

  addValueHandler() {
    this.beautyLoggerService.log('add', 'success')
    this.valueService.add()
  }

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    this.vvv$ = this.valueService.value$
  }
}
