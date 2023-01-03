import { useState, useEffect } from "react";


const useFetch = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('Couldnt find data..')
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data);
                setPending(false);
                setError(null)
            })
            .catch((error) => {
                isPending(false)
                setError(error.message)
            })
    }, [])
}

export default useFetch;