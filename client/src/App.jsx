 import React from 'react';
 import { StreamChat } from 'stream-chat';
 import { chat } from 'stream-chat-react';
 import Cookies from  'universal-cookie';

 import { channelListContainer, channelContainer} from './components'; 

 const apiKey = 'u9gf35u8yj2n';

 const client = StreamChat.getInstance(apiKey);  

 const App = () => {
    return (
        <div className = "app__wrapper">
             <Chat client={client} theme="team light">
                <channelListContainer
                 
                />
                <channelContainer 
                
                />
             </Chat>
        </div>
    );
 }

 export default App