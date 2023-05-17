import React, { useState } from "react";
import {
  Tooltip,
  Zoom,
  Typography,
  IconButton,
  Box,
  Paper
} from "@material-ui/core";
import InfoSharpIcon from "@material-ui/icons/InfoSharp";
import MultiInline from "./MultiInline";

const FileComponent = ({ field, ...props }) => {
  const [show, showTooltip] = useState(false);
  const { errorMessage, setFieldValue, supported_formats, accept } = props;
  const { name, value } = field;
  // console.log('fields ', field);
  // console.log('props ', props);

  return (
    <>
      <i className="fa fa-cloud-upload">
        <label htmlFor="icon-button-file">Attach Screen</label>
        <input
          multiple
          name={name}
          color="primary"
          accept={accept}
          type="file"
          error={errorMessage}
          onChange={e =>
            setFieldValue(
              name,
              [...e.target.files].filter(file =>
                supported_formats.includes(file.type)
              )
            )
          }
          id="icon-button-file"
          style={{ display: "none" }}
        />
        <Tooltip
          open={show}
          TransitionComponent={Zoom}
          title="Please add only Image Files"
          arrow
        >
          <IconButton onClick={() => showTooltip(!show)}>
            <InfoSharpIcon />
          </IconButton>
        </Tooltip>
      </i>
      <br />
      {errorMessage ? (
        <Typography variant="caption" color="error">
          {errorMessage}
        </Typography>
      ) : (
        value.map((val, index) => (
          <MultiInline
            val={val}
            index={index}
            name={name}
            cb={setFieldValue}
            value={value}
            Zoom={Zoom}
            Box={Box}
            Paper={Paper}
          />
        ))
      )}
    </>
  );
};
export default FileComponent;
