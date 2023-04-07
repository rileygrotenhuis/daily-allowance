import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { createExampleSchema } from '../validators/exampleValidator';
import { createExample } from '../handlers/exampleHandler';

const CreateExampleForm = (props) => {
  const [formError, setFormError] = useState(null);

  return (
    <>
      <Formik
        initialValues={{ name: '', description: '' }}
        validationSchema={createExampleSchema}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          const res = await createExample(props.user.id, values);

          if (res.ok) {
            alert('Successfully created a post');
            setFormError(null);
            setSubmitting(false);
            resetForm();
            return;
          }

          setFormError(
            'An error occurred while submitting this form, please try again.'
          );
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <Grid container gap={3}>
              <Grid item xs={12}>
                <Field
                  name="name"
                  as={TextField}
                  label="Name"
                  error={touched.name && errors.name ? true : false}
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="description"
                  as={TextField}
                  label="Description"
                  error={
                    touched.description && errors.description ? true : false
                  }
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
      {formError && <Typography color="error">{formError}</Typography>}
    </>
  );
};

export default CreateExampleForm;
