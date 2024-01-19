
import { Metadata } from "next";
import React from "react";
import ListServices from "@/ui/textcontent/listservices/ListServices";

export const metadata: Metadata = {
  title: "Оформлення нерухомості, технічний паспорт | ГЕСТІЯ-БТІ",
  description: "Оформлення нерухомості Одеса",
  metadataBase: new URL('https://hestiyabti.com/services'),
};

const Services = async () => {
  return (
    <div className="container my-7 md:my-14 min-h-screen">
      <ListServices/>
    </div>
  );
};

export default Services;
