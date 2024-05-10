import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEOS_API } from "../utils/constants";
import Videocard from "./Videocards";
import { Link } from "react-router-dom";

const Videocontainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        console .log(json)
        setVideos(json.items);//direct vedios store kara h hamne 
    };

    return (
        <div className="flex flex-wrap">
            {videos.map((video) => (
                <Link key={video.id} to={`/watch?v=${video.id}`}>
                    <Videocard info={video} />
                </Link>
            ))}
        </div>
    );
};

export default Videocontainer;
