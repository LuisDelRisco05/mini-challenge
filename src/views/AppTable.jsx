import { useEffect } from "react";
import { useRequestApi } from "../hooks/useRequestApi";


export const AppTable = () => {

    const { people, getPeopleApi } = useRequestApi()


    useEffect(() => {
      const getPeople= async () => (
        getPeopleApi()
      );
      getPeople();
    }, [])
    
    console.log(people);

  return (
    <div className="vh-100">
      <table className="table w-75 mx-auto mt-5 rounded bg-primary text-center">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">career</th>
            <th scope="col">Hobbie</th>
          </tr>
        </thead>
        <tbody>
            {
                people.map( pers => (
                    <tr key={pers?.id}>
                        <th scope="row">{pers?.id}</th>
                        <td>{pers?.name}</td>
                        <td>{pers?.age}</td>
                        <td>{pers?.career}</td>
                        <td>{pers?.hobbie}</td>
                    </tr>

                ))
            }
        </tbody>
      </table>
    </div>
  );
}
