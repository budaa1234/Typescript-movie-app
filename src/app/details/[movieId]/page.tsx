import { Cover } from "./components/Cover";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
      <Cover movieId={movieId} />
    </div>
  );
};
export default Page;
