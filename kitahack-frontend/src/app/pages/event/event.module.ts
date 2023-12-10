import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event.routes';

// Components
import { EventComponent } from './event.component';

// Services
import { ChapterService } from '../../services/chapter.service';
import { ClientPageService } from '../../services/clientpage.service';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';
import { ImageComponent } from '../../components/image/image.component';
import { ListComponent } from '../../components/list/list.component';
import { NestedListComponent } from '../../components/nested-list/nested-list.component';
import { TableComponent } from '../../components/table/table.component';
import { DelimiterComponent } from '../../components/delimiter/delimiter.component';
import { PersonalityComponent } from '../../components/personality/personality.component';
import { WarningComponent } from '../../components/warning/warning.component';
import { LinkToolComponent } from '../../components/link-tool/link-tool.component';

@NgModule({
  declarations: [
    EventComponent,
    ParagraphComponent,
    ImageComponent,
    DelimiterComponent,
    PersonalityComponent,
    ListComponent,
    NestedListComponent,
    WarningComponent,
    TableComponent,
    LinkToolComponent,
  ],
  imports: [CommonModule, EventRoutingModule],
  providers: [ChapterService, ClientPageService],
})
export class EventModule {}
