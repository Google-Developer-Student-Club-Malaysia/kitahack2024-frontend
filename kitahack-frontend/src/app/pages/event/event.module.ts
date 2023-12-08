import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventRoutingModule } from './event.routes';

// Components
import { EventComponent } from './event.component';

// Services
import { ChapterService } from '../../services/chapter.service';
import { ClientPageService } from '../../services/clientpage.service';
import { ListComponent } from '../../components/list/list.component';
import { NestedListComponent } from '../../components/nested-list/nested-list.component';
import { TableComponent } from '../../components/table/table.component';

@NgModule({
  declarations: [
    EventComponent,
    ListComponent,
    NestedListComponent,
    TableComponent,
  ],
  imports: [CommonModule, EventRoutingModule],
  providers: [ChapterService, ClientPageService],
})
export class EventModule {}
