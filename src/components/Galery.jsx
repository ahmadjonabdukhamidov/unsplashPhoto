import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

function Galery({ data: { results } }) {
  const { addNewImage } = useContext(GlobalContext);

  return (
    <div className="galery">
      <ul>
        {results.map((image) => {
          return (
            <li key={image.id}>
              <Link to={`singlepage/${image.id}`}>
                <img
                  src={image.urls.regular}
                  alt={image.alt_description}
                  width={300}
                  height={300}
                />
              </Link>
              <button onClick={() => addNewImage(image)} className="Likebtn">
                Liked ❤
              </button>
              {/* <button onClick={() => handleDelete(image.id)} className="deletebtn">
                Delete 🗑
              </button> */}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Galery;
