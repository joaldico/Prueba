import { Grid } from '@mui/material';
import { FC, useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import BusinessUnitParamsContext from '../../contexts/BusinessUnitParamsContext/businessUnitParamsContext';
import { getFieldsByForm, getForms } from './api';
import CardUIT from './CardUIT';
import CustomSelect from './Fields/CustomSelect';
import CustomTextArea from './Fields/CustomTextArea';
import CustomTextField from './Fields/CustomTextField';
import { useStyles } from './styles';

type CallbackFunction = (response: any) => void;

type RuleMapModel = {
  required: CallbackFunction;
  maxCharacters: CallbackFunction;
  min: CallbackFunction;
  max: CallbackFunction;
};
type ResponseModel = {
  code: string;
};

type DynamicFormProps = {
  clearOnSubmit?: any;
  formId?: any;
  options?: any;
  onSubmit?: any;
  callback?: any;
  setVersion?: any;
};

const DynamicForm: FC<DynamicFormProps> = ({
  onSubmit,
  formId,
  setVersion,
  options,
  callback,
  clearOnSubmit,
}) => {
  const { businessUnitUUID } = useContext(BusinessUnitParamsContext);
  const { control, setValue, trigger, watch, reset, handleSubmit } = useForm();

  const [apiResponse, setApiResponse] = useState<any>([]);
  const [formData, setFormData] = useState<any>([]);
  const classes = useStyles();

  const privateCalls = () => {
    getFieldsByForm(businessUnitUUID, formId).then((response) => {
      setApiResponse(response);
    });
    getForms(businessUnitUUID, formId).then((response) => {
      setFormData(response);
      setVersion(response.currentVersion);
    });
  };

  useEffect(() => {
    if (options.headers?.businessUnit) {
      privateCalls();
    }
  }, []);

  useEffect(() => {
    if (callback) {
      trigger().then((e) => {
        if (e) {
          onSubmit({
            error: false,
            data: watch(),
            message: null,
          });
          if (clearOnSubmit) clearFormData();
        } else {
          onSubmit({
            error: true,
            data: null,
            message: 'Form error - check your fields',
          });
        }
      });
    }
  }, [callback]);

  //? Método que limpia los campos al guardar el campo
  const clearFormData = () => {
    apiResponse.forEach((response: any) => {
      if (
        response.fieldTypeCode == 'textArea' ||
        response.fieldTypeCode == 'quantitySelector' ||
        response.fieldTypeCode == 'textField'
      ) {
        setValue(response.name, '');
      }
      if (
        response.fieldTypeCode == 'singleSelector' ||
        response.fieldTypeCode == 'multipleSelector'
      ) {
        setValue(response.name, []);
      }
    });
  };

  const getFormItems = (item: any, field: any) => {
    const codeMap = {
      label: 'fieldName',
      placeholder: 'indicativeText',
      options: 'selectionOptions',
    };
    const code = codeMap[field as keyof typeof codeMap];
    if (code) {
      const label = item.find((t: any) => t.code == code);
      if (field == 'options') {
        const array = JSON.parse(label.value);
        const arrayResult = array.map((option: any) => ({
          label: option.name,
          value: option.name,
          optionValue: option.optionType,
        }));
        return arrayResult;
      } else {
        return label.value;
      }
    }
  };

  const getFormValidations = (item: any) => {
    const rules: any = {};
    const ruleMap: RuleMapModel = {
      required: (response: any) => {
        const value = response.value == 'true';
        rules.required = { value: value, message: response.message };
      },
      maxCharacters: (response: any) => {
        const number = Number(response.value);
        rules.maxLength = { value: number, message: response.message };
      },
      min: (response: any) => {
        const number = Number(response.value);
        rules.min = { value: number, message: response.message };
      },
      max: (response: any) => {
        const number = Number(response.value);
        rules.max = { value: number, message: response.message };
      },
    };
    item.validations.forEach((response: ResponseModel) => {
      const ruleFunc = ruleMap[response.code as keyof RuleMapModel];
      if (ruleFunc) {
        ruleFunc(response);
      }
    });

    return rules;
  };

  const getValidations = (item: any, field: any) => {
    const codeMap = {
      required: 'required',
      maxCharacters: 'maxCharacters',
      minValue: 'min',
      maxValue: 'max',
    };
    const code = codeMap[field as keyof typeof codeMap];
    if (code) {
      const label = item.find((t: any) => t.code == code);
      if (field == 'required') {
        const value = label.value == 'true';
        return value;
      } else if (field == 'minValue' || field == 'maxValue') {
        const number = Number(label.value);
        return number;
      } else {
        return label.value;
      }
    }
  };

  const handleSubmitForm = (event: any) => {
    trigger().then((e) => {
      if (e) {
        onSubmit({
          error: false,
          data: event,
          message: null,
        });
        if (clearOnSubmit) clearFormData();
      } else {
        onSubmit({
          error: true,
          data: null,
          message: 'Form error - check your fields',
        });
      }
    });
  };

  return (
    <>
      <CardUIT>
        <Grid container spacing={4} className={classes.box}>
          {apiResponse.map((response: any) => {
            return (
              <>
                <Grid item xs={12} md={response.fieldTypeCode == 'textArea' ? 12 : 4} lg={4}>
                  {response.fieldTypeCode == 'textArea' && (
                    <>
                      <CustomTextArea
                        name={response.name}
                        label={getFormItems(response.items, 'label')}
                        placeholder={getFormItems(response.items, 'placeholder')}
                        required={getValidations(response.validations, 'required')}
                        control={control}
                        maxCharacters={getValidations(response.validations, 'maxCharacters')}
                        rules={getFormValidations(response)}
                        multiline={true}
                        rows={2}
                        trigger={trigger}
                      />
                    </>
                  )}
                  {response.fieldTypeCode == 'singleSelector' && (
                    <>
                      <CustomSelect
                        data={getFormItems(response.items, 'options')}
                        name={response.name}
                        label={getFormItems(response.items, 'label')}
                        placeholder={getFormItems(response.items, 'placeholder')}
                        required={getValidations(response.validations, 'required')}
                        multiple={false}
                        selectAll={false}
                        isSortData={true}
                        disableCloseOnSelect={false}
                        control={control}
                        fullWidth={true}
                        rules={getFormValidations(response)}
                        disableClearable={true}
                        trigger={trigger}
                      />
                    </>
                  )}
                  {response?.fieldTypeCode == 'multipleSelector' && (
                    <>
                      <CustomSelect
                        data={getFormItems(response.items, 'options')}
                        name={response.name}
                        label={getFormItems(response.items, 'label')}
                        placeholder={getFormItems(response.items, 'placeholder')}
                        required={getValidations(response.validations, 'required')}
                        multiple={true}
                        limitTags={1}
                        selectAll={true}
                        isSortData={true}
                        control={control}
                        fullWidth={true}
                        rules={getFormValidations(response)}
                        trigger={trigger}
                      />
                    </>
                  )}
                  {response.fieldTypeCode == 'quantitySelector' && (
                    <>
                      <CustomTextArea
                        name={response.name}
                        label={getFormItems(response.items, 'label')}
                        placeholder={getFormItems(response.items, 'placeholder')}
                        required={getValidations(response.validations, 'required')}
                        control={control}
                        rules={getFormValidations(response)}
                        type="number"
                        multiline={false}
                        rows={1}
                        minValue={getValidations(response.validations, 'minValue')}
                        maxValue={getValidations(response.validations, 'maxValue')}
                        trigger={trigger}
                      />
                    </>
                  )}
                  {response.fieldTypeCode === 'textField' && (
                    <>
                      <CustomTextField
                        name={response.name}
                        label={getFormItems(response.items, 'label')}
                        placeholder={getFormItems(response.items, 'placeholder')}
                        required={getValidations(response.validations, 'required')}
                        control={control}
                        rules={getFormValidations(response)}
                        maxCharacters={getValidations(response.validations, 'maxCharacters')}
                        trigger={trigger}
                      />
                    </>
                  )}
                </Grid>
              </>
            );
          })}
        </Grid>
      </CardUIT>
    </>
  );
};

DynamicForm.defaultProps = {
  clearOnSubmit: false,
};

export default DynamicForm;
