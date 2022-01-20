import { Button, Htag, P } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Hedline 1</Htag>
      <Button appearance="primary" arrow="right">Button</Button>
      <Button appearance="ghost" arrow="down">Button</Button>

      <P>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum praesentium, delectus voluptatum atque beatae odit quod ipsa corporis hic molestiae sint quisquam velit. Alias possimus placeat dignissimos nam quasi hic.</P>

      <P size="sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ipsa accusantium fuga obcaecati officiis ab dolorum voluptate et, voluptatibus quam cupiditate nesciunt exercitationem, perspiciatis ex? Saepe nesciunt reiciendis provident maiores.</P>

      <P size="md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt eligendi sequi aspernatur assumenda aut debitis eius delectus consequatur officia, sed libero tempora rem cupiditate iusto unde, laboriosam facere veritatis?</P>

      <P size="lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem sunt eligendi sequi aspernatur assumenda aut debitis eius delectus consequatur officia, sed libero tempora rem cupiditate iusto unde, laboriosam facere veritatis?</P>
    </>
  );
}
