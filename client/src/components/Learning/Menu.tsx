import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';


const Menu = ({data}:any) => {
    return (
        <Card variant="outlined">
            <List>
                {data.challengeKinds.map((x:any) => (
                <ListItem key={x.id} disablePadding>
                    <ListItemButton>
                    <ListItemIcon>
                        <InboxIcon /> 
                    </ListItemIcon>
                    <ListItemText primary={x.kind} />
                    </ListItemButton>
                </ListItem>
                ))}
            </List>
        </Card>
    );
}

export default Menu;