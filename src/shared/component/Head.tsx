import './Head.css';

const Head = () => {
  return (
    <div className="banner">
      <div>
        <h1 className="title">Optemis</h1>
        <h4 className="title">Tecnical evaluation</h4>
        <span className="comment">
          This exercise asumes the logged in user selected an organization which
          may contain one or more laboratories in different countries
        </span>
      </div>
    </div>
  );
};

export { Head };
