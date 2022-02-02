import styles from './style.module.css';

export function Random (props){
    const numer = Math.floor(Math.random() * (props.max - props.min)) + props.min; ;

    return(
        <div class={styles.random}>um numero aleatorio: {numer}</div>


    )

}