import { Button, Grid2 as Grid, Stack, TextField, styled } from "@mui/material";
import { type FC, useEffect, useState } from "react";

import type { Note, NoteData } from "../../types";
import { Link } from "react-router-dom";
import TagSelect from './tag-select';


interface Props {
    note?: Note;
    handleSubmit: (data: NoteData) => void;
}

const Label = styled("label")({
    fontSize: "1rem",
});

const Form: FC<Props> = ({ note, handleSubmit }) => {
    const [title, setTitle] = useState<string>(note?.title || "");
    const [markdown, setMarkdown] = useState<string>(note?.markdown || "");
    const [selectedTags, setSelectedTags] = useState<string[]>(note?.tags || []);

    useEffect(() => {
        if (note) {
            setTitle(note.title)
            setMarkdown(note.markdown)
            setSelectedTags(note.tags)
        }
    }, [note])


    const handleForm = () => {
       
        if (!title || !markdown || !selectedTags.length) {
            return alert("Lütfen tüm alanları doldurunuz.");
        }

        handleSubmit({ title, markdown, tags: selectedTags });
    };

    return (
        <Stack spacing={7} sx={{ mt: 5 }}>
            {/* Üst kısım */}
            <Grid container spacing={5}>
                <Grid size={6}>
                    <TextField
                        label="Başlık"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </Grid>

                <Grid size={6}>
                    <TagSelect
                        selectedTags={selectedTags}
                        setSelectedTags={setSelectedTags}
                    />
                </Grid>
            </Grid>

            {/* Markdown Alanı */}
            <Stack gap={2}>
                <Label>İçerik (markdown destekler)</Label>

                <TextField
                    fullWidth
                    minRows={15}
                    maxRows={50}
                    multiline
                    value={markdown}
                    onChange={(e) => setMarkdown(e.target.value)}
                />
            </Stack>

            {/* Butonlar */}
            <Stack direction="row" spacing={5} justifyContent="end">
                <Button
                    type="button"
                    component={Link}
                    to={note ? `/note/${note.id}` : ".."}
                    variant="contained"
                    color="secondary"
                >
                    Geri
                </Button>


                <Button
                type="button"
                    onClick={handleForm}
                    variant="contained"
                    sx={{ minWidth: "100px" }}
                >
                    Kaydet
                </Button>
            </Stack>
        </Stack>
    );
};

export default Form;