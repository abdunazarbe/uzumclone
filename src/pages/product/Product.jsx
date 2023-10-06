import { useEffect } from "react";
import useProductStore from "../../store/useProductStore";
import Card from "../../components/UI/Card/CardProduct";
const Product = () => {
    const {product,setProduct} = useProductStore();

    const getProdcut = async () => {
        try {
            const response = await fetch("http://localhost:3000/products");
            const result = await response.json();
            setProduct(result);
        } catch (err) {
            console.log(err.message);
        }
    }
    useEffect(() => {
        getProdcut();
       
    }, [])
   
    return (
        <section className="pb-5">
            <div className="container">
                 <h2 className="text-[#141415] font-['RobotoMedium'] mb-[16px] text-[16px]">Products</h2>

                 <div className="grid grid-cols-5 gap-2">
                    {
                        product[0]?.map((item, index) => {
                            return <Card key={index} case={item}/>
                        })
                    }
                 </div>
            </div>
        </section>
    );
};

export default Product;