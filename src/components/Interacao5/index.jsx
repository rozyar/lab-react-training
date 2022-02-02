import styles from './style.module.css';
import Visa from '../../assets/images/visa.png'
import Mastercard from '../../assets/images/mastercard-logo.png';


export function CreditCard(props){
    const ccnumber = props.number.substr(-4)
    let typeflag = '';
    if (props.type === 'Visa'){
        typeflag = <img src={Visa} alt="visa"></img>
    }
    if (props.type === 'Master Card'){
        typeflag = <img src={Mastercard} alt="mastercard"></img>
    }


    return(
        <div className= {styles.CreditCard} style={{backgroundColor: `${props.bgColor}`, color: `${props.color}`}}>
            <div className={styles.tipo}> {typeflag} </div>

            <div className={styles.numero}> 
                <span>&bull;&bull;&bull;&bull;</span> 
                <span>&bull;&bull;&bull;&bull;</span> 
                <span>&bull;&bull;&bull;&bull;</span> {ccnumber}
            </div>
            <div className= {styles.infos}> Expires {props.expirationMonth}/{props.expirationYear}
                {props.bank} 
                 {props.owner}
             </div>
        </div>
    )

}

