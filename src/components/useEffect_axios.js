import { useEffect, useState } from "react";
import axios from 'axios';
const AxiosUseEffect = () => {

    const [apiData, setApiData] = useState([]);

    useEffect(() => {
        console.log('use effect called in api');
        console.table(apiData);
    }, [apiData])

    const handlerButton = () =>{
        axios.get('https://jsonplaceholder.typicode.com/posts/',{
        params: {
          id: Math.floor(Math.random()*50)
        }
    }).then(function (response) {
        // handle success
        setApiData(response.data);
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        console.log('always run');
      });
    };

    return (

        <div className="container">
        {apiData.map((item) => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </div>
        ))}

        <button onClick={handlerButton} > generate again</button>
      </div>
    );
    
}

export default AxiosUseEffect;