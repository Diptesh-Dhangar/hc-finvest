import {
  Button,
  Card,
  CardContent,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ScrollToTopButton from "./Utilities/ScrollToTopButton";

const AddBlogs = () => {
  const [date, setDate] = useState("");
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogs, setBlogs] = useState([]);
  const [open, setOpen] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setFileName(file.name);
    }
  };

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!description || !date || !image || !title) {
      alert("Please fill all fields and upload an image!");
      return;
    }

    const blogData = new FormData();
    blogData.append("title", title);
    blogData.append("description", description);
    blogData.append("date", date);
    blogData.append("image", image);

    try {
      await axios.post(
        "https://hc-finvest-backend.onrender.com/api/blogs",
        blogData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      // console.log(blogData);
      alert("✅ Blog added successfully!");
      setDescription("");
      setTitle("");
      setDate("");
      setImage(null);
      setFileName("");
      handleClose();
      fetchBlogs();
    } catch (error) {
      console.error("Error adding blog:", error);
      alert("Failed to add blog!");
    }
  };

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        "https://hc-finvest-backend.onrender.com/api/blogs"
      );
      setBlogs(res.data);
      console.log(res.data);
    } catch (error) {
      console.error("Error fetching blogs:", error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <Container sx={{ backgroundColor: "#fff" }} maxWidth={false} disableGutters>
      <ScrollToTopButton />
      <Grid
        sx={{ display: "flex", justifyContent: "flex-end", margin: "20px" }}
      >
        <Button variant="contained" onClick={handleClickOpen}>
          Add Blog
        </Button>
      </Grid>

      {/* Dialog for adding a new blog */}
      <Dialog open={open} onClose={handleClose} fullWidth>
        <DialogTitle
          sx={{
            fontSize: "2rem",
            fontWeight: "600",
            color: "#0f5e9b",
            textAlign: "center",
          }}
        >
          Add New Blog
        </DialogTitle>
        <DialogContent>
          <Grid>
            <TextField
              fullWidth
              label="Selected File"
              value={fileName}
              placeholder="No file chosen"
              sx={{ margin: "10px" }}
              InputProps={{
                readOnly: true,
                endAdornment: (
                  <InputAdornment position="end">
                    <Button
                      variant="contained"
                      component="label"
                      sx={{
                        height: "40px",
                        textTransform: "none",
                        backgroundColor: "#11155c",
                      }}
                    >
                      Upload
                      <input
                        type="file"
                        hidden
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                    </Button>
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Choose Date"
              fullWidth
              type="date"
              value={date}
              sx={{ margin: "10px" }}
              onChange={(e) => setDate(e.target.value)}
              InputLabelProps={{ shrink: true }}
            />

            <TextField
              label="Title"
              fullWidth
              sx={{ margin: "10px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <TextField
              label="Description"
              fullWidth
              multiline
              sx={{ margin: "10px" }}
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#11155c" }}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* Display blogs */}
      <Grid
        container
        justifyContent="center"
        sx={{ padding: "30px" }}
        spacing={2}
      >
        {blogs.map((blog) => {
          let imageSrc = "";

          if (blog.image && blog.image.data) {
            const base64String = btoa(
              new Uint8Array(blog.image.data.data).reduce(
                (data, byte) => data + String.fromCharCode(byte),
                ""
              )
            );
            imageSrc = `data:${blog.image.contentType};base64,${base64String}`;
          }

          return (
            <Grid item key={blog._id} xs={12} sm={6} md={3.5}>
              <Card sx={{ margin: "15px", width: "400px", height: "450px" }}>
                {imageSrc && (
                  <img
                    src={imageSrc}
                    // alt={blog.title}
                    style={{
                      height: 300,
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="body1"
                    align="left"
                    sx={{ color: "text.secondary", marginBottom: "10px" }}
                  >
                    {new Date(blog.date).toLocaleDateString()}
                  </Typography>
                  <Typography
                    variant="h6"
                    align="left"
                    sx={{ color: "#11155c", marginBottom: "8px" }}
                  >
                    {blog.title}
                  </Typography>
                  {/* <Typography
                    variant="body2"
                    align="left"
                    sx={{ color: "text.secondary" }}
                  >
                    {blog.description}
                  </Typography> */}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default AddBlogs;
