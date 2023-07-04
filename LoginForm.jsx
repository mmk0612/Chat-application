import React from "react";
import axios from "axios";

const LoginForm = () => {
    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [error,setError] = React.useState('');

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const authObject = { 
            'project-ID':"330c28d5-1f44-49fd-8868-938e5987c512",
            'User-Name':username,
            'User-Secret':password
        }
        //userName
        try{
            await axios.get('https://api.chatengine.io/chats',{headers:authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        }catch(error){
            setError('Oops, incorrect credentials.')
        }
    }


    return (<div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                value={username} 
                onChange=
                {(e)=>setUsername(e.target.value)} 
                className="input" 
                placeholder="Username" 
                required />
                <input type="text" 
                value={password} 
                onChange=
                {(e)=>setPassword(e.target.value)} 
                className="input" 
                placeholder="Password" 
                required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>);
}

export default LoginForm;