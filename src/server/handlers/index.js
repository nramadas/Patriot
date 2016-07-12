import frontpage from './frontpage';
import searchUsers from './searchUsers';
import login from './login';
import register from './register';

export default (router, models) => {
  router.get('/', frontpage(models));
  router.get('/searchUsers', searchUsers(models));
  router.post('/login', login(models));
  router.post('/register', register(models));
}
