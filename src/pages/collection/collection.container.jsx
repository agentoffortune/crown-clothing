import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionIsLoaded } from "../../redux/shop/shop.selectors";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionPage from "../collection/collection.component";

const mapStateToProps  = createStructuredSelector({
    isLoading: (state) => !selectCollectionIsLoaded(state)
});

const CollectionContainer = connect(mapStateToProps)(WithSpinner(CollectionPage));

export default CollectionContainer;