import AccountCircleOutlined from "@mui/icons-material/AccountCircleOutlined";
import { Autocomplete, Chip, InputAdornment, TextField } from "@mui/material";
import { fontSize } from "@mui/system";
import React from "react";

const TextInput = ({
  onChange,
  label,
  hasChip,
  placeholder,
  chipLabel,
  ...props
}) => {
  return (
    <Autocomplete
      id=""
      sx={props}
      options={[]}
      onChange={onChange}
      freeSolo
      size="small"
      getOptionLabel={(option) =>
        typeof option === "string" || option instanceof String ? option : ""
      }
      renderInput={(params) => (
        <>
          <TextField
            {...params}
            placeholder={placeholder}
            sx={{
              "& .MuiAutocomplete-input ": {
                fontSize: 12,
                // padding: "0px !important"
              },
            }}
            InputLabelProps={{
              sx: { fontSize: 12 },
            }}
            label={label}
            onChange={onChange}
            // InputProps={{
            //   sx: { fontSize: 12 },
            //   startAdornment: hasChip && (
            //     <Chip size="small" style={{fontSize:12}} label={chipLabel} />
            //   ),
            // }}
            variant="outlined"
          />
        </>
      )}
    />
  );
};

export default TextInput;
