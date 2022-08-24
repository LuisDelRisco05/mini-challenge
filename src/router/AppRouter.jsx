import { Route, Routes } from 'react-router-dom';
import { AppForm } from '../views/AppForm';
import { AppTable } from '../views/AppTable';

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/" element={<AppTable />} />
        <Route path="form" element={<AppForm/>} />
    </Routes>
  )
}
