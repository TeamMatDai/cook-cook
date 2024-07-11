import { Level } from '../_components/LevelSelector';

export const FORMATS = [
  'size',
  'bold',
  'underline',
  'blockquote',
  'list',
  'link',
  'image',
  'align',
  'color',
  'background'
];

export const LEVEL_MAP: Record<Level, string> = {
  easy: '초급',
  medium: '중급',
  hard: '고급'
};

export const LEVELS: Level[] = ['easy', 'medium', 'hard'];
