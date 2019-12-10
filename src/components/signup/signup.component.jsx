import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";
import { GroupContainer, TitleContainer, ButtonsContainer } from "../signin/signin.styles"

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    }
    handleSubmit = async (event) => {
        event.preventDefault();
        const { displayName, email, password, confirmPassword } = this.state;
        if (password !== confirmPassword) {
            alert("Passwords Don't Match!");
            return;
        }
        try {
            const { user } = await auth().createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: "",
                email: "",
                password: "",
                confirmPassword: ""
            })
        } catch (error) {
            console.log(error.message);

        }
    }
    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render () {
        const { displayName, email, password, confirmPassword } = this.state;
        return (
            <GroupContainer>
                <TitleContainer>I Do Not Have an Account</TitleContainer>
                <span>Sign Up With Your E-Mail and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={this.handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={this.handleChange} label="E-Mail" required />
                    <FormInput type="password" name="password" value={password} onChange={this.handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={this.handleChange} label="Confirm Password" required />
                    <ButtonsContainer><CustomButton type="submit">SIGN UP</CustomButton></ButtonsContainer>
                </form>
            </GroupContainer>
        )
    }
}

export default SignUp;