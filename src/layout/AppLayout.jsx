import { NavBar } from "../components/NavBar";


export const AppLayout = ({children}) => {

    return (
        <>
            <NavBar />

            <div>
                {children}
            </div>
        </>
    )
}