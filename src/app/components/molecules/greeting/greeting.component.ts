import { Component } from '@angular/core';
import { TitleComponent } from "../../atoms/title/title.component";
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'molecule-greeting',
  imports: [TitleComponent, TranslatePipe],
  templateUrl: './greeting.component.html',
  styleUrl: './greeting.component.scss'
})
export class GreetingComponent {

}
