import React from "react"

const ChatMessage=({name,message})=>{
    return(
        <div className="flex items-center shadow-sm">
            <img
        alt="user"
        src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
        className="h-8 rounded-full"
      />
      <span className="font-bold px-2">
        {name}
      </span>
      <span className="">
        {message}
      </span>
      
      
        </div>

        
        
    )
}
export default ChatMessage