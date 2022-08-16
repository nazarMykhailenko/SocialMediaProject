// styles
import "./Registration.css";

const Registration = () => {
  return (
    <div className="registration">
      <div className="registrationWrapper">
        <div className="registrationLeft">
          <h3 className="registrationLogo">Lamasocial</h3>
          <span className="registrationDesc">
            Lamasocial helps you connect and share with the people in your life.
          </span>
        </div>
        <div className="registrationRight">
          <div className="registrationBox">
            <input
              type="text"
              placeholder="Login"
              className="registrationInput"
            />
            <input
              type="email"
              placeholder="Email"
              className="registrationInput"
            />
            <input
              type="date"
              placeholder="Your date of birth"
              className="registrationInput"
            />
            <input
              type="password"
              placeholder="Password"
              className="registrationInput"
            />
            <input
              type="password"
              placeholder="Comfirm Password"
              className="registrationInput"
            />
            <button className="registrationButton">Create a new account</button>
            <button className="registrationLoginButton">Log in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
