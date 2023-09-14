"use client";

import { useCSV } from "./hooks/useCSV";
import styles from "./page.module.css";

export default function Home() {
  const filePath = `${process.env.NEXT_PUBLIC_SITE_URL}/ppc-data.csv`;

  const { data, errors, isLoading } = useCSV(filePath);

  const showError = errors.length > 0 && !isLoading;

  return (
    <main className={styles.main}>
      <h1>{isLoading ? "Loading...⌛️" : "Data loaded ✅"}</h1>
      {showError && (
        <ul>
          {errors.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      )}
      <ul>
        {data.map((line, index) => (
          <li key={index}>
            <p>{JSON.stringify(line, null, 2)}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
