// Get CRIPTOS

export const GET_CRIPTOS = "GET_CRIPTOS"
export const GET_CRIPTOS_SUCCESS = "GET_CRIPTOS_SUCCESS"


/**
 * It returns an object with a type property and a limit property
 * @param limit - The number of criptos to fetch.
 */
export const actionGetCriptos = (limit) => ({
    type: GET_CRIPTOS,
    limit,
});

/**
 * It returns an object with a type property and a criptos property
 * @param criptos - The array of criptos that we want to store in our Redux store.
 */
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