import { Wrapper, Header, Container } from "./Container";
import { MovieTile, Image, Description, Title, Year, Tags, Tag, Icon, Rating, Rate, Votes, Content } from "./MovieTile";
import poster from "../../../images/poster.png";
import Vector from "../../../images/Vector.png";

export const MovieList = () => {
    return (
        <Wrapper>
            <Header>Popular movies</Header>
            <Container>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Year>2020</Year>
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Year>2020</Year>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Tags>
                                <Tag>Action</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan long title long title Mulan long title long tiltle</Title>
                            <Year>2020</Year>
                            <Tags>
                                <Tag>Action</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Year>2020</Year>
                            <Tags>
                                <Tag>Action</Tag>
                                <Tag>Adventure</Tag>
                                <Tag>Drama</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Year>2020</Year>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan</Title>
                            <Tags>
                                <Tag>Action</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
                <MovieTile>
                    <Image src={poster} alt="" />
                    <Content>
                        <Description>
                            <Title>Mulan long title long title Mulan long title long tiltle</Title>
                            <Year>2020</Year>
                            <Tags>
                                <Tag>Action</Tag>
                            </Tags>
                        </Description>
                        <Rating>
                            <Icon src={Vector} alt="" />
                            <Rate>7,8</Rate>
                            <Votes>35 votes</Votes>
                        </Rating>
                    </Content>
                </MovieTile>
            </Container>
        </Wrapper>
    );
};