import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Testimonials } from '../components/testimonials/testimonials'

export default {
    /* ao usar o 'Testimonial/algumaCoisa' quer dizer que o componente vai ficar 
    na pasta 'Testimonial' e o nome do componente vai ser 'algumaCoisa'

    da pra agrupar componentes por pastas dessa forma.
    */
    title: 'Testimonial/Testimonials',
    component: Testimonials,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Testimonials>;

const Template: ComponentStory<typeof Testimonials> = (args) => <Testimonials />;

export const Estado1 = Template.bind({});
