import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

type Recipe = {
  title: string;
  subtitle: string;
  time: number;
  thumbnail: string;
  level: string;
  id: number;
};

const RecipesSwiper = ({
  recipes,
  render
}: {
  recipes: Recipe[];
  render: (recipe: Recipe) => React.ReactNode;
}) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1.94} className="!pl-[22px]">
      {recipes.map((recipe, index) => (
        <SwiperSlide key={index}>{render(recipe)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipesSwiper;
