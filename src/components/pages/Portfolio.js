import React from 'react';
import gistSS from '../../images/gistSS.png'
import jsQuizSS from '../../images/jsQuizSS.png'
import noteTakerSS from '../../images/noteTakerSS.png'
import recipeMuseSS from '../../images/recipeMuseSS.png'
import techBlogSS from '../../images/techBlogSS.png'
import weatherDashboardSS from '../../images/weatherDashboardSS.png'

export default function Portfolio() {
  return (
    <section class="container is-max-widescreen">
      <section class='section is-medium' id="recentWork">
        <h1 class="title has-text-centered is-size-1">Recent Work</h1>
        <div class="">
          <div class="">
            <div class="">
              <div class="tile is-parent">
                <article class="tile is-child notification is-link hide recentWork defaultFont">
                  <p class="title"><a href="https://jaimemarsh.github.io/javascriptQuiz/">JavaScript Quiz</a>
                  </p>
                  <img src={jsQuizSS} alt="JavaScript Quiz"></img>
                  <p class="title"><a href="https://github.com/jaimemarsh/javascriptQuiz">GitHub Link</a>
                  </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-link hide recentWork defaultFont">
                  <p class="title"><a href="https://notesapplication.herokuapp.com/">Note Taker
                  </a></p>
                  <img src={noteTakerSS} alt="Note Taker"></img>
                  <p class="title"><a href="https://github.com/jaimemarsh/notesApplication">GitHub Link</a>
                  </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification hide is-link recentWork defaultFont">
                  <p class="title"><a href="https://malachigamblin.github.io/Recipe-Muse/">Recipe Muse</a></p>
                  <img src={recipeMuseSS} alt="Recipe Muse"></img>
                  <p class="title"><a href="https://github.com/malachigamblin/Recipe-Muse">GitHub Link</a>
                  </p>
                </article>
              </div>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-link hide recentWork defaultFont">
                <p class="title"><a href="https://jaimemarsh.github.io/weatherDashboard-/">Weather
                  Dashboard</a>
                </p>
                <img src={weatherDashboardSS} alt="Weather Dashboard"></img>
                <p class="title"><a href="https://github.com/jaimemarsh/weatherDashboard-">GitHub Link</a>
                </p>
              </article>
            </div>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification hide recentWork is-link defaultFont">
              <div class="content">
                <p class="title"><a
                  href="https://gist.github.com/jaimemarsh/56499452d49696e1c00220c592032f72">Regular
                  Expression How To</a></p>
                  <img src={gistSS} alt="How to"></img>
              </div>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification hide recentWork is-link defaultFont">
              <div class="content">
                <p class="title"><a
                  href="https://github.com/jaimemarsh/techBlog">Tech Blog</a></p>
                <img src={techBlogSS} alt="Tech Blog"></img>
              </div>
            </article>
          </div>
        </div>
      </section>
    </section>
  );
}
