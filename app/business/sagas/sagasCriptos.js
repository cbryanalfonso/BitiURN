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
/* A generator function that is called by the saga middleware. */
function* sagaGetCripto({ limit } = values) {
    try {
        const criptos = yield call(listCripto, limit);
        yield put(ActionCripto.actionSetCriptos(criptos.coins));
    } catch (error) {
        console.log(error);
    }
}
/* A generator function that is called by the saga middleware. */
function* sagaGetCriptoHistorico({ id } = values) {
    try {
        const historico = yield call(getHistoricoCriptos, id);
        yield put(ActionCripto.actionSetCriptosHistorico(historico));
    } catch (error) {
        console.log(error);
    }
}


/* This is the main saga that is called by the saga middleware. */
export default function* SagasCriptos() {
    yield takeLatest(ActionCripto.GET_CRIPTOS, sagaGetCripto);
    yield takeLatest(ActionCripto.GET_CRIPTOS_HISTORY_REQUEST, sagaGetCriptoHistorico);
}