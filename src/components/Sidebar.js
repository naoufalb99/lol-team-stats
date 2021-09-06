import {
    createStyles,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles,
} from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'
import React, { useState } from 'react'

import sidebarNavigation from '../constants/sidebar-navigation'
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
    // eslint-disable-next-line no-unused-vars
    const [collapsed, setCollapsed] = useState(defaultCollapsed)
    const classes = useStyles({ collapsed, width, headerHeight })

    return (
        <div className={classes.root}>
            <div className={classes.header}>
                <Logo className={classes.logo} />
            </div>
            <List component="nav">
                {sidebarNavigation.map((item) => (
                    <ListItem button selected>
                        <ListItemIcon>
                            {React.createElement(item.icon)}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                    </ListItem>
                ))}
            </List>
        </div>
    )
}
