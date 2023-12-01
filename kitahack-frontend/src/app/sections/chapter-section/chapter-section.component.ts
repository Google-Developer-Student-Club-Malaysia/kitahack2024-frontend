import { Component, OnInit } from '@angular/core';

import { ChapterType } from '../../types/chapter.type';
import { ChapterService } from '../../services/chapter.service';

@Component({
  selector: 'app-chapter-section',
  templateUrl: './chapter-section.component.html',
  styleUrl: './chapter-section.component.css',
})
export class ChapterSectionComponent implements OnInit {
  chapters: ChapterType[] = [];

  constructor(private chapterService: ChapterService) {}

  ngOnInit(): void {
    this.chapterService.getList().subscribe({
      next: (chapters) => {
        this.chapters = chapters;
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
