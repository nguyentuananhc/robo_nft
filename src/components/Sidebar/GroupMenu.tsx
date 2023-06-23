import { ExpandLess } from '@mui/icons-material'
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
	styled,
} from '@mui/material'
import React, { useState } from 'react'
import { CustomListItem, CustomListItemButton, MenuItem, iconStyle } from '.'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const GroupCustomListItemButton = styled(ListItemButton)(() => {
	return {
		'&:hover': {
			background: '#2455EA !important',
		},
		borderRadius: '6px',
	  color: '#BFD7FE',
	  fontWeight: 500,
	  fontSize: '14px',
	  lineHeight: '18px',
	}
})

export const GroupMenu = ({ item }: { item: MenuItem }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen((current) => {
      return !current
    })
  }

  return (
    <React.Fragment>
      <CustomListItem
        disablePadding
        style={{
          marginBottom: open ? '0px' : '12px',
        }}
      >
        <CustomListItemButton
          onClick={handleToggle}
          style={{
            ...(open && {
              background: '#172154',
              borderBottomLeftRadius: '0px',
              borderBottomRightRadius: '0px',
            }),
          }}
          {...(item?.children ? {} : { component: 'a', href: item.url })}
        >
          <Box
            style={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'nowrap',
            }}
          >
            <Box
              style={{
                flexGrow: 1,
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap',
              }}
            >
              <ListItemIcon style={{ minWidth: '18px', marginRight: 8 }}>
                <img src={item.icon} style={iconStyle} />
              </ListItemIcon>
              <ListItemText primary={item.title} />
            </Box>
            {open ? (
              <ExpandLess style={iconStyle} />
            ) : (
              <ArrowForwardIosIcon style={iconStyle} />
            )}
          </Box>
        </CustomListItemButton>
      </CustomListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item?.children?.map((child, index) => {
            return (
              <CustomListItem
								key={index}
                disablePadding
                style={{
                  marginBottom:
                    index === (item?.children?.length ?? 0) - 1
                      ? '12px'
                      : '0px',
                }}
              >
                <GroupCustomListItemButton
                  style={{
                    ...(open && {
                      background: '#1E338A',
                      borderRadius: 0,
                      ...(index === (item?.children?.length ?? 0) - 1
                        ? {
                            borderBottomLeftRadius: '6px',
                            borderBottomRightRadius: '6px',
                          }
                        : {}),
                    }),
                  }}
                  {...(child?.children ? {} : { component: 'a', href: child.url })}
                >
                  <Box
                    style={{
                      flexGrow: 1,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'nowrap',
											paddingLeft: 22,
                    }}
                  >
                    <Box
                      style={{
                        flexGrow: 1,
                        display: 'flex',
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexWrap: 'nowrap',
                      }}
                    >
                      <ListItemIcon
                        style={{ minWidth: '18px', marginRight: 8 }}
                      >
                        <img src={child.icon} style={iconStyle} />
                      </ListItemIcon>
                      <ListItemText primary={child.title} />
                    </Box>
                    <ArrowForwardIosIcon style={iconStyle} />
                  </Box>
                </GroupCustomListItemButton>
              </CustomListItem>
            )
          })}
        </List>
      </Collapse>
    </React.Fragment>
  )
}
