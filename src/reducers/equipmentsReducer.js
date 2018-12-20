import * as types from '../actions/actionTypes';
import initialState from '../store/initialState';

export default function EquipmentsReducer(state = initialState.Equipments, action) {
    switch (action.type) {
        case types.SET_Equipments:
            return action.Equipments;
        case types.ADD_Equipment:
            return [
                ...state,
                Object.assign({}, action.Equipment)
            ];
        case types.EDIT_Equipment:
            return [
                ...state.filter(Equipment => Equipment.serialno !== action.Equipment.serialno).sort((a,b)=> a.equipmentName - b.equipmentName),
                Object.assign({}, action.Equipment)
            ];
        case types.DELETE_Equipment:
            return [
                ...state.filter(Equipment => Equipment.serialno !== action.serialno).sort((a,b)=> a.equipmentName - b.equipmentName)
            ];
        default:
            return state;
    }
}