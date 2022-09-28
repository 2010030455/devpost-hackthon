import './../App.css'
const Welcome = () => {
    return ( 
        <>
        <div className="nav">
        <div className="nav-about">
                <a href="/Contact">Contact</a>
                </div>
                <div className="nav-project">
                <a href="/ViewAppointment">ViewAppointment</a>
                </div>
                <div className="nav-social">
                <a href="/PlaceAppointment">PlaceAppointment</a>
                </div>
        </div>
        <div className='Header'>
        <h1>Welcome to FitnessClub</h1>
        </div>
        <div className='about'>
        <p>
        A health club (also known as a fitness club, fitness center, health spa, and commonly referred to as a gym) is a place that houses exercise equipment for the purpose of physical exercise. In recent years, the number of fitness and health services have increased, expanding the interest among the population.
        </p>
        </div>

        <footer>
          @Copyright <b>GET-FIT health club</b>
        </footer>
        </>
     );
}
 
export default Welcome;