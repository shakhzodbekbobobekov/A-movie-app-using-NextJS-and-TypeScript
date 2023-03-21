import { image_base } from "src/helpers/constants";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import ReactStars from "react-stars";
import { useInfoStore } from "../../store/index";

const Thumbnail = ({ movie, isBig = false }: ThumbnailProps) => {
  const { setModal, setCurrentMovie } = useInfoStore();

  const handleCurrentMovie = () => {
    setModal(true);
    setCurrentMovie(movie);
  };

  return (
    <div
    onClick={handleCurrentMovie }
      className={`relative ${
        isBig
          ? "h-[440px] md:h-[500px] min-w-[350px]  md:min-w-[470px]"
          : "h-[330px] md:h-[440px] min-w-[200px]  md:min-w-[290px]"
      }   transition duration-220  md:hover:scale-110 cursor-pointer ease-out  `}
    >
      <Image
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.name}
        fill
        className="object-cover rounded-sm md:rounded "
      />

      <div className="absolute top-0 bottom-0 right-0 left-0 bg-black/50 w-full h-full hover:bg-inherit" />

      <div className="absolute bottom-5 left-4 right-2">
        <div className="flex items-center space-x-2">
          <ReactStars
            edit={false}
            count={10}
            value={movie.vote_average}
            color2={"#fff"}
          />
          <p>({movie.vote_count})</p>
        </div>

        <h1 className="text-xl font-bold md:text-3xl lg:text:-4xl">
          {movie?.title || movie?.name}
        </h1>
      </div>
    </div>
  );
};

export default Thumbnail;
