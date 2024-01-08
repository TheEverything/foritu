import SemesterItem from "@/components/SemesterItem";
import db from "@/lib/db";

async function Page() {
  const allSemesters = await db.semester.findMany({});

  return (
    <div className="fixed bottom-0 left-0 right-0 top-[60px] flex flex-col justify-start items-center px-6 pt-3 pb-4 overflow-y-scroll">
      <div className="w-full h-fit max-w-[600px] flex flex-col justify-start items-center gap-6 ">
        {allSemesters.map((semester) => (
          <SemesterItem key={semester.id} className="h-fit w-full " />
        ))}
      </div>
    </div>
  );
}
export default Page;


