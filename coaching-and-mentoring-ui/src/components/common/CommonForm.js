import "./form.scss";
import { Formik, Field, getIn } from "formik";
import { Grid, Paper } from '@mui/material';
import { TextField } from "formik-mui";
import FileComponent from './FileComponent';
import TextInputComponent from './TextInputComponent';
import { CustomizedPrimaryButton, FileUploadButton } from './CustomizedPrimaryButton';

function CommonForm({
    onSubmit = () => { },
    validationSchema,
    initialValues = {},
    validateOnBlur = true,
    validateOnChange = true,
    fields = [],
    submitLabel = "Submit",
    showSubmitButton = true,
    submittingLabel = "Submit",
    enableReinitialize = false,
    ...props
}) {

    const defaultMetaProps = {
        margin: "dense",
        variant: "outlined",
        fullWidth: true
    };

    const defaultGridProps = {
        xs: 12
    };

    const renderFields = (formProps, options = { nested: false }) => field => {
        const {
            values,
            errors,
            touched,
            setFieldValue,
            setFieldTouched,
            handleBlur,
            handleChange
            /* and other goodies */
        } = formProps;

        const gridProps = !!field && {
            ...defaultGridProps,
            ...field.grid
        };
        const metaProps = !!field && {
            ...defaultMetaProps,
            ...field.meta
        };

        return !!field ? (
            <Grid key={field.name} item {...gridProps}>
                {field.type === "email" && (
                    <Field
                        type="email"
                        name={field.name}
                        label={field.label}
                        component={TextField}
                        placeholder={field.placeholder || ""}
                        InputLabelProps={{ shrink: true }}
                        {...metaProps}
                    />
                    // eslint and prettier
                )}
                {(field.type === "password" || field.type === "number") && (
                    <Field
                        type="password"
                        name={field.name}
                        component={TextField}
                        label={field.label}
                        placeholder={field.placeholder || ""}
                        disabled={field.disabled}
                        autoComplete={field.name}
                        inputProps={{ style: field.grid.style }}
                        {...metaProps}
                    />
                )}
                {(field.type === "text" || field.type === "number") && (
                    <Field
                        type={field.type || "text"}
                        name={field.name}
                        component={TextField}
                        label={field.label}
                        placeholder={field.placeholder || ""}
                        disabled={field.disabled}
                        autoComplete={field.name}
                        inputProps={{ style: field.grid.style }}
                        {...metaProps}
                    />
                )}
                {field.type === "textarea" && (
                    <Field
                        name={field.name}
                        component={TextInputComponent}
                        disabled={field.disabled}
                        label={field.label}
                        errorMessage={getIn(errors, field.name)}
                        // touched={getIn(errors, field.name)}
                        {...metaProps}
                        inputProps={{ style: field.grid.style }}
                        
                    />
                )}
                {field.type === "fileUpload" && (
                    console.log("field here ===========" , field, field.name),
                    <Field
                        name={field.name}
                        component={FileUploadButton}
                        label="Select a file"
                        setFieldValue={setFieldValue}
                        value={field.name}
                        width="12"
                        errorMessage={getIn(errors, field.name)}
                        touched={getIn(errors, field.name)}
                        style={{ display: "flex" }}
                        onBlur={handleBlur}
                        inputProps={{ style: field.grid.style }}
                    />
                )}
            </Grid>
        ) : null;

    }

    return (
        <div className="common-form">
            <div className="data-form">
                <Formik
                    initialValues={initialValues}
                    validateOnBlur={validateOnBlur}
                    validateOnChange={validateOnChange}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                    ref={props.formikRef}
                    enableReinitialize={!!enableReinitialize}
                >
                    {formProps => {
                        const {
                            errors,
                            handleSubmit,
                            isSubmitting,
                            submitForm
                        } = formProps;
                        return (
                            <form onSubmit={handleSubmit}>
                                <Grid container spacing={2}>
                                    {fields && fields.map(renderFields(formProps))}

                                    {!!props.formFooter && <>{props.formFooter}</>}

                                    {showSubmitButton && (
                                        <CustomizedPrimaryButton
                                            fullWidth={true}
                                            variant="contained"
                                            color="primary"
                                            size="medium"
                                            onClick={() => submitForm()}
                                            className={`${isSubmitting ? "inactive-button" : ""} `}
                                            disabled={isSubmitting}
                                            label={!isSubmitting ? submitLabel : submittingLabel}
                                            position={props.buttonPosition}
                                            width={props.buttonSize}
                                            inlineButton={props.inlineButton}
                                        ></CustomizedPrimaryButton>
                                    )}
                                </Grid>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default CommonForm;