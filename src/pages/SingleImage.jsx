import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function SingleImage() {
  const data = useContext(GlobalContext);
  console.log(data);
  const { id } = useParams();
  const url = `https://api.unsplash.com/photos/${id}?client_id=${
    import.meta.env.VITE_APP_SCCESS_KEY
  }`;
  const { data: image, isPending, error } = useFetch(url);

  return (
    <div>
      {isPending && <h1>Loading...</h1>}
      {error && <h1>{error}</h1>}
      {image && (
        <>
          <img
            src={image.urls.regular}
            alt={image.alt_description}
            height="500px"
          />
          <h2>Description:</h2>
          <p>{image.description || "No Description"}</p>
          <img
            className="profile_image"
            src={image.user.profile_image.large}
            alt=""
          />
          <p>Likes❤: {image.likes}</p>
          <hr />
          <h3>Author name : {image.user.name}</h3>
          <h3>
            Social network :{" "}
            {image.user.social.instagram_username ||
              "Social network is not defined"}
          </h3>
          <hr />
        </>
      )}
    </div>
  );
}

export default SingleImage;
