import React from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/users/users.actions";
import { GroupContainer, TitleContainer, ButtonsContainer } from "./signin.styles"

class SignIn extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const {email, password} = this.state;
        emailSignInStart(email, password);
    }
    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render () {
        const { googleSignInStart } = this.props;
        return (
            <GroupContainer>
                <TitleContainer>I Already Have An Account</TitleContainer>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="E-Mail" name="email" handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput type="password" label="Password" name="password" handleChange={this.handleChange} value={this.state.password} required />
                    <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    
                    <CustomButton onClick={googleSignInStart} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton></ButtonsContainer>
                    
                </form>
            </GroupContainer>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);