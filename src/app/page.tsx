import { Upcoming } from "@/components/Upcoming";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col gap-13 mx-auto max-w-[1280px]">
        <Upcoming />
      </div>
    </div>
  );
}
