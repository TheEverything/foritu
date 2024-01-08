import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function LectureItem({ className }: Props) {
  return <div className={cn("w-[]379px", className)}></div>;
}

export default LectureItem;
