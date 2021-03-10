/**
 * @class Scheduler
 */

import React, { useState } from 'react';

import styles from './styles.css';
import SchedulerHeader from './SchedulerHeader';
import { ViewType } from './Scheduler';
import { VIEW_TYPE } from './constants';

export type Props = { viewType: ViewType };

const Scheduler: React.FC<Props> = ({ viewType = VIEW_TYPE.MONTH }) => {
  const [localViewType, setViewType] = useState<ViewType>(viewType);
  return (
    <div className={styles['scheduler-root']} style={{ width: 1440 }}>
      <SchedulerHeader viewType={localViewType} />
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
