import { APIPhotoUrl } from "../../App/API";
import { Tile, Image, Name, Role } from "./styled";
import noPersonPhoto from "./noPersonPhoto.svg";
import { Link } from "react-router-dom";


export const PersonTile = ({ name, role, photo, personId }) => {
  const image = `${APIPhotoUrl}w185${photo}`;
  return (
    <Tile>
      <Link to={`/peopleprofile/${personId}`}>
        <Image src={photo ? image : noPersonPhoto} alt={name} />
      </Link>
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Tile>
  );
};
