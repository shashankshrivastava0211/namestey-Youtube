import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";

import { generate, makeid } from "../helper";

const Livechat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const interval = setInterval(() => {
            // Simulated API polling, replace with actual fetch call
            console.log("API polling");
            dispatch(addMessage({
                name: generate(),//calling thast function here as it is returning random name
                onemessage: makeid(15) + "🚀"
            }));
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
            {chatMessages.map((message, i) => (
                <ChatMessage key={i} name={message.name} message={message.onemessage} />
            ))}
        </div>
    );
};

export default Livechat;
