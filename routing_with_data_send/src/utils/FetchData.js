export default async function FetchData(url) {
    const response = await fetch(url)
    return await response.json()
}
