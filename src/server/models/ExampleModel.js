import prisma from '@/config/prisma';

class ExampleModel {
  list = async () => {
    return await prisma.example.findMany();
  };

  get = async (id) => {
    return await prisma.example.findFirst({ where: { id: parseInt(id) } });
  };

  create = async (payload) => {
    return await prisma.example.create({
      data: payload,
    });
  };

  update = async (id, payload) => {
    return await prisma.example.update({
      where: { id: parseInt(id) },
      data: payload,
    });
  };

  destroy = async (id) => {
    return await prisma.example.delete({
      where: { id: parseInt(id) },
    });
  };
}

export default ExampleModel;
