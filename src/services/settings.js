export const APIKEY = 'kuto63vP3ZknsX2Kh9p9c3NfWJmdbbrC';
export const APIURL = 'https://api.giphy.com/v1';
export const PAGELENGTH = 5;

export default function formatGifs(res) {
  const { data } = res
  
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const { images, title, id } = image;
      const url = images.downsized.url;
      return { id, title, url }
    });
    return gifs;
  }
}

export function formatSingleGif(res) {
  const { data } = res

  const { images, title, id } = data;
  const url = images.downsized.url;
  return { id, title, url }
}