import {
    AppBar,
    Button,
    createStyles,
    IconButton,
    makeStyles,
    Toolbar,
    Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Sidebar from '../Sidebar'

const SIDEBAR_WIDTH = 280
const TOOLBAR_HEIGHT = 64

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            paddingLeft: SIDEBAR_WIDTH
        },
        toolbar: {
            height: TOOLBAR_HEIGHT
        },
        menuButton: {},
        title: {},
    })
)

export default function DefaultLayout({ children }) {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
            <Sidebar width={SIDEBAR_WIDTH} headerHeight={TOOLBAR_HEIGHT} />
        </div>
    )
}
