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