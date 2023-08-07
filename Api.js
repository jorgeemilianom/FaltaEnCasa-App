
export const URL_API = 'http://192.168.100.4:3010/Products';
// export const URL_API = 'https://api.gesprender.com/products';


export async function getProducts(){
    const res = await fetch(URL_API)
    return await res.json();
}