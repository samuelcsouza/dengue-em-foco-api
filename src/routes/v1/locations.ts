import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyPluginAsync,
} from "fastify";
import { LocationService } from "../../services/locationService";
import { LocationId, NewLocation } from "../../schemas/location";

const locationService = new LocationService();

export const locationsRoute: FastifyPluginAsync = async (
  fastify: FastifyInstance
): Promise<void> => {
  fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
    const newLocation: NewLocation = request.body as NewLocation;
    const location = await locationService.create(newLocation);

    reply.status(201).send(location);
  });

  fastify.get("/:id", async (request: FastifyRequest, reply: FastifyReply) => {
    const { id } = request.params as LocationId;

    const response = { location: id };
    reply.status(200).send(response);
  });
};
