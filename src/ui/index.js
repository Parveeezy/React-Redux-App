import {styled, Button} from "@mui/material";

export const CustomButton = styled(Button)(({margin}) => ({
    size: 'medium',
    marginLeft: 5,
    fontWeight: 600,
    margin: margin,
}))
