import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  const copyText = () => {
    const textToCopy = `<script> window.sheetURL = 'https://script.google.com/macros/s/AKfycbwzP-7kq7x9OdJuZ_L-gZFsalsaionQK_c8itCkw8tbuZVQzrOy9DHvQ39NKV9yU01g/exec' </script> <script src='https://ghlexperts.s3.amazonaws.com/customNavLinks/main_v2.js'></script>`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        alert('Code copied to clipboard');
      })
      .catch(err => {
        console.error('Error in copying text: ', err);
      });
  };

  return (
    <div>
      <Head>
        <title>Copy Code Button</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className={styles.container}>
        <button className={styles.copyButton} onClick={copyText}>
          Click Here to Copy the Code
        </button>
      </div>
    </div>
  );
}

