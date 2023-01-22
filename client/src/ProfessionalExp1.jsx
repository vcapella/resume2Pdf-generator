import { CardContent, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ProfessionalExp1({
	handleChange,
	titlePosition1,
	companyName1,
	cityCompany1,
	stateCompany1,
	startDate1,
	endDate1,
	listAccomp1A,
	listAccomp1B,
	listAccomp1C,
	listAccomp1D,
	listAccomp1E,
	// listAccomp1F,
}) {
	return (

		<CardContent>
			<form>
				<Grid container spacing={2}>
					<Grid xs={12} sm={6} item>
						<TextField
							id="titlePosition1"
							name="titlePosition1"
							label="Job Title"
							placeholder="Ninja Developer"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 50 }}
							onChange={handleChange}
							value={titlePosition1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="companyName1"
							name="companyName1"
							label="Company Name"
							placeholder="Dev Warriors"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 50 }}
							onChange={handleChange}
							value={companyName1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="cityCompany1"
							name="cityCompany1"
							label="Company Location"
							placeholder="Toronto"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 25 }}
							onChange={handleChange}
							value={cityCompany1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="stateCompany1"
							name="stateCompany1"
							label="Company State/Province"
							placeholder="ON"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 2 }}
							onChange={handleChange}
							value={stateCompany1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="startDate1"
							name="startDate1"
							label="Start Date"
							placeholder="Jan/2022"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 8 }}
							onChange={handleChange}
							value={startDate1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="endDate1"
							name="endDate1"
							label="End Date/Present"
							placeholder="Present"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 8 }}
							onChange={handleChange}
							value={endDate1}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="listAccomp1A"
							name="listAccomp1A"
							label="Accomplishment / Task"
							placeholder="List accomplishments, not responsibilities"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 83 }}
							onChange={handleChange}
							value={listAccomp1A}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="listAccomp1B"
							name="listAccomp1B"
							label="Accomplishment / Task"
							placeholder="Make sure they’re written in a consistent form"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 83 }}
							onChange={handleChange}
							value={listAccomp1B}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="listAccomp1C"
							name="listAccomp1C"
							label="Accomplishment / Task"
							placeholder="Use the active voice"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 83 }}
							onChange={handleChange}
							value={listAccomp1C}
						/>
					</Grid>

					<Grid xs={12} sm={6} item>
						<TextField
							id="listAccomp1D"
							name="listAccomp1D"
							label="Accomplishment / Task"
							placeholder="Quantify results wherever possible"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 83 }}
							onChange={handleChange}
							value={listAccomp1D}
						/>
					</Grid>

					<Grid xs={12} item>
						<TextField
							id="listAccomp1E"
							name="listAccomp1E"
							label="Accomplishment / Task"
							placeholder="Match the language from the job description"
							variant="outlined"
							fullWidth
							inputProps={{ maxLength: 83 }}
							onChange={handleChange}
							value={listAccomp1E}
						/>
					</Grid>

					{/* <TextField
                        id="listAccomp1F"
                        label="Accomplishment / Task"
                        placeholder="Another Accomplishment"
                        name="listAccomp1F"
                        inputProps={{ maxLength: 83 }}
                        onChange={handleChange}
                        value={listAccomp1F}
                        /> removed due to limited space */}
				</Grid>
			</form>
		</CardContent>

	);
}
