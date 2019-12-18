import React, { useState } from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/users/users.actions";
import { GroupContainer, TitleContainer, ButtonsContainer } from "./signin.styles"

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
    const [userCredentials, setCredentials] = useState({email: "", password: ""});
    const {email, password} = userCredentials;
    const handleSubmit = async (event) => {
        event.preventDefault();
        
        emailSignInStart(email, password);
    }
    const handleChange = (event) =>{
        const { name, value } = event.target;
        setCredentials({ ...userCredentials, [name]: value });
    }
        return (
            <GroupContainer>
                <TitleContainer>I Already Have An Account</TitleContainer>
                <span>Sign in with your email and password.</span>
                <form onSubmit={handleSubmit}>
                    <FormInput type="email" label="E-Mail" name="email" handleChange={handleChange} value={email} required />
                    
                    <FormInput type="password" label="Password" name="password" handleChange={handleChange} value={password} required />
                    <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    
                    <CustomButton onClick={googleSignInStart} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton></ButtonsContainer>
                    
                </form>
            </GroupContainer>
        )

}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password }))
})

export default connect(null, mapDispatchToProps)(SignIn);