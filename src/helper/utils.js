

export const sendUrl = async (url) => {
    try {
        const response = await fetch('http://localhost:5050/shortner',{
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url:url})
        })
        const objUrl = response.json()
        console.log(objUrl)
        return objUrl
    } catch (error) {
        return {}
    }
}