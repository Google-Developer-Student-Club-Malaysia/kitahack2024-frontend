import { ChapterType } from "./chapter.type";

export interface ClientPage {
  id: string;
  name: string;
  order: number;
  url: string;
  content: string;
  chapter: ChapterType;
  is_deleted: boolean;
  created_at: Date;
  updated_at: Date;
}
