import classNames from 'classnames';
import styles from './styles.module.css';

export const PeriodContainer = ({ children, additionClass = '' }) => (
  <div className={classNames(styles.container, additionClass)}>
    <div className={styles.line} />
    {children}
  </div>
);

export default PeriodContainer;
