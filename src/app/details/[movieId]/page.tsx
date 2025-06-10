import { Cover } from "./components/Cover";
import { Similar } from "./components/Similar";
import { StaffImformation } from "./components/StaffImformation";

const Page = async ({ params }: { params: Promise<{ movieId: string }> }) => {
  const { movieId } = await params;
  console.log(movieId);

  return (
    <div>
      <div className="mx-auto max-w-[1280px] flex flex-col gap-y-5">
      <Cover movieId={movieId} />
      <StaffImformation id={movieId}/>
      <Similar movieId={movieId}/>
      </div>
    </div>
  );
};
export default Page;
