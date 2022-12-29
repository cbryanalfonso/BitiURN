import { useEffect, useLayoutEffect, useState } from "react"
import { useDispatch } from "react-redux";
import { actionGetCriptos } from "../../business/actions/actionCriptos"
import { actionGetNews } from "../../business/actions/actionNews"

const useCriptos = () => {
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(true);
    const [limit, setLimit] = useState(10);

   /* Calling the dispatch function to get the news and criptos. */
    useEffect(() => {
        dispatch(actionGetNews())
        dispatch(actionGetCriptos(limit))
    }, [dispatch])

    /* Calling the getData function and setting the isLoading state to false after 3 seconds. */
    useLayoutEffect(() => {
        getData();
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, [limit]);

   /**
    * It sets the limit to the current limit plus 5, and then sets isLoading to true
    */
    const handleLoadMore = () => {
        setLimit(limit + 5);
        setIsLoading(true);
    }

   /**
    * A function that gets the data from the API and dispatches it to the reducer.
    */
    const getData = () => {
        dispatch(actionGetCriptos(limit))
    }

    /* Returning the isLoading and handleLoadMore functions. */
    return {
        isLoading,
        handleLoadMore
    }
}

export default useCriptos
