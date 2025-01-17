import React from "react";
import moment from "moment";
import "./EventItem.css";

function EventItem({ title, poster, date, onDeletedEvent, id, onChangeColor, liked }) {
  const handleDeleteEvent = () => onDeletedEvent(id);
  const handleChangeColor = () => onChangeColor(id);

  return (
    <div className="event">
      <div className="position-relative">
        <img src={poster} alt={title} className="container-img" />
        <div>
          <span className="position-absolute date badge text-bg-light">
            {moment(date).format("DD MM")}
          </span>
          <div className="actions position-absolute">
            <i
              className="fa fa-times text-danger"
              role="button"
              onClick={handleDeleteEvent}
            />
          </div>
          <div className="like position-absolute">
            <i
              className={`fa fa-heart like ${liked ? 'text-danger' : 'text-light'}`}
              aria-hidden="true"
              role="button"
              onClick={handleChangeColor}
            />
          </div>
        </div>
      </div>
      <h3 className="fw-lighter mt-2">{title}</h3>
    </div>
  );
}

EventItem.defaultProps = {
  onDeletedEvent: () => {},
};

export default EventItem;
