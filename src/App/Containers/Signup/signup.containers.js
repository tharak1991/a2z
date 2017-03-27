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
    }

    const showPassword = () => {
        this.setState({
            passwordFlag: !this.state.passwordFlag
        })
    }

    const updateField = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    const signupAction = (e) => {
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