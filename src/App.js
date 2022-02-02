import { IdCard } from './components/Interação1';

import {Greetings} from './components/interação2';

import { Random} from './components/Interacao3';

import { BoxColor } from './components/Interacao4';

import { CreditCard } from './components/Interacao5';

import { DriverCard } from './components/Interacao7';

import {ClickablePicture} from './components/ClickablePicture/index'
import Alemão from './assets/images/maxence.png'
import AlemãoOclus from './assets/images/maxence-glasses.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <IdCard
       LastName='Doe'
       FirstName='John'
       Gender='male'
       Height={178}
       Birth={new Date("1992-07-14")}
       picture="https://randomuser.me/api/portraits/men/44.jpg"

       />
       <IdCard
       LastName='Delores '
       FirstName='Obrien'
       Gender='female'
       Height={172}
       Birth={new Date("1988-05-11")}
       picture="https://randomuser.me/api/portraits/women/44.jpg"
       />
       <Greetings lang="de">Ludwig</Greetings>
       <Greetings lang="fr">François</Greetings>

        <Random min={1} max={6}/>
        <Random min={1} max={100}/>

        <BoxColor r={255} g={0} b={0} />
        <BoxColor r={128} g={255} b={0} />

        <CreditCard
        type="Visa"
        number="0123456789018845"
        expirationMonth={3}
        expirationYear={2021}
        bank="BNP"
        owner="Maxence Bouret"
        bgColor="#11aa99"
        color="white" 
        />
    
        <CreditCard
        type="Master Card"
        number="0123456789010995"
        expirationMonth={3}
        expirationYear={2021}
        bank="N26"
        owner="Maxence Bouret"
        bgColor="#eeeeee"
        color="#222222"
      />      
    
      <CreditCard
       type="Visa"
       number="0123456789016984"
       expirationMonth={12}
        expirationYear={2019}
        bank="Name of the Bank"
        owner="Firstname Lastname"
        bgColor="#ddbb55"
        color="white" 
      />

      <DriverCard
        name="Travis Kalanick"
        rating={4.2}
        img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
        car={{
        model: "Toyota Corolla Altis",
        licensePlate: "CO42DE"
          }}
      />

      <DriverCard
        name="Dara Khosrowshahi"
        rating={4.9}
        img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
        car={{
        model: "Audi A3",
        licensePlate: "BE33ER"
         }}
      />
        <p>
          <ClickablePicture
          img={Alemão}
          imgClicked={AlemãoOclus}
          />
        </p>
      </header>
    </div>
  );
}

export default App
