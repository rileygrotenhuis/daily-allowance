import ExampleModel from '../models/ExampleModel';
import ExampleRequest from '../requests/ExampleRequest';

class ExampleController {
  exampleModel = new ExampleModel();
  exampleRequest = new ExampleRequest();

  list = async (req, res) => {
    try {
      const examples = await this.exampleModel.list();

      return res.status(200).json({ status: 200, data: examples });
    } catch (e) {
      return res.status(400).json({ error: 400, message: e });
    }
  };

  get = async (req, res) => {
    try {
      const { id } = req.query;

      const example = await this.exampleModel.get(id);

      return res.status(200).json({ status: 200, data: example });
    } catch (e) {
      return res.status(400).json({ error: 400, message: e });
    }
  };

  create = async (req, res) => {
    try {
      const payload = this.exampleRequest.createAndUpdateExample(
        JSON.parse(req.body)
      );

      const example = await this.exampleModel.create(payload);

      return res.status(201).json({ status: 201, data: example });
    } catch (e) {
      return res.status(400).json({ error: 400, message: e });
    }
  };

  update = async (req, res) => {
    try {
      const { id } = req.query;
      const payload = this.exampleRequest.createAndUpdateExample(
        JSON.parse(req.body)
      );

      const example = await this.exampleModel.update(id, payload);

      return res.status(200).json({ status: 200, data: example });
    } catch (e) {
      return res.status(400).json({ error: 400, message: e });
    }
  };

  destroy = async (req, res) => {
    try {
      const { id } = req.query;

      await this.exampleModel.destroy(id);

      return res.status(204).json('');
    } catch (e) {
      return res.status(400).json({ error: 400, message: e });
    }
  };
}

export default ExampleController;
