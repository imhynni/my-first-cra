import PropTypes from "prop-types";
function MovieDetail({
  title,
  year,
  rating,
  runtime,
  genres,
  coverImg,
  youtubeTrailer,
}) {
  return (
    <div>
      <img src={coverImg} alt={title} />
      <h2>{`${title} (${year})`}</h2>
      <p>{`평점 : ${rating}`}</p>
      <p>{`런타임 : ${runtime}분`}</p>
      <p>{`장르 : ${genres}`}</p>
      <a href={`https://www.youtube.com/watch?v=${youtubeTrailer}`}>
        Trailer 보러가기
      </a>
    </div>
  );
}
MovieDetail.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  runtime: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  coverImg: PropTypes.string.isRequired,
  youtubeTrailer: PropTypes.string.isRequired,
};
export default MovieDetail;
