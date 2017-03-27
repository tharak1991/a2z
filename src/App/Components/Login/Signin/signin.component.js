import React from 'react'

class Signin extends React.Component {
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


export default Signin