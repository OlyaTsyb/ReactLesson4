import React, {Component} from 'react';
import UserService from "../../services/userServices/UserServices";
import User from "../user/User";
import {
    withRouter
}    from "react-router-dom";

class AllUsers extends Component {
    userService = new UserService();
    state = {users : []};
    async componentDidMount() {
        let users = await this.userService.users();
        this.setState({users});
    }
    render() {
        let {users} = this.state;
        let {match:{url}} = this.props;
        return (
            <div>
                {
                    users.map(value => <User item = {value} key = {value.id}/>)
                }
            </div>
        );
    }
}

export default withRouter (AllUsers);