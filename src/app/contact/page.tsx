import Form from "@/components/contact/Form";
import InfoContact from "@/components/contact/InfoContact";
import SocialMedia from "@/components/contact/SocialMedia";
import React from "react";

function page() {
  return (
    <section className="grid grid-cols-3 gap-8 m-8 p-8">
      <InfoContact />
      <Form />
      <SocialMedia />
    </section>
  );
}

export default page;
