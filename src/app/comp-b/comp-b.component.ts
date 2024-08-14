import { Component, OnInit } from '@angular/core'
import { ValueService } from '../sevice/value.service'
import { Observable } from 'rxjs'
import { BeautyLoggerService } from '../sevice/beauty-logger.service'
import { AsyncPipe } from '@angular/common'

@Component({
  selector: 'inst-comp-b',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.scss',
})
export class CompComponentB implements OnInit {
  vvv$ = new Observable()

  decValueHandler() {
    this.beautyLoggerService.log('add', 'error')
    this.valueService.dec()
  }

  constructor(
    private valueService: ValueService,
    private beautyLoggerService: BeautyLoggerService
  ) {}

  ngOnInit(): void {
    this.vvv$ = this.valueService.value$
  }
}
