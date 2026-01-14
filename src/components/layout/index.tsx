import type { FC } from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet, useParams } from 'react-router-dom'
import type { RootState } from '../../redux/store'

const Layout: FC = () => {
  // store'a abone ol
  const { notes } = useSelector((store: RootState) => store.notes)

  // url'den id parametresini al
  const { id } = useParams()

  // id'ye göre notu store'dan al
  const note = notes.find((note) => note.id.toString() === id)

  // note bulunamazsa anasayfaya yönlendir
  if (!note) return <Navigate to="/" />

  // note bulunursa layout elementine prop olarak note'u gönder
  return <Outlet context={note} />
}

export default Layout
