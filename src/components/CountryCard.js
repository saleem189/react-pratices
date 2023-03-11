const CountryCard = ({flag, name, capital, population, currency, languages}) => {
    const handleImageError = (event) => {
        // event.target.src = '../flag.png'; // Replace the failed image source with the default image source
        event.target.alt = 'Image cannot load. it may be of network or path problem'; // Replace the failed image source with the default image source
      };

    return (
        <div className="card shadow ">
        <div className="card-body ms-5">
            <div className="text-center">
             <img  className="border-2" id="img" onError={handleImageError} src={flag} alt="..." width={200} height={200}></img> 
            </div>
            <p className="fs-3 fw-semibold">{name}</p>
          
            <table className="table">
                <tbody>
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