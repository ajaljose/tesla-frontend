
import { useNavigate } from "react-router-dom";
import { PATHS } from "./constants";

// Custom hook to get a handler for home click
export const useHandleHomeClick = () => {
    const navigate = useNavigate();
    return () => {
        navigate(PATHS.LANDING);
    };
};