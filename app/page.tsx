"use client";

import React from "react";
import styles from "../app/apartments/ApartmentsPage.module.css"; // Import CSS module styles
interface Apartment {
  id: string;
  name: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  totalLength: number;
}
const ApartmentsPage = async () => {
  const res = await fetch("http://localhost:3001/apartments");
  const apartments: Apartment[] = await res.json();
  return (
    <div className={styles.container}>
      <b className={styles.heading}>Apartments</b>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Title</th>
            <th>Address</th>
            <th>Price</th>
            <th>Bedrooms</th>
            <th>Bathrooms</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          {apartments.map((apartment) => (
            <tr key={apartment.id}>
              <td>{apartment.name}</td>
              <td>{apartment.address}</td>
              <td>{apartment.price}</td>
              <td>{apartment.bedrooms}</td>
              <td>{apartment.bathrooms}</td>
              <td>{apartment.totalLength}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default ApartmentsPage;
