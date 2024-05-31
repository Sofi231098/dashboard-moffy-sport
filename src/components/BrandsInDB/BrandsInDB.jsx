import { useContext, useState } from "react";
import { InitDataContext } from "../../context/InitDataContext";

    function BrandsInDB() {

        const { brands } = useContext(InitDataContext);
        
        const handleMouseEnter = () => {
            setTitleHovered((value) => !value);
    };

    const uniqueBrands = brands?.data?.reduce((acc, current) => {
        const x = acc.find((item) => item.brand === current.brand);
        if (!x) {
        return acc.concat([current]);
        } else {
        return acc;
        }
    }, []);

    return (
        <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
            <div className="card-header py-3">
            <h5
                className="m-0 font-weight-bold text-gray-800"
                onMouseEnter={handleMouseEnter}
            >
                Brands in Data Base
            </h5>
            </div>
            <div className={`card-body`}>
            <div className="row">
                {uniqueBrands?.map((brand, index) => {
                return (
                    <div key={index} className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                        <div className="card-body">{brand.brand}</div>
                    </div>
                    </div>
                );
                })}
            </div>
            </div>
        </div>
        </div>
    );
    }

export default BrandsInDB;
