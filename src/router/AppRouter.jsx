import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"
import { CheckingAuth } from "../ui/components/CheckingAuth";
import { useCheckAuth } from "../hooks/useCheckAuth";


export const AppRouter = () => {

    /* this will show if we're loging */
    const status = useCheckAuth();

    if ( status === 'checking' ) {
      return <CheckingAuth />
    }

    return (
    <>
        <Routes>
            {/* this is a way to protect routes, the auth rutes will only exist if it's not authenticated */}
        {
          (status === 'authenticated')
            ? <Route path="/*" element={<JournalRoutes/>}/>
            : <Route path="/auth/*" element={<AuthRoutes/>}/>
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        </Routes>
    </>
    )
}