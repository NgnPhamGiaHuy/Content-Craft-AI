export interface AuthDecorItem {
    imgSrc: string;
    imgAlt: string;
    width: number;
    height: number;
    className: string;
}

export interface AuthDecorProps {
    right: AuthDecorItem;
    left: AuthDecorItem;
}