import "./styles.css";

import Map from "./Map";

export default function Main(props) {
  let view;
  switch (props.mode) {
    case 'vehicles':
      view = <Map dataSource={props.dataSource} />;
      break;

    default:
      break;
  }

  return ( // switch rendering component according to props
    <div className="Main">
      {view}
    </div>
  );
}
