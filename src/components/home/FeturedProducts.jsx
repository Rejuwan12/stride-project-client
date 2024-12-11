import ProductCard from "../ProductCard"


const FeturedProducts = () => {
  return (
    <div className="items-center justify-between gap-4 lg:flex">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default FeturedProducts
