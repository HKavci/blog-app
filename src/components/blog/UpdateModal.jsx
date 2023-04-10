import {
  Box,
  Button,
  MenuItem,
  Modal,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import useBlogCall from "../../hooks/useBlogCall";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const UpdateModal = ({ open, handleClose, id }) => {
  const { getOneBlog, updateBlog } = useBlogCall();
  const { oneblog } = useSelector((state) => state.blog);
  const [info, setInfo] = useState({
    title: "",
    content: "",
    image: "",
    category: null,
    status: "",
  });

  // Bu şekilde, oneblog state'i değiştiğinde info state'inin de güncellenmesi sağlanacak ve updateBlog fonksiyonuna doğru veriler gönderilecek. Aksi takdirde onchange olmayan kısımları falsy değer alıyordu.
  useEffect(() => {
    setInfo({
      title: oneblog?.title || "",
      content: oneblog?.content || "",
      image: oneblog?.image || "",
      category: oneblog?.category || null,
      status: oneblog?.status || "",
    });
  }, [oneblog]);

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    getOneBlog(id);
  }, []);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.only("xs"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.only("md"));

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{ overflow: "auto" }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "white",
            padding: 4,
            width: isSmallScreen ? "80vw" : isMediumScreen ? "55vw" : "auto",
          }}
        >
          <Typography variant="h6" color={"blue"} fontFamily={"cursive"}>
            NEW BLOG
          </Typography>
          <TextField
            type="text"
            label="Title"
            name="title"
            onChange={handleChange}
            // input değerini tamamen sildiğim anda tüm input içeriği yeniden yükleniyordu. Bunu çözmek için value yerine defaultValue yaptım.
            defaultValue={info.title || oneblog?.title || ""}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          />

          <TextField
            type="url"
            label="Image URL"
            name="image"
            onChange={handleChange}
            defaultValue={info.image || oneblog?.image || ""}
            variant="outlined"
            maxLength="400"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          />

          <TextField
            select
            label="Category"
            name="category"
            defaultValue={info.category || oneblog?.category || ""}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          >
            <MenuItem value="" style={{ color: "gray" }}>
              Please Choose
            </MenuItem>
            <MenuItem value="6">Safari</MenuItem>
            <MenuItem value="5">Cultural Tour</MenuItem>
            <MenuItem value="4">Nature</MenuItem>
            <MenuItem value="3">Cities</MenuItem>
            <MenuItem value="2">Experience</MenuItem>
            <MenuItem value="1">Other</MenuItem>
          </TextField>

          <TextField
            select
            label="Status"
            name="status"
            defaultValue={info.status || oneblog?.status || ""}
            onChange={handleChange}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            required
          >
            <MenuItem value="" style={{ color: "gray" }}>
              Please Choose
            </MenuItem>
            <MenuItem value="d">Draft</MenuItem>
            <MenuItem value="p">Published</MenuItem>
          </TextField>

          <TextField
            type="text"
            label="Content"
            name="content"
            onChange={handleChange}
            defaultValue={info.content || oneblog?.content || ""}
            variant="outlined"
            sx={{ width: "100%", marginTop: "1rem" }}
            multiline
            required
          />

          <Button
            type="submit"
            variant="contained"
            sx={{ width: "100%", marginTop: "1rem" }}
            onClick={() => {
              console.log(id, info);
              updateBlog(id, info);
              handleClose();
            }}
          >
            Update Blog
          </Button>
        </Box>
      </Modal>
    </>
  );
};

export default UpdateModal;
