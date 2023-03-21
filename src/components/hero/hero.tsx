import { useState, useEffect } from "react";
import { HeroProps } from "./hero.props";
import { IMovie } from "../../interface/app.interface";
import Image from "next/image";
import { image_base } from "src/helpers/constants";
import { BsPlay } from "react-icons/bs";
import ReactStars from "react-stars";

const Hero = ({ trending }: HeroProps): JSX.Element => {
  // const {setModal} from useInfoStore()
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, [trending]);

  return (
    <div className="flex flex-col space-y-2 py-20 mp:space-y-4 lg:h-[65vh] lg:pb-12 lg:center  ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie.name}
          fill
          className="object-cover"
        />
      </div>

      <div className="py-[4px] px-[8px] rounded-bl-[8px] rounded-tr-[8px] text-center bg-[#e5e5e5]/50 inline-block w-[100px]  ">
        {movie.media_type}
      </div>

      <div className="flex items-center space-x-2">
        <ReactStars
          edit={false}
          count={10}
          value={movie.vote_average}
          color2={"#fff"}
        />
        <p>({movie.vote_count})</p>
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text:-7xl">
        {movie?.title || movie?.name}
      </h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-xs text-shadow-md md:text-lg lg:text-2xl">
        {movie?.overview?.slice(0, 150)}...
      </p>
      <div>
        <button className=" flex justify-center items-center space-x-2 bg-transparent border-solid border-2 w-[200px] h-[56px]   rounded-full ">
          <BsPlay className="h-5 w-5 md:h-8 md:w-8" /> Watch now
        </button>
      </div>
    </div>
  );
};

export default Hero;
