export const fetchWatch = async (watchId) => {
    let watch = {
        id: watchId,
        title: "Black Automatic Watch",
        currPrice: 68.00,
        prevPrice: 79.00,
        rating: {
            rate: 4.9,
            people: 98,
        },
        sizes: ["S", "M", "L", "XL", "2XL"],
    }
    return await new Promise(resolve => setTimeout(resolve(watch), 5000))
}