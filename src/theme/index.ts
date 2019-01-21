import * as styledComponents from "styled-components";

export {GlobalStyle} from './global.style';

/*
interface IThemePropsInterface {
    color?: string;
}
*/

const {
    default: styled,
    css,
    keyframes,
    ThemeProvider
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export interface IThemeInterface {
    [key: string]: string;
    base: string;
    primary: string;
    secondary: string;
    grey: string;
    success: string;
    alert: string;
    error: string;
}

export const defaultLabel = 'base';

export const theme: IThemeInterface = {
    key: defaultLabel,
    base: "#FFFFFF",
    primary: "#39618A",
    secondary: "#395675",
    grey: "#CFD7DF",
    success: "#507F1B",
    alert: "#E78D1C",
    error: "#DD4848",
};

export default styled;
export {css, keyframes, ThemeProvider};