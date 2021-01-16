//import logo from './logo.svg';
import './App.css';
import "bulma/css/bulma.css";
import React, { useState } from "react";




function App() {

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const [organisation, setOrganisation] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState("");

  const [selectedFile, setSelectedFile] = useState(null);

  // const fileInput = document.querySelector('#file-js-example input[type=file]');
  // fileInput.onchange = () => {
  //   if (fileInput.files.length > 0) {
  //     const fileName = document.querySelector('#file-js-example .file-name');
  //     fileName.textContent = fileInput.files[0].name;
  //   }
  // }
  
  

  return (
    <div className="App">
      <div className="container">
        <div className="columns is-multiline is-text-left">
          <div className="column is-full has-text-danger-dark is-size-3">Profile Page</div>
          <br />
          <div id="profile-pic-user" className="column is-full">
            <figure class="image is-128x128">
              <img src="https://thumbs.dreamstime.com/b/invisible-man-isolated-invisible-cloak-hat-invisible-man-isolated-invisible-cloak-hat-139713057.jpg" />
            </figure>

          </div>
          <br />
          <div className="column is-full">
            <div className="file has-name is-success">
              <label className="file-label">
                <input className="file-input" type="file" name="profile image" id="file-js-example" onChange={(e) => setImage(e.target.value)}/>
                <span className="file-cta">
                  <span className="file-icon">
                    <i className="fas fa-upload"></i>
                  </span>
                  <span className="file-label">
                    Upload profile picture..
      </span>
                </span>
                <span className="file-name">
                  No file uploaded
                  
    </span>
              </label>
             
              
            </div>
            
          </div>
          <div className="column is-half">
            <p className="bd-notification is-primary has-text-link-dark">Name</p>

          </div>
          <div className="column is-half">
            <div className="control">
              <input className="input" type="text" placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

          </div>
          <div className="column is-half">
            <p className="bd-notification is-primary has-text-link-dark">Address</p>

          </div>
          <div className="column is-half">
            <div className="control">
              <input className="input" type="text" placeholder="Enter your Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

          </div>
          <div className="column is-half">
            <p className="bd-notification is-primary has-text-link-dark">Contact Details</p>

          </div>
          <div className="column is-half">
            <div className="control">
              <input className="input" type="text" placeholder="Enter your Contact number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              //onKeyDown = {handleKeyDown}
              />
            </div>

          </div>

          <div className="column is-half">
            <p className="bd-notification is-primary has-text-link-dark">Organisation</p>

          </div>
          <div className="column is-half">
            <div className="control">
              <input className="input" type="text" placeholder="Name of Organisation"
                value={organisation}
                onChange={(e) => setOrganisation(e.target.value)}
              //onKeyDown = {handleKeyDown}
              />
            </div>

          </div>
          <div className="column is-half">
            <p class="bd-notification is-primary has-text-link-dark">Email</p>

          </div>
          <div className="column is-half">
            <div className="control">
              <input className="input" type="text" placeholder="Email-ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              //onKeyDown = {handleKeyDown}
              />
            </div>

          </div>
          <input className ="button is-primary" type="submit" value="Save User"></input>
        </div>
      </div>
    </div>


  );
  
}

export default App;
