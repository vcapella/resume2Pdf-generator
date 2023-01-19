
import TextField from "@mui/material/TextField";
// import TextareaAutosize from '@mui/base/TextareaAutosize';

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
      style={{ width: 520}}
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
      label="Your State/Province"
      placeholder="ON"
      name="stateProvince"
      inputProps={{ maxLength: 2 }}
      onChange={handleChange}
      value={stateProvince}
      />
      {/* review number format */}
      <TextField
      id="celNumber"
      label="Phone Number"
      placeholder="555-123-4567"
      name="celNumber"
      inputProps={{ maxLength: 20 }}
      onChange={handleChange}
      value={celNumber}
      />

      <TextField
      type="email"
      id="emailAdd"
      label="Email"
      placeholder="my.email@mail.com"
      name="emailAdd"
      onChange={handleChange}
      value={emailAdd}
      />

      <TextField
      id="linkedinUrl"
      label="LinkedIn URL"
      placeholder="https://linkedin.com/in/your-username"
      name="linkedinUrl"
      onChange={handleChange}
      value={linkedinUrl}
      />

      <TextField
      id="anotherUrl"
      label="Social Media or Portfolio URL"
      placeholder="https://mysocialmedia.com"
      name="anotherUrl"
      onChange={handleChange}
      value={anotherUrl}
      />

      <TextField
      id="personalSummary"
      label="About Me"
      placeholder=""
      name="personalSummary"
      onChange={handleChange}
      value={personalSummary}
      style={{ width: 520, maxLength: 1000 }}
      inputProps={{ maxLength: 410 }}
      // each field has width 250 +20 width gap between each
      multiline
      />

    </div>
  )
}