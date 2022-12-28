// Get CRIPTOS

export const GET_CRIPTOS = "GET_CRIPTOS"
export const GET_CRIPTOS_SUCCESS = "GET_CRIPTOS_SUCCESS"


export const actionGetCriptos = () => ({
    type: GET_CRIPTOS,
});

export const actionSetCriptos = (criptos) => ({
    type: GET_CRIPTOS_SUCCESS,
    criptos,
});
// Get CRIPTOS Graph

export const GET_CRIPTOS_HISTORY_REQUEST = "GET_CRIPTOS_HISTORY_REQUEST"
export const GET_CRIPTOS_HISTORY_SUCCESS = "GET_CRIPTOS_HISTORY_SUCCESS"


export const actionGetCriptosHistorico = (id) => ({
    type: GET_CRIPTOS_HISTORY_REQUEST,
    id,
});

export const actionSetCriptosHistorico = (criptos) => ({
    type: GET_CRIPTOS_HISTORY_SUCCESS,
    criptos,
});