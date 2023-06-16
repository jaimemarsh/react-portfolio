import React from 'react';

export default function Resume() {
  return (
    <section class="container is-max-widescreen">
      <section class="section is-medium">
        <div>
          <h1 class="title is-size-1">
            <a
              href="https://docs.google.com/document/d/1VgjNo0e3yqMJnEQEkx-6ksQOKaP4iOxmdjWmhKwiR-M/export?format=pdf"><i
                class="fa-solid fa-file-arrow-down m-1"></i><strong>Resume</strong></a></h1>
        
          <section>
            <h1 class="title size-is-1 my-2 has-text-link">Skills</h1>
            <p>I am specializing in HTML5, CSS3, JavaScript, jQuery, Express.js, React.js, Node.js, Progressive Web Applications (PWA's), agile methodology, computer sciences, database theory, MongoDB, MySQL, NoSQL, GIT & more. I care about quality and I only ship high-quality code. I collaborate well with my peers to solve exciting and challenging problems. My main priority is being an asset and helping people how I can, when I can.</p>
          </section>
          <section>
            <h1 class="title size-is-1 my-2 has-text-link">Education</h1>
            <ul>
              <li>
                <h1>Ohio State University Coding Bootcamp</h1>
                January 2023 - July 2023
              </li>
              <li>
                <h1>University of Central Florida</h1>
                August 2021 - December 2022 for Digital Media (Web Design)
              </li>
              <li><h1>Linkedin Learning Certificate</h1>
                Learning the JavaScript Language
              </li>
            </ul>
          </section>
          <section>
            <h1 class="title size-is-1 my-2 has-text-link">Projects</h1>
            <ul>
              <li>
                <span class="has-text-link"><em>JavaScript Quiz:</em></span> A timed quiz on JavaScript fundamentals that stores high-scores to see progress of myself and my peers.
              </li>
              <li>
                <span class="has-text-link"><em>Notes Application:</em></span> An application that uses Express.js to save and retrieve data from a JSON file.
              </li>
              <li>
                <span class="has-text-link"><em>Pocket Plant:</em></span> A team project developed to be a simple place to explore and store plants and plant care tips.
              </li>
              <li>
                <span class="has-text-link"><em>Weather Dashboard:</em></span> A weather dashboard that runs in the browser while retrieving data from Open Weathers API.
              </li>
            </ul>
          </section>
        </div>
      </section>
    </section>
  );
}
