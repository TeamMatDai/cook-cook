'use client';
import AuthLogin from './_components/AuthLogin';
import Background from '../../../../../public/images/login/loginBackground.png';
import LogoIcon from '@/icons/cookcookLogo.svg';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <main className="relative w-full h-dvh">
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
          <LogoIcon />
        </div>
        <AuthLogin />
      </div>
    </main>
  );
};

export default SignInPage;
