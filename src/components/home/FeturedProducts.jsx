import ProductCard from "../ProductCard"


const FeturedProducts = () => {
  return (
    <div className="flex items-center justify-between gap-4">
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
    </div>
  )
}

export default FeturedProducts
