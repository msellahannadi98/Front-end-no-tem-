import {
    GET_DOCTOR,
    ON_ADD_EDIT_FORM_CHANGE,
    ON_GET_CLINIC_DAYS,
    ON_GET_DOCTORS,
    ON_RESET_DOCTOR_DATA, ON_RESET_DOCTOR_FORM_DATA, ON_SAVE_UPDATE_DOCTOR
} from "../actions/doctor.add.edit.action";

const initialState = {
    formData: {},
    doctor: {},
    clinicDays: [],
    doctorList:[]
};

const doctorAddEditReducer = function (state = initialState, action) {

    switch (action.type) {

        case ON_GET_DOCTORS:{
            return{
                ...state,
                doctorList:[...action.payload]
            }
        }

        case ON_ADD_EDIT_FORM_CHANGE: {
            return {
                ...state,
                formData: action.payload
            }
        }

        case ON_SAVE_UPDATE_DOCTOR: {
            return {
                ...state,
                doctor: action.payload
            }
        }

        case GET_DOCTOR: {
            return {
                ...state,
                doctor: action.payload
            }
        }

        case ON_RESET_DOCTOR_FORM_DATA: {
            return {
                ...state,
                formData: {}
            }
        }

        case ON_RESET_DOCTOR_DATA: {
            return {
                ...state,
                ...initialState
            }
        }

        case ON_GET_CLINIC_DAYS: {            
            return {
                ...state,
                clinicDays: [...action.payload]
             
            }
           
        }

        default: {
            return state;
        }
    }

};

export default doctorAddEditReducer;
