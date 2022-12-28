// Get News

export const GET_NEWS_REQUEST = "GET_NEWS_REQUEST"
export const GET_NEWS_SUCCESS = "GET_NEWS_SUCCESS"


export const actionGetNews = () => ({
    type: GET_NEWS_REQUEST,
});

export const actionSetNews = (news) => ({
    type: GET_NEWS_SUCCESS,
    news,
});