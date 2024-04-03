import {
  fastify,
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";
import { LocationService } from "../../services/locationService";
import { NewLocation } from "../../schemas/location";

const locationService = new LocationService();

export const locationsRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const newLocation = request.body as NewLocation;
    const add = await locationService.create(newLocation);

    reply.status(201).send(add);
  });

  fastify.get("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as any;

    const response = { location: id };
    reply.status(200).send(response);
  });
};
