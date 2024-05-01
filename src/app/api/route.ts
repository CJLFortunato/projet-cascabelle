async function GET(request: Request) {
  console.log(request);
  return Response.json({ message: 'This is a placeholder' });
}

export default GET;
