import React, { useState } from "react";
import Modal from "react-modal";
import { useSpring, animated } from "react-spring";

const ContactUs = () => {
  const [message, setMessage] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const modalAnimation = useSpring({
    opacity: modalIsOpen ? 1 : 0,
    transform: modalIsOpen ? "translateY(0%)" : "translateY(-100%)",
  });

  const openModal = (profile) => {
    setSelectedProfile(profile);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedProfile(null);
    setModalIsOpen(false);
  };

  const handleSubmit = () => {
    console.log("Message submitted:", message);
    // Additional logic goes here...
    // Close the modal after handling the submission
    closeModal();
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const buttonStyle = {
    backgroundColor: "#252525",
    color: "white",
    padding: "6px 0",
    width: "100px",
    borderRadius: "40px",
    cursor: "pointer",
    marginTop: "5px",
    fontSize: "12px",
  };

  const mockProfiles = [
    {
      name: "Mark Nelson Mamerto",
      image: "https://via.placeholder.com/150",
      credentials: "BSCS-NS-3AB",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        { type: "Facebook", link: "https://www.facebook.com/FabulousEggPie/" },
        { type: "Email", link: "marknelson.mamerto@tup.edu.ph" },
        { type: "Twitter", link: "https://twitter.com/m3rk" },
      ],
    },
    {
      name: "Ashley Pontay",
      image: "https://via.placeholder.com/150",
      credentials: "BSCS-NS-3AB",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        { type: "Facebook", link: "https://www.facebook.com/AshleyPontay" },
        { type: "Email", link: "mailto:ashley.pontay@example.com" },
        // Add more contacts as needed
      ],
    },
    {
        name: "Manuel Marin",
        image: "https://via.placeholder.com/150",
        credentials: "BSCS-NS-3AB",
        history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        contacts: [
          { type: "Facebook", link: "https://www.facebook.com/ManuelMarine" },
          { type: "Email", link: "mailto:ashley.pontay@example.com" },
          // Add more contacts as needed
        ],
      }, 
      {
        name: "Ezekiel Billona",
        image: "https://via.placeholder.com/150",
        credentials: "BSCS-NS-3AB",
        history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        contacts: [
          { type: "Facebook", link: "https://www.facebook.com/e.billona?mibextid=LQQJ4d"},
          { type: "Email", link: "mailto:ashley.pontay@example.com" },
          // Add more contacts as needed
        ],
      }, 
      {
        name: "Jerry boy Tejada",
        image: "https://via.placeholder.com/150",
        credentials: "BSCS-NS-3AB",
        history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        contacts: [
          { type: "Facebook", link: "https://www.facebook.com/JerryboyTejada" },
          { type: "Email", link: "mailto:ashley.pontay@example.com" },
          // Add more contacts as needed
        ],
      },    
    // Add more profiles with unique contacts
  ];

  return (
    <div style={containerStyle}>
      {mockProfiles.map((profile, index) => (
        <div key={index}>
          <div style={{ flex: 1, flexDirection: "column", justifyContent: "center", height: "340px", backgroundColor: "#f3f3f5", margin: "auto" }}>
            <div style={{ width: "200px", height: "310px", backgroundColor: "#607917", borderRadius: "10px", marginTop: "20px", marginLeft: "20px", marginBottom: "20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ height: "250px", width: "1300px", marginLeft: "20px", backgroundColor: "#d9dcdc", borderRadius: "20px", position: "relative" }}>
                <div style={{ height: "110px", width: "100%", backgroundColor: "#252525", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", marginBottom: "20px" }}></div>
                <div style={{ position: "absolute", top: "40%", left: "6%", transform: "translate(-50%, -50%)" }}>
                  <div style={{ width: "90px", height: "90px", borderRadius: "50%", backgroundColor: "#d9dcdc", backgroundImage: `url(${profile.image})`, backgroundSize: "cover", backgroundPosition: "center" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <div style={{ flex: 1, flexDirection: "column", justifyContent: "center", marginTop: "15px", paddingLeft: "20px", backgroundColor: "#d9dcdc", borderBottomLeftRadius: "20px" }}>
                    <p>{profile.name}</p>
                    <p>{profile.credentials}</p>
                    <button onClick={() => openModal(profile)} style={buttonStyle}>
                      Message
                    </button>
                  </div>
                  <div style={{ flex: 1, width: "100px", height: "100px", marginTop: "20px", textAlign: "right", paddingRight: "20px" }}>
                    <p>Contacts (Icon)</p>
                    {profile.contacts.map((contact, contactIndex) => (
                      <div key={contactIndex}>
                        <a href={contact.link} style={{ color: "black", textDecoration: "none", marginBottom: "5px" }}>
                          {contact.type}
                        </a>
                        <br />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <br />

      {/* Modal component */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Profile Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "300px",
            margin: "auto",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            backgroundColor: "white",
            border: "none",
            outline: "none",
          },
        }}
      >
        <animated.div style={modalAnimation}>
          {/* Your modal content */}
          {selectedProfile && (
            <>
              <h2>{selectedProfile.name}'s Profile</h2>
              <br />
              <div style={{display: "flex", alignItems: "center", justifyContent: "center",}}>
              <img src={selectedProfile.image} alt={selectedProfile.name} style={{ width: "50%", height: "auto", borderRadius: "50%"}} /> 
              </div>
              <br />
              <p>{selectedProfile.credentials}</p>
              <p>{selectedProfile.history}</p>
              <br />
              <textarea
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button onClick={handleSubmit}>Submit</button>
            </>
          )}
        </animated.div>
      </Modal>
    </div>
  );
};

export default ContactUs;
