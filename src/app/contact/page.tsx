import Form from "@/components/contact/Form";
import InfoContact from "@/components/contact/InfoContact";
import SocialMedia from "@/components/contact/SocialMedia";
import React from "react";

function page() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 gap-20 mb-8">
      <InfoContact />
      <Form />
      <SocialMedia />
    </section>
  );
}

export default page;
