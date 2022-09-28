const ContactUs = () => {
    return ( 
        <>
          <div className="connect" id="connect">
          <div className='connectForm'>
          <h1 className='connectTittle'>contact</h1>   
            <div >
                Name:<input type="text" placeholder='Name' className='nameContact txt'/>
            </div>
            <div>
                 email:<input type="text" placeholder='email' className='emailContact txt'/>
            </div>
            <div>
                message:<input type="text" placeholder='message' className='msgContact msg'></input>
            </div>
            <div>
                <button>Submit</button>
            </div>
          </div>
          </div>
        </>
     );
}
 
export default ContactUs;