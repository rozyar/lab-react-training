import styles from './style.module.css';


export function BoxColor(props){
    const divStyle = {backgroundColor: `rgb(${props.r}, ${props.g}, ${props.b})`}

    return (
        <div className={styles.Box} style={divStyle}>{divStyle.backgroundColor.toString()}</div>
    )
}
