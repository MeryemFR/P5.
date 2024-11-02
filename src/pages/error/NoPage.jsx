import React from "react";
import ErrorPage from "../../components/ErrorPage";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const NoPage = () => {
  return (
    <>
      <div className="NoPage">
        <Header />
        <main>
          <ErrorPage />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default NoPage;
