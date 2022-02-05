import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';

import { Button, H, Input, P, Rating, Tag, Textarea } from '../components';
import { withLayout } from '../layout/Layout';
import { IMenuItem } from '../interfaces/menu.interface';
import { API } from '../helpers/api';

function Home(): JSX.Element {
  const [rating, setRating] = useState<number>(3);

  return (
    <>
      <H tag="h1">Headline 1</H>
      <H>Headline 1 empty</H>
      <H tag="h2">Headline 2</H>
      <H tag="h3">Headline 3</H>

      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>

      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum praesentium, delectus voluptatum atque beatae odit quod ipsa corporis hic molestiae sint quisquam velit. Alias possimus placeat dignissimos nam quasi hic.</P>

      <P size="sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsa accusantium fuga obcaecati officiis ab dolorum voluptate et, voluptatibus quam cupiditate nesciunt exercitationem, perspiciatis ex? Saepe nesciunt reiciendis provident maiores.</P>

      <P size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt eligendi sequi aspernatur assumenda aut debitis eius delectus consequatur officia, sed libero tempora rem cupiditate iusto unde, laboriosam facere veritatis?</P>

      <P size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt eligendi sequi aspernatur assumenda aut debitis eius delectus consequatur officia, sed libero tempora rem cupiditate iusto unde, laboriosam facere veritatis?</P>

      <Tag className="test-class-name">Ghost</Tag>
      <Tag color="gray" title="tag-title">Gray</Tag>
      <Tag color="primary">Primary</Tag>
      <Tag size="md" color="green">Middle</Tag>
      <Tag size="sm" color="red">Small</Tag>
      <Tag size="md" color="red" href="#" className="test-class-name">Link</Tag>

      <Rating className="test-class-name" rating={2} />
      <Rating rating={rating} isEditable setRating={setRating} />
      <Input placeholder='placeholder' />
      <Textarea placeholder='placeholder' />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory
  });

  return {
    props: {
      menu,
      firstCategory,
    }
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
