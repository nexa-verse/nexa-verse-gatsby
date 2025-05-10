import React from "react";
import { Helmet } from "react-helmet";



const Seo = ({ title, description }) => {
  const defaultTitle = "Nexa Verse"; // domyślny tytuł
  const fullTitle = title ? `${title} | ${defaultTitle}` : defaultTitle;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
    </Helmet>
  );
};

export default Seo;