import { useMemo, useState, type FC } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import PageContainer from "../../styled/paage-container";
import { Alert, Button, Grid2 as Grid, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Filter from './../../components/filter/index';
import NoteCard from "../../components/card/note-card";

const Home: FC = () => {
  const notesState = useSelector((store: RootState) => store.notes);
  const notes = notesState.notes;
  const [title, setTitle] = useState<string>("")
  const [selectedTags, setSelectedTags] = useState<string[]>([])


  const filteredNotes = useMemo(
() =>
 notes.filter(
    (notes) =>
    notes.title.toLowerCase().includes(title.toLowerCase())
  && selectedTags.every((sTag) =>notes.tags.includes(sTag))
),
      [notes, title, selectedTags]
)
 
  return (
    <PageContainer>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="row" alignItems="center" gap={1}>
          <img src="/logo.png" width={50} />
          <Typography variant="h4">Notlar</Typography>
        </Stack>
        <Button component={Link} to="/create" variant="contained">Oluştur</Button>
      </Stack>
      <Filter setTitle={setTitle} setSelectedTags={setSelectedTags} />
      <Grid container spacing={2} mt={4}>
 {notes.length === 0 && <Typography>Henüz not yok</Typography>}
 {filteredNotes.length=== 0 ?(
  <Grid size={12}>
    <Alert severity="warning">Not Bulunamadı</Alert>
  </Grid> ):(
 filteredNotes.map((note) => (
          <Grid key={note.id} size={{ xs: 12, md: 6, lg: 4 }} >
            <NoteCard note={note} />
          </Grid>
 ))
        )}
      </Grid>

    </PageContainer>
  );
};

export default Home;
