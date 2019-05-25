import React, { Component } from 'react'
import styles from './Counter.module.css'
import CountDisplay from '../CountDisplay/CountDisplay';

interface Props {
    [key: string]: any;
}

interface IState {
    count: number;
};

export default class Counter extends Component<Props, IState> {
    state: IState = {
        count: 0
    }

    increment = () => this.setState({ count: this.state.count + 1 })

    decrement = () => this.setState({ count: this.state.count - 1 })

    render() {
        return (
            <section className={styles.container}>
                <div className={styles.inner__container}>
                    <button className={styles.button} onClick={this.decrement}>-</button>
                    <CountDisplay count={this.state.count} />
                    <button className={styles.button} onClick={this.increment}>+</button>
                </div>
            </section>
        )
    }
}
