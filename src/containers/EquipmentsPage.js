import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
// Actions
import * as EquipmentActions from '../actions/equipmentActions';
// Child components
import EquipmentList from '../components/EquipmentList';
import EquipmentForm from '../components/EquipmentForm';

class EquipmentsPage extends React.Component {
    constructor(props) {
        super(props);
        this.deleteEquipment = this.deleteEquipment.bind(this);
    }

    deleteEquipment(serialno) {
        if (window.confirm('Are you sure you want to delete this Equipment?')) {
            this.props.actions.deleteEquipment(serialno);
        }
    }

    render() {
        return (
            <div className="Equipments">            
            <table>
                <tr>
                    <td>
            <EquipmentForm /></td>
                <td>{
                    this.props.ajaxLoading ?
                        <p className="text-center alert alert-info">Loading Equipments...</p>
                        :        
                        <EquipmentList Equipments={this.props.Equipments} 
                                      onDeleteEquipment={this.deleteEquipment}  />
                
                }
                </td>
                </tr>
                </table>
            </div>
        )
    }
}


function mapStateToProps(state, ownProps) {
    return {
        Equipments: state.Equipments,
        ajaxLoading: state.ajaxLoading
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(EquipmentActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentsPage);