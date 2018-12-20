import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as EquipmentActions from '../actions/equipmentActions';
// Child components
import EquipmentForm from '../components/EquipmentForm';

class EditEquipmentPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formStatus: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        // Check if form has any errors
        if (!this.props.EquipmentForm.syncErrors) {
            // Add current Equipment ID and bids to form fields
            let Equipment = Object.assign({}, this.props.EquipmentForm.values, {
                serialno: this.props.currentEquipment.serialno
            });
            this.props.actions.editEquipment(Equipment);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            this.props.ajaxLoading ?
                <p className="text-center alert alert-info">Loading Equipment...</p>
                :
                !this.props.currentEquipment ?
                    <p className="text-center alert alert-danger">Equipment not found.</p>
                    :
                    <div className="add-Equipment">
                        <h1 className="text-center text-capitalize">Edit Equipment information</h1>
                        <EquipmentForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus}
                                      initialValues={this.props.currentEquipment} goBack={this.props.goBack} />
                    </div>
        )
    }
}

// Find current Equipment based on ID passed in URL
function findCurrentEquipment(Equipments, serialno = -1) {
    // Find Equipment for given id
    return Equipments.find(Equipment => {
        return parseInt(Equipment.serialno, 10) === parseInt(serialno, 10);
    });
}

function mapStateToProps(state, ownProps) {
    let currentEquipment = state.Equipments.length ? findCurrentEquipment(state.Equipments, ownProps.match.params.serialno) : null;
    return {
        currentEquipment,
        EquipmentForm: state.form.Equipment,
        ajaxLoading: state.ajaxLoading,
        goBack: ownProps.history.goBack
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EquipmentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditEquipmentPage);