import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { getPinnedRecipes } from '@/services/recipes';
import { getUser } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const user = await getUser();
    const data = await getPinnedRecipes(user.id);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.message === ERROR_MESSAGES.INVALID_TOKEN ? 401 : 500 }
    );
  }
}
