import { put, call, takeLatest } from 'redux-saga/effects';
import * as ActionCripto from '../actions/actionCriptos'
import { listCripto, getHistorico } from '../api_request';


function* sagaGetCripto() {
    try {
        const criptos = yield call(listCripto);
        yield put(ActionCripto.actionSetCriptos(criptos.coins));
    } catch (error) {
        console.log(error);
    }
}
function* sagaGetCriptoHistorico({ id } = values) {
    try {
        const historico = yield call(getHistorico, id);
        yield put(ActionCripto.actionSetCriptosHistorico(historico));
    } catch (error) {
        console.log(error);
    }
}


export default function* SagasCriptos() {
    yield takeLatest(ActionCripto.GET_CRIPTOS, sagaGetCripto);
    yield takeLatest(ActionCripto.GET_CRIPTOS_HISTORY_REQUEST, sagaGetCriptoHistorico);
}