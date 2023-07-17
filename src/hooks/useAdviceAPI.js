import { useState, useEffect } from "react";
import axios from 'axios';

const useAdviceAPI = () => {

    const [advice, setAdvice] = useState();
    const [adviceId, setAdviceId] = useState();
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {

        const fetchData = async () => {

            try {
                const res = await axios.get(
                    `https://api.adviceslip.com/advice`
                );
                setAdvice(res.data.slip.advice);
                setAdviceId(res.data.slip.id);
                setIsloading(false);
            } catch (error) {
                setError(error);
                setIsloading(false);
                console.log(setError);
            };
        };
        fetchData();
    }, []);

    return {
        advice,
        adviceId,
        isLoading,
        error,
    };
};

export default useAdviceAPI;