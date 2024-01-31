import React from 'react';
import { Introduction } from './Introduction';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Skills } from './Skills';
import { Page } from '../chrome/Page';

export function PortfolioPage() {
    return (
        <Page>
            <Introduction />
            <Experience />
            <Projects />
            <Skills />
        </Page>
    );
}
