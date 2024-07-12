import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { CardItem } from '@/components/Card/Card';

SwiperCore.use([Navigation, Pagination]);

const RecipesSwiper = ({ recipes }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {recipes.map((recipe, index) => (
        <SwiperSlide key={index}>
          <CardItem
            href="#"
            title={recipe.title}
            description={recipe.description}
            image={recipe.thumbnail}
            isOverlayCard={false}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipesSwiper;
