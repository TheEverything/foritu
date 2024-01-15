import db from "@/lib/db";
import { cn } from "@/lib/utils";
import { Semester } from "@prisma/client";
import LectureItem from "./LectureItem";

interface Props {
  className?: string;
  semester: Semester;
}

async function SemesterItem({ className, semester }: Props) {
  const lecturesById = await db.lecture.findMany({
    where: { semesterId: { equals: semester.id } }
  });

  return (
    <div className={cn("w-[379px] h-fit flex flex-col justify-start items-start gap-3 ", className)}>
      <p className="w-full h-fit font-semibold text-stone-500 text-base text-start">{semester.title}</p>
      <div className="w-full h-fit flex flex-col justify-start items-center gap-3 ">
        {lecturesById.map((lecture) => (
          <LectureItem lecture={lecture} key={lecture.id} className="w-full h-fit" />
        ))}
      </div>
    </div>
  );
}

export default SemesterItem;
