import styled from "@emotion/styled/macro";
import { movieType } from "../common/movieType";

type PreviewCardPropsType = {
  movie: movieType;
  className?: string;
};

const Wrapper = styled.div`
  display: flex;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  overflow: hidden;
`;
const Content = styled.div`
  display: flex;
`;
const Thumbnail = styled.img`
  height: 273px;
`;
const Title = styled.h4`
  font-weight: 700;
`;
const ReleaseDate = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`;

const PreviewCard = ({ movie, className }: PreviewCardPropsType) => {
  return (
    <Wrapper className={className}>
      <Thumbnail
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="poster"
      />
      <Content>
        <Title>{movie.title}</Title>
        <ReleaseDate> {movie.release_date} </ReleaseDate>
      </Content>
    </Wrapper>
  );
};

export default PreviewCard;
