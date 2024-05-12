import { NextResponse } from 'next/server';

import TypeControllers from 'backEnd/controllers/typeController';

// eslint-disable-next-line import/prefer-default-export
export async function GET() {
  const res = await TypeControllers.fetchTypesController();
  console.log('èèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèèè');
  console.log(res);
  // const types = await res.json();
  return NextResponse.json(res);
}
