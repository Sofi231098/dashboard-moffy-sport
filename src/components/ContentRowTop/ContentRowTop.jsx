import { InitDataContext } from "../../context/InitDataContext";
import { useContext, useEffect, useState } from "react";
import ContentRowProducts from "../ContentRowProducts/ContentRowProducts";
import LastProductInDB from "../LastProductInDB/LastProductInDB";
import BrandsInDB from "../BrandsInDB/BrandsInDB";



function ConTentRowTop(){
    const {products, users, brands} = useContext(InitDataContext);
    const [lastProduct, setLastProduct] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() =>{
        setLastProduct(products?.data[products?.data?.length - 1]);
        setData([
            {
                title: 'Products in Data Base',
                color: 'primary',
                icon: 'fa-store',
                quantity: products?.data?.length
            },
            {
                title: 'Total Brands',
                color: 'success',
                icon: 'fa-tags',
                quantity: "3"
               
            },
            {
                title: 'User quantity',
                color: 'warning',
                icon: 'fa-user',
                quantity: users?.data.length
            }
        ]);
    }, [products, users, brands]);


    return(
        <div className="container-fluid">
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>
            <ContentRowProducts data={data} />
            <div className="row">
                {lastProduct && <LastProductInDB data={lastProduct} />}
                <BrandsInDB/> 
            </div>
        </div>
    )
}

export default ConTentRowTop;

{/*} quantity: new Set(brands.data.map(brand => brand.brand)).size */}