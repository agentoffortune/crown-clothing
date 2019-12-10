import React from "react";
import { connect } from "react-redux";
import { CollectionItemContainer, BackgroundImage, CollectionFooterContainer, AddButton, PriceContainer, NameContainer } from "./collection-item.styles";
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl} = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
            <AddButton onClick={() => addItem(item)} isInverted={true}>ADD TO CART</AddButton>
            <CollectionFooterContainer>
                <NameContainer>{ name }</NameContainer>
                <PriceContainer>${ price }</PriceContainer>
                
            </CollectionFooterContainer>
            
        </CollectionItemContainer>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);