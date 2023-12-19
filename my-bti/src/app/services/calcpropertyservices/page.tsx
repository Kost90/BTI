import PropertyServResult from "@/components/forms/calcpropertyservices/Propertyservicecalc"

const PropertyService =async () => {

  return (
    <div className="container my-7 md:my-14 flex items-center flex-col gap-8 md:gap-14 min-h-screen">
      <PropertyServResult/>
    </div>
  )
}

export default PropertyService