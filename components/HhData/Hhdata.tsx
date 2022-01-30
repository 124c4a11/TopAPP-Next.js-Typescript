import cn from 'classnames';

import styles from './HhData.module.css';
import RateIcon from './star.svg';
import { IHhDataProps } from './HhData.props';
import { Card } from '..';
import { formatNumber, priceRu } from '../../helpers/helpers';

export const HhData = ({
  count,
  juniorSalary,
  middleSalary,
  seniorSalary
}: IHhDataProps) => {
  return (
    <div className={styles["hh"]}>
      <Card className={styles["hh-card"]}>
        <h3 className={styles["hh-title"]}>Всего вакансий</h3>
        <div
          className={cn(
            styles["hh-value"],
            styles["hh-value-lg"],
            styles["hh-value-primary"]
          )}
        >{formatNumber(count)}</div>
      </Card>
      <Card className={styles["hh-card"]}>
        <ul className={styles["hh-list"]}>
          <li className={styles["hh-list-item"]}>
            <h3 className={styles["hh-title"]}>Начальный</h3>
            <div className={styles["hh-value"]}>{priceRu(juniorSalary)}</div>
            <div className={styles["hh-rate"]}>
              <RateIcon className={styles["hh-rate-item-filled"]} />
              <RateIcon />
              <RateIcon />
            </div>
          </li>
          <li className={styles["hh-list-item"]}>
            <h3 className={styles["hh-title"]}>Средний</h3>
            <div className={styles["hh-value"]}>{priceRu(middleSalary)}</div>
            <div className={styles["hh-rate"]}>
              <RateIcon className={styles["hh-rate-item-filled"]} />
              <RateIcon className={styles["hh-rate-item-filled"]} />
              <RateIcon />
            </div>
          </li>
          <li className={styles["hh-list-item"]}>
            <h3 className={styles["hh-title"]}>Профессионал</h3>
            <div className={styles["hh-value"]}>{priceRu(seniorSalary)}</div>
            <div className={styles["hh-rate"]}>
              <RateIcon className={styles["hh-rate-item-filled"]} />
              <RateIcon className={styles["hh-rate-item-filled"]} />
              <RateIcon className={styles["hh-rate-item-filled"]} />
            </div>
          </li>
        </ul>
      </Card >
    </div >
  );
};
