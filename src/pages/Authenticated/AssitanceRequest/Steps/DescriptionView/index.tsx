import React, { useState } from 'react';

import AdtionalInformation from './AdtionalInformation';
import Buttons from './Buttons/index';
import ConceptTimeData from './ConceptTimeData/index';

interface DescriptionViewProps {
  handleNext: any;
  handleBack: any;
  control: any;
  setValue: any;
  handleSubmit: any;
  watch: any;
}

const DescriptionView: React.FC<DescriptionViewProps> = ({
  handleNext,
  handleBack,
  control,
  setValue,
  handleSubmit,
  watch,
}) => {
  const [errorDirection, setErrorDirection] = useState<any>(false);
  const [errorDirectionFinal, setErrorDirectionFinal] = useState<any>(false);

  return (
    <>
      <AdtionalInformation
        control={control}
        setValue={setValue}
        watch={watch}
        errorDirection={errorDirection}
        setErrorDirection={setErrorDirection}
        errorDirectionFinal={errorDirectionFinal}
        setErrorDirectionFinal={setErrorDirectionFinal}
      />
      <ConceptTimeData control={control} setValue={setValue} />
      <Buttons
        handleBack={handleBack}
        handleSubmit={handleSubmit}
        handleNext={handleNext}
        setErrorDirection={setErrorDirection}
        setErrorDirectionFinal={setErrorDirectionFinal}
        watch={watch}
      />
    </>
  );
};

export default DescriptionView;
