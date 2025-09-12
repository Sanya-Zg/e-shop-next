import { Heart } from "lucide-react";
import Link from "next/link";

const FavoriteButton = () => {
  return (
    <Link href={'/cart'} className="group relative">
      <Heart className="w-5 h-5 hover:text-shop_light_green hoverEffect" />
      <span className="bg-shop_dark_green h-3.5 w-3.5 absolute -top-1 -right-1 text-white text-xs rounded-full font-semibold flex justify-center items-center ">
        0
      </span>
    </Link>
  );
}
export default FavoriteButton