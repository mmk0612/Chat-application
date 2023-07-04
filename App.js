import { ChatEngine } from "react-chat-engine";

import "./App.css";
import LoginForm from "./components/LoginForm";
import ChatFeed from "./components/ChatFeed";

const App = ()=>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="330c28d5-1f44-49fd-8868-938e5987c512"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=><ChatFeed {...chatAppProps} />}
        />
    );
}

export default App;