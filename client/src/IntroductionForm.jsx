
import TextField from "@mui/material/TextField";

export default function IntroductionForm ({handleChange, yourName, city, stateProvince, celNumber, emailAdd, linkedinUrl, anotherUrl, personalSummary}) {
    return (
        <div>
            <TextField
            required
            id="yourName"
            label="First and Last Name"
            placeholder="Victor Capella"
            name="yourName"
            // helperText="eg: Victor Capella"
            onChange={handleChange}
            value={yourName}
            />

            <label>
            Enter your city
            <input
                type="text"
                placeholder="Toronto"
                name="city"
                onChange={handleChange}
                value={city}
            />
            </label>

        <label>
          Enter your province
          <input
            type="text"
            placeholder="ON"
            name="stateProvince"
            onChange={handleChange}
            value={stateProvince}
          />
        </label>

        <label>
          Enter your phone number
          <input
            type="number"
            placeholder="555-555-5555"
            name="celNumber"
            onChange={handleChange}
            value={celNumber}
          />
        </label>

        <label>
          Enter your e-mail
          <input
            type="text"
            placeholder="name@email.com"
            name="emailAdd"
            onChange={handleChange}
            value={emailAdd}
          />
        </label>

        <label>
          Enter your Linkedin URL
          <input
            type="text"
            placeholder="https://www.linkedin.com/in/yourname/"
            name="linkedinUrl"
            onChange={handleChange}
            value={linkedinUrl}
          />
        </label>

        <label>
          Enter another URL
          <input
            type="text"
            placeholder="myportfolio.com"
            name="anotherUrl"
            onChange={handleChange}
            value={anotherUrl}
          />
        </label>

        <label>
          Your personal summary
          <input
            type="text"
            placeholder="Insert a brief about your background experience and passions"
            name="personalSummary"
            onChange={handleChange}
            value={personalSummary}
          />
        </label>
        </div>
    )
}