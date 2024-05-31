import SmallCard from '../SmallCard/SmallCard';
import PropTypes from 'prop-types';

function ContentRowTop({ data }) {
    return (
        <div className="row">
            {data.map((element, index) => {
                return <SmallCard
                    key={index}
                    title={element.title} 
                    quantity={element.quantity} 
                    color={element.color} 
                    icon={element.icon} 
                />
            })}
        </div>
    )
}

ContentRowTop.propTypes = {
    data: PropTypes.array.isRequired
}

ContentRowTop.defaultProps = {
    data: []
}


export default ContentRowTop;