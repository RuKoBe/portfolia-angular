import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../atoms/title/title.component";
import { TranslatePipe } from '@ngx-translate/core';
import { Tabs } from './enums/tabs.enum';
import { ExperienceTabComponent } from '../../molecules/experience-tab/experience-tab.component';

@Component({
    selector: 'molecule-who-am-i',
    imports: [TitleComponent, TranslatePipe, ExperienceTabComponent],
    templateUrl: './who-am-i.component.html',
    styleUrl: './who-am-i.component.scss'
})
export class WhoAmIComponent {

    selectedTab = signal<Tabs>(Tabs.EXPERIENCE);
    
    readonly TABS = Tabs;

}
