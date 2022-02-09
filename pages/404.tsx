import { withLayout } from '../layout/Layout';

import { H } from '../components';

export const Error404 = (): JSX.Element => <H>Ошибка 404</H>;

export default withLayout(Error404);
