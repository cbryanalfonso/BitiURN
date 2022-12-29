import { useLayoutEffect, useState } from 'react'
import { getHistorico } from '../../business/api_request';

const useCriptoGraph = (id) => {
    const [datas, setDatas] = useState([])
    const dataGraph = [];

    /* A hook that is used to get the data from the API and set the data in the state. */
    useLayoutEffect(() => {
        getHistorico(id)
            .then((res) => {
                res.map((i) => {
                    dataGraph.push(i[1])
                })
                // console.log(dataGraph);
                setDatas(dataGraph)
            })
    }, []);
   /* Returning the datas state. */
    return {
        datas
    }
}

export default useCriptoGraph
