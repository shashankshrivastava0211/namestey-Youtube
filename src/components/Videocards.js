import React from "react";

const VideoCard = ({ info }) => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 h-full bg-white">
            <img
                alt="thumbnail"
                src={info.snippet.thumbnails.medium.url}
                className="w-full h-40 "
            />
            <div className="px-4 py-2">
                <div className="font-bold text-lg mb-1">{info.snippet.title}</div>
                <p className="text-gray-700 text-sm">{info.snippet.channelTitle}</p>
            </div>
            <div className="px-4 pt-2 pb-1">
                <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2">
                    {info.statistics.viewCount} views
                </span>
            </div>
        </div>
    );
};

export default VideoCard;
