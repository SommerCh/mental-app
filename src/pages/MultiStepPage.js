// Sommer
import { useState, useEffect } from "react";
import FormReward from "../components/FormReward";
import SignUpInfo from "../components/SignUpInfo";
import { timePicker } from "analogue-time-picker";
import PickTrack from "../components/PickTrack";
import '../firebase-config'


export default function MultiStepPage() {

  const [page, setPage] = useState(0);
  const [name, setName] = useState();
  const [hour, setHour] = useState("10");
  const [minute, setMinute] = useState("00");
  const [theme, setTheme] = useState();
  const [showTime, setShowTime] = useState();
  const [selectedItems, setSelectedItems] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const FormTitles = [
    "Tilmeld dig",
    "Vælg et tema",
    "Vælg tracks",
    "Hvad tid vil du påmindes?",
    "Tillykke",
  ];


  

  // // sign up
  // const auth = getAuth();

  // function signIn(event) {
  //   event.preventDefault();
  //   const mail = event.target.mail.value;
  //   const password = event.target.password.value;
  //   signInWithEmailAndPassword(auth, mail, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       let code = error.code;
  //       code = code.replaceAll("-", " ");
  //       code = code.replaceAll("auth/", "");
  //       setErrorMessage(code);
  //     });
  // }


  

  function selected(e) {
    let target = e.currentTarget;
    target.classList.toggle("border");
  }
  // pick theme
  function PickTheme() {
    return (
      <div className=" page" theme={setTheme} onClick={(e) => setTheme(e.target.value)}>
        <div className="picktheme">
          <option onClick={selected} className="neutral theme">
            Neutral
          </option>
          <option onClick={selected} className="meditation theme">
            Meditation
          </option>
          <option onClick={selected} className="heavy theme">
            Heavy
          </option>
        </div>
      </div>
    );
  }

  // pick time
  function PickTime({ setHour, setMinute }) {
    const [showTime, setShowTime] = useState();

    useEffect(() => {
      setShowTime(
        timePicker({
          element: document.getElementById("clock"),
          mode: 24,
          width: "100%",
        })
      );
    }, []);

    // function handleClick() {
    //   const object = showTime.getTime();
    //   setHour(object.hour);
    //   setMinute(object.minute);
    // }
    return (
      <div className="picktime page">
        <div id="clock"></div>
        {/* <p onClick={handleClick}>time </p> */}
      </div>
    );
  }

  // pick tracks

  function handleChange(event) {
    const checkboxes = event.target.form.elements;
    const selectedCheckboxes = [];

    for (const checkbox of checkboxes) {
      if (checkbox.checked) {
        selectedCheckboxes.push(<p>{checkbox.value}</p>);
        console.log(checkbox.value);
      }
    }
    setSelectedItems(selectedCheckboxes);
  }

  // retunere den side vi skal se
  const PageDisplay = () => {
    if (page === 0) {
      return (
        <SignUpInfo
          errorMessage={errorMessage}
          name={name}
          setName={setName}
          nextPage={next}
        />
      );
    } else if (page === 1) {
      return <PickTheme theme={theme} setTheme={setTheme} />;
    } else if (page === 2) {
      return (
        <PickTrack
          selectedItems={selectedItems}
          setSelectedItems={setSelectedItems}
          handleChange={handleChange}
        />
      );
    } else if (page === 3) {
      return (
        <PickTime
          setHour={setHour}
          hour={hour}
          minute={minute}
          setMinute={setMinute}
          setShowTime={setShowTime}
          showTime={showTime}
        />
      );
    } else {
      return <FormReward name={name} theme={theme} selectedItems={selectedItems} />;
    }
  };

  function next() {
    setPage((currPage) => currPage + 1);
  }

  return (
    <div className="multistepform">
      <div className="progressbar">
        <div
          style={{
            width:
              page === 0
                ? "20%"
                : page === 1
                ? "40%"
                : page === 2
                ? "60%"
                : page === 3
                ? "80%"
                : "100%",
          }}
        ></div>
      </div>
      <div className="form-container">
        <div className="form-header">
          <h2 className="formtitles">{FormTitles[page]}</h2>
        </div>
        <div className="form-body">{PageDisplay()}</div>
        <div className="form-footer">
          <button
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Tilbage
          </button>
          <button
            disabled={page === FormTitles.length - 1}
            onClick={() => {
              next();
            }}
          >
            Næste
          </button>
        </div>
      </div>
    </div>
  );
}
