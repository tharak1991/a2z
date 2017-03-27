import CONSTANTS from './../../Constants/index'
TOGGLE_CHECK = false

const showPanel = () => {
    this.TOGGLE_CHECK = !this.TOGGLE_CHECK
}

 let panelWrap = null     
 if (this.TOGGLE_CHECK) {
      panelWrap = <SignIn/>
  } else{
      panelWrap = <SignUp/>
}