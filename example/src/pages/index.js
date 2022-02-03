import React from 'react';
import { FaBeer } from '@react-icons/all-files/fa/FaBeer';
import { Layout } from 'gatsby-theme-sd-prototype';

export default function Home() {
  return (
    <Layout theme="test">
      <h1>Homepage in a user's site</h1>
      <p>
        I would love a <FaBeer className="sd-icon--lg" />
      </p>
    </Layout>
  );
}
