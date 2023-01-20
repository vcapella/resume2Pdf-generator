import { Card, CardContent, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";

export default function ProfessionalExp2({
	handleChange,
	titlePosition2,
	companyName2,
	cityCompany2,
	stateCompany2,
	startDate2,
	endDate2,
	listAccomp2A,
	listAccomp2B,
	listAccomp2C,
	listAccomp2D,
	listAccomp2E,
	listAccomp2F,
}) {
	return (
		<Card>
			<CardContent>
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
							value={titlePosition2}
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
							value={companyName2}
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
							value={cityCompany2}
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
							value={stateCompany2}
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
							value={startDate2}
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
							value={endDate2}
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
							value={listAccomp2A}
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
							value={listAccomp2B}
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
							value={listAccomp2C}
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
							value={listAccomp2D}
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
							value={listAccomp2E}
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
			</CardContent>
		</Card>
	);
}
