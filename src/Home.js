import { useState } from "react";

const Home = () => {
    const handleClick = () => {
        setName('khan')
    }

    let [name, setName] = useState('sadam')
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name}</p>
            <button onClick={() => handleClick()}>Click Me</button>
        </div>
    );
}

export default Home;