constructor(){
        super();
        this.state = {
            username: '',
            userpassword: ''
        }
        this.updateField = this.updateField.bind(this)
        this.signIndata = this.signIndata.bind(this)
        this.userDetails = []
    }

   const updateField = () => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    const signIndata = () => {
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

   