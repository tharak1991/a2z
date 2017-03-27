import React from 'react'

class Signup extends React.Component {
    render() {
        return (
            <div className="panel-wrap sign-up">
                <div className="form-wrap">
                    <form onSubmit={this.signupAction} id="signupForm" ref="form">
                        <div className="field-wrap">
                            <input type="text" name="username" value={this.state.username} onChange={this.updateField} placeholder="Name" />
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                        </div>
                        <div className="field-wrap">
                            <input type="text" name="useremail" value={this.state.useremail} onChange={this.updateField} placeholder="Email" />
                            <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        </div>
                        <div className="field-wrap">
                            <input type={this.state.passwordFlag ? "password" : "text"} name="userpassword" value={this.state.userpassword}  onChange={this.updateField} placeholder="Password"/>
                            <i className={this.state.passwordFlag ? "fa fa-eye": "fa fa-eye-slash"} onClick={this.state.showPassword}></i>
                        </div>
                        <div className="btn-wrap">
                            <button className="button">SignUp</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}


export default Signup