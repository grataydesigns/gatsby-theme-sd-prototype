import React from 'react';
import { Helmet } from 'react-helmet';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';

const Meta = ({ pageTitle, theme }) => {
  const { title, description, siteUrl, image, twitterUsername } =
    useSiteMetadata();

  const seo = {
    image: new URL(image, siteUrl),
  };

  return (
    <Helmet defaultTitle={title} titleTemplate={`%s - ${title}`}>
      <html lang="en" />
      {pageTitle ? <title>{pageTitle}</title> : null}
      {theme ? <body data-theme={theme} /> : null}
      <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
      <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
      <meta name="description" content={description} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default Meta;
