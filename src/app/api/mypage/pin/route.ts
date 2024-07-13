import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { getPinnedRecipes, getRecipes } from '@/services/recipes';
import { getUser } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

const DATE_PARAMS = {
  CREATED_AT: 'createdAt'
};

export async function GET(req: NextRequest) {
  try {
    // TODO: 아이디 바꾸기
    //const user = await getUser(); user.id
    const data = await getPinnedRecipes({
      userId: '6619b5b3-4fcc-4b55-a9c9-2bd7688b8614'
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.message === ERROR_MESSAGES.INVALID_TOKEN ? 401 : 500 }
    );
  }
}
