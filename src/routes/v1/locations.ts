import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";
import {
  LocationId,
  LocationPagination,
  NewLocation,
} from "../../schemas/location";
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

    const location = await locationService.get(id);

    reply.status(200).send(location);
  });

  // mark as visited
  fastify.patch(
    "/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as LocationId;

      const response = await locationService.markAsVisited(id);
      reply.status(200).send(response);
    }
  );

  // delete
  fastify.delete(
    "/:id",
    async (request: FastifyRequest, reply: FastifyReply) => {
      const { id } = request.params as LocationId;

      const isRemoved = await locationService.delete(id);

      const response = {
        deleted: isRemoved,
      };

      reply.status(200).send(response);
    }
  );

  // list all
  fastify.get("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const { skip, limit } = request.query as LocationPagination;

    const locations = await locationService.list(Number(skip), Number(limit));
    reply.status(200).send(locations);
  });
};
