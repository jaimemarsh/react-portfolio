import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="has-text-centered is-size-3 is-size-4-mobile solidFont">
        Interested in working together? Contact Me!
      </div>
      <div className="has-text-centered">
        <address className="is-size-3 is-size-4-mobile defaultFont">
          <span>
            <a href="tel:+16149401099">614.940.1099</a>
          </span>
          <span>
            <a href="mailto:jaimemarsh19@gmail.com">jaimemarsh.web@gmail.com</a>
          </span>
          <span>
            <a href="https://github.com/jaimemarsh">GitHub</a>
          </span>
          <span>
            <a href="https://www.linkedin.com/in/jaime-marsh-843871262/">LinkedIn</a>
          </span>
        </address>
      </div>
    </footer>
  );
}
