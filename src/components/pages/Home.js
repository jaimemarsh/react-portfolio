import React from 'react';
import meSS from '../../images/meSS.png'

export default function Home() {
  return (
    <section class="container is-max-widescreen">
      <section class="section is-medium">
        <h1 class="title is-size-1 has-text-link">About me</h1>
        <figure class="image is-128x128 my-6">
            <img src={meSS} alt="Jaime Marsh"></img>
          </figure>
        <section class="is-size-4">
          <p>
            Hi! My name is <strong>Jaime Marsh</strong>. I'm here to help you and your business succeed by
            creating a website from the groud up, fixing one that isn't what you want, or working for you on
            a longer project.
            I'm currently working in the Columbus, Ohio area, but have no problem working remote. I'm open to
            many opportunities and positions, including freelance work.
          </p>
          <p>For your website I don't have a stash of layouts to use, but want to talk
            with you about
            your goals,
            needs,
            and features <em>you want</em>. Your business isn't like everyone else's, and your website shouldn't
            be
            either.
            Having a well organized website is hard, let me help. </p>
          <p>I focus mainly on the design and interaction of a website, while a backend
            developer
            would
            work more with
            databases, security, and other server-side functions. Evaluate what you need. Feel free to contact
            me if
            you
            have questions.
          </p>
        </section>
      </section>
    </section>
  );
}
