import React from "react";

const WikiPage = () => {
  const src = ["ApEkiUDdIjk", "NQzxGt-c9WE", "opNgrPv3Qw8", "pbxGBOTgGYY"];

  const yT = src.map((src, index) => (
    <iframe
      key={index}
      width="560"
      height="315"
      src={`https://www.youtube.com/embed/${src}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    ></iframe>
  ));

  return (
    <div className="WikiPage">
      <section>
        <h1>Kursy Video:</h1>
        <div>{yT}</div>
      </section>

      <section>
        <h1>Arytukuły:</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aut nisi quos. Illum, maxime voluptate ipsum quaerat alias eos unde
          temporibus ea est inventore minus. Nam ipsa culpa error dolore!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          aut nisi quos. Illum, maxime voluptate ipsum quaerat alias eos unde
          temporibus ea est inventore minus. Nam ipsa culpa error dolore!
        </p>
      </section>
    </div>
  );
};

export default WikiPage;
