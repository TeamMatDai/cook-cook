import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/supabaseClient';

export const POST = async (req: NextRequest) => {
  const supabase = createClient();

  try {
    await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${process.env.NEXT_PUBLIC_API_URL}`
      }
    });

    return NextResponse.json({ message: 'success kakao login' });
  } catch (error) {
    return NextResponse.json({ errorMsg: error });
  }
};
