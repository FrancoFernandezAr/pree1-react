import React from 'react'

const Custombuttom = ({ color, label, callback}) => {
    return (
        <button style={{ backgroundColor: color }} onClick={callback} className={styles.button}>
            {label}
        </button>
    )
}

export default Custombuttom

