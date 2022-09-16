import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Guestbook = () => {
    
    const [inputMessage, setName] = useState("")
    const [message, setMessage] = useState(`Message: `)
    const [uppdatedMessage, setUppdatedMessage] = useState(`${inputMessage}`)

    useEffect(() => {
        document.title = uppdatedMessage
    }, [uppdatedMessage])

    return (
        <div>
            <div className="guestbook">
                
                <h2>Write a message in our Guestbook</h2>
                <input
                placeholder="write here "
                value={inputMessage}
                onChange={(e) => setName(e.target.value)}
                />
                <button onClick={() => {setMessage(`Your message: ${inputMessage}`); setUppdatedMessage(`${inputMessage}`)}}>Enter</button>

				<p>{message}</p>
            </div>
        </div>
    )
}

export default Guestbook;