import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event.routes';

import 'prismjs/plugins/line-numbers/prism-line-numbers.min.js';
import 'prismjs/plugins/toolbar/prism-toolbar.min.js';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js';
import 'prismjs/plugins/show-language/prism-show-language.min.js';
import 'prismjs/plugins/autolinker/prism-autolinker.min.js';
import 'prismjs/plugins/match-braces/prism-match-braces.min.js';
import 'prismjs/plugins/previewers/prism-previewers.min.js';
import 'prismjs/components/';

// Services
import { ChapterService } from '../../services/chapter.service';
import { ClientPageService } from '../../services/clientpage.service';

// Components
import { EventComponent } from './event.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ParagraphComponent } from '../../components/paragraph/paragraph.component';
import { ImageComponent } from '../../components/image/image.component';
import { DelimiterComponent } from '../../components/delimiter/delimiter.component';
import { PersonalityComponent } from '../../components/personality/personality.component';
import { AttachesComponent } from '../../components/attaches/attaches.component';
import { CodeComponent } from '../../components/code/code.component';
import { QuoteComponent } from '../../components/quote/quote.component';
import { ListComponent } from '../../components/list/list.component';
import { NestedListComponent } from '../../components/nested-list/nested-list.component';
import { CheckListComponent } from '../../components/check-list/check-list.component';
import { WarningComponent } from '../../components/warning/warning.component';
import { TableComponent } from '../../components/table/table.component';
import { LinkToolComponent } from '../../components/link-tool/link-tool.component';

@NgModule({
  declarations: [
    EventComponent,
    HeaderComponent,
    ParagraphComponent,
    ImageComponent,
    DelimiterComponent,
    PersonalityComponent,
    AttachesComponent,
    CodeComponent,
    QuoteComponent,
    ListComponent,
    NestedListComponent,
    CheckListComponent,
    TableComponent,
    WarningComponent,
    LinkToolComponent,
  ],
  imports: [CommonModule, EventRoutingModule],
  providers: [ChapterService, ClientPageService],
})
export class EventModule {}
