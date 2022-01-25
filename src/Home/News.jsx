import React from "react";
import NewsTicker, {
  Directions,
  TickerStates,
} from "react-advanced-news-ticker";
function News() {
  return (
    <div id="nt-example1-container">
      <i
        className="fa fa-arrow-up"
        id="nt-example1-prev"
        onClick={() => {
          ref.current.movePrev();
          ref.current.resetInterval();
        }}
      />
      <NewsTicker
        ref={ref}
        id="nt-example1"
        direction={Directions.UP}
        rowHeight={80}
        maxRows={3}
        duration={4000}
      >
        <div>Content 1</div>
        <div>Content 2</div>
        <div>Content 3</div>
        <div>Content 4</div>
      </NewsTicker>
      <i
        className="fa fa-arrow-down"
        id="nt-example1-next"
        onClick={() => {
          ref.current.moveNext();
          ref.current.resetInterval();
        }}
      />
    </div>
  );
}
export default News;
