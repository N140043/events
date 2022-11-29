import './index.css'

const EventItem = props => {
  const {
    details: {id, imageUrl, name, location},
    onChangeRegistrationStatus,
  } = props

  const onImageClick = () => {
    onChangeRegistrationStatus(id)
  }

  return (
    <li className="each-event">
      <button type="button" className="image-btn" onClick={onImageClick}>
        <img src={imageUrl} alt="event" className="image" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
