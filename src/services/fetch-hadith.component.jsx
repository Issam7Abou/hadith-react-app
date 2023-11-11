const apiKey = '$2y$10$BWleXewOsA3SRKdIBKJZbvofXKDjrJhcWfQkCOM0WA7uOtXzquAG'

//Fetch func for random Hadith
export const fetchRandomHadith = async () => {
    const apiUrl = `/api/hadiths/?apiKey=${apiKey}`
    const RANDOM_NUMBER = Math.floor(Math.random() * 25)
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json();
        return (data.hadiths.data[RANDOM_NUMBER])
    } catch (error) {
        console.log(error)
    }
}