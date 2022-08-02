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
  LinkLogo,
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
            <LinkLogo to="/">Movies Browser</LinkLogo>
          </Title>
        </Logo>
        <Menu>
          <List>
            <Item>
              <Link to="/movies">MOVIES</Link>
            </Item>
            <Item>
              <Link to="/moviepage">PEOPLE</Link>
            </Item>
          </List>
        </Menu>
      </Nav>
      <Search />
    </Content>
  </Header>
);

export default Navigation;
