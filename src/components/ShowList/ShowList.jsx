// import { ShowsWithImg } from "../../utils/utils.js";
import Show from "../Show/Show.jsx";
import "./ShowList.css";

export default function ShowList({ shows }) {
  return (
    <div aria-label="showList" className="showList-Container">
      {shows.map(
        (show) => <Show show={ show } key = { show.id } /> 
      )}      
    </div>
  );
}
