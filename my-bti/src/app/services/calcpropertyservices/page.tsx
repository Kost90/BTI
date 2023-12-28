import PropertyServResult from "@/components/forms/calcpropertyservices/Propertyservicecalc"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реєстрація права власності | ГЕСТІЯ-БТІ",
  description: "Реєстрація права власності на нерухомість в Одесі",
};

const PropertyService =async () => {

  return (
    <div className="container my-7 md:my-14 flex items-center flex-col gap-8 md:gap-14 min-h-screen">
      <PropertyServResult/>
    </div>
  )
}

export default PropertyService