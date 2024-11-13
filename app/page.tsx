export default function Home() {
  function fetchTasks() {
    return null;
  }

  const tasks = fetchTasks();

  return (
    <div className="px-8 py-12">
      {/* HEADING */}
      <div>
        <h1 className="text-4xl font-bold">Latest Tasks</h1>
      </div>

      {/* TASKS */}
      {tasks ? "task" : <p>None</p>}
    </div>
  );
}
