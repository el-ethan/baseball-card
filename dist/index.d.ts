import { FunctionComponent } from 'react';
interface BaseballCardProps {
    name: string;
    teamName?: string;
    imgPath: string;
    position?: string;
    teamColors: {
        primary: string;
        secondary: string;
    };
}
export declare const BaseballCard: FunctionComponent<BaseballCardProps>;
export {};
