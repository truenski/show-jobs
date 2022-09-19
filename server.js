const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*To prevent CORS error, due to using different addresses for server and client */
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  next();
});

// API call
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

app.get("/api/jobs", (req, res) => {
  axios
    .post(url, article)

    .then((response) => {
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
      res.json(jobList);
    })
    .catch((err) => {
      console.log("Error: ", err.message);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
