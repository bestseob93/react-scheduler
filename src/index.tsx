/**
 * @class Scheduler
 */

import * as React from 'react';

import styles from './styles.css';
import SchedulerHeader from './SchedulerHeader';

export type Props = { text: string };

const Scheduler: React.FC<Props> = () => {
  return (
    <div className={styles['scheduler-root']} style={{ width: 1440 }}>
      <SchedulerHeader />
      <table className={styles['scheduler-table']}>
        <thead>
          <tr>
            <th>1</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Scheduler;
