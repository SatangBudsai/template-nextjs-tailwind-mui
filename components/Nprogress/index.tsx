import { Router } from "next/router";
import NProgress from "nprogress";

// Start progress indicator when route change starts
Router.events.on("routeChangeStart", () => {
    NProgress.start();
});

// Stop progress indicator when route change completes
Router.events.on("routeChangeComplete", () => {
    NProgress.done();
});

// Stop progress indicator when route change errors occur
Router.events.on("routeChangeError", () => {
    NProgress.done();
});

type Props = {
    children: React.ReactNode
}

const index = (props: Props) => {
    return (
        <div>{props.children}</div>
    )
}

export default index