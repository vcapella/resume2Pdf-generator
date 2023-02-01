import * as React from "react";
import { TextField, Grid, Card, Typography } from "@mui/material";

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
	// listAccomp2F,
}) {
	return (

		<Card className="professionalExp2"
			sx={{ boxShadow: 0, py: "10px", px: "10px" }}>
			<Typography
				variant="h5"
				align="center"
				sx={{ fontWeight: "Bold", paddingBottom: "15px" }}
			>
				Experience 2
			</Typography>

			<Grid container spacing={2}>
				<Grid xs={12} sm={6} item>
					<TextField
						id="titlePosition2"
						name="titlePosition2"
						label="Job Title"
						placeholder="Ninja Developer"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 30 }}
						onChange={handleChange}
						value={titlePosition2}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="companyName2"
						name="companyName2"
						label="Company Name"
						placeholder="Dev Warriors"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 30 }}
						onChange={handleChange}
						value={companyName2}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="cityCompany2"
						name="cityCompany2"
						label="Company Location"
						placeholder="Toronto"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 20 }}
						onChange={handleChange}
						value={cityCompany2}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="stateCompany2"
						name="stateCompany2"
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
						id="startDate2"
						name="startDate2"
						label="Start Date"
						placeholder="Jan/2021"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 8 }}
						onChange={handleChange}
						value={startDate2}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="endDate2"
						name="endDate2"
						label="End Date"
						placeholder="Dec/2021"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 8 }}
						onChange={handleChange}
						value={endDate2}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="listAccomp2A"
						name="listAccomp2A"
						label="Accomplishment / Task"
						placeholder="List accomplishments, not responsibilities"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 75 }}
						onChange={handleChange}
						value={listAccomp2A}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="listAccomp2B"
						name="listAccomp2B"
						label="Accomplishment / Task"
						placeholder="Make sure they’re written in a consistent form"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 75 }}
						onChange={handleChange}
						value={listAccomp2B}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="listAccomp2C"
						name="listAccomp2C"
						label="Accomplishment / Task"
						placeholder="Use the active voice"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 75 }}
						onChange={handleChange}
						value={listAccomp2C}
					/>
				</Grid>

				<Grid xs={12} sm={6} item>
					<TextField
						id="listAccomp2D"
						name="listAccomp2D"
						label="Accomplishment / Task"
						placeholder="Quantify results wherever possible"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 75 }}
						onChange={handleChange}
						value={listAccomp2D}
					/>
				</Grid>

				<Grid xs={12} item>
					<TextField
						id="listAccomp2E"
						name="listAccomp2E"
						label="Accomplishment / Task"
						placeholder="Match the language from the job description"
						variant="outlined"
						fullWidth
						inputProps={{ maxLength: 75 }}
						onChange={handleChange}
						value={listAccomp2E}
					/>
				</Grid>

				{/* <TextField
			id="listAccomp2F"
			label="Accomplishment / Task"
			placeholder="Another Accomplishment"
			name="listAccomp2F"
			inputProps={{ maxLength: 83 }}
			onChange={handleChange}
			value={listAccomp2F}
			/> removed due to limited space */}
			</Grid>

		</Card>

	);
}
