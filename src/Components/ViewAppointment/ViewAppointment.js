const ViewAppointment = (props) => {
    <header>
        <h1>Total Appointments</h1>
    </header>
    return ( 
        <>
        {
            props.users.map(user => {
                return( 
                <ul key={user.uid}>  
                <li>Name :{user.uName}</li>
                <li>Email :{user.uEmail}</li>
                <li>MobileNumber :{user.uMobileNumber}</li>
                <li>Gender :{user.uGender}</li>
                <li>Date :{user.udate}</li>
                <li>Address :{user.uAddress}</li>
                <li>city :{user.ucity}</li>
                </ul>
                )
            })
        }
        </>
     );
}
 
export default ViewAppointment;