export async function getAllStarships() {
   
        try {
            const url = `https://swapi.dev/api/starships/`;

            let res = await fetch(url);

            let data = await res.json();

            return data.results;

        } catch (err) {
            console.error(err)
        }
};