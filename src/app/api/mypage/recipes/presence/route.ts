import { ERROR_MESSAGES } from '@/constants/errorMessage';
import { getWeeklyRecipePresence } from '@/services/recipes';
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
    //TODO: 아이디 바꾸기
    //const user = await getUser(); user.id
    const data = await getWeeklyRecipePresence({
      userId: '6619b5b3-4fcc-4b55-a9c9-2bd7688b8614',
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
