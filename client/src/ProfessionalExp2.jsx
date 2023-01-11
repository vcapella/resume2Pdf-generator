


export default function ProfessionalExp2 ({handleChange, titlePosition2, companyName2, cityCompany2, stateCompany2, startDate2, endDate2, listAccomp2A, listAccomp2B, listAccomp2C, listAccomp2D, listAccomp2E, listAccomp2F}) {
    return (
        <div>
            <label>
                Job title
                <input
                type="text"
                placeholder="Administrative Assistant"
                name="titlePosition2"
                onChange={handleChange}
                value={titlePosition2}
                />
            </label>

            <label>
                Company name
                <input
                type="text"
                placeholder="StarCraft Inc."
                name="companyName2"
                onChange={handleChange}
                value={companyName2}
                />
            </label>

            <label>
                Company location
                <input
                type="text"
                placeholder="Toronto"
                name="cityCompany2"
                onChange={handleChange}
                value={cityCompany2}
                />
                <input
                type="text"
                placeholder="Ontario"
                name="stateCompany2"
                onChange={handleChange}
                value={stateCompany2}
                />
            </label>

            <label>
                Start date / End Date
                <input
                type="text"
                placeholder="Jan/2020"
                name="startDate2"
                onChange={handleChange}
                value={startDate2}
                />
                <input
                type="text"
                placeholder="Jan/2022 or Present"
                name="endDate2"
                onChange={handleChange}
                value={endDate2}
                />
            </label>

            <label>
                Accomplishment list
                <input
                type="text"
                placeholder="List accomplishments, not responsibilities"
                name="listAccomp2A"
                onChange={handleChange}
                value={listAccomp2A}
                />
                <input
                type="text"
                placeholder="Make sure they’re written in a consistent form"
                name="listAccomp2B"
                onChange={handleChange}
                value={listAccomp2B}
                />
                <input
                type="text"
                placeholder="Use the active voice"
                name="listAccomp2C"
                onChange={handleChange}
                value={listAccomp2C}
                />
                <input
                type="text"
                placeholder="Quantify results wherever possible"
                name="listAccomp2D"
                onChange={handleChange}
                value={listAccomp2D}
                />
                <input
                type="text"
                placeholder="Match the language from the job description"
                name="listAccomp2E"
                onChange={handleChange}
                value={listAccomp2E}
                />
                <input
                type="text"
                placeholder="Another Accomplishment"
                name="listAccomp2F"
                onChange={handleChange}
                value={listAccomp2F}
                />
            </label>

        </div>
    )
}