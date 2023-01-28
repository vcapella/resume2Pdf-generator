import { TextField, Grid, Card, Typography } from "@mui/material";
// import TextField from "@mui/material/TextField";
// import TextareaAutosize from '@mui/base/TextareaAutosize';

export default function IntroductionForm({
  handleChange,
  yourName,
  city,
  stateProvince,
  celNumber,
  emailAdd,
  linkedinUrl,
  anotherUrl,
  personalSummary,
}) {
  return (

    <Card className="Introduction"
      sx={{
        boxShadow: 0,
        p: "10px 10px",
        backgroundColor: "gray",
      }}>
      <Typography
        variant="h5"
        align="center"
        sx={{ fontWeight: "Bold", paddingBottom: "15px" }}
      >
        Introduction
      </Typography>
      <Grid container spacing={2}>
        <Grid xs={12} item>
          <TextField
            required
            id="yourName"
            name="yourName"
            label="First and Last Name"
            placeholder="Victor Capella"
            variant="outlined"
            fullWidth
            // helperText="eg: Victor Capella"
            inputProps={{ maxLength: 40 }}
            //style={{ width: 520}}
            onChange={handleChange}
            value={yourName}

          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            required
            id="city"
            name="city"
            label="Your City"
            placeholder="Toronto"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 25 }}
            onChange={handleChange}
            value={city}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            required
            id="stateProvince"
            name="stateProvince"
            label="Your State/Province"
            placeholder="ON"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 2 }}
            onChange={handleChange}
            value={stateProvince}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          {/* review number format */}
          <TextField
            required
            id="celNumber"
            name="celNumber"
            label="Phone Number"
            placeholder="555-123-4567"
            variant="outlined"
            fullWidth
            inputProps={{ maxLength: 20 }}
            onChange={handleChange}
            value={celNumber}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            required
            type="email"
            id="emailAdd"
            name="emailAdd"
            label="Email"
            placeholder="my.email@mail.com"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={emailAdd}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            required
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            label="LinkedIn URL"
            placeholder="https://linkedin.com/in/your-username"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={linkedinUrl}
          />
        </Grid>

        <Grid xs={12} sm={6} item>
          <TextField
            type="url"
            id="anotherUrl"
            name="anotherUrl"
            label="Social Media or Portfolio URL"
            placeholder="https://mysocialmedia.com"
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={anotherUrl}
          />
        </Grid>

        <Grid xs={12} item>
          <TextField
            required
            id="personalSummary"
            name="personalSummary"
            label="About Me"
            placeholder=""
            variant="outlined"
            fullWidth
            onChange={handleChange}
            value={personalSummary}
            // style={{ width: 520 }}
            inputProps={{ maxLength: 400 }}
            // each field has width 250 +20 width gap between each
            multiline
          />
        </Grid>
      </Grid>
    </Card>

  );
}
