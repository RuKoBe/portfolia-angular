import { Component } from '@angular/core';
import {TitleComponent} from '../../atoms/title/title.component';
import {TranslatePipe} from "@ngx-translate/core";
import { GreetingComponent } from "../../molecules/greeting/greeting.component";
import { WhoAmIComponent } from "../../organisms/who-am-i/who-am-i.component";

@Component({
  selector: 'page-landing-page',
  imports: [GreetingComponent, WhoAmIComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {

}
