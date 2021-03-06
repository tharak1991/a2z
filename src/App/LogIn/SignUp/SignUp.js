import React from 'react'
import axios from 'axios'

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            passwordFlag: true,
            showPassword: this.showPassword.bind(this),
            username: '',
            useremail: '',
            userpassword: '',
        }
        this.updateField = this.updateField.bind(this)
        this.signupAction = this.signupAction.bind(this)
        this.userDetails = []
        this.porps.switchPasswordType("PASSWORD");
    }

    showPassword(){
        // this.setState({
        //     passwordFlag: !this.state.passwordFlag
        // })
        this.porps.switchPasswordType("TEXT");
    }

    updateField(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signupAction(e){
        e.preventDefault()
        if(this.state.username == '' || this.state.useremail == '' || this.state.userpassword == ''){
            
            return false
        } else{
            this.setState({
                isEmpty: this.state.isEmpty
            })
        }
        this.userDetails.push({
                name: this.state.username,
                email:this.state.useremail,
                password:this.state.userpassword
        })
        axios.post(
            '/api/user', 
            this.userDetails
            ).then(function(response){
                console.log('dfdfdf')
                console.log(response)
        })
        console.log(this.userDetails)
        this.state.username= ''
        this.state.useremail = ''
        this.state.userpassword=''
    }


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
                            <input type={this.props.passwordType} name="userpassword" value={this.state.userpassword}  onChange={this.updateField} placeholder="Password"/>
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

export default SignUp;