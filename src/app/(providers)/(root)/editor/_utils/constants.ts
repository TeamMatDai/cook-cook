import type { Level, Recipe } from '@/types/recipe';

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

export const INITIAL_STATE: Recipe = {
  title: '',
  subtitle: '',
  description: '',
  time: 0,
  material: [{ name: '', value: '' }],
  thumbnail: '',
  fileName: '썸네일 이미지를 올려주세요',
  level: 'easy',
  value: ''
};

export const LEVEL_MAP: Record<Level, string> = {
  easy: '초급',
  medium: '중급',
  hard: '고급'
};

export const LEVELS: Level[] = ['easy', 'medium', 'hard'];
