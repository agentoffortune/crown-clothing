import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import "./collection-item.styles.scss";
import { addItem } from "../../redux/cart/cart.actions";


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl} = item;
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl}}`}}>
            <CustomButton onClick={() => addItem(item)} inverted>ADD TO CART</CustomButton></div>
            <div className="collection-footer">
                <span className="name">{ name }</span>
                <span className="price">${ price }</span>
                
            </div>
            
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);