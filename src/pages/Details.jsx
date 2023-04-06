import { Box, Card, CardActionArea, CardMedia } from "@mui/material";
import { useSelector } from "react-redux";

const Details = () => {
  const { blogs } = useSelector((state) => state.blog);
  const {
    author,
    comment_count,
    comments,
    content,
    id,
    image,
    likes,
    post_views,
    publish_date,
    title,
  } = blogs;

  console.log(blogs);
  //BURADA BİR HATA VAR. BLOGS LARIN GELMESİ HOME SAYFASINA GİRİLMESİNE BAĞLANDI. DETAİLSDE SAYFAYI YENİLEYİNCE BLOGSLAR KAYBOLUYOR. O YÜZDEN USEEFFECT İÇİNDE GETBLOGS FONKSİYONU ÇAĞIRILABİLİR YA DA BAŞKA BİR YÖNTEM KULLANABİLİRİM.

  return (
  <Box>
    <Card>
      <CardActionArea>
      <CardMedia component="img"  image={image} alt="image" />
      </CardActionArea>
    </Card>
  </Box>
  )
};

export default Details;
