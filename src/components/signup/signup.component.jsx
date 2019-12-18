import React, {useState} from "react";
import { connect } from "react-redux";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { signUpStart } from "../../redux/users/users.actions"
import { GroupContainer, TitleContainer, ButtonsContainer } from "../signin/signin.styles"

const SignUp = ({ signUpStart }) => {
    const [userSignUp, setUserSignUp] = useState({displayName: "", email: "", password: "", confirmPassword: ""})
    const { displayName, email, password, confirmPassword } = userSignUp;
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords Don't Match!");
            return;
        }
        signUpStart(displayName, email, password);
    }
    const handleChange = (event) => {
        const {name, value} = event.target;
        setUserSignUp({...userSignUp, [name]: value});
    }

        return (
            <GroupContainer>
                <TitleContainer>I Do Not Have an Account</TitleContainer>
                <span>Sign Up With Your E-Mail and Password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                    <FormInput type="text" name="displayName" value={displayName} onChange={handleChange} label="Display Name" required />
                    <FormInput type="email" name="email" value={email} onChange={handleChange} label="E-Mail" required />
                    <FormInput type="password" name="password" value={password} onChange={handleChange} label="Password" required />
                    <FormInput type="password" name="confirmPassword" value={confirmPassword} onChange={handleChange} label="Confirm Password" required />
                    <ButtonsContainer><CustomButton type="submit">SIGN UP</CustomButton></ButtonsContainer>
                </form>
            </GroupContainer>
        )
    
}

const mapDispatchToProps = dispatch => ({
    signUpStart: (displayName, email, password) => dispatch(signUpStart({displayName, email, password}))
});

export default connect(null, mapDispatchToProps)(SignUp);