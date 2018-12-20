import axios from 'axios';
import * as types from './actionTypes';

export function addEquipment(Equipment) {
    return { type: types.ADD_Equipment, Equipment};
}

export function editEquipment(Equipment) {
    return { type: types.EDIT_Equipment, Equipment};
}

export function deleteEquipment(id) {
    return { type: types.DELETE_Equipment, id};
}

export function setEquipments(Equipments) {
    return { type: types.SET_Equipments, Equipments};
}

export function ajaxLoading(status) {
    return { type: types.AJAX_LOADING, status};
}

export function getEquipments() {
    return dispatch => {
        dispatch(ajaxLoading(true));
        axios.get('http://www.mocky.io/v2/5c1be1263100006c00103f08')
            .then(response => {
                dispatch(setEquipments(response.data));
                dispatch(ajaxLoading(false));
            })
            .catch(error => {
                console.error(error);
                dispatch(ajaxLoading(false));
            });
    };
}