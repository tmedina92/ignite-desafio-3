import { PlusCircle } from 'phosphor-react';
import taskIcon from '../assets/Task.svg';
import './styles.scss';

export function Feed() {
  return (
    <>
      <form className="taskForm">
        <input 
          type="text" 
          placeholder="Adicione uma nova tarefa" 
        />
        <button className="createButton">
          Criar
          <PlusCircle  size={20}/>
        </button>
      </form>
      <main className="taskBoard">
        <div className="taskHeader">
          <div className="taskCreated">
            <p>Tarefas criadas</p>
            <p className="taskCreatedCounter">0</p>
          </div>
          <div className="taskConcluded">
            <p>Concluídas</p>
            <p className="taskConcludedCounter">0</p>
          </div>
        </div>
        <div className="taskPainel">
          <img src={taskIcon} alt="" />
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <p>Crie tarefas e organize seus tens a fazer</p>
        </div>
      </main>
    </>
  );
}