import Image from "next/image";

export default function Home() {
  return (
    <div>
            {/* Banner */}
      <section id="banner">
        <div className="inner">
          <h2>Roboscribe</h2>
          <p>
            Transcript coding made easy
            <br />
            leveraging AI tools
            <br />
            As envisioned by Tingyan Liu
          </p>
          <ul className="actions special">
            <li>
              <a href="#" className="button primary">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="button primary">
                Coding
              </a>
            </li>
          </ul>
        </div>
        {/* This anchor is what RootClient’s scroll logic & CSS react to */}
        <a href="#one" className="more">
          Learn More
        </a>
      </section>

      {/* One */}
      <section id="one" className="wrapper style1 special">
        <div className="inner">
          <header className="major">
            <h2>
              Roboscribe: Auto-Codified Transcripts
              <br />
              with AI percision
            </h2>
            <p>
              Turn every raw transcript into clean, structured data — automatically. 
              Roboscribe uses an AI-driven
              <br />
              large lanuage model to codify messy 
              responses into an attachment script assessment result in seconds.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon solid fa-download major style1">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-code major style2">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon fa-file-alt major style3">
                <span className="label">Dolor</span>
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Two – spotlight sections */}
      <section id="two" className="wrapper alt style2">
        <section className="spotlight">
          <div className="image">
            <img src="/images/pic01.jpg" alt="" />
          </div>
          <div className="content">
            <h2>
              Who are we?
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src="/images/pic02.jpg" alt="" />
          </div>
          <div className="content">
            <h2>
              How do we code
              <br />
              Transcipts?
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
        <section className="spotlight">
          <div className="image">
            <img src="/images/pic03.jpg" alt="" />
          </div>
          <div className="content">
            <h2>
              How does this work?
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
      </section>

    </div>
  );
}
