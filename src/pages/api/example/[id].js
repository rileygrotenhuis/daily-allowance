import ExampleController from '@/server/controllers/ExampleController';
import RoutingUtility from '@/server/util/RoutingUtility';
import UserModel from '@/server/models/UserModel';

const controller = new ExampleController();
const routingUtility = new RoutingUtility();
const userModel = new UserModel();

const routeMappings = {
  GET: controller.get,
  POST: routingUtility.restrictRequestMethod,
  PUT: controller.update,
  DELETE: controller.destroy,
};

const handler = async (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.startsWith('Bearer ')
      ? authHeader.substring(7)
      : '';
    const user = await userModel.checkUserAuthentication(token);

    if (user) {
      return await routeMappings[req.method](req, res);
    }
  }

  return res.status(401).json({ error: 'Unauthorized' });
};

export default handler;
