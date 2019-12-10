import React from "react";
import { connect } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import { createStructuredSelector } from "reselect";
import { CollectionsOverviewContainer } from "./collections-overview.styles";
import PreviewCollection from "../../components/preview-collection/preview-collection.component";


const CollectionsOverview = ({ collections }) => {
    
    return(
    <CollectionsOverviewContainer>
    {
        collections.map(({id, ...otherCollectionProps}) => {
            return (<PreviewCollection key={id} {...otherCollectionProps} />)
        })
    }
    </CollectionsOverviewContainer>
    )
}

const mapStateToProps = createStructuredSelector(
    {collections: selectCollectionsForPreview}
)
    
export default connect(mapStateToProps)(CollectionsOverview);