import { HoroscopeData } from "../enum/HoroscopeData";

export async function getDataHoroscope(signSelected: string) {
  try {
    // Post
    const response = await fetch(
      "https://us-central1-tf-natal.cloudfunctions.net/horoscopeapi_test",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
        body: JSON.stringify({ sign: signSelected, date: "today" }),
      }
    );
    const data = await response.json();
    return data as HoroscopeData;
  } catch (error) {
    console.error(error);
  }
}
