import React from 'react';
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector(state => state.movies?.nowPlayingMovies);

    if (!movies || movies.length === 0) {
        return null;
    }

    const mainMovie = movies[Math.floor(Math.random() * movies.length)];
const{title,backdrop_path,overview,poster_path,id}=mainMovie;

    return (
        <div className='pt-[35%] bg-black md:pt-0 bg-transparent bg-fixed'>
            <VideoTitle title={title} overview={overview}/>
            <VideoBackground movieId={id} />
        </div>
    );
};

export default MainContainer;




// {
//     "id": 956920,
//     "results": [
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Extended Preview",
//         "key": "wUlomansnqg",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Clip",
//         "official": true,
//         "published_at": "2023-12-08T17:00:54.000Z",
//         "id": "6573b0777a3c52012dff4bfa"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "qmbKcSkd9q0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-12-05T17:07:12.000Z",
//         "id": "6572ebcac4f552010ba016a9"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Reactions Trailer",
//         "key": "sXTkzwlCjJ0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-11-24T20:22:30.000Z",
//         "id": "656474ce3679a10974da9e59"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Behind the Scenes",
//         "key": "PIhOCi4TwCI",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Behind the Scenes",
//         "official": true,
//         "published_at": "2023-11-15T14:46:45.000Z",
//         "id": "655c8d1c53866e011c0ac7c0"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Barn Elf Rules! [Subtitled]",
//         "key": "bQ-yXip9Cmc",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Teaser",
//         "official": true,
//         "published_at": "2023-10-27T08:54:41.000Z",
//         "id": "654b7eba67b6130102e1a57f"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Official Trailer",
//         "key": "dJt3AAnETy0",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-10-25T15:41:09.000Z",
//         "id": "6539feb72811a1014d60f53a"
//       },
//       {
//         "iso_639_1": "en",
//         "iso_3166_1": "US",
//         "name": "Teaser Trailer",
//         "key": "SyYlU2iBEwk",
//         "site": "YouTube",
//         "size": 1080,
//         "type": "Trailer",
//         "official": true,
//         "published_at": "2023-09-27T12:35:24.000Z",
//         "id": "651e7571f04d0100ad123199"
//       }
//     ]
//   }