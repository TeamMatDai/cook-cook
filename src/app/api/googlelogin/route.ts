import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/utils/supabase/supabaseServer';

export const POST = async (req: NextRequest) => {
  const supabaseClient = createClient();

  try {
    const { error } = await supabaseClient.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${process.env.NEXT_PUBLIC_API_URL}` }
    });

    if (error) throw error;

    return NextResponse.json({ message: 'Redirecting to Google' });
  } catch (error) {
    return NextResponse.json({ errorMsg: error });
  }
};
