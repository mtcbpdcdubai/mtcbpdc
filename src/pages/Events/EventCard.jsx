import { FaLink } from "react-icons/fa";
import PropTypes from 'prop-types';
import LinkButton from "src/components/LinkButton/LinkButton";


/**
 * @param {Object} props
 * @param {import("content/events/Events.js").EventEntry} props.eventDetails
 * An `EventEntry` object.
 */
export default function EventCard({ eventDetails }) {
  const {dateTimeStart, dateTimeEnd} = eventDetails;
  const isUpcoming = Math.max(dateTimeStart, dateTimeEnd) > Date.now();

  return (
    <div className={"event-card" + (isUpcoming ? " upcoming" : "")}>

      <div className="event-info">

        <h2>{eventDetails.title}</h2>

        <p className="event-description">{eventDetails.description}</p>

        {eventDetails.links.map(link => (
          <LinkButton to={link.url} key={link.url}>
            {/* {link.urlType == null ? <>a</> : <span>{getIcon(link.urlType)}</span>} */}
            {link.icon || <FaLink />}
            <span>{link.text || "Read More"}</span>
          </LinkButton>
        ))}

      </div>

      <div className="event-image">
        <img src={eventDetails.image} alt={eventDetails.title} />
      </div>

    </div>
  );
}

EventCard.propTypes = {
  eventDetails: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    dateTimeStart: PropTypes.instanceOf(Date),
    dateTimeEnd: PropTypes.instanceOf(Date),
    image: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        text: PropTypes.string,
        icon: PropTypes.element,
      })
    ).isRequired,
  }).isRequired,
};
