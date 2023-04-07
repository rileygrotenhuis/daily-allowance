import { z } from 'zod';

class ExampleRequest {
  createAndUpdateExample = (payload) => {
    const schema = z.object({
      name: z.string(),
      description: z.string().optional(),
    });

    return schema.parse(payload);
  };
}

export default ExampleRequest;
