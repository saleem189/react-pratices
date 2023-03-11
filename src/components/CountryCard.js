const CountryCard = ({flag, name, capital, population, currency, languages}) => {
    const handleImageError = (event) => {
        // event.target.src = '../flag.png'; // Replace the failed image source with the default image source
        event.target.alt = 'Image cannot load. it may be of network or path problem'; // Replace the failed image source with the default image source
      };

    return (
        <div className="card shadow">
        <div className="card-body ms-5">
            <img  className="card-img-top rounded-circle border-2" id="img" onError={handleImageError} src={flag} alt="..." width={20} height={20}></img> 
            <table className="table">
                <tbody>
                    <tr>
                    <th scope="row">Name</th>
                    <td id="name">{name}</td>
                    </tr>
                    <tr>
                    <th scope="row">Capital</th>
                    <td id="capital">{capital}</td>
                    </tr>
                    <tr>
                    <th scope="row">Population</th>
                    <td id="population">{population}</td>
                    </tr>
                    <tr>
                    <th scope="row">Currency</th>
                    <td id="currency">{currency}</td>
                    </tr>
                    <tr>
                    <th scope="row">Languages</th>
                    <td id="language">{languages}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    );
}
export default CountryCard;