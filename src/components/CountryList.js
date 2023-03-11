import Country from "./Country";
const CountryList = (props) => {
    const maxPopulation = Math.max(...props.data.map(country => country.population)); //?  [...] "spread" out the elements of an iterable
    const show_div =  props.data.map(({ country, population }) => (
            <div key={country}>
            <Country country={country} population={population} maxPopulation = {maxPopulation} />
            </div>
    ));

    // * Showing data using Filter function , showing whole object by comparing their population and showing object by their indexes
    // const filteredCountries = props.data.filter((country) => country.population >= 1295210000);
    // const filteredCountriesIndex = props.data.filter((country, index) => index >= 3);
    // console.table(filteredCountries);
    // console.table(filteredCountriesIndex)
    return (
        <div className="container">
             <h2 className="text-center">
                30 Days Of React
            </h2>
            <h3 className="text-center">
                World Population
            </h3>
            <p className="text-center">
                10 Most populated Countries
            </p>

            <div>{show_div}</div>
        </div>
    )
}
export default CountryList;