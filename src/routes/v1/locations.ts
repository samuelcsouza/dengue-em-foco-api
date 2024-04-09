import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";
import { LocationId, NewLocation } from "../../schemas/location";
import { locationService } from "../../config/services";

export const locationsRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  // new
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const newLocation: NewLocation = request.body as NewLocation;
    const location = await locationService.create(newLocation);

    reply.status(201).send(location);
  });

  // get by id
  fastify.get("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const response = { location: id };
    reply.status(200).send(response);
  });

  // mark as visited
  fastify.patch(
    "/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as LocationId;

      const response = { location: id };
      reply.status(200).send(response);
    }
  );

  // delete
  fastify.delete(
    "/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as LocationId;

      const response = { location: id };
      reply.status(200).send(response);
    }
  );

  // list all
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const response = { location: id };
    reply.status(200).send(response);
  });
};
