import Papa from "papaparse";
import useSWR from "swr";

// @ts-expect-error ts stuff
export const csvFetcher = (...args) =>
  // @ts-expect-error ts stuff
  fetch(...args).then(async (res) => await res.text());

export function useCSV(filePath: string) {
  const { data, error, isLoading } = useSWR(filePath, csvFetcher);

  const parsedData = Papa.parse(data ?? "", {
    header: true,
    dynamicTyping: true,
  });

  const errorsList = parsedData.errors.map(
    ({ message, code, row, type }) =>
      `Error type: ${type} (${code}) - ${message} on row ${row}`
  );

  if (error) errorsList.push(error);

  return {
    data: parsedData.data,
    errors: errorsList,
    isLoading,
  };
}
