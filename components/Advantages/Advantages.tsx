import styles from './Advantages.module.css';
import TickIcon from './tick.svg';

import { H, P } from '..';
import { IAdvantagesProps } from './Advantages.props';


export const Advantages = ({ advantages }: IAdvantagesProps) => (
  <ul className={styles.advantages}>
    {advantages.map((item) => (
      <li className={styles["advantages-item"]} key={item._id}>

        <TickIcon />
        <H className={styles["advantages-item-title"]} tag="h3">{item.title}</H>
        {
          item.description &&
          <>
            <hr className={styles.hr} />
            <P size="lg">{item.description}</P>
          </>
        }
      </li>
    ))}
  </ul>
);
