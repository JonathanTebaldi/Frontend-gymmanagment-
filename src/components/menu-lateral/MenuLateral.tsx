import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import { useDrawerContext } from '../../contexts';
import { Outlet, useMatch, useNavigate, useResolvedPath } from 'react-router-dom';

interface IListItemLinkProps{
  to: string;
  icon: string; 
  label: string;
  onCLick:(() => void) | undefined;
}

const ListItemLink: React.FC<IListItemLinkProps> = ({ to, icon, label, onCLick }) => {

  const navigate = useNavigate();

  const resolvedPath = useResolvedPath(to);
  const match = useMatch({path: resolvedPath.pathname, end: false});

  const handleClick = () => { 
      onCLick?.();
      navigate(to);
  };

  return(
    <ListItemButton selected={!!match} onClick={handleClick}>
      <ListItemIcon>
       <Icon>{icon}</Icon>
      </ListItemIcon>
      <ListItemText primary= {label} />
    </ListItemButton>
  );
} ;

export const MenuLateral = () => {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  const { isDrawerOpen, drawerOptions, toggleDrawerOpen } = useDrawerContext();

  return (
    <>
      <Drawer open={isDrawerOpen} variant={smDown ? 'temporary' : 'permanent'} onClose={toggleDrawerOpen} 
      sx={{zIndex: 20  }}>
        <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
          <Divider />

          <Box flex={1}>
            <List component="nav">
              {drawerOptions.map(drawerOption => (
              <ListItemLink
              key={drawerOption.path}
              icon={drawerOption.icon}
              label={drawerOption.label}
              to={drawerOption.path}
              onCLick={smDown ? toggleDrawerOpen : undefined}
              />
            ))}       
            </List>
          </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(28)}>
        <Outlet/>
      </Box>
    </>
  );
};