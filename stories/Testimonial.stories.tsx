import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Testimonial } from '../components/testimonials/testimonial'

export default {
    /* ao usar o 'Testimonial/algumaCoisa' quer dizer que o componente vai ficar 
    na pasta 'Testimonial' e o nome do componente vai ser 'algumaCoisa'

    da pra agrupar componentes por pastas dessa forma.
    */
    title: 'Testimonial/Testimonial',
    component: Testimonial,
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' },
    },
} as ComponentMeta<typeof Testimonial>;

const Template: ComponentStory<typeof Testimonial> = (args) => <Testimonial
 body={args.body}
 name={args.name}
 role={args.role}
/>;

export const Estado1 = Template.bind({});
