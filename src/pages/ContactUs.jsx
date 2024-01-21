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

  const icons = {
    Github: (
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/ios-glyphs/30/github.png"
        alt="github"
      />
    ),
    Facebook: (
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/ios-glyphs/30/facebook-new.png"
        alt="facebook-new"
      />
    ),
    LinkedIn: (
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/ios-filled/50/linkedin.png"
        alt="linkedin"
      />
    ),
    Twitter: (
      <img
        width="24"
        height="24"
        src="https://img.icons8.com/ios-filled/50/twitterx--v1.png"
        alt="twitterx--v1"
      />
    ),
  };

  const description = {
    Github:
      "Explore our projects and contributions on GitHub, where we spaghetti codes.",
    Facebook:
      "Stay connected and updated with us on Facebook, you can message us here.",
    Twitter:
      "Follow us on Twitter for real-time thoughts, insights, and engaging discussions.",
    LinkedIn:
      "Discover our professional achievements and network with us on LinkedIn.",
  };

  const mockProfiles = [
    {
      name: "Ashley Pontay",
      image: "images/profiles/ashley.jpg",
      credentials: "Single ❤️",
      currentWork: "Nurse (Hanap)",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        {
          type: "Github",
          link: "https://github.com/sirpontay?fbclid=IwAR2J7kziCdn_TrGI9Uc4m4fG4lr-37SaT4OcAMdTB-3HjUX_VqC9xNm-EXM",
        },
        { type: "LinkedIn", link: "https://www.linkedin.com/in/sirpontay/" },
        {
          type: "Twitter",
          link: "https://twitter.com/sirpontay?fbclid=IwAR2rhWqxecu23hzMRcnj-nVd6B4ajr3kjBuIcqwkifKXotHHzXSnGn8v9rA",
        },
        // Add more contacts as needed
      ],
    },
    {
      name: "Manuel Marin",
      image: "images/profiles/manuel.jpg",
      credentials: "BSCS-NS-3AB",
      currentWork: "MotoVlogger",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        { type: "Github", link: "https://mnuel1.github.io/portfolio/" },
        { type: "Facebook", link: "https://www.facebook.com/ManuelMarine" },
        // Add more contacts as needed
      ],
    },
    {
      name: "Mark Nelson Mamerto",
      image: "images/profiles/mark.jpg",
      credentials: "BSCS-NS-3AB",
      currentWork: "Palamunin",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        { type: "Github", link: "https://github.com/finnsatoshi03" },
        { type: "Facebook", link: "https://www.facebook.com/FabulousEggPie/" },
      ],
    },
    {
      name: "Ezekiel Billona",
      image: "images/profiles/ezekiel.jpg",
      credentials: "BSCS-NS-3AB",
      currentWork: "Crumperist",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        {
          type: "Facebook",
          link: "https://www.facebook.com/e.billona?mibextid=LQQJ4d",
        },
        { type: "Github", link: "https://github.com/Ezekiele2" },
        // Add more contacts as needed
      ],
    },
    {
      name: "Jerry boy Tejada",
      image: "images/profiles/jerry.jpg",
      credentials: "BSCS-NS-3AB",
      currentWork: "Self Employed 😉",
      history: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      contacts: [
        { type: "Github", link: "https://github.com/jeeybii" },
        {
          type: "LinkedIn",
          link: "https://www.linkedin.com/in/jerry-boy-tejada-87a421283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        },
        { type: "Facebook", link: "https://www.facebook.com/JerryboyTejada" },
        // Add more contacts as needed
      ],
    },
    // Add more profiles with unique contacts
  ];
  const images = [
    "background-2.jpg",
    "background-3.jpg",
    "background-1.jpg",
    "background-4.jpg",
    "background-5.jpg",
  ];

  return (
    <div style={containerStyle} className="container m-auto mt-10">
      {mockProfiles.map((profile, index) => (
        <div key={index}>
          <div
            className="w-full h-[24rem] bg-opacity-50 rounded-3xl mb-10 relative"
            style={{ backgroundColor: "#c0c0c2" }}
          >
            <div className="">
              <img
                src={`images/${images[index % images.length]}`}
                className="w-full h-28 bg-green absolute rounded-t-3xl object-cover"
              />
              <div className="z-10 absolute">
                <div
                  className="w-[120px] h-[120px] bg-white200 rounded-full top-12 left-10 absolute  border-opacity-50 border-4"
                  style={{ borderColor: "#c0c0c2" }}
                >
                  <img
                    src={profile.image}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <div className="z-10 flex justify-between w-full absolute top-[7.7rem] pr-5 items-center">
                <div className="relative left-[11rem]">
                  <h1 className="text-black font-bold text-xl leading-5 sm:w-full w-5/6">
                    {profile.name}
                  </h1>
                  <p className="text-sm opacity-60 ">{profile.credentials}</p>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-1 justify-end">
                    <h2 className="text-xs opacity-60">Current Role</h2>
                    <img
                      width="15"
                      height="15"
                      src="https://img.icons8.com/material-outlined/24/lawyer.png"
                      alt="lawyer"
                    />
                  </div>
                  <p className="text-xs font-semibold px-2 py-1 mt-1 rounded-full bg-black bg-opacity-20">
                    {profile.currentWork}
                  </p>
                </div>
              </div>
              <div className="flex gap-4 w-full h-full absolute left-10 top-[14rem]">
                {profile.contacts.map((contact, index) => (
                  <div
                    key={index}
                    className="h-1/3 w-1/4 bg-green bg-opacity-20 rounded-xl py-3 px-5"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <div>{icons[contact.type]}</div>
                        <h1 className="text-md font-semibold">
                          {contact.type}
                        </h1>
                      </div>
                      <div className="flex lg:justify-between justify-center items-center">
                        <p className="text-xs w-2/3 hidden lg:block">
                          {description[contact.type]}
                        </p>
                        <img
                          className="lg:w-8 lg:h-8 w-12 h-12 hover:cursor-pointer"
                          src="https://img.icons8.com/ios/50/circled-chevron-right--v1.png"
                          alt="circled-chevron-right--v1"
                          onClick={() => window.open(contact.link, "_blank")}
                        />
                      </div>
                    </div>
                  </div>
                ))}
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
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  style={{ width: "50%", height: "auto", borderRadius: "50%" }}
                />
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
