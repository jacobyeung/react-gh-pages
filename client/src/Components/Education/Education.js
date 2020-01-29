import React from "react";
import { makeStyles } from "@material-ui/core";
import Berkeley from "../../Images/berkeley.png";
import "../section.css";

export default function Education() {
  return (
    <section id="education">
      <div container className="background">
        <div className="rowTitle">
          <h1 className="title">Education</h1>
        </div>
        <div className="column1">
          <img src={Berkeley} className="logo" />
        </div>
        <div className="column2">
          {/* <div className='row'> */}
          <h2 className="subTitle">University of California, Berkeley</h2>
          {/* </div> */}
          <h3 className="subTitle">B.S. in Computer Science, May 2022</h3>
          <h3 className="subTitle">B.A. in Statistics, May 2022</h3>
          <div className="row">
            I found a vast diversity of opportunities at UC Berkeley. As a
            mentor in the Undergraduate Laboratory at Berkeley, I designed and
            led a team of undergraduates on creating a comprehensive summary of
            research done in reconstructing images through statistical analysis
            and MVPA (Multi-Voxel Pattern Analysis) of fMRI data. I furthered my
            interest in brain wave analysis by helping a graduate student
            analyze quantitative susceptibility mapping data of different brain
            regions with PET scans of β-amyloid and tau proteins to develop a
            cheaper alternative to identifying Alzheimer’s disease
          </div>
        </div>
      </div>
    </section>
  );
}
