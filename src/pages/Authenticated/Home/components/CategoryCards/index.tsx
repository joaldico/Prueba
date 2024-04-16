import { Card, CardContent, Typography, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';

import { CategoriesModel } from '../../../../../models/CategoriesModel';
import IconSelector from '../IconSelector';
import CardServices from './CardServices/CardServices';
import { useStyles } from './styles';

interface CategoryCardsProps {
  categories: Array<CategoriesModel>;
  term: string;
}

const CategoryCards: React.FC<CategoryCardsProps> = ({ categories, term }) => {
  const classes = useStyles();
  const [selectedCategory, setSelectedCategory] = useState<CategoriesModel | null>(null);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const [groupSize, setGroupSize] = useState(5);
  const sortedCategories = categories.slice().sort((a, b) => a.name.localeCompare(b.name));

  const createGroupedArrays = (array: any, groupSize: any) => {
    const groupedArrays = [];
    for (let i = 0; i < array.length; i += groupSize) {
      groupedArrays.push(array.slice(i, i + groupSize));
    }
    return groupedArrays;
  };

  const [filteredCategories, setFilteredCategories] = useState<Array<CategoriesModel>>(
    createGroupedArrays(sortedCategories, groupSize)
  );

  useEffect(() => {
    setGroupSize(isDesktop ? 5 : isTablet ? 4 : 3);
  }, [isDesktop, isTablet]);

  useEffect(() => {
    if (term !== '') {
      const searchTerms = term.toLowerCase().split(' ');

      const filtered = categories
        .filter((category) =>
          category.services.some((service: any) =>
            searchTerms.every((searchTerm) => service.label.toLowerCase().includes(searchTerm))
          )
        )
        .sort((a, b) => a.name.localeCompare(b.name));

      setFilteredCategories(createGroupedArrays(filtered, groupSize));
    } else {
      setFilteredCategories(createGroupedArrays(sortedCategories, groupSize));
    }
  }, [term, categories, groupSize]);

  const handleServices = (category: CategoriesModel) => {
    const updatedCategories = filteredCategories.map((group: any, index: any) => {
      return group.map((cat: any) => {
        if (cat.id === category.id) {
          return {
            ...cat,
            showServices: !cat.showServices,
            position: index,
          };
        } else {
          return {
            ...cat,
            showServices: false,
          };
        }
      });
    });
    setFilteredCategories(updatedCategories);
  };

  useEffect(() => {
    let foundCategory: any = null;
    filteredCategories.forEach((group: any) => {
      group.forEach((category: any) => {
        if (category.showServices) {
          foundCategory = category;
          return;
        }
      });
      if (foundCategory) {
        return;
      }
    });
    setSelectedCategory(foundCategory);
  }, [filteredCategories]);

  return (
    <div className={classes.cardContainer}>
      {filteredCategories.map((group: any, index: any) => (
        <React.Fragment key={group[0].id}>
          {Array.isArray(group) &&
            group.length > 0 &&
            group.map((category: any) => (
              <React.Fragment key={category.id}>
                <Card
                  onClick={() => handleServices(category)}
                  className={`${classes.card} ${
                    classes[`cardQuantity${categories.length}` as keyof typeof classes] ?? ''
                  }`}
                >
                  <CardContent className={classes.cardContent}>
                    <div className={classes.iconContainer}>
                      <IconSelector value={category.icon_code} />
                    </div>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.categoryName}
                    >
                      {category.name}
                    </Typography>
                  </CardContent>
                </Card>
              </React.Fragment>
            ))}
          {selectedCategory?.position === index && selectedCategory?.showServices && (
            <CardServices category={selectedCategory} />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default CategoryCards;
