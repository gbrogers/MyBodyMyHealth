export default function Hamburger(props) {
  const { navbarOpen, setNavbarOpen } = props;
  return (
    <>
      <button className="hamburger" onClick={() => setNavbarOpen(!navbarOpen)}>
        &#9776;
      </button>

      <style jsx>
        {`
          .hamburger {
            all: unset;
            font-size: 2em;
            margin-right: 30px;
            display: flex;
            justify-content: space-around;
            flex-flow: column nowrap;
            z-index: 10;
          }
          
          @media screen and (min-width: 768px) {
            .hamburger {
              display: none;
            }
        `}
      </style>
    </>
  );
}
