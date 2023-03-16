import { useState, useEffect } from "react";
import { HeroProps } from "./hero.props";
import { IMovie } from "../../interface/app.interface";
import Image from "next/image";
import { image_base } from "src/helpers/constants";
import {BsPlay} from "react-icons/bs"

const Hero = ({ trending }: HeroProps): JSX.Element => {
  const [movie, setMovie] = useState<IMovie>({} as IMovie);

  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    console.log(randomMovie);
    setMovie(randomMovie);
  }, [trending]);

  return (
    <div className="flex flex-col space-y-2 py-20 mp:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-end  ">
      <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie.name || movie?.title}
          fill
          className="object-cover"
        />
      </div>

      <h1 className="text-2xl font-bold md:text-4xl lg:text:-7xl">
        {movie?.title || movie?.name}
      </h1>
      <p className="max-w-xs md:max-w-lg lg:max-w-2xl text-xs text-shadow-md md:text-lg lg:text-2xl">
        {movie.overview}
      </p>
      <div>
        <button className=" flex justify-center items-center space-x-2 bg-transparent border-solid border-2 w-[200px] h-[56px]   rounded-full ">
          <BsPlay className="h-5 w-5 md:h-8 md:w-8"/> Watch now
        </button>
      </div>
    </div>
  );
};

export default Hero;
