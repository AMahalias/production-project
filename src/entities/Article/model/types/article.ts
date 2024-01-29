import { User } from 'entities/User'

export enum ArticleTypes {
  IT= 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS'
}

export enum ArticleView {
  BIG = 'BIG',
  SMALL = 'SMALL'
}

export enum ArticleTypeBlock {
  TEXT = 'TEXT',
  IMAGE = 'IMAGE',
  CODE = 'CODE'
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleTypeBlock;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleTypeBlock.CODE;
  code: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleTypeBlock.IMAGE;
  src: string;
  title: string;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleTypeBlock.TEXT;
  title?: string;
  paragraphs: string[];
}

export type ArticleBlocks = ArticleTextBlock | ArticleCodeBlock | ArticleImageBlock;

export interface Article {
  id: string;
  title: string;
  subtitle: string;
  user: User;
  img: string;
  views: number;
  createdAt: string;
  type: ArticleTypes[];
  blocks: ArticleBlocks[];
}
