import React from 'react'
import axios from 'axios'

class SignIn extends React.Component {
    constructor(){
        super()
        this.state = {
            username: '',
            userpassword: ''
        }
        this.updateField = this.updateField.bind(this)
        this.signIndata = this.signIndata.bind(this)
        this.userDetails = []
    }

    updateField(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    signIndata(e){
        e.preventDefault()
        if(this.state.username == '' || this.state.userpassword == ''){
            alert('Boooommm')
            return false
        }
        this.userDetails.push({
            name: this.state.username,
            password: this.state.userpassword
        })
        console.log(this.userDetails)
        axios.post(
            '/api/user', 
            this.userDetails
            ).then(function(response){
                console.log('dfdfdf')
                console.log(response)
            })
        this.setState({
            username: '',
            userpassword: ''
        })
    }

    render(){
        return (
          <div className="panel-wrap sign-in">
                <div className="form-wrap" >
                    <form onSubmit={this.signIndata}>
                        <div className="field-wrap">
                            <input type="text" placeholder="Name" name="username" onChange={this.updateField} value={this.state.username}/>
                            <i className="fa fa-user-o" aria-hidden="true"></i>
                        </div>
                        <div className="field-wrap">
                            <input type="password"  placeholder="Password" name="userpassword"  onChange={this.updateField} value={this.state.userpassword}/>
                            <i className="fa fa-key" aria-hidden="true"></i>
                        </div>
                        <div className="btn-wrap">
                            <button className="button">Log In</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

SignIn.PropTypes = {
    signinForm: React.PropTypes.func
}

export default SignIn;