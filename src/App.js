import * as React from "react";

import {
  Container,
  Row,
  Col,
  Alert,
  Button,
} from "react-bootstrap";

// import "./static/App.scss";

class App extends React.Component {

  signInBtn = null;
  signUpBtn = null;

  constructor(props) {
    super(props);

    this.signInBtnOnClick = this.signInBtnOnClick.bind(this);
    this.signUpBtnOnClick = this.signUpBtnOnClick.bind(this);

  }

  componentDidMount() {
    // console.log(this.signInBtn);
    // console.log(this.signUpBtn);
  }

  signInBtnOnClick(e) {
    e.preventDefault();
    console.log("signInBtnOnClick");
    window.location.href = "/#/login";
  }

  signUpBtnOnClick(e) {
    e.preventDefault();
    console.log("signUpBtnOnClick");
    window.location.href = "/signup";
  }

  render() {
    return (
      <Container fluid={false}>
        <div className="modal-dialog modal-md mt-5">
          <form>
            <div className="modal-content">
              <div className="modal-header justify-content-center">
                <h5 className="modal-title font-weight-bold">ThinkHub</h5>
              </div>
              <div className="modal-body">
                <Container>
                  <div className="d-flex-column">
                    <div className="form-group">
                      <label htmlFor="input-email">Email</label>
                      <input type="email" className="form-control" id="input-email" placeholder="Enter email" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="input-password">Password</label>
                      <input type="password" className="form-control" id="input-password" placeholder="Enter password" />
                    </div>
                  </div>
                </Container>
              </div>
              <div className="modal-footer justify-content-center px-0">
                <div className="row w-100 text-center">
                  <div className="col">
                    <button
                      ref={(ref) => this.signInBtn = ref}
                      className="btn btn-success w-100"
                      onClick={this.signInBtnOnClick}>Sign in</button>
                  </div>
                  <div className="col">
                    <button
                      ref={(ref) => this.signUpBtn = ref}
                      className="btn btn-primary w-100"
                      onClick={this.signUpBtnOnClick}>Sign up</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Container>
    )
  }
}


export default App
