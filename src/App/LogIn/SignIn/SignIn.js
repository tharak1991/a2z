import React from 'react';

class SignIn extends React.Component {
    constructor(){
        super();
        this.state = {
            name: "",
            password: ""
        }
    }

    
    onInputChange(event) {
        this.setState({
            name: event.target.value,
            password: event.target.value
        })
    }

    render(){
        return (
          <div className="panel-wrap sign-in" >
                <div className="form-wrap" >
                    <div className="field-wrap">
                        <input type="text" value={this.state.name} onChange={this.onInputChange.bind(this)} placeholder="Name" />
                        <i className="fa fa-user-o" aria-hidden="true"></i>
                    </div>
                    <div className="field-wrap">
                        <input type="password" value={this.state.password} onChange={this.onInputChange.bind(this)} placeholder="Password" />
                        <i className="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div className="btn-wrap" >
                        <button type="button" className="button">SignIn</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignIn;