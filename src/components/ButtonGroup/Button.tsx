import Alert from '../Alert';
import Styles from './Button.module.css';
interface Props {
  children: string;
  color?:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'danger'
    | 'warning'
    | 'info'
    | 'light'
    | 'dark';
  onClick: () => void;
}
const Button = ({ children, onClick, color }: Props) => {
  return (
    <div>
      <button
        type="button"
        color={color}
        onClick={onClick}
        className={[Styles.btn, Styles['btn-' + color]].join(' ')}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
