import { Skeleton } from "./ui/skeleton";

export const MoviesLouding = () => {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between w-[1280px]">
        <div >
          <Skeleton className="w-[250px] h-[32px]" />
        </div>
        <div>
          <Skeleton className="w-[250px] h-[32px]" />
        </div>
      </div>
      <div className="flex flex-wrap w-[1280px] gap-8">
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
        <Skeleton className="w-[230px] h-[345px]" />
      </div>
    </div>
  );
};
