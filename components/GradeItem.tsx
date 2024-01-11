import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

function GradeItem({ className }: Props) {
  return <div className={cn("", className)}></div>;
}

export default GradeItem;
