import styles from "./style.module.css";

export function DriverCard(props){

    let numero = Math.round(props.rating);
    let array = [];
    for (let i = 0; i < numero; i++){
        array.push('★')
    }
    let estrelas = array.join('').padEnd(5, '☆')


    return(
        <div className = {styles.DriverCard}>
                <img src={props.img} alt ="driver"></img>
                <div className = {styles.conteudo}>
                    <h3>{props.name}</h3>
                    <span>{estrelas}</span>
                    <h6>{props.car.model} - {props.car.licensePlate}</h6>
                </div>
        </div>
    )
}