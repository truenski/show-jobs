const express = require("express");
const axios = require("axios");

export default async function handler(
  req: any,
  res: {
    status: (arg0: number) => {
      (): any;
      new (): any;
      json: { (arg0: any): void; new (): any };
    };
  }
) {
  const article = {
    companySkills: true,
    dismissedListingHashes: [],
    fetchJobDesc: true,
    jobTitle: "Business Analyst",
    locations: [],
    numJobs: 10,
    previousListingHashes: [],
  };
  const url = "https://www.zippia.com/api/jobs/";

  await axios
    .post(url, article)

    .then(
      (response: {
        data: {
          jobs: {
            jobTitle: any;
            companyName: any;
            jobDescription: any;
            postedDate: any;
            companyLogo: any;
            OBJurl: any;
          }[];
        };
      }) => {
        /*Getting only the properties i will use, with destructuring. */
        /*jobList == arr with jobTitle, companyName, jobDescription, postedDate, companyLogo, OBJurl, */
        const jobList = response.data.jobs.map(
          ({
            jobTitle,
            companyName,
            jobDescription,
            postedDate,
            companyLogo,
            OBJurl,
          }) => {
            /*Get shortDesc, deleting all the HTML from the string, and limiting the string to 200 characters */
            const shortDesc =
              jobDescription
                .replace(/<[^>]*>?/gm, "")
                .replace(/[\r\n]/gm, "")
                .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
                .substring(0, 200) + "...";
            return {
              jobTitle,
              companyName,
              shortDesc,
              postedDate,
              companyLogo,
              OBJurl,
            };
          }
        );
        res.status(200).json(jobList);
      }
    )
    .catch((err: { message: any }) => {
      console.log("Error: ", err.message);
    });
}
