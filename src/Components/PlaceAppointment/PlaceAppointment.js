const PlaceAppointment = (props) => {

    return ( 
        <>
        <header>
            <h1>Book an PlaceAppointment</h1>
        </header>
        <div className="Main">
            <div className="Name Appointment">
            <label>Name</label>
            <input type="text" className="Name-Appointment" placeholder="Name"/> 
            </div>
            <div className="Email Appointment">
                <label>Email</label>
                <input type="text" className="Email-Appointment" placeholder="email" />
            </div>
            <div className="mobileNumber Appointment">
                <label>MobileNumber</label>
                <input type="text" className="MobileNumber-Appointment" placeholder="mobileNumber"/>
            </div>
            <div className="Gender Appointment">
                <label>Gender</label>
                <input type="text" className="Gender-Appointment"/>
            </div>
            <div className="joinDate Appointment">
                <label>Date of joinning</label>
                <input type="date" className="date-Appointment" />
            </div>
            <div className="Address Appointment">
                <label>street/nearby</label>
                <input type="text" className="Address-Appointment"/>
            </div>
            <div className="city Appointment">
                <label>City</label>
                <input type="text" className = "city-Appointment" />
            </div>
        <div className="submit Appointment">
            <button onClick={props.createUser}>Submit</button>
        </div>
        </div>
        </>
     );
}
 
export default PlaceAppointment;