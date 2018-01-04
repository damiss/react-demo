import React, { Component } from 'react'
import classNames from 'classnames'

import styles from './demo.css'

export default class Demo extends Component {
    render() {
        let cx = classNames({
            [styles.root]: true,
            "add": true
        })
        return (
            
            <div className={cx}>
                <span className={styles.child}>
                    span
                </span>
            </div>
        )
    }
}