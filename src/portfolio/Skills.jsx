import Tooltip from '@mui/material/Tooltip';
import React from 'react';

const SKILL_ICON_SIZE = '25rem';

export function SkillIcon({ icon, label }) {
    return (
        <Tooltip title={label} arrow>
            {icon}
        </Tooltip>
    );
}

export function JavaScriptSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/javascript.png"
                    alt="javascript logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Javascript"
        />
    );
}

export function JavaSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/java.png"
                    alt="java logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Java"
        />
    );
}

export function PythonSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/python.png"
                    alt="python logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Python"
        />
    );
}

export function TensorflowSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/tensorflow.png"
                    alt="tensorflow logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Tensorflow"
        />
    );
}

export function PostmanSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/postman.png"
                    alt="postman logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Postman"
        />
    );
}

export function AndroidSkill() {
    return (
        <SkillIcon
            icon={
                <img
                    src="./icons/android.png"
                    alt="android logo"
                    height={SKILL_ICON_SIZE}
                />
            }
            label="Android"
        />
    );
}
