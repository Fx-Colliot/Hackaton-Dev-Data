import { React, useState } from "react";
import { BlockJobs, ContainerJobs, TitleJobs } from "./style";
import db from "./db.json";

export default function Match() {
  let company = db;
  return <TitleJobs> {company.companyName} </TitleJobs>;
}
