import React, { Component } from "react";
//import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { emitter } from "../../utils/emitter";

class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
    };
    this.listenToEmitter();
  }

  listenToEmitter() {
    emitter.on("EVENT_CLEAR_MODAL_DATA", () => {
      //reset state
      this.setState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        address: "",
      });
    });
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
    //khi click ra ngoai modal
  };

  handleOnChangInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;
    this.setState({
      ...copyState,
    });
    //console.log(event.target.value);
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = ["email", "password", "firstName", "lastName", "address"];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Mising parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid === true) {
      this.props.createNewUser(this.state, "abc");
    }
  };

  render() {
    // console.log("check child props ", this.props);
    // console.log("check child open modal ", this.props.isOpen);
    // console.log("---------------------");
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        className={"modal-user-container"}
        size="lg"
      >
        <ModalHeader toggle={() => this.toggle()}>
          Create a new user
        </ModalHeader>

        <ModalBody>
          <div className="modal-user-body">
            <div className="input-container">
              <label>Email</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangInput(event, "email");
                }}
                value={this.state.email}
                placeholder="Email"
              />
            </div>

            <div className="input-container">
              <label>Password</label>
              <input
                type="password"
                onChange={(event) => {
                  this.handleOnChangInput(event, "password");
                }}
                value={this.state.password}
                placeholder="Password"
              />
            </div>
          </div>

          <div className="modal-user-body">
            <div className="input-container">
              <label>First name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangInput(event, "firstName");
                }}
                value={this.state.firstName}
                placeholder="First name"
              />
            </div>

            <div className="input-container">
              <label>Last name</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangInput(event, "lastName");
                }}
                value={this.state.lastName}
                placeholder="Last name"
              />
            </div>
          </div>

          <div className="modal-user-body ">
            <div className="input-container max-width-input">
              <label>Address</label>
              <input
                type="text"
                onChange={(event) => {
                  this.handleOnChangInput(event, "address");
                }}
                value={this.state.address}
                placeholder="Address"
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button
            className="px-3"
            color="primary"
            onClick={() => this.handleAddNewUser()}
          >
            Add new
          </Button>

          <Button
            className="px-3"
            color="secondary"
            onClick={() => this.toggle()}
          >
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);
