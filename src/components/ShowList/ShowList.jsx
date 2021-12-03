// import { ShowsWithImg } from "../../utils/utils.js";
import Show from "../Show/Show.jsx";
import "./ShowList.css";

export default function ShowList({ shows }) {

  console.log(shows)

  return (
    <ul aria-label="showList" className="showList-Container">
      {shows.map(( show ) => {          
        return (         
            <li key={show.id}>
              <Show show={ show } />
            </li>
        )
      })}
      
    </ul>
  );
}
