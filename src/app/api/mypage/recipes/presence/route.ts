import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { getWeeklyRecipePresence } from '@/services/recipes';
import { getUser } from '@/services/user';
import { NextRequest, NextResponse } from 'next/server';

const DATE_PARAMS = {
  START: 'startDate',
  END: 'endDate'
};

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const startDate = searchParams.get(DATE_PARAMS.START);
  const endDate = searchParams.get(DATE_PARAMS.END);

  if (!startDate || !endDate) {
    return NextResponse.json({ error: ERROR_MESSAGES.MISSING_DATES }, { status: 400 });
  }

  try {
    const user = await getUser();
    const data = await getWeeklyRecipePresence({
      userId: user.id,
      startDate,
      endDate
    });
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: error.message === ERROR_MESSAGES.INVALID_TOKEN ? 401 : 500 }
    );
  }
}
