import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState(null)
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null);

    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlog)
    // }

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

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
        </div>
    );
}

export default Home;