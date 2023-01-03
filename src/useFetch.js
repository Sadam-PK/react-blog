const useFetch = () => {
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