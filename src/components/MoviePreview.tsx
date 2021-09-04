import styled from "@emotion/styled/macro";
import { movieType } from "../common/movieType";

type MoviePreviewPropsType = {
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
  background: #eeeeee;
`;
const Title = styled.h4`
  font-weight: 700;
`;
const ReleaseDate = styled.p`
  color: rgba(0, 0, 0, 0.6);
  font-weight: 400;
`;

const MoviePreview = ({ movie, className }: MoviePreviewPropsType) => {
  return (
    <Wrapper className={className}>
      <Thumbnail
        src={
          movie.poster_path
            ? `https://www.themoviedb.org/t/p/w220_and_h330_face${movie.poster_path}`
            : "https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg"
        }
        alt="poster"
      />
      <Content>
        <Title>{movie.title}</Title>
        <ReleaseDate> {movie.release_date} </ReleaseDate>
      </Content>
    </Wrapper>
  );
};
export default MoviePreview;
