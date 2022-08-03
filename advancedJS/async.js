// ASYNC FUNCTIONS
async function getData() {
    console.log("GET DATA CALLED !");
    let prom=new Promise((resolve, reject) => {
        //Resolve if everything goes to plan
        //Reject if something goes wrong

        //Imagine in 2 seconds the data is fetched
        setTimeout(() => {
            resolve('Data');
        }, 2000);
    })
    return prom;
}

getDataFailed= async () =>{

    console.log("GET DATA Failed CALLED !");
    let prom=new Promise((resolve, reject) => {
        //Resolve if everything goes to plan
        //Reject if something goes wrong

        //Imagine in 2 seconds the data fetching fails
        setTimeout(() => {
            reject('Not able to contact server');
        }, 2000);
    })
    return prom;
}


//Example of successfully fetching data using async/await
main3= async () =>{
    try {
        const data = await getData();
        console.log("Data from main 3:", data);
    } catch (error) {
        console.log("ERROR from main 3:",error);
    }
}

//Example of failure to fetch data using async/await
main4= async () =>{
    try {
        const data = await getDataFailed();
        console.log("Data from main 4:",data);
    } catch (error) {
        console.log("ERROR from main 4:",error);
    }
}


//Using Promises
let prom = getData();
prom.then(data => {
    console.log("Data from main:", data);
}).catch(err => {
    console.log("ERROR from main:",err);
});

let prom2 = getDataFailed();
prom2.then(data => {
    console.log("Data from main 2:", data);
}).catch(err => {
    console.log("ERROR from main 2:",err);
})

main3()
main4()