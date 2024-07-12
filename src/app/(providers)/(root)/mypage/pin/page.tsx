import { CardDescription, CardImage, CardItem, CardList, CardTitle } from '@/components/Card';
import Typography from '@/components/Typography';

const MyPinPage = () => {
  return (
    <>
      <Typography as="strong" size="xl" weight="medium" className="text-black block mt-[42px] mb-4">
        내가 저장한 레시피
      </Typography>
      <CardList>
        {Array.from({ length: 6 }, (_, index) => (
          <CardItem href="/" key={index}>
            <CardImage src="https://static.wtable.co.kr/image/production/service/product/35966/608f87f9-3193-4497-95dd-f163a4871b81.jpg?size=500x500" />
            <CardTitle>전복 황태 삼계탕</CardTitle>
            <CardDescription>간장을 태워 불맛을 낸 전복과 황태를 넣은 삼계탕</CardDescription>
          </CardItem>
        ))}
      </CardList>
    </>
  );
};

export default MyPinPage;
