import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import rocketImg from "../../assets/Rocket.svg";
import { Task } from "../../components/Task";
import { TaskEmpty } from "../../components/TaskEmpty";
import "./styles.scss";

export function Home() {
  const [tasks, setTasks] = useState([]);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = { concluded: false, text: event.target.task.value };
    setTasks([...tasks, newTask]);

    event.target.task.value = "";
  }

  function deleteTask(indexId: number) {
    setTasks((prev) => prev.filter((_, index) => index !== indexId));
  }

  function isTaskConcluded(indexId: number) {
    setTasks((prev) =>
      prev.map((task, index) => {
        return index === indexId
          ? { ...task, concluded: !task.concluded }
          : task;
      })
    );
  }

  return (
    <>
      <header className="header">
        <img src={rocketImg} alt="" />
        <p className="title">to</p>
        <span>do</span>
      </header>
      <form onSubmit={handleCreateNewTask} className="taskForm">
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          name="task"
          autoComplete="off"
        />
        <button className="createButton">
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
      <main className="taskBoard">
        <div className="taskHeader">
          <div className="taskCreated">
            <p>Tarefas criadas</p>
            <p className="taskCreatedCounter">{tasks.length}</p>
          </div>
          <div className="taskConcluded">
            <p>Concluídas</p>
            <p className="taskConcludedCounter">{tasks.filter(task => task.concluded === true).length}</p>
          </div>
        </div>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <Task
              isTaskConcluded={() => isTaskConcluded(index)}
              deleteTask={() => deleteTask(index)}
              content={task.text}
            />
          ))
        ) : (
          <TaskEmpty />
        )}
      </main>
    </>
  );
}
