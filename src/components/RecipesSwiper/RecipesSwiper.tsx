import { Swiper, SwiperSlide } from 'swiper/react';
import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import 'swiper/css';

const RecipesSwiper = ({ recipes }) => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1.94}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {recipes.map((recipe, index) => (
        <SwiperSlide key={index}>
          <CardItem href="/" as="div">
            <CardImage src={recipe.thumbnail} />
            <CardTitle>{recipe.title}</CardTitle>
            <CardDescription>{recipe.description}</CardDescription>
          </CardItem>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default RecipesSwiper;
