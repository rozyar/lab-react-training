import fernando from './style.module.css'

export function Greetings(props){
    let message =" ";
    switch(props.lang){
        case "de":message = "hallo"
        break;
        case "en":message = "Hi"
        break;
        case "es":message = "hola"
        break;
        case "fr":message = "bonjour"
        break;
    }

    return (
        <div className = {fernando.Greetings}> {message} {props.children} </div>

    )
}