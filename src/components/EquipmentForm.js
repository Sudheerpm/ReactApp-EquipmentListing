import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {NavLink} from 'react-router-dom';

let EquipmentForm = ({onSubmit, submitting, formStatus}) => {
    return (
        <div className="row">
        <div className="col-sm-6 col-lg-2 col-sm-push-2 col-lg-push-2"><img className="img.link" src={this.formProps!==undefined && this.formProps.imageurl!==undefined? this.formProps.imageurl:""} alt="Equipment Link"/></div>
            <div className="col-sm-6 col-lg-4 col-sm-push-3 col-lg-push-4">
                <form onSubmit={ onSubmit } noValidate>
                    <Field name="equipmentName" component={renderField} type="text"
                           id="equipment" label="Equipment Name"/>
                    <Field name="vendor" component={renderField} type="text"
                           id="vendornumber" label="Vendor"/>
                    <Field name="location" component={renderField} type="text"
                        label="Location"/>
                    <Field name="model" component={renderField} type="text"
                           id="modelfields" label="Model"/>
                    <Field name="description" component={renderField} type="text"
                           id="detaildescription" label="Description"/>
                    <button type="submit" className="btn btn-primary Equipment-submit" disabled={submitting}>Submit</button>
                </form>
                {formStatus === 'success' &&
                <p className="alert alert-success">
                    Equipment successfully saved.
                    <NavLink to="/Equipments"> Return to Equipment list</NavLink>
                </p>}
                {formStatus === 'error' &&
                <p className="alert alert-danger">Saving Equipment failed. Please fill in all the fields.</p>}
            </div>
        </div>
    )
};

// Render schema for each field
const renderField = ({
    input,
    label,
    type,
    id,
    meta: {touched, error}
}) => (
    // Render schema for checkbox
    (type === 'checkbox')
        ?
        <div className="checkbox">
            <label>
                <input {...input} type={type}/>
                {label}
            </label>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
        :
        // Render schema for inputs
        <div className="form-group">
            <label htmlFor={id}>
                {label}
            </label>
            <input {...input} id={id} type={type} className="form-control"/>
            {touched &&
            (error &&
            <span className="error-text">
            {error}
          </span>)}
        </div>
);

// Form validation
function validate(formProps) {
    const errors = {};

    if (!formProps.serialno) {
        errors.serialno = 'Please enter a serial number';
    }

    if (!formProps.description) {
        errors.description = 'Please enter a description';
    }

    if (!formProps.imageurl) {
        errors.imageurl = 'Please enter an image url';
    }

    if (!formProps.model) {
        errors.model = 'Please enter model';
    } 


    return errors;
}

EquipmentForm = reduxForm({
    form: 'Equipment',
    enableReinitialize: true
})(EquipmentForm);

export default EquipmentForm;