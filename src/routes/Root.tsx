import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { usePageLoader } from "../hooks";
import { useEffect } from "react";

export default function Root() {
	const isLoading = useSelector((state: RootState) => state.loader.loaderState === "loading");
	const navigation = useNavigation();
    const [startLoading, finishLoading] = usePageLoader();

    useEffect(() => {
        if(navigation.state === "loading") startLoading();
        else finishLoading();
    }, [navigation.state]);

    return (
        <>
            {isLoading && <Loader/>}
            <Outlet />
        </>
    );
}
