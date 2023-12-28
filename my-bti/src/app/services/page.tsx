import CardList from "@/containers/cardslist/CardList";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Оформлення нерухомості | ГЕСТІЯ-БТІ",
  description: "Оформлення нерухомості Одеса",
};

const Services = async () => {
  return (
    <div className="container my-7 md:my-14 min-h-screen">
      <CardList />
    </div>
  );
};

export default Services;
