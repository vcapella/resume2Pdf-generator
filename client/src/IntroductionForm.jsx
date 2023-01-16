
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
            inputProps={{ maxLength: 40 }}
            onChange={handleChange}
            value={yourName}
            />

            <TextField
            id="city"
            label="Your City"
            placeholder="Toronto"
            name="city"
            inputProps={{ maxLength: 25 }}
            onChange={handleChange}
            value={city}
            />

            <TextField
            id="stateProvince"
            label="Your Province"
            placeholder="ON"
            name="stateProvince"
            inputProps={{ maxLength: 2 }}
            // onChange={(event) => handleChange(event)}  //test not working
            onChange={handleChange}
            value={stateProvince}
            />

          <TextField
          id="celNumber"
          label="Phone Number"
          placeholder="555-123-4567"
          name="celNumber"
          inputProps={{ maxLength: 12 }}
          onChange={handleChange}
          value={celNumber}
          />

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