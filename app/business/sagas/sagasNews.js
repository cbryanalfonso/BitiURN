import { put, call, takeLatest } from 'redux-saga/effects';
import * as ActionNews from '../actions/actionNews'
import { getNews } from '../api_request';

/* A generator function that is used to get the news from the API. */

function* sagaGetNews() {
    try {
        const news = yield call(getNews);
        yield put(ActionNews.actionSetNews(news));
    } catch (error) {
        console.log(error);
    }
}


/* Exporting the saga. */
export default function* SagasNews() {
    yield takeLatest(ActionNews.GET_NEWS_REQUEST, sagaGetNews);
}