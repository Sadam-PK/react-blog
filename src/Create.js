import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('sadam');


    return (
        <div className="create">
            <h2>Add a new blog</h2>
            <form action="">
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
                <button>Add Blog</button>
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>
            </form>
        </div>
    );
}

export default Create;