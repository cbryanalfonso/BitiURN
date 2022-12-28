import { all } from "redux-saga/effects";
import SagasCriptos from "./sagasCriptos";
import SagasNews from "./sagasNews";
export default function* rootSaga() {
    yield all([
      SagasCriptos(),
      SagasNews()
    ]);
  }