export default function Hamburger() {
  return (
    <>
      <div className="hamburger">&#9776;</div>

      <style jsx>
        {`
          .hamburger {
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
