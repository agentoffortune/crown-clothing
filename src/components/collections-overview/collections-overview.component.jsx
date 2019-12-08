import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import "./collections-overview.styles.scss";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";


const CollectionsOverview = ({ collections }) => {
    console.log(collections);
    return(
    <div className="collections-overview">
    {
        collections.map(({id, ...otherCollectionProps}) => {
            return (<PreviewCollection key={id} {...otherCollectionProps} />)
        })
    }
    </div>
    )
}

const mapStateToProps = createStructuredSelector(
    {collections: selectCollectionsForPreview}
)
    
export default connect(mapStateToProps)(CollectionsOverview);