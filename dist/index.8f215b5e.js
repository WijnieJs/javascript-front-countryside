console.log("Hallo daar!");
async function getListOfAllCountrys() {
    try {
        const response = await fetch("https://restcountries.com/v2/all");
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}
getListOfAllCountrys();

//# sourceMappingURL=index.8f215b5e.js.map
