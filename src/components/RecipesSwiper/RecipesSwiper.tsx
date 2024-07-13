import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RecipesSwiper = ({ recipes, render }) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={1.94} className="!pl-[22px]">
      {recipes.map((recipe, index) => (
        <SwiperSlide key={index}>{render(recipe)}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipesSwiper;
