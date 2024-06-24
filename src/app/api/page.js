const apiUrl = "https://deezerdevs-deezer.p.rapidapi.com/search";
const apiKey = "5622a4392amsh67c03b7b5ddcb4bp1d2654jsn6d9a1c48fa03";

export const getMusicData = async (query) => {
  try {
    const res = await fetch("${apiUrl}?q=${query}", {
      method: "GET",
      headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
      },
    });
    if (!res.ok) {
      throw new Error("res is not okay");
    }
    const data = await res.json();
    // return data;
    console.log(data);
  } catch (error) {
    console.error("Error fetching music data:", error);
    throw error;
  }
};
