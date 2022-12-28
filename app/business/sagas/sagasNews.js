import { put, call, takeLatest } from 'redux-saga/effects';
import * as ActionNews from '../actions/actionNews'
import { getNews } from '../api_request';


function* sagaGetNews() {
    try {
        const news = yield call(getNews);
        yield put(ActionNews.actionSetNews(news));
    } catch (error) {
        console.log(error);
    }
}


export default function* SagasNews() {
    yield takeLatest(ActionNews.GET_NEWS_REQUEST, sagaGetNews);
}