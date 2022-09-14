import { Link } from "react-router-dom";
import { APIPhotoUrl } from "../../App/API";
import { Tile, Image, Name, Role } from "./styled";
import noPersonPhoto from "./noPersonPhoto.png";

export const PersonTile = ({ name, role, photo, personId }) => {
  const image = `${APIPhotoUrl}w500${photo}`;
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
