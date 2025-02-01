interface Props {
  params: {
    productId: string;
  };
  searchParams: {
    [key: string]: string;
  };
}

const DyanamicProductDetailsPage = async ({ params, searchParams }: Props) => {
  const { productId } = await params;
  console.log(await searchParams);

  return (
    <div className="flex flex-col items-center justify-center my-6">
      <h1 className="text-2xl text-blue-500">
        This is the Dynamic Product Detail page component for Product ID:
        {productId}
      </h1>
    </div>
  );
};

export default DyanamicProductDetailsPage;
