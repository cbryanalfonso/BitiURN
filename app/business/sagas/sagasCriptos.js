import { put, call, takeLatest } from 'redux-saga/effects';
import * as ActionCripto from '../actions/actionCriptos'
import { listCripto, getHistorico } from '../api_request';
// Reserve a room
const getHistoricoCriptos = (id) => {
    const dataGraph = [];
    getHistorico(id)
        .then((res) => {
            res.map((i) => {
                dataGraph.push(i[1])
            })
            return [...dataGraph]
        })
        .catch((error) => {
            console.log(error.response);
        });

}
function* sagaGetCripto({ limit } = values) {
    try {
        const criptos = yield call(listCripto, limit);
        yield put(ActionCripto.actionSetCriptos(criptos.coins));
    } catch (error) {
        console.log(error);
    }
}
function* sagaGetCriptoHistorico({ id } = values) {
    try {
        const historico = yield call(getHistoricoCriptos, id);
        console.log('again?',historico);
        yield put(ActionCripto.actionSetCriptosHistorico(historico));
    } catch (error) {
        console.log(error);
    }
}


export default function* SagasCriptos() {
    yield takeLatest(ActionCripto.GET_CRIPTOS, sagaGetCripto);
    yield takeLatest(ActionCripto.GET_CRIPTOS_HISTORY_REQUEST, sagaGetCriptoHistorico);
}