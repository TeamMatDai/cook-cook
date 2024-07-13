import Image from 'next/image';
import Link from 'next/link';

const MyPage = () => {
  return (
    <>
      <div className="flex items-center mt-[30px]">
        <Image
          src="https://thumbnail.wingeat.com/users/images/ae93af21139a2c7c5c2a57ad5da405ad.jpeg?w=80"
          alt="My Page"
          width={50}
          height={50}
          className="w-[50px] h-[50px] rounded-full object-cover"
          unoptimized
        />
        <div className="ml-4">
          <p className="text-black">예린님 반가워요</p>
          <p className="text-gray-500 text-sm">lyr@kakao.com</p>
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        <li className="flex justify-between items-center px-4 py-4 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300">
          <Link href="/mypage/pin" className="text-black">
            북마크
          </Link>
          <div className="text-gray-200">&gt;</div>
        </li>
        <li className="flex justify-between items-center px-4 py-4 bg-white rounded-md hover:bg-gray-50 active:bg-gray-100 active:scale-95 transition duration-300">
          <Link href="#" className="text-black">
            로그아웃
          </Link>
          <div className="text-gray-200">&gt;</div>
        </li>
      </ul>
    </>
  );
};

export default MyPage;
