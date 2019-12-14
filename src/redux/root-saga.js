import { all, call } from "redux-saga/effects";
import { shopSaga } from "./shop/shop.sagas";
import { usersSaga } from "./users/users.sagas";
import { cartSaga } from "./cart/cart.sagas";

export default function* rootSaga() {
    yield all([
        call(shopSaga),
        call(usersSaga),
        call(cartSaga)
    ]);
}