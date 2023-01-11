


export default function ProfessionalExp1 ({handleChange , titlePosition1, companyName1, cityCompany1, stateCompany1, startDate1, endDate1, listAccomp1A, listAccomp1B, listAccomp1C, listAccomp1D, listAccomp1E, listAccomp1F}) {
    return (
        <div>
            <label>
                Job title
                <input
                type="text"
                placeholder="Administrative Assistant"
                name="titlePosition1"
                onChange={handleChange}
                value={titlePosition1}
            />
            </label>

            <label>
                Company name
                <input
                type="text"
                placeholder="StarCraft Inc."
                name="companyName1"
                onChange={handleChange}
                value={companyName1}
                />
            </label>

            <label>
                Company location
                <input
                type="text"
                placeholder="Toronto"
                name="cityCompany1"
                onChange={handleChange}
                value={cityCompany1}
                />
                <input
                type="text"
                placeholder="Ontario"
                name="stateCompany1"
                onChange={handleChange}
                value={stateCompany1}
                />
            </label>

            <label>
                Start date / End Date
                <input
                type="text"
                placeholder="Jan/2020"
                name="startDate1"
                onChange={handleChange}
                value={startDate1}
                />
                <input
                type="text"
                placeholder="Jan/2022 or Present"
                name="endDate1"
                onChange={handleChange}
                value={endDate1}
                />
            </label>

            <label>
                Accomplishment list
                <input
                type="text"
                placeholder="List accomplishments, not responsibilities"
                name="listAccomp1A"
                onChange={handleChange}
                value={listAccomp1A}
                />
                <input
                type="text"
                placeholder="Make sure they’re written in a consistent form"
                name="listAccomp1B"
                onChange={handleChange}
                value={listAccomp1B}
                />
                <input
                type="text"
                placeholder="Use the active voice"
                name="listAccomp1C"
                onChange={handleChange}
                value={listAccomp1C}
                />
                <input
                type="text"
                placeholder="Quantify results wherever possible"
                name="listAccomp1D"
                onChange={handleChange}
                value={listAccomp1D}
                />
                <input
                type="text"
                placeholder="Match the language from the job description"
                name="listAccomp1E"
                onChange={handleChange}
                value={listAccomp1E}
                />
                <input
                type="text"
                placeholder="Another Accomplishment"
                name="listAccomp1F"
                onChange={handleChange}
                value={listAccomp1F}
                />
            </label>
        </div>
    )
}