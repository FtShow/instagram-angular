import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { FormsModule } from '@angular/forms'
import { CompComponent } from './comp/comp.component'
import { CompComponentB } from './comp-b/comp-b.component'

type iUser = {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CompComponent, CompComponentB],
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
