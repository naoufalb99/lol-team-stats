import {
    Button,
    Card,
    CardContent,
    CircularProgress,
    createStyles,
    makeStyles,
    styled,
    TextField,
    Typography,
} from '@material-ui/core'
import gray from '@material-ui/core/colors/purple';
import { Field, Form } from 'react-final-form'
import { useDispatch, useSelector } from 'react-redux'
import * as yup from 'yup'
import createValidator from '../helpers/createValidator'
import { loginAttemptAction } from '../stacks/auth/auth.actions'
import { selectLoaderById } from '../stacks/loaders/loaders.selectors'

const useStyles = makeStyles((theme) =>
    createStyles({
        header: {
            marginBottom: theme.spacing(4),
        },
        submitButton: {
            marginTop: theme.spacing(3),
        },
    })
)

const LoginContainer = styled('div')({
    margin: '120px auto 0',
    maxWidth: 540,
    padding: 24,
})

const formFields = [
    {
        name: 'email',
        label: 'Email Address',
        autoFocus: true,
    },
    {
        name: 'password',
        label: 'Password',
        type: 'password',
    },
]

const validationSchema = yup.object({
    email: yup.string().email().required().label('Email Address'),
    password: yup.string().required().label('Password'),
})

const validator = createValidator(validationSchema)

export default function Login() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const isLoading = useSelector(selectLoaderById('login'))

    const handleSubmit = ({ email, password }) => {
        dispatch(loginAttemptAction(email, password))
    }
    return (
        <LoginContainer>
            <Card>
                <CardContent>
                    <div className={classes.header}>
                        <Typography variant="h4">Log in</Typography>
                        <Typography variant="body2" color="textSecondary">
                            Log in on the internal platform
                        </Typography>
                    </div>
                    <Form
                        onSubmit={handleSubmit}
                        subscription={{ submitting: true, pristine: true }}
                        validate={validator}
                    >
                        {({ handleSubmit }) => (
                            <form onSubmit={handleSubmit} noValidate>
                                {formFields.map(({ name, ...field }) => (
                                    <Field key={name} name={name}>
                                        {({
                                            input,
                                            meta: { error, touched },
                                        }) => (
                                            <TextField
                                                fullWidth
                                                variant="outlined"
                                                margin="normal"
                                                {...field}
                                                {...input}
                                                error={error && touched}
                                                helperText={touched && error}
                                            />
                                        )}
                                    </Field>
                                ))}
                                <div className={classes.submitButton}>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        fullWidth
                                    >
                                        {isLoading ? <CircularProgress size={24} color={gray[50]} /> : 'Login in'}
                                    </Button>
                                </div>
                            </form>
                        )}
                    </Form>
                </CardContent>
            </Card>
        </LoginContainer>
    )
}
