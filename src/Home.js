import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum', author: 'sadam', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum', author: 'hamza', id: 2 },
        { title: 'Web dev tips', body: 'lorem ipsum', author: 'asad', id: 3 },
    ])

    return (
        <div className="home">
            <BlogList blogs={blogs} title={'All Blogs'} />
            <BlogList blogs={blogs.filter((blog) => blog.author === 'sadam')}
                title='Sadam Blogs' />
        </div>
    );
}

export default Home;