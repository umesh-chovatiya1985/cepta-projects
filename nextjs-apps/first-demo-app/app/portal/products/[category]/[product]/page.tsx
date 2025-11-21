import ProductCartData from "@/app/components/ProductCartData";

export default async function Product({ params }: { params: { category: string, product: string } }) {
  
  const queryParams = await params;
  
  console.log(queryParams);
  
  return (
    <div>
      <ProductCartData />
    </div>
  )
}
