// app/generic/page.tsx
export default function GenericPage() {
  return (
    <article id="main">
      <header>
        <h2>Generic Page</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {/* You can paste the long lorem ipsum content here from generic.html */}
          <h3>Lorem ipsum dolor</h3>
          <p>
            Morbi mattis mi consectetur tortor elementum, varius pellentesque
            velit convallis. Aenean tincidunt lectus auctor mauris maximus, ac
            scelerisque ipsum tempor. Duis vulputate ex et ex tincidunt, quis
            lacinia velit aliquet. Duis non efficitur nisi, id malesuada justo.
            Maecenas sagittis felis ac sagittis semper. Curabitur purus leo,
            tempus sed finibus eget, fringilla quis risus. Maecenas et lorem
            quis sem varius sagittis et a est. Maecenas iaculis iaculis sem.
            Donec vel dolor at arcu tincidunt bibendum. {/* …etc from the file */}
          </p>
        </div>
      </section>
    </article>
  );
}
