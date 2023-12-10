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
import { CodeComponent } from '../../components/code/code.component';
import { AttachesComponent } from '../../components/attaches/attaches.component';
import { CheckListComponent } from '../../components/check-list/check-list.component';
import { DelimiterComponent } from '../../components/delimiter/delimiter.component';
import { HeaderComponent } from '../../components/header/header.component';
import { LinkToolComponent } from '../../components/link-tool/link-tool.component';
import { PersonalityComponent } from '../../components/personality/personality.component';
import { QuoteComponent } from '../../components/quote/quote.component';
import { WarningComponent } from '../../components/warning/warning.component';

@NgModule({
  declarations: [
    EventComponent,
    ParagraphComponent,
    ImageComponent,
    ListComponent,
    NestedListComponent,
    TableComponent,
    CodeComponent,
    AttachesComponent,
    CheckListComponent,
    DelimiterComponent,
    HeaderComponent,
    LinkToolComponent,
    PersonalityComponent,
    QuoteComponent,
    WarningComponent
  ],
  imports: [CommonModule, EventRoutingModule],
  providers: [ChapterService, ClientPageService],
})
export class EventModule { }
