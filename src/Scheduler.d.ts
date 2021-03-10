import { VIEW_TYPE } from './constants';

export type ViewType = typeof VIEW_TYPE[keyof typeof VIEW_TYPE];
