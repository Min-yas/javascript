function fetchData(url) {
    fetch(url).then((response) => {
        if (!response.ok) {
            console.log("Error happened!")
            throw new Error('Exception Occurred')
        }
        return response.json()
    }).then((data) => {
        console.log(data);
    }).catch((err) => {
        console.log(err);
    }).finally(() => {
        console.log("Task is Completed");
    })
}

fetchData("https://jsonplaceholder.typicode.com/users")