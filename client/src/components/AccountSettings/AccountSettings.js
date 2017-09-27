import React, {Component} from "react";
import { Table, thead, tr, th, tbody, td } from "bloomer";
import VehicleDetails from "../VehicleDetails";
import "./AccountSettings.css";

class AccountSettings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
        };
    }

    render() {
        return (
            <div className="accountDetails">
                <Table isBordered isStriped isNarrow className="table">
                    <thead>
                        <tr>
                            <th>Account Settings</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='is-selected'>
                            <td>Userame/Email</td>
                            <td>{this.props.currentUser.email}</td>
                        </tr>
                        <tr>
                            <td>Password</td>
                            <td>************</td>
                        </tr>
                    </tbody>
                </Table>
                <VehicleDetails/>
            </div>
        )
    }
}

export default AccountSettings;
