import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { PessoaUsuaria } from './pages/PessoaUsuaria'
import { Profissional } from './pages/Profissional'
import { DefaultLayout } from './layouts/DefaultLayout'

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/pessoa-usuaria" element={<PessoaUsuaria />} />
        <Route path="/profissional" element={<Profissional />} />
      </Route>
    </Routes>
  )
}
