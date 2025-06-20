import { useDispatch } from "react-redux";
import { beginLoading, endLoading } from "../store/loaderReducer";

export default function usePageLoader() {
    const dispatch = useDispatch();

    const startLoading = () => dispatch(beginLoading());
    const finishLoading = () => dispatch(endLoading());

    return [startLoading, finishLoading];
}