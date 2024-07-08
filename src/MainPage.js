import React from "react";
import Main from "./Main/Main";
import Programs from "./Programs/Programs";
import SecondSection from "./SecondSection/SecondSection";
import Form from "./Form/Form";
import UnitBox from "./Unit_box/UnitBox";
import ShowSectionPic from "./SecondSection/ShowSectionPic";

function MainPage() {
  console.log("Rendering MainPage");

  return (
    <div>
      <div>
        <section id="main">
          <Main />
        </section>
        <section id="unit">
          <UnitBox />
        </section>
        <section id="statistic">
          <SecondSection />
        </section>
        <section id="team">
          <ShowSectionPic />
        </section>
        <section id="partners">
          <Programs />
        </section>
        <Form />
      </div>
    </div>
  );
}

export default MainPage;
