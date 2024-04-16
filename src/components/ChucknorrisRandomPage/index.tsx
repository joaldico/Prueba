import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Link,
  Typography
} from "@mui/material";

import moment from "moment";
import { useEffect, useState } from "react";
import { getChucknorrisRandom } from "../../api/api";
import { DATE_FORMAT_WITH_HOUR } from "../../constants/constants";
import { useStyles } from "./styles";

export type ChucknorrisRandomModel = {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string
};

const ChucknorrisRandomPage = () => {
  const classes = useStyles();
  const [chucknorrisData, setChucknorrisData] = useState<ChucknorrisRandomModel[]>([]);
  const [numberFetch, setNumberFetch] = useState<number>(20);

  useEffect(() => {

    if (chucknorrisData.length < numberFetch) {

      const init = async () => {
        try {
          const response = await getChucknorrisRandom();
          const payload: ChucknorrisRandomModel = response

          setChucknorrisData([...chucknorrisData, payload]);
        } catch (error) {
          console.error(error);
        }
      };

      init();
    }


  }, [chucknorrisData]);

  return (
    <div className={classes.container}>
      {chucknorrisData.map((currentItem: ChucknorrisRandomModel) => {
        return (
          <Box>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                title="Chucknorris Random Page"
                subheader={moment(currentItem?.created_at).format(
                  DATE_FORMAT_WITH_HOUR
                )}
              />
              <CardMedia
                component="img"
                height="194"
                image={currentItem?.icon_url}
                alt="Chucknorris image"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {currentItem?.value}
                </Typography>
                <Typography variant="body2" color="text.secondary" className={classes.categoryTitle}>
                  Categories
                </Typography>
                <div className={classes.containerCategories}>
                  {currentItem?.categories.map((currentCategory: string) => {
                    return (
                      <Chip
                        label={currentCategory}
                        color="primary"
                        variant="outlined"
                        sx={{ background: 'rgba(63, 81, 181, 0.08)', border: 'none' }}
                      />
                    )
                  })}
                </div>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="share">
                  <Link underline="always" color="inherit" href={currentItem?.url}>
                    {'Go to chucknorris portal'}
                  </Link>
                </IconButton>
              </CardActions>
            </Card>
          </Box>
        )
      })}
    </div>
  );
};

export default ChucknorrisRandomPage;
