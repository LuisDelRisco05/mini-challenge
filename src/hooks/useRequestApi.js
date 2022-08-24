import { useState } from "react";


export const useRequestApi = () => {

    const baseURL = 'http://localhost:3000/listPeople';

    const [ people, setPeople ] = useState([])

    const getPeopleApi = async () => {

        try {

            const url = `${baseURL}`;
            const resp = await fetch(url)

            const result = await resp.json();


            setPeople(result);


        } catch (error) {
          console.log(error);
        }

    }

    const postPeopleApi = async (values) => {

        try {
            const url = `${baseURL}`;

            const resp = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json',

                }
            })

            const result = await resp.json();

            console.log(result);

            
        } catch (error) {
            console.log(error);
        }

    }


    return {
        people,
        getPeopleApi,
        postPeopleApi
    }
  
}
