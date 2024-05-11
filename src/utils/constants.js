// const googleapis="AIzaSyAvamLDkiQkcihUCZPQ71S9VyUUfDs9VBc"
// export const YOUTUBE_API="https://youtube.googleapis.com/youtube/v3/videos?chart=mostPopular&key="+googleapis;

const GOOGLE_API_KEY = "AIzaSyAvamLDkiQkcihUCZPQ71S9VyUUfDs9VBc";

const MAX_RESULTS = 50;

export const YOUTUBE_VIDEOS_API =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=" +
    MAX_RESULTS +
    "&regionCode=IN&key=" +
    GOOGLE_API_KEY;

export const SEARCH_YOUTUBE="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


