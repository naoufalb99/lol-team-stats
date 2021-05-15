import { createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles } from '@material-ui/core'
import { useState } from 'react'
import grey from '@material-ui/core/colors/grey'

import InboxIcon from '@material-ui/icons/Inbox'
import DraftsIcon from '@material-ui/icons/Drafts'

import { ReactComponent as Logo } from '../images/logo.svg'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            width: ({ width }) => width,
            backgroundColor: grey[50],
            borderRight: `1px solid ${grey[300]}`,
        },
        header: {
            height: ({ headerHeight }) => headerHeight,
            borderBottom: `1px solid ${grey[300]}`,
            paddingTop: theme.spacing(1),
            paddingBottom: theme.spacing(1),
            textAlign: 'center',
        },
        logo: {
            height: '100%',
        },
    })
)

export default function Sidebar({
    width,
    headerHeight,
    defaultCollapsed = false,
}) {
    const [collapsed, setCollapsed] = useState(defaultCollapsed)
    const classes = useStyles({ collapsed, width, headerHeight })

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Logo className={classes.logo} />
            </div>
            <List component="nav">
                <ListItem button selected>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
        </div>
    )
}
