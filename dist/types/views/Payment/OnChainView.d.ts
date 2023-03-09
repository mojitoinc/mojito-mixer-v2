/// <reference types="react" />
import { FormikErrors } from 'formik';
import { OnChainForm } from '../../providers';
interface OnChainProps {
    values: OnChainForm;
    setFieldValue: (field: string, value: any, shouldValidate?: boolean | undefined) => Promise<void> | Promise<FormikErrors<OnChainForm>>;
    errors: FormikErrors<OnChainForm>;
}
declare const OnChainView: ({ values, setFieldValue, errors }: OnChainProps) => JSX.Element;
export default OnChainView;
