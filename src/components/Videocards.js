import React from "react";

const VideoCard = ({ info }) => {
  return (
    <div className="w-64 rounded overflow-hidden shadow-lg m-2 h-72 bg-white">
      <img
        alt="thumbnail"
        src={info.snippet.thumbnails.medium.url}
        className="w-full h-40 "
      />
      <div className="px-4 py-2">
        <div className="font-bold text-lg mb-1 truncate">
          {info.snippet.title} {/* Truncate long titles */}
        </div>
        <p className="text-gray-700 text-sm truncate">
          {info.snippet.channelTitle} {/* Truncate long channel titles */}
        </p>
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
