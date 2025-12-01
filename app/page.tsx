import Image from "next/image";

export default function Home() {
  return (
    <div>
            {/* Banner */}
      <section id="banner">
        <div className="inner">
          <h2>Spectral</h2>
          <p>
            Another fine responsive
            <br />
            site template freebie
            <br />
            crafted by <a href="http://html5up.net">HTML5 UP</a>.
          </p>
          <ul className="actions special">
            <li>
              <a href="#" className="button primary">
                Activate
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
              Arcu aliquet vel lobortis ata nisl
              <br />
              eget augue amet aliquet nisl cep donec
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
              eleifend
              <br />
              fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
              ullamcorper.
            </p>
          </header>
          <ul className="icons major">
            <li>
              <span className="icon fa-gem major style1">
                <span className="label">Lorem</span>
              </span>
            </li>
            <li>
              <span className="icon fa-heart major style2">
                <span className="label">Ipsum</span>
              </span>
            </li>
            <li>
              <span className="icon solid fa-code major style3">
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
              Magna primis lobortis
              <br />
              sed ullamcorper
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
              Tortor dolore feugiat
              <br />
              elementum magna
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
              Augue eleifend aliquet
              <br />
              sed condimentum
            </h2>
            <p>
              Aliquam ut ex ut augue consectetur interdum. Donec hendrerit
              imperdiet. Mauris eleifend fringilla nullam aenean mi ligula.
            </p>
          </div>
        </section>
      </section>

      {/* You can continue with #three and #cta sections from index.html
          the same way – just copy the HTML structure and turn into JSX. */}
    </div>
  );
}
