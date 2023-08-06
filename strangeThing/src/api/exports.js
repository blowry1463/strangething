


export async function fetchPosts() {
    try {
      const response = await fetch('https://strangers-things.herokuapp.com/api/2306-ftb-et-web-ft/posts')
      const data = await response.json()

      return data.results

} catch (err) {
     console.log('An error has happened, no fetch:',err)
  }
}

