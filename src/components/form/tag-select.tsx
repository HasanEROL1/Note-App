import { Autocomplete, TextField } from "@mui/material";
import type { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTag } from "../../redux/slices/tagsSlice";
import type { RootState } from "../../redux/store";

interface Props {
  selectedTags: string[];
  setSelectedTags: React.Dispatch<React.SetStateAction<string[]>>;
}

const TagSelect: FC<Props> = ({ selectedTags, setSelectedTags }) => {
  const { tags } = useSelector((state: RootState) => state.tags);
  const dispatch = useDispatch();

  return (
    <Autocomplete
      multiple
      freeSolo
      options={tags}
      value={selectedTags}
      isOptionEqualToValue={(o, v) => o === v}
      onChange={(_, values) => {
        if (values.length===5){
          return alert("Maksimum sayıda etiket eklediniz")
        }

      
        setSelectedTags(values as string[]);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Etiketler"
          placeholder="Etiket ekle"
          onBlur={(e) => {
            const value = e.target.value.trim();
            if (!value) return;

            if (!selectedTags.includes(value)) {
              const newTags = [...selectedTags, value];
              setSelectedTags(newTags);

              if (!tags.includes(value)) {
                dispatch(addTag(value));
              }
            }
          }}
        />
      )}
    />
  );
};

export default TagSelect;
