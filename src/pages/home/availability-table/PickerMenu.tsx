import React from "react";

import { ClickAwayListener, Grow, MenuItem, MenuList, Paper, Popper } from "@material-ui/core";

const options = ["Talán", "Jó", "Nem jó"];

interface PickerMenuProps {
  anchor: React.MutableRefObject<any>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  selectedIndex: number;
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export const PickerMenu: React.FC<PickerMenuProps> = ({
  anchor,
  open,
  setOpen,
  selectedIndex,
  setSelectedIndex
}) => {
  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
  };

  const handleClose = (event: any) => {
    if (anchor.current && anchor.current!.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Popper open={open} anchorEl={anchor.current} transition>
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === "bottom" ? "center top" : "center bottom"
          }}
        >
          <Paper id="menu-list-grow">
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList>
                {options.map((option, index) => (
                  <MenuItem
                    key={option}
                    selected={index === selectedIndex}
                    onClick={event => handleMenuItemClick(event, index)}
                  >
                    {option}
                  </MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
