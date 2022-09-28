import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import uuid from 'react-uuid';
import ContactUs from './Components/ContactUs/ContactUs'
import PlaceAppointment from './Components/PlaceAppointment/PlaceAppointment'
import Welcome from './Components/Welcome'
import ViewAppointment from './Components/ViewAppointment/ViewAppointment'
function App() {
  const getLocalItmes=()=>{
    let list=localStorage.getItem('item')
    console.log(list)
    if(list){
        return JSON.parse(localStorage.getItem('item'))
    }
    else{
      return []
    }
}
  const [users,setUser] = useState(getLocalItmes())
  const createUser = () =>{
    var newUser = {
      uid:uuid(),
      uName:document.querySelector('.Name-Appointment').value,
      uEmail:document.querySelector('.Email-Appointment').value,
      uMobileNumber:document.querySelector('.MobileNumber-Appointment').value,
      uGender:document.querySelector('.Gender-Appointment').value,
      udate:document.querySelector('.date-Appointment').value,
      uAddress:document.querySelector('.Address-Appointment').value,
      ucity:document.querySelector('.city-Appointment').value,
    }
    console.log(newUser)
     setUser([...users,{...newUser}])
     console.log(users)
     
  }
  useEffect(() =>{
    localStorage.setItem('item',JSON.stringify(users))
 },[users])

  return (
    <Router>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/ViewAppointment" element={<ViewAppointment users={users} />} />
        <Route path="/Contact" element={<ContactUs />} />
        <Route path="/PlaceAppointment" element={<PlaceAppointment createUser={createUser}/>} />
      </Routes>
    </Router>
  );
}

export default App;
