import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    // const handleDelete = (id) => {
    //     const newBlog = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlog)
    // }

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={'All Blogs'} />}
        </div>
    );
}

export default Home;