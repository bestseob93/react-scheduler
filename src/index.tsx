/**
 * @class ExampleComponent
 */

import * as React from 'react';

import styles from './styles.css';

export type Props = { text: string };

const Scheduler: React.FC<Props> = ({ text }) => {
  return <div className={styles.test}>Example Component:dd {text}</div>;
};

export default Scheduler;
