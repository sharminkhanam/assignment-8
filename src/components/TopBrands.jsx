import Image from "next/image";



const brands = [
    {name: "Nike", logo:"/brands/nike.png"},
    {name: "Adidas", logo:"/brands/adidas.jpg"},
    {name: "Puma", logo:"/brands/puma.png"},
    {name: "Reebok", logo:"/brands/reebok.png"},
];

const TopBrands = () => {
    return (
        <div className="my-12">
            <h2 className="text-center text-4xl font-bold my-8 ">Top Brands</h2>
            <div className="grid grid-cols-4 gap-4 ">
                {
                    brands.map((b, index)=>(
                        <div key={index} className=" bg-amber-300 shadow-lg p-8">
                            <div className="w-[200px] h-[200px] mx-auto">
                                  <Image src={b.logo} alt={b.name} 
                                height={200} width={200}
                          
                            className="w-full h-full rounded-xl object-contain object-cover">
                               
                            </Image>
                            </div>
                          
                            <p className="text-center font-bold text-2xl ">{b.name}</p>

                        </div>
                    ))
                }
            </div>
        </div>
    )
}


export default TopBrands;