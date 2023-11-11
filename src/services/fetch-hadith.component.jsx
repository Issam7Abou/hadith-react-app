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

//Fetch func for All Chapters of a Book
export const fetchChapters = async (bookName) => {
    const apiUrl = `/api/${bookName}/chapters?apiKey=${apiKey}`
    try {
        const response = await fetch(apiUrl)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        console.log(data.chapters[0].chapterEnglish)
    } catch (error) {
        console.log('There was the following error when fetching:', error)
    }
}