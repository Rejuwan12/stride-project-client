import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import Swal from "sweetalert2";


const AddProducts = () => {
 
  const {register,handleSubmit,formState:{errors},} = useForm();
 const {user} = useAuth();
  
  const onSub =(data)=>{
    const title = data.title;
    const brand = parseFloat(data.brand);
    const price = parseFloat(data.price);
    const stock = data.stock;
    const imageURL = data.imageURL;
    const category = data.category;
    const description = data.description;
    const sellerEmail = user?.email;

    const product ={
      title,imageURL,
      brand, price, stock, category,description,sellerEmail
    };
    const token = localStorage.getItem('access-token');

    axios.post('http://localhost:4000/add-products', product,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then(res => {
      if(res.data.insertedId){
        Swal.fire({
          title: "Wow! Added!",
          text: "Product Added Success",
          icon: "success",
          showConfirmButton: false,
          timer: 1500
        });
      }
    });
    
  };
  return (
    <div className="w-full h-full">
      <h1 className="mb-12 text-2xl font-bold text-center">Add Products</h1>
      
      <div className="w-full h-full">
      <form onSubmit={handleSubmit(onSub)} className="card-body">
        <div className="w-full gap-8 lg:flex">
          {/* brand title */}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Product Title</span>
          </label>
          <input type="text" placeholder="Products Title" className="w-full p-2 border border-black rounded-md" {
            ...register('title', {required:true})
          } />
          {errors.title && <p className='text-sm font-light text-red-500'>Title is Required</p>}
        </div>
        {/* brand name */}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Brand Name</span>
          </label>
          <input type="text" placeholder="Brand Name" className="w-full p-2 border border-black rounded-md" {
            ...register('brand', {required:true})
          } />
          {errors.brand && <p className='text-sm font-light text-red-500'>Brand Name is Required</p>}
        </div>      
        </div>
        <div className="w-full gap-8 lg:flex">
          {/* price*/}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="number" placeholder="Price" className="w-full p-2 border border-black rounded-md" {
            ...register('price', {required:true})
          } />
          {errors.price && <p className='text-sm font-light text-red-500'>Price is Required</p>}
        </div>
        {/* stock */}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Stock</span>
          </label>
          <input type="number" placeholder="Stock quantity" className="w-full p-2 border border-black rounded-md" {
            ...register('stock', {required:true})
          } />
          {errors.brand && <p className='text-sm font-light text-red-500'>Stock is Required</p>}
        </div>
        {/* product category */}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Product Category</span>
          </label>
          <input type="text" placeholder="Product Category" className="w-full p-2 border border-black rounded-md" {
            ...register('category', {required:true})
          } />
          {errors.category && <p className='text-sm font-light text-red-500'>Product Category is Required</p>}
        </div>
        </div>
        {/* Image URL category */}
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Image URL</span>
          </label>
          <input type="text" placeholder="Image URL" className="w-full p-2 border border-black rounded-md" {
            ...register('imageURL', {required:true})
          } />
          {errors.imageURL && <p className='text-sm font-light text-red-500'>Image URL Category is Required</p>}
        </div>
        
        <div className="w-full" >
          <label className="label">
            <span className="label-text">Product Description</span>
          </label>
          <textarea type="text" placeholder="Product Description" className="w-full p-2 border border-black rounded-md" {
            ...register('description', {required:true})
          } />
          {errors.description && <p className='text-sm font-light text-red-500'>Description Box is Required</p>}
        </div>
        <div className="flex justify-center my-8 ">
          <button className="w-full btn btn-primary btn-outline">Add Products</button>
        </div>
        
      </form>
      </div>
      
    </div>
  
  )
}

export default AddProducts
