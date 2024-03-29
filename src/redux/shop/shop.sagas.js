import { takeLatest, call, put, all } from "redux-saga/effects";
import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils"
import shopActionTypes from "./shop.types";
import { fetchCollectionsStartSuccess, fetchCollectionsFailure } from "./shop.actions";

export function* fetchCollectionsAsync () {
    try {
        const collectionRef = firestore().collection("collections");
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot);    
        yield put(fetchCollectionsStartSuccess(collectionsMap)); 
    } catch(error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart () {
    yield takeLatest(shopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}

export function* shopSaga() {
    yield (all([call(fetchCollectionsStart)]));
}