import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { getFrequentQuestions } from '../../../api/api';
import ContainerAuthPage from '../../../components/Containers/ContainerAuthPage/ContainerAuthPage';
import CustomBreadcumbs from '../../../components/CustomBreadcumbs';
import { FREQUENT_QUESTIONS } from '../../../constants/routes';
import { FREQUENT_QUESTIONS_VIEW_NAME } from '../../../constants/views';
import BusinessUnitParamsContext from '../../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { FrequentQuestionsModel } from '../../../models/FrequentQuestionsModel';
import { setCurrentViewLink, setCurrentViewName } from '../../../redux/actions/appActions';
import { useStyles } from '../../../styles/global/accordionStyles';

const FrequentQuestions = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { contextUrlHome } = useContext(BusinessUnitParamsContext);
  const url: string = contextUrlHome!;
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await getFrequentQuestions(url);

        setQuestions(response?.questions);
      } catch (error) {
        console.error(error);
      }
    };
    init();
  }, []);

  useEffect(() => {
    dispatch(setCurrentViewName({ currentViewName: FREQUENT_QUESTIONS_VIEW_NAME }));
    dispatch(setCurrentViewLink({ currentViewLink: FREQUENT_QUESTIONS }));
  }, []);

  return (
    <ContainerAuthPage>
      <CustomBreadcumbs />
      <div className={classes.containerQuestions}>
        {questions &&
          questions.map((item: FrequentQuestionsModel, index) => (
            <Box key={index}>
              <Accordion className={classes.item}>
                <AccordionSummary
                  classes={{ root: classes.title, content: classes.content }}
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography className={classes.text} variant={'subtitle1'}>
                    {item.description}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography className={classes.textAnswer} variant={'body1'}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </Box>
          ))}
      </div>
    </ContainerAuthPage>
  );
};

export default FrequentQuestions;
