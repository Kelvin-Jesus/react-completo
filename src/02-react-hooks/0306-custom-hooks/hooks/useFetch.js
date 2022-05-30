import { useState, useCallback } from "react";

const useFetch = () => {

    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(null);

    const request = useCallback( async (URL, options = {}) => {

        let requestData, response;

        try {

            setError(null);
            setLoading(true);

            requestData = await fetch(URL, options);
            response = await requestData.json();

            setLoading(false);
            
        }
        
        catch ( error ) {
            
            response = null
            setError(error);
            
        }
        
        finally {

            setData([response]);
            setLoading(false);

            return { requestData, response };

        }

    }, []);

    return {
        data,
        error,
        loading,
        request
    };

}

export default useFetch;