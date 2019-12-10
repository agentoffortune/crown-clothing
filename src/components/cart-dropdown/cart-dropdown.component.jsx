import React from "react";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CustomButton from "../custom-button/custom-button.component";
import { toggleCartHidden } from "../../redux/cart/cart.actions"
import { CartDropdownContainer, CartItemContainer, EmptyMessageContainer } from "./cart-dropdown.styles";

const CartDropdown = ({cartItems, history, dispatch }) => {
    return (
    <CartDropdownContainer>
        <CartItemContainer>
        {cartItems.length ?
            cartItems.map(cartItem => 
            <CartItem key={cartItem.id} item={cartItem} />
        ) :
        <EmptyMessageContainer>Your cart is currently empty</EmptyMessageContainer>
        }
        </CartItemContainer>
        <CustomButton onClick={
            () => {history.push("/checkout");
            dispatch(toggleCartHidden())}
        }>GO TO CHECKOUT</CustomButton>
    </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropdown));