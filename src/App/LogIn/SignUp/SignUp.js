import React from 'react';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state = {
            passwordFlag: true,
            showPassword: this.showPassword.bind(this)
        }
    }

    showPassword(){
        this.setState({
            passwordFlag: !this.state.passwordFlag
        })
    }

  

    render() {
        return (
            <div className="panel-wrap sign-up">
                <div className="form-wrap">
                    <div className="field-wrap">
                        <input type="text" value  placeholder="Name"/>
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                    </div>
                    <div className="field-wrap">
                        <input type="text" value placeholder="Email"/>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                    </div>
                    <div className="field-wrap">
                        <input type={this.state.passwordFlag ? "password" : "text"} value={this.state.password}  placeholder="Password"/>
                        <i className={this.state.passwordFlag ? "fa fa-eye": "fa fa-eye-slash"} onClick={this.state.showPassword}></i>
                    </div>
                    <div className="btn-wrap">
                        <button type="button" className="button">SignUp</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp;