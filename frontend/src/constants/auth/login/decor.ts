import { AuthDecorProps } from "@/types";

const LOGIN_DECOR_OBJECT : AuthDecorProps = {
    right: {
        imgSrc: "/login_decor.png",
        imgAlt: "Login decor background",
        width: 200,
        height: 200,
        className: "top-0 -left-24 blur-[20] rotate-[-52deg] absolute z-10",
    },
    left: {
        imgSrc: "/login_decor_right.png",
        imgAlt: "Login decor right background",
        width: 320,
        height: 320,
        className: "top-1/10 -right-32 blur-[20] rotate-[-52deg] absolute z-[-1]"
    },
}

export default LOGIN_DECOR_OBJECT;