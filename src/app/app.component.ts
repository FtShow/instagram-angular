import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { Test1Component } from './test1/test1.component'
import { Test2Component } from './test2/test2.component'
import { FormsModule } from '@angular/forms'

type iUser = {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Test1Component, Test2Component],
  templateUrl: './app.component.html',
  styleUrl: 'app.component.scss',
})
export class AppComponent {
  appTitle: string = 'instagram-angular'
  user: iUser = {
    age: 32,
    name: 'Ivan',
  }
  text = ''
}
