export enum AlignmentType {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

export enum ListType {
  UNORDERED = 'unordered',
  ORDERED = 'ordered',
}

export interface Block<T> {
  id: string;
  type: string;
  data: T;
}

export interface BlockData {}

export interface BlockDataHeader extends BlockData {
  text: string;
  level: number;
}

export interface BlockDataImage extends BlockData {
  file: {
    url: string;
  };
  caption: string;
  withBorder: boolean;
  stretched: boolean;
  withBackground: boolean;
}

export interface BlockDataDelimiter extends BlockData {}

export interface BlockDataPersonality extends BlockData {
  name: string;
  description: string;
  link: string;
  photo: string;
}

export interface BlockDataAttaches extends BlockData {
  file: {
    url: string;
  };
  title: string;
}

export interface BlockDataParagraph extends BlockData {
  text: string;
}

export interface BlockDataCode extends BlockData {
  code: string;
  language: string;
  showlinenumbers: boolean;
}

export interface BlockDataRaw extends BlockData {
  html: string;
}

export interface BlockDataQuote extends BlockData {
  text: string;
  caption: string;
  alignment: AlignmentType;
}

export interface BlockDataList extends BlockData {
  style: ListType;
  items: string[];
}

export interface BlockDataNestedList extends BlockData {
  style: ListType;
  items: {
    content: string;
    items: {
      content: string;
      items: {
        content: string;
        items: string[];
      }[];
    }[];
  }[];
}

export interface BlockDataChecklist extends BlockData {
  items: {
    text: string;
    checked: boolean;
  }[];
}

export interface BlockDataWarning extends BlockData {
  title: string;
  message: string;
}

export interface BlockDataTable extends BlockData {
  withHeadings: boolean;
  content: string[][];
}

export interface BlockDataLinkTool extends BlockData {
  link: string;
  meta: {
    title: string;
    description?: string;
    image?: {
      url: string;
    };
  };
}
