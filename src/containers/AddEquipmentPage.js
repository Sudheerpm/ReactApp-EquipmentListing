import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// Actions
import * as EquipmentActions from '../actions/equipmentActions';
// Child components
import EquipmentForm from '../components/EquipmentForm';

class AddEquipmentPage extends React.Component {
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
            // Add new ID and empty array of bids to form fields
            let Equipment = Object.assign({}, this.props.EquipmentForm.values, {
                serialno: this.props.serialno
            });
            this.props.actions.addEquipment(Equipment);
            this.setState({formStatus: 'success'});
        } else {
            this.setState({formStatus: 'error'});
        }
    }

    render() {
        return (
            <div className="add-Equipment">
                <h1 className="text-center text-capitalize">Add new Equipment</h1>
                <EquipmentForm onSubmit={this.handleSubmit} formStatus={this.state.formStatus} />
            </div>
        )
    }
}

// Generate ID for new Equipment
function generateNewId(Equipments) {
    // Clone Equipments array
    let sortedEquipments = Equipments.slice(0);
    // Sort Equipments by ID
    sortedEquipments = sortedEquipments.sort(function(a, b) {
        return b.serialno - a.serialno;
    });
    let lastId = sortedEquipments.length ? parseInt(sortedEquipments[0].serialno, 10) : 0;
    return lastId + 1;
}

function mapStateToProps(state) {
    let serialno = generateNewId(state.Equipments);
    return {
        EquipmentForm: state.form.Equipment,
        serialno
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EquipmentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddEquipmentPage);