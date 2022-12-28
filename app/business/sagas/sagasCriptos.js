import { put, call, takeLatest } from 'redux-saga/effects';
import * as ActionCripto from '../actions/actionCriptos'
import { listCripto } from '../api_request';


function* sagaGetCripto() {
    try {
        const criptos = yield call(listCripto);
        yield put(ActionCripto.actionSetCriptos(criptos.coins));
    } catch (error) {
        console.log(error);
    }
}


export default function* SagasCriptos() {
    yield takeLatest(ActionCripto.GET_CRIPTOS, sagaGetCripto);
}