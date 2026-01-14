
import type { FC } from "react"
import { Typography} from "@mui/material"
import PageContainer from "../../styled/paage-container"

import type { NoteData } from "../../types"
import {useDispatch} from "react-redux"
import { addNote } from "../../redux/slices/notesSlice"
import { useNavigate } from "react-router-dom"
import Form from './../../components/form/index';

const Create:FC= () =>{
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit =(data: NoteData) => {
 dispatch(addNote(data))
 navigate("/")
  }
  return (
    <PageContainer>
      <Typography variant="h4">Not Oluştur</Typography>

      <Form handleSubmit={handleSubmit}/>
    </PageContainer>
  )
}

export default Create
