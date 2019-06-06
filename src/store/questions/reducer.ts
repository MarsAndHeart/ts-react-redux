// 存放所有问题及其选项

import { Action } from 'redux';

interface IOption {
  id: string;
  text: string;
}

interface IQuestion {
  questionid: string;
  parentid: string;
  grade: string;
  text: string;
  age?: string;
  sex?: string;
  options: IOption[];
}

export interface IUpdateQuestionsAction extends Action {
  payload: IQuestion[];
}
const questions = (state: IQuestion[] = [], action: IUpdateQuestionsAction) => {
  if (action.type === 'questions/update') {
    return action.payload;
  }
  return state;
};

export default questions;
