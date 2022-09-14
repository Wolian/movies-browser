import { APIPhotoUrl } from "../../App/API";
import { Tile, LinkPerson, Image, Name, Role } from "./styled";
import noPersonPhoto from "./noPersonPhoto.png";

export const PersonTile = ({ name, role, photo, personId }) => {
  const image = `${APIPhotoUrl}w500${photo}`;
  return (
    <Tile>
      <LinkPerson to={`/peopleprofile/${personId}`}>
        <Image src={photo ? image : noPersonPhoto} alt={name} />
      </LinkPerson>
      <LinkPerson to={`/peopleprofile/${personId}`}>
        <Name>{name}</Name>
      </LinkPerson>
      <Role>{role}</Role>
    </Tile>
  );
};
