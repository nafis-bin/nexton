export const fetchWatch = async (watchId) => {
    let watch = {
        name: "casio-69",
        price: 100 * Number(watchId),
    }
    return await new Promise(resolve => setTimeout(resolve(watch), 5000))
}