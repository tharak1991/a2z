import { connect} from "react-redux";
import {changePasswordType} from "../../Actions/login";

import SignUp from '../../Containers/SignUp/sign-up';
// import {dispatch} from "redux";

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
    switchPasswordType: (type) => {
        changePasswordType(type);
    }
})

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);
export default SignUpContainer;