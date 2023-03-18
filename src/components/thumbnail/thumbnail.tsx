import { image_base } from "src/helpers/constants";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
const Thumbnail = ({ movie }: ThumbnailProps) => {
  return (
    <div className="relative h-[330px]  min-w-[180px] transition duration-220  md:hover:scale-110 cursor-pointer ease-out md:h-[440px]  md:min-w-[290px] ">
      <Image
        src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
        alt={movie?.name}
        fill
        className="object-cover rounded-sm md:rounded "
      />
    </div>
  );
};

export default Thumbnail;
