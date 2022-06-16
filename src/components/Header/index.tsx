import rocketImg from '../../assets/Rocket.svg';
import './styles.scss';

export function Header() {
  return (
    <header className="header">
      <img src={rocketImg} alt="" />
      <p className="title">to</p>
      <span>do</span>
    </header>
  )
}