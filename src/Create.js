import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sadam');
    const [isPending, setIsPending] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author }
        setIsPending(true);
        fetch('http://localhost:8000/blogs/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false);
        })
    }

    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">Blog Title</label>
                <input
                    type="text"
                    required
                    value={title}
                    placeholder='Title'
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    required
                    placeholder='Description'
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                >

                </textarea>
                <label htmlFor="">Blog Author:</label>
                <select name="" id=""
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}>
                    <option value="sadam">sadam</option>
                    <option value="hamza">hamza</option>
                </select>
                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Blog adding..</button>}
            </form>
        </div>
    );
}

export default Create;