import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { getMyRecipes } from '@/services/recipes';
import { getUser } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

const DATE_PARAMS = {
  CREATED_AT: 'createdAt'
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const createdAt = searchParams.get(DATE_PARAMS.CREATED_AT);

  if (!createdAt) {
    return NextResponse.json({ error: ERROR_MESSAGES.MISSING_CREATED_AT }, { status: 400 });
  }

  try {
    const user = await getUser();
    const data = await getMyRecipes({
      userId: user.id,
      createdAt
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.message === ERROR_MESSAGES.INVALID_TOKEN ? 401 : 500 }
    );
  }
}
