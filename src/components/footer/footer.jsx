
import './footer.css';

function Footer(){
    return(
        <div className='footer'>
        
            <div className='text'>
                
            SORTING VISUIALIZER
            <br/>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
            BY ANAK VYAS

            </div>

            <div className='icon'>
           <a href='https://github.com/Anakvyas'> <i className="fa-brands fa-github" style={{color: "#000000",fontSize: "1.2rem"}}></i></a>
           <a href='www.linkedin.com/in/anak-vyas-b899ba28a'> <i className="fa-brands fa-linkedin" style={{color: "#000000",fontSize: "1.2rem"}}></i></a>
           <a href='https://www.instagram.com/anak_vyas/'><i className="fa-brands fa-instagram"  style={{color: "#000000",fontSize: "1.2rem"}}></i></a>
            </div>

        </div>


    )
}

export default Footer;