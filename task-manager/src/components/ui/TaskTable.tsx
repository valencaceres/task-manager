import TableMobile from "./TableMobile";
import TableDesktop from "./TableDesktop";

interface Task {
  _id: string;
  title: string;
  description: string;
  status: boolean;
  createdAt: string;
}

interface TaskTableProps {
  tasks: Task[] | undefined;
}

export default function TaskTable({ tasks = [] }: TaskTableProps) {

  return (
    <div className="w-full">
      <TableDesktop tasks={tasks}/>
      <TableMobile tasks={tasks}/>
    </div>
  );
}
