import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
// Reducers
import Equipments from './equipmentsReducer';
import ajaxLoading from './ajaxLoadingReducer';

const rootReducer = combineReducers({
    Equipments,
    ajaxLoading,
    form: formReducer
});

export default rootReducer;