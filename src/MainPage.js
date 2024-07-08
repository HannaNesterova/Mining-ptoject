import React from "react";
import Main from "./Main/Main";
import Programs from "./Programs/Programs";
import SecondSection from "./SecondSection/SecondSection";
import Show_section_pic from "./SecondSection/Show_section_pic";
import Unit_box from "./Unit_box/Unit_box";
import Form from "./Form/Form";

function MainPage() {
  console.log("Rendering MainPage");

  return (
    <div>
      <div>
        <section id="main">
          <Main />
        </section>
        <section id="unit">
          <Unit_box />
        </section>
        <section id="statistic">
          <SecondSection />
        </section>
        <section id="team">
          <Show_section_pic />
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
