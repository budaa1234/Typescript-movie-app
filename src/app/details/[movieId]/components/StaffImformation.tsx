"use client"
import { getDirector } from "@/lib/api/get-director";
import { Director } from "@/types";
import { useEffect, useState } from "react";

export const StaffImformation = ({id}: {id: string}) => {
  const [direct, setDirect] = useState<Director>();
  
  console.log(id);

  useEffect(() => {
    if (!id) return;
    const getMovie = async () => {
      try {
        const data = await getDirector(id);
        setDirect(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMovie();
  }, [id]);
  console.log(direct);

  const directors = direct?.crew?.filter(
    (director) => director.known_for_department === "Directing"
  );

  const writers = direct?.crew?.filter(
    (writer) => writer.known_for_department === "Writing"
  );

  const stars = direct?.cast?.filter(
    (star) => star.known_for_department === "Acting"
  );

  return (
    <div className="flex-col  flex gap-y-[33px]">
      <div className="flex px-[20px] gap-13  border-b">
        <p className="text-[16px] font-bold">Director</p>
        {directors?.slice(0, 1).map((director) => (
          <p className="text-[16px]">{director?.name}</p>
        ))}
      </div>

      <div className="flex px-[10px] gap-13 border-b">
        <p className="text-[16px] font-bold ">Writers</p>
        {writers?.slice(0, 3).map((writer) => (
          <p className="text-[16px]">{writer?.name}</p>
        ))}
      </div>
      <div className="flex px-[20px] gap-13  border-b">
        <p className="text-[16px] font-bold ">Stars</p>
        {stars?.slice(0, 3).map((star) => (
          <p className="text-[16px]">{star?.name}</p>
        ))}
      </div>
    </div>
  );
};
