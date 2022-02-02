import style from "./style.module.css"

export function IdCard(props){
return (<div className ={style.IdCardBox}>
   <img src= {props.picture} alt= {props.alt} /> 
   <div className ={style.texto}>
       <div><p>firstName: </p>{props.firstName}</div>
       <div><p>Lastname: </p>{props.LastName}</div>
       <div><p>Gender: </p>{props.Gender}</div>
       <div><p>Height: </p>{props.Height /100}</div>
       <div><p>Birth: </p>{props.Birth.toDateString()}</div>

   </div>
</div>
)
}