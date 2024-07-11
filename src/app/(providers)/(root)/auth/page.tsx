'use client';
import AuthLogin from '@/app/(providers)/(root)/auth/_components/AuthContent/AuthLogin';
import Background from '@/icons/loginBackground.png';
import CookcookLogo from '@/icons/cookcookLogo.svg';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <div className="relative w-full h-dvh">
      <div className="absolute top-0 left-0 w-full h-dvh before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.45)]">
        <Image
          className="w-full h-dvh"
          src={Background}
          alt="background"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-dvh flex flex-col justify-center items-center">
        <div className="flex-grow flex justify-center items-center">
          <CookcookLogo />
        </div>
          <AuthLogin />
      </div>
    </div>
  );
};

export default SignInPage;
