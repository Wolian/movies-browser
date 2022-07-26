import {
  Header,
  Content,
  Nav,
  Logo,
  ImageLogo,
  Title,
  Menu,
  List,
  Item,
  Link,
  LinkActive,
} from "./styled";
import Search from "../Search";
import logo from "./logo.svg";

const Navigation = () => (
  <Header>
    <Content>
      <Nav>
        <Logo>
          <ImageLogo src={logo} alt="Logo - Movies Browser" />
          <Title>
            <Link href="#">Movies Browser</Link>
          </Title>
        </Logo>
        <Menu>
          <List>
            <Item>
              <LinkActive href="#">MOVIES</LinkActive>
            </Item>
            <Item>
              <Link href="#">PEOPLE</Link>
            </Item>
          </List>
        </Menu>
      </Nav>
      <Search />
    </Content>
  </Header>
);

export default Navigation;
