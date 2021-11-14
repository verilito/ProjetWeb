export async function itunesApiRequest(term) {
    const url = new URL('https://itunes.apple.com/search');
    const params = {
        country: 'FR',
        lang: 'fr_fr',
        limit: 50,
        term,
        media: 'movie',
    };

    try {
        url.search = new URLSearchParams(params);
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
    }
}


