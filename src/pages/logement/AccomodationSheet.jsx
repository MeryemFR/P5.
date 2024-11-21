import React from "react";
import AccommodationDisplay from "../../components/accommodations/AccommodationDisplay";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const AccommodationSheet = () => {
  return (
    <div className="logement">
      <Header />
      <main>
        <AccommodationDisplay />
      </main>

      <Footer />
    </div>
  );
};

export default AccommodationSheet;
