import { Tile, Image, Name, Role } from "./styled";

export const PersonTile = ({ name, role }) => {
  return (
    <Tile>
      <Image src="https://i.ibb.co/QHf40YG/poster-1.png" alt="" />
      <Name>{name ? name : "test name"}</Name>
      <Role>{role ? role : "test role"}</Role>
    </Tile>
  );
};