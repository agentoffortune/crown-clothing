import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import { GroupContainer, TitleContainer, ButtonsContainer } from "./signin.styles"
import { auth } from "firebase";

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
        const {email, password} = this.state;
        try {
            await auth().signInWithEmailAndPassword(email, password);
        } catch (error) {
            console.log(error.message);
        }
        this.setState({ email: "", password: ""});
    }
    handleChange = (event) =>{
        const { name, value } = event.target;
        this.setState({ [name]: value })
    }
    render () {
        return (
            <GroupContainer>
                <TitleContainer>I Already Have An Account</TitleContainer>
                <span>Sign in with your email and password.</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput type="email" label="E-Mail" name="email" handleChange={this.handleChange} value={this.state.email} required />
                    
                    <FormInput type="password" label="Password" name="password" handleChange={this.handleChange} value={this.state.password} required />
                    <ButtonsContainer>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn={true}>SIGN IN WITH GOOGLE</CustomButton></ButtonsContainer>
                    
                </form>
            </GroupContainer>
        )
    }
}

export default SignIn;