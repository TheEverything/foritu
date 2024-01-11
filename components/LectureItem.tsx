import db from "@/lib/db";
import { cn } from "@/lib/utils";
import { Lecture } from "@prisma/client";

interface Props {
  className?: string;
  lecture: Lecture;
}

async function LectureItem({ className, lecture }: Props) {
  const gradesById = await db.grade.findMany({ where: { lectureId: { equals: lecture.id } } });
  return (
    <div className={cn("w-[379px] h-fit", className)}>
      <div className="w-fit h-fit flex flex-row justify-center items-center gap-2 p-2 overflow-hidden">{lecture.title}</div>
      <div className="w-fit h-fit flex flex-row justify-center items-center gap-2 p-2 overflow-hidden">
        {gradesById.map((grade) => (
          <div className="w-8 h-8 flex flex-row justify-center items-center gap-2 p-2 overflow-hidden">{grade.note}</div>
        ))}
      </div>
    </div>
  );
}

export default LectureItem;
