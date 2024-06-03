import PropTypes from 'prop-types';

function LastProductInDB ({ data }){
    console.log("esta es la imagen: ", data);
    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last product in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '20rem' }} src={`http://localhost:3000/images/products/${data.images[0]?.image}`} alt="Last product in Data Base" />
                    </div>
                    <p>{data.description}</p>
                    <a className="btn btn-dark" target="_blank" rel="nofollow" href={`/products/${data.id}`}>View Product detail</a>
                </div>


            </div>
        </div>
    )
}

LastProductInDB.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.shape({
                image: PropTypes.string.isRequired,
            })
        ).isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired
};

export default LastProductInDB;