import s from "./Button.module.css";

const LoadMoreButton = ({ onLoadMore }) => (
  <button className={s.Button} type="button" onClick={onLoadMore}>
    <span>Load more</span>
  </button>
);
export default LoadMoreButton;
