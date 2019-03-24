import React, { Component } from 'react';
import { Field, Formik, ErrorMessage, FieldArray } from 'formik'
import * as yup from 'yup';

class Formikco extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    submit = (e) => {
        console.log(e)
    }


    form = (e) => {
        return <form onSubmit={e.handleSubmit}>
            <Field name="email" type="email"></Field>
            {/* <ErrorMessage name="email"></ErrorMessage> */}
            <Field name="password" type="password"></Field>
            <ErrorMessage name="password"></ErrorMessage>
            <Field name="choose" component="select">
                <option value="1">one</option>
                <option value="2">two</option>
            </Field>
            <Field name="checkf" type="checkbox"></Field>
            <Field name="name.firstName" type="text"></Field>
            <ErrorMessage name="name.firstName"></ErrorMessage>
            <Field name="name.lastName" type="text"></Field>
            <FieldArray
                name="frute"
                render={arrayHelper => (
                    <div>
                        {e.values.frute.map((i, index) => (
                            <div key={index}>
                                <Field name={"frute." + index} />
                            </div>

                        ))}
                    </div>
                )}
            />
            <input type="submit" name="submit" />
        </form>
    }
    schema = () => {
        const schema = yup.object().shape({
            email: yup.string().required(),
            password: yup.string().required(),
            name: yup.object().shape({
                firstName: yup.string().required("first name is required")
            })
        })
        return schema
    }

    render() {
        return (
            <div>
                <h1>formik from</h1>


                <Formik
                    initialValues={
                        {
                            email: "",
                            password: "",
                            choose: "",
                            checkf: false,
                            name: {
                                firstName: "",
                                lastName: ""

                            },
                            frute: [
                                "apple", "banana"
                            ]
                        }}
                    onSubmit={this.submit}
                    render={this.form}
                    validationSchema={this.schema()}
                ></Formik>
            </div>
        );
    }
}
export default Formikco;