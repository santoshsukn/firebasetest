import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Form, Field, FormElement } from '@progress/kendo-react-form';
import { Button } from '@progress/kendo-react-buttons';

import {
    FormNumericTextBox, FormInput,
    FormMaskedTextBox, FormColorPicker,
    FormSwitch, FormSlider, FormTextArea
} from './form-components.jsx';

import {
    nameValidator, colorValidator,
    phoneValidator, addressValidator
} from './validators.jsx'

import '@progress/kendo-theme-default/dist/all.css';
const testRegister = () => {
    const handleSubmit = (dataItem) => alert(JSON.stringify(dataItem, null, 2));
    return (
        <Form
            onSubmit={handleSubmit}
            initialValues={{
                amount: 0
            }}
            render={(formRenderProps) => (
                <FormElement style={{ width: 400 }}>
                    <Field
                        id={'fullName'}
                        name={'fullName'}
                        label={'Full Name'}
                        component={FormInput}
                        validator={nameValidator}
                    />
                    <Field
                        id={'phoneNumber'}
                        name={'phoneNumber'}
                        label={'Phone Number'}
                        hint={'Hint: Your active phone number.'}
                        mask={'(999) 000-00-00-00'}
                        component={FormMaskedTextBox}
                        validator={phoneValidator}
                    />
                    <Field
                        id={'amount'}
                        name={'amount'}
                        label={'Amount'}
                        hint={'Hint: Amount of money.'}
                        format={'n2'}
                        component={FormNumericTextBox}
                    />
                    <Field
                        id={'address'}
                        name={'address'}
                        label={'Address'}
                        hint={'Hint: Enter your personal address.'}
                        component={FormTextArea}
                        validator={addressValidator}
                    />
                    <Field
                        id={'color'}
                        name={'color'}
                        label={'Choose Color'}
                        component={FormColorPicker}
                        validator={colorValidator}
                    />
                    <Field
                        id={'priceLimit'}
                        name={'priceLimit'}
                        label={'Price Limit'}
                        hint={'Hint: Choose a price limit'}
                        min={1}
                        max={10}
                        min={1}
                        component={FormSlider}
                        data={[1, 3, 5, 6, 10]}
                    />
                    <Field
                        id={'notifications'}
                        name={'notifications'}
                        label={'Allow notifications'}
                        component={FormSwitch}
                        optional={true}
                    />
                    <div className="k-form-buttons">
                        <Button
                            primary={true}
                            type={'submit'}
                            disabled={!formRenderProps.allowSubmit}
                        >
                            Submit
                        </Button>
                        <Button onClick={formRenderProps.onFormReset}>
                            Clear
                        </Button>
                    </div>
                </FormElement>
            )}
        />
    );
};
export default testRegister