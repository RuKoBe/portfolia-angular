import { Component, inject } from '@angular/core';
import { TitleComponent } from "../../atoms/title/title.component";
import { TranslatePipe, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'molecule-experience-tab',
  imports: [TitleComponent, TranslatePipe],
  templateUrl: './experience-tab.component.html',
  styleUrl: './experience-tab.component.scss'
})
export class ExperienceTabComponent {

  private translateService: TranslateService = inject(TranslateService);

  readonly WORKPLACES: string[] = ['swisscom', 'noseryoung'];

  getSkills(workplace: string): string[] {
    return this.translateService.instant(`i18n.landing-page.who-am-i.experience.workplaces.${workplace}.skills`).split(',');
  }

}
