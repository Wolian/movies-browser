import { APIPhotoUrl } from "../../App/API";
import { Tile, Image, Name, Role } from "./styled";
import noPersonPhoto from "./noPersonPhoto.svg";

export const PersonTile = ({ name, role, photo }) => {
  const image = `${APIPhotoUrl}w185${photo}`;
  return (
    <Tile>
      <Image src={photo ? image : noPersonPhoto} alt={name} />
      <Name>{name}</Name>
      <Role>{role}</Role>
    </Tile>
  );
};
