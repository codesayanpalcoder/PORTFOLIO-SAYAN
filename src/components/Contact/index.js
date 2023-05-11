import emailjs from '@emailjs/browser'
import { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

  const Contact = () => {
    const [userData, setUserData] = useState({
      Name: "",
      email: "",
      subject:"",
      message: "",
    });
    const [letterClass] = useState('text-animate')
    
 
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  
  const submitData = async (event) => {
    event.preventDefault();
    const { Name,  email, subject, message } = userData;

    if (Name && email && subject && message) {
      const res = fetch(
        "https://my-react-portfolio-1b310-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Name,
            email,
            subject,
            message,
            
          }),
        }
      );

      if (res) {
        setUserData({
          Name: "",
          email: "",
          subject:"",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } 
  };

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            I have completed various MERN Stack projects  and am
            apt in it. Moreover, my years at nsec college have taught me a
            lot about React and Javascript. I am highly interested and invested in
            these languages. Please contact me using the form below, Or mail me 
            e-mail id:sayansayan2647@gmail.com.
          </p>
          <div className="contact-form">
            <form onClick={submitData}>
              <ul>
                <li className="half">
                <input
                          type="text"
                          name="Name"
                          id=""
                          className="contact-form"
                          placeholder="Name"
                          value={userData.Name}
                          onChange={postUserData}
                        />
                </li>
                <li className="half">
                <input
                          type="text"
                          name="email"
                          id=""
                          className="contact-form"
                          placeholder="email"
                          value={userData.email}
                          onChange={postUserData}
                        />
                </li>
                <li>
                <input
                          type="text"
                          name="subject"
                          id=""
                          className="contact-form"
                          placeholder="subject"
                          value={userData.subject}
                          onChange={postUserData}
                        />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    className="contact-form"
                    id=""
                    name="message"
                    value={userData.message}
                    onChange={postUserData}
                    
  
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="SEND"  onClick={submitData} />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
         GARIA
          <br />
          INDIA,WEST-BENGAL.
          <br />
          GARIA, SOUTH-24PARGANAS <br />
          TECNOCITY, GARIA, KOLKATA <br />
          <br />
          <span>sayansayan2647@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer
            center={[22.4756,88.3970]}
            zoom={13}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
            <Marker position={[22.4756,88.3970]}>
              <Popup>
                Sayan lives here, come over for a cup of coffee :)
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
