import taskIcon from '../../assets/Task.svg';
import './styles.scss';

export function TaskEmpty() {
  return (
    <div className="taskPainel">
      <img src={taskIcon} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <p>Crie tarefas e organize seus tens a fazer</p>
    </div>
  );
}