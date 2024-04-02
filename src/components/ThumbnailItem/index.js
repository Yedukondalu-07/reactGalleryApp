// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, isActive, updateActivePhoto} = props
  const {thumbnailUrl, thumbnailAltText, id} = imageDetails
  const thumbnailClassName = isActive ? 'active-btn' : 'non-active-btn'

  const onClickTumbnail = () => {
    updateActivePhoto(id)
  }

  return (
    <li className="thumnails-container">
      <button
        type="button"
        onClick={onClickTumbnail}
        className="thumbnail-button"
      >
        <img
          className={`img ${thumbnailClassName}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
        />
      </button>
    </li>
  )
}
export default ThumbnailItem
