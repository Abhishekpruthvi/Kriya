import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import { makeStyles } from "@material-ui/core/styles";

export const MultiInline = ({
  val,
  index,
  cb,
  value,
  Zoom,
  Paper,
  Box,
  name
}) => {
  const [removed, setRemoved] = useState(null);
  const useStyles = makeStyles(theme => ({
    closeIcon: {
      cursor: "pointer",
      background: "#ddd",
      borderRadius: "20px",
      float: "right",
      padding: "5px"
    }
  }));
  const classes = useStyles();

  return (
    <div key={index}>
      <Zoom
        in={removed !== val}
        onExited={() => cb(name, [...value.filter(values => values !== val)])}
      >
        <Box clone pt={2} pb={2} pl={2} mb={2}>
          <Paper elevation={2}>
            <Box display="inline" displayPrint="block">
              {val.name.slice(0, 20) + "..."}
            </Box>
            <Box display="inline" displayPrint="block">
              <CloseIcon
                onClick={() => setRemoved(val)}
                className={classes.closeIcon}
              />
            </Box>
          </Paper>
        </Box>
      </Zoom>
    </div>
  );
};
export default MultiInline;
