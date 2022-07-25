import {
  Header,
  Content,
  Nav,
  Logo,
  NameWebsite,
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
          <img src={logo} alt="Logo - Movies Browser" width="40" height="40" />
          <NameWebsite>
            <Link href="#">Movies Browser</Link>
          </NameWebsite>
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
