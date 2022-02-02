import styles from ',/styles.module.css';

export function Rating(props){

    let numero = Math.round(props.children);
    let array = [];
    for (let i = 0; i< numero; i++){
        array.push('★')
    }
    let estrelas = array.join('')

    return(
        <div className={styles.Rating}>{estrelas.padEnd(5, "☆")}</div>
    )
}