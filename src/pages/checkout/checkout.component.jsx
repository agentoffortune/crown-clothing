import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import { selectCartItems, selectCartTotal } from "../../redux/cart/cart.selectors";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlock, TotalContainer, TestWarningContainer } from "./checkout.styles";

const CheckoutPage = ({cartItems, total }) => {
    return (
        <CheckoutPageContainer>
            <CheckoutHeaderContainer>
                <HeaderBlock>
                <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeaderContainer>
            {
                cartItems.map(cartItem => 
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                )
            }
            <TotalContainer>TOTAL: ${total}</TotalContainer>
            <TestWarningContainer>
            *Please use the Following Card Information for Payment*<br />
            Card: 4242424242424242 Expiry: 01/24 CCV: 123
            </TestWarningContainer>
            <StripeCheckoutButton price={total}/>
        </CheckoutPageContainer>
        
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage);