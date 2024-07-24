import { Component } from '@angular/core'
import { RouterOutlet } from '@angular/router'

import { FormsModule } from '@angular/forms'
import { ParentComponent } from './parent/parent.component'

type iUser = {
  age: number
  name: string
}

@Component({
  selector: 'inst-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ParentComponent],
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
