import React, { FunctionComponent } from 'react';
import { css } from 'emotion';


interface BaseballCardProps {
    name: string;
    imgPath: string;
    position?: string;
    teamColors: { primary: string, secondary: string };
}

export const BaseballCard:FunctionComponent<BaseballCardProps> = ({name, imgPath, teamColors, position}) => {
    return (
        <div className={css`
            display: flex;
            background-color: ${teamColors.primary};
            justify-content: space-between;
            align-items: center;
            flex-flow: column;
            border: 5px solid ${teamColors.secondary};
            width: 450px;
            height: 650px;
            padding: 3em;
        `}>
            <Picture pictureUrl={imgPath} color={teamColors.secondary}></Picture>
            <NameHeader name={name} color={teamColors.secondary}></NameHeader>
            {position && <PositionHeader position={position} color={teamColors.secondary}></PositionHeader>}
        </div>
    );
}

const Picture = ({pictureUrl, color}: {pictureUrl: string, color: string}) => {
    return (
        <div className={css`
            border: 3px solid ${color};
            height: 650px;
            width: 100%;
            background-image: url(${pictureUrl});
            background-size: 900px;
            background-position: center;
        `}>
        </div>
    )
}

const NameHeader = ({name, color}: {name: string, color: string}) => {
    return (
        <span className={css`
            align-self: flex-start;
            color: ${color};
            font-size: 2em;
            font-weight: bold;
        `}>
            {name}
        </span>
    );
};

const PositionHeader = ({position, color}: {position: string, color: string}) => {
    return (
        <em className={css`
            align-self: flex-start;
            color: ${color};
            font-size: 1.5em;
        `}>
            {position}
        </em>
    )
}