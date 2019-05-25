import React from 'react'
import styles from './CountDisplay.module.css'
interface Props {
    count?: number
}
class CountDisplay extends React.Component<Props> {
    static defaultProps: Props = {
        count: 10
    }
    render() {
        return <div className={styles.display}>{this.props.count}</div>
    }
}

export default CountDisplay