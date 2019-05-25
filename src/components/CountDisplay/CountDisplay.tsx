import React from 'react'
import styles from './CountDisplay.module.css'
interface IProps {
    count?: number
}
const CountDisplay: React.FC<IProps> = (props: IProps) => <div className={styles.display}>{props.count}</div>
CountDisplay.defaultProps = {
    count: 10
}

export default CountDisplay