import React from "react";

import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import Intro from "../../components/intro/intro";
import AboutMeSectiono from "../../components/about/about";
import ContactSection from "../../components/contact/contact";
import SkillsSection from "../../components/skills/skills";
import ProjectSection from "../../components/projects/projects";
import ExperienceSection from "../../components/experience/experience";
import AchievementsSection from "../../components/achievement/achieve";

function HomePage() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <div id="intro">
          <Intro />
        </div>
        <div id="about">
          <AboutMeSectiono />
        </div>
        <div id="skills">{/* <SkillsSection /> */}</div>
        <div id="projects">{/* <ProjectSection /> */}</div>
        <div id="experience">
          <ExperienceSection />
        </div>
        <div id="achieve">{/* <AchievementsSection /> */}</div>
        <div id="contact">
          <ContactSection />
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default HomePage;
