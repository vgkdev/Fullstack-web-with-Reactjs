import React, { Component } from "react";
//import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./UserManage.scss";
import { getAllUsers, createNewUserService } from "../../services/userService";
import ModalUser from "./ModalUser";

class UserManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrUsers: [],
      isOpenModalUser: false,
    };
  }

  async componentDidMount() {
    await this.getALlUsersFromReact();
  }

  getALlUsersFromReact = async () => {
    let response = await getAllUsers("ALL");
    if (response && response.errCode === 0) {
      this.setState({
        arrUsers: response.users,
      });
    }
  };

  handleAddNewUser = () => {
    this.setState({
      isOpenModalUser: true,
    });
  };

  toggleUserModal = () => {
    this.setState({
      isOpenModalUser: !this.state.isOpenModalUser,
    });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.errMessage);
      } else {
        await this.getALlUsersFromReact();
        this.setState({
          isOpenModalUser: false,
        });
      }
      console.log("response create user ", response);
    } catch (e) {
      console.log(e);
    }
    console.log("check data from child ", data);
  };

  /** Life cycle
   * Run component:
   * 1. constructor -> init state
   * 2. did mount (set state)
   * 3. render
   */

  render() {
    //console.log("check render", this.state);
    let arrUsers = this.state.arrUsers;
    return (
      <div className="users-container">
        <ModalUser
          isOpen={this.state.isOpenModalUser}
          toggleFromParent={this.toggleUserModal} //truyền func đến child component để hot reload page
          createNewUser={this.createNewUser} //truyền func thuần, không có giá trị createNewUser()
        />
        <div className="title text-centet"> Manage users</div>
        <div className="mx-1">
          <button
            className="btn btn-primary px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i className="fas fa-plus"></i> Add new users
          </button>
        </div>
        <div className="users-table mt-3 mx-1">
          <table id="customers">
            <tbody>
              <tr>
                <th>Email</th>
                <th>First name</th>
                <th>Last name</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>

              {arrUsers &&
                arrUsers.map((item, index) => {
                  //console.log("check map", item, " ", index);
                  return (
                    <tr key={index}>
                      <td>{item.email}</td>
                      <td>{item.firstName}</td>
                      <td>{item.lastName}</td>
                      <td>{item.address}</td>
                      <td>
                        <button className="btn-edit">
                          <i className="fas fa-user-edit"></i>
                        </button>
                        <button className="btn-delete">
                          <i className="fas fa-trash"></i>
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
