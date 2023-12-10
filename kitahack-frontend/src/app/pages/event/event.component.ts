import { Component, OnInit } from '@angular/core';
import { ChapterService } from '../../services/chapter.service';
import { ClientPageService } from '../../services/clientpage.service';
import { ClientPage } from '../../types/clientpage.type';
import { ActivatedRoute, Router } from '@angular/router';
import { ChapterType } from '../../types/chapter.type';
import {
  Block,
  BlockDataAttaches,
  BlockDataChecklist,
  BlockDataCode,
  BlockDataDelimiter,
  BlockDataHeader,
  BlockDataImage,
  BlockDataLinkTool,
  BlockDataList,
  BlockDataNestedList,
  BlockDataParagraph,
  BlockDataPersonality,
  BlockDataQuote,
  BlockDataTable,
  BlockDataWarning,
} from '../../types/blocks.type';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrl: './event.component.css',
})
export class EventComponent implements OnInit {
  chapter: ChapterType | undefined;
  blocks: Block<any>[] = [];
  clientPage: ClientPage | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private chapterService: ChapterService,
    private clientPageService: ClientPageService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.clientPageService.getClientPage(id).subscribe({
          next: (clientPage) => {
            this.chapter = clientPage.chapter;
            this.clientPage = clientPage;

            let blockJson = JSON.parse(clientPage.content);
            let blocks: Block<any>[] = [];
            blockJson.blocks.forEach((block: Block<any>) => {
              switch (block.type) {
                case 'header':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      text: block.data.text,
                      level: block.data.level,
                    } as BlockDataHeader,
                  });
                  break;
                case 'paragraph':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      text: block.data.text,
                    } as BlockDataParagraph,
                  });
                  break;

                case 'image':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      file: {
                        url: block.data.file.url,
                      },
                      caption: block.data.caption,
                      withBorder: block.data.withBorder,
                      stretched: block.data.stretched,
                      withBackground: block.data.withBackground,
                    } as BlockDataImage,
                  });
                  break;

                case 'delimiter':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {} as BlockDataDelimiter,
                  });
                  break;

                case 'personality':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      name: block.data.name,
                      description: block.data.description,
                      link: block.data.link,
                      photo: block.data.photo,
                    } as BlockDataPersonality,
                  });
                  break;

                case 'attaches':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      file: {
                        url: block.data.file.url,
                      },
                      title: block.data.title,
                    } as BlockDataAttaches,
                  });
                  break;

                case 'code':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      code: block.data.code,
                      language: block.data.language,
                      showlinenumbers: block.data.showlinenumbers,
                    } as BlockDataCode,
                  });
                  break;

                case 'quote':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      text: block.data.text,
                      caption: block.data.caption,
                      alignment: block.data.alignment,
                    } as BlockDataQuote,
                  });
                  break;

                case 'list':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      style: block.data.style,
                      items: block.data.items,
                    } as BlockDataList,
                  });
                  break;

                case 'nestedList':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      style: block.data.style,
                      items: block.data.items,
                    } as BlockDataNestedList,
                  });
                  break;

                case 'checklist':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      items: block.data.items,
                    } as BlockDataChecklist,
                  });
                  break;

                case 'warning':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      title: block.data.title,
                      message: block.data.message,
                    } as BlockDataWarning,
                  });
                  break;

                case 'table':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      withHeadings: block.data.withHeadings,
                      content: block.data.content,
                    } as BlockDataTable,
                  });
                  break;

                case 'linkTool':
                  blocks.push({
                    id: block.id,
                    type: block.type,
                    data: {
                      link: block.data.link,
                      meta: block.data.meta,
                    } as BlockDataLinkTool,
                  });
                  break;
              }
            });

            this.blocks = blocks;
          },
          error: (err) => {
            this.router.navigate(['/']);
          },
        });
      }
    });
  }
}
