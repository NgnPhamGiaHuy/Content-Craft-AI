import { AuthDecorProps } from "@/types";

const REGISTER_DECOR_OBJECT : AuthDecorProps = {
    right: {
        imgSrc: "/register_decor.png",
        imgAlt: "Register decor background",
        width: 200,
        height: 200,
        className: "top-0 -left-24 blur-[20] rotate-[24deg] absolute z-10",
    },
    left: {
        imgSrc: "/register_decor_right.png",
        imgAlt: "Register decor right background",
        width: 320,
        height: 320,
        className: "top-1/10 -right-32 blur-[20] rotate-[-52deg] absolute z-[-1]"
    },
}

export default REGISTER_DECOR_OBJECT;