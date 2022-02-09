import { withLayout } from '../layout/Layout';

import { H } from '../components';

export const Error500 = (): JSX.Element => <H>Ошибка 500</H>;

export default withLayout(Error500);
