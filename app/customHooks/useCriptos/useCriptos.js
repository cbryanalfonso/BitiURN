import { useEffect, useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { actionGetCriptos } from "../../business/actions/actionCriptos"
import { actionGetNews } from "../../business/actions/actionNews"

const useCriptos = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(10);

    useEffect(() => {
        dispatch(actionGetNews())
        dispatch(actionGetCriptos(limit))
    }, [dispatch])

    useLayoutEffect(() => {
        getData();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [limit]);

    const handleLoadMore = () => {
        setLimit(limit + 5);
        setIsLoading(true);
    }

    const getData = () => {
        dispatch(actionGetCriptos(limit))
    }

    return {
        isLoading,
        handleLoadMore
    }
}

export default useCriptos
