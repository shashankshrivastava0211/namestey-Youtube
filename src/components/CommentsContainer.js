import React from "react";
const commentData =[{
    name:"shashank",
    text :"lorem ipsum doler sit bjskab",
    replies:[
        {
            name:"gungun paglet",
            text:"awesome",
            replies:[
                {
                    name :"xyz",
                    text:"achha",
                    replies:[

                    ]
                }
            ]
        }
    ]
}]

const Comment =({data})=>{
    const { name, text, replies } = data;

    return(
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg">
        <img className="w-14 h-14 p-3" alt="user" src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"/>
        <div>
            <p className="bold"> {name}</p>
            <p>{text}</p>
        </div>
        
    </div>
    )

}
const CommentsContainer=()=>{
    return(
        <div className="m-5 p-2">
            <h1 className="text-2xl bold">Comments:</h1>
            <Comment data={commentData[0]}/>
        </div>
    )
}
export default CommentsContainer