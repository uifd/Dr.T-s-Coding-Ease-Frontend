// app/elements/page.tsx
export default function ElementsPage() {
  return (
    <article id="main">
      <header>
        <h2>Elements</h2>
        <p>Aliquam ut ex ut interdum donec amet imperdiet eleifend</p>
      </header>
      <section className="wrapper style5">
        <div className="inner">
          {/* Start copying sections from elements.html into JSX */}
          <section>
            <h4>Text</h4>
            <p>
              This is <b>bold</b> and this is <strong>strong</strong>. This is{" "}
              <i>italic</i> and this is <em>emphasized</em>. This is{" "}
              <sup>superscript</sup> text and this is <sub>subscript</sub>{" "}
              text. This is <u>underlined</u> and this is code:{" "}
              <code>for (;;) &#123; ... &#125;</code>. Finally,{" "}
              <a href="#">this is a link</a>.
            </p>
            {/* ...continue with headings, blockquote, pre, lists, etc. */}
          </section>
        </div>
      </section>
    </article>
  );
}
