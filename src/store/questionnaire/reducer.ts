// 记录当前问卷
import { Action, combineReducers } from 'redux';
import get from 'get-value';

interface IGrade {
  grade: string;
  questionids: string[];
}

interface IQuestionnaire {
  currentGrade: string;
  grades: IGrade[];
}

const initQuestionnaire = {
  currentGrade: '1',
  grades: []
};

interface IUpdateCurrentGradeAction extends Action {
  payload: string;
}
const currentGrade = (
  state: string = initQuestionnaire.currentGrade,
  action: IUpdateCurrentGradeAction
) => {
  if (action.type === 'questionnaire/updateCurrentGrade') {
    return action.payload;
  }
  return state;
};

interface IGradeAction extends Action {
  payload: string;
}
const grades = (state: IGrade[] = [], action: IGradeAction) => {
  if (action.type === 'questionnaire/updateGrades') {
    return get(action, 'payload');
  }
};

const questionnaire = combineReducers({
  currentGrade,
  grades
});

export default questionnaire;
