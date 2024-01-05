import db from "@/lib/db";

async function Page() {
  const allSemesters = await db.semester.findMany({
    include: { lectures: true }
  });

  return (
    <div className="h-full flex flex-col justify-center items-center">
      {allSemesters.map((semester) => (
        <div key={semester.id}>
          <h1>{semester.title}</h1>
          {semester.lectures.map((lecture) => (
            <div key={lecture.id}>
              <h2>{lecture.title}</h2>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Page;
